/* Meldingen rond het verzenden van een formulier, in alle zes talen. De tekst
   bij een afgewezen spamcontrole staat in mensencheck-tekst.js. */
import { vulAan } from "./vertaal-inhoud.js";

export const FORM_UI = {
  nl: { bezig: "Verzenden…", ok: "Bedankt. We nemen zo snel mogelijk contact met je op.", fout: "Er ging iets mis bij het versturen. Probeer het nog eens of mail naar service@hrmforce.com." },
  en: { bezig: "Sending…", ok: "Thank you. We will get in touch as soon as we can.", fout: "Something went wrong while sending. Please try again or email service@hrmforce.com." },
  de: { bezig: "Wird gesendet…", ok: "Danke. Wir melden uns so schnell wie möglich.", fout: "Beim Senden ist etwas schiefgelaufen. Bitte erneut versuchen oder an service@hrmforce.com mailen." },
  fr: { bezig: "Envoi…", ok: "Merci. Nous vous recontactons au plus vite.", fout: "Une erreur est survenue lors de l'envoi. Réessayez ou écrivez à service@hrmforce.com." },
  es: { bezig: "Enviando…", ok: "Gracias. Nos pondremos en contacto lo antes posible.", fout: "Algo salió mal al enviar. Inténtalo de nuevo o escribe a service@hrmforce.com." },
  ro: { bezig: "Se trimite…", ok: "Mulțumim. Revenim cât de repede putem.", fout: "A apărut o eroare la trimitere. Încearcă din nou sau scrie la service@hrmforce.com." },
};

// Talen zonder eigen tekst in dit bestand worden aangevuld uit
// src/data/translations-content/<taal>.json. Zie vertaal-inhoud.js.
Object.assign(FORM_UI, vulAan(FORM_UI));
