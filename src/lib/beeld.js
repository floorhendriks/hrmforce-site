// De beelden uit de WordPress-migratie staan als webp in public/media.
// De artikelteksten uit Sanity en een deel van de datafiles verwijzen nog naar
// de oude .png- en .jpg-namen; deze helper zet die bij het bouwen om.
// Draai npm run hsf:media na het toevoegen van nieuwe media.
const PAT = /(\/media\/wp-content\/[^"'\s)]+?)\.(png|jpe?g)(?=["'\s)?]|$)/gi;

/** Eén URL naar zijn webp-variant. */
export const webpPad = (url) => (url || "").replace(PAT, "$1.webp");

/** Alle wp-content-verwijzingen in een stuk HTML naar webp. */
export const webpHtml = (html) => (html || "").replace(PAT, "$1.webp");

/**
 * Beelden in artikelteksten uit Sanity missen vaak een alt-tekst: 731 van de
 * 35.527 beelden op de site. Een leeg alt-attribuut vertelt een schermlezer en
 * een zoekmachine niets over de afbeelding. Waar er geen staat vullen we de
 * titel van het artikel in. Dat is niet ideaal, maar wel waar, en beter dan
 * niets. Een bestaande alt-tekst, ook een bewust lege bij een sierbeeld dat
 * aria-hidden is, blijft staan.
 */
export function altAanvullen(html, alt) {
  const tekst = String(alt || "").replace(/"/g, "&quot;").trim();
  if (!tekst) return html || "";
  return String(html || "").replace(/<img\b[^>]*>/gi, (tag) => {
    if (/\balt\s*=/.test(tag) || /\baria-hidden\s*=/.test(tag)) return tag;
    return tag.replace(/\s*\/?>$/, (slot) => ` alt="${tekst}"${slot.trim().startsWith("/") ? " />" : ">"}`);
  });
}
