// Aanvragen vanaf het demo- en het contactformulier. Elke aanvraag gaat
// volledig naar service@hrmforce.com met f.hendriks@hrmforce.com in cc, dus er
// gaat niets verloren. Wie aangeeft als particulier aan te vragen, krijgt
// daarnaast automatisch de doorverwijzing naar de webshop, in de taal van de
// pagina waarop is aangevraagd.
import { sendMail } from "../_lib/mail.js";
import { PARTICULIER_MAIL } from "../../src/data/aanvraag-tekst.js";

const TALEN = ["nl", "en", "de", "fr", "es", "ro"];
const schoon = (s, max) => String(s == null ? "" : s).replace(/[\r\n\t]+/g, " ").trim().slice(0, max);
const mailOk = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);

// De formulieren gebruiken per taal andere veldnamen; hier lopen ze samen.
const EERSTE = (b, namen, max = 120) => {
  for (const n of namen) if (b[n] != null && String(b[n]).trim()) return schoon(b[n], max);
  return "";
};

export async function onRequestPost({ request, env }) {
  let body = {};
  const type = request.headers.get("content-type") || "";
  try {
    if (type.includes("application/json")) body = await request.json();
    else { const f = await request.formData(); f.forEach((v, k) => { body[k] = v; }); }
  } catch { return json({ error: "bad_body" }, 400); }

  const naam = [EERSTE(body, ["naam", "voornaam", "firstname", "nombre", "prenume", "vorname"], 80),
    EERSTE(body, ["achternaam", "surname", "apellido", "nume"], 80)].filter(Boolean).join(" ").trim();
  const email = EERSTE(body, ["email", "e-mail", "correo"], 160);
  const bedrijf = EERSTE(body, ["bedrijf", "company", "organisatie", "empresa", "firma", "entreprise", "companie"], 120);
  const telefoon = EERSTE(body, ["telefoon", "phone", "tel", "telefono", "telefon"], 40);
  const bericht = EERSTE(body, ["bericht", "message", "vraag", "mensaje", "nachricht", "mesaj"], 2000);
  const onderwerp = EERSTE(body, ["onderwerp", "subject", "asunto", "betreff", "sujet", "subiect"], 140);
  const bron = schoon(body.bron, 60) || "formulier";
  const soort = schoon(body.soort, 20).toLowerCase() === "particulier" ? "particulier" : "zakelijk";
  let taal = schoon(body.taal, 5).toLowerCase();
  if (!TALEN.includes(taal)) taal = "nl";

  if (!mailOk(email)) return json({ error: "invalid_email" }, 400);

  const naarIntern = (env && env.REQUEST_EMAIL_TO) || "service@hrmforce.com";
  const ccIntern = (env && env.REQUEST_EMAIL_CC) || "f.hendriks@hrmforce.com";
  const van = (env && env.REQUEST_EMAIL_FROM) || "service@hrmforce.com";

  const regels = [
    `Soort:      ${soort}`,
    `Naam:       ${naam || "-"}`,
    `E-mail:     ${email}`,
    `Organisatie:${bedrijf ? " " + bedrijf : " -"}`,
    `Telefoon:   ${telefoon || "-"}`,
    `Taal:       ${taal}`,
    `Formulier:  ${bron}`,
    onderwerp ? `Onderwerp:  ${onderwerp}` : "",
    "",
    "Bericht:",
    bericht || "-",
  ].filter((r) => r !== "");

  const kop = soort === "particulier"
    ? "Particuliere aanvraag, doorverwijzing is automatisch verstuurd."
    : "Zakelijke aanvraag.";

  let intern = false, naarAanvrager = false;
  try {
    await sendMail(env, {
      from: van,
      to: [naarIntern],
      cc: [ccIntern],
      subject: `Aanvraag ${soort} via ${bron}${naam ? " - " + naam : ""}`,
      text: `${kop}\n\n${regels.join("\n")}\n`,
    });
    intern = true;
  } catch { /* de aanvrager krijgt zijn mail hoe dan ook nog */ }

  if (soort === "particulier") {
    const m = (PARTICULIER_MAIL[taal] || PARTICULIER_MAIL.nl)(naam);
    try {
      await sendMail(env, {
        from: van,
        to: [email],
        cc: [ccIntern],
        subject: m.onderwerp,
        text: m.tekst,
      });
      naarAanvrager = true;
    } catch { /* stil; de aanvraag zelf is al binnen */ }
  }

  if (!intern && !naarAanvrager) return json({ ok: false, error: "mail_failed" }, 202);
  return json({ ok: true, soort, doorverwezen: naarAanvrager });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
