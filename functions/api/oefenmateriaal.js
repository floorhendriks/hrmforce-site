// Aanvraag voor oefenvragen. Stuurt het oefendocument als bijlage naar de
// kandidaat, met oefenen@hrmforce.com in cc zodat de aanvraag daar binnenkomt.
// De documenten staan als PDF in public/media/oefenvragen.
import { sendMail } from "../_lib/mail.js";

const schoon = (s, max) => String(s == null ? "" : s).replace(/[\r\n\t]+/g, " ").trim().slice(0, max);
const mailOk = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
const TALEN = ["nl", "en", "de", "fr", "es", "ro"];

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

const T = {
  nl: {
    onderwerp: (n) => `Je oefenvragen${n ? " voor " + n : ""}`,
    hallo: (n) => (n ? `Hallo ${n},` : "Hallo,"),
    met: "In de bijlage vind je een set oefenvragen. Zo weet je vooraf hoe de vragen eruitzien en wat je te wachten staat.",
    zonder: "Bedankt voor je aanvraag. Voor dit onderdeel is nog geen document beschikbaar, maar online oefenen kan wel.",
    online: (u) => `Online oefen je verder op ${u}. Je krijgt daar elke ronde een nieuwe set vragen, met na afloop per vraag het juiste antwoord en een toelichting.`,
    let: "Het document bevat voorbeeldvragen. Ze komen niet uit de echte vragenlijst en je antwoorden worden niet bewaard.",
    groet: "Met vriendelijke groet,\nhrmforce\nhrmforce.com",
  },
  en: {
    onderwerp: (n) => `Your practice questions${n ? " for " + n : ""}`,
    hallo: (n) => (n ? `Hello ${n},` : "Hello,"),
    met: "Attached you will find a set of practice questions, so you know in advance what the questions look like and what to expect.",
    zonder: "Thank you for your request. There is no document for this component yet, but you can practise online.",
    online: (u) => `You can practise online at ${u}. Every round gives you a new set of questions, with the correct answer and an explanation per question afterwards.`,
    let: "The document holds example questions. They do not come from the real questionnaire and your answers are not stored.",
    groet: "Kind regards,\nhrmforce\nhrmforce.com",
  },
  de: {
    onderwerp: (n) => `Ihre Übungsfragen${n ? " für " + n : ""}`,
    hallo: (n) => (n ? `Hallo ${n},` : "Hallo,"),
    met: "Im Anhang finden Sie eine Reihe von Übungsfragen. So wissen Sie vorab, wie die Fragen aussehen und was Sie erwartet.",
    zonder: "Danke für Ihre Anfrage. Für diesen Teil gibt es noch kein Dokument, online üben ist aber möglich.",
    online: (u) => `Online üben Sie weiter auf ${u}. Dort erhalten Sie je Runde einen neuen Fragensatz, danach je Frage die richtige Antwort und eine Erläuterung.`,
    let: "Das Dokument enthält Beispielfragen. Sie stammen nicht aus dem echten Fragebogen und Ihre Antworten werden nicht gespeichert.",
    groet: "Mit freundlichen Grüßen,\nhrmforce\nhrmforce.com",
  },
  fr: {
    onderwerp: (n) => `Vos questions d'entraînement${n ? " pour " + n : ""}`,
    hallo: (n) => (n ? `Bonjour ${n},` : "Bonjour,"),
    met: "Vous trouverez en pièce jointe une série de questions d'entraînement, pour savoir à l'avance à quoi ressemblent les questions.",
    zonder: "Merci pour votre demande. Il n'existe pas encore de document pour cette partie, mais vous pouvez vous entraîner en ligne.",
    online: (u) => `Vous pouvez vous entraîner en ligne sur ${u}. Chaque série est différente, avec la bonne réponse et une explication par question à la fin.`,
    let: "Le document contient des exemples de questions. Elles ne proviennent pas du vrai questionnaire et vos réponses ne sont pas conservées.",
    groet: "Cordialement,\nhrmforce\nhrmforce.com",
  },
  es: {
    onderwerp: (n) => `Tus preguntas de práctica${n ? " para " + n : ""}`,
    hallo: (n) => (n ? `Hola ${n}:` : "Hola:"),
    met: "Adjunto encontrarás un conjunto de preguntas de práctica, para saber de antemano cómo son las preguntas y qué esperar.",
    zonder: "Gracias por tu solicitud. Para esta parte todavía no hay documento, pero sí puedes practicar en línea.",
    online: (u) => `Puedes practicar en línea en ${u}. Cada ronda te da un conjunto nuevo de preguntas y, al final, la respuesta correcta y una explicación.`,
    let: "El documento contiene preguntas de ejemplo. No proceden del cuestionario real y tus respuestas no se guardan.",
    groet: "Un saludo,\nhrmforce\nhrmforce.com",
  },
  ro: {
    onderwerp: (n) => `Întrebările tale de exersare${n ? " pentru " + n : ""}`,
    hallo: (n) => (n ? `Bună ${n},` : "Bună,"),
    met: "În atașament găsești un set de întrebări de exersare, ca să știi dinainte cum arată întrebările și la ce să te aștepți.",
    zonder: "Mulțumim pentru solicitare. Pentru această parte încă nu există un document, dar poți exersa online.",
    online: (u) => `Online exersezi pe ${u}. Fiecare rundă îți dă un set nou de întrebări, iar la final răspunsul corect și o explicație pentru fiecare.`,
    let: "Documentul conține întrebări exemplu. Ele nu provin din chestionarul real, iar răspunsurile tale nu sunt păstrate.",
    groet: "Cu stimă,\nhrmforce\nhrmforce.com",
  },
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

  const t = T[taal];
  const doc = DOCUMENT[onderdeel];
  const origin = new URL(request.url).origin;
  const oefenUrl = taal === "nl" ? `${origin}/oefentest/` : `${origin}/${taal}/oefentest/`;

  const bijlagen = [];
  if (doc) {
    try {
      const r = await fetch(`${origin}/media/oefenvragen/${doc}-${taal}.pdf`);
      if (r.ok) {
        const buf = new Uint8Array(await r.arrayBuffer());
        if (buf.length > 1000) bijlagen.push({ filename: `hrmforce-oefenvragen-${doc}-${taal}.pdf`, content: buf });
      }
    } catch { /* zonder bijlage versturen is beter dan niets versturen */ }
  }

  const regels = [
    t.hallo(naam),
    "",
    bijlagen.length ? t.met : t.zonder,
    "",
    t.online(oefenUrl),
    "",
    t.let,
    "",
    t.groet,
  ];

  const naar = (env && env.PRACTICE_EMAIL_TO) || "oefenen@hrmforce.com";
  const van = (env && env.PRACTICE_EMAIL_FROM) || "service@hrmforce.com";
  try {
    await sendMail(env, {
      from: van,
      to: [email],
      cc: [naar],
      subject: t.onderwerp(titel),
      text: regels.join("\n"),
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
