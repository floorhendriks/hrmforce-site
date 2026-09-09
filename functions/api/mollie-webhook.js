// POST /api/mollie-webhook — Mollie meldt hier statuswijzigingen (form: id=tr_xxx).
// Verifieert de status bij Mollie, werkt de order bij en stuurt bij 'paid'
// eenmalig de teammelding + klantbevestiging met factuur-PDF. Idempotent.
import { invoiceModel, orderTextSummary } from "../_lib/invoice.js";
import { invoicePdf } from "../_lib/pdf.js";
import { sendMail } from "../_lib/mail.js";
import { eur } from "../_lib/vat.js";

function rowToOrder(row) {
  let items = [];
  try { items = (JSON.parse(row.items_json || "{}").items) || []; } catch (e) {}
  return {
    id: row.id, created: row.created, status: row.status, locale: row.locale,
    billing: {
      company: row.company, contact: row.contact, email: row.email, phone: row.phone,
      country: row.country, vat: row.vat, street: row.street, postal: row.postal,
      city: row.city, reference: row.reference,
    },
    items,
    subtotalCents: row.subtotal_cents, vatCents: row.vat_cents, totalCents: row.total_cents,
    vatMode: row.vat_mode, currency: row.currency, paidAt: row.paid_at,
  };
}

const MOLLIE_TO_STATUS = { paid: "paid", failed: "failed", canceled: "canceled", expired: "expired", open: "pending", pending: "pending", authorized: "pending" };

export async function onRequestPost(context) {
  const { request, env } = context;
  let paymentId = "";
  try {
    const ct = request.headers.get("content-type") || "";
    if (ct.indexOf("application/json") > -1) { const j = await request.json(); paymentId = j.id || ""; }
    else { const fd = await request.formData(); paymentId = fd.get("id") || ""; }
  } catch (e) {}
  if (!paymentId) return new Response("no id", { status: 400 });
  if (!env.MOLLIE_API_KEY || !env.DB) return new Response("ok", { status: 200 }); // niets te doen

  // Status ophalen bij Mollie (bron van waarheid).
  let pay;
  try {
    const r = await fetch("https://api.mollie.com/v2/payments/" + encodeURIComponent(paymentId), {
      headers: { Authorization: "Bearer " + env.MOLLIE_API_KEY },
    });
    pay = await r.json();
    if (!r.ok) { console.log("mollie_get_failed", r.status, JSON.stringify(pay)); return new Response("ok", { status: 200 }); }
  } catch (e) { console.log("mollie_get_error", String(e.message || e)); return new Response("ok", { status: 200 }); }

  const orderId = (pay.metadata && pay.metadata.orderId) || null;
  let row;
  try {
    row = orderId
      ? await env.DB.prepare("SELECT * FROM orders WHERE id=?").bind(orderId).first()
      : await env.DB.prepare("SELECT * FROM orders WHERE mollie_id=?").bind(paymentId).first();
  } catch (e) { console.log("order_lookup_failed", String(e.message || e)); return new Response("ok", { status: 200 }); }
  if (!row) { console.log("order_not_found", orderId, paymentId); return new Response("ok", { status: 200 }); }

  const newStatus = MOLLIE_TO_STATUS[pay.status] || "pending";

  // Idempotent: al afgehandeld en gemeld? Klaar.
  if (row.status === "paid" && row.notified === 1) return new Response("ok", { status: 200 });

  const paidAt = pay.paidAt || (pay.status === "paid" ? new Date().toISOString() : null);
  try {
    await env.DB.prepare("UPDATE orders SET status=?, paid_at=?, mollie_id=? WHERE id=?")
      .bind(newStatus, paidAt, paymentId, row.id).run();
  } catch (e) { console.log("order_update_failed", String(e.message || e)); }

  if (pay.status !== "paid") return new Response("ok", { status: 200 });

  // Betaald: eenmalig mailen.
  const order = rowToOrder({ ...row, status: "paid", paid_at: paidAt });
  let mailNote = "";
  try {
    const inv = invoiceModel(order, env);
    const pdf = invoicePdf(inv);
    const teamText = orderTextSummary(order);
    const to = ((env.ORDER_EMAIL_TO || "service@hrmforce.com").split(",")).map((s) => s.trim()).filter(Boolean);

    // 1) Teammelding (handmatige levering) + factuur-PDF.
    await sendMail(env, {
      to,
      subject: "Nieuwe bestelling " + order.id.slice(0, 8) + " — " + order.billing.company,
      text: teamText + "\n\nFactuur (" + inv.number + ") zit als bijlage.",
      attachments: [{ filename: "factuur-" + inv.number + ".pdf", content: pdf }],
      orderId: order.id,
    });

    // 2) Klantbevestiging + factuur (alleen mogelijk met Resend-provider).
    if ((env.MAIL_PROVIDER || "").toLowerCase() === "resend" || env.RESEND_API_KEY) {
      await sendMail(env, {
        to: [order.billing.email],
        subject: "Bevestiging van je bestelling bij hrmforce (" + inv.number + ")",
        text: "Bedankt voor je bestelling.\n\n" + teamText + "\n\nJe factuur zit als bijlage. Wij zetten de assessments handmatig klaar; de kandidaatlink(s) volgen kort na deze bevestiging.\n\nMet vriendelijke groet,\nhrmforce",
        attachments: [{ filename: "factuur-" + inv.number + ".pdf", content: pdf }],
        orderId: order.id,
      });
    } else {
      mailNote = "customer_mail_skipped_no_resend";
    }
    await env.DB.prepare("UPDATE orders SET notified=1 WHERE id=?").bind(order.id).run();
  } catch (e) {
    console.log("notify_failed", String(e.message || e));
    // notified blijft 0 → volgende webhook-poging probeert opnieuw.
  }
  if (mailNote) console.log(mailNote);
  return new Response("ok", { status: 200 });
}

export async function onRequestGet() {
  return new Response(JSON.stringify({ ok: true, endpoint: "mollie-webhook", method: "POST" }), { headers: { "Content-Type": "application/json" } });
}
