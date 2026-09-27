// Spamcontrole aan de serverkant. Drie lagen, onafhankelijk van elkaar:
//   1. het verborgen veld "website"; alleen een bot vult dat in
//   2. het veld "gestart"; ontbreekt het of zit er minder dan drie seconden
//      tussen openen en verzenden, dan is het geen mens
//   3. Cloudflare Turnstile, zodra TURNSTILE_SECRET_KEY is ingesteld
// Laag 1 en 2 werken zonder instellingen. Laag 3 slaat pas aan met de sleutel,
// zodat het formulier blijft werken zolang die nog niet is gezet.
const MIN_MS = 3000;
const MAX_MS = 1000 * 60 * 60 * 6;

export async function controleerMens(env, body, request) {
  if (String(body.website || "").trim() !== "") return { ok: false, reden: "val" };

  const gestart = Number(body.gestart || 0);
  if (!Number.isFinite(gestart) || gestart <= 0) return { ok: false, reden: "geen_tijd" };
  const verstreken = Date.now() - gestart;
  if (verstreken < MIN_MS) return { ok: false, reden: "te_snel" };
  if (verstreken > MAX_MS) return { ok: false, reden: "verlopen" };

  const geheim = env && env.TURNSTILE_SECRET_KEY;
  if (!geheim) return { ok: true, reden: "zonder_turnstile" };

  const token = String(body["cf-turnstile-response"] || "");
  if (!token) return { ok: false, reden: "geen_token" };

  const veld = new FormData();
  veld.append("secret", geheim);
  veld.append("response", token);
  const ip = request.headers.get("CF-Connecting-IP");
  if (ip) veld.append("remoteip", ip);

  try {
    const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body: veld });
    const uit = await r.json();
    if (uit && uit.success) return { ok: true, reden: "turnstile" };
    return { ok: false, reden: "turnstile_afgewezen" };
  } catch {
    // Valt de controle uit, dan laten we de aanvraag door; laag 1 en 2 hebben
    // hun werk al gedaan en een storing mag geen klant kosten.
    return { ok: true, reden: "turnstile_onbereikbaar" };
  }
}

/** Velden die niet in de mail thuishoren. */
export const TECHNISCH = new Set(["website", "gestart", "cf-turnstile-response", "taal", "bron", "soort", "onderwerp", "onderdeel", "titel"]);
