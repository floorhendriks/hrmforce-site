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
  it: v(["#009246", "#FFFFFF", "#CE2B37"]),
  // Turkije: rood met witte halve maan en ster.
  tr: `<rect width="24" height="16" fill="#E30A17"/><circle cx="9" cy="8" r="4" fill="#fff"/><circle cx="10" cy="8" r="3.2" fill="#E30A17"/><polygon points="12.70,8.00 13.85,7.60 13.87,6.38 14.61,7.35 15.78,7.00 15.08,8.00 15.78,9.00 14.61,8.65 13.87,9.62 13.85,8.40" fill="#fff"/>`,
  fi: kruis("#FFFFFF", "#002F6C"),
  // Noorwegen: rood met wit-omrand blauw kruis.
  nb: `<rect width="24" height="16" fill="#BA0C2F"/><rect x="6" width="4" height="16" fill="#fff"/><rect y="6" width="24" height="4" fill="#fff"/><rect x="7" width="2" height="16" fill="#00205B"/><rect y="7" width="24" height="2" fill="#00205B"/>`,
  // Griekenland: blauw-witte banen met kruis in het kanton.
  el: `<rect width="24" height="16" fill="#0D5EAF"/>${[1,3,5,7].map((i) => `<rect y="${(i * 16) / 9}" width="24" height="${16 / 9}" fill="#fff"/>`).join("")}<rect width="${(16 / 9) * 5}" height="${(16 / 9) * 5}" fill="#0D5EAF"/><rect x="${16 / 9 * 2}" width="${16 / 9}" height="${(16 / 9) * 5}" fill="#fff"/><rect y="${16 / 9 * 2}" width="${(16 / 9) * 5}" height="${16 / 9}" fill="#fff"/>`,
  // Tsjechië: wit boven, rood onder, blauwe driehoek.
  cs: `<rect width="24" height="16" fill="#D7141A"/><rect width="24" height="8" fill="#fff"/><polygon points="0,0 12,8 0,16" fill="#11457E"/>`,
  uk: b(["#0057B7", "#FFD700"]),
  hu: b(["#CD2A3E", "#FFFFFF", "#436F4D"]),
  // Litouwen.
  lt: b(["#FDB913", "#006A44", "#C1272D"]),
  // Bulgarije.
  bg: b(["#FFFFFF", "#00966E", "#D62612"]),
  // Slowakije, met vereenvoudigd wapen.
  sk: `${b(["#FFFFFF", "#0B4EA2", "#EE1C25"])}<path d="M5 3.5h6v5.5c0 2.4-1.6 3.6-3 4.3-1.4-.7-3-1.9-3-4.3z" fill="#EE1C25" stroke="#fff" stroke-width=".5"/><path d="M7.6 5h.8v6h-.8zM6.6 6.3h2.8v.7H6.6zM6.9 8h2.2v.7H6.9z" fill="#fff"/><path d="M5.3 11.2c.9-.9 1.8-.9 2.7 0 .9-.9 1.8-.9 2.7 0-.6 1-1.6 1.6-2.7 2.1-1.1-.5-2.1-1.1-2.7-2.1z" fill="#0B4EA2"/>`,
  // Slovenië, met vereenvoudigd wapen.
  sl: `${b(["#FFFFFF", "#005DA4", "#ED1C24"])}<path d="M4.5 2.5h4v3.5c0 1.6-1 2.4-2 2.9-1-.5-2-1.3-2-2.9z" fill="#005DA4" stroke="#ED1C24" stroke-width=".4"/><path d="M4.8 6.4l1-1.2.7.8.7-.8 1 1.2z" fill="#fff"/>`,
  // Estland.
  et: b(["#0072CE", "#000000", "#FFFFFF"]),
  // Letland: karmijn-wit-karmijn 2:1:2.
  lv: `<rect width="24" height="16" fill="#9E3039"/><rect y="6.4" width="24" height="3.2" fill="#fff"/>`,
  // Kroatië, met schaakbord.
  hr: `${b(["#FF0000", "#FFFFFF", "#171796"])}${[0,1,2,3].map((r) => [0,1,2,3].map((k) => `<rect x="${9.6 + k * 1.2}" y="${4 + r * 1.2}" width="1.2" height="1.2" fill="${(r + k) % 2 ? "#fff" : "#FF0000"}"/>`).join("")).join("")}<rect x="9.6" y="4" width="4.8" height="4.8" fill="none" stroke="#171796" stroke-width=".3"/>`,
  // Servië.
  sr: b(["#C6363C", "#0C4076", "#FFFFFF"]),
  // Rusland.
  ru: b(["#FFFFFF", "#0039A6", "#D52B1E"]),
  // Portugal: groen-rood in de verhouding 2:3, zonder wapen.
  pt: `<rect width="24" height="16" fill="#DA291C"/><rect width="9.6" height="16" fill="#046A38"/>`,
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
