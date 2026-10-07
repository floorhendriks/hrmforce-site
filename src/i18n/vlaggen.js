/**
 * Vlaggen voor de taalwisselaar, als inline svg.
 *
 * Geen emoji: op Windows vallen die terug op twee letters, en dan staat er
 * "GB" in plaats van een vlag. Geen losse afbeeldingen: dat zou een extra
 * verzoek per vlag kosten. Deze tekeningen zijn elk een paar honderd tekens.
 *
 * De verhouding is 3:2 (viewBox 0 0 24 16), ook waar de echte vlag anders is.
 * Een vlag staat altijd naast de naam van de taal, nooit in plaats daarvan:
 * een vlag is een land en geen taal.
 */
const b = (kleuren) => kleuren
  .map((k, i) => `<rect y="${(i * 16) / kleuren.length}" width="24" height="${16 / kleuren.length}" fill="${k}"/>`)
  .join("");
const v = (kleuren) => kleuren
  .map((k, i) => `<rect x="${(i * 24) / kleuren.length}" width="${24 / kleuren.length}" height="16" fill="${k}"/>`)
  .join("");
/** Scandinavisch kruis: veld, dan het kruis iets links van het midden. */
const kruis = (veld, lijn) =>
  `<rect width="24" height="16" fill="${veld}"/>` +
  `<rect x="7" width="3" height="16" fill="${lijn}"/>` +
  `<rect y="6.5" width="24" height="3" fill="${lijn}"/>`;

export const VLAGGEN = {
  nl: b(["#AE1C28", "#FFFFFF", "#21468B"]),
  de: b(["#000000", "#DD0000", "#FFCE00"]),
  fr: v(["#002395", "#FFFFFF", "#ED2939"]),
  ro: v(["#002B7F", "#FCD116", "#CE1126"]),
  pl: b(["#FFFFFF", "#DC143C"]),
  da: kruis("#C8102E", "#FFFFFF"),
  sv: kruis("#006AA7", "#FECC00"),
  // Spanje: rood-geel-rood in de verhouding 1:2:1.
  es: `<rect width="24" height="16" fill="#AA151B"/><rect y="4" width="24" height="8" fill="#F1BF00"/>`,
  // Vereenvoudigde Union Jack: de diagonalen zonder de versprongen helften.
  en: `<rect width="24" height="16" fill="#012169"/>` +
      `<path d="M0 0 24 16M24 0 0 16" stroke="#FFFFFF" stroke-width="3.2"/>` +
      `<path d="M0 0 24 16M24 0 0 16" stroke="#C8102E" stroke-width="1.8"/>` +
      `<path d="M12 0v16M0 8h24" stroke="#FFFFFF" stroke-width="5.3"/>` +
      `<path d="M12 0v16M0 8h24" stroke="#C8102E" stroke-width="3.2"/>`,
};

/** De vlag als compleet svg-element, klaar om met set:html te plaatsen. */
export function vlagSvg(code) {
  const teken = VLAGGEN[code];
  if (!teken) return "";
  return `<svg viewBox="0 0 24 16" width="18" height="12" aria-hidden="true" focusable="false">${teken}</svg>`;
}
