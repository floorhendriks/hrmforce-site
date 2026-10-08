// Aanvraag voor oefenvragen. Stuurt het oefendocument als bijlage naar de
// kandidaat, met oefenen@hrmforce.com in cc zodat de aanvraag daar binnenkomt.
// De documenten staan als PDF in public/media/oefenvragen.
import { sendMail } from "../_lib/mail.js";
import { controleerMens } from "../_lib/mens.js";
import { OEFEN_MAIL, oefenMail } from "../../src/data/oefenmail-tekst.js";
import { OEFEN_EXTRA } from "../_lib/mailteksten.js";

const schoon = (s, max) => String(s == null ? "" : s).replace(/[\r\n\t]+/g, " ").trim().slice(0, max);
const mailOk = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
// Alle talen waarin de site staat.
const TALEN = ["nl", "en", "de", "fr", "es", "ro", "pl", "da", "sv"];
// De oefendocumenten bestaan alleen in de brontalen. Een taal daarbuiten
// krijgt de Engelse pdf, met de begeleidende mail wel in de eigen taal.
const DOCTALEN = ["nl", "en", "de", "fr", "es", "ro"];

// De brontalen staan in oefenmail-tekst.js zelf, de rest komt uit de
// vertaalbestanden via scripts/genereer-mailteksten.mjs.
for (const [taal, blok] of Object.entries(OEFEN_EXTRA)) {
  if (!OEFEN_MAIL[taal]) OEFEN_MAIL[taal] = blok;
}

// assessment- of oefenslug -> document. Wat hier niet in staat krijgt de
// verwijzing naar de online oefentest, zonder bijlage.
const DOCUMENT = {
  "big-five": "big-five",
  "big-fifty": "big-five",
  disc: "disc", "disc-test": "disc",
  drijfveren: "drijfveren", drijfverentest: "drijfveren",
  leiderschap: "leiderschap", leiderschapstest: "leiderschap",
  competenties: "competenties", "competentie-check": "competenties",
  studiekeuze: "studiekeuze", studiekeuzetest: "studiekeuze",
  "cognitieve-test": "cognitieve-test", "ability-scan": "cognitieve-test",
};


export async function onRequestPost({ request, env }) {
  let body = {};
  const type = request.headers.get("content-type") || "";
  try {
    if (type.includes("application/json")) body = await request.json();
    else { const f = await request.formData(); f.forEach((v, k) => { body[k] = v; }); }
  } catch { return json({ error: "bad_body" }, 400); }

  const email = schoon(body.email, 160);
  const naam = schoon(body.naam, 80);
  const onderdeel = schoon(body.onderdeel, 60).toLowerCase();
  const titel = schoon(body.titel, 100);
  const bron = schoon(body.bron, 120);
  let taal = schoon(body.taal, 5).toLowerCase();
  if (!TALEN.includes(taal)) taal = "nl";
  if (!mailOk(email)) return json({ error: "invalid_email" }, 400);

  const mens = await controleerMens(env, body, request);
  if (!mens.ok) return json({ error: "geen_mens", reden: mens.reden }, 422);

  const doc = DOCUMENT[onderdeel];
  const origin = new URL(request.url).origin;
  const oefenUrl = taal === "nl" ? `${origin}/oefentest/` : `${origin}/${taal}/oefentest/`;

  const bijlagen = [];
  if (doc) {
    try {
      const docTaal = DOCTALEN.includes(taal) ? taal : "en";
      const r = await fetch(`${origin}/media/oefenvragen/${doc}-${docTaal}.pdf`);
      if (r.ok) {
        const buf = new Uint8Array(await r.arrayBuffer());
        if (buf.length > 1000) bijlagen.push({ filename: `hrmforce-oefenvragen-${doc}-${docTaal}.pdf`, content: buf });
      }
    } catch { /* zonder bijlage versturen is beter dan niets versturen */ }
  }

  const m = oefenMail(taal, { naam, titel, url: oefenUrl, metBijlage: bijlagen.length > 0 });

  const naar = (env && env.PRACTICE_EMAIL_TO) || "oefenen@hrmforce.com";
  const van = (env && env.PRACTICE_EMAIL_FROM) || "service@hrmforce.com";
  try {
    await sendMail(env, {
      from: van,
      to: [email],
      cc: [naar],
      subject: m.onderwerp,
      text: m.tekst,
      attachments: bijlagen,
    });
  } catch (e) {
    return json({ ok: false, error: "mail_failed" }, 202);
  }
  return json({ ok: true, bijlage: bijlagen.length > 0 });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
