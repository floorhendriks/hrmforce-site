// GET /api/order-status?order=<id> — alleen de status van een bestelling.
// De bedankpagina gebruikt dit om de juiste tekst te tonen: bij een overboeking
// is er nog niet betaald, en dan klopt "we hebben je betaling ontvangen" niet.
// Er gaan bewust geen persoonsgegevens of bedragen over deze route; het id is
// een niet-raadbare uuid en staat alleen in de link van de klant zelf.

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

export async function onRequestGet({ request, env }) {
  const id = new URL(request.url).searchParams.get("order");
  if (!id) return json({ error: "missing_order" }, 400);
  if (!env.DB) return json({ status: "onbekend" });

  let row;
  try { row = await env.DB.prepare("SELECT status FROM orders WHERE id=?").bind(id).first(); }
  catch (e) { return json({ status: "onbekend" }); }
  if (!row) return json({ status: "onbekend" });

  return json({ status: row.status, factuur: row.status === "paid" });
}
