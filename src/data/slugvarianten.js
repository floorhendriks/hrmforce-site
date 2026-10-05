// Pagina's waarvan de slug per taal verschilt, bijvoorbeeld
// /persoonlijkheidstest/ tegenover /en/personality-test/.
//
// De hreflang-regels in Base.astro leiden de vertalingen normaal af door er een
// taalprefix voor te zetten. Dat werkt hier niet, want het pad zelf verandert
// mee. Deze lijst koppelt de varianten daarom expliciet aan elkaar.
import { TESTHUBS } from "./testhubs.js";
import { THEMAPAGINAS } from "./themapaginas.js";

const TALEN = ["nl", "en", "de", "fr", "es", "ro"];

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

// Pad -> { taal: pad } voor elke variant in de groep.
export const SLUGVARIANTEN = new Map();
for (const groep of groepen) {
  for (const pad of Object.values(groep)) SLUGVARIANTEN.set(pad, groep);
}

export function variantenVoor(pad) {
  return SLUGVARIANTEN.get(pad) || SLUGVARIANTEN.get(pad.replace(/\/?$/, "/")) || null;
}
