// Minimale, afhankelijkheidsvrije PDF-generator (1 pagina, Helvetica).
// Werkt in Cloudflare Workers (geen Node-API's). Gebruikt "EUR" i.p.v. het
// euroteken om encoding-problemen te vermijden.

function pdfEscape(s) {
  return String(s == null ? "" : s).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

// draws: array van { x, y, size, text, bold }
function buildContent(draws) {
  let out = "";
  for (const d of draws) {
    const font = d.bold ? "F2" : "F1";
    out += "BT /" + font + " " + (d.size || 10) + " Tf " +
      (d.x || 56) + " " + (d.y || 800) + " Td (" + pdfEscape(d.text) + ") Tj ET\n";
  }
  return out;
}

// Bouwt een 1-pagina A4-PDF (595x842 pt). Retourneert Uint8Array.
export function makePdf(draws) {
  const content = buildContent(draws);
  const enc = new TextEncoder();
  const objs = [];
  objs.push("<< /Type /Catalog /Pages 2 0 R >>");
  objs.push("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  objs.push("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] " +
    "/Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>");
  const contentBytes = enc.encode(content);
  objs.push("<< /Length " + contentBytes.length + " >>\nstream\n" + content + "\nendstream");
  objs.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>");
  objs.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>");

  let pdf = "%PDF-1.4\n";
  const offsets = [];
  for (let i = 0; i < objs.length; i++) {
    offsets.push(pdf.length);
    pdf += (i + 1) + " 0 obj\n" + objs[i] + "\nendobj\n";
  }
  const xrefStart = pdf.length;
  pdf += "xref\n0 " + (objs.length + 1) + "\n";
  pdf += "0000000000 65535 f \n";
  for (const off of offsets) pdf += String(off).padStart(10, "0") + " 00000 n \n";
  pdf += "trailer\n<< /Size " + (objs.length + 1) + " /Root 1 0 R >>\nstartxref\n" + xrefStart + "\n%%EOF";
  return enc.encode(pdf);
}

// Zet een factuurmodel om in PDF-tekenopdrachten.
export function invoicePdf(inv) {
  const draws = [];
  let y = 800;
  const L = 56;
  draws.push({ x: L, y, size: 20, text: "hrmforce", bold: true }); y -= 6;
  draws.push({ x: 420, y: 802, size: 14, text: inv.docTitle, bold: true });
  y -= 22;
  draws.push({ x: 420, y, size: 9, text: inv.number });
  draws.push({ x: L, y, size: 9, text: inv.sellerName }); y -= 12;
  draws.push({ x: 420, y, size: 9, text: inv.date });
  draws.push({ x: L, y, size: 9, text: inv.sellerAddr }); y -= 12;
  draws.push({ x: L, y, size: 9, text: inv.sellerVat });
  y -= 28;
  draws.push({ x: L, y, size: 9, text: inv.billTo, bold: true }); y -= 13;
  for (const line of inv.billLines) { draws.push({ x: L, y, size: 9, text: line }); y -= 12; }
  y -= 16;

  // Tabelkop
  draws.push({ x: L, y, size: 9, text: "Omschrijving", bold: true });
  draws.push({ x: 360, y, size: 9, text: "Aantal", bold: true });
  draws.push({ x: 430, y, size: 9, text: "Stukprijs", bold: true });
  draws.push({ x: 510, y, size: 9, text: "Totaal", bold: true });
  y -= 6;
  draws.push({ x: L, y, size: 9, text: "____________________________________________________________________________" });
  y -= 16;
  for (const it of inv.items) {
    draws.push({ x: L, y, size: 9, text: it.title.slice(0, 52) });
    draws.push({ x: 372, y, size: 9, text: String(it.qty) });
    draws.push({ x: 430, y, size: 9, text: it.unit });
    draws.push({ x: 505, y, size: 9, text: it.total });
    y -= 13;
    for (const c of it.candidates || []) { draws.push({ x: L + 10, y, size: 8, text: c.slice(0, 70) }); y -= 11; }
  }
  y -= 8;
  draws.push({ x: L, y, size: 9, text: "____________________________________________________________________________" });
  y -= 18;
  draws.push({ x: 400, y, size: 9, text: "Subtotaal (excl. btw)" });
  draws.push({ x: 505, y, size: 9, text: inv.subtotal }); y -= 14;
  draws.push({ x: 400, y, size: 9, text: inv.vatLabel });
  draws.push({ x: 505, y, size: 9, text: inv.vat }); y -= 16;
  draws.push({ x: 400, y, size: 11, text: "Totaal", bold: true });
  draws.push({ x: 505, y, size: 11, text: inv.total, bold: true }); y -= 26;
  for (const note of inv.notes || []) { draws.push({ x: L, y, size: 8, text: note }); y -= 11; }
  return makePdf(draws);
}
