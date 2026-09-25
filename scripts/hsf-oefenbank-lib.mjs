// Gedeelde bouwstenen voor de oefenbanken. De items worden gegenereerd uit
// sjablonen met parameters, zodat de rekenkunde per definitie klopt en alle
// talen in één keer gevuld zijn. De afleiders zijn veelgemaakte fouten, geen
// willekeurige getallen; daar leert iemand iets van.

/** Reproduceerbare toevalsgenerator, zodat dezelfde bank er elke keer uit komt. */
export function rng(zaad) {
  let s = zaad >>> 0;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}
export const kies = (r, arr) => arr[Math.floor(r() * arr.length)];
export const tussen = (r, a, b) => a + Math.floor(r() * (b - a + 1));

/** Nederlandse notatie voor getallen; de andere talen volgen hun eigen scheiding. */
const SCHEIDING = {
  nl: { dec: ",", dui: "." }, de: { dec: ",", dui: "." }, fr: { dec: ",", dui: " " },
  es: { dec: ",", dui: "." }, ro: { dec: ",", dui: "." }, en: { dec: ".", dui: "," },
};
export function getal(n, taal, decimalen = 0) {
  const s = SCHEIDING[taal] || SCHEIDING.nl;
  const vast = Math.abs(n).toFixed(decimalen);
  const [heel, deel] = vast.split(".");
  const metDui = heel.replace(/\B(?=(\d{3})+(?!\d))/g, s.dui);
  return (n < 0 ? "-" : "") + metDui + (deel ? s.dec + deel : "");
}
export const euro = (n, taal, d = 0) => "€ " + getal(n, taal, d);
export const procent = (n, taal, d = 0) => getal(n, taal, d) + "%";

/** Unieke, gesorteerde antwoordopties; het juiste antwoord komt op een vaste
 *  plek te staan afhankelijk van de itemsleutel, niet steeds op dezelfde. */
export function opties(juist, afleiders, toon) {
  const alle = [juist, ...afleiders].filter((v, i, a) => a.indexOf(v) === i).slice(0, 4);
  while (alle.length < 4) alle.push(alle[alle.length - 1] + (alle.length + 1));
  return { waarden: alle, toon };
}

/** Bouwt het itemobject in alle talen. `bouw` levert per taal {vraag, uitleg}. */
export function item(id, soort, bouw, waarden, juistIndex, toon) {
  const TALEN = ["nl", "en", "de", "fr", "es", "ro"];
  const tekst = {};
  for (const t of TALEN) tekst[t] = bouw(t);
  return {
    id, soort,
    q: Object.fromEntries(TALEN.map((t) => [t, tekst[t].vraag])),
    uitleg: Object.fromEntries(TALEN.map((t) => [t, tekst[t].uitleg])),
    opties: Object.fromEntries(TALEN.map((t) => [t, waarden.map((w) => toon(w, t))])),
    juist: juistIndex,
  };
}

/** Zet het juiste antwoord op een wisselende plek en geeft de index terug. */
export function schud(r, juist, afleiders) {
  const lijst = [juist, ...afleiders];
  for (let i = lijst.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [lijst[i], lijst[j]] = [lijst[j], lijst[i]];
  }
  return { waarden: lijst, juistIndex: lijst.indexOf(juist) };
}
