// Helpers voor meertaligheid.
import { ui, defaultLang, languages, BRONTALEN } from "./ui.js";
import { variantenVoor } from "../data/slugvarianten.js";
import { alleenBrontaal } from "./alleen-brontaal.js";

// Talen met een eigen URL-prefix (Nederlands staat op de root). Volgt
// languages in ui.js, zodat een nieuwe taal maar op een plek wordt gezet.
export const PREFIXED = Object.keys(languages).filter((l) => l !== defaultLang);

// Bepaal de taal uit de URL: /de/... = de, /fr/... = fr, anders nl.
export function getLangFromUrl(url) {
  const seg = url.pathname.split("/")[1];
  return PREFIXED.includes(seg) ? seg : "nl";
}

// Geeft een vertaalfunctie t("nav.shop") voor de gekozen taal.
export function useTranslations(lang) {
  return function t(key) {
    return ui[lang]?.[key] ?? ui[defaultLang][key] ?? key;
  };
}

// Zet een NL-pad om naar het juiste pad voor de gekozen taal.
//   localizePath("/shop/", "de") => "/de/shop/"
/**
 * Waar de knop "gratis demo" heen moet. De aparte demopagina bestaat alleen in
 * het Nederlands; andere talen houden de contactpagina.
 */
export function demoPath(lang) {
  return lang === "nl" || !lang ? "/demo/" : localizePath("/contact/", lang);
}

export function localizePath(path, lang) {
  if (lang === "nl" || !lang) return path;
  // Bestaat de pagina alleen in de brontalen, dan krijgt een taal daarbuiten de
  // Engelse versie. Een Zweedse bezoeker heeft daar meer aan dan aan de
  // Nederlandse, en Engels bestaat voor al die pagina's. Zie
  // src/i18n/alleen-brontaal.js.
  if (!BRONTALEN.includes(lang) && alleenBrontaal(path)) return "/en" + path;
  return "/" + lang + path;
}

// Paden die in ALLE 5 prefixtalen (en/de/fr/es/ro) bestaan. Alleen deze mogen
// een taalprefix krijgen; andere paden vallen terug op de NL-versie zodat er
// nooit een 404 ontstaat bij taalwissel.
export const LOCALIZED_PAGES = new Set([
  "/", "/online-assessments/", "/hrm-oplossingen/", "/advies/", "/over-ons/",
  "/contact/", "/shop/", "/assessment-overzicht/", "/tarieven/", "/roi-rekentool/",
  "/klantcases/", "/kenniscentrum/", "/trust/", "/integraties/", "/voorbereiding/",
  "/support/", "/support/f-a-q/", "/wetenschappelijke-verantwoording/", "/begrippenlijst/", "/voor-kandidaten/", "/testkiezer/", "/whitepapers/", "/toepassingen/", "/vacatures/", "/vergelijking/", "/rondleiding/", "/afrekenen/", "/bestelling-gelukt/", "/documenten/",
  // Deze twee adviespagina's worden wel in elke taal gebouwd.
  "/advies/assessments/", "/advies/trainingen/",
]);

// Assessment-detailpagina's (/assessments/<slug>/) zijn in alle talen gelokaliseerd.
function isLocalizedAssessment(path) {
  return /^\/assessments\/[^/]+\/$/.test(path);
}

// De advies- en oplossingendetailpagina's worden ook in elke taal gebouwd, uit
// src/data/advies-detail.js en src/data/oplossingen.js. De paar pagina's die
// alleen uit Sanity komen staan in alleen-brontaal.js en worden hierboven al
// naar het Engels gestuurd.
function isLocalizedSectie(path) {
  return /^\/(?:advies|hrm-oplossingen)\/[^/]+\/$/.test(path);
}

// Menu-/interne link: localiseert alleen als de doelpagina in die taal bestaat,
// anders NL-fallback. Voorkomt 404's bij nog niet vertaalde pagina's.
export function navHref(path, lang, validPaths) {
  if (lang === "nl") return path;
  // localizePath stuurt pagina's die alleen in de brontalen bestaan naar de
  // Engelse versie. Die bestaat zeker, dus daar is verder niets te controleren.
  const target = localizePath(path, lang);
  if (target === "/en" + path) return target;
  if (validPaths) {
    const valid = validPaths instanceof Set ? validPaths : new Set(validPaths);
    return valid.has(target) ? target : path; // localiseer als vertaling bestaat, anders NL
  }
  if (LOCALIZED_PAGES.has(path) || isLocalizedAssessment(path) || isLocalizedSectie(path)) return target;
  return path; // NL-fallback
}

// Pagina's die alleen in het Nederlands bestaan, maar waarvoor elke taal een
// gelijkwaardige pagina heeft. Een Deense bezoeker komt zo niet op een
// Nederlandse pagina uit.
export const NL_VERVANGERS = {
  "/oefen-assessment-maken/": "/oefentest/",
};

// Zet een bestaand (mogelijk NL) pad om naar de huidige taal als die versie
// bestaat; anders de NL-basis. Voor kaart-/lijstlinks in componenten.
export function localizeExisting(path, lang, validPaths) {
  if (!path || lang === "nl") return path;
  const valid = validPaths instanceof Set ? validPaths : new Set(validPaths);
  const seg = path.split("/")[1];
  let base = PREFIXED.includes(seg) ? path.slice(seg.length + 1) || "/" : path;
  // Bestaat de pagina alleen in het Nederlands, dan de gelijkwaardige pagina.
  if (NL_VERVANGERS[base] && valid.has("/" + lang + NL_VERVANGERS[base])) base = NL_VERVANGERS[base];
  // Pagina's met een eigen slug per taal: /persoonlijkheidstest/ heet in het
  // Zweeds /sv/personality-test/. Zonder deze stap viel die link terug op het
  // Nederlands, terwijl de vertaling gewoon bestaat.
  const variant = variantenVoor(base);
  if (variant && variant[lang] && valid.has(variant[lang])) return variant[lang];
  // Pagina's die alleen in de brontalen bestaan meteen naar het Engels.
  if (!BRONTALEN.includes(lang) && alleenBrontaal(base)) {
    const en = "/en" + base;
    if (valid.has(en)) return en;
  }
  const localized = "/" + lang + base;
  if (valid.has(localized)) return localized;
  // Bestaat de pagina alleen in de brontalen, dan het Engels in plaats van het
  // Nederlands, net als in localizePath.
  const engels = "/en" + base;
  return !BRONTALEN.includes(lang) && valid.has(engels) ? engels : base;
}

// Hernoemde assessment-slugs (oude WordPress-slug -> nieuwe slug).
const ASSESS_SLUG_MAP = {
  "big-fifty": "big-five",
  "cognitieve-capaciteitentest": "cognitieve-test",
  "motivation": "drijfverentest",
};
// Sectie-hoofdpagina's voor een nette fallback per rubriek.
const SECTION_ROOTS = {
  "advies": "/advies/", "hrm-oplossingen": "/hrm-oplossingen/",
  "assessments": "/online-assessments/", "online-assessments": "/online-assessments/",
  "kenniscentrum": "/kenniscentrum/", "shop": "/shop/", "support": "/support/",
  "over-ons": "/over-ons/", "tarieven": "/tarieven/",
  "winkel": "/shop/", "product": "/shop/", "roduct": "/shop/", "winkelmand": "/shop/",
};

// Herschrijft oude/gebroken interne links in gemigreerde HTML naar een geldige
// bestemming: bekende oude patronen worden geremapt; anders val terug op de
// sectie-hoofdpagina en uiteindelijk het kenniscentrum-overzicht in dezelfde
// taal. Voorkomt 404's in artikel- en paginateksten.
/**
 * Afbeeldingen die bij de migratie naar de oude WordPress-site bleven wijzen,
 * naar de eigen map halen. Zo hangt de site niet aan een domein dat vervangen wordt.
 */
export function eigenMedia(html) {
  return String(html || "").replace(/https:\/\/(?:www\.)?hrmforce\.com\/wp-content\//g, "/media/wp-content/");
}

export function sanitizeBodyLinks(html, lang, validPaths) {
  if (!html) return html;
  const valid = validPaths instanceof Set ? validPaths : new Set(validPaths);
  const kcFallback = localizePath("/kenniscentrum/", lang);
  // Zet een (geldig) pad om naar de huidige taal als die versie bestaat,
  // anders NL-basis. Voorkomt dat body-links naar NL blijven wijzen.
  const loc = (p) => (lang === "nl" ? p : localizeExisting(p, lang, valid));
  return html.replace(/href="(\/[^"]*)"/g, (m, raw) => {
    if (raw.startsWith("//")) return m; // protocol-relatief/extern
    // e-mailadres per ongeluk als pad (bv. /contact/service@x.com) => mailto
    if (raw.includes("@")) return `href="mailto:${raw.slice(raw.lastIndexOf("/") + 1)}"`;
    // percent-encoded of echte query (?page_id=...) => onbruikbaar
    if (/%3f/i.test(raw) || raw.includes("?")) return `href="${kcFallback}"`;
    const hashIdx = raw.indexOf("#");
    const hash = hashIdx !== -1 ? raw.slice(hashIdx) : "";
    let path = hashIdx !== -1 ? raw.slice(0, hashIdx) : raw;
    // bestand met extensie (.pdf/.svg/...) niet aanraken
    const last = path.split("/").pop();
    if (last && last.includes(".")) return m;
    if (!path.endsWith("/")) path += "/";
    if (valid.has(path)) return `href="${loc(path)}${hash}"`; // geldig -> naar juiste taal
    // remap: /assessment/ (enkelvoud) => /assessments/
    let cand = path.replace(new RegExp("^(/(?:" + PREFIXED.join("|") + "))?/assessment/"), "$1/assessments/");
    cand = cand.replace(/\/assessments\/preselectie\//, "/assessments/");
    cand = cand.replace(/\/assessments\/([^/]+)\//, (mm, slug) =>
      `/assessments/${ASSESS_SLUG_MAP[slug] || slug}/`);
    if (valid.has(cand)) return `href="${loc(cand)}${hash}"`;
    // sectie-fallback in dezelfde taal
    const segs = path.split("/").filter(Boolean);
    const li = PREFIXED.includes(segs[0]) ? 1 : 0;
    const section = segs[li];
    if (section && SECTION_ROOTS[section]) {
      const target = localizePath(SECTION_ROOTS[section], lang);
      if (valid.has(target)) return `href="${target}"`;
    }
    return `href="${kcFallback}"`;
  });
}
// Geeft hetzelfde pad in de andere taal (voor de taalwissel). Bestaat de pagina
// niet in de doeltaal, dan val terug op de sectie-hoofdpagina en anders de
// homepage van die taal, zo leidt de taalwissel nooit naar een 404.
export function switchLocalePath(url, toLang, validPaths) {
  let p = url.pathname;
  // Pagina's met een eigen slug per taal: daar is de vertaling een ander pad.
  const variant = variantenVoor(p);
  if (variant && variant[toLang]) return variant[toLang];
  const seg = p.split("/")[1];
  if (PREFIXED.includes(seg)) p = p.slice(seg.length + 1) || "/";
  if (!p.endsWith("/")) p += "/";
  const target = localizePath(p, toLang);
  if (!validPaths) return target;
  const valid = validPaths instanceof Set ? validPaths : new Set(validPaths);
  if (valid.has(target)) return target;
  // sectie-fallback in de doeltaal
  const segs = p.split("/").filter(Boolean);
  const section = segs[0];
  if (section && SECTION_ROOTS[section]) {
    const secTarget = localizePath(SECTION_ROOTS[section], toLang);
    if (valid.has(secTarget)) return secTarget;
  }
  return localizePath("/", toLang); // homepage van de doeltaal
}
