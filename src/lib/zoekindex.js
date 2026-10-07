// De zoekindex van de header, op een plek waar zowel het JSON-bestand als de
// component hem kan opbouwen. De opbouw stond eerder in Header.astro.
import { routes } from "../i18n/ui.js";
import { PREFIXED } from "../i18n/utils.js";
import { navFor } from "../data/menu-content.js";

// Volgt de talenlijst, zodat de zoekindex van een nieuwe taal meteen klopt.
const PREFIX = new RegExp("^/(" + PREFIXED.join("|") + ")(/|$)");
const stripLang = (p) => {
  const m = p.match(PREFIX);
  return m ? p.slice(m[1].length + 1) : p;
};

const humanize = (p) => {
  const seg = p.replace(/\/$/, "").split("/").filter(Boolean).pop() || "";
  if (!seg) return "Home";
  return seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

export function zoekindexVoor(lang, validPaths) {
  const nav = navFor(lang);
  const labelOverride = {};
  nav.assessments.forEach((it) => { labelOverride[it.path] = it.label; });
  nav.solutions.forEach((g) => g.items.forEach((it) => { labelOverride[it.path] = it.label; }));
  nav.kennisbank.forEach((it) => { labelOverride[it.path] = it.label; });
  nav.about.forEach((it) => { labelOverride[it.path] = it.label; });
  labelOverride["/tarieven/"] = nav.labels.tarieven;
  labelOverride[routes.contact] = nav.contact;

  const voorTaal = validPaths.filter((p) => {
    if (p.includes("%3F")) return false;
    const isPrefixed = PREFIX.test(p);
    return lang === "nl" ? !isPrefixed : p.startsWith("/" + lang + "/");
  });

  const gezien = new Set();
  const index = [];
  for (const p of voorTaal) {
    const base = stripLang(p);
    if (base === "/") continue;
    if (gezien.has(p)) continue;
    gezien.add(p);
    index.push({ t: labelOverride[base] || humanize(base), u: p });
  }
  return index;
}
