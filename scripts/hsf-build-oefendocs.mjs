// Bouwt de oefenvragen-documenten (PDF) per vragenlijst en per taal.
// Draaien met: npm run hsf:oefendocs
// De inhoud komt uit dezelfde banken als de online oefentest, zodat document
// en website hetzelfde materiaal laten zien.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { DOC } from "./hsf-oefendoc-tekst.mjs";
import { VRAGENLIJSTEN, VL_UI } from "../src/data/oefenvragenlijst.js";
import { ONDERDELEN, OT_UI } from "../src/data/oefentest-ui.js";
import { beeldSvg } from "../src/lib/oefenfiguur.js";

const TALEN = ["nl", "en", "de", "fr", "es", "ro"];
const UIT = "public/media/oefenvragen";
const BANK = "src/data/oefenbank";

const NAVY = "#1B3A6B";
const BLAUW = "#037ACB";
const TINT = "#F4F7FB";
const LIJN = "#d7e1ee";

// oefen-slug op de site -> bron van de inhoud
export const DOCUMENTEN = {
  "big-five": { soort: "vl", sleutel: "bigfive" },
  disc: { soort: "vl", sleutel: "disc" },
  drijfveren: { soort: "vl", sleutel: "drijfveren" },
  leiderschap: { soort: "vl", sleutel: "leiderschap" },
  competenties: { soort: "vl", sleutel: "competenties" },
  studiekeuze: { soort: "vl", sleutel: "studiekeuze" },
  "cognitieve-test": { soort: "test" },
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Vaste, reproduceerbare keuze, gespreid over de dimensies. */
function kiesGespreid(items, aantal, dims, zaad) {
  let s = zaad >>> 0;
  const r = () => { s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
  const per = [];
  for (let d = 0; d < dims; d++) per.push([]);
  items.forEach((v) => { if (per[v.d]) per[v.d].push(v); });
  per.forEach((lijst) => { for (let i = lijst.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [lijst[i], lijst[j]] = [lijst[j], lijst[i]]; } });
  const uit = [];
  let ronde = 0;
  while (uit.length < aantal && ronde < 60) {
    for (let i = 0; i < per.length && uit.length < aantal; i++) if (per[i][ronde]) uit.push(per[i][ronde]);
    ronde++;
  }
  for (let i = uit.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [uit[i], uit[j]] = [uit[j], uit[i]]; }
  return uit;
}

function stijl(logo) {
  return `
  @page { size: A4; }
  * { box-sizing: border-box; }
  body { font-family: Arial, "Liberation Sans", Helvetica, sans-serif; color: #2b2b2b; font-size: 10.2pt; line-height: 1.5; margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .kop { display: flex; align-items: flex-end; justify-content: space-between; border-bottom: 2.5px solid ${BLAUW}; padding-bottom: 7px; margin-bottom: 20px; }
  .kop img { height: 34px; }
  .kop span { color: #6b7684; font-size: 8.6pt; }
  h1 { color: ${NAVY}; font-size: 22pt; line-height: 1.12; margin: 0 0 4px; letter-spacing: -0.3px; }
  .sub { color: ${BLAUW}; font-size: 11.6pt; margin: 0 0 22px; }
  h2 { color: ${BLAUW}; font-size: 14pt; margin: 26px 0 8px; break-after: avoid; break-inside: avoid; }
  h2:first-of-type { margin-top: 6px; }
  h3 { color: ${NAVY}; font-size: 11.4pt; margin: 20px 0 7px; break-after: avoid; }
  p { margin: 0 0 9px; }
  .let { border-left: 3px solid ${BLAUW}; background: ${TINT}; padding: 10px 13px; margin: 14px 0 0; font-size: 9.6pt; color: #3a4654; }
  table { width: 100%; border-collapse: collapse; margin: 12px 0 0; }
  th { background: ${BLAUW}; color: #fff; text-align: left; font-size: 9.2pt; padding: 7px 9px; font-weight: bold; }
  td { border-bottom: 1px solid ${LIJN}; padding: 7px 9px; font-size: 9.8pt; vertical-align: middle; }
  .vragen td { padding: 4.4px 9px; font-size: 9.2pt; line-height: 1.3; }
  .vragen th { padding: 6px 9px; }
  tr:nth-child(even) td { background: ${TINT}; }
  .cat td:first-child { color: ${NAVY}; font-weight: bold; width: 32%; }
  ul.tips { margin: 8px 0 0; padding: 0; list-style: none; }
  ul.tips li { position: relative; padding: 0 0 0 17px; margin: 0 0 7px; font-size: 9.8pt; }
  ul.tips li:before { content: ""; position: absolute; left: 0; top: 6px; width: 6px; height: 6px; background: ${BLAUW}; }
  .vragen th.n, .vragen td.n { width: 30px; text-align: center; color: #7a8694; font-size: 8.8pt; }
  .vragen th.s, .vragen td.s { width: 62px; text-align: center; }
  .vragen th.s { font-size: 7.8pt; line-height: 1.2; text-align: center; padding: 6px 3px; }
  .vragen td.s i { display: inline-block; width: 11px; height: 11px; border: 1px solid #9aa7b6; background: #fff; }
  .vragen td.u { font-size: 9.2pt; }
  .meet { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 9px; margin-top: 12px; }
  .meet div { border: 1px solid ${LIJN}; border-left: 3px solid ${BLAUW}; padding: 9px 12px; }
  .meet b { display: block; color: ${NAVY}; font-size: 10pt; margin-bottom: 2px; }
  .meet span { color: #56636f; font-size: 8.9pt; line-height: 1.45; }
  .breek { break-before: page; }
  .opties { margin: 5px 0 0; padding: 0; list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 3px 14px; }
  .opties li { font-size: 9.6pt; padding-left: 20px; position: relative; }
  .opties li b { position: absolute; left: 0; color: ${BLAUW}; }
  .vitem { border-bottom: 1px solid ${LIJN}; padding: 9px 0; break-inside: avoid; }
  .vitem .vk { color: ${NAVY}; font-weight: bold; font-size: 10pt; margin: 0 0 4px; }
  .reeks { margin: 4px 0 6px; font-size: 12pt; color: ${NAVY}; font-weight: bold; letter-spacing: 1.4px; }
  .stam { margin: 4px 0 6px; font-size: 10.4pt; color: ${NAVY}; font-weight: bold; }
  .fig { margin: 6px 0; }
  .fig svg { height: 92px; width: auto; }
  .figopties { display: flex; gap: 10px; margin-top: 6px; }
  .figopties div { text-align: center; }
  .figopties svg { height: 66px; width: auto; }
  .figopties span { display: block; font-size: 8.4pt; color: ${BLAUW}; font-weight: bold; }
  .sleutel td.t { font-size: 9.2pt; color: #56636f; }
  .sleutel td.j { width: 46px; text-align: center; color: ${NAVY}; font-weight: bold; }
  .logo { height: 34px; }
  `;
}

function pagina(inhoud, logo) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>${stijl(logo)}</style></head><body>${inhoud}</body></html>`;
}

/* ------------------------------------------------------------- vragenlijst */
function htmlVragenlijst(slug, sleutel, taal, bank, logo) {
  const d = DOC[taal];
  const v = VRAGENLIJSTEN[sleutel];
  const ui = VL_UI[taal];
  const naam = v.naam[taal];
  const dims = v.dimensies;
  const gekozen = kiesGespreid(bank, 25, dims.length, 20260926);
  const betekenis = [
    { nl: "Deze uitspraak past helemaal niet bij mij.", en: "This statement does not fit me at all.", de: "Diese Aussage passt gar nicht zu mir.", fr: "Cette affirmation ne me correspond pas du tout.", es: "Esta afirmación no encaja conmigo en absoluto.", ro: "Această afirmație nu mi se potrivește deloc." },
    { nl: "Deze uitspraak past niet zo bij mij.", en: "This statement does not really fit me.", de: "Diese Aussage passt eher nicht zu mir.", fr: "Cette affirmation ne me correspond pas vraiment.", es: "Esta afirmación no encaja mucho conmigo.", ro: "Această afirmație nu prea mi se potrivește." },
    { nl: "Ik zit hier echt tussenin.", en: "I genuinely sit in between here.", de: "Hier liege ich wirklich dazwischen.", fr: "Je suis vraiment entre les deux.", es: "Aquí estoy realmente en medio.", ro: "Aici sunt chiar la mijloc." },
    { nl: "Deze uitspraak past wel bij mij.", en: "This statement does fit me.", de: "Diese Aussage passt zu mir.", fr: "Cette affirmation me correspond.", es: "Esta afirmación sí encaja conmigo.", ro: "Această afirmație mi se potrivește." },
    { nl: "Deze uitspraak past helemaal bij mij.", en: "This statement fits me completely.", de: "Diese Aussage passt voll und ganz zu mir.", fr: "Cette affirmation me correspond tout à fait.", es: "Esta afirmación encaja del todo conmigo.", ro: "Această afirmație mi se potrivește pe deplin." },
  ];
  const schaalRijen = ui.schaal.map((s, i) => `<tr><td>${esc(s)}</td><td>${esc(betekenis[i][taal])}</td></tr>`).join("");
  const vraagRijen = gekozen.map((s, i) =>
    `<tr><td class="n">${i + 1}</td><td class="u">${esc(s.q)}</td>${ui.schaal.map(() => `<td class="s"><i></i></td>`).join("")}</tr>`).join("");
  const dimKaarten = dims.map((x) => `<div><b>${esc(x.naam[taal])}</b><span>${esc(x.hoog[taal])}</span></div>`).join("");

  return pagina(`
  <h1>${esc(d.onderVl(naam))}</h1>
  <p class="sub">${esc(d.sub)}</p>

  <h2>${esc(d.waaromKop)}</h2>
  <p>${esc(d.waaromVl(naam))}</p>
  <p>${esc(d.voorbeeld)} ${esc(d.geenFout)}</p>

  <h2>${esc(d.werktKop)}</h2>
  <p>${esc(d.werktVl)}</p>
  <table class="cat"><thead><tr><th>${esc(d.kolomCat)}</th><th>${esc(d.kolomBet)}</th></tr></thead><tbody>${schaalRijen}</tbody></table>

  <h3>${esc(d.tipsKop)}</h3>
  <ul class="tips">${d.tipsVl.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>

  <div class="breek"></div>
  <h2>${esc(d.deel1Vl)}</h2>
  <p style="font-size:9.6pt;color:#56636f">${esc(d.deel1VlLead)}</p>
  <table class="vragen"><thead><tr><th class="n">${esc(d.nr)}</th><th>${esc(d.uitspraak)}</th>${ui.schaal.map((s) => `<th class="s">${esc(s)}</th>`).join("")}</tr></thead><tbody>${vraagRijen}</tbody></table>

  <div class="breek"></div>
  <h2>${esc(d.meetKop)}</h2>
  <p>${esc(d.meetLead(naam))}</p>
  <div class="meet">${dimKaarten}</div>
  <h3>${esc(d.onlineKop)}</h3>
  <p>${esc(d.online)}</p>
  <div class="let">${esc(d.slot)}</div>
  `, logo);
}

/* -------------------------------------------------------------------- test */
function htmlTest(taal, banken, logo) {
  const d = DOC[taal];
  const naam = { nl: "cognitieve capaciteitentest", en: "cognitive ability test", de: "kognitiver Fähigkeitstest", fr: "test d'aptitude cognitive", es: "test de aptitud cognitiva", ro: "test de aptitudini cognitive" }[taal];
  const volgorde = ["numeriek", "verbaal", "calculation", "ruimtelijk", "abstract"];
  const secties = [];
  const sleutel = [];
  let nr = 0;
  for (const k of volgorde) {
    const o = ONDERDELEN[k];
    const items = banken[k].slice(0, 5);
    const blokken = items.map((v) => {
      nr++;
      sleutel.push({ nr, j: v.o[v.j], u: v.u, f: v.f });
      const opties = v.f
        ? `<div class="figopties">${v.o.map((x, i) => `<div><span>${"ABCDE".charAt(i)}</span>${beeldSvg(v.f, x, false)}</div>`).join("")}</div>`
        : `<ul class="opties">${v.o.map((x, i) => `<li><b>${"ABCDE".charAt(i)}</b>${esc(x)}</li>`).join("")}</ul>`;
      return `<div class="vitem">
        <p class="vk">${nr}. ${esc(v.q)}</p>
        ${v.r ? `<p class="reeks">${v.r.map(esc).join("&nbsp;&nbsp;&nbsp;")}</p>` : ""}
        ${v.m ? `<p class="stam">${esc(v.m)}</p>` : ""}
        ${v.b ? `<div class="fig">${beeldSvg(v.f, v.b, true)}</div>` : ""}
        ${opties}
      </div>`;
    }).join("");
    secties.push(`<h2>${esc(o.naam[taal])}</h2><p style="font-size:9.6pt;color:#56636f;margin-bottom:2px">${esc(o.lead[taal])}</p>${blokken}`);
  }
  const sleutelRijen = sleutel.map((s) =>
    `<tr><td class="j">${s.nr}</td><td class="j">${s.f ? esc(s.j).replace(/<[^>]*>/g, "") : esc(s.j)}</td><td class="t">${esc(s.u)}</td></tr>`).join("");
  const dimKaarten = volgorde.map((k) => `<div><b>${esc(ONDERDELEN[k].naam[taal])}</b><span>${esc(ONDERDELEN[k].lead[taal])}</span></div>`).join("");

  return pagina(`
  <h1>${esc(d.onderTest(naam))}</h1>
  <p class="sub">${esc(d.subTest)}</p>

  <h2>${esc(d.waaromKop)}</h2>
  <p>${esc(d.waaromTest(naam))}</p>
  <p>${esc(d.voorbeeld)} ${esc(d.welFout)}</p>

  <h2>${esc(d.werktKop)}</h2>
  <p>${esc(d.werktTest)}</p>
  <p>${esc(d.meetTest)}</p>
  <div class="meet">${dimKaarten}</div>

  <h3>${esc(d.tipsKop)}</h3>
  <ul class="tips">${d.tipsTest.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>

  <div class="breek"></div>
  ${secties.join('')}

  <div class="breek"></div>
  <h2>${esc(d.antwoordKop)}</h2>
  <p style="font-size:9.6pt;color:#56636f">${esc(d.antwoordLead)}</p>
  <table class="sleutel"><thead><tr><th class="j">${esc(d.vraag)}</th><th class="j">${esc(d.juist)}</th><th>${esc(d.toelichting)}</th></tr></thead><tbody>${sleutelRijen}</tbody></table>
  <h3>${esc(d.onlineKop)}</h3>
  <p>${esc(d.online)}</p>
  <div class="let">${esc(d.slotTest)}</div>
  `, logo);
}

/* ------------------------------------------------------------------ bouwen */
const pw = (await import("playwright")).default;
const svg = await readFile("public/media/wp-content/uploads/2022/03/HRM-LOGO.svg", "utf8");
const logo = "data:image/svg+xml;base64," + Buffer.from(svg, "utf8").toString("base64");
await mkdir(UIT, { recursive: true });

const browser = await pw.chromium.launch({ executablePath: process.env.CHROMIUM_PAD || "/opt/pw-browsers/chromium" });
let n = 0;
for (const taal of TALEN) {
  const testBanken = {};
  for (const k of ["numeriek", "verbaal", "calculation", "ruimtelijk", "abstract"]) {
    testBanken[k] = JSON.parse(await readFile(`${BANK}/${k}.${taal}.json`, "utf8"));
  }
  for (const [slug, cfg] of Object.entries(DOCUMENTEN)) {
    let html;
    if (cfg.soort === "vl") {
      const bank = JSON.parse(await readFile(`${BANK}/vl-${cfg.sleutel}.${taal}.json`, "utf8"));
      html = htmlVragenlijst(slug, cfg.sleutel, taal, bank, logo);
    } else {
      html = htmlTest(taal, testBanken, logo);
    }
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "load" });
    const titel = cfg.soort === "vl"
      ? DOC[taal].onderVl(VRAGENLIJSTEN[cfg.sleutel].naam[taal])
      : DOC[taal].onderTest({ nl: "cognitieve capaciteitentest", en: "cognitive ability test", de: "kognitiver Fähigkeitstest", fr: "test d'aptitude cognitive", es: "test de aptitud cognitiva", ro: "test de aptitudini cognitive" }[taal]);
    const kop = `<div style="width:100%;font-family:Arial,sans-serif;padding:0 15mm;">
      <div style="display:flex;align-items:flex-end;justify-content:space-between;border-bottom:2.5px solid ${BLAUW};padding-bottom:5px;">
        <img src="${logo}" style="height:26px">
        <span style="font-size:7.6pt;color:#6b7684">${titel.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</span>
      </div></div>`;
    const voet = `<div style="width:100%;font-family:Arial,sans-serif;font-size:7.4pt;color:#8a949f;padding:0 15mm;display:flex;justify-content:space-between">
      <span>hrmforce &middot; hrmforce.com | ${DOC[taal].kop}</span><span class="pageNumber"></span></div>`;
    await page.pdf({
      path: `${UIT}/${slug}-${taal}.pdf`,
      format: "A4", printBackground: true,
      margin: { top: "26mm", right: "15mm", bottom: "18mm", left: "15mm" },
      displayHeaderFooter: true,
      headerTemplate: kop,
      footerTemplate: voet,
    });
    await page.close();
    n++;
  }
}
await browser.close();
console.log(`${n} documenten geschreven in ${UIT}`);
