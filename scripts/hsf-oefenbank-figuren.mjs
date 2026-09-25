// Figuurvragen. Twee onderdelen:
//   abstract  = figuren draaien: welke figuur is dezelfde, alleen gedraaid
//   ruimtelijk = figuren vouwen: welke kubus komt uit deze uitslag
// Beide worden als SVG gegenereerd, dus taalonafhankelijk op één instructie na.
import { rng, tussen, schud } from "./hsf-oefenbank-lib.mjs";


const TALEN = ["nl", "en", "de", "fr", "es", "ro"];
const NAVY = "#0E468C";
const GOUD = "#fcc11b";
const LIJN = "#c9d4e4";

/* ---------------------------------------------------------------- draaien */

const VRAAG_A = {
  nl: "Welke figuur is dezelfde als de figuur hierboven, alleen gedraaid?",
  en: "Which figure is the same as the one above, only rotated?",
  de: "Welche Figur ist dieselbe wie oben, nur gedreht?",
  fr: "Quelle figure est identique à celle du haut, mais tournée ?",
  es: "¿Qué figura es la misma que la de arriba, solo que girada?",
  ro: "Care figură este aceeași cu cea de sus, doar rotită?",
};

const UITLEG_A = {
  nl: (g) => `Alleen deze figuur is de oorspronkelijke figuur, ${g} graden gedraaid. De andere vier zijn spiegelbeelden of hebben een blokje op een andere plaats.`,
  en: (g) => `Only this figure is the original rotated by ${g} degrees. The other four are mirror images or have a block in a different place.`,
  de: (g) => `Nur diese Figur ist das Original, um ${g} Grad gedreht. Die anderen vier sind Spiegelbilder oder haben einen Block an anderer Stelle.`,
  fr: (g) => `Seule cette figure est l'originale tournée de ${g} degrés. Les quatre autres sont des images miroir ou ont un bloc déplacé.`,
  es: (g) => `Solo esta figura es la original girada ${g} grados. Las otras cuatro son imágenes reflejadas o tienen un bloque en otro sitio.`,
  ro: (g) => `Doar această figură este cea originală, rotită cu ${g} grade. Celelalte patru sunt imagini în oglindă sau au un bloc mutat.`,
};

const N = 4;
const spec = (f) => `${[...f.blokken].sort().join(";")}|${f.stip}`;
const sleutelVan = spec;
const cel = (x, y) => `${x},${y}`;
const ontleed = (s) => s.split(",").map(Number);

function draai(f) {
  const d = ([x, y]) => cel(N - 1 - y, x);
  return { blokken: f.blokken.map((c) => d(ontleed(c))), stip: d(ontleed(f.stip)) };
}
function spiegel(f) {
  const s = ([x, y]) => cel(N - 1 - x, y);
  return { blokken: f.blokken.map((c) => s(ontleed(c))), stip: s(ontleed(f.stip)) };
}
function draaiN(f, n) { let g = f; for (let i = 0; i < n; i++) g = draai(g); return g; }

function maakFiguur(r) {
  const cellen = [];
  for (let x = 0; x < N; x++) for (let y = 0; y < N; y++) cellen.push(cel(x, y));
  const aantal = tussen(r, 4, 6);
  const gekozen = [];
  while (gekozen.length < aantal + 1) {
    const c = cellen[Math.floor(r() * cellen.length)];
    if (!gekozen.includes(c)) gekozen.push(c);
  }
  const f = { blokken: gekozen.slice(0, aantal), stip: gekozen[aantal] };
  // chiraal: het spiegelbeeld mag in geen enkele draaiing gelijk zijn aan het origineel
  const eigen = sleutelVan(f);
  for (let i = 0; i < 4; i++) if (sleutelVan(draaiN(spiegel(f), i)) === eigen) return null;
  // en de figuur zelf mag geen draaisymmetrie hebben, anders zijn twee opties gelijk
  for (let i = 1; i < 4; i++) if (sleutelVan(draaiN(f, i)) === eigen) return null;
  return f;
}

function verplaats(r, f) {
  const bezet = new Set([...f.blokken, f.stip]);
  const vrij = [];
  for (let x = 0; x < N; x++) for (let y = 0; y < N; y++) if (!bezet.has(cel(x, y))) vrij.push(cel(x, y));
  if (!vrij.length) return null;
  const uit = Math.floor(r() * f.blokken.length);
  const naar = vrij[Math.floor(r() * vrij.length)];
  const blokken = f.blokken.slice();
  blokken[uit] = naar;
  return { blokken, stip: f.stip };
}

export function bouwAbstract(aantal = 250, zaad = 20260518) {
  const r = rng(zaad);
  const items = [];
  const gezien = new Set();
  let poging = 0;
  while (items.length < aantal && poging < aantal * 500) {
    poging++;
    const f = maakFiguur(r);
    if (!f) continue;
    const s = sleutelVan(f);
    if (gezien.has(s)) continue;

    const hoek = [90, 180, 270][tussen(r, 0, 2)];
    const juist = draaiN(f, hoek / 90);
    const sp = spiegel(f);
    const kandidaten = [
      draaiN(sp, tussen(r, 0, 3)),
      draaiN(sp, tussen(r, 0, 3)),
      verplaats(r, f),
      verplaats(r, f),
      draaiN(sp, tussen(r, 0, 3)),
    ].filter(Boolean).map((g) => draaiN(g, tussen(r, 0, 3)));

    // geen afleider mag toevallig samenvallen met een draaiing van het origineel
    const eigenDraaiingen = new Set([0, 1, 2, 3].map((i) => sleutelVan(draaiN(f, i))));
    const uniek = [];
    const sleutels = new Set([sleutelVan(juist)]);
    for (const k of kandidaten) {
      const ks = sleutelVan(k);
      if (sleutels.has(ks) || eigenDraaiingen.has(ks)) continue;
      sleutels.add(ks); uniek.push(k);
      if (uniek.length === 4) break;
    }
    if (uniek.length < 4) continue;
    gezien.add(s);

    const { waarden, juistIndex } = schud(r, juist, uniek);
    const id = `abs-${String(items.length + 1).padStart(3, "0")}`;
    items.push({
      id, soort: "draaien", html: true,
      q: Object.fromEntries(TALEN.map((t) => [t, VRAAG_A[t]])),
      beeld: spec(f),
      opties: Object.fromEntries(TALEN.map((t) => [t, waarden.map((g) => spec(g))])),
      juist: juistIndex,
      uitleg: Object.fromEntries(TALEN.map((t) => [t, UITLEG_A[t](hoek)])),
    });
  }
  return items;
}

/* ---------------------------------------------------------------- vouwen */

const VRAAG_R = {
  nl: "Welke kubus kun je vouwen uit deze uitslag?",
  en: "Which cube can be folded from this net?",
  de: "Welcher Würfel lässt sich aus diesem Netz falten?",
  fr: "Quel cube peut-on plier à partir de ce patron ?",
  es: "¿Qué cubo se puede plegar con este desarrollo?",
  ro: "Ce cub se poate plia din această desfășurare?",
};

const TEKENS = {
  nl: ["cirkel", "driehoek", "vierkant", "kruis", "ster", "balk"],
  en: ["circle", "triangle", "square", "cross", "star", "bar"],
  de: ["Kreis", "Dreieck", "Quadrat", "Kreuz", "Stern", "Balken"],
  fr: ["cercle", "triangle", "carré", "croix", "étoile", "barre"],
  es: ["círculo", "triángulo", "cuadrado", "cruz", "estrella", "barra"],
  ro: ["cerc", "triunghi", "pătrat", "cruce", "stea", "bară"],
};

const UITLEG_R = {
  nl: (f, r2, u) => `Vouw je de uitslag dicht, dan komen ${f}, ${r2} en ${u} om één hoek bij elkaar te liggen, in deze volgorde. Bij de andere vier kubussen staan vlakken naast elkaar die op de kubus juist tegenover elkaar liggen, of staan ze in de verkeerde draairichting.`,
  en: (f, r2, u) => `Fold the net and ${f}, ${r2} and ${u} meet at one corner, in this order. On the other four cubes, faces sit next to each other that are opposite on the cube, or they appear in the wrong rotational order.`,
  de: (f, r2, u) => `Faltet man das Netz, treffen ${f}, ${r2} und ${u} in dieser Reihenfolge an einer Ecke zusammen. Bei den anderen vier Würfeln liegen Flächen nebeneinander, die sich am Würfel gegenüberliegen, oder sie stehen in der falschen Drehrichtung.`,
  fr: (f, r2, u) => `En pliant le patron, ${f}, ${r2} et ${u} se rejoignent à un même coin, dans cet ordre. Sur les quatre autres cubes, des faces opposées se retrouvent côte à côte, ou l'ordre de rotation est inversé.`,
  es: (f, r2, u) => `Al plegar el desarrollo, ${f}, ${r2} y ${u} coinciden en una misma esquina, en este orden. En los otros cuatro cubos hay caras contiguas que en realidad son opuestas, o el orden de giro es el contrario.`,
  ro: (f, r2, u) => `Dacă plieți desfășurarea, ${f}, ${r2} și ${u} se întâlnesc într-un colț, în această ordine. La ceilalți patru cubi apar alăturate fețe care pe cub sunt opuse, sau ordinea de rotație este greșită.`,
};

// De 24 standen van een kubus, opgebouwd uit drie basisdraaiingen.
function standen() {
  const start = { U: "U", D: "D", F: "F", B: "B", L: "L", R: "R" };
  const rx = (o) => ({ U: o.F, F: o.D, D: o.B, B: o.U, L: o.L, R: o.R });
  const ry = (o) => ({ F: o.R, R: o.B, B: o.L, L: o.F, U: o.U, D: o.D });
  const rz = (o) => ({ U: o.L, L: o.D, D: o.R, R: o.U, F: o.F, B: o.B });
  const sleutel = (o) => ["U", "D", "F", "B", "L", "R"].map((k) => o[k]).join("");
  const zien = new Map([[sleutel(start), start]]);
  let rand = [start];
  while (rand.length) {
    const volgend = [];
    for (const o of rand) for (const fn of [rx, ry, rz]) {
      const n = fn(o), k = sleutel(n);
      if (!zien.has(k)) { zien.set(k, n); volgend.push(n); }
    }
    rand = volgend;
  }
  return [...zien.values()];
}
const STANDEN = standen();

export function bouwRuimtelijk(aantal = 250, zaad = 20260619) {
  const r = rng(zaad);
  const items = [];
  const gezien = new Set();
  const RICHTINGEN = ["U", "D", "F", "B", "L", "R"];
  let poging = 0;
  while (items.length < aantal && poging < aantal * 500) {
    poging++;
    // zes verschillende tekens over de zes vlakken van de uitslag
    const tekens = [0, 1, 2, 3, 4, 5];
    for (let i = tekens.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [tekens[i], tekens[j]] = [tekens[j], tekens[i]]; }
    const vlak = Object.fromEntries(RICHTINGEN.map((k, i) => [k, tekens[i]]));
    const sleutel = RICHTINGEN.map((k) => vlak[k]).join("");
    if (gezien.has(sleutel)) continue;

    // alle zichtbare drietallen (voor, rechts, boven) die echt kunnen
    const kan = new Set(STANDEN.map((o) => `${vlak[o.F]},${vlak[o.R]},${vlak[o.U]}`));
    const goed = [...kan][tussen(r, 0, kan.size - 1)].split(",").map(Number);
    // afleiders: drietallen die er plausibel uitzien maar niet kunnen
    const fout = [];
    const probeer = [];
    for (const k of kan) {
      const [a, b, c] = k.split(",").map(Number);
      probeer.push([b, a, c], [a, c, b], [c, b, a]);
    }
    for (let i = probeer.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [probeer[i], probeer[j]] = [probeer[j], probeer[i]]; }
    for (const p of probeer) {
      const k = p.join(",");
      if (kan.has(k)) continue;
      if (fout.some((q) => q.join(",") === k)) continue;
      fout.push(p);
      if (fout.length === 4) break;
    }
    if (fout.length < 4) continue;
    gezien.add(sleutel);

    const { waarden, juistIndex } = schud(r, goed, fout);
    const id = `rui-${String(items.length + 1).padStart(3, "0")}`;
    items.push({
      id, soort: "vouwen", html: true,
      q: Object.fromEntries(TALEN.map((t) => [t, VRAAG_R[t]])),
      beeld: RICHTINGEN.map((k) => vlak[k]).join(""),
      opties: Object.fromEntries(TALEN.map((t) => [t, waarden.map((v) => v.join(""))])),
      juist: juistIndex,
      uitleg: Object.fromEntries(TALEN.map((t) => [t, UITLEG_R[t](TEKENS[t][goed[0]], TEKENS[t][goed[1]], TEKENS[t][goed[2]])])),
    });
  }
  return items;
}
