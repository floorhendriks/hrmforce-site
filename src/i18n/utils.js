// Helpers voor meertaligheid.
import { ui, defaultLang } from "./ui.js";

// Talen met een eigen URL-prefix (Nederlands staat op de root).
export const PREFIXED = ["en", "de", "fr", "es", "ro"];

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
export function localizePath(path, lang) {
  return lang === "nl" ? path : "/" + lang + path;
}

// Paden die in ALLE 5 prefixtalen (en/de/fr/es/ro) bestaan. Alleen deze mogen
// een taalprefix krijgen; andere paden vallen terug op de NL-versie zodat er
// nooit een 404 ontstaat bij taalwissel.
export const LOCALIZED_PAGES = new Set([
  "/", "/online-assessments/", "/hrm-oplossingen/", "/advies/", "/over-ons/",
  "/contact/", "/shop/", "/assessment-overzicht/", "/tarieven/", "/roi-rekentool/",
  "/klantcases/", "/kenniscentrum/", "/trust/", "/integraties/", "/voorbereiding/",
  "/support/", "/support/f-a-q/",
]);

// Assessment-detailpagina's (/assessments/<slug>/) zijn in alle talen gelokaliseerd.
function isLocalizedAssessment(path) {
  return /^\/assessments\/[^/]+\/$/.test(path);
}

// Menu-/interne link: localiseert alleen als de doelpagina in die taal bestaat,
// anders NL-fallback. Voorkomt 404's bij nog niet vertaalde pagina's.
export function navHref(path, lang) {
  if (lang === "nl") return path;
  if (LOCALIZED_PAGES.has(path) || isLocalizedAssessment(path)) return "/" + lang + path;
  return path; // NL-fallback
}

// Hernoemde assessment-slugs (oude WordPress-slug -> nieuwe slug).
const ASSESS_SLUG_MAP = {
  "big-fifty": "big-five",
  "cognitieve-capaciteitentest": "cognitieve-test",
  "motivation": "drijfverentest",
  "ontwikkelmatrix": "ontwikkelassessment",
};
// Sectie-hoofdpagina's voor een nette fallback per rubriek.
const SECTION_ROOTS = {
  "advies": "/advies/", "hrm-oplossingen": "/hrm-oplossingen/",
  "assessments": "/online-assessments/", "online-assessments": "/online-assessments/",
  "kenniscentrum": "/kenniscentrum/", "shop": "/shop/", "support": "/support/",
  "over-ons": "/over-ons/", "tarieven": "/tarieven/",
};

// Herschrijft oude/gebroken interne links in gemigreerde HTML naar een geldige
// bestemming: bekende oude patronen worden geremapt; anders val terug op de
// sectie-hoofdpagina en uiteindelijk het kenniscentrum-overzicht in dezelfde
// taal. Voorkomt 404's in artikel- en paginateksten.
export function sanitizeBodyLinks(html, lang, validPaths) {
  if (!html) return html;
  const valid = validPaths instanceof Set ? validPaths : new Set(validPaths);
  const kcFallback = localizePath("/kenniscentrum/", lang);
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
    if (valid.has(path)) return `href="${path}${hash}"`; // al geldig
    // remap: /assessment/ (enkelvoud) => /assessments/
    let cand = path.replace(/^(\/(?:en|de|fr|es|ro))?\/assessment\//, "$1/assessments/");
    cand = cand.replace(/\/assessments\/preselectie\//, "/assessments/");
    cand = cand.replace(/\/assessments\/([^/]+)\//, (mm, slug) =>
      `/assessments/${ASSESS_SLUG_MAP[slug] || slug}/`);
    if (valid.has(cand)) return `href="${cand}${hash}"`;
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
// homepage van die taal — zo leidt de taalwissel nooit naar een 404.
export function switchLocalePath(url, toLang, validPaths) {
  let p = url.pathname;
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
