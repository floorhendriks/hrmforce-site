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

// Geeft hetzelfde pad in de andere taal (voor de taalwissel).
export function switchLocalePath(url, toLang) {
  let p = url.pathname;
  const seg = p.split("/")[1];
  if (PREFIXED.includes(seg)) p = p.slice(seg.length + 1) || "/";
  return toLang === "nl" ? p : "/" + toLang + p;
}
