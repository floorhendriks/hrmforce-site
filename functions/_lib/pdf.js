// Afhankelijkheidsvrije PDF-generator (1 pagina A4, Helvetica) met huisstijl:
// hrmforce-logo (ingebedde JPEG), navy/blauwe accenten, nette factuurtabel.
// Werkt in Cloudflare Workers (geen Node-API's). Gebruikt "EUR" i.p.v. het
// euroteken om WinAnsi-encoding-problemen te vermijden.

// hrmforce-logo als JPEG (300x75), base64 — ingebed zodat de Worker geen
// externe fetch nodig heeft.
const LOGO_W = 300, LOGO_H = 75;
const LOGO_B64 = "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";

// Huisstijlkleuren (0-1 RGB)
const NAVY = [0.086, 0.208, 0.404];   // #16356a
const BLUE = [0.0, 0.451, 0.902];     // #0073e6
const INK  = [0.106, 0.129, 0.180];   // #1b212e
const MUT  = [0.365, 0.396, 0.463];   // #5d6576
const LINE = [0.85, 0.87, 0.91];
const SOFT = [0.949, 0.965, 0.988];   // lichte blauwtint

function pdfEscape(s) {
  return String(s == null ? "" : s).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}
function b64ToBytes(b64) {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
// Approx. tekstbreedte (Helvetica) voor rechts uitlijnen.
function textWidth(text, size, bold) {
  return String(text).length * size * (bold ? 0.56 : 0.5);
}

// spec: { texts:[{x,y,size,text,bold,color,right}], rects:[{x,y,w,h,color}],
//         lines:[{x1,y1,x2,y2,color,width}], logo:{x,y,w} }
function buildContent(spec) {
  let out = "";
  // rechthoeken (vullingen)
  for (const r of spec.rects || []) {
    const c = r.color || SOFT;
    out += c[0] + " " + c[1] + " " + c[2] + " rg " +
      r.x + " " + r.y + " " + r.w + " " + r.h + " re f\n";
  }
  // lijnen
  for (const l of spec.lines || []) {
    const c = l.color || LINE;
    out += c[0] + " " + c[1] + " " + c[2] + " RG " + (l.width || 1) + " w " +
      l.x1 + " " + l.y1 + " m " + l.x2 + " " + l.y2 + " l S\n";
  }
  // logo
  if (spec.logo) {
    const w = spec.logo.w, h = w * LOGO_H / LOGO_W;
    out += "q " + w + " 0 0 " + h + " " + spec.logo.x + " " + spec.logo.y + " cm /Im0 Do Q\n";
  }
  // teksten
  for (const d of spec.texts || []) {
    const font = d.bold ? "F2" : "F1";
    const c = d.color || INK;
    let x = d.x;
    if (d.right) x = d.x - textWidth(d.text, d.size || 10, d.bold);
    out += c[0] + " " + c[1] + " " + c[2] + " rg BT /" + font + " " + (d.size || 10) + " Tf " +
      x + " " + d.y + " Td (" + pdfEscape(d.text) + ") Tj ET\n";
  }
  return out;
}

// Assembleert een 1-pagina A4-PDF (595x842) met 1 ingebedde JPEG. Uint8Array.
export function makePdf(spec) {
  const enc = new TextEncoder();
  const content = buildContent(spec);
  const contentBytes = enc.encode(content);
  const logoBytes = b64ToBytes(LOGO_B64);

  const parts = [];         // Uint8Array chunks
  const offsets = [];       // byte-offset per object
  let pos = 0;
  const push = (u8) => { parts.push(u8); pos += u8.length; };
  const pushStr = (s) => push(enc.encode(s));

  pushStr("%PDF-1.4\n");

  const objText = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> /XObject << /Im0 7 0 R >> >> /Contents 4 0 R >>",
    "<< /Length " + contentBytes.length + " >>\nstream\n" + content + "\nendstream",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
  ];
  for (let i = 0; i < objText.length; i++) {
    offsets[i] = pos;
    pushStr((i + 1) + " 0 obj\n" + objText[i] + "\nendobj\n");
  }
  // Object 7: image XObject (binaire JPEG-stream)
  offsets[6] = pos;
  pushStr("7 0 obj\n<< /Type /XObject /Subtype /Image /Width " + LOGO_W + " /Height " + LOGO_H +
    " /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length " + logoBytes.length + " >>\nstream\n");
  push(logoBytes);
  pushStr("\nendstream\nendobj\n");

  const xrefStart = pos;
  let xref = "xref\n0 " + (objText.length + 2) + "\n0000000000 65535 f \n";
  for (let i = 0; i < objText.length + 1; i++) xref += String(offsets[i]).padStart(10, "0") + " 00000 n \n";
  xref += "trailer\n<< /Size " + (objText.length + 2) + " /Root 1 0 R >>\nstartxref\n" + xrefStart + "\n%%EOF";
  pushStr(xref);

  const total = new Uint8Array(pos);
  let o = 0;
  for (const p of parts) { total.set(p, o); o += p.length; }
  return total;
}

// Zet een factuurmodel om in een opgemaakte 1-pagina-PDF.
export function invoicePdf(inv) {
  const L = 56, R = 539, W = R - L;
  const texts = [], rects = [], lines = [];
  const T = (x, y, size, text, o) => texts.push(Object.assign({ x, y, size, text }, o || {}));

  // Header: logo links, factuurmeta rechts, navy accentlijn
  const logo = { x: L, y: 786, w: 150 };
  T(R, 812, 22, "Factuur", { bold: true, right: true, color: NAVY });
  T(R, 796, 9.5, inv.number, { right: true, color: MUT });
  T(R, 783, 9.5, "Datum: " + inv.date, { right: true, color: MUT });
  lines.push({ x1: L, y1: 772, x2: R, y2: 772, color: NAVY, width: 2 });

  // Verkoper (links) + factuuradres (rechts)
  let ly = 752;
  T(L, ly, 8.5, "VAN", { bold: true, color: BLUE });
  T(R, ly, 8.5, "FACTUUR AAN", { bold: true, color: BLUE, right: true });
  ly -= 15;
  T(L, ly, 10, inv.sellerName, { bold: true, color: INK });
  const billTop = ly;
  ly -= 13;
  for (const s of [inv.sellerAddr, inv.sellerVat].filter(Boolean)) { T(L, ly, 9, s, { color: MUT }); ly -= 12; }
  // factuuradres rechts uitgelijnd
  let ry = billTop;
  for (const line of inv.billLines) { T(R, ry, 9, line, { right: true, color: (ry === billTop ? INK : MUT), bold: ry === billTop }); ry -= 12.5; }

  // Itemtabel
  let y = Math.min(ly, ry) - 24;
  const cQty = 348, cUnit = 452, cTot = R;
  rects.push({ x: L, y: y - 5, w: W, h: 20, color: NAVY });
  T(L + 10, y, 9, "Omschrijving", { bold: true, color: [1, 1, 1] });
  T(cQty, y, 9, "Aantal", { bold: true, color: [1, 1, 1], right: true });
  T(cUnit, y, 9, "Stukprijs", { bold: true, color: [1, 1, 1], right: true });
  T(cTot, y, 9, "Totaal", { bold: true, color: [1, 1, 1], right: true });
  y -= 24;
  let zebra = false;
  for (const it of inv.items) {
    const rowH = 16 + (it.candidates ? it.candidates.length * 11 : 0);
    if (zebra) rects.push({ x: L, y: y - rowH + 12, w: W, h: rowH, color: SOFT });
    zebra = !zebra;
    T(L + 10, y, 9.5, it.title.slice(0, 54), { color: INK });
    T(cQty, y, 9.5, String(it.qty), { right: true, color: INK });
    T(cUnit, y, 9.5, it.unit, { right: true, color: INK });
    T(cTot, y, 9.5, it.total, { right: true, color: INK, bold: true });
    y -= 15;
    for (const c of it.candidates || []) { T(L + 18, y, 8, c.slice(0, 78), { color: MUT }); y -= 11; }
    y -= 3;
    lines.push({ x1: L, y1: y + 6, x2: R, y2: y + 6, color: LINE, width: 0.6 });
  }

  // Totalen
  y -= 10;
  const tl = 360;
  T(tl, y, 9.5, "Subtotaal (excl. btw)", { color: MUT }); T(R, y, 9.5, inv.subtotal, { right: true, color: INK }); y -= 15;
  T(tl, y, 9.5, inv.vatLabel, { color: MUT }); T(R, y, 9.5, inv.vat, { right: true, color: INK }); y -= 8;
  rects.push({ x: tl - 6, y: y - 20, w: R - tl + 6, h: 26, color: NAVY });
  T(tl, y - 14, 11.5, "Totaal", { bold: true, color: [1, 1, 1] });
  T(R - 6, y - 14, 11.5, inv.total, { bold: true, color: [1, 1, 1], right: true });
  y -= 40;

  // Notities / juridisch
  for (const note of inv.notes || []) { T(L, y, 8.2, note.slice(0, 110), { color: MUT }); y -= 11; }

  // Footer
  rects.push({ x: 0, y: 0, w: 595, h: 34, color: SOFT });
  T(L, 13, 8, inv.sellerName + "  |  " + inv.sellerAddr, { color: MUT });
  T(R, 13, 8, "shop@hrmforce.com  |  hrmforce.com", { color: BLUE, right: true });

  return makePdf({ texts, rects, lines, logo });
}
