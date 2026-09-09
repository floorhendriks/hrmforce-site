// Branded HTML-e-mail (hrmforce huisstijl) voor bestelbevestiging (klant) en
// teammelding. Tabelgebaseerd + inline styles voor maximale mailclient-support.
const LOGO_URL = "https://website.hrmforce.com/media/hrmforce-logo-shop.png";
const NAVY = "#16356a", BLUE = "#0073e6", INK = "#1b212e", MUT = "#5d6576",
  LINE = "#e6e9f0", SOFT = "#f2f6fc", BG = "#eef1f6";

function esc(s) {
  return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// inv = invoiceModel(order). opts = { mode:'customer'|'team', contact, orderId }
export function orderEmailHtml(inv, opts) {
  opts = opts || {};
  const isTeam = opts.mode === "team";
  const contact = opts.contact || "";

  const itemRows = inv.items.map((it, i) => {
    const bg = i % 2 ? SOFT : "#ffffff";
    let cand = "";
    if (isTeam && it.candidates && it.candidates.length) {
      cand = '<div style="font-size:12px;color:' + MUT + ';margin-top:4px;line-height:1.5">' +
        it.candidates.map((c) => esc(c)).join("<br>") + "</div>";
    }
    return (
      '<tr>' +
      '<td style="padding:11px 14px;background:' + bg + ';border-bottom:1px solid ' + LINE + ';color:' + INK + ';font-size:14px">' +
      "<strong>" + esc(it.title) + "</strong>" + cand + "</td>" +
      '<td style="padding:11px 14px;background:' + bg + ';border-bottom:1px solid ' + LINE + ';color:' + INK + ';font-size:14px;text-align:center;white-space:nowrap">' + it.qty + "</td>" +
      '<td style="padding:11px 14px;background:' + bg + ';border-bottom:1px solid ' + LINE + ';color:' + INK + ';font-size:14px;text-align:right;white-space:nowrap"><strong>' + esc(it.total) + "</strong></td>" +
      "</tr>"
    );
  }).join("");

  const totalsRow = (label, val, strong, fill) =>
    '<tr>' +
    '<td style="padding:' + (strong ? "12px 14px" : "6px 14px") + ';text-align:right;font-size:' + (strong ? "15px" : "13px") + ';color:' + (fill ? "#ffffff" : (strong ? INK : MUT)) + ';' + (fill ? "background:" + NAVY + ";" : "") + '">' + (strong ? "<strong>" + esc(label) + "</strong>" : esc(label)) + "</td>" +
    '<td style="padding:' + (strong ? "12px 14px" : "6px 14px") + ';text-align:right;font-size:' + (strong ? "15px" : "13px") + ';color:' + (fill ? "#ffffff" : INK) + ';white-space:nowrap;' + (fill ? "background:" + NAVY + ";" : "") + '"><strong>' + esc(val) + "</strong></td>" +
    "</tr>";

  const heading = isTeam ? "Nieuwe bestelling" : "Bedankt voor je bestelling";
  const intro = isTeam
    ? "Er is een nieuwe bestelling betaald. Zet de assessments handmatig klaar. Details en factuur (" + esc(inv.number) + ") hieronder; de factuur zit ook als PDF-bijlage."
    : (contact ? "Beste " + esc(contact) + "," : "Beste klant,") +
      " we hebben je bestelling ontvangen en de betaling is gelukt. Hieronder je bevestiging. De factuur (" + esc(inv.number) + ") zit ook als PDF-bijlage.";

  const nextBlock = isTeam
    ? ""
    : '<tr><td style="padding:4px 32px 0">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:' + SOFT + ';border-radius:10px;border:1px solid ' + LINE + '">' +
      '<tr><td style="padding:16px 18px;font-size:14px;color:' + INK + ';line-height:1.6">' +
      '<strong style="color:' + NAVY + '">Wat gebeurt er nu?</strong><br>' +
      "Wij zetten de bestelde assessments handmatig voor je klaar. De persoonlijke uitnodigingslink(s) voor de kandida(a)t(en) ontvang je kort na deze bevestiging. Vragen? Mail ons gerust op " +
      '<a href="mailto:service@hrmforce.com" style="color:' + BLUE + '">service@hrmforce.com</a>.' +
      "</td></tr></table></td></tr>";

  const billBlock = isTeam
    ? '<tr><td style="padding:8px 32px 0"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">' +
      '<tr><td style="font-size:11px;font-weight:bold;letter-spacing:.4px;color:' + BLUE + ';padding-bottom:4px">FACTUURGEGEVENS</td></tr>' +
      '<tr><td style="font-size:13px;color:' + MUT + ';line-height:1.6">' + inv.billLines.map(esc).join("<br>") + "</td></tr>" +
      "</table></td></tr>"
    : "";

  return (
    '<!doctype html><html><body style="margin:0;padding:0;background:' + BG + ';">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:' + BG + ';padding:24px 12px">' +
    '<tr><td align="center">' +
    '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;box-shadow:0 2px 10px rgba(20,40,80,.06)">' +
    // header met logo
    '<tr><td style="padding:26px 32px 18px;border-bottom:3px solid ' + NAVY + '">' +
    '<img src="' + LOGO_URL + '" alt="hrmforce" width="200" style="display:block;border:0;height:auto;max-width:200px">' +
    "</td></tr>" +
    // titel
    '<tr><td style="padding:26px 32px 6px"><h1 style="margin:0;font-size:22px;color:' + NAVY + '">' + esc(heading) + "</h1>" +
    '<p style="margin:10px 0 0;font-size:14px;color:' + MUT + ';line-height:1.6">' + intro + "</p></td></tr>" +
    // meta
    '<tr><td style="padding:16px 32px 0"><table role="presentation" cellpadding="0" cellspacing="0"><tr>' +
    '<td style="font-size:13px;color:' + MUT + ';padding-right:24px">Factuurnummer<br><strong style="color:' + INK + ';font-size:14px">' + esc(inv.number) + "</strong></td>" +
    '<td style="font-size:13px;color:' + MUT + '">Datum<br><strong style="color:' + INK + ';font-size:14px">' + esc(inv.date) + "</strong></td>" +
    "</tr></table></td></tr>" +
    billBlock +
    // itemtabel
    '<tr><td style="padding:18px 32px 0"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ' + LINE + ';border-radius:10px;overflow:hidden">' +
    '<tr><td style="padding:10px 14px;background:' + NAVY + ';color:#fff;font-size:12px;font-weight:bold;letter-spacing:.3px">OMSCHRIJVING</td>' +
    '<td style="padding:10px 14px;background:' + NAVY + ';color:#fff;font-size:12px;font-weight:bold;text-align:center">AANTAL</td>' +
    '<td style="padding:10px 14px;background:' + NAVY + ';color:#fff;font-size:12px;font-weight:bold;text-align:right">BEDRAG</td></tr>' +
    itemRows +
    "</table></td></tr>" +
    // totalen
    '<tr><td style="padding:12px 32px 0"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden">' +
    totalsRow("Subtotaal (excl. btw)", inv.subtotal, false, false) +
    totalsRow(inv.vatLabel, inv.vat, false, false) +
    totalsRow("Totaal", inv.total, true, true) +
    "</table></td></tr>" +
    nextBlock +
    // footer
    '<tr><td style="padding:22px 32px 26px;margin-top:10px">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid ' + LINE + '"><tr><td style="padding-top:16px;font-size:12px;color:' + MUT + ';line-height:1.7">' +
    "<strong style=\"color:" + INK + "\">" + esc(inv.sellerName) + "</strong><br>" +
    esc(inv.sellerAddr) + "<br>" + esc(inv.sellerVat) + "<br>" +
    '<a href="mailto:service@hrmforce.com" style="color:' + BLUE + '">service@hrmforce.com</a> &nbsp;|&nbsp; ' +
    '<a href="https://hrmforce.com" style="color:' + BLUE + '">hrmforce.com</a>' +
    "</td></tr></table></td></tr>" +
    "</table></td></tr></table></body></html>"
  );
}
