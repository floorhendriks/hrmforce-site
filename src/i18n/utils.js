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

// Geeft hetzelfde pad in de andere taal (voor de taalwissel).
export function switchLocalePath(url, toLang) {
  let p = url.pathname;
  const seg = p.split("/")[1];
  if (PREFIXED.includes(seg)) p = p.slice(seg.length + 1) || "/";
  return toLang === "nl" ? p : "/" + toLang + p;
}
