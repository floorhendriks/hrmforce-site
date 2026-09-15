// Getekende omslag voor kenniscentrumkaarten zonder eigen afbeelding.
//
// Ruim tweederde van de gemigreerde artikelen heeft geen beeld in de tekst.
// In het overzicht gaf dat een leeg vlak. In plaats van een stockfoto tekent
// dit bestand per artikel een eigen omslag in dezelfde stijl als de iconen:
// raster van 24, lijndikte 1,5, rechte uiteinden, huiskleuren. Het motief
// volgt het thema, de variatie (aantal, hoogte, verschuiving) komt uit de
// titel, zodat twee artikelen in hetzelfde thema er niet identiek uitzien.

const NAVY = "#0E468C";
const BLAUW = "#4691CE";
const GOUD = "#C9A227";
const TINT = "#e7eef7";

// Kleine, stabiele hash: zelfde titel geeft altijd dezelfde omslag.
function zaad(tekst) {
  let h = 2166136261;
  for (let i = 0; i < (tekst || "").length; i++) {
    h ^= tekst.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13; h >>>= 0;
    h ^= h >> 17;
    h ^= h << 5; h >>>= 0;
    return h / 4294967296;
  };
}

const L = (x1, y1, x2, y2, kleur = NAVY, dikte = 1.5) =>
  `<line x1='${x1}' y1='${y1}' x2='${x2}' y2='${y2}' stroke='${kleur}' stroke-width='${dikte}' stroke-linecap='square'/>`;
const R = (x, y, w, h, kleur = NAVY) =>
  `<rect x='${x}' y='${y}' width='${w}' height='${h}' fill='none' stroke='${kleur}' stroke-width='1.5'/>`;
const RV = (x, y, w, h, kleur) => `<rect x='${x}' y='${y}' width='${w}' height='${h}' fill='${kleur}'/>`;
const C = (cx, cy, r, kleur = NAVY) =>
  `<circle cx='${cx}' cy='${cy}' r='${r}' fill='none' stroke='${kleur}' stroke-width='1.5'/>`;
const P = (punten, kleur = NAVY) =>
  `<polyline points='${punten}' fill='none' stroke='${kleur}' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='miter'/>`;

// Elk thema tekent binnen een vak van 160 bij 120, linksboven op 0,0.
const MOTIEF = {
  welzijn: (r) => {
    const a = 16 + Math.round(r() * 10);
    let d = `M0 ${76}`;
    for (let i = 0; i < 4; i++) d += ` q 20 -${a} 40 0 q 20 ${a} 40 0`;
    return `<path d="${d}" fill='none' stroke='${BLAUW}' stroke-width='1.5'/>` +
      `<path d="${d}" fill='none' stroke='${NAVY}' stroke-width='1.5' transform='translate(0 -22)'/>` +
      C(126, 26, 15) + RV(122, 22, 8, 8, GOUD);
  },
  loopbaan: (r) => {
    const n = 4;
    let p = "";
    for (let i = 0; i < n; i++) p += `${i * 34},${104 - i * 22} ${(i + 1) * 34},${104 - i * 22} ${(i + 1) * 34},${104 - (i + 1) * 22} `;
    return P(p.trim()) + L(136, 30, 152, 14, GOUD, 3) + L(136, 14, 152, 14, GOUD, 3);
  },
  teams: (r) => {
    const dy = Math.round(r() * 14);
    return C(34, 40 + dy, 15) + C(80, 78 - dy, 15) + C(126, 44, 15) +
      L(46, 48 + dy, 70, 70 - dy, BLAUW) + L(92, 72 - dy, 114, 52, BLAUW);
  },
  leiderschap: (r) =>
    P(`14,102 80,${20 + Math.round(r() * 10)} 146,102 14,102`) + RV(74, 8, 12, 12, GOUD),
  drijfveren: (r) => {
    const o = Math.round(r() * 8);
    return C(80 - o, 60, 16) + C(80 - o, 60, 30) + C(80 - o, 60, 44, BLAUW) + L(80 - o, 60, 132, 22, GOUD, 3);
  },
  persoonlijkheid: (r) => {
    const s = 44, cx = 80, cy = 60;
    const pt = (f) => Array.from({ length: 5 }, (_, i) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
      return `${(cx + Math.cos(a) * s * f).toFixed(1)},${(cy + Math.sin(a) * s * f).toFixed(1)}`;
    }).join(" ");
    const f = 0.45 + r() * 0.3;
    return P(pt(1) + " " + pt(1).split(" ")[0]) + P(pt(f) + " " + pt(f).split(" ")[0], BLAUW);
  },
  cognitie: (r) => {
    const h = Math.round(r() * 10);
    return R(20, 20, 80, 80) + R(60 + h, 40, 80, 60, BLAUW) + L(20, 60, 140, 60, GOUD, 3);
  },
  selectie: (r) => {
    const k = 10 + Math.round(r() * 10);
    return P(`14,18 146,18 96,62 96,104 64,88 64,62 14,18`) + L(14, 18, 146, 18, GOUD, 3) + L(110, 74 + k, 146, 74 + k, BLAUW);
  },
  hr: (r) => {
    let s = L(14, 104, 146, 104);
    const hs = [40, 66, 28, 84, 52].map((v) => v + Math.round(r() * 14));
    hs.forEach((h, i) => { s += RV(20 + i * 26, 104 - h, 14, h, i === 3 ? GOUD : NAVY); });
    return s;
  },
  ontwikkeling: (r) => {
    const st = 16 + Math.round(r() * 8);
    let s = L(14, 104, 146, 104) + L(14, 104, 14, 14);
    [0, 1, 2, 3].forEach((i) => { const h = st * (i + 1) * 0.72; s += RV(26 + i * 32, 104 - h, 16, h, i === 3 ? GOUD : NAVY); });
    return s + P(`22,${104 - st * 0.4} 60,${104 - st * 1.2} 98,${104 - st * 1.9} 136,${104 - st * 2.7}`, BLAUW);
  },
  product: (r) => {
    const n = 3 + Math.round(r() * 2);
    let s = R(14, 18, 132, 86) + L(14, 38, 146, 38);
    for (let i = 0; i < n; i++) s += L(28, 56 + i * 16, 28 + 60 + Math.round(r() * 40), 56 + i * 16, BLAUW);
    return s + RV(24, 24, 8, 8, GOUD);
  },
  modellen: (r) => {
    let s = "";
    for (let i = 0; i < 4; i++) {
      const w = 34 + i * 28, y = 24 + i * 20;
      s += R(80 - w / 2, y, w, 18, i === 0 ? GOUD : NAVY);
    }
    return s;
  },
  assessment: (r) => {
    let s = "";
    const n = 4;
    for (let i = 0; i < n; i++) {
      s += R(14, 20 + i * 22, 16, 16) + L(40, 28 + i * 22, 40 + 70 + Math.round(r() * 36), 28 + i * 22, BLAUW);
    }
    return s + P("18,50 24,56 34,42", GOUD);
  },
  overig: (r) => {
    let s = "";
    const o = Math.round(r() * 16);
    for (let i = 0; i < 7; i++) s += L(6 + i * 24 - o, 104, 40 + i * 24 - o, 16, i === 3 ? GOUD : BLAUW);
    return s;
  },
};

export const OMSLAG_THEMAS = Object.keys(MOTIEF);
export const OMSLAG_VARIANTEN = 6;

/** Tekent een omslag-SVG voor een thema en een variantnummer. */
export function omslagSvg(cat, variant) {
  const r = zaad(`${cat}#${variant}`);
  const teken = MOTIEF[cat] || MOTIEF.overig;
  // Het motief is 160 bij 120 en staat gecentreerd in het vlak van 400 bij 240,
  // met een kleine verschuiving per variant zodat ze niet identiek ogen.
  const x = 104 + Math.round(r() * 32);
  const y = 50 + Math.round(r() * 20);
  const raster = Array.from({ length: 8 }, (_, i) =>
    `<line x1='${i * 50}' y1='0' x2='${i * 50}' y2='240' stroke='#14315b' stroke-width='1' opacity='.06'/>`).join("");
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="400" height="240" role="img" aria-hidden="true">` +
    `<rect width='400' height='240' fill='${TINT}'/>` + raster +
    `<g transform='translate(${x} ${y}) scale(1.12)'>${teken(r)}</g>` +
    `<rect x='0' y='236' width='${90 + Math.round(r() * 120)}' height='4' fill='${GOUD}'/>` +
    `</svg>`
  );
}

/** Pad naar de omslag voor een artikel. Zelfde titel geeft altijd dezelfde omslag. */
export function omslagUrl(cat, titel) {
  const sleutel = MOTIEF[cat] ? cat : "overig";
  const r = zaad(titel || sleutel);
  const v = Math.floor(r() * OMSLAG_VARIANTEN);
  return `/media/kc-omslag/${sleutel}-${v}.svg`;
}
