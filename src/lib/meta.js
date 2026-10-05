// Titels en meta-omschrijvingen binnen de lengte houden die Google toont.
// Langer wordt in de zoekresultaten afgekapt, vaak midden in een zin.
//
// Eerder zette deze module een beletselteken achter een afgekapte tekst. Dat
// leverde titels op als "Kritisch denken en bronbeoordeling | skill, niveaus
// en…" en omschrijvingen die midden in een zin ophielden. In een zoekresultaat
// leest dat als een fout, en het kost ruimte die beter aan woorden opgaat.
//
// Nu geldt: liever een kortere, hele zin dan een lange die afbreekt. Een titel
// laat het beschrijvende deel vallen als het niet heel past, een omschrijving
// eindigt op de laatste zin die nog past.
const TITEL_MAX = 60;
const OMSCHRIJVING_MAX = 155;

// Woorden waar een zin niet op mag eindigen. Blijft er na het afkappen zo'n
// woord over, dan gaat dat er ook af.
const LOSSE_WOORDEN = new Set([
  // Nederlands
  "en", "of", "de", "het", "een", "in", "op", "met", "voor", "van", "bij", "om",
  "te", "als", "naar", "over", "door", "uit", "aan", "dat", "die", "is", "zijn",
  // Engels
  "and", "or", "the", "a", "an", "of", "for", "with", "in", "on", "to", "at",
  "by", "from", "that", "is", "are",
  // Duits
  "und", "oder", "der", "die", "das", "ein", "eine", "mit", "für", "von", "zu",
  // Frans
  "et", "ou", "le", "la", "les", "un", "une", "des", "de", "du", "pour", "avec",
  // Spaans
  "y", "o", "el", "los", "las", "un", "una", "para", "con", "por",
  // Roemeens
  "și", "sau", "un", "o", "pentru", "cu", "din", "la", "de",
]);

const schoon = (t) => (t || "").replace(/\s+/g, " ").trim();

/** Kapt af op een woordgrens en haalt een los voegwoord of lidwoord weg. */
function kort(tekst, max) {
  const s = schoon(tekst);
  if (s.length <= max) return s;
  const knip = s.slice(0, max);
  const spatie = knip.lastIndexOf(" ");
  let uit = spatie > 0 ? knip.slice(0, spatie) : knip;
  // Eindigt het op een los woord, dan nog een woord terug. Twee keer is genoeg.
  for (let i = 0; i < 2; i++) {
    const woorden = uit.split(" ");
    const laatste = woorden[woorden.length - 1].toLowerCase().replace(/[^\p{L}]/gu, "");
    if (woorden.length > 1 && LOSSE_WOORDEN.has(laatste)) woorden.pop();
    else break;
    uit = woorden.join(" ");
  }
  return uit.replace(/[,;:\-–\/|\s]+$/, "");
}

/** Kapt af op de laatste hele zin die nog past; lukt dat niet, op een woord. */
export function kortZin(tekst, max) {
  const s = schoon(tekst);
  if (s.length <= max) return s;
  const knip = s.slice(0, max);
  // Een punt, vraagteken of uitroepteken gevolgd door een spatie is een zinseinde.
  const eind = Math.max(knip.lastIndexOf(". "), knip.lastIndexOf("? "), knip.lastIndexOf("! "));
  if (eind > max * 0.5) return knip.slice(0, eind + 1);
  const w = kort(s, max - 1);
  return /[.!?]$/.test(w) ? w : w + ".";
}

/**
 * Omschrijving uit een kop en een vaste staart. De staart draagt de concrete
 * getallen en blijft daarom staan; de kop wordt ingekort tot het geheel past.
 */
export function omschrijving(kop, staart = "") {
  const st = schoon(staart);
  if (!st) return kortZin(kop, OMSCHRIJVING_MAX);
  if (st.length >= OMSCHRIJVING_MAX) return kortZin(st, OMSCHRIJVING_MAX);
  const ruimte = OMSCHRIJVING_MAX - st.length - 1;
  const k = kortZin(kop, ruimte);
  return k ? `${k} ${st}` : st;
}

/**
 * Titel uit een naam, een omschrijvend deel en het merk. Past het geheel niet,
 * dan valt eerst het merk weg en daarna het omschrijvende deel in zijn geheel.
 * Alleen een naam die op zichzelf te lang is wordt ingekort.
 */
export function titel(naam, deel = "", merk = "hrmforce") {
  const n = schoon(naam);
  const d = schoon(deel);
  const vol = [n, d, merk].filter(Boolean).join(" | ");
  if (vol.length <= TITEL_MAX) return vol;
  const zonderMerk = [n, d].filter(Boolean).join(" | ");
  if (zonderMerk.length <= TITEL_MAX) return zonderMerk;
  const metMerk = [n, merk].filter(Boolean).join(" | ");
  if (metMerk.length <= TITEL_MAX) return metMerk;
  return kort(n, TITEL_MAX);
}
