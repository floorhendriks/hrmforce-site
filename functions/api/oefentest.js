// Registratie voor de oefentest. Stuurt naam, e-mail en onderdeel naar
// oefenen@hrmforce.com. Bewust geen opslag aan onze kant: de mailbox is de
// administratie. Het adres is te overschrijven met PRACTICE_EMAIL_TO.
import { sendMail } from "../_lib/mail.js";

const schoon = (s, max) => String(s == null ? "" : s).replace(/[\r\n\t]+/g, " ").trim().slice(0, max);
const mailOk = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); } catch { return json({ error: "bad_json" }, 400); }

  const naam = schoon(body.naam, 80);
  const email = schoon(body.email, 160);
  const onderdeel = schoon(body.onderdeel, 40);
  const taal = schoon(body.taal, 5) || "nl";
  if (naam.length < 2 || !mailOk(email)) return json({ error: "invalid" }, 400);

  const naar = (env && env.PRACTICE_EMAIL_TO) || "oefenen@hrmforce.com";
  const regels = [
    `Naam:      ${naam}`,
    `E-mail:    ${email}`,
    `Onderdeel: ${onderdeel}`,
    `Taal:      ${taal}`,
    `Tijd:      ${new Date().toISOString()}`,
  ];

  try {
    await sendMail(env, {
      to: [naar],
      subject: `Oefentest gestart: ${onderdeel} (${taal}) - ${naam}`,
      text: `Iemand is een oefentest gestart.\n\n${regels.join("\n")}\n`,
    });
  } catch (e) {
    // De oefentest start ook zonder dat dit lukt; melden, niet blokkeren.
    return json({ ok: false, error: "mail_failed" }, 202);
  }
  return json({ ok: true });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
