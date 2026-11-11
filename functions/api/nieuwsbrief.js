// Inschrijfformulier van /nieuwsbrief/. Controleert spam (verborgen veld,
// tijd, Turnstile) en stuurt de aanmelding door naar de CRM op
// live.hrmforce.com, die de bevestigingsmail verstuurt.
import { controleerMens } from "../_lib/mens.js";
import { aanmeldenNieuwsbrief } from "../_lib/nieuwsbrief.js";

const schoon = (s, max) => String(s == null ? "" : s).replace(/[\r\n\t]+/g, " ").trim().slice(0, max);
const mailOk = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);

export async function onRequestPost({ request, env }) {
  let body = {};
  const type = request.headers.get("content-type") || "";
  try {
    if (type.includes("application/json")) body = await request.json();
    else { const f = await request.formData(); f.forEach((v, k) => { body[k] = v; }); }
  } catch { return json({ ok: false, error: "bad_body" }, 400); }

  const email = schoon(body.email, 160);
  const voornaam = schoon(body.voornaam, 80);
  const organisatie = schoon(body.organisatie, 120);
  if (!mailOk(email) || !voornaam) return json({ ok: false, error: "invalid" }, 400);

  const mens = await controleerMens(env, body, request);
  if (!mens.ok) return json({ ok: false, error: "geen_mens", reden: mens.reden }, 422);

  const uit = await aanmeldenNieuwsbrief(env, {
    email, voornaam, organisatie, taal: "nl", bron: "hrmforce.com/nieuwsbrief",
  }, request);
  if (!uit.ok) return json({ ok: false, error: "mislukt" }, 502);
  return json({ ok: true, status: uit.status });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
