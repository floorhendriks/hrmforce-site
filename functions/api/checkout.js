// POST /api/checkout — native afrekenen met Mollie.
// Ontvangt de bestelling van de checkoutpagina, herberekent prijzen + btw
// GEZAGHEBBEND op de server, slaat de order op (D1) en maakt een Mollie-betaling.
// Vereist: env.MOLLIE_API_KEY (secret). Optioneel: env.DB (D1) voor orderopslag.
import { PRICES } from "../_lib/catalog.js";
import { priceOrder, eur } from "../_lib/vat.js";

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json" } });

function uuid() {
  return (crypto.randomUUID && crypto.randomUUID()) ||
    ("o-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10));
}

function validEmail(s) {
  s = (s || "").trim();
  const at = s.indexOf("@");
  return at > 0 && s.indexOf(".", at) > at + 1 && s.indexOf(" ") < 0;
}

export async function onRequestPost(context) {
  const { request, env } = context;
  let body;
  try { body = await request.json(); } catch (e) { return json({ error: "bad_json" }, 400); }

  const lines = Array.isArray(body.lines) ? body.lines : [];
  const b = body.billing || {};
  const locale = ["nl", "en", "de", "fr", "es", "ro"].indexOf(body.locale) > -1 ? body.locale : "nl";

  if (!lines.length) return json({ error: "empty_cart" }, 400);
  if (!b.company || !b.contact || !validEmail(b.email) || !b.country || !b.street || !b.city || !b.postal)
    return json({ error: "missing_fields" }, 400);

  let priced;
  try { priced = priceOrder(lines, PRICES, b.country, b.vat); }
  catch (e) { return json({ error: "pricing_failed", detail: String(e.message || e) }, 400); }

  if (priced.totalCents <= 0) return json({ error: "zero_total" }, 400);

  const orderId = uuid();
  const origin = new URL(request.url).origin;
  const localePrefix = locale === "nl" ? "" : "/" + locale;
  const redirectUrl = origin + localePrefix + "/bestelling-gelukt/?order=" + orderId;
  const webhookUrl = origin + "/api/mollie-webhook";

  const orderRecord = {
    id: orderId,
    created: new Date().toISOString(),
    status: "open",
    locale,
    currency: "EUR",
    billing: {
      company: b.company, contact: b.contact, email: b.email, phone: b.phone || "",
      country: b.country, vat: b.vat || "", street: b.street, postal: b.postal,
      city: b.city, reference: b.reference || "",
    },
    items: priced.items,
    subtotalCents: priced.subtotalCents,
    vatCents: priced.vatCents,
    totalCents: priced.totalCents,
    vatRate: priced.vatRate,
    vatMode: priced.vatMode,
    molliePaymentId: null,
  };

  // Order opslaan (D1) vóór de betaling, zodat de webhook de details heeft.
  if (env.DB) {
    try {
      await env.DB.prepare(
        "INSERT INTO orders (id, created, status, locale, email, company, contact, phone, country, vat, street, postal, city, reference, subtotal_cents, vat_cents, total_cents, vat_mode, currency, mollie_id, items_json) " +
        "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
      ).bind(
        orderId, orderRecord.created, "open", locale, b.email, b.company, b.contact, b.phone || "",
        b.country, b.vat || "", b.street, b.postal, b.city, b.reference || "",
        priced.subtotalCents, priced.vatCents, priced.totalCents, priced.vatMode, "EUR", null,
        JSON.stringify({ items: priced.items })
      ).run();
    } catch (e) {
      // Opslag mislukt: log en ga door (betaling blijft mogelijk, webhook valt terug op metadata).
      console.log("order_store_failed", String(e.message || e));
    }
  }

  if (!env.MOLLIE_API_KEY) return json({ error: "payments_unconfigured" }, 503);

  const description = "hrmforce bestelling " + orderId.slice(0, 8) + " (" + b.company + ")";
  const molliePayload = {
    amount: { currency: "EUR", value: eur(priced.totalCents) },
    description: description.slice(0, 255),
    redirectUrl,
    webhookUrl,
    locale: { nl: "nl_NL", en: "en_GB", de: "de_DE", fr: "fr_FR", es: "es_ES", ro: "en_GB" }[locale],
    metadata: { orderId, email: b.email, company: b.company, total: eur(priced.totalCents) },
  };

  let mollie;
  try {
    const r = await fetch("https://api.mollie.com/v2/payments", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + env.MOLLIE_API_KEY },
      body: JSON.stringify(molliePayload),
    });
    mollie = await r.json();
    if (!r.ok) {
      console.log("mollie_error", r.status, JSON.stringify(mollie));
      return json({ error: "payment_create_failed" }, 502);
    }
  } catch (e) {
    console.log("mollie_fetch_failed", String(e.message || e));
    return json({ error: "payment_unreachable" }, 502);
  }

  const checkoutUrl = mollie && mollie._links && mollie._links.checkout && mollie._links.checkout.href;
  if (!checkoutUrl) return json({ error: "no_checkout_url" }, 502);

  // Mollie-betaal-ID koppelen aan de order.
  if (env.DB && mollie.id) {
    try { await env.DB.prepare("UPDATE orders SET mollie_id=?, status=? WHERE id=?").bind(mollie.id, "pending", orderId).run(); }
    catch (e) { console.log("order_link_failed", String(e.message || e)); }
  }

  return json({ orderId, checkoutUrl });
}

// GET geeft een nette melding (voor debuggen).
export async function onRequestGet() {
  return json({ ok: true, endpoint: "checkout", method: "POST" });
}
