// Bouwt een factuurmodel + tekstsamenvattingen uit een orderrecord.
import { eur } from "./vat.js";

function money(cents) { return "EUR " + eur(cents).replace(".", ","); }

const LANGNAME = { nl: "Nederlands", en: "Engels", de: "Duits", fr: "Frans", es: "Spaans", ro: "Roemeens" };
const LEVELNAME = { operational: "Operational", bachelor: "Bachelor", master: "Master" };

export function candidateLines(item) {
  const out = [];
  for (const c of item.candidates || []) {
    out.push("Kandidaat " + c.n + ": " + (c.name || "-") + (c.email ? " <" + c.email + ">" : "") +
      (c.lang ? ", taal: " + (LANGNAME[c.lang] || c.lang) : "") +
      (c.level ? ", niveau: " + (LEVELNAME[c.level] || c.level) : ""));
  }
  return out;
}

// order = record uit checkout (met billing, items, *_cents, vatMode).
export function invoiceModel(order, env, opts) {
  opts = opts || {};
  const b = order.billing || {};
  const seller = {
    name: (env && env.SELLER_NAME) || "hrmforce B.V.",
    addr: (env && env.SELLER_ADDR) || "Solitudolaan 396, 1096 DS Amsterdam, Nederland",
    vat: (env && env.SELLER_VAT) || "",
    kvk: (env && env.SELLER_KVK) || "",
    iban: (env && env.SELLER_IBAN) || "",
  };
  const num = "HF-" + (order.created || "").slice(0, 10).replace(/-/g, "") + "-" + String(order.id).slice(0, 6).toUpperCase();
  const items = (order.items || []).map((it) => ({
    title: it.title,
    qty: it.qty,
    unit: money(it.unitCents),
    total: money(it.lineCents),
    candidates: candidateLines(it),
  }));

  let vatLabel = "Btw 21%";
  if (order.vatMode === "reverse") vatLabel = "Btw verlegd (0%)";
  else if (order.vatMode === "export") vatLabel = "Buiten EU (0%)";

  const notes = [];
  if (order.vatMode === "reverse") notes.push("Btw verlegd naar de afnemer (art. 196 EU-btw-richtlijn). Btw-nummer afnemer: " + (b.vat || "-") + ".");
  else if (order.vatMode === "export") notes.push("Levering buiten de EU: 0% btw.");
  if (order.paidAt) notes.push("Voldaan via Mollie op " + order.paidAt.slice(0, 10) + ".");
  const sellerLegal = [seller.vat ? "Btw: " + seller.vat : "", seller.kvk ? "KvK: " + seller.kvk : "", seller.iban ? "IBAN: " + seller.iban : ""].filter(Boolean).join("   ");
  if (sellerLegal) notes.push(sellerLegal);
  if (b.reference) notes.push("Referentie: " + b.reference);

  return {
    docTitle: "Factuur",
    number: num,
    date: (order.created || "").slice(0, 10),
    sellerName: seller.name,
    sellerAddr: seller.addr,
    sellerVat: [seller.vat ? "Btw " + seller.vat : "", seller.kvk ? "KvK " + seller.kvk : ""].filter(Boolean).join("  "),
    billTo: "Factuuradres:",
    billLines: [
      b.company, b.contact, (b.street || ""), ((b.postal || "") + " " + (b.city || "")).trim(),
      b.country, b.vat ? "Btw: " + b.vat : "", b.email,
    ].filter(Boolean),
    items,
    subtotal: money(order.subtotalCents),
    vatLabel,
    vat: money(order.vatCents),
    total: money(order.totalCents),
    notes,
  };
}

// Platte-tekst ordersamenvatting voor de teammelding.
export function orderTextSummary(order) {
  const b = order.billing || {};
  const lines = [];
  lines.push("Order: " + order.id);
  lines.push("Datum: " + order.created);
  lines.push("Bedrijf: " + b.company + " — " + b.contact + " <" + b.email + ">" + (b.phone ? ", tel " + b.phone : ""));
  lines.push("Land: " + b.country + (b.vat ? ", btw " + b.vat : ""));
  lines.push("Adres: " + [b.street, (b.postal + " " + b.city).trim(), b.country].filter(Boolean).join(", "));
  if (b.reference) lines.push("Referentie: " + b.reference);
  lines.push("");
  lines.push("Bestelde assessments (handmatig klaarzetten):");
  for (const it of order.items || []) {
    lines.push("- " + it.title + " x" + it.qty + "  (" + money(it.unitCents) + " p/st)");
    for (const c of candidateLines(it)) lines.push("    " + c);
  }
  lines.push("");
  lines.push("Subtotaal (excl. btw): " + money(order.subtotalCents));
  lines.push("Btw (" + order.vatMode + "): " + money(order.vatCents));
  lines.push("Totaal: " + money(order.totalCents));
  return lines.join("\n");
}
