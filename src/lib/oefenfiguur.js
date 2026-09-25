// Tekent de figuren voor de oefentest. Zowel het bouwscript als de pagina
// gebruiken dit, zodat de opgeslagen bank alleen een korte beschrijving hoeft
// te bevatten en niet de hele SVG.
const NAVY = "#0E468C";
const GOUD = "#fcc11b";
const LIJN = "#c9d4e4";
const N = 4;

/** "3,0;2,1|1,3" -> { blokken: [[3,0],[2,1]], stip: [1,3] } */
export function leesFiguur(spec) {
  const [b, s] = spec.split("|");
  return {
    blokken: b ? b.split(";").map((c) => c.split(",").map(Number)) : [],
    stip: s.split(",").map(Number),
  };
}

export function figuurSvg(spec, groot) {
  const f = leesFiguur(spec);
  const m = groot ? 148 : 104, p = m / N;
  const vak = (x, y, rond) => {
    const px = x * p + p * 0.13, py = y * p + p * 0.13, s = p * 0.74;
    return rond
      ? `<circle cx="${(px + s / 2).toFixed(1)}" cy="${(py + s / 2).toFixed(1)}" r="${(s / 2).toFixed(1)}" fill="${GOUD}"/>`
      : `<rect x="${px.toFixed(1)}" y="${py.toFixed(1)}" width="${s.toFixed(1)}" height="${s.toFixed(1)}" rx="2" fill="${NAVY}"/>`;
  };
  let raster = "";
  for (let i = 1; i < N; i++) {
    const v = (i * p).toFixed(1);
    raster += `<line x1="${v}" y1="0" x2="${v}" y2="${m}" stroke="${LIJN}"/><line x1="0" y1="${v}" x2="${m}" y2="${v}" stroke="${LIJN}"/>`;
  }
  return `<svg viewBox="0 0 ${m} ${m}" width="${m}" height="${m}" aria-hidden="true">` +
    `<rect x="0.5" y="0.5" width="${m - 1}" height="${m - 1}" fill="#fff" stroke="${LIJN}"/>${raster}` +
    f.blokken.map(([x, y]) => vak(x, y, false)).join("") + vak(f.stip[0], f.stip[1], true) + "</svg>";
}

/** De zes tekens op de vlakken. */
export function tekenPad(i, kleur) {
  return [
    `<circle cx="0" cy="0" r="7" fill="${kleur}"/>`,
    `<path d="M0,-8 L7,6 L-7,6 Z" fill="${kleur}"/>`,
    `<rect x="-6.5" y="-6.5" width="13" height="13" fill="${kleur}"/>`,
    `<path d="M-8,-2.5 H-2.5 V-8 H2.5 V-2.5 H8 V2.5 H2.5 V8 H-2.5 V2.5 H-8 Z" fill="${kleur}"/>`,
    `<path d="M0,-9 L2.4,-2.9 L8.9,-2.9 L3.7,1.1 L5.6,7.3 L0,3.5 L-5.6,7.3 L-3.7,1.1 L-8.9,-2.9 L-2.4,-2.9 Z" fill="${kleur}"/>`,
    `<rect x="-8.5" y="-3" width="17" height="6" rx="1" fill="${kleur}"/>`,
  ][i];
}

/** spec = zes cijfers in de volgorde U,D,F,B,L,R. Kruisvormige uitslag. */
export function uitslagSvg(spec) {
  const v = spec.split("").map(Number);
  const [U, D, F, B, L, R] = v;
  const s = 44, ox = 8, oy = 8;
  const plaats = [[1, 0, U], [0, 1, L], [1, 1, F], [2, 1, R], [3, 1, B], [1, 2, D]];
  const cellen = plaats.map(([c, rr, t]) =>
    `<rect x="${ox + c * s}" y="${oy + rr * s}" width="${s}" height="${s}" fill="#fff" stroke="${NAVY}" stroke-width="1.5"/>` +
    `<g transform="translate(${ox + c * s + s / 2},${oy + rr * s + s / 2})">${tekenPad(t, NAVY)}</g>`).join("");
  const w = ox * 2 + 4 * s, h = oy * 2 + 3 * s;
  return `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" aria-hidden="true">${cellen}</svg>`;
}

/** spec = drie cijfers: voorvlak, rechtervlak, bovenvlak. */
export function kubusSvg(spec) {
  const [f, r, u] = spec.split("").map(Number);
  const T = "50,10", L = "14,31", R2 = "86,31", C = "50,52", BL = "14,73", BR = "86,73", B = "50,94";
  const vlakken = [
    [`M${T} L${R2} L${C} L${L} Z`, "#f4f7fb", u, 50, 31],
    [`M${L} L${C} L${B} L${BL} Z`, "#ffffff", f, 32, 62],
    [`M${C} L${R2} L${BR} L${B} Z`, "#eef2f8", r, 68, 62],
  ];
  return `<svg viewBox="0 0 100 104" width="100" height="104" aria-hidden="true">` +
    vlakken.map(([d, vul]) => `<path d="${d}" fill="${vul}" stroke="${NAVY}" stroke-width="1.5" stroke-linejoin="round"/>`).join("") +
    vlakken.map(([, , t, cx, cy]) => `<g transform="translate(${cx},${cy}) scale(0.62)">${tekenPad(t, NAVY)}</g>`).join("") +
    "</svg>";
}

/** Eén ingang voor de pagina: soort bepaalt de tekenaar. */
export function beeldSvg(soort, spec, groot) {
  if (soort === "draaien") return figuurSvg(spec, groot);
  if (soort === "vouwen") return groot ? uitslagSvg(spec) : kubusSvg(spec);
  return "";
}
