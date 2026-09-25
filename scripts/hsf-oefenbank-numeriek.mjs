// Cijferreeksen. Elke reeks volgt één principe; de kandidaat zet de reeks voort
// met één getal. Vijf antwoordopties, oplopend gesorteerd zoals in de echte
// afname. De afleiders zijn denkfouten: het vorige verschil doortrekken, de
// stap één te ver of te kort nemen, de bewerkingen omdraaien.
import { rng, tussen, kies } from "./hsf-oefenbank-lib.mjs";

const TALEN = ["nl", "en", "de", "fr", "es", "ro"];

const VRAAG = {
  nl: "Selecteer het getal dat logischerwijs volgt op de reeks.",
  en: "Select the number that logically continues the series.",
  de: "Wählen Sie die Zahl, die die Reihe logisch fortsetzt.",
  fr: "Sélectionnez le nombre qui poursuit logiquement la série.",
  es: "Selecciona el número que continúa lógicamente la serie.",
  ro: "Selectează numărul care continuă logic șirul.",
};

// Bouwstenen voor de toelichting, per taal. De cijfers komen uit het item.
const T = {
  nl: {
    verschilToe: (d, r, u) => `Het verschil tussen twee opeenvolgende getallen neemt steeds met ${d} toe: ${r}. Na het laatste getal volgt ${u}.`,
    verschilAf: (d, r, u) => `Het verschil tussen twee opeenvolgende getallen neemt steeds met ${d} af: ${r}. Na het laatste getal volgt ${u}.`,
    verschilMaal: (k, r, u) => `Het verschil wordt telkens met ${k} vermenigvuldigd: ${r}. De volgende stap is ${u}.`,
    maal: (k, u) => `Elk getal is het vorige maal ${k}. Daarom volgt ${u}.`,
    plus: (k, u) => `Bij elk getal komt er ${k} bij. Daarom volgt ${u}.`,
    som: (a, b, u) => `Elk getal is de som van de twee getallen ervoor: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Elk getal is het vorige maal ${k}, en daar komt ${b} bij. Daarom volgt ${u}.`,
    twee: (a, b, u) => `Er lopen twee reeksen door elkaar. De reeks op de oneven plaatsen gaat met ${a}, die op de even plaatsen met ${b}. Het gevraagde getal hoort bij de reeks met ${u}.`,
    afwisselend: (a, b, u) => `De bewerkingen wisselen elkaar af: ${a} en ${b}. Nu is ${a} aan de beurt, dus volgt ${u}.`,
    kwadraat: (u) => `De reeks bestaat uit kwadraten. Het volgende kwadraat is ${u}.`,
    deelMaal: (a, b, u) => `Er wordt om en om ${a} en ${b} toegepast. Nu volgt ${b}, dus ${u}.`,
  },
  en: {
    verschilToe: (d, r, u) => `The gap between consecutive numbers grows by ${d} each time: ${r}. After the last number comes ${u}.`,
    verschilAf: (d, r, u) => `The gap between consecutive numbers shrinks by ${d} each time: ${r}. After the last number comes ${u}.`,
    verschilMaal: (k, r, u) => `The gap is multiplied by ${k} each time: ${r}. The next step is ${u}.`,
    maal: (k, u) => `Each number is the previous one times ${k}, so ${u} follows.`,
    plus: (k, u) => `Each number is ${k} more than the one before, so ${u} follows.`,
    som: (a, b, u) => `Each number is the sum of the two before it: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Each number is the previous one times ${k} plus ${b}, so ${u} follows.`,
    twee: (a, b, u) => `Two series run through each other. The odd positions move by ${a}, the even positions by ${b}. The number asked for belongs to the series moving by ${u}.`,
    afwisselend: (a, b, u) => `The operations alternate: ${a} and ${b}. It is now the turn of ${a}, so ${u} follows.`,
    kwadraat: (u) => `The series consists of squares. The next square is ${u}.`,
    deelMaal: (a, b, u) => `${a} and ${b} are applied in turn. Now ${b} follows, giving ${u}.`,
  },
  de: {
    verschilToe: (d, r, u) => `Der Abstand zwischen zwei Zahlen wächst jedes Mal um ${d}: ${r}. Nach der letzten Zahl folgt ${u}.`,
    verschilAf: (d, r, u) => `Der Abstand zwischen zwei Zahlen nimmt jedes Mal um ${d} ab: ${r}. Nach der letzten Zahl folgt ${u}.`,
    verschilMaal: (k, r, u) => `Der Abstand wird jedes Mal mit ${k} multipliziert: ${r}. Der nächste Schritt ist ${u}.`,
    maal: (k, u) => `Jede Zahl ist die vorige mal ${k}, deshalb folgt ${u}.`,
    plus: (k, u) => `Zu jeder Zahl kommt ${k} hinzu, deshalb folgt ${u}.`,
    som: (a, b, u) => `Jede Zahl ist die Summe der beiden davor: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Jede Zahl ist die vorige mal ${k} plus ${b}, deshalb folgt ${u}.`,
    twee: (a, b, u) => `Zwei Reihen laufen ineinander. Die ungeraden Stellen bewegen sich mit ${a}, die geraden mit ${b}. Die gesuchte Zahl gehört zur Reihe mit ${u}.`,
    afwisselend: (a, b, u) => `Die Rechenschritte wechseln sich ab: ${a} und ${b}. Jetzt ist ${a} an der Reihe, also folgt ${u}.`,
    kwadraat: (u) => `Die Reihe besteht aus Quadratzahlen. Die nächste Quadratzahl ist ${u}.`,
    deelMaal: (a, b, u) => `${a} und ${b} werden abwechselnd angewendet. Jetzt folgt ${b}, also ${u}.`,
  },
  fr: {
    verschilToe: (d, r, u) => `L'écart entre deux nombres augmente de ${d} à chaque fois : ${r}. Après le dernier nombre vient ${u}.`,
    verschilAf: (d, r, u) => `L'écart entre deux nombres diminue de ${d} à chaque fois : ${r}. Après le dernier nombre vient ${u}.`,
    verschilMaal: (k, r, u) => `L'écart est multiplié par ${k} à chaque fois : ${r}. L'étape suivante est ${u}.`,
    maal: (k, u) => `Chaque nombre est le précédent multiplié par ${k}, donc ${u} suit.`,
    plus: (k, u) => `Chaque nombre vaut ${k} de plus que le précédent, donc ${u} suit.`,
    som: (a, b, u) => `Chaque nombre est la somme des deux précédents : ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Chaque nombre est le précédent multiplié par ${k} puis augmenté de ${b}, donc ${u} suit.`,
    twee: (a, b, u) => `Deux séries s'entrecroisent. Les positions impaires avancent de ${a}, les paires de ${b}. Le nombre demandé appartient à la série qui avance de ${u}.`,
    afwisselend: (a, b, u) => `Les opérations alternent : ${a} et ${b}. C'est au tour de ${a}, donc ${u} suit.`,
    kwadraat: (u) => `La série est composée de carrés. Le carré suivant est ${u}.`,
    deelMaal: (a, b, u) => `${a} et ${b} s'appliquent à tour de rôle. C'est ${b} qui suit, soit ${u}.`,
  },
  es: {
    verschilToe: (d, r, u) => `La diferencia entre dos números aumenta ${d} cada vez: ${r}. Después del último número viene ${u}.`,
    verschilAf: (d, r, u) => `La diferencia entre dos números disminuye ${d} cada vez: ${r}. Después del último número viene ${u}.`,
    verschilMaal: (k, r, u) => `La diferencia se multiplica por ${k} cada vez: ${r}. El paso siguiente es ${u}.`,
    maal: (k, u) => `Cada número es el anterior por ${k}, así que sigue ${u}.`,
    plus: (k, u) => `Cada número es ${k} más que el anterior, así que sigue ${u}.`,
    som: (a, b, u) => `Cada número es la suma de los dos anteriores: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Cada número es el anterior por ${k} más ${b}, así que sigue ${u}.`,
    twee: (a, b, u) => `Hay dos series entrelazadas. Las posiciones impares avanzan ${a} y las pares ${b}. El número pedido pertenece a la serie que avanza ${u}.`,
    afwisselend: (a, b, u) => `Las operaciones se alternan: ${a} y ${b}. Ahora toca ${a}, así que sigue ${u}.`,
    kwadraat: (u) => `La serie está formada por cuadrados. El cuadrado siguiente es ${u}.`,
    deelMaal: (a, b, u) => `${a} y ${b} se aplican por turnos. Ahora sigue ${b}, es decir ${u}.`,
  },
  ro: {
    verschilToe: (d, r, u) => `Diferența dintre două numere crește cu ${d} de fiecare dată: ${r}. După ultimul număr urmează ${u}.`,
    verschilAf: (d, r, u) => `Diferența dintre două numere scade cu ${d} de fiecare dată: ${r}. După ultimul număr urmează ${u}.`,
    verschilMaal: (k, r, u) => `Diferența se înmulțește cu ${k} de fiecare dată: ${r}. Pasul următor este ${u}.`,
    maal: (k, u) => `Fiecare număr este precedentul înmulțit cu ${k}, deci urmează ${u}.`,
    plus: (k, u) => `Fiecare număr este cu ${k} mai mare decât precedentul, deci urmează ${u}.`,
    som: (a, b, u) => `Fiecare număr este suma celor două dinainte: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Fiecare număr este precedentul înmulțit cu ${k} plus ${b}, deci urmează ${u}.`,
    twee: (a, b, u) => `Două șiruri se întrepătrund. Pozițiile impare avansează cu ${a}, cele pare cu ${b}. Numărul cerut aparține șirului care avansează cu ${u}.`,
    afwisselend: (a, b, u) => `Operațiile alternează: ${a} și ${b}. Acum este rândul lui ${a}, deci urmează ${u}.`,
    kwadraat: (u) => `Șirul este format din pătrate perfecte. Următorul pătrat este ${u}.`,
    deelMaal: (a, b, u) => `${a} și ${b} se aplică pe rând. Acum urmează ${b}, adică ${u}.`,
  },
};

const teken = (n) => (n < 0 ? `${n}` : `+${n}`);

/** Kiest vier afleiders rond het juiste antwoord. De kandidaten zijn denkfouten;
 *  wat overblijft wordt aangevuld met plausibele buurgetallen. Het aantal opties
 *  onder en boven het juiste antwoord wisselt, zodat het juiste antwoord niet
 *  steeds op dezelfde plek in de oplopende rij staat. */
function afleiders(r, juist, kandidaten, reeks = []) {
  const inReeks = new Set(reeks);
  const ok = (x) => Number.isInteger(x) && x > 0 && x !== juist && !inReeks.has(x);
  const uniek = [...new Set(kandidaten.filter(ok))];
  const onder = uniek.filter((x) => x < juist).sort((a, b) => b - a);
  const boven = uniek.filter((x) => x > juist).sort((a, b) => a - b);
  const stap = Math.max(1, Math.round(Math.abs(juist) * 0.04));
  for (let i = 1; i <= 8; i++) {
    const lo = juist - i * stap, hi = juist + i * stap;
    if (ok(lo) && !onder.includes(lo)) onder.push(lo);
    if (ok(hi) && !boven.includes(hi)) boven.push(hi);
  }
  const wilOnder = Math.min(Math.floor(r() * 5), onder.length);
  let nOnder = Math.min(wilOnder, 4);
  let nBoven = 4 - nOnder;
  if (nBoven > boven.length) { nBoven = boven.length; nOnder = 4 - nBoven; }
  if (nOnder > onder.length) return null;
  const gekozen = [...onder.slice(0, nOnder), ...boven.slice(0, nBoven)];
  if (gekozen.length < 4) return null;
  return gekozen;
}

const SJABLONEN = [
  {
    naam: "verschil-toe",
    maak(r) {
      const start = tussen(r, 1, 9), stap = tussen(r, 2, 6), toe = tussen(r, 1, 4);
      const v = [start], d = [];
      for (let i = 0; i < 6; i++) { const x = stap + i * toe; d.push(x); v.push(v[v.length - 1] + x); }
      const zichtbaar = v.slice(0, 6), juist = v[6];
      const rij = d.slice(0, 5).map(teken).join(", ");
      return {
        zichtbaar, juist,
        kand: [zichtbaar[5] + d[4], zichtbaar[5] + d[5] + toe, zichtbaar[5] + d[5] + d[4], zichtbaar[5] * 2 - zichtbaar[4], juist - stap],
        uit: (t) => T[t].verschilToe(toe, rij, teken(d[5])),
      };
    },
  },
  {
    naam: "verschil-af",
    maak(r) {
      const af = tussen(r, 1, 3), stap = tussen(r, 13, 20), start = tussen(r, 2, 9);
      const v = [start], d = [];
      for (let i = 0; i < 6; i++) { const x = stap - i * af; d.push(x); v.push(v[v.length - 1] + x); }
      if (d[5] < 2) return null;
      const zichtbaar = v.slice(0, 6), juist = v[6];
      const rij = d.slice(0, 5).map(teken).join(", ");
      return {
        zichtbaar, juist,
        kand: [zichtbaar[5] + d[4], zichtbaar[5] + d[5] - af, juist + d[5], juist - d[5], zichtbaar[5] + stap],
        uit: (t) => T[t].verschilAf(af, rij, teken(d[5])),
      };
    },
  },
  {
    naam: "verschil-maal",
    maak(r) {
      const start = tussen(r, 2, 9), d0 = tussen(r, 2, 5), k = tussen(r, 2, 3);
      const v = [start], d = [];
      for (let i = 0; i < 5; i++) { const x = d0 * Math.pow(k, i); d.push(x); v.push(v[v.length - 1] + x); }
      const zichtbaar = v.slice(0, 5), juist = v[5];
      const rij = d.slice(0, 4).map(teken).join(", ");
      return {
        zichtbaar, juist,
        kand: [zichtbaar[4] + d[3], zichtbaar[4] * k, juist + d[4], juist - d[3], zichtbaar[4] + d[4] * k],
        uit: (t) => T[t].verschilMaal(k, rij, teken(d[4])),
      };
    },
  },
  {
    naam: "maal",
    maak(r) {
      const start = tussen(r, 2, 8), k = tussen(r, 2, 4);
      const v = [start];
      for (let i = 0; i < 5; i++) v.push(v[v.length - 1] * k);
      const zichtbaar = v.slice(0, 5), juist = v[5];
      return {
        zichtbaar, juist,
        kand: [zichtbaar[4] + zichtbaar[3], zichtbaar[4] * (k + 1), zichtbaar[4] * (k - 1), juist + zichtbaar[3], juist - zichtbaar[3]],
        uit: (t) => T[t].maal(k, juist),
      };
    },
  },
  {
    naam: "plus",
    maak(r) {
      const start = tussen(r, 3, 40), k = tussen(r, 4, 17);
      const v = [start];
      for (let i = 0; i < 6; i++) v.push(v[v.length - 1] + k);
      const zichtbaar = v.slice(0, 6), juist = v[6];
      return {
        zichtbaar, juist,
        kand: [juist + k, juist - k, juist + 1, juist - 1, zichtbaar[5] + k + 2],
        uit: (t) => T[t].plus(k, juist),
      };
    },
  },
  {
    naam: "som-vorige",
    maak(r) {
      const a = tussen(r, 1, 6), b = tussen(r, 2, 9);
      const v = [a, b];
      for (let i = 0; i < 5; i++) v.push(v[v.length - 1] + v[v.length - 2]);
      const zichtbaar = v.slice(0, 6), juist = v[6];
      return {
        zichtbaar, juist,
        kand: [zichtbaar[5] + zichtbaar[3], zichtbaar[5] * 2, juist + zichtbaar[3], juist - zichtbaar[3], zichtbaar[5] + zichtbaar[4] + zichtbaar[3]],
        uit: (t) => T[t].som(zichtbaar[4], zichtbaar[5], juist),
      };
    },
  },
  {
    naam: "maal-plus",
    maak(r) {
      const start = tussen(r, 1, 6), k = tussen(r, 2, 3), b = tussen(r, 1, 7);
      const v = [start];
      for (let i = 0; i < 5; i++) v.push(v[v.length - 1] * k + b);
      const zichtbaar = v.slice(0, 5), juist = v[5];
      return {
        zichtbaar, juist,
        kand: [zichtbaar[4] * k, (zichtbaar[4] + b) * k, zichtbaar[4] + b, juist + b, juist + k * b],
        uit: (t) => T[t].maalPlus(k, b, juist),
      };
    },
  },
  {
    naam: "twee-reeksen",
    maak(r) {
      const a0 = tussen(r, 2, 15), b0 = tussen(r, 30, 70);
      const da = tussen(r, 2, 9), db = -tussen(r, 2, 8);
      const zichtbaar = [];
      for (let i = 0; i < 3; i++) { zichtbaar.push(a0 + i * da); zichtbaar.push(b0 + i * db); }
      const juist = a0 + 3 * da;
      if (juist >= b0 + 2 * db) return null;
      return {
        zichtbaar, juist,
        kand: [b0 + 3 * db, zichtbaar[5] + da, zichtbaar[5] + db, juist + da, juist - da],
        uit: (t) => T[t].twee(teken(da), teken(db), teken(da)),
      };
    },
  },
  {
    naam: "afwisselend-plus-maal",
    maak(r) {
      const start = tussen(r, 2, 9), b = tussen(r, 2, 9), k = tussen(r, 2, 3);
      const v = [start];
      for (let i = 0; i < 5; i++) v.push(i % 2 === 0 ? v[v.length - 1] + b : v[v.length - 1] * k);
      const zichtbaar = v.slice(0, 5), juist = v[5];
      return {
        zichtbaar, juist,
        kand: [zichtbaar[4] * k, zichtbaar[4] + b * k, juist + b, juist - b, juist * k],
        uit: (t) => T[t].afwisselend(`+${b}`, `\u00d7${k}`, juist),
      };
    },
  },
  {
    naam: "kwadraten",
    maak(r) {
      const start = tussen(r, 2, 8), c = tussen(r, 0, 4) - 2;
      const zichtbaar = [];
      for (let i = 0; i < 5; i++) { const n = start + i; zichtbaar.push(n * n + c); }
      const n = start + 5, juist = n * n + c;
      if (zichtbaar.some((x) => x <= 0)) return null;
      const merk = c === 0 ? `${n}\u00b2 = ${juist}` : c > 0 ? `${n}\u00b2 + ${c} = ${juist}` : `${n}\u00b2 - ${Math.abs(c)} = ${juist}`;
      return {
        zichtbaar, juist,
        kand: [zichtbaar[4] + (zichtbaar[4] - zichtbaar[3]), juist + n, juist - n, juist + 2, juist - 2],
        uit: (t) => T[t].kwadraat(merk),
      };
    },
  },
  {
    naam: "deel-plus",
    maak(r) {
      const k = tussen(r, 2, 4), b = k * tussen(r, 1, 4);
      const start = tussen(r, 4, 9) * Math.pow(k, 3);
      const v = [start];
      for (let i = 0; i < 5; i++) v.push(i % 2 === 0 ? v[v.length - 1] / k : v[v.length - 1] + b);
      if (!v.every((x) => Number.isInteger(x) && x > 0)) return null;
      const zichtbaar = v.slice(0, 5), juist = v[5];
      return {
        zichtbaar, juist,
        kand: [zichtbaar[4] - b, zichtbaar[4] / k, juist + b, juist * k, juist - 1],
        uit: (t) => T[t].deelMaal(`\u00f7${k}`, `+${b}`, juist),
      };
    },
  },
];

// De twee reeksen uit de instructie van de echte afname blijven hier weg.
const VOORBEELDEN = new Set(["1,3,6,10,15,21", "3,6,12,24,48"]);

export function bouwNumeriek(aantal = 250, zaad = 20260311) {
  const r = rng(zaad);
  const items = [];
  const gezien = new Set();
  let poging = 0;
  while (items.length < aantal && poging < aantal * 400) {
    const s = SJABLONEN[poging % SJABLONEN.length];
    poging++;
    const p = s.maak(r);
    if (!p) continue;
    if (p.juist > 60000) continue;
    const sleutel = p.zichtbaar.join(",");
    if (VOORBEELDEN.has(sleutel)) continue;
    if (gezien.has(sleutel)) continue;
    const afl = afleiders(r, p.juist, p.kand, p.zichtbaar);
    if (!afl) continue;
    const waarden = [p.juist, ...afl].sort((a, b) => a - b);
    if (new Set(waarden).size !== 5) continue;
    gezien.add(sleutel);
    const id = `num-${String(items.length + 1).padStart(3, "0")}`;
    items.push({
      id, soort: s.naam,
      q: Object.fromEntries(TALEN.map((t) => [t, VRAAG[t]])),
      reeks: [...p.zichtbaar.map(String), "?"],
      opties: Object.fromEntries(TALEN.map((t) => [t, waarden.map(String)])),
      juist: waarden.indexOf(p.juist),
      uitleg: Object.fromEntries(TALEN.map((t) => [t, p.uit(t)])),
    });
  }
  return items;
}
