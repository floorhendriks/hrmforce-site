// Vult de contentbestanden aan met talen die er nog niet in staan.
//
// De contentbestanden houden de talen die met de hand zijn geschreven of
// nagekeken (nl, en, de, fr, es, ro). Voor elke taal daarbuiten komt de tekst
// uit src/data/translations-content/<taal>.json, een map van de Nederlandse
// bron naar de vertaling. Zo blijven de bronbestanden leesbaar en groeit de
// repo niet met een kopie van elke tekst per taal.
//
// Gebruik in een contentbestand:
//
//   import { vulAan } from "./vertaal-inhoud.js";
//   export const shopContent = vulAan({ nl: {...}, en: {...}, ... });
//
// Wat er gebeurt bij het aanvullen:
//  - elke tekst wordt opgezocht in de vertaalmap; zonder treffer blijft de
//    Nederlandse tekst staan, zodat er nooit een lege pagina ontstaat;
//  - interne links in de tekst krijgen het taalvoorvoegsel, maar alleen voor
//    pagina's die in elke taal bestaan (zie LOKALISEERBAAR);
//  - sleutels die geen tekst bevatten (slug, href, src, icon) blijven zoals ze zijn.
//
// Dit bestand importeert met opzet niets uit de andere datafiles. Die
// importeren het namelijk zelf, en een kring van imports breekt de build.
// src/i18n/alleen-brontaal.js importeert zelf niets en kan dus wel.
import { ALLEEN_BRONTAAL } from "../i18n/alleen-brontaal.js";

// Vite zet deze aanroep tijdens de bouw om in een vaste lijst. Buiten Vite,
// zoals in scripts/hsf-translate-content.mjs dat de datafiles met kaal node
// inleest, bestaat import.meta.glob niet. Vandaar de try: daar blijft de lijst
// leeg en geeft vulAan de data onveranderd terug.
let VERTALINGEN = {};
try {
  VERTALINGEN = import.meta.glob("./translations-content/*.json", { eager: true });
} catch {
  VERTALINGEN = {};
}

// Paden die door de [lang]-routes in elke taal worden gebouwd. Zelfde lijst als
// LOCALIZED_PAGES in src/i18n/utils.js, hier herhaald om een importkring te
// vermijden. Een pad dat hier niet staat, houdt de Nederlandse link.
const LOKALISEERBAAR = new Set([
  "/", "/online-assessments/", "/hrm-oplossingen/", "/advies/", "/over-ons/",
  "/contact/", "/shop/", "/assessment-overzicht/", "/tarieven/", "/roi-rekentool/",
  "/klantcases/", "/kenniscentrum/", "/trust/", "/integraties/", "/voorbereiding/",
  "/support/", "/support/f-a-q/", "/wetenschappelijke-verantwoording/", "/begrippenlijst/",
  "/voor-kandidaten/", "/testkiezer/", "/whitepapers/", "/toepassingen/", "/vacatures/",
  "/vergelijking/", "/rondleiding/", "/afrekenen/", "/bestelling-gelukt/", "/documenten/",
]);

// Sleutels waarvan de waarde geen zin is maar een pad, een bestandsnaam of een code.
const GEEN_TEKST = new Set(["slug", "href", "url", "src", "icon", "key", "id", "beeld",
  "img", "image", "telHref", "mail", "tel", "locale", "lang", "code", "hreflang"]);

// Sleutels die een zoekopdracht of een technische waarde bevatten. Die mogen
// niet mee en moeten per taal opnieuw worden gezet, anders bouwt de pagina een
// zoekopdracht die naar de Nederlandse artikelen wijst of helemaal stukgaat.
//
// Het kenniscentrum staat in Sanity en bestaat alleen in de brontalen. Een taal
// daarbuiten krijgt daarom de Engelse artikelen te zien in plaats van een lege
// pagina. De links wijzen dan naar /en/kenniscentrum/, waar de artikelen echt
// staan; zo komt er geen dubbele inhoud onder een tweede adres.
const EN_ARTIKELEN = [
  "/en/kenniscentrum/", "/en/knowledge-center/", "/en/knowledge-centre/",
].map((p) => `string::startsWith(path, "${p}")`).join(" || ");
const PER_TAAL_ZELF = { sanityMatch: () => EN_ARTIKELEN };

const BRONTALEN = new Set(["nl", "en", "de", "fr", "es", "ro"]);

// Alle talen waarvoor een vertaalbestand bestaat, ook de brontalen.
const ALLE_VERTAALTALEN = Object.keys(VERTALINGEN)
  .map((p) => p.slice("./translations-content/".length, -".json".length));

// vulAan vult standaard alleen de talen buiten de brontalen aan. De teksten van
// de brontalen staan met de hand in de bronbestanden; die mogen niet door een
// machinevertaling worden overschreven. Bestanden waarvan de tekst alleen in
// het Nederlands bestaat, gebruiken vertaalAlles onderaan dit bestand.
const NIEUWE_TALEN = ALLE_VERTAALTALEN.filter((t) => !BRONTALEN.has(t));

function kaart(taal) {
  const mod = VERTALINGEN[`./translations-content/${taal}.json`];
  return mod ? (mod.default ?? mod) : null;
}

/** /shop/ wordt /hr/shop/. Pagina's die alleen in de brontalen bestaan gaan
 *  naar de Engelse versie, net als in src/i18n/utils.js. */
function linkVoorTaal(pad, taal) {
  if (ALLEEN_BRONTAAL.has(pad)) return "/en" + pad;
  return LOKALISEERBAAR.has(pad) || /^\/assessments\/[^/]+\/$/.test(pad) ||
    /^\/(?:advies|hrm-oplossingen)\/[^/]+\/$/.test(pad)
    ? "/" + taal + pad
    : pad;
}

const herschrijfLinks = (html, taal) =>
  String(html).replace(/href="(\/[^"#]*)"/g, (m, pad) => `href="${linkVoorTaal(pad, taal)}"`);

function zet(waarde, taal, map, sleutel = "") {
  if (typeof waarde === "string") {
    if (PER_TAAL_ZELF[sleutel]) return PER_TAAL_ZELF[sleutel](taal);
    if (GEEN_TEKST.has(sleutel)) return waarde;
    const vertaald = map[waarde] ?? waarde;
    return vertaald.includes('href="') ? herschrijfLinks(vertaald, taal) : vertaald;
  }
  if (Array.isArray(waarde)) return waarde.map((v) => zet(v, taal, map, sleutel));
  if (waarde && typeof waarde === "object") {
    const uit = {};
    for (const [k, v] of Object.entries(waarde)) uit[k] = zet(v, taal, map, k);
    return uit;
  }
  return waarde;
}

/** Is dit een object waarvan de sleutels taalcodes zijn? */
function isTaalblok(x) {
  if (!x || typeof x !== "object" || Array.isArray(x)) return false;
  const k = Object.keys(x);
  const taalk = k.filter((s) => BRONTALEN.has(s));
  return taalk.length >= 2 && taalk.length >= k.length - 1;
}

function vulBlok(blok, talen, sleutel = "") {
  // Een slug-blok is geen tekst maar een stuk url. Een nieuwe taal krijgt de
  // Engelse slug, want die is internationaal leesbaar, en anders de Nederlandse.
  const technisch = GEEN_TEKST.has(sleutel);
  const bron = technisch ? (blok.en ?? blok.nl) : (blok.nl ?? blok.en);
  if (bron === undefined) return blok;
  const uit = { ...blok };
  for (const taal of talen) {
    if (uit[taal] !== undefined) continue;
    if (technisch) { uit[taal] = bron; continue; }
    const map = kaart(taal);
    if (!map) continue;
    uit[taal] = zet(bron, taal, map);
  }
  return uit;
}

/**
 * Vult elk taalblok in de structuur aan, ook blokken die dieper zitten zoals
 * TESTHUBS.<hub>.i18n. Een taal die al in het bestand staat, blijft zoals hij is.
 * Zonder vertaalbestanden geeft dit de data onveranderd terug.
 *
 * @param {object} x        de data uit het contentbestand
 * @param {string[]} talen  standaard elke taal waarvoor een vertaalbestand bestaat
 */
export function vulAan(x, talen = NIEUWE_TALEN, diep = 0, sleutel = "") {
  if (!talen.length || !x || typeof x !== "object" || diep > 8) return x;
  if (isTaalblok(x)) return vulBlok(x, talen, sleutel);
  if (Array.isArray(x)) return x.map((v) => vulAan(v, talen, diep + 1, sleutel));
  const uit = {};
  for (const [k, v] of Object.entries(x)) uit[k] = vulAan(v, talen, diep + 1, k);
  return uit;
}

/**
 * Voor data die alleen in het Nederlands in de repo staat: geeft een kopie per
 * taal terug, { nl, en, de, ... }. Elke taal met een vertaalbestand krijgt de
 * vertaalde tekst. Een taal zonder vertaalbestand komt er niet in en valt in
 * het paginasjabloon terug op het Engels, zodat er nooit een Nederlandse
 * pagina onder een andere taal verschijnt.
 *
 * Buiten Vite (scripts/hsf-translate-content.mjs leest de datafiles met kaal
 * node) blijft het bij { nl, en }, allebei de Nederlandse tekst. Zo herkent het
 * vertaalscript dit als een taalblok en pakt het de bronteksten op.
 */
export function vertaalAlles(nl) {
  const uit = { nl };
  for (const taal of ALLE_VERTAALTALEN) {
    const map = kaart(taal);
    if (map) uit[taal] = zet(nl, taal, map);
  }
  if (uit.en === undefined) uit.en = nl;
  return uit;
}

/** De juiste taalversie uit een blok van vertaalAlles, met Engels als terugval. */
export function voorTaal(blok, taal) {
  return blok?.[taal] ?? blok?.en ?? blok?.nl;
}
