// E-mailverzending vanuit de Function. Voorkeur: Resend (ondersteunt bijlagen
// zoals de factuur-PDF). Fallback: Formspree (alleen platte tekst naar het
// team-inbox; kan geen bijlage en geen e-mail naar de klant sturen).
// Geheimen (RESEND_API_KEY) NIET in de repo; als Pages-secret instellen.

function b64(bytes) {
  let bin = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    bin += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
  }
  return btoa(bin);
}

// mail = { to:[..], subject, text, html?, attachments:[{filename, content(Uint8Array)}] }
export async function sendMail(env, mail) {
  const provider = (env && env.MAIL_PROVIDER) || (env && env.RESEND_API_KEY ? "resend" : "formspree");
  const from = (env && env.ORDER_EMAIL_FROM) || "shop@hrmforce.com";
  const to = Array.isArray(mail.to) ? mail.to : [mail.to];

  if (provider === "resend" && env && env.RESEND_API_KEY) {
    const payload = {
      from: "hrmforce <" + from + ">",
      to,
      subject: mail.subject,
      text: mail.text || "",
    };
    if (mail.html) payload.html = mail.html;
    if (mail.attachments && mail.attachments.length) {
      payload.attachments = mail.attachments.map((a) => ({ filename: a.filename, content: b64(a.content) }));
    }
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + env.RESEND_API_KEY },
      body: JSON.stringify(payload),
    });
    if (!r.ok) { const t = await r.text().catch(() => ""); throw new Error("resend_failed:" + r.status + ":" + t.slice(0, 200)); }
    return { provider: "resend", ok: true };
  }

  // Fallback: Formspree — stuurt naar het gekoppelde team-inbox, geen bijlage.
  const endpoint = env && env.FORMSPREE_ENDPOINT;
  if (!endpoint) throw new Error("no_mail_provider");
  const fd = new FormData();
  fd.append("_subject", mail.subject);
  fd.append("bericht", mail.text || "");
  fd.append("bijlage", mail.attachments && mail.attachments.length ? "Factuur-PDF beschikbaar via /api/invoice?order=" + (mail.orderId || "") : "");
  const r = await fetch(endpoint, { method: "POST", headers: { Accept: "application/json" }, body: fd });
  if (!r.ok) throw new Error("formspree_failed:" + r.status);
  return { provider: "formspree", ok: true, note: "no_attachment_no_customer_mail" };
}
