// Nieuwsbriefinschrijving doorsturen naar de CRM op live.hrmforce.com.
// De CRM maakt of vindt het contact, stuurt de bevestigingsmail (double
// opt-in) en zet het contact pas na de klik op de lijst. De sleutel staat als
// secret NEWSLETTER_API_KEY in Cloudflare en als NEWSLETTER_WEBHOOK_SECRET in
// de Replit-app; zonder sleutel of bij een storing gaat de aanmelding per mail
// naar service@, zodat er geen aanmelding verloren gaat.
import { sendMail } from "./mail.js";

const STANDAARD_URL = "https://live.hrmforce.com/api/public/newsletter/subscribe";
export const NIEUWSBRIEF_TOESTEMMING =
  "Ik ontvang graag de maandelijkse nieuwsbrief van hrmforce. Afmelden kan onderaan elke nieuwsbrief.";

const schoon = (s, max) => String(s == null ? "" : s).replace(/[\r\n\t]+/g, " ").trim().slice(0, max);

/**
 * @param env      Cloudflare-omgeving
 * @param d        { email, voornaam, organisatie, taal, bron, toestemming }
 * @param request  het binnenkomende verzoek, voor IP en browser
 * @returns        { ok, status } met status "pending", "already" of "handmatig"
 */
export async function aanmeldenNieuwsbrief(env, d, request) {
  const payload = {
    email: schoon(d.email, 160).toLowerCase(),
    firstName: schoon(d.voornaam, 80),
    organizationName: schoon(d.organisatie, 120) || undefined,
    taal: schoon(d.taal, 5) || "nl",
    source: schoon(d.bron, 80) || "hrmforce.com",
    ip: request.headers.get("CF-Connecting-IP") || "",
    userAgent: schoon(request.headers.get("User-Agent"), 300),
    consentText: d.toestemming || NIEUWSBRIEF_TOESTEMMING,
  };

  const sleutel = env && env.NEWSLETTER_API_KEY;
  const url = (env && env.NEWSLETTER_API_URL) || STANDAARD_URL;
  let reden = "geen_sleutel";

  if (sleutel) {
    try {
      const r = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${sleutel}` },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8000),
      });
      const uit = await r.json().catch(() => ({}));
      if (r.ok && uit && uit.ok) return { ok: true, status: uit.status || "pending" };
      reden = `crm_${r.status}`;
    } catch (e) {
      reden = "crm_onbereikbaar";
    }
  }

  // Vangnet: de aanmelding komt in de servicebox terecht, met alles wat nodig
  // is om hem met de hand in de CRM te zetten.
  try {
    await sendMail(env, {
      from: (env && env.REQUEST_EMAIL_FROM) || "service@hrmforce.com",
      to: [(env && env.REQUEST_EMAIL_TO) || "service@hrmforce.com"],
      cc: [(env && env.REQUEST_EMAIL_CC) || "f.hendriks@hrmforce.com"],
      subject: `Nieuwsbriefaanmelding handmatig verwerken - ${payload.email}`,
      text: [
        `De aanmelding kon niet automatisch naar live.hrmforce.com (${reden}).`,
        "Zet het contact in de CRM en stuur de bevestigingsmail vanuit de portal.",
        "",
        `E-mail:      ${payload.email}`,
        `Voornaam:    ${payload.firstName || "-"}`,
        `Organisatie: ${payload.organizationName || "-"}`,
        `Taal:        ${payload.taal}`,
        `Bron:        ${payload.source}`,
        `Tijdstip:    ${new Date().toISOString()}`,
        `IP:          ${payload.ip || "-"}`,
        `Toestemming: ${payload.consentText}`,
      ].join("\n") + "\n",
    });
    return { ok: true, status: "handmatig" };
  } catch {
    return { ok: false, status: "mislukt" };
  }
}
