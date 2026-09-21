// Titels en meta-omschrijvingen binnen de lengte houden die Google toont.
// Langer wordt in de zoekresultaten afgekapt, vaak midden in een zin.
const TITEL_MAX = 60;
const OMSCHRIJVING_MAX = 155;

/** Kapt af op een woordgrens en zet er een beletselteken achter. */
function kort(tekst, max) {
  const s = (tekst || "").replace(/\s+/g, " ").trim();
  if (s.length <= max) return s;
  const knip = s.slice(0, max - 1);
  const spatie = knip.lastIndexOf(" ");
  return (spatie > max * 0.6 ? knip.slice(0, spatie) : knip).replace(/[,;:.\s]+$/, "") + "…";
}

/**
 * Omschrijving uit een kop en een vaste staart. De staart draagt de concrete
 * getallen en blijft daarom staan; de kop wordt ingekort tot het geheel past.
 */
export function omschrijving(kop, staart = "") {
  const st = (staart || "").replace(/\s+/g, " ").trim();
  if (!st) return kort(kop, OMSCHRIJVING_MAX);
  if (st.length >= OMSCHRIJVING_MAX) return kort(st, OMSCHRIJVING_MAX);
  const ruimte = OMSCHRIJVING_MAX - st.length - 1;
  const k = kort(kop, ruimte);
  return k ? `${k} ${st}` : st;
}

/**
 * Titel uit een naam, een omschrijvend deel en het merk. Past het geheel niet,
 * dan valt eerst het merk weg en daarna wordt het omschrijvende deel ingekort.
 */
export function titel(naam, deel = "", merk = "hrmforce") {
  const n = (naam || "").replace(/\s+/g, " ").trim();
  const d = (deel || "").replace(/\s+/g, " ").trim();
  const vol = [n, d, merk].filter(Boolean).join(" | ");
  if (vol.length <= TITEL_MAX) return vol;
  const zonderMerk = [n, d].filter(Boolean).join(" | ");
  if (zonderMerk.length <= TITEL_MAX) return zonderMerk;
  if (n.length + 3 < TITEL_MAX && d) return `${n} | ${kort(d, TITEL_MAX - n.length - 3)}`;
  return kort(n, TITEL_MAX);
}
