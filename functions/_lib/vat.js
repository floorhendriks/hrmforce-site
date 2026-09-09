// Btw-logica (B2B, prijzen excl. btw). Verkoper = hrmforce (NL).
// - NL-klant: 21% NL-btw.
// - EU-bedrijf met geldig btw-nummer: 0% (btw verlegd / reverse charge).
// - EU zonder btw-nummer: 21% NL-btw (veilige default; adviseer btw-nummer).
// - Buiten de EU: 0% (buiten scope / export).
// LET OP: OSS-nuance (B2C in andere EU-landen) valt hier bewust buiten; dit is
// een zakelijke (B2B) flow. Laat de definitieve btw-behandeling door de
// boekhouder bevestigen.
export const EU = ["AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE"];
const NL_RATE = 0.21;

export function vatNumberLooksValid(vat) {
  if (!vat) return false;
  const v = String(vat).replace(/\s+/g, "").toUpperCase();
  if (v.length < 8 || v.length > 14) return false;
  const cc = v.slice(0, 2);
  return EU.indexOf(cc) > -1 && /[0-9]/.test(v.slice(2));
}

export function computeVat(country, vat) {
  country = (country || "").toUpperCase();
  if (country === "NL") return { rate: NL_RATE, mode: "nl" };
  if (EU.indexOf(country) > -1) {
    if (vatNumberLooksValid(vat)) return { rate: 0, mode: "reverse" };
    return { rate: NL_RATE, mode: "nl_default" };
  }
  if (country === "XX" || country === "") return { rate: 0, mode: "export" };
  return { rate: NL_RATE, mode: "nl" }; // onbekend land: veilige default
}

// Bedragen in centen om afrondingsfouten te vermijden.
export function priceOrder(lines, prices, country, vat) {
  let subtotalCents = 0;
  const items = [];
  for (const l of lines || []) {
    const p = prices[l.handle];
    if (!p) throw new Error("unknown_product:" + l.handle);
    const qty = Math.max(1, Math.min(999, parseInt(l.qty, 10) || 1));
    const unitCents = Math.round(p.price * 100);
    const lineCents = unitCents * qty;
    subtotalCents += lineCents;
    items.push({ handle: l.handle, title: p.title, qty, unitCents, lineCents, candidates: l.candidates || [] });
  }
  const v = computeVat(country, vat);
  const vatCents = Math.round(subtotalCents * v.rate);
  const totalCents = subtotalCents + vatCents;
  return { items, subtotalCents, vatCents, totalCents, vatRate: v.rate, vatMode: v.mode };
}

export function eur(cents) { return (cents / 100).toFixed(2); }
