// Teksten rond de vraag of iemand zakelijk of als particulier aanvraagt, en de
// mail die een particulier automatisch terugkrijgt.
import { vulAan } from "./vertaal-inhoud.js";

export const SOORT_UI = {
  nl: { vraag: "Je vraagt aan", zakelijk: "Voor een team of organisatie", particulier: "Voor mezelf, als particulier" },
  en: { vraag: "You are asking", zakelijk: "For a team or organisation", particulier: "For myself, as an individual" },
  de: { vraag: "Sie fragen an", zakelijk: "Für ein Team oder eine Organisation", particulier: "Für mich selbst, als Privatperson" },
  fr: { vraag: "Votre demande concerne", zakelijk: "Une équipe ou une organisation", particulier: "Moi-même, à titre personnel" },
  es: { vraag: "Tu solicitud es", zakelijk: "Para un equipo u organización", particulier: "Para mí, como particular" },
  ro: { vraag: "Soliciți", zakelijk: "Pentru o echipă sau o organizație", particulier: "Pentru mine, ca persoană fizică" },
};

// De mail die een particuliere aanvrager automatisch terugkrijgt.
//
// Losse zinnen, geen functies: scripts/hsf-translate-content.mjs leest alleen
// geexporteerde teksten en slaat functies over. Zo kreeg een Poolse aanvrager
// eerder de Nederlandse mail. De links en de aanhef zet particulierMail()
// eronder in elkaar, zodat elke taal dezelfde opbouw houdt.
export const PARTICULIER_MAIL = {
  nl: {
    onderwerp: "Je aanvraag bij hrmforce",
    aanhefNaam: "Beste {naam},",
    aanhef: "Beste,",
    dank: "Bedankt voor je aanvraag via hrmforce.com.",
    shop: "Je gaf aan dat je een test voor jezelf wilt maken. Losse tests bestel je rechtstreeks in onze webshop. Je ontvangt de vragenlijst per e-mail en je rapport zodra je klaar bent.",
    kleuren: "Wil je eerst kosteloos kennismaken? Doe dan de gratis kleurentest:",
    oefen: "Oefenen kan ook. Op deze pagina staan oefenvragen per onderdeel, met na afloop het juiste antwoord en een toelichting:",
    zakelijk: "Gaat je aanvraag toch over een team of een organisatie? Reageer dan op deze mail of bel Floor Hendriks op {tel}. We kijken dan samen wat past.",
    groet: "Met vriendelijke groet,",
  },
  en: {
    onderwerp: "Your request at hrmforce",
    aanhefNaam: "Dear {naam},",
    aanhef: "Hello,",
    dank: "Thank you for your request via hrmforce.com.",
    shop: "You indicated that you want to take a test for yourself. You can order single tests straight from our webshop. You receive the questionnaire by email and your report as soon as you finish.",
    kleuren: "Would you like a free introduction first? Take the free colour test:",
    oefen: "You can also practise. This page has practice questions per component, with the correct answer and an explanation afterwards:",
    zakelijk: "Is your request about a team or an organisation after all? Reply to this email or call Floor Hendriks on {tel}. We will look at what fits together.",
    groet: "Kind regards,",
  },
  de: {
    onderwerp: "Ihre Anfrage bei hrmforce",
    aanhefNaam: "Guten Tag {naam},",
    aanhef: "Guten Tag,",
    dank: "Vielen Dank für Ihre Anfrage über hrmforce.com.",
    shop: "Sie haben angegeben, dass Sie einen Test für sich selbst machen möchten. Einzelne Tests bestellen Sie direkt in unserem Webshop. Den Fragebogen erhalten Sie per E-Mail, Ihren Bericht sobald Sie fertig sind.",
    kleuren: "Möchten Sie uns erst kostenlos kennenlernen? Machen Sie den kostenlosen Farbtest:",
    oefen: "Üben ist auch möglich. Auf dieser Seite stehen Übungsfragen je Teil, danach jeweils die richtige Antwort und eine Erläuterung:",
    zakelijk: "Geht es bei Ihrer Anfrage doch um ein Team oder eine Organisation? Antworten Sie auf diese E-Mail oder rufen Sie Floor Hendriks an unter {tel}. Wir schauen dann gemeinsam, was passt.",
    groet: "Mit freundlichen Grüßen,",
  },
  fr: {
    onderwerp: "Votre demande chez hrmforce",
    aanhefNaam: "Bonjour {naam},",
    aanhef: "Bonjour,",
    dank: "Merci pour votre demande via hrmforce.com.",
    shop: "Vous avez indiqué vouloir passer un test pour vous-même. Les tests à l'unité se commandent directement dans notre boutique. Vous recevez le questionnaire par e-mail et votre rapport dès que vous avez terminé.",
    kleuren: "Vous préférez faire connaissance sans frais ? Passez le test des couleurs gratuit :",
    oefen: "Vous pouvez aussi vous entraîner. Cette page propose des questions d'entraînement par composante, avec la bonne réponse et une explication à la fin :",
    zakelijk: "Votre demande concerne finalement une équipe ou une organisation ? Répondez à cet e-mail ou appelez Floor Hendriks au {tel}. Nous verrons ensemble ce qui convient.",
    groet: "Cordialement,",
  },
  es: {
    onderwerp: "Tu solicitud en hrmforce",
    aanhefNaam: "Hola {naam}:",
    aanhef: "Hola:",
    dank: "Gracias por tu solicitud a través de hrmforce.com.",
    shop: "Nos indicaste que quieres hacer un test para ti. Los tests sueltos se compran directamente en nuestra tienda. Recibes el cuestionario por correo y tu informe en cuanto termines.",
    kleuren: "¿Prefieres conocernos primero sin coste? Haz el test de colores gratuito:",
    oefen: "También puedes practicar. En esta página hay preguntas de práctica por parte, con la respuesta correcta y una explicación al final:",
    zakelijk: "¿Tu solicitud es en realidad para un equipo o una organización? Responde a este correo o llama a Floor Hendriks al {tel}. Miramos juntos qué encaja.",
    groet: "Un saludo,",
  },
  ro: {
    onderwerp: "Solicitarea ta la hrmforce",
    aanhefNaam: "Bună {naam},",
    aanhef: "Bună,",
    dank: "Mulțumim pentru solicitarea trimisă prin hrmforce.com.",
    shop: "Ai indicat că vrei să dai un test pentru tine. Testele individuale se comandă direct din magazinul nostru. Primești chestionarul pe e-mail, iar raportul imediat ce termini.",
    kleuren: "Vrei mai întâi o cunoaștere gratuită? Fă testul culorilor, fără costuri:",
    oefen: "Poți și să exersezi. Pe această pagină găsești întrebări de exersare pe fiecare parte, iar la final răspunsul corect și o explicație:",
    zakelijk: "Solicitarea ta este totuși pentru o echipă sau o organizație? Răspunde la acest e-mail sau sună-l pe Floor Hendriks la {tel}. Vedem împreună ce se potrivește.",
    groet: "Cu stimă,",
  },
};

// Talen zonder eigen tekst in dit bestand worden aangevuld uit
// src/data/translations-content/<taal>.json. Zie vertaal-inhoud.js.
Object.assign(PARTICULIER_MAIL, vulAan(PARTICULIER_MAIL));
Object.assign(SOORT_UI, vulAan(SOORT_UI));

// Talen waarin de teksten in dit bestand zelf staan. Een taal daarbuiten haalt
// de vertaling uit de vertaalbestanden; buiten de Astro-bouw gebeurt dat in
// functions/_lib/mailteksten.js, want daar bestaat import.meta.glob niet.
const BRON = ["nl", "en", "de", "fr", "es", "ro"];

// De gratis kleurentest bestaat alleen in de brontalen. Andere talen krijgen de
// Engelse pagina, net als de taalwisselaar op de site doet.
const KLEURENTEST = (t) => `https://hrmforce.com/${BRON.includes(t) ? (t === "nl" ? "" : t + "/") : "en/"}gratis-kleurentest/`;
const PAGINA = (t, pad) => `https://hrmforce.com/${t === "nl" ? "" : t + "/"}${pad}/`;

/**
 * Bouwt onderwerp en tekst van de mail aan een particuliere aanvrager.
 * Onbekende taal valt terug op het Nederlands.
 */
export function particulierMail(taal, naam) {
  const t = PARTICULIER_MAIL[taal] || PARTICULIER_MAIL.nl;
  const tel = taal === "nl" ? "06 18099421" : "+31 6 18099421";
  const vul = (s) => String(s).replace("{naam}", naam || "").replace("{tel}", tel);
  return {
    onderwerp: t.onderwerp,
    tekst: [
      naam ? vul(t.aanhefNaam) : t.aanhef,
      "",
      t.dank,
      "",
      t.shop,
      PAGINA(taal, "shop"),
      "",
      t.kleuren,
      KLEURENTEST(taal),
      "",
      t.oefen,
      PAGINA(taal, "oefentest"),
      "",
      vul(t.zakelijk),
      "",
      t.groet,
      "hrmforce",
      "service@hrmforce.com · hrmforce.com",
    ].join("\n"),
  };
}
