// POST /api/korting — controleert een kortingscode voor de huidige winkelmand.
// Alleen om de checkoutpagina te laten zien wat de code oplevert. Bij het
// afrekenen rekent /api/checkout het opnieuw uit, en dat bedrag telt.
import { PRICES } from "../_lib/catalog.js";
import { priceOrder } from "../_lib/vat.js";
import { bepaalKorting } from "../_lib/kortingen.js";

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

export async function onRequestPost({ request }) {
  let body;
  try { body = await request.json(); } catch (e) { return json({ error: "bad_json" }, 400); }

  const lines = Array.isArray(body.lines) ? body.lines : [];
  if (!lines.length) return json({ ok: false, reden: "lege_mand" });

  let priced;
  try { priced = priceOrder(lines, PRICES, "NL", ""); }
  catch (e) { return json({ ok: false, reden: "onbekend_product" }); }

  const k = bepaalKorting(body.kortingscode, priced.items);
  if (!k) return json({ ok: false, reden: "geen_code" });
  if (!k.ok) return json({ ok: false, reden: k.reden, code: k.code });
  return json({ ok: true, code: k.code, percent: k.percent, cents: k.cents });
}
