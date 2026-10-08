// De mail met oefenvragen die een kandidaat automatisch terugkrijgt.
//
// Losse zinnen, geen functies: scripts/hsf-translate-content.mjs leest alleen
// geexporteerde teksten en slaat functies over. De zinnen stonden eerder in
// functions/api/oefenmateriaal.js, buiten bereik van de vertaalronde, waardoor
// een Deense aanvrager de Nederlandse mail kreeg.
import { vulAan } from "./vertaal-inhoud.js";

export const OEFEN_MAIL = {
  nl: {
    onderwerp: "Je oefenvragen",
    onderwerpVoor: "Je oefenvragen voor {titel}",
    halloNaam: "Hallo {naam},",
    hallo: "Hallo,",
    met: "In de bijlage vind je een set oefenvragen. Zo weet je vooraf hoe de vragen eruitzien en wat je te wachten staat.",
    zonder: "Bedankt voor je aanvraag. Voor dit onderdeel is nog geen document beschikbaar, maar online oefenen kan wel.",
    online: "Online oefen je verder op {url}. Je krijgt daar elke ronde een nieuwe set vragen, met na afloop per vraag het juiste antwoord en een toelichting.",
    let: "Het document bevat voorbeeldvragen. Ze komen niet uit de echte vragenlijst en je antwoorden worden niet bewaard.",
    groet: "Met vriendelijke groet,",
  },
  en: {
    onderwerp: "Your practice questions",
    onderwerpVoor: "Your practice questions for {titel}",
    halloNaam: "Hello {naam},",
    hallo: "Hello,",
    met: "Attached you will find a set of practice questions, so you know in advance what the questions look like and what to expect.",
    zonder: "Thank you for your request. There is no document for this component yet, but you can practise online.",
    online: "You can practise online at {url}. Every round gives you a new set of questions, with the correct answer and an explanation per question afterwards.",
    let: "The document holds example questions. They do not come from the real questionnaire and your answers are not stored.",
    groet: "Kind regards,",
  },
  de: {
    onderwerp: "Ihre Übungsfragen",
    onderwerpVoor: "Ihre Übungsfragen für {titel}",
    halloNaam: "Hallo {naam},",
    hallo: "Hallo,",
    met: "Im Anhang finden Sie eine Reihe von Übungsfragen. So wissen Sie vorab, wie die Fragen aussehen und was Sie erwartet.",
    zonder: "Danke für Ihre Anfrage. Für diesen Teil gibt es noch kein Dokument, online üben ist aber möglich.",
    online: "Online üben Sie weiter auf {url}. Dort erhalten Sie je Runde einen neuen Fragensatz, danach je Frage die richtige Antwort und eine Erläuterung.",
    let: "Das Dokument enthält Beispielfragen. Sie stammen nicht aus dem echten Fragebogen und Ihre Antworten werden nicht gespeichert.",
    groet: "Mit freundlichen Grüßen,",
  },
  fr: {
    onderwerp: "Vos questions d'entraînement",
    onderwerpVoor: "Vos questions d'entraînement pour {titel}",
    halloNaam: "Bonjour {naam},",
    hallo: "Bonjour,",
    met: "Vous trouverez en pièce jointe une série de questions d'entraînement, pour savoir à l'avance à quoi ressemblent les questions.",
    zonder: "Merci pour votre demande. Il n'existe pas encore de document pour cette partie, mais vous pouvez vous entraîner en ligne.",
    online: "Vous pouvez vous entraîner en ligne sur {url}. Chaque série est différente, avec la bonne réponse et une explication par question à la fin.",
    let: "Le document contient des exemples de questions. Elles ne proviennent pas du vrai questionnaire et vos réponses ne sont pas conservées.",
    groet: "Cordialement,",
  },
  es: {
    onderwerp: "Tus preguntas de práctica",
    onderwerpVoor: "Tus preguntas de práctica para {titel}",
    halloNaam: "Hola {naam}:",
    hallo: "Hola:",
    met: "Adjunto encontrarás un conjunto de preguntas de práctica, para saber de antemano cómo son las preguntas y qué esperar.",
    zonder: "Gracias por tu solicitud. Para esta parte todavía no hay documento, pero sí puedes practicar en línea.",
    online: "Puedes practicar en línea en {url}. Cada ronda te da un conjunto nuevo de preguntas y, al final, la respuesta correcta y una explicación.",
    let: "El documento contiene preguntas de ejemplo. No proceden del cuestionario real y tus respuestas no se guardan.",
    groet: "Un saludo,",
  },
  ro: {
    onderwerp: "Întrebările tale de exersare",
    onderwerpVoor: "Întrebările tale de exersare pentru {titel}",
    halloNaam: "Bună {naam},",
    hallo: "Bună,",
    met: "În atașament găsești un set de întrebări de exersare, ca să știi dinainte cum arată întrebările și la ce să te aștepți.",
    zonder: "Mulțumim pentru solicitare. Pentru această parte încă nu există un document, dar poți exersa online.",
    online: "Online exersezi pe {url}. Fiecare rundă îți dă un set nou de întrebări, iar la final răspunsul corect și o explicație pentru fiecare.",
    let: "Documentul conține întrebări exemplu. Ele nu provin din chestionarul real, iar răspunsurile tale nu sunt păstrate.",
    groet: "Cu stimă,",
  },
};

Object.assign(OEFEN_MAIL, vulAan(OEFEN_MAIL));

/**
 * Bouwt onderwerp en tekst van de oefenmail.
 * Onbekende taal valt terug op het Nederlands.
 */
export function oefenMail(taal, { naam, titel, url, metBijlage }) {
  const t = OEFEN_MAIL[taal] || OEFEN_MAIL.nl;
  const vul = (s, k, v) => String(s).replace(k, v);
  return {
    onderwerp: titel ? vul(t.onderwerpVoor, "{titel}", titel) : t.onderwerp,
    tekst: [
      naam ? vul(t.halloNaam, "{naam}", naam) : t.hallo,
      "",
      metBijlage ? t.met : t.zonder,
      "",
      vul(t.online, "{url}", url),
      "",
      t.let,
      "",
      t.groet,
      "hrmforce",
      "hrmforce.com",
    ].join("\n"),
  };
}
