// De beelden uit de WordPress-migratie staan als webp in public/media.
// De artikelteksten uit Sanity en een deel van de datafiles verwijzen nog naar
// de oude .png- en .jpg-namen; deze helper zet die bij het bouwen om.
// Draai npm run hsf:media na het toevoegen van nieuwe media.
const PAT = /(\/media\/wp-content\/[^"'\s)]+?)\.(png|jpe?g)(?=["'\s)?]|$)/gi;

/** Eén URL naar zijn webp-variant. */
export const webpPad = (url) => (url || "").replace(PAT, "$1.webp");

/** Alle wp-content-verwijzingen in een stuk HTML naar webp. */
export const webpHtml = (html) => (html || "").replace(PAT, "$1.webp");
