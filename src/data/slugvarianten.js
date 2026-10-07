// Pagina's waarvan de slug per taal verschilt, bijvoorbeeld
// /persoonlijkheidstest/ tegenover /en/personality-test/.
//
// De hreflang-regels in Base.astro leiden de vertalingen normaal af door er een
// taalprefix voor te zetten. Dat werkt hier niet, want het pad zelf verandert
// mee. Deze lijst koppelt de varianten daarom expliciet aan elkaar.
import { TESTHUBS } from "./testhubs.js";
import { THEMAPAGINAS } from "./themapaginas.js";
import { ONDERDELEN } from "./oefentest-ui.js";
import { VRAGENLIJSTEN } from "./oefenvragenlijst.js";
import { languages } from "../i18n/ui.js";

const TALEN = Object.keys(languages);

const groepen = [...Object.values(TESTHUBS), ...Object.values(THEMAPAGINAS)]
  .filter((h) => Object.keys(h.slug).length > 1)
  .map((h) => {
  const uit = {};
  for (const taal of TALEN) {
    if (!h.slug[taal]) continue;
    uit[taal] = (taal === "nl" ? "/" : "/" + taal + "/") + h.slug[taal] + "/";
  }
  return uit;
});

// De gratis tests staan onder /oefentest/<slug>/ met een eigen slug per taal:
// /oefentest/cijferreeksen/ tegenover /en/oefentest/number-series/. Zonder deze
// koppeling krijgen 66 testpagina's geen hreflang en weet Google niet dat het
// vertalingen van elkaar zijn.
for (const o of [...Object.values(ONDERDELEN), ...Object.values(VRAGENLIJSTEN)]) {
  const uit = {};
  for (const taal of TALEN) {
    if (!o.slug[taal]) continue;
    uit[taal] = (taal === "nl" ? "/oefentest/" : `/${taal}/oefentest/`) + o.slug[taal] + "/";
  }
  if (Object.keys(uit).length > 1) groepen.push(uit);
}

// Pad -> { taal: pad } voor elke variant in de groep.
export const SLUGVARIANTEN = new Map();
for (const groep of groepen) {
  for (const pad of Object.values(groep)) SLUGVARIANTEN.set(pad, groep);
}

export function variantenVoor(pad) {
  return SLUGVARIANTEN.get(pad) || SLUGVARIANTEN.get(pad.replace(/\/?$/, "/")) || null;
}
