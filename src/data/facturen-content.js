// Factuurinstructie voor leveranciers op /invoices/, gebruikt door
// src/components/Facturen.astro.
//
// nl, en, de, fr, es en ro staan hier met de hand. Elke andere taal komt via
// vulAan uit src/data/translations-content/<taal>.json; een nieuwe taal krijgt
// deze teksten vanzelf mee in scripts/hsf-translate-content.mjs, want dat
// script leest elk bestand in src/data.
//
// De vaste gegevens (adres, nummers, mailadressen) staan bewust buiten de
// taalblokken in FACTUURGEGEVENS. Zo gaan ze niet door DeepL en kan er geen
// cijfer verspringen. In de teksten staan ze als plaatshouder:
//   {mail}     invoices@hrmforce.com, als link
//   {finance}  finance@hrmforce.com, als link
//   {tel}      het telefoonnummer, als link
//   {btw}      ons btw-nummer
//
// Let op: sleutels als mail, tel, href en code slaat vulAan over (GEEN_TEKST in
// vertaal-inhoud.js). Een label heet daarom email en niet mail.
import { vulAan } from "./vertaal-inhoud.js";

export const FACTUURGEGEVENS = {
  naam: "hrmforce B.V.",
  straat: "Solitudolaan 396",
  postcode: "1096 DS Amsterdam",
  btw: "NL821671480B01",
  kvk: "34369982",
  mail: "invoices@hrmforce.com",
  finance: "finance@hrmforce.com",
  telHref: "+31888832188",
  telNl: "088 883 2188",
  telInt: "+31 88 883 2188",
};

// Ankers op de pagina. Gelijk in elke taal, zodat een link naar #btw overal werkt.
export const FACTUUR_ANKERS = ["aanleveren", "tenaamstelling", "gegevens", "btw", "betaling", "creditnota", "vragen"];

export const facturenContent = vulAan({
  nl: {
    meta: {
      title: "Factuurinstructie voor leveranciers | hrmforce",
      description: "Zo stuurt u een factuur aan hrmforce B.V.: als PDF per e-mail, met de juiste tenaamstelling, btw-vermelding en onze referentie. Wij betalen binnen 14 dagen.",
    },
    crumb: "Factuurinstructie",
    hero: {
      eyebrow: "Voor leveranciers",
      title: "Factuurinstructie voor leveranciers",
      intro: "Zo stuurt u uw factuur aan hrmforce B.V., zodat wij hem direct kunnen verwerken en binnen 14 dagen betalen.",
    },
    mail: {
      label: "Stuur uw factuur uitsluitend per e-mail naar",
      note: "Facturen die naar persoonlijke adressen of per post worden gestuurd, verwerken wij niet automatisch. Dat kan de betaling vertragen.",
      copy: "Kopieer",
      copied: "Gekopieerd",
    },
    toc: "Op deze pagina",
    submit: {
      title: "Zo levert u de factuur aan",
      items: [
        "Eén factuur per e-mail, als PDF-bijlage. Een e-factuur in UBL-formaat (Peppol) is ook welkom, eventueel samen met de PDF.",
        "De PDF bevat tekst (geen scan of foto) en is niet beveiligd met een wachtwoord.",
        "Geen downloadlinks, Word-bestanden of facturen in de tekst van de e-mail.",
        "Bijlagen zoals een urenoverzicht of specificatie mogen als extra PDF in dezelfde e-mail.",
        "Stuur een factuur één keer. Een herinnering stuurt u als nieuwe e-mail met het oorspronkelijke factuurnummer in het onderwerp.",
      ],
    },
    billing: {
      title: "Tenaamstelling",
      head: ["Gegeven", "Op de factuur"],
      name: "Naam",
      address: "Adres",
      country: "Nederland",
      vat: "Btw-nummer",
      coc: "KvK-nummer",
      email: "E-mail factuuradres",
    },
    required: {
      title: "Verplichte gegevens op uw factuur",
      items: [
        "Uw bedrijfsnaam, adres, btw-nummer en KvK-nummer (of buitenlands registratienummer).",
        "Een uniek, opvolgend factuurnummer.",
        "De factuurdatum en de datum of periode van levering.",
        "Een duidelijke omschrijving van de geleverde dienst of het product, met aantal en prijs per eenheid.",
        "Onze referentie: het aanvraagnummer, bestelnummer of de projectnaam die u van ons heeft gekregen.",
        "Het bedrag exclusief btw, het btw-tarief en btw-bedrag per tarief, en het totaalbedrag, in euro.",
        "Uw IBAN en de tenaamstelling van de rekening. Bij een buitenlandse rekening ook de BIC.",
        "De betaaltermijn: 14 dagen.",
      ],
    },
    vat: {
      title: "Btw",
      head: ["U bent gevestigd in", "Btw op de factuur"],
      rows: [
        ["Nederland", "Nederlandse btw (meestal 21 procent), apart vermeld."],
        ["Ander EU-land", "Geen btw, met de vermelding \"btw verlegd\" of \"VAT reverse charge\" en zowel uw als ons btw-nummer ({btw})."],
        ["Buiten de EU", "Geen Nederlandse btw. Vermeld de reden, bijvoorbeeld \"VAT reverse charge, article 44 and 196 VAT Directive\"."],
      ],
    },
    payment: {
      title: "Betaling",
      items: [
        "Wij betalen binnen 14 dagen na ontvangst van een volledige en correcte factuur.",
        "Een factuur die niet voldoet aan deze instructie sturen wij terug met de reden. De betaaltermijn start dan opnieuw bij ontvangst van de gecorrigeerde factuur.",
        "Wilt u uw bankgegevens wijzigen? Laat dat schriftelijk weten via {finance}. Wij controleren een wijziging altijd telefonisch voordat wij hem doorvoeren.",
      ],
    },
    credit: {
      title: "Creditnota's",
      text: "Stuur een creditnota naar {finance}, met een eigen nummer en een verwijzing naar het oorspronkelijke factuurnummer.",
    },
    questions: {
      title: "Vragen",
      text: "Heeft u een vraag over een factuur of betaling? Mail naar {finance} of bel {tel}. Vermeld daarbij altijd uw factuurnummer.",
    },
  },

  en: {
    meta: {
      title: "Invoicing instructions for suppliers | hrmforce",
      description: "How to send an invoice to hrmforce B.V.: as a PDF by e-mail, with the correct billing details, VAT statement and our reference. We pay within 14 days.",
    },
    crumb: "Invoicing instructions",
    hero: {
      eyebrow: "For suppliers",
      title: "Invoicing instructions for suppliers",
      intro: "How to send your invoice to hrmforce B.V., so we can process it straight away and pay within 14 days.",
    },
    mail: {
      label: "Please send your invoice by e-mail only, to",
      note: "Invoices sent to personal addresses or by post are not processed automatically, which may delay payment.",
      copy: "Copy",
      copied: "Copied",
    },
    toc: "On this page",
    submit: {
      title: "How to submit",
      items: [
        "One invoice per e-mail, as a PDF attachment. An e-invoice in UBL format (Peppol) is also welcome, optionally together with the PDF.",
        "The PDF contains text (no scan or photo) and is not password protected.",
        "No download links, Word files or invoices in the body of the e-mail.",
        "Supporting documents, such as a timesheet or specification, may be added as a separate PDF in the same e-mail.",
        "Send each invoice once. Send a reminder as a new e-mail with the original invoice number in the subject line.",
      ],
    },
    billing: {
      title: "Billing details",
      head: ["Item", "On the invoice"],
      name: "Name",
      address: "Address",
      country: "the Netherlands",
      vat: "VAT number",
      coc: "Chamber of Commerce",
      email: "Invoice e-mail",
    },
    required: {
      title: "Required information",
      items: [
        "Your company name, address, VAT number and company registration number.",
        "A unique, sequential invoice number.",
        "The invoice date and the date or period of delivery.",
        "A clear description of the service or product, with quantity and unit price.",
        "Our reference: the request number, order number or project name we gave you.",
        "The amount excluding VAT, the VAT rate and VAT amount per rate, and the total, in euro.",
        "Your IBAN and account holder name, and the BIC for accounts outside the Netherlands.",
        "The payment term: 14 days.",
      ],
    },
    vat: {
      title: "VAT",
      head: ["You are based in", "VAT on the invoice"],
      rows: [
        ["The Netherlands", "Dutch VAT (usually 21 percent), shown separately."],
        ["Another EU country", "No VAT, stating \"VAT reverse charge\" and both your VAT number and ours ({btw})."],
        ["Outside the EU", "No Dutch VAT. State the reason, for example \"VAT reverse charge, article 44 and 196 VAT Directive\"."],
      ],
    },
    payment: {
      title: "Payment",
      items: [
        "We pay within 14 days of receiving a complete and correct invoice.",
        "Invoices that do not meet these instructions are returned with the reason. The payment term restarts when we receive the corrected invoice.",
        "Changing your bank details? Let us know in writing via {finance}. We always verify a change by phone before applying it.",
      ],
    },
    credit: {
      title: "Credit notes",
      text: "Send credit notes to {finance}, with their own number and a reference to the original invoice number.",
    },
    questions: {
      title: "Questions",
      text: "Questions about an invoice or payment? E-mail {finance} or call {tel}. Please always include your invoice number.",
    },
  },

  de: {
    meta: {
      title: "Rechnungsrichtlinie für Lieferanten | hrmforce",
      description: "So senden Sie eine Rechnung an hrmforce B.V.: als PDF per E-Mail, mit der richtigen Rechnungsadresse, Umsatzsteuerangabe und unserer Referenz. Zahlung innerhalb von 14 Tagen.",
    },
    crumb: "Rechnungsrichtlinie",
    hero: {
      eyebrow: "Für Lieferanten",
      title: "Rechnungsrichtlinie für Lieferanten",
      intro: "So senden Sie Ihre Rechnung an hrmforce B.V., damit wir sie sofort verarbeiten und innerhalb von 14 Tagen bezahlen können.",
    },
    mail: {
      label: "Senden Sie Ihre Rechnung ausschließlich per E-Mail an",
      note: "Rechnungen an persönliche Adressen oder per Post verarbeiten wir nicht automatisch. Das kann die Zahlung verzögern.",
      copy: "Kopieren",
      copied: "Kopiert",
    },
    toc: "Auf dieser Seite",
    submit: {
      title: "So reichen Sie die Rechnung ein",
      items: [
        "Eine Rechnung pro E-Mail, als PDF-Anhang. Eine E-Rechnung im UBL-Format (Peppol) ist ebenfalls willkommen, gern zusammen mit der PDF.",
        "Die PDF enthält Text (kein Scan und kein Foto) und ist nicht mit einem Passwort geschützt.",
        "Keine Download-Links, keine Word-Dateien und keine Rechnungen im Text der E-Mail.",
        "Anlagen wie ein Stundennachweis oder eine Spezifikation können als zusätzliche PDF in derselben E-Mail mitgeschickt werden.",
        "Senden Sie jede Rechnung nur einmal. Eine Zahlungserinnerung senden Sie als neue E-Mail mit der ursprünglichen Rechnungsnummer im Betreff.",
      ],
    },
    billing: {
      title: "Rechnungsadresse",
      head: ["Angabe", "Auf der Rechnung"],
      name: "Name",
      address: "Adresse",
      country: "Niederlande",
      vat: "USt-IdNr.",
      coc: "Handelsregister (KvK)",
      email: "E-Mail für Rechnungen",
    },
    required: {
      title: "Pflichtangaben auf Ihrer Rechnung",
      items: [
        "Ihr Firmenname, Ihre Adresse, Ihre USt-IdNr. und Ihre Handelsregisternummer.",
        "Eine eindeutige, fortlaufende Rechnungsnummer.",
        "Das Rechnungsdatum und das Datum oder der Zeitraum der Leistung.",
        "Eine klare Beschreibung der erbrachten Leistung oder des Produkts, mit Menge und Einzelpreis.",
        "Unsere Referenz: die Anfragenummer, Bestellnummer oder der Projektname, den Sie von uns erhalten haben.",
        "Der Nettobetrag, der Steuersatz und der Steuerbetrag je Steuersatz sowie der Gesamtbetrag, in Euro.",
        "Ihre IBAN und der Kontoinhaber. Bei einem Konto außerhalb der Niederlande auch die BIC.",
        "Die Zahlungsfrist: 14 Tage.",
      ],
    },
    vat: {
      title: "Umsatzsteuer",
      head: ["Ihr Sitz ist in", "Umsatzsteuer auf der Rechnung"],
      rows: [
        ["Niederlande", "Niederländische Umsatzsteuer (meist 21 Prozent), gesondert ausgewiesen."],
        ["Anderes EU-Land", "Keine Umsatzsteuer, mit dem Hinweis „Steuerschuldnerschaft des Leistungsempfängers“ oder „VAT reverse charge“ sowie Ihrer und unserer USt-IdNr. ({btw})."],
        ["Außerhalb der EU", "Keine niederländische Umsatzsteuer. Nennen Sie den Grund, zum Beispiel „VAT reverse charge, article 44 and 196 VAT Directive“."],
      ],
    },
    payment: {
      title: "Zahlung",
      items: [
        "Wir zahlen innerhalb von 14 Tagen nach Eingang einer vollständigen und korrekten Rechnung.",
        "Eine Rechnung, die dieser Richtlinie nicht entspricht, senden wir mit Angabe des Grundes zurück. Die Zahlungsfrist beginnt dann mit dem Eingang der korrigierten Rechnung neu.",
        "Ändern sich Ihre Bankdaten? Teilen Sie uns das schriftlich über {finance} mit. Wir prüfen jede Änderung telefonisch, bevor wir sie übernehmen.",
      ],
    },
    credit: {
      title: "Gutschriften",
      text: "Senden Sie Gutschriften an {finance}, mit einer eigenen Nummer und einem Verweis auf die ursprüngliche Rechnungsnummer.",
    },
    questions: {
      title: "Fragen",
      text: "Haben Sie eine Frage zu einer Rechnung oder Zahlung? Schreiben Sie an {finance} oder rufen Sie {tel} an. Geben Sie dabei immer Ihre Rechnungsnummer an.",
    },
  },

  fr: {
    meta: {
      title: "Instructions de facturation pour les fournisseurs | hrmforce",
      description: "Comment envoyer une facture à hrmforce B.V. : en PDF par e-mail, avec les bonnes coordonnées de facturation, la mention de TVA et notre référence. Paiement sous 14 jours.",
    },
    crumb: "Instructions de facturation",
    hero: {
      eyebrow: "Pour les fournisseurs",
      title: "Instructions de facturation pour les fournisseurs",
      intro: "Comment envoyer votre facture à hrmforce B.V., pour que nous puissions la traiter immédiatement et la payer sous 14 jours.",
    },
    mail: {
      label: "Envoyez votre facture uniquement par e-mail à",
      note: "Les factures envoyées à des adresses personnelles ou par courrier ne sont pas traitées automatiquement, ce qui peut retarder le paiement.",
      copy: "Copier",
      copied: "Copié",
    },
    toc: "Sur cette page",
    submit: {
      title: "Comment envoyer la facture",
      items: [
        "Une facture par e-mail, en pièce jointe PDF. Une facture électronique au format UBL (Peppol) est également la bienvenue, éventuellement accompagnée du PDF.",
        "Le PDF contient du texte (pas de scan ni de photo) et n'est pas protégé par un mot de passe.",
        "Pas de liens de téléchargement, de fichiers Word ni de factures dans le corps de l'e-mail.",
        "Les justificatifs, comme un relevé d'heures ou une spécification, peuvent être joints en PDF séparé dans le même e-mail.",
        "Envoyez chaque facture une seule fois. Envoyez une relance dans un nouvel e-mail avec le numéro de facture d'origine dans l'objet.",
      ],
    },
    billing: {
      title: "Coordonnées de facturation",
      head: ["Élément", "Sur la facture"],
      name: "Nom",
      address: "Adresse",
      country: "Pays-Bas",
      vat: "Numéro de TVA",
      coc: "Chambre de commerce (KvK)",
      email: "E-mail de facturation",
    },
    required: {
      title: "Mentions obligatoires sur votre facture",
      items: [
        "Le nom de votre société, votre adresse, votre numéro de TVA et votre numéro d'immatriculation.",
        "Un numéro de facture unique et séquentiel.",
        "La date de la facture et la date ou la période de livraison.",
        "Une description claire du service ou du produit fourni, avec la quantité et le prix unitaire.",
        "Notre référence : le numéro de demande, le numéro de commande ou le nom de projet que nous vous avons communiqué.",
        "Le montant hors TVA, le taux et le montant de TVA par taux, et le montant total, en euros.",
        "Votre IBAN et le titulaire du compte, ainsi que le BIC pour un compte hors des Pays-Bas.",
        "Le délai de paiement : 14 jours.",
      ],
    },
    vat: {
      title: "TVA",
      head: ["Vous êtes établi", "TVA sur la facture"],
      rows: [
        ["Aux Pays-Bas", "TVA néerlandaise (généralement 21 pour cent), indiquée séparément."],
        ["Dans un autre pays de l'UE", "Pas de TVA, avec la mention « Autoliquidation » ou « VAT reverse charge » et votre numéro de TVA ainsi que le nôtre ({btw})."],
        ["Hors de l'UE", "Pas de TVA néerlandaise. Indiquez le motif, par exemple « VAT reverse charge, article 44 and 196 VAT Directive »."],
      ],
    },
    payment: {
      title: "Paiement",
      items: [
        "Nous payons sous 14 jours après réception d'une facture complète et correcte.",
        "Une facture qui ne respecte pas ces instructions vous est renvoyée avec le motif. Le délai de paiement repart alors à la réception de la facture corrigée.",
        "Vous changez de coordonnées bancaires ? Informez-nous par écrit via {finance}. Nous vérifions toujours un changement par téléphone avant de l'appliquer.",
      ],
    },
    credit: {
      title: "Avoirs",
      text: "Envoyez les avoirs à {finance}, avec leur propre numéro et une référence au numéro de facture d'origine.",
    },
    questions: {
      title: "Questions",
      text: "Une question sur une facture ou un paiement ? Écrivez à {finance} ou appelez le {tel}. Indiquez toujours votre numéro de facture.",
    },
  },

  es: {
    meta: {
      title: "Instrucciones de facturación para proveedores | hrmforce",
      description: "Cómo enviar una factura a hrmforce B.V.: en PDF por correo electrónico, con los datos de facturación correctos, la mención del IVA y nuestra referencia. Pago en 14 días.",
    },
    crumb: "Instrucciones de facturación",
    hero: {
      eyebrow: "Para proveedores",
      title: "Instrucciones de facturación para proveedores",
      intro: "Cómo enviar su factura a hrmforce B.V. para que podamos tramitarla de inmediato y pagarla en un plazo de 14 días.",
    },
    mail: {
      label: "Envíe su factura únicamente por correo electrónico a",
      note: "Las facturas enviadas a direcciones personales o por correo postal no se tramitan automáticamente, lo que puede retrasar el pago.",
      copy: "Copiar",
      copied: "Copiado",
    },
    toc: "En esta página",
    submit: {
      title: "Cómo enviar la factura",
      items: [
        "Una factura por correo electrónico, como archivo PDF adjunto. También aceptamos la factura electrónica en formato UBL (Peppol), si lo desea junto con el PDF.",
        "El PDF contiene texto (no un escaneo ni una foto) y no está protegido con contraseña.",
        "Sin enlaces de descarga, archivos de Word ni facturas en el cuerpo del correo.",
        "Los anexos, como una hoja de horas o una especificación, pueden ir como PDF adicional en el mismo correo.",
        "Envíe cada factura una sola vez. Un recordatorio se envía como correo nuevo con el número de factura original en el asunto.",
      ],
    },
    billing: {
      title: "Datos de facturación",
      head: ["Dato", "En la factura"],
      name: "Nombre",
      address: "Dirección",
      country: "Países Bajos",
      vat: "NIF-IVA",
      coc: "Cámara de Comercio (KvK)",
      email: "Correo de facturación",
    },
    required: {
      title: "Datos obligatorios en su factura",
      items: [
        "El nombre de su empresa, su dirección, su NIF-IVA y su número de registro mercantil.",
        "Un número de factura único y correlativo.",
        "La fecha de la factura y la fecha o el periodo de entrega.",
        "Una descripción clara del servicio o producto suministrado, con la cantidad y el precio unitario.",
        "Nuestra referencia: el número de solicitud, el número de pedido o el nombre del proyecto que le hemos facilitado.",
        "El importe sin IVA, el tipo y la cuota de IVA por tipo, y el importe total, en euros.",
        "Su IBAN y el titular de la cuenta. Para una cuenta fuera de los Países Bajos, también el BIC.",
        "El plazo de pago: 14 días.",
      ],
    },
    vat: {
      title: "IVA",
      head: ["Su empresa está establecida en", "IVA en la factura"],
      rows: [
        ["Países Bajos", "IVA neerlandés (normalmente el 21 por ciento), indicado por separado."],
        ["Otro país de la UE", "Sin IVA, con la mención «Inversión del sujeto pasivo» o «VAT reverse charge» y tanto su NIF-IVA como el nuestro ({btw})."],
        ["Fuera de la UE", "Sin IVA neerlandés. Indique el motivo, por ejemplo «VAT reverse charge, article 44 and 196 VAT Directive»."],
      ],
    },
    payment: {
      title: "Pago",
      items: [
        "Pagamos en un plazo de 14 días desde la recepción de una factura completa y correcta.",
        "Una factura que no cumpla estas instrucciones se le devuelve con el motivo. El plazo de pago empieza de nuevo cuando recibimos la factura corregida.",
        "¿Cambian sus datos bancarios? Comuníquelo por escrito a {finance}. Siempre verificamos un cambio por teléfono antes de aplicarlo.",
      ],
    },
    credit: {
      title: "Facturas rectificativas",
      text: "Envíe las facturas rectificativas a {finance}, con su propio número y una referencia al número de la factura original.",
    },
    questions: {
      title: "Preguntas",
      text: "¿Tiene una pregunta sobre una factura o un pago? Escriba a {finance} o llame al {tel}. Indique siempre su número de factura.",
    },
  },

  ro: {
    meta: {
      title: "Instrucțiuni de facturare pentru furnizori | hrmforce",
      description: "Cum trimiteți o factură către hrmforce B.V.: în format PDF prin e-mail, cu datele de facturare corecte, mențiunea privind TVA și referința noastră. Plata în 14 zile.",
    },
    crumb: "Instrucțiuni de facturare",
    hero: {
      eyebrow: "Pentru furnizori",
      title: "Instrucțiuni de facturare pentru furnizori",
      intro: "Cum trimiteți factura către hrmforce B.V., astfel încât să o putem procesa imediat și să o plătim în termen de 14 zile.",
    },
    mail: {
      label: "Trimiteți factura exclusiv prin e-mail la",
      note: "Facturile trimise la adrese personale sau prin poștă nu sunt procesate automat, ceea ce poate întârzia plata.",
      copy: "Copiază",
      copied: "Copiat",
    },
    toc: "Pe această pagină",
    submit: {
      title: "Cum trimiteți factura",
      items: [
        "O factură per e-mail, ca atașament PDF. Este binevenită și o factură electronică în format UBL (Peppol), eventual împreună cu PDF-ul.",
        "PDF-ul conține text (nu o scanare sau o fotografie) și nu este protejat cu parolă.",
        "Fără linkuri de descărcare, fișiere Word sau facturi în corpul e-mailului.",
        "Documentele justificative, cum ar fi o fișă de pontaj sau o specificație, pot fi adăugate ca PDF separat în același e-mail.",
        "Trimiteți fiecare factură o singură dată. Un memento îl trimiteți într-un e-mail nou, cu numărul facturii inițiale în subiect.",
      ],
    },
    billing: {
      title: "Date de facturare",
      head: ["Element", "Pe factură"],
      name: "Denumire",
      address: "Adresă",
      country: "Țările de Jos",
      vat: "Cod TVA",
      coc: "Camera de Comerț (KvK)",
      email: "E-mail pentru facturi",
    },
    required: {
      title: "Informații obligatorii pe factură",
      items: [
        "Denumirea firmei dumneavoastră, adresa, codul de TVA și numărul de înregistrare.",
        "Un număr de factură unic și consecutiv.",
        "Data facturii și data sau perioada livrării.",
        "O descriere clară a serviciului sau produsului livrat, cu cantitatea și prețul unitar.",
        "Referința noastră: numărul cererii, numărul comenzii sau numele proiectului primit de la noi.",
        "Suma fără TVA, cota de TVA și valoarea TVA pe fiecare cotă, precum și suma totală, în euro.",
        "IBAN-ul dumneavoastră și titularul contului. Pentru un cont din afara Țărilor de Jos, și codul BIC.",
        "Termenul de plată: 14 zile.",
      ],
    },
    vat: {
      title: "TVA",
      head: ["Sediul dumneavoastră este în", "TVA pe factură"],
      rows: [
        ["Țările de Jos", "TVA olandez (de obicei 21 la sută), menționat separat."],
        ["Altă țară din UE", "Fără TVA, cu mențiunea „Taxare inversă” sau „VAT reverse charge” și atât codul dumneavoastră de TVA, cât și al nostru ({btw})."],
        ["În afara UE", "Fără TVA olandez. Menționați motivul, de exemplu „VAT reverse charge, article 44 and 196 VAT Directive”."],
      ],
    },
    payment: {
      title: "Plata",
      items: [
        "Plătim în termen de 14 zile de la primirea unei facturi complete și corecte.",
        "O factură care nu respectă aceste instrucțiuni vă este returnată cu motivul. Termenul de plată reîncepe la primirea facturii corectate.",
        "Vă schimbați datele bancare? Anunțați-ne în scris la {finance}. Verificăm întotdeauna o modificare telefonic înainte de a o aplica.",
      ],
    },
    credit: {
      title: "Facturi de credit",
      text: "Trimiteți facturile de credit la {finance}, cu un număr propriu și o referință la numărul facturii inițiale.",
    },
    questions: {
      title: "Întrebări",
      text: "Aveți o întrebare despre o factură sau o plată? Scrieți la {finance} sau sunați la {tel}. Menționați întotdeauna numărul facturii.",
    },
  },
});
