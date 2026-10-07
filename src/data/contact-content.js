// Teksten van de contactpagina, per taal. De opbouw is in elke taal gelijk,
// alleen de tekst verschilt. De veldnamen in het formulier blijven overal
// hetzelfde, zodat functions/api/aanvraag.js altijd dezelfde sleutels krijgt.

import { vulAan } from "./vertaal-inhoud.js";

export const HOOFDKANTOOR = {
  stad: "Amsterdam",
  regels: ["Solitudolaan 396", "1096 DS Amsterdam", "The Netherlands"],
  tel: "+31 (0)88 88 321 88",
  telHref: "tel:+31888832188",
  mail: "service@hrmforce.com",
  legal: "KvK Amsterdam 34369982 · BTW NL821671480B01 · IBAN NL31 RABO 0155 7584 11",
};

export const KANTOREN = [
  {
    naam: "hrmforce Germany",
    regels: ["Theodorstrasse 105", "40472 Düsseldorf", "Germany"],
    tel: "+31 (0)88 88 321 88",
    telHref: "tel:+31888832188",
    mail: "service@hrmforce.com",
  },
  {
    naam: "hrmforce Belgium",
    regels: ["Bridge Building", "Keizer Karellaan 584", "1082 Sint-Agatha-Berchem", "Belgium"],
    tel: "+32 495 66 58 97",
    telHref: "tel:+32495665897",
    mail: "belgium@hrmforce.com",
  },
  {
    naam: "hrmforce France",
    regels: ["5 Place de la Pyramide Tour Ariane", "92800 Paris, Hauts-de-Seine", "France"],
    tel: "+31 (0)88 88 321 88",
    telHref: "tel:+31888832188",
    mail: "france@hrmforce.com",
  },
  {
    naam: "hrmforce India",
    regels: ["Plot #27, 1-4-190/27/1/A, Phase-I", "Bhaskara Rao Nagar Sainikpuri P.O.", "Secunderabad, 500 094", "Telangana, India"],
    tel: "+91 89787 86121",
    telHref: "tel:+918978786121",
    mail: "india@hrmforce.com",
  },
  {
    naam: "hrmforce Romania",
    regels: ["Ploiesti Street, No 9", "400157 Cluj-Napoca", "Romania"],
    tel: "+31 (0)88 88 321 88",
    telHref: "tel:+31888832188",
    mail: "office@hrmforce.com",
  },
  {
    naam: "hrmforce Spain",
    regels: ["Carrer de les Barques 2-2nd floor", "46002 València", "Valencia, Spain"],
    tel: "+31 (0)88 88 321 88",
    telHref: "tel:+31888832188",
    mail: "atencioncliente@hrmforce.com",
  },
];

export const contactContent = {
  nl: {
    meta: {
      title: "Contact opnemen | hrmforce.com",
      description: "Neem contact op met hrmforce. Bel +31 (0)88 88 321 88, mail service@hrmforce.com of vul het contactformulier in. Onze adviseurs helpen je graag verder.",
    },
    crumb: "Contact",
    hero: {
      eyebrow: "Contact",
      title: "Interesse of heb je een vraag? Neem contact met ons op.",
      lead: "Wij helpen je graag en denken mee om samen tot een passende oplossing te komen. Aarzel dus niet, maar leg je vraag of idee meteen voor aan onze adviseurs. Vul het contactformulier in of bel ons en ga direct in gesprek.",
    },
    kantoor: {
      eyebrow: "hrmforce head office",
      telLabel: "Telefoon",
      mailLabel: "E-mail",
      bereikbaarTitel: "Bereikbaarheid",
      bereikbaarTekst: "Onze adviseurs zijn bereikbaar op maandag t/m vrijdag van 08:00 tot 18:00 uur.",
      kaartTitel: "Locatie hrmforce Amsterdam",
    },
    formulier: {
      eyebrow: "Contactformulier",
      titel: "Stuur ons een bericht",
      voornaam: "Voornaam",
      bedrijf: "Bedrijfsnaam",
      email: "Werk e-mailadres",
      telefoon: "Telefoonnummer",
      bericht: "Waar kunnen we je mee helpen?",
      verstuur: "Verstuur",
    },
    stappen: {
      titel: "Wat gebeurt er daarna?",
      items: ["We reageren binnen 1 werkdag.", "Een korte kennismaking, afgestemd op jouw vraag.", "Een demo op maat, vrijblijvend."],
      proof: "10.000+ deelnemers · 1.200+ organisaties · 4,9/5",
    },
    privacy: { tekst: "Door dit formulier te verzenden ga je akkoord met onze", link: "privacyverklaring", href: "/support/privacy-statement/" },
    persoon: {
      alt: "Floor Hendriks, oprichter van hrmforce",
      titel: "Liever persoonlijk contact?",
      tekst: "Bel of mail gerust, we reageren snel. Floor denkt graag met je mee over de aanpak die bij jouw vraag past.",
      naam: "Floor Hendriks · oprichter hrmforce · al meer dan 20 jaar ervaring",
    },
    vestigingen: {
      eyebrow: "Onze vestigingen",
      titel: "hrmforce wereldwijd",
      lead: "Naast ons hoofdkantoor in Amsterdam zijn we ook internationaal vertegenwoordigd.",
    },
    cta: {
      titel: "Klaar om hrmforce in actie te zien?",
      tekst: "Plan een vrijblijvende demo en ontdek in 30 minuten hoe onze assessments en talentmanagement-software jouw HR-proces versterken.",
      knop1: { label: "Claim gratis demo", href: "/demo/" },
      knop2: { label: "Bekijk de assessments", href: "/online-assessments/" },
    },
    melding: {
      verplicht: "Vul alle verplichte velden in voordat je verzendt.",
      ongeldigEmail: "Vul een geldig e-mailadres in.",
      verzenden: "Verzenden…",
      dank: "Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.",
      dankParticulier: "Bedankt. We hebben je een mail gestuurd met de mogelijkheden voor particulieren.",
      geenMens: "We konden niet vaststellen dat je een mens bent. Vink het vakje aan en probeer het opnieuw.",
      misgegaan: "Er ging iets mis bij het versturen. Probeer het nog eens of mail naar service@hrmforce.com.",
    },
  },

  en: {
    meta: {
      title: "Contact us | hrmforce.com",
      description: "Get in touch with hrmforce. Call +31 (0)88 88 321 88, email service@hrmforce.com or fill in the contact form. Our consultants are happy to help.",
    },
    crumb: "Contact",
    hero: {
      eyebrow: "Contact",
      title: "Interested or do you have a question? Get in touch.",
      lead: "We are happy to help and think along with you to find a fitting solution. Put your question or idea to our consultants straight away. Fill in the contact form or call us and speak to someone directly.",
    },
    kantoor: {
      eyebrow: "hrmforce head office",
      telLabel: "Phone",
      mailLabel: "E-mail",
      bereikbaarTitel: "Availability",
      bereikbaarTekst: "Our consultants are available Monday to Friday from 08:00 to 18:00.",
      kaartTitel: "Location hrmforce Amsterdam",
    },
    formulier: {
      eyebrow: "Contact form",
      titel: "Send us a message",
      voornaam: "First name",
      bedrijf: "Company name",
      email: "Work email address",
      telefoon: "Phone number",
      bericht: "What can we help you with?",
      verstuur: "Submit",
    },
    stappen: {
      titel: "What happens next?",
      items: ["We respond within 1 business day.", "A short intro call, tailored to your question.", "A personalised demo, no obligation."],
      proof: "10,000+ participants · 1,200+ organisations · 4.9/5",
    },
    privacy: { tekst: "By submitting this form you agree to our", link: "privacy statement", href: "/en/support/" },
    persoon: {
      alt: "Floor Hendriks, founder of hrmforce",
      titel: "Prefer personal contact?",
      tekst: "Call or email us, we respond quickly. Floor is happy to think along about the approach that fits your question.",
      naam: "Floor Hendriks · founder of hrmforce · over 20 years of experience",
    },
    vestigingen: {
      eyebrow: "Our offices",
      titel: "hrmforce worldwide",
      lead: "In addition to our head office in Amsterdam, we are also represented internationally.",
    },
    cta: {
      titel: "Ready to see hrmforce in action?",
      tekst: "Discover in 30 minutes how our assessments and talent management software strengthen your HR process.",
      knop1: { label: "View the assessments", href: "/en/online-assessments/" },
      knop2: { label: "View pricing", href: "/en/tarieven/" },
    },
    melding: {
      verplicht: "Please fill in all required fields before submitting.",
      ongeldigEmail: "Please enter a valid email address.",
      verzenden: "Sending…",
      dank: "Thank you for your message. We will get in touch as soon as we can.",
      dankParticulier: "Thank you. We have emailed you the options for individuals.",
      geenMens: "We could not confirm that you are human. Tick the box and try again.",
      misgegaan: "Something went wrong while sending. Please try again or email service@hrmforce.com.",
    },
  },

  de: {
    meta: {
      title: "Kontakt aufnehmen | hrmforce.com",
      description: "Nehmen Sie Kontakt zu hrmforce auf. Rufen Sie +31 (0)88 88 321 88 an, mailen Sie service@hrmforce.com oder füllen Sie das Kontaktformular aus.",
    },
    crumb: "Kontakt",
    hero: {
      eyebrow: "Kontakt",
      title: "Interesse oder eine Frage? Nehmen Sie Kontakt mit uns auf.",
      lead: "Wir helfen Ihnen gerne und denken mit Ihnen mit, um gemeinsam eine passende Lösung zu finden. Zögern Sie nicht, sich mit Ihrer Frage oder Idee an unsere Berater zu wenden. Füllen Sie das Kontaktformular aus oder rufen Sie uns an.",
    },
    kantoor: {
      eyebrow: "hrmforce head office",
      telLabel: "Telefon",
      mailLabel: "E-Mail",
      bereikbaarTitel: "Erreichbarkeit",
      bereikbaarTekst: "Unsere Berater sind von Montag bis Freitag von 08:00 bis 18:00 Uhr erreichbar.",
      kaartTitel: "Standort hrmforce Amsterdam",
    },
    formulier: {
      eyebrow: "Kontaktformular",
      titel: "Senden Sie uns eine Nachricht",
      voornaam: "Vorname",
      bedrijf: "Firmenname",
      email: "Geschäftliche E-Mail-Adresse",
      telefoon: "Telefonnummer",
      bericht: "Womit können wir Ihnen helfen?",
      verstuur: "Senden",
    },
    stappen: {
      titel: "Wie geht es weiter?",
      items: ["Wir antworten innerhalb von 1 Werktag.", "Ein kurzes Kennenlernen, auf Ihre Frage abgestimmt.", "Eine individuelle Demo, unverbindlich."],
      proof: "10.000+ Teilnehmende · 1.200+ Organisationen · 4,9/5",
    },
    privacy: { tekst: "Durch das Absenden dieses Formulars stimmen Sie unserer", link: "Datenschutzerklärung", href: "/de/datenshutzpagina/" },
    persoon: {
      alt: "Floor Hendriks, Gründer von hrmforce",
      titel: "Lieber persönlicher Kontakt?",
      tekst: "Rufen Sie an oder mailen Sie, wir antworten schnell. Floor denkt gern mit Ihnen über den passenden Ansatz nach.",
      naam: "Floor Hendriks · Gründer von hrmforce · über 20 Jahre Erfahrung",
    },
    vestigingen: {
      eyebrow: "Unsere Standorte",
      titel: "hrmforce weltweit",
      lead: "Neben unserem Hauptsitz in Amsterdam sind wir auch international vertreten.",
    },
    cta: {
      titel: "Bereit, hrmforce in Aktion zu sehen?",
      tekst: "Entdecken Sie in 30 Minuten, wie unsere Assessments und unsere Talentmanagement-Software Ihren HR-Prozess stärken.",
      knop1: { label: "Assessments ansehen", href: "/de/online-assessments/" },
      knop2: { label: "Preise ansehen", href: "/de/tarieven/" },
    },
    melding: {
      verplicht: "Bitte füllen Sie alle Pflichtfelder aus, bevor Sie absenden.",
      ongeldigEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      verzenden: "Wird gesendet…",
      dank: "Danke für Ihre Nachricht. Wir melden uns so schnell wie möglich.",
      dankParticulier: "Danke. Wir haben Ihnen die Möglichkeiten für Privatpersonen per E-Mail geschickt.",
      geenMens: "Wir konnten nicht feststellen, dass Sie ein Mensch sind. Bitte das Kästchen anklicken und erneut versuchen.",
      misgegaan: "Beim Senden ist etwas schiefgelaufen. Bitte erneut versuchen oder an service@hrmforce.com mailen.",
    },
  },

  fr: {
    meta: {
      title: "Nous contacter | hrmforce.com",
      description: "Contactez hrmforce. Appelez le +31 (0)88 88 321 88, écrivez à service@hrmforce.com ou remplissez le formulaire de contact.",
    },
    crumb: "Contact",
    hero: {
      eyebrow: "Contact",
      title: "Intéressé ou une question ? Contactez-nous.",
      lead: "Nous vous aidons volontiers et cherchons avec vous la solution la plus adaptée. N'hésitez pas à soumettre votre question ou votre idée à nos conseillers. Remplissez le formulaire de contact ou appelez-nous.",
    },
    kantoor: {
      eyebrow: "hrmforce head office",
      telLabel: "Téléphone",
      mailLabel: "E-mail",
      bereikbaarTitel: "Disponibilité",
      bereikbaarTekst: "Nos conseillers sont disponibles du lundi au vendredi de 08h00 à 18h00.",
      kaartTitel: "Emplacement hrmforce Amsterdam",
    },
    formulier: {
      eyebrow: "Formulaire de contact",
      titel: "Envoyez-nous un message",
      voornaam: "Prénom",
      bedrijf: "Nom de l'entreprise",
      email: "Adresse e-mail professionnelle",
      telefoon: "Numéro de téléphone",
      bericht: "En quoi pouvons-nous vous aider ?",
      verstuur: "Envoyer",
    },
    stappen: {
      titel: "Que se passe-t-il ensuite ?",
      items: ["Nous répondons sous 1 jour ouvré.", "Un court échange, adapté à votre question.", "Une démo personnalisée, sans engagement."],
      proof: "10 000+ participants · 1 200+ organisations · 4,9/5",
    },
    privacy: { tekst: "En envoyant ce formulaire, vous acceptez notre", link: "déclaration de confidentialité", href: "/fr/support/" },
    persoon: {
      alt: "Floor Hendriks, fondateur de hrmforce",
      titel: "Vous préférez un contact personnel ?",
      tekst: "Appelez ou écrivez-nous, nous répondons vite. Floor réfléchit volontiers avec vous à l'approche qui convient à votre question.",
      naam: "Floor Hendriks · fondateur de hrmforce · plus de 20 ans d'expérience",
    },
    vestigingen: {
      eyebrow: "Nos bureaux",
      titel: "hrmforce dans le monde",
      lead: "Outre notre siège à Amsterdam, nous sommes également présents à l'international.",
    },
    cta: {
      titel: "Prêt à voir hrmforce en action ?",
      tekst: "Découvrez en 30 minutes comment nos évaluations et notre logiciel de gestion des talents renforcent votre processus RH.",
      knop1: { label: "Voir les évaluations", href: "/fr/online-assessments/" },
      knop2: { label: "Voir les tarifs", href: "/fr/tarieven/" },
    },
    melding: {
      verplicht: "Veuillez remplir tous les champs obligatoires avant d'envoyer.",
      ongeldigEmail: "Veuillez saisir une adresse e-mail valide.",
      verzenden: "Envoi…",
      dank: "Merci pour votre message. Nous vous recontactons au plus vite.",
      dankParticulier: "Merci. Nous vous avons envoyé par e-mail les possibilités pour les particuliers.",
      geenMens: "Nous n'avons pas pu confirmer que vous êtes humain. Cochez la case et réessayez.",
      misgegaan: "Une erreur est survenue lors de l'envoi. Réessayez ou écrivez à service@hrmforce.com.",
    },
  },

  es: {
    meta: {
      title: "Contacto | hrmforce.com",
      description: "Ponte en contacto con hrmforce. Llama al +31 (0)88 88 321 88, escribe a service@hrmforce.com o rellena el formulario de contacto.",
    },
    crumb: "Contacto",
    hero: {
      eyebrow: "Contacto",
      title: "¿Interesado o tienes alguna pregunta? Ponte en contacto.",
      lead: "Te ayudamos con gusto y pensamos contigo para encontrar juntos una solución adecuada. No dudes en plantear tu pregunta o idea a nuestros asesores. Rellena el formulario de contacto o llámanos.",
    },
    kantoor: {
      eyebrow: "hrmforce head office",
      telLabel: "Teléfono",
      mailLabel: "Email",
      bereikbaarTitel: "Disponibilidad",
      bereikbaarTekst: "Nuestros asesores están disponibles de lunes a viernes de 08:00 a 18:00.",
      kaartTitel: "Ubicación hrmforce Amsterdam",
    },
    formulier: {
      eyebrow: "Formulario de contacto",
      titel: "Envíanos un mensaje",
      voornaam: "Nombre",
      bedrijf: "Nombre de la empresa",
      email: "Correo electrónico de trabajo",
      telefoon: "Número de teléfono",
      bericht: "¿En qué podemos ayudarte?",
      verstuur: "Enviar",
    },
    stappen: {
      titel: "¿Qué pasa después?",
      items: ["Respondemos en un plazo de 1 día laborable.", "Una breve toma de contacto, adaptada a tu pregunta.", "Una demo personalizada, sin compromiso."],
      proof: "10.000+ participantes · 1.200+ organizaciones · 4,9/5",
    },
    privacy: { tekst: "Al enviar este formulario aceptas nuestra", link: "declaración de privacidad", href: "/es/support/" },
    persoon: {
      alt: "Floor Hendriks, fundador de hrmforce",
      titel: "¿Prefieres el contacto personal?",
      tekst: "Llama o escríbenos, respondemos rápido. Floor piensa contigo sobre el enfoque que encaja con tu pregunta.",
      naam: "Floor Hendriks · fundador de hrmforce · más de 20 años de experiencia",
    },
    vestigingen: {
      eyebrow: "Nuestras oficinas",
      titel: "hrmforce en el mundo",
      lead: "Además de nuestra sede en Ámsterdam, también estamos representados internacionalmente.",
    },
    cta: {
      titel: "¿Listo para ver hrmforce en acción?",
      tekst: "Descubre en 30 minutos cómo nuestras evaluaciones y nuestro software de gestión del talento refuerzan tu proceso de RR. HH.",
      knop1: { label: "Ver las evaluaciones", href: "/es/online-assessments/" },
      knop2: { label: "Ver tarifas", href: "/es/tarieven/" },
    },
    melding: {
      verplicht: "Rellena todos los campos obligatorios antes de enviar.",
      ongeldigEmail: "Introduce una dirección de correo electrónico válida.",
      verzenden: "Enviando…",
      dank: "Gracias por tu mensaje. Nos pondremos en contacto lo antes posible.",
      dankParticulier: "Gracias. Te hemos enviado por correo las opciones para particulares.",
      geenMens: "No hemos podido confirmar que eres una persona. Marca la casilla e inténtalo de nuevo.",
      misgegaan: "Algo salió mal al enviar. Inténtalo de nuevo o escribe a service@hrmforce.com.",
    },
  },

  ro: {
    meta: {
      title: "Contact | hrmforce.com",
      description: "Contactează hrmforce. Sună la +31 (0)88 88 321 88, scrie la service@hrmforce.com sau completează formularul de contact.",
    },
    crumb: "Contact",
    hero: {
      eyebrow: "Contact",
      title: "Ești interesat sau ai o întrebare? Contactează-ne.",
      lead: "Te ajutăm cu plăcere și ne gândim împreună cu tine la o soluție potrivită. Nu ezita să le adresezi consilierilor noștri întrebarea sau ideea ta. Completează formularul de contact sau sună-ne.",
    },
    kantoor: {
      eyebrow: "hrmforce head office",
      telLabel: "Telefon",
      mailLabel: "E-mail",
      bereikbaarTitel: "Disponibilitate",
      bereikbaarTekst: "Consilierii noștri sunt disponibili de luni până vineri, între orele 08:00 și 18:00.",
      kaartTitel: "Locație hrmforce Amsterdam",
    },
    formulier: {
      eyebrow: "Formular de contact",
      titel: "Trimite-ne un mesaj",
      voornaam: "Prenume",
      bedrijf: "Numele organizației",
      email: "Adresă de e-mail de serviciu",
      telefoon: "Număr de telefon",
      bericht: "Cu ce te putem ajuta?",
      verstuur: "Trimite",
    },
    stappen: {
      titel: "Ce urmează?",
      items: ["Răspundem în maximum 1 zi lucrătoare.", "O scurtă discuție, adaptată întrebării tale.", "O demonstrație personalizată, fără obligații."],
      proof: "10.000+ participanți · 1.200+ organizații · 4,9/5",
    },
    privacy: { tekst: "Prin trimiterea acestui formular ești de acord cu", link: "declarația noastră de confidențialitate", href: "/ro/support/" },
    persoon: {
      alt: "Floor Hendriks, fondatorul hrmforce",
      titel: "Preferi contactul personal?",
      tekst: "Sună sau scrie-ne, răspundem rapid. Floor se gândește cu plăcere împreună cu tine la abordarea potrivită.",
      naam: "Floor Hendriks · fondatorul hrmforce · peste 20 de ani de experiență",
    },
    vestigingen: {
      eyebrow: "Sediile noastre",
      titel: "hrmforce în lume",
      lead: "Pe lângă sediul central din Amsterdam, suntem reprezentați și internațional.",
    },
    cta: {
      titel: "Gata să vezi hrmforce în acțiune?",
      tekst: "Descoperă în 30 de minute cum evaluările noastre și software-ul de management al talentelor îți întăresc procesul de HR.",
      knop1: { label: "Vezi evaluările", href: "/ro/online-assessments/" },
      knop2: { label: "Vezi tarifele", href: "/ro/tarieven/" },
    },
    melding: {
      verplicht: "Te rugăm să completezi toate câmpurile obligatorii înainte de a trimite.",
      ongeldigEmail: "Te rugăm să introduci o adresă de e-mail validă.",
      verzenden: "Se trimite…",
      dank: "Mulțumim pentru mesaj. Revenim cât de repede putem.",
      dankParticulier: "Mulțumim. Ți-am trimis pe e-mail opțiunile pentru persoane fizice.",
      geenMens: "Nu am putut confirma că ești o persoană. Bifează căsuța și încearcă din nou.",
      misgegaan: "A apărut o eroare la trimitere. Încearcă din nou sau scrie la service@hrmforce.com.",
    },
  },
};

// Talen zonder eigen tekst in dit bestand worden aangevuld uit
// src/data/translations-content/<taal>.json. Zie vertaal-inhoud.js.
Object.assign(contactContent, vulAan(contactContent));
