// GET /api/invoice?order=<id> — factuur-PDF downloaden (na betaling).
// De order-id is een niet-raadbare uuid; alleen betaalde orders worden getoond.
import { invoiceModel } from "../_lib/invoice.js";
import { invoicePdf } from "../_lib/pdf.js";

function rowToOrder(row) {
  let items = [];
  try { items = (JSON.parse(row.items_json || "{}").items) || []; } catch (e) {}
  return {
    id: row.id, created: row.created, status: row.status, locale: row.locale,
    billing: { company: row.company, contact: row.contact, email: row.email, phone: row.phone, country: row.country, vat: row.vat, street: row.street, postal: row.postal, city: row.city, reference: row.reference },
    items, subtotalCents: row.subtotal_cents, vatCents: row.vat_cents, totalCents: row.total_cents, vatMode: row.vat_mode, currency: row.currency, paidAt: row.paid_at,
  };
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const id = new URL(request.url).searchParams.get("order");
  if (!id) return new Response("missing order", { status: 400 });
  if (!env.DB) return new Response("unavailable", { status: 503 });
  let row;
  try { row = await env.DB.prepare("SELECT * FROM orders WHERE id=?").bind(id).first(); }
  catch (e) { return new Response("error", { status: 500 }); }
  if (!row) return new Response("not found", { status: 404 });
  if (row.status !== "paid") return new Response("not available yet", { status: 409 });

  const inv = invoiceModel(rowToOrder(row), env);
  const pdf = invoicePdf(inv);
  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="factuur-' + inv.number + '.pdf"',
      "Cache-Control": "private, no-store",
    },
  });
}
