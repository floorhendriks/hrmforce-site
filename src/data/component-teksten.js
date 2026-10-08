// Teksten die eerder in de componenten zelf stonden.
//
// Een taalblok in een .astro-bestand wordt niet gezien door
// scripts/hsf-translate-content.mjs, dat alleen src/data/*.js afloopt. Daardoor
// bleven menu's, knoppen en losse zinnen in een nieuwe taal Nederlands. Door ze
// hier te zetten lopen ze mee in de vertaalronde en vult vulAan elke taal aan.
//
// De naam begint met de component waar het blok vandaan komt.
import { vulAan } from "./vertaal-inhoud.js";
export const SHOP_DOCS_T = {
  nl: "Documenten bij dit instrument",
  en: "Documents for this instrument",
  de: "Dokumente zu diesem Instrument",
  fr: "Documents relatifs \u00e0 cet instrument",
  es: "Documentos de este instrumento",
  ro: "Documente pentru acest instrument",
};
export const SHOP_REQ_I18N = {
  nl: { title: "Voorbeeldrapport aanvragen", intro: "Vul je gegevens in; we sturen een voorbeeldrapport per e-mail.", name: "Naam", email: "E-mailadres", phone: "Telefoon (optioneel)", submit: "Aanvragen", sending: "Versturen…", thanks: "Bedankt! We sturen het voorbeeldrapport zo snel mogelijk per e-mail." },
  en: { title: "Request a sample report", intro: "Leave your details and we'll email you a sample report.", name: "Name", email: "Email address", phone: "Phone (optional)", submit: "Request", sending: "Sending…", thanks: "Thank you! We'll email the sample report as soon as possible." },
  de: { title: "Musterbericht anfordern", intro: "Hinterlassen Sie Ihre Daten; wir senden Ihnen einen Musterbericht per E-Mail.", name: "Name", email: "E-Mail-Adresse", phone: "Telefon (optional)", submit: "Anfordern", sending: "Senden…", thanks: "Danke! Wir senden den Musterbericht so schnell wie möglich per E-Mail." },
  fr: { title: "Demander un rapport exemple", intro: "Laissez vos coordonnées ; nous vous enverrons un rapport exemple par e-mail.", name: "Nom", email: "Adresse e-mail", phone: "Téléphone (facultatif)", submit: "Demander", sending: "Envoi…", thanks: "Merci ! Nous enverrons le rapport exemple par e-mail dès que possible." },
  es: { title: "Solicitar un informe de ejemplo", intro: "Deja tus datos y te enviaremos un informe de ejemplo por correo.", name: "Nombre", email: "Correo electrónico", phone: "Teléfono (opcional)", submit: "Solicitar", sending: "Enviando…", thanks: "¡Gracias! Enviaremos el informe de ejemplo por correo lo antes posible." },
  ro: { title: "Solicită un raport exemplu", intro: "Lasă-ne datele tale; îți trimitem un raport exemplu pe e-mail.", name: "Nume", email: "Adresă de e-mail", phone: "Telefon (opțional)", submit: "Solicită", sending: "Se trimite…", thanks: "Mulțumim! Îți trimitem raportul exemplu pe e-mail cât mai curând." },
};
export const SHOP_CAND_I18N = {
  nl: { heading: "Kandidaat", name: "Naam kandidaat", email: "E-mail kandidaat", lang: "Taal kandidaat", level: "Niveau", pick: "Kies…", langs: [["nl","Nederlands"],["en","Engels"],["de","Duits"],["fr","Frans"],["es","Spaans"],["ro","Roemeens"]], levels: [["operational","Operational"],["bachelor","Bachelor"],["master","Master"]] },
  en: { heading: "Candidate", name: "Candidate name", email: "Candidate email", lang: "Candidate language", level: "Level", pick: "Choose…", langs: [["nl","Dutch"],["en","English"],["de","German"],["fr","French"],["es","Spanish"],["ro","Romanian"]], levels: [["operational","Operational"],["bachelor","Bachelor"],["master","Master"]] },
  de: { heading: "Kandidat", name: "Name des Kandidaten", email: "E-Mail des Kandidaten", lang: "Sprache", level: "Niveau", pick: "Wählen…", langs: [["nl","Niederländisch"],["en","Englisch"],["de","Deutsch"],["fr","Französisch"],["es","Spanisch"],["ro","Rumänisch"]], levels: [["operational","Operational"],["bachelor","Bachelor"],["master","Master"]] },
  fr: { heading: "Candidat", name: "Nom du candidat", email: "E-mail du candidat", lang: "Langue", level: "Niveau", pick: "Choisir…", langs: [["nl","Néerlandais"],["en","Anglais"],["de","Allemand"],["fr","Français"],["es","Espagnol"],["ro","Roumain"]], levels: [["operational","Opérationnel"],["bachelor","Bachelor"],["master","Master"]] },
  es: { heading: "Candidato", name: "Nombre del candidato", email: "Correo del candidato", lang: "Idioma", level: "Nivel", pick: "Elegir…", langs: [["nl","Neerlandés"],["en","Inglés"],["de","Alemán"],["fr","Francés"],["es","Español"],["ro","Rumano"]], levels: [["operational","Operacional"],["bachelor","Bachelor"],["master","Máster"]] },
  ro: { heading: "Candidat", name: "Numele candidatului", email: "E-mailul candidatului", lang: "Limbă", level: "Nivel", pick: "Alege…", langs: [["nl","Neerlandeză"],["en","Engleză"],["de","Germană"],["fr","Franceză"],["es","Spaniolă"],["ro","Română"]], levels: [["operational","Operațional"],["bachelor","Bachelor"],["master","Master"]] },
};
export const SHOP_CART_I18N = {
  nl: { add: "In winkelmand", added: "Toegevoegd ✓", inCart: "In mand", cartTitle: "Winkelmand", empty: "Je winkelmand is nog leeg.", checkout: "Afrekenen", remove: "Verwijderen", subtotal: "Subtotaal", close: "Sluiten", secure: "Veilig betalen via iDEAL, Bancontact en creditcard", details: "Details bekijken", each: "per stuk", continue: "Verder winkelen" },
  en: { add: "Add to cart", added: "Added ✓", inCart: "In cart", cartTitle: "Cart", empty: "Your cart is empty.", checkout: "Checkout", remove: "Remove", subtotal: "Subtotal", close: "Close", secure: "Secure payment via iDEAL, cards and more", details: "View details", each: "each", continue: "Continue shopping" },
  de: { add: "In den Warenkorb", added: "Hinzugefügt ✓", inCart: "Im Korb", cartTitle: "Warenkorb", empty: "Ihr Warenkorb ist leer.", checkout: "Zur Kasse", remove: "Entfernen", subtotal: "Zwischensumme", close: "Schließen", secure: "Sichere Zahlung per iDEAL, Kreditkarte u. a.", details: "Details ansehen", each: "pro Stück", continue: "Weiter einkaufen" },
  fr: { add: "Ajouter au panier", added: "Ajouté ✓", inCart: "Au panier", cartTitle: "Panier", empty: "Votre panier est vide.", checkout: "Commander", remove: "Retirer", subtotal: "Sous-total", close: "Fermer", secure: "Paiement sécurisé via iDEAL, carte et plus", details: "Voir les détails", each: "l'unité", continue: "Continuer les achats" },
  es: { add: "Añadir al carrito", added: "Añadido ✓", inCart: "En carrito", cartTitle: "Carrito", empty: "Tu carrito está vacío.", checkout: "Pagar", remove: "Eliminar", subtotal: "Subtotal", close: "Cerrar", secure: "Pago seguro con iDEAL, tarjeta y más", details: "Ver detalles", each: "por unidad", continue: "Seguir comprando" },
  ro: { add: "Adaugă în coș", added: "Adăugat ✓", inCart: "În coș", cartTitle: "Coș", empty: "Coșul tău este gol.", checkout: "Finalizează comanda", remove: "Elimină", subtotal: "Subtotal", close: "Închide", secure: "Plată securizată prin iDEAL, card și altele", details: "Vezi detaliile", each: "bucata", continue: "Continuă cumpărăturile" },
};
export const HOME_ITC_ALLE = {
  nl: { title: "Lid van de International Test Commission", body: "hrmforce toetst zijn assessments aan de internationale ITC-richtlijnen voor verantwoord testgebruik. Dat betekent: transparante onderbouwing, eerlijke normgroepen en zorgvuldige rapportage.", cta: "Bekijk onze verantwoording" },
  en: { title: "Member of the International Test Commission", body: "hrmforce holds its assessments to the international ITC guidelines for responsible test use: transparent grounding, fair norm groups and careful reporting.", cta: "See our accountability" },
  de: { title: "Mitglied der International Test Commission", body: "hrmforce prüft seine Assessments an den internationalen ITC-Richtlinien für verantwortungsvollen Testeinsatz: transparente Fundierung, faire Normgruppen und sorgfältige Berichte.", cta: "Unsere Rechenschaft ansehen" },
  fr: { title: "Membre de l'International Test Commission", body: "hrmforce évalue ses tests selon les directives internationales ITC pour un usage responsable : base transparente, groupes de référence équitables et rapports soignés.", cta: "Voir notre transparence" },
  es: { title: "Miembro de la International Test Commission", body: "hrmforce somete sus evaluaciones a las directrices internacionales ITC para un uso responsable de los tests: base transparente, grupos normativos justos e informes cuidadosos.", cta: "Ver nuestra transparencia" },
  ro: { title: "Membru al International Test Commission", body: "hrmforce își evaluează instrumentele conform ghidurilor internaționale ITC pentru utilizarea responsabilă a testelor: fundamentare transparentă, grupuri normative corecte și raportare atentă.", cta: "Vezi transparența noastră" },
};
export const HOME_GOOG_ALLE = {
  nl: { score: "4,9", label: "op Google", sub: "op basis van klantreviews" },
  en: { score: "4.9", label: "on Google", sub: "based on customer reviews" },
  de: { score: "4,9", label: "auf Google", sub: "auf Basis von Kundenbewertungen" },
  fr: { score: "4,9", label: "sur Google", sub: "sur la base d'avis clients" },
  es: { score: "4,9", label: "en Google", sub: "según las reseñas de clientes" },
  ro: { score: "4,9", label: "pe Google", sub: "pe baza recenziilor clienților" },
};
export const HOME_TESTI = {
  nl: { eyebrow: "Wat klanten zeggen", title: "Vertrouwd door HR-teams en adviseurs", items: [
    { q: "De rapporten zijn meteen bruikbaar in ons selectiegesprek, geen vertaalslag meer nodig.", who: "HR-manager", org: "Zorgorganisatie, 300+ medewerkers" },
    { q: "Wetenschappelijk onderbouwd én praktisch. Onze recruiters werken er dagelijks mee.", who: "Recruitmentlead", org: "Technische dienstverlener" },
    { q: "Snel opgezet, meertalig en stabiel. De ondersteuning denkt echt mee.", who: "L&D-adviseur", org: "Financiële sector" } ],
    itc: "hrmforce is lid van de International Test Commission (ITC) en werkt volgens de internationale richtlijnen voor verantwoord testgebruik." },
  en: { eyebrow: "What clients say", title: "Trusted by HR teams and consultants", items: [
    { q: "The reports are usable straight away in our selection interview, no translation needed.", who: "HR manager", org: "Healthcare organisation, 300+ staff" },
    { q: "Scientifically grounded and practical. Our recruiters use it every day.", who: "Recruitment lead", org: "Technical services provider" },
    { q: "Quick to set up, multilingual and reliable. Support really thinks along.", who: "L&D advisor", org: "Financial sector" } ],
    itc: "hrmforce is a member of the International Test Commission (ITC) and works to the international guidelines for responsible test use." },
  de: { eyebrow: "Was Kunden sagen", title: "Vertraut von HR-Teams und Beratern", items: [
    { q: "Die Berichte sind sofort im Auswahlgespräch nutzbar, ohne Übersetzung.", who: "HR-Managerin", org: "Gesundheitsorganisation, 300+ Mitarbeitende" },
    { q: "Wissenschaftlich fundiert und praktisch. Unsere Recruiter arbeiten täglich damit.", who: "Recruiting-Leiter", org: "Technischer Dienstleister" },
    { q: "Schnell eingerichtet, mehrsprachig und zuverlässig. Der Support denkt wirklich mit.", who: "L&D-Beraterin", org: "Finanzsektor" } ],
    itc: "hrmforce ist Mitglied der International Test Commission (ITC) und arbeitet nach den internationalen Richtlinien für verantwortungsvollen Testeinsatz." },
  fr: { eyebrow: "Ce que disent nos clients", title: "La confiance des équipes RH et consultants", items: [
    { q: "Les rapports sont directement exploitables lors de l'entretien, sans traduction.", who: "Responsable RH", org: "Organisation de santé, 300+ salariés" },
    { q: "Scientifique et pratique. Nos recruteurs l'utilisent chaque jour.", who: "Responsable recrutement", org: "Prestataire technique" },
    { q: "Mise en place rapide, multilingue et fiable. Le support est à l'écoute.", who: "Conseillère L&D", org: "Secteur financier" } ],
    itc: "hrmforce est membre de l'International Test Commission (ITC) et applique les directives internationales pour un usage responsable des tests." },
  es: { eyebrow: "Lo que dicen los clientes", title: "La confianza de equipos de RR. HH. y consultores", items: [
    { q: "Los informes se usan de inmediato en la entrevista, sin traducción.", who: "Responsable de RR. HH.", org: "Organización sanitaria, 300+ empleados" },
    { q: "Con base científica y práctica. Nuestros reclutadores lo usan a diario.", who: "Responsable de selección", org: "Proveedor técnico" },
    { q: "Rápido de configurar, multilingüe y fiable. El soporte se implica de verdad.", who: "Asesora de L&D", org: "Sector financiero" } ],
    itc: "hrmforce es miembro de la International Test Commission (ITC) y trabaja según las directrices internacionales para un uso responsable de los tests." },
  ro: { eyebrow: "Ce spun clienții", title: "De încredere pentru echipe HR și consultanți", items: [
    { q: "Rapoartele sunt utilizabile imediat în interviu, fără traducere.", who: "Manager HR", org: "Organizație medicală, 300+ angajați" },
    { q: "Fundamentat științific și practic. Recrutorii noștri îl folosesc zilnic.", who: "Lead recrutare", org: "Furnizor de servicii tehnice" },
    { q: "Rapid de configurat, multilingv și fiabil. Suportul chiar te ajută.", who: "Consultant L&D", org: "Sector financiar" } ],
    itc: "hrmforce este membru al International Test Commission (ITC) și lucrează conform ghidurilor internaționale pentru utilizarea responsabilă a testelor." },
};
export const HOME_MATCH_ALLE = {
  nl:{ eyebrow:"Onze matchingsformule", title:"Match kandidaten op basis van je eigen topperformers", lead:"Bouw een ideaalprofiel op basis van je huidige topperformers. hrmforce vergelijkt kandidaten objectief met dat profiel en geeft een heldere match-score, zodat je selecteert op wat echt voorspelt.", b:["Ideaalprofiel uit je eigen succesvolle medewerkers","Objectieve match-score per kandidaat","Onderbouwd met wetenschappelijk gevalideerde tests"], cta:"Bekijk matchprofielen", meet:"Plan een gratis kennismaking" },
  en:{ eyebrow:"Objective matching", title:"Match against a success profile built from your own top performers", lead:"Build a success profile based on the people who already excel. hrmforce compares candidates objectively against that profile and gives a clear match score, so you select on what truly predicts performance.", b:["Success profile from your own high performers","Objective match score per candidate","Backed by scientifically validated tests"], cta:"View match profiles", meet:"Book a free intro call" },
  de:{ eyebrow:"Objektives Matching", title:"Abgleich mit einem Erfolgsprofil aus Ihren eigenen Top-Performern", lead:"Erstellen Sie ein Erfolgsprofil auf Basis der Menschen, die bereits herausragen. hrmforce vergleicht Kandidaten objektiv mit diesem Profil und liefert einen klaren Match-Score, damit Sie nach dem auswählen, was Leistung wirklich vorhersagt.", b:["Erfolgsprofil aus Ihren eigenen Leistungsträgern","Objektiver Match-Score je Kandidat","Fundiert mit wissenschaftlich validierten Tests"], cta:"Match-Profile ansehen", meet:"Kostenloses Kennenlerngespräch" },
  fr:{ eyebrow:"Matching objectif", title:"Comparez à un profil de réussite bâti sur vos propres meilleurs éléments", lead:"Construisez un profil de réussite à partir des personnes qui excellent déjà. hrmforce compare objectivement les candidats à ce profil et fournit un score de correspondance clair, pour sélectionner sur ce qui prédit vraiment la performance.", b:["Profil de réussite issu de vos meilleurs collaborateurs","Score de correspondance objectif par candidat","Appuyé par des tests validés scientifiquement"], cta:"Voir les profils de correspondance", meet:"Planifier un échange gratuit" },
  es:{ eyebrow:"Matching objetivo", title:"Compara con un perfil de éxito creado a partir de tus propios top performers", lead:"Crea un perfil de éxito basado en las personas que ya destacan. hrmforce compara a los candidatos de forma objetiva con ese perfil y ofrece una puntuación de coincidencia clara, para seleccionar por lo que de verdad predice el rendimiento.", b:["Perfil de éxito a partir de tus mejores empleados","Puntuación de coincidencia objetiva por candidato","Respaldado por tests validados científicamente"], cta:"Ver perfiles de coincidencia", meet:"Reserva una toma de contacto gratuita" },
  ro:{ eyebrow:"Potrivire obiectivă", title:"Compară cu un profil de succes construit din propriii tăi top performeri", lead:"Construiește un profil de succes pe baza oamenilor care deja excelează. hrmforce compară candidații obiectiv cu acel profil și oferă un scor de potrivire clar, ca să selectezi după ceea ce prezice cu adevărat performanța.", b:["Profil de succes din proprii angajați performanți","Scor de potrivire obiectiv per candidat","Susținut de teste validate științific"], cta:"Vezi profilurile de potrivire", meet:"Programează o discuție gratuită" },
};
export const VOORB_CT_UI = {
  nl: { eyebrow: "Camera en geluid", title: "Test je camera en geluid vooraf", text: "Heb je een gesprek via Google Meet of Microsoft Teams? Test dan vooraf in je eigen browser of je camera, microfoon en speakers werken. Dat scheelt gedoe op het moment zelf.", cta: "Doe de test" },
  en: { eyebrow: "Camera and sound", title: "Test your camera and sound beforehand", text: "Do you have a meeting in Google Meet or Microsoft Teams? Check in your own browser whether your camera, microphone and speakers work. That saves trouble at the start.", cta: "Take the test" },
  de: { eyebrow: "Kamera und Ton", title: "Testen Sie Kamera und Ton vorab", text: "Haben Sie ein Gespräch über Google Meet oder Microsoft Teams? Prüfen Sie vorab im eigenen Browser, ob Kamera, Mikrofon und Lautsprecher funktionieren. Das erspart Ärger zu Beginn.", cta: "Zum Test" },
  fr: { eyebrow: "Caméra et son", title: "Testez votre caméra et votre son à l'avance", text: "Vous avez un entretien sur Google Meet ou Microsoft Teams ? Vérifiez à l'avance dans votre navigateur si votre caméra, votre micro et vos haut-parleurs fonctionnent. Cela évite les soucis au démarrage.", cta: "Faire le test" },
  es: { eyebrow: "Cámara y sonido", title: "Prueba tu cámara y tu sonido antes", text: "¿Tienes una entrevista por Google Meet o Microsoft Teams? Comprueba antes en tu navegador si tu cámara, tu micrófono y tus altavoces funcionan. Así evitas problemas al empezar.", cta: "Hacer la prueba" },
  ro: { eyebrow: "Cameră și sunet", title: "Testează camera și sunetul din timp", text: "Ai o discuție pe Google Meet sau Microsoft Teams? Verifică din timp, în propriul browser, dacă funcționează camera, microfonul și boxele. Așa eviți bătăile de cap la început.", cta: "Fă testul" },
};
export const VOORB_OT_BLOK = {
  nl: { eyebrow:"Oefentest", title:"Doe de oefentest", intro:"Wil je een hele ronde achter elkaar maken? In de oefentest krijg je 25 willekeurige vragen, met daarna per vraag het juiste antwoord en de toelichting. Elke ronde is een nieuwe set.", cta:"Start de oefentest", alles:"Naar alle oefentesten en vragenlijsten" },
  en: { eyebrow:"Practice test", title:"Take the practice test", intro:"Want to do a full round in one go? The practice test gives you 25 random questions, with the correct answer and an explanation per question afterwards. Every round is a new set.", cta:"Start the practice test", alles:"To all practice tests and questionnaires" },
  de: { eyebrow:"Übungstest", title:"Machen Sie den Übungstest", intro:"Möchten Sie eine ganze Runde am Stück machen? Der Übungstest stellt 25 zufällige Fragen, danach sehen Sie je Frage die richtige Antwort und die Erläuterung. Jede Runde ist ein neuer Satz.", cta:"Übungstest starten", alles:"Zu allen Übungstests und Fragebögen" },
  fr: { eyebrow:"Test d'entraînement", title:"Faites le test d'entraînement", intro:"Envie de faire une série complète d'affilée ? Le test propose 25 questions au hasard, puis la bonne réponse et l'explication pour chacune. Chaque série est différente.", cta:"Démarrer le test", alles:"Vers tous les tests et questionnaires" },
  es: { eyebrow:"Test de práctica", title:"Haz el test de práctica", intro:"¿Quieres hacer una ronda completa de una vez? El test te da 25 preguntas al azar y después, por pregunta, la respuesta correcta y la explicación. Cada ronda es un conjunto nuevo.", cta:"Empezar el test", alles:"A todos los tests y cuestionarios" },
  ro: { eyebrow:"Test de exersare", title:"Fă testul de exersare", intro:"Vrei o rundă completă dintr-o dată? Testul îți dă 25 de întrebări alese aleatoriu, iar la final vezi pentru fiecare răspunsul corect și explicația. Fiecare rundă este un set nou.", cta:"Începe testul", alles:"Spre toate testele și chestionarele" },
};
export const VOORB_BOOK_UI = {
  nl: { eyebrow: "Boeken", title: "Boeken ter voorbereiding", intro: "Wil je je nog grondiger voorbereiden? Deze boeken helpen je vertrouwd raken met assessments, capaciteitentests en persoonlijkheidsvragenlijsten.", nlLabel: "Nederlandstalig", enLabel: "Engelstalig" },
  en: { eyebrow: "Books", title: "Books to prepare", intro: "Want to prepare even more thoroughly? These books help you get familiar with assessments, aptitude tests and personality questionnaires.", nlLabel: "In Dutch", enLabel: "In English" },
  de: { eyebrow: "Bücher", title: "Bücher zur Vorbereitung", intro: "Möchten Sie sich noch gründlicher vorbereiten? Diese Bücher helfen Ihnen, sich mit Assessments, Fähigkeitstests und Persönlichkeitsfragebögen vertraut zu machen.", nlLabel: "Niederländisch", enLabel: "Englisch" },
  fr: { eyebrow: "Livres", title: "Livres pour se préparer", intro: "Vous souhaitez vous préparer encore plus en profondeur ? Ces livres vous aident à vous familiariser avec les assessments, les tests d'aptitude et les questionnaires de personnalité.", nlLabel: "En néerlandais", enLabel: "En anglais" },
  es: { eyebrow: "Libros", title: "Libros para prepararte", intro: "¿Quieres prepararte aún más a fondo? Estos libros te ayudan a familiarizarte con los assessments, los tests de capacidad y los cuestionarios de personalidad.", nlLabel: "En neerlandés", enLabel: "En inglés" },
  ro: { eyebrow: "Cărți", title: "Cărți pentru pregătire", intro: "Vrei să te pregătești și mai temeinic? Aceste cărți te ajută să te familiarizezi cu assessment-urile, testele de aptitudini și chestionarele de personalitate.", nlLabel: "În neerlandeză", enLabel: "În engleză" },
};
export const VOORB_PREP_UI = {
  nl: { title: "Bereid je voor per test", intro: "Zoek je test en oefen met echte voorbeeldvragen. Zo weet je precies wat je kunt verwachten.", search: "Zoek je test...", none: "Geen test gevonden.", practice: "Oefen deze test" },
  en: { title: "Prepare per test", intro: "Find your test and practise with real example questions, so you know exactly what to expect.", search: "Search your test...", none: "No test found.", practice: "Practise this test" },
  de: { title: "Vorbereitung je Test", intro: "Finden Sie Ihren Test und üben Sie mit echten Beispielfragen, damit Sie genau wissen, was Sie erwartet.", search: "Test suchen...", none: "Kein Test gefunden.", practice: "Diesen Test üben" },
  fr: { title: "Préparez-vous par test", intro: "Trouvez votre test et entraînez-vous avec de vrais exemples de questions, pour savoir exactement à quoi vous attendre.", search: "Recherchez votre test...", none: "Aucun test trouvé.", practice: "S'entraîner à ce test" },
  es: { title: "Prepárate por test", intro: "Encuentra tu test y practica con preguntas de ejemplo reales, para saber exactamente qué esperar.", search: "Busca tu test...", none: "No se encontró el test.", practice: "Practica este test" },
  ro: { title: "Pregătește-te pe test", intro: "Găsește-ți testul și exersează cu întrebări exemplu reale, ca să știi exact la ce să te aștepți.", search: "Caută-ți testul...", none: "Niciun test găsit.", practice: "Exersează acest test" },
};
export const OTOVER_MEER = {
  nl: { kop: "Meer voorbereiding", link: "Naar de voorbereidingspagina" },
  en: { kop: "More preparation", link: "To the preparation page" },
  de: { kop: "Mehr Vorbereitung", link: "Zur Vorbereitungsseite" },
  fr: { kop: "Plus de préparation", link: "Vers la page de préparation" },
  es: { kop: "Más preparación", link: "Ir a la página de preparación" },
  ro: { kop: "Mai multă pregătire", link: "Spre pagina de pregătire" },
};
export const OTOVER_KLEUREN = {
  nl: { kop: "Gratis kleurentest", lead: "Vier kleuren, een eerste beeld van je persoonlijkheid in een paar minuten. Je krijgt de uitslag direct te zien.", cta: "Doe de kleurentest" },
  en: { kop: "Free colour test", lead: "Four colours, a first picture of your personality in a few minutes. You see the result straight away.", cta: "Take the colour test" },
  de: { kop: "Kostenloser Farbtest", lead: "Vier Farben, ein erstes Bild Ihrer Persönlichkeit in wenigen Minuten. Das Ergebnis sehen Sie sofort.", cta: "Farbtest machen" },
  fr: { kop: "Test des couleurs gratuit", lead: "Quatre couleurs, un premier aperçu de votre personnalité en quelques minutes. Le résultat s'affiche aussitôt.", cta: "Faire le test des couleurs" },
  es: { kop: "Test de colores gratuito", lead: "Cuatro colores, una primera imagen de tu personalidad en pocos minutos. Ves el resultado al momento.", cta: "Hacer el test de colores" },
  ro: { kop: "Test de culori gratuit", lead: "Patru culori, o primă imagine a personalității tale în câteva minute. Vezi rezultatul pe loc.", cta: "Fă testul de culori" },
};
export const OTOVER_KOPPEN = {
  nl: { test: "Capaciteiten", testLead: "Vijf onderdelen met goede en foute antwoorden. Je krijgt per ronde 25 willekeurige vragen en daarna per vraag de toelichting.", lijst: "Vragenlijsten", lijstLead: "Zes zelfrapportagelijsten. Hier zijn geen goede of foute antwoorden; je krijgt een profielschets in plaats van een score." },
  en: { test: "Aptitude", testLead: "Five components with right and wrong answers. You get 25 random questions per round and an explanation per question afterwards.", lijst: "Questionnaires", lijstLead: "Six self-report questionnaires. There are no right or wrong answers here; you get a profile sketch instead of a score." },
  de: { test: "Fähigkeiten", testLead: "Fünf Teile mit richtigen und falschen Antworten. Pro Runde 25 zufällige Fragen, danach je Frage die Erläuterung.", lijst: "Fragebögen", lijstLead: "Sechs Selbsteinschätzungen. Hier gibt es keine richtigen oder falschen Antworten; statt einer Punktzahl erhalten Sie eine Profilskizze." },
  fr: { test: "Aptitudes", testLead: "Cinq parties avec de bonnes et de mauvaises réponses. 25 questions au hasard par série, puis l'explication de chacune.", lijst: "Questionnaires", lijstLead: "Six questionnaires d'auto-évaluation. Ici il n'y a ni bonne ni mauvaise réponse ; vous obtenez une esquisse de profil plutôt qu'un score." },
  es: { test: "Capacidades", testLead: "Cinco partes con respuestas correctas e incorrectas. 25 preguntas al azar por ronda y después la explicación de cada una.", lijst: "Cuestionarios", lijstLead: "Seis cuestionarios de autoinforme. Aquí no hay respuestas correctas ni incorrectas; recibes un esbozo de perfil en vez de una puntuación." },
  ro: { test: "Aptitudini", testLead: "Cinci părți cu răspunsuri corecte și greșite. 25 de întrebări alese aleatoriu pe rundă, apoi explicația fiecăreia.", lijst: "Chestionare", lijstLead: "Șase chestionare de autoevaluare. Aici nu există răspunsuri corecte sau greșite; primești o schiță de profil în loc de un scor." },
};
export const OEFAANVR_BEVESTIGING = {
  nl: { ok: "Gelukt. Je oefenvragen zijn onderweg naar je mailbox.", fout: "Er ging iets mis bij het versturen. Probeer het nog eens of mail naar oefenen@hrmforce.com.", bezig: "Bezig…" },
  en: { ok: "Done. Your practice questions are on their way to your inbox.", fout: "Something went wrong while sending. Please try again or email oefenen@hrmforce.com.", bezig: "Working…" },
  de: { ok: "Geschafft. Ihre Übungsfragen sind auf dem Weg in Ihr Postfach.", fout: "Beim Senden ist etwas schiefgelaufen. Bitte erneut versuchen oder an oefenen@hrmforce.com mailen.", bezig: "Läuft…" },
  fr: { ok: "C'est fait. Vos questions d'entraînement arrivent dans votre boîte mail.", fout: "Une erreur est survenue lors de l'envoi. Réessayez ou écrivez à oefenen@hrmforce.com.", bezig: "En cours…" },
  es: { ok: "Listo. Tus preguntas de práctica van camino a tu correo.", fout: "Algo salió mal al enviar. Inténtalo de nuevo o escribe a oefenen@hrmforce.com.", bezig: "Enviando…" },
  ro: { ok: "Gata. Întrebările tale de exersare sunt pe drum spre inbox.", fout: "A apărut o eroare la trimitere. Încearcă din nou sau scrie la oefenen@hrmforce.com.", bezig: "Se trimite…" },
};
export const OEFAANVR_MENSFOUT = {
  nl: "We konden niet vaststellen dat je een mens bent. Vink het vakje aan en probeer het opnieuw.",
  en: "We could not confirm that you are human. Tick the box and try again.",
  de: "Wir konnten nicht feststellen, dass Sie ein Mensch sind. Bitte das Kästchen anklicken und erneut versuchen.",
  fr: "Nous n'avons pas pu confirmer que vous êtes humain. Cochez la case et réessayez.",
  es: "No hemos podido confirmar que eres una persona. Marca la casilla e inténtalo de nuevo.",
  ro: "Nu am putut confirma că ești o persoană. Bifează căsuța și încearcă din nou.",
};
export const QMOCK_L_ALLE = {
  nl: { qn:"VRAGENLIJST", welcome:"Welkom bij", intro:"Je krijgt een reeks vragen. Geef per vraag aan wat het best bij je past.", b1:"Duurt enkele minuten", b2:"Er zijn geen goede of foute antwoorden", b3:"Antwoord spontaan, dat geeft het beste beeld", start:"Start de vragenlijst", own:"In je eigen taal en tempo", right:"Vragenlijst", sample:"VOORBEELDVRAAG", note:"Kies wat het best bij je past.", prev:"Vorige", next:"Volgende", chip:"Voorbeeld" },
  en: { qn:"QUESTIONNAIRE", welcome:"Welcome to", intro:"You'll get a series of questions. For each, indicate what fits you best.", b1:"Takes a few minutes", b2:"There are no right or wrong answers", b3:"Answer spontaneously, that gives the best picture", start:"Start the questionnaire", own:"In your own language and pace", right:"Questionnaire", sample:"SAMPLE QUESTION", note:"Choose what fits you best.", prev:"Previous", next:"Next", chip:"Example" },
  de: { qn:"FRAGEBOGEN", welcome:"Willkommen beim", intro:"Sie erhalten eine Reihe von Fragen. Geben Sie jeweils an, was am besten zu Ihnen passt.", b1:"Dauert einige Minuten", b2:"Es gibt keine richtigen oder falschen Antworten", b3:"Antworten Sie spontan, das ergibt das beste Bild", start:"Fragebogen starten", own:"In Ihrer Sprache und Ihrem Tempo", right:"Fragebogen", sample:"BEISPIELFRAGE", note:"Wählen Sie, was am besten zu Ihnen passt.", prev:"Zurück", next:"Weiter", chip:"Beispiel" },
  fr: { qn:"QUESTIONNAIRE", welcome:"Bienvenue au", intro:"Vous recevrez une série de questions. Pour chacune, indiquez ce qui vous correspond le mieux.", b1:"Dure quelques minutes", b2:"Il n'y a pas de bonnes ou mauvaises réponses", b3:"Répondez spontanément, cela donne le meilleur aperçu", start:"Démarrer le questionnaire", own:"Dans votre langue et à votre rythme", right:"Questionnaire", sample:"EXEMPLE DE QUESTION", note:"Choisissez ce qui vous correspond le mieux.", prev:"Précédent", next:"Suivant", chip:"Exemple" },
  es: { qn:"CUESTIONARIO", welcome:"Bienvenido a", intro:"Recibirás una serie de preguntas. En cada una, indica lo que mejor encaja contigo.", b1:"Dura unos minutos", b2:"No hay respuestas correctas o incorrectas", b3:"Responde de forma espontánea, así se obtiene la mejor imagen", start:"Iniciar el cuestionario", own:"En tu idioma y a tu ritmo", right:"Cuestionario", sample:"PREGUNTA DE EJEMPLO", note:"Elige lo que mejor encaja contigo.", prev:"Anterior", next:"Siguiente", chip:"Ejemplo" },
  ro: { qn:"CHESTIONAR", welcome:"Bine ai venit la", intro:"Primești o serie de întrebări. La fiecare, indică ce ți se potrivește cel mai bine.", b1:"Durează câteva minute", b2:"Nu există răspunsuri corecte sau greșite", b3:"Răspunde spontan, așa obții cea mai bună imagine", start:"Începe chestionarul", own:"În limba și ritmul tău", right:"Chestionar", sample:"ÎNTREBARE EXEMPLU", note:"Alege ce ți se potrivește cel mai bine.", prev:"Înapoi", next:"Înainte", chip:"Exemplu" },
};
export const HULPM_T_ALLE = {
  nl: { lbl1: "Testkiezer", k1: "Welke test past bij jouw vraag?", t1: "Beantwoord vier vragen en je krijgt een onderbouwd voorstel.", c1: "Open de testkiezer",
        lbl2: "Rekentool", k2: "Wat levert objectief selecteren op?", t2: "Reken je besparing door met je eigen aantallen en verloopcijfers.", c2: "Open de ROI-rekentool" },
  en: { lbl1: "Test selector", k1: "Which assessment fits your question?", t1: "Answer four questions and get a grounded suggestion.", c1: "Open the test selector",
        lbl2: "Calculator", k2: "What does objective selection deliver?", t2: "Work out your saving with your own headcount and turnover figures.", c2: "Open the ROI calculator" },
  de: { lbl1: "Testauswahl", k1: "Welcher Test passt zu Ihrer Frage?", t1: "Vier Fragen beantworten und Sie erhalten einen fundierten Vorschlag.", c1: "Zur Testauswahl",
        lbl2: "Rechner", k2: "Was bringt objektive Auswahl?", t2: "Rechnen Sie Ihre Ersparnis mit eigenen Zahlen durch.", c2: "Zum ROI-Rechner" },
  fr: { lbl1: "Sélecteur", k1: "Quel test correspond à votre question ?", t1: "Répondez à quatre questions et recevez une proposition argumentée.", c1: "Ouvrir le sélecteur",
        lbl2: "Calculateur", k2: "Que rapporte une sélection objective ?", t2: "Calculez votre gain avec vos propres effectifs et taux de rotation.", c2: "Ouvrir le calculateur ROI" },
  es: { lbl1: "Selector", k1: "¿Qué test encaja con tu pregunta?", t1: "Responde cuatro preguntas y recibe una propuesta fundamentada.", c1: "Abrir el selector de tests",
        lbl2: "Calculadora", k2: "¿Qué aporta una selección objetiva?", t2: "Calcula tu ahorro con tus propias cifras de plantilla y rotación.", c2: "Abrir la calculadora ROI" },
  ro: { lbl1: "Selector", k1: "Ce test se potrivește întrebării tale?", t1: "Răspunde la patru întrebări și primești o propunere argumentată.", c1: "Deschide selectorul de teste",
        lbl2: "Calculator", k2: "Ce aduce o selecție obiectivă?", t2: "Calculează economia cu propriile cifre de personal și fluctuație.", c2: "Deschide calculatorul ROI" },
};
export const FAQC_UI = {
  nl: { search: "Zoek een vraag...", all: "Alle", count: "vragen", none: "Geen vragen gevonden. Probeer een andere zoekterm of tag.", themes: "Thema's" },
  en: { search: "Search a question...", all: "All", count: "questions", none: "No questions found. Try another term or tag.", themes: "Themes" },
  de: { search: "Frage suchen...", all: "Alle", count: "Fragen", none: "Keine Fragen gefunden. Versuchen Sie einen anderen Begriff oder Tag.", themes: "Themen" },
  fr: { search: "Rechercher une question...", all: "Toutes", count: "questions", none: "Aucune question trouvée. Essayez un autre terme ou tag.", themes: "Thèmes" },
  es: { search: "Busca una pregunta...", all: "Todas", count: "preguntas", none: "No se encontraron preguntas. Prueba otro término o etiqueta.", themes: "Temas" },
  ro: { search: "Caută o întrebare...", all: "Toate", count: "întrebări", none: "Nicio întrebare găsită. Încearcă alt termen sau etichetă.", themes: "Teme" },
};
export const SUBPAG_CTA = {
  nl: { title: "Ontdek welke aanpak past bij jouw HR-vraagstuk", text: "Bespreek je situatie met een hrmforce-specialist. In 30 minuten krijg je concreet advies.", primary: "Plan een demo", secondary: "Bekijk de assessments" },
  en: { title: "Discover the approach that fits your HR challenge", text: "Discuss your situation with an hrmforce specialist. In 30 minutes you get concrete advice.", primary: "Book a demo", secondary: "View the assessments" },
  de: { title: "Entdecken Sie den passenden Ansatz für Ihre HR-Frage", text: "Besprechen Sie Ihre Situation mit einem hrmforce-Spezialisten. In 30 Minuten erhalten Sie konkrete Beratung.", primary: "Demo planen", secondary: "Assessments ansehen" },
  fr: { title: "Découvrez l'approche adaptée à votre enjeu RH", text: "Discutez de votre situation avec un spécialiste hrmforce. En 30 minutes, vous obtenez des conseils concrets.", primary: "Planifier une démo", secondary: "Voir les évaluations" },
  es: { title: "Descubra el enfoque que se ajusta a su reto de RR. HH.", text: "Comente su situación con un especialista de hrmforce. En 30 minutos obtiene asesoramiento concreto.", primary: "Reservar una demo", secondary: "Ver las evaluaciones" },
  ro: { title: "Descoperiți abordarea potrivită pentru provocarea dvs. HR", text: "Discutați situația cu un specialist hrmforce. În 30 de minute primiți sfaturi concrete.", primary: "Programați o demonstrație", secondary: "Vedeți evaluările" },
};
export const DOCUM_L = {
  nl: { titel: "Documenten en voorbeeldrapporten", intro: "Direct te openen, zonder formulier. De uitgever van het instrument staat erbij.", open: "Openen", alle: "Alle documenten van de uitgevers" },
  en: { titel: "Documents and sample reports", intro: "Open directly, no form required. The publisher of the instrument is listed with each file.", open: "Open", alle: "All documents from the publishers" },
  de: { titel: "Dokumente und Musterberichte", intro: "Direkt zu öffnen, ohne Formular. Der Herausgeber des Instruments ist jeweils angegeben.", open: "Öffnen", alle: "Alle Dokumente der Herausgeber" },
  fr: { titel: "Documents et rapports types", intro: "À ouvrir directement, sans formulaire. L'éditeur de l'instrument est indiqué.", open: "Ouvrir", alle: "Tous les documents des éditeurs" },
  es: { titel: "Documentos e informes de ejemplo", intro: "Se abren directamente, sin formulario. Se indica el editor del instrumento.", open: "Abrir", alle: "Todos los documentos de las editoriales" },
  ro: { titel: "Documente și rapoarte model", intro: "Se deschid direct, fără formular. Editorul instrumentului este menționat.", open: "Deschide", alle: "Toate documentele de la editori" },
};
export const GRATIS_TEKST = {
  nl: {
    kop: "Meer gratis tests",
    lead: "Elke test hieronder is gratis en geeft je direct na afloop een uitslag op je scherm.",
    kleurNaam: "Gratis kleurentest",
    kleurLead: "Vier kleuren, een eerste beeld van je persoonlijkheid in een paar minuten.",
    start: "Start de test",
  },
  en: {
    kop: "More free tests",
    lead: "Every test below is free and shows you a result on screen as soon as you finish.",
    kleurNaam: "Free colour test",
    kleurLead: "Four colours, a first picture of your personality in a few minutes.",
    start: "Start the test",
  },
  de: {
    kop: "Weitere kostenlose Tests",
    lead: "Jeder Test unten ist kostenlos und zeigt Ihnen direkt nach Abschluss ein Ergebnis am Bildschirm.",
    kleurNaam: "Kostenloser Farbtest",
    kleurLead: "Vier Farben, ein erstes Bild Ihrer Persönlichkeit in wenigen Minuten.",
    start: "Test starten",
  },
  fr: {
    kop: "Plus de tests gratuits",
    lead: "Chaque test ci-dessous est gratuit et affiche un résultat à l'écran dès que vous avez terminé.",
    kleurNaam: "Test des couleurs gratuit",
    kleurLead: "Quatre couleurs, un premier aperçu de votre personnalité en quelques minutes.",
    start: "Commencer le test",
  },
  es: {
    kop: "Más tests gratuitos",
    lead: "Cada test de abajo es gratuito y te muestra un resultado en pantalla nada más terminar.",
    kleurNaam: "Test de colores gratuito",
    kleurLead: "Cuatro colores, una primera imagen de tu personalidad en pocos minutos.",
    start: "Empezar el test",
  },
  ro: {
    kop: "Mai multe teste gratuite",
    lead: "Fiecare test de mai jos este gratuit și îți arată un rezultat pe ecran imediat ce termini.",
    kleurNaam: "Test de culori gratuit",
    kleurLead: "Patru culori, o primă imagine a personalității tale în câteva minute.",
    start: "Începe testul",
  },
};
export const HEADER_SEARCH_I18N = {
  nl: { ph: "Zoek op de hele site\u2026", none: "Geen resultaten gevonden", label: "Zoeken" },
  en: { ph: "Search the entire site\u2026", none: "No results found", label: "Search" },
  de: { ph: "Ganze Website durchsuchen\u2026", none: "Keine Ergebnisse gefunden", label: "Suche" },
  fr: { ph: "Rechercher sur tout le site\u2026", none: "Aucun r\u00e9sultat", label: "Recherche" },
  es: { ph: "Buscar en todo el sitio\u2026", none: "Sin resultados", label: "Buscar" },
  ro: { ph: "C\u0103uta\u021bi pe tot site-ul\u2026", none: "Niciun rezultat", label: "C\u0103utare" },
};
export const SOCIAL_T_ALLE = {
  nl: { score: "4,9", google: "op Google", googleSub: "klantbeoordelingen", itc: "Lid International Test Commission", itcSub: "internationale richtlijnen voor testgebruik", react: "Binnen 24 uur reactie", reactSub: "werkdagen, van een specialist" },
  en: { score: "4.9", google: "on Google", googleSub: "customer reviews", itc: "Member International Test Commission", itcSub: "international guidelines for test use", react: "Reply within 24 hours", reactSub: "working days, from a specialist" },
  de: { score: "4,9", google: "auf Google", googleSub: "Kundenbewertungen", itc: "Mitglied International Test Commission", itcSub: "internationale Richtlinien für Testeinsatz", react: "Antwort innerhalb von 24 Stunden", reactSub: "werktags, von einem Spezialisten" },
  fr: { score: "4,9", google: "sur Google", googleSub: "avis clients", itc: "Membre International Test Commission", itcSub: "directives internationales sur les tests", react: "Réponse sous 24 heures", reactSub: "jours ouvrés, par un spécialiste" },
  es: { score: "4,9", google: "en Google", googleSub: "reseñas de clientes", itc: "Miembro International Test Commission", itcSub: "directrices internacionales sobre tests", react: "Respuesta en 24 horas", reactSub: "días laborables, de un especialista" },
  ro: { score: "4,9", google: "pe Google", googleSub: "recenzii ale clienților", itc: "Membru International Test Commission", itcSub: "ghiduri internaționale pentru teste", react: "Răspuns în 24 de ore", reactSub: "zile lucrătoare, de la un specialist" },
};
export const QPREV_T_ALLE = {
  nl: { chip: "Vragenlijst", welcome: "Welkom bij", intro: "Je krijgt een reeks vragen. Geef per vraag aan wat het best bij je past.",
        b1: "Duurt enkele minuten", b2: "Er zijn geen goede of foute antwoorden", b3: "Antwoord spontaan, dat geeft het beste beeld",
        start: "Start de vragenlijst", own: "In je eigen taal en tempo", sample: "Voorbeeldvragen", of: "van", vraag: "Vraag",
        note: "Kies wat het best bij je past.", prev: "Vorige", next: "Volgende", demo: "Voorbeeldweergave, vragen zijn niet aanklikbaar", mark: "VOORBEELD" },
  en: { chip: "Questionnaire", welcome: "Welcome to", intro: "You will get a series of questions. For each one, indicate what fits you best.",
        b1: "Takes a few minutes", b2: "There are no right or wrong answers", b3: "Answer spontaneously, that gives the best picture",
        start: "Start the questionnaire", own: "In your own language and pace", sample: "Example questions", of: "of", vraag: "Question",
        note: "Choose what fits you best.", prev: "Previous", next: "Next", demo: "Preview only, the questions are not clickable", mark: "PREVIEW" },
  de: { chip: "Fragebogen", welcome: "Willkommen bei", intro: "Sie erhalten eine Reihe von Fragen. Geben Sie je Frage an, was am besten passt.",
        b1: "Dauert einige Minuten", b2: "Es gibt keine richtigen oder falschen Antworten", b3: "Antworten Sie spontan, das ergibt das beste Bild",
        start: "Fragebogen starten", own: "In Ihrer Sprache und Ihrem Tempo", sample: "Beispielfragen", of: "von", vraag: "Frage",
        note: "Wählen Sie, was am besten passt.", prev: "Zurück", next: "Weiter", demo: "Vorschau, die Fragen sind nicht anklickbar", mark: "VORSCHAU" },
  fr: { chip: "Questionnaire", welcome: "Bienvenue dans", intro: "Vous recevrez une série de questions. Indiquez pour chacune ce qui vous correspond le mieux.",
        b1: "Dure quelques minutes", b2: "Il n'y a pas de bonnes ou mauvaises réponses", b3: "Répondez spontanément, cela donne le meilleur aperçu",
        start: "Démarrer le questionnaire", own: "Dans votre langue et à votre rythme", sample: "Exemples de questions", of: "sur", vraag: "Question",
        note: "Choisissez ce qui vous correspond le mieux.", prev: "Précédent", next: "Suivant", demo: "Aperçu, les questions ne sont pas cliquables", mark: "APERÇU" },
  es: { chip: "Cuestionario", welcome: "Bienvenido a", intro: "Recibirás una serie de preguntas. Indica en cada una lo que mejor encaja contigo.",
        b1: "Dura unos minutos", b2: "No hay respuestas correctas o incorrectas", b3: "Responde de forma espontánea, da la mejor imagen",
        start: "Iniciar el cuestionario", own: "En tu idioma y a tu ritmo", sample: "Preguntas de ejemplo", of: "de", vraag: "Pregunta",
        note: "Elige lo que mejor encaje contigo.", prev: "Anterior", next: "Siguiente", demo: "Vista previa, las preguntas no se pueden pulsar", mark: "VISTA PREVIA" },
  ro: { chip: "Chestionar", welcome: "Bine ai venit la", intro: "Vei primi o serie de întrebări. Indică pentru fiecare ce ți se potrivește cel mai bine.",
        b1: "Durează câteva minute", b2: "Nu există răspunsuri corecte sau greșite", b3: "Răspunde spontan, așa iese cea mai bună imagine",
        start: "Începe chestionarul", own: "În limba și ritmul tău", sample: "Întrebări exemplu", of: "din", vraag: "Întrebarea",
        note: "Alege ce ți se potrivește cel mai bine.", prev: "Înapoi", next: "Înainte", demo: "Previzualizare, întrebările nu pot fi apăsate", mark: "EXEMPLU" },
};
export const ASSOVER_HUB_UI = {
  nl: { title: "Zoek je op testsoort?", intro: "Weet je nog niet welk instrument je nodig hebt? Deze pagina's leggen per soort uit wat er gemeten wordt en welke vragenlijst erbij hoort." },
  en: { title: "Looking by type of test?", intro: "Not sure yet which instrument you need? These pages explain per type what is measured and which questionnaire belongs to it." },
  de: { title: "Suchen Sie nach Testart?", intro: "Noch unklar, welches Instrument Sie brauchen? Diese Seiten erklären je Art, was gemessen wird und welcher Fragebogen dazugehört." },
  fr: { title: "Vous cherchez par type de test ?", intro: "Vous ne savez pas encore quel instrument vous faut ? Ces pages expliquent par type ce qui est mesuré et quel questionnaire y correspond." },
  es: { title: "¿Buscas por tipo de test?", intro: "¿Aún no sabes qué instrumento necesitas? Estas páginas explican por tipo qué se mide y qué cuestionario corresponde." },
  ro: { title: "Cauți după tipul de test?", intro: "Încă nu știi ce instrument îți trebuie? Aceste pagini explică pe tipuri ce se măsoară și ce chestionar se potrivește." },
};
export const BASE_STICKY_DEMO = {
  nl: { aria: "Plan een gratis demo", label: "Gratis demo" },
  en: { aria: "Book a free demo", label: "Free demo" },
  de: { aria: "Kostenlose Demo buchen", label: "Gratis-Demo" },
  fr: { aria: "Réserver une démo gratuite", label: "Démo gratuite" },
  es: { aria: "Reservar una demo gratuita", label: "Demo gratis" },
  ro: { aria: "Rezervă o demonstrație gratuită", label: "Demo gratuit" },
};
export const SANITY_KC = {
  nl: { crumbHome: "Home", crumb: "Kenniscentrum", eyebrow: "Kenniscentrum", toc: "In dit artikel", read: "min leestijd", authorRole: "Managing Partner bij hrmforce", authorBio: "Schrijft over assessments, selectie en talentontwikkeling. Al meer dan 20 jaar betrokken bij psychometrie in de praktijk.", authorCta: "Meer over hrmforce", published: "Gepubliceerd op" },
  en: { crumbHome: "Home", crumb: "Knowledge centre", eyebrow: "Knowledge centre", toc: "In this article", read: "min read", authorRole: "Managing Partner at hrmforce", authorBio: "Writes about assessments, selection and talent development. Involved in applied psychometrics for over 20 years.", authorCta: "More about hrmforce", published: "Published on" },
  de: { crumbHome: "Home", crumb: "Wissenszentrum", eyebrow: "Wissenszentrum", toc: "In diesem Artikel", read: "Min. Lesezeit", authorRole: "Managing Partner bei hrmforce", authorBio: "Schreibt über Assessments, Auswahl und Talententwicklung. Seit über 20 Jahren in der angewandten Psychometrie tätig.", authorCta: "Mehr über hrmforce", published: "Veröffentlicht am" },
  fr: { crumbHome: "Accueil", crumb: "Centre de connaissances", eyebrow: "Centre de connaissances", toc: "Dans cet article", read: "min de lecture", authorRole: "Managing Partner chez hrmforce", authorBio: "Écrit sur les évaluations, la sélection et le développement des talents. Plus de 20 ans de psychométrie appliquée.", authorCta: "En savoir plus sur hrmforce", published: "Publié le" },
  es: { crumbHome: "Inicio", crumb: "Centro de conocimiento", eyebrow: "Centro de conocimiento", toc: "En este artículo", read: "min de lectura", authorRole: "Managing Partner en hrmforce", authorBio: "Escribe sobre evaluaciones, selección y desarrollo del talento. Más de 20 años de psicometría aplicada.", authorCta: "Más sobre hrmforce", published: "Publicado el" },
  ro: { crumbHome: "Acasă", crumb: "Centru de cunoștințe", eyebrow: "Centru de cunoștințe", toc: "În acest articol", read: "min de citit", authorRole: "Managing Partner la hrmforce", authorBio: "Scrie despre evaluări, selecție și dezvoltarea talentelor. Peste 20 de ani de psihometrie aplicată.", authorCta: "Mai multe despre hrmforce", published: "Publicat pe" },
};
export const SANITY__descFallback = {
  nl: "Lees meer over assessments, selectie en talentontwikkeling bij hrmforce.",
  en: "Read more about assessments, selection and talent development at hrmforce.",
  de: "Mehr über Assessments, Auswahl und Talententwicklung bei hrmforce.",
  fr: "En savoir plus sur les évaluations, la sélection et le développement des talents chez hrmforce.",
  es: "Más sobre evaluaciones, selección y desarrollo del talento en hrmforce.",
  ro: "Mai multe despre evaluări, selecție și dezvoltarea talentelor la hrmforce.",
};
export const SANITY_INTEG = {
  nl: { title: "Koppel hrmforce aan je systemen", text: "hrmforce integreert met je ATS, HR- en salarissystemen zoals AFAS, Nmbrs, Visma, Loket, Recruitee, Carerix en OTYS.", btn: "Bekijk de integraties" },
  en: { title: "Connect hrmforce to your systems", text: "hrmforce integrates with your ATS, HR and payroll systems such as AFAS, Nmbrs, Visma, Loket, Recruitee, Carerix and OTYS.", btn: "View the integrations" },
  de: { title: "Verbinden Sie hrmforce mit Ihren Systemen", text: "hrmforce integriert sich mit Ihren ATS-, HR- und Lohnsystemen wie AFAS, Nmbrs, Visma, Loket, Recruitee, Carerix und OTYS.", btn: "Integrationen ansehen" },
  fr: { title: "Connectez hrmforce à vos systèmes", text: "hrmforce s'intègre à vos systèmes ATS, RH et paie comme AFAS, Nmbrs, Visma, Loket, Recruitee, Carerix et OTYS.", btn: "Voir les intégrations" },
  es: { title: "Conecta hrmforce con tus sistemas", text: "hrmforce se integra con tus sistemas ATS, RR. HH. y nómina como AFAS, Nmbrs, Visma, Loket, Recruitee, Carerix y OTYS.", btn: "Ver las integraciones" },
  ro: { title: "Conectează hrmforce la sistemele tale", text: "hrmforce se integrează cu sistemele tale ATS, HR și payroll precum AFAS, Nmbrs, Visma, Loket, Recruitee, Carerix și OTYS.", btn: "Vezi integrările" },
};
export const SANITY_T = {
  nl: { tag: "Direct toepassen", from: "vanaf", card: "Bekijk", endTitle: "Zet dit inzicht in de praktijk", endText: "Neem het assessment direct af, of bespreek met een specialist welke aanpak past.", primary: "Bekijk assessments", demo: "Plan een gratis demo", also: "Ook interessant:" },
  en: { tag: "Put it into practice", from: "from", card: "View", endTitle: "Put this insight into practice", endText: "Take the assessment directly, or discuss the right approach with a specialist.", primary: "View assessments", demo: "Book a free demo", also: "Also interesting:" },
  de: { tag: "Direkt anwenden", from: "ab", card: "Ansehen:", endTitle: "Setzen Sie diese Erkenntnis in die Praxis um", endText: "Nutzen Sie das Assessment direkt oder besprechen Sie mit einem Spezialisten, welcher Ansatz passt.", primary: "Assessments ansehen", demo: "Kostenlose Demo anfragen", also: "Auch interessant:" },
  fr: { tag: "À mettre en pratique", from: "à partir de", card: "Voir :", endTitle: "Mettez cet insight en pratique", endText: "Utilisez l'évaluation directement ou discutez avec un spécialiste de l'approche adaptée.", primary: "Voir les évaluations", demo: "Demander une démo gratuite", also: "Également intéressant :" },
  es: { tag: "Aplíquelo ya", from: "desde", card: "Ver:", endTitle: "Lleve este insight a la práctica", endText: "Realice la evaluación directamente o consulte con un especialista qué enfoque encaja.", primary: "Ver evaluaciones", demo: "Solicitar una demo gratuita", also: "También interesante:" },
  ro: { tag: "Aplicați acum", from: "de la", card: "Vezi:", endTitle: "Puneți acest insight în practică", endText: "Folosiți evaluarea direct sau discutați cu un specialist ce abordare se potrivește.", primary: "Vezi evaluările", demo: "Solicitați o demonstrație gratuită", also: "De asemenea interesant:" },
};
export const SANITY_RECI18N = {
  nl: {
    "disc-test": { label: "DISC Test", blurb: "Breng gedrag, communicatie en samenwerking in kaart." },
    "big-five": { label: "Persoonlijkheidstest: Big Five", blurb: "Persoonlijkheid vertaald naar werkgerelateerde competenties." },
    "cognitieve-test": { label: "Cognitieve capaciteitentest", blurb: "Meet werk- en denkniveau en leervermogen objectief." },
    "drijfverentest": { label: "Drijfverentest", blurb: "Ontdek wat iemand motiveert en energie geeft." },
    "leiderschapstest": { label: "Leiderschapstest", blurb: "Inzicht in leiderschapsstijlen en managementrollen." },
    "360-graden-feedback": { label: "360 graden feedback", blurb: "Feedback van collega's, leidinggevenden en klanten." },
    "studiekeuzetest": { label: "Studiekeuzetest", blurb: "Passende opleidingen en beroepen op basis van interesses." },
    "competentie-check": { label: "Competentiecheck", blurb: "Gedrag per competentie, vergeleken met de eisen van de functie." },
    "duurzame-inzetbaarheid-scan": { label: "Duurzame inzetbaarheid scan", blurb: "Werkvermogen, energie en betrokkenheid in beeld." },
  },
  en: {
    "disc-test": { label: "DISC test", blurb: "Map behaviour, communication and collaboration." },
    "big-five": { label: "Personality test: Big Five", blurb: "Personality translated into work-related competencies." },
    "cognitieve-test": { label: "Cognitive ability test", blurb: "Objectively measures working and thinking level and learning ability." },
    "drijfverentest": { label: "Motivational drivers test", blurb: "Discover what motivates someone and gives energy." },
    "leiderschapstest": { label: "Leadership test", blurb: "Insight into leadership styles and management roles." },
    "360-graden-feedback": { label: "360-degree feedback", blurb: "Feedback from colleagues, managers and clients." },
    "studiekeuzetest": { label: "Study choice test", blurb: "Suitable studies and professions based on interests." },
    "competentie-check": { label: "Competency check", blurb: "Behaviour per competency, compared with what the role asks." },
    "duurzame-inzetbaarheid-scan": { label: "Employability scan", blurb: "Work ability, energy and engagement in one picture." },
  },
  de: {
    "disc-test": { label: "DISC-Test", blurb: "Verhalten, Kommunikation und Zusammenarbeit erfassen." },
    "big-five": { label: "Persönlichkeitstest: Big Five", blurb: "Persönlichkeit übersetzt in arbeitsbezogene Kompetenzen." },
    "cognitieve-test": { label: "Kognitiver Fähigkeitstest", blurb: "Misst Arbeits- und Denkniveau sowie Lernfähigkeit objektiv." },
    "drijfverentest": { label: "Motivationstest", blurb: "Entdecken Sie, was jemanden motiviert und Energie gibt." },
    "leiderschapstest": { label: "Führungstest", blurb: "Einblick in Führungsstile und Managementrollen." },
    "360-graden-feedback": { label: "360-Grad-Feedback", blurb: "Feedback von Kollegen, Führungskräften und Kunden." },
    "studiekeuzetest": { label: "Studienwahltest", blurb: "Passende Studiengänge und Berufe auf Basis von Interessen." },
    "competentie-check": { label: "Kompetenz-Check", blurb: "Verhalten je Kompetenz, verglichen mit den Anforderungen der Stelle." },
    "duurzame-inzetbaarheid-scan": { label: "Employability-Scan", blurb: "Arbeitsfähigkeit, Energie und Engagement auf einen Blick." },
  },
  fr: {
    "disc-test": { label: "Test DISC", blurb: "Cartographie le comportement, la communication et la collaboration." },
    "big-five": { label: "Test de personnalité : Big Five", blurb: "La personnalité traduite en compétences professionnelles." },
    "cognitieve-test": { label: "Test d'aptitude cognitive", blurb: "Mesure objectivement le niveau de travail, de réflexion et d'apprentissage." },
    "drijfverentest": { label: "Test des motivations", blurb: "Découvrez ce qui motive une personne et lui donne de l'énergie." },
    "leiderschapstest": { label: "Test de leadership", blurb: "Aperçu des styles de leadership et des rôles managériaux." },
     "360-graden-feedback": { label: "Feedback à 360 degrés", blurb: "Retours de collègues, managers et clients." },
    "studiekeuzetest": { label: "Test d'orientation", blurb: "Formations et métiers adaptés selon les intérêts." },
    "competentie-check": { label: "Bilan de compétences", blurb: "Le comportement par compétence, comparé aux exigences du poste." },
    "duurzame-inzetbaarheid-scan": { label: "Scan d'employabilité", blurb: "Capacité de travail, énergie et engagement en un coup d'œil." },
  },
  es: {
    "disc-test": { label: "Test DISC", blurb: "Mapea el comportamiento, la comunicación y la colaboración." },
    "big-five": { label: "Test de personalidad: Big Five", blurb: "La personalidad traducida en competencias laborales." },
    "cognitieve-test": { label: "Test de capacidad cognitiva", blurb: "Mide objetivamente el nivel de trabajo, pensamiento y aprendizaje." },
    "drijfverentest": { label: "Test de motivaciones", blurb: "Descubre qué motiva a alguien y le da energía." },
    "leiderschapstest": { label: "Test de liderazgo", blurb: "Información sobre estilos de liderazgo y roles directivos." },
    "360-graden-feedback": { label: "Feedback de 360 grados", blurb: "Comentarios de compañeros, responsables y clientes." },
    "studiekeuzetest": { label: "Test de orientación académica", blurb: "Estudios y profesiones adecuados según los intereses." },
    "competentie-check": { label: "Chequeo de competencias", blurb: "Conducta por competencia, comparada con lo que pide el puesto." },
    "duurzame-inzetbaarheid-scan": { label: "Escáner de empleabilidad", blurb: "Capacidad de trabajo, energía y compromiso de un vistazo." },
  },
  ro: {
    "disc-test": { label: "Test DISC", blurb: "Cartografiază comportamentul, comunicarea și colaborarea." },
    "big-five": { label: "Test de personalitate: Big Five", blurb: "Personalitatea tradusă în competențe legate de muncă." },
    "cognitieve-test": { label: "Test de aptitudini cognitive", blurb: "Măsoară obiectiv nivelul de lucru, gândire și capacitatea de învățare." },
    "drijfverentest": { label: "Test al motivațiilor", blurb: "Descoperiți ce motivează o persoană și îi dă energie." },
    "leiderschapstest": { label: "Test de leadership", blurb: "Perspectivă asupra stilurilor de leadership și rolurilor de management." },
    "360-graden-feedback": { label: "Feedback 360 de grade", blurb: "Feedback de la colegi, manageri și clienți." },
    "studiekeuzetest": { label: "Test de orientare în studii", blurb: "Studii și profesii potrivite în funcție de interese." },
    "competentie-check": { label: "Verificare de competențe", blurb: "Comportamentul pe fiecare competență, față de cerințele rolului." },
    "duurzame-inzetbaarheid-scan": { label: "Scanare de angajabilitate", blurb: "Capacitatea de muncă, energia și implicarea dintr-o privire." },
  },
};
export const KCSLUG_KC_ALLE = {
  nl: { read: "min leestijd", published: "Gepubliceerd op", authorRole: "Managing Partner bij hrmforce", authorBio: "Schrijft over assessments, selectie en talentontwikkeling. Al meer dan 20 jaar betrokken bij psychometrie in de praktijk.", authorCta: "Meer over hrmforce", back: "Naar het kenniscentrum" },
  en: { read: "min read", published: "Published on", authorRole: "Managing Partner at hrmforce", authorBio: "Writes about assessments, selection and talent development. Involved in applied psychometrics for over 20 years.", authorCta: "More about hrmforce", back: "Back to the knowledge centre" },
  de: { read: "Min. Lesezeit", published: "Veröffentlicht am", authorRole: "Managing Partner bei hrmforce", authorBio: "Schreibt über Assessments, Auswahl und Talententwicklung. Seit über 20 Jahren in der angewandten Psychometrie tätig.", authorCta: "Mehr über hrmforce", back: "Zum Wissenszentrum" },
  fr: { read: "min de lecture", published: "Publié le", authorRole: "Managing Partner chez hrmforce", authorBio: "Écrit sur les évaluations, la sélection et le développement des talents. Plus de 20 ans de psychométrie appliquée.", authorCta: "En savoir plus sur hrmforce", back: "Vers le centre de connaissances" },
  es: { read: "min de lectura", published: "Publicado el", authorRole: "Managing Partner en hrmforce", authorBio: "Escribe sobre evaluaciones, selección y desarrollo del talento. Más de 20 años de psicometría aplicada.", authorCta: "Más sobre hrmforce", back: "Al centro de conocimiento" },
  ro: { read: "min de citit", published: "Publicat pe", authorRole: "Managing Partner la hrmforce", authorBio: "Scrie despre evaluări, selecție și dezvoltarea talentelor. Peste 20 de ani de psihometrie aplicată.", authorCta: "Mai multe despre hrmforce", back: "Spre centrul de cunoștințe" },
};
export const BASE_EXIT_INTENT = {
          nl:{t:"Voordat je gaat:",b:"Probeer gratis onze kleurentest en ontdek in 3 minuten je persoonlijkheidskleuren.",c:"Doe de gratis kleurentest",x:"Nee, bedankt",u:"/gratis-kleurentest/"},
          en:{t:"Before you go:",b:"Try our free colour test and discover your personality colours in 3 minutes.",c:"Take the free colour test",x:"No thanks",u:"/en/gratis-kleurentest/"},
          de:{t:"Bevor Sie gehen:",b:"Testen Sie kostenlos unseren Farbtest und entdecken Sie in 3 Minuten Ihre Persönlichkeitsfarben.",c:"Kostenlosen Farbtest machen",x:"Nein, danke",u:"/de/gratis-kleurentest/"},
          fr:{t:"Avant de partir :",b:"Essayez gratuitement notre test des couleurs et découvrez vos couleurs de personnalité en 3 minutes.",c:"Faire le test gratuit",x:"Non merci",u:"/fr/gratis-kleurentest/"},
          es:{t:"Antes de irte:",b:"Prueba gratis nuestro test de colores y descubre tus colores de personalidad en 3 minutos.",c:"Hacer el test gratis",x:"No, gracias",u:"/es/gratis-kleurentest/"},
          ro:{t:"Înainte să pleci:",b:"Încearcă gratuit testul nostru de culori și descoperă-ți culorile personalității în 3 minute.",c:"Fă testul gratuit",x:"Nu, mulțumesc",u:"/ro/gratis-kleurentest/"}
        };
// {aantal} wordt bij het renderen vervangen door het aantal documenten.
export const DOCOVER_T = {
  nl: {
    crumb: "Documenten", eyebrow: "Documentatie", h1: "Documenten van de uitgevers",
    lead: "Brochures, voorbeeldrapporten, handleidingen en veelgestelde vragen bij de instrumenten die hrmforce afneemt bij SHL, GITP en Cubiks. {aantal} documenten, direct te openen, zonder formulier.",
    naar: "Naar de testpagina", cta: "Liever advies over wat bij je vraag past?", ctaLink: "Neem contact op",
  },
  en: {
    crumb: "Documents", eyebrow: "Documentation", h1: "Documents from the publishers",
    lead: "Brochures, sample reports, manuals and frequently asked questions for the instruments hrmforce sources from SHL, GITP and Cubiks. {aantal} documents, open them straight away, no form.",
    naar: "To the test page", cta: "Prefer advice on what fits your question?", ctaLink: "Get in touch",
  },
  de: {
    crumb: "Dokumente", eyebrow: "Dokumentation", h1: "Dokumente der Herausgeber",
    lead: "Broschüren, Musterberichte, Handbücher und häufige Fragen zu den Verfahren, die hrmforce bei SHL, GITP und Cubiks bezieht. {aantal} Dokumente, direkt zu öffnen, ohne Formular.",
    naar: "Zur Testseite", cta: "Lieber Beratung, was zu Ihrer Frage passt?", ctaLink: "Kontakt aufnehmen",
  },
  fr: {
    crumb: "Documents", eyebrow: "Documentation", h1: "Documents des éditeurs",
    lead: "Brochures, rapports types, manuels et questions fréquentes sur les outils que hrmforce se procure auprès de SHL, GITP et Cubiks. {aantal} documents, consultables tout de suite, sans formulaire.",
    naar: "Vers la page du test", cta: "Vous préférez un conseil sur ce qui convient ?", ctaLink: "Nous contacter",
  },
  es: {
    crumb: "Documentos", eyebrow: "Documentación", h1: "Documentos de las editoriales",
    lead: "Folletos, informes de muestra, manuales y preguntas frecuentes de los instrumentos que hrmforce obtiene de SHL, GITP y Cubiks. {aantal} documentos, para abrir al momento, sin formulario.",
    naar: "A la página del test", cta: "¿Prefieres asesoramiento sobre qué encaja?", ctaLink: "Contactar",
  },
  ro: {
    crumb: "Documente", eyebrow: "Documentație", h1: "Documente de la editori",
    lead: "Broșuri, rapoarte model, manuale și întrebări frecvente pentru instrumentele pe care hrmforce le ia de la SHL, GITP și Cubiks. {aantal} documente, deschise pe loc, fără formular.",
    naar: "Spre pagina testului", cta: "Preferi un sfat despre ce ți se potrivește?", ctaLink: "Contactează-ne",
  },
};
// Standaardteksten van de logobalk. Stonden eerder als Nederlandse tekst in
// LogoSlider.astro en bleven daardoor in elke taal Nederlands.
export const LOGOSLIDER_T = {
  nl: {
    kop: "Vertrouwd door 1.200+ organisaties",
    noot: "Van overheid en banken tot zorg, onderwijs en industrie, 1.200+ organisaties kiezen hrmforce.",
    alt: "Klantlogo's",
    sector: "Organisaties die u voorgingen",
  },
  en: {
    kop: "Trusted by 1,200+ organisations",
    noot: "From government and banking to healthcare, education and industry, 1,200+ organisations choose hrmforce.",
    alt: "Client logos",
    sector: "Organisations that went before you",
  },
};
export const TOEP_MC_OK = { nl: "Bedankt. We nemen zo snel mogelijk contact met je op.", en: "Thank you. We will get in touch as soon as we can.", de: "Danke. Wir melden uns so schnell wie möglich.", fr: "Merci. Nous vous recontactons au plus vite.", es: "Gracias. Nos pondremos en contacto lo antes posible.", ro: "Mulțumim. Revenim cât de repede putem." };
export const TOEP_MC_FOUT = { nl: "Er ging iets mis bij het versturen. Probeer het nog eens of mail naar service@hrmforce.com.", en: "Something went wrong while sending. Please try again or email service@hrmforce.com.", de: "Beim Senden ist etwas schiefgelaufen. Bitte erneut versuchen oder an service@hrmforce.com mailen.", fr: "Une erreur est survenue lors de l'envoi. Réessayez ou écrivez à service@hrmforce.com.", es: "Algo salió mal al enviar. Inténtalo de nuevo o escribe a service@hrmforce.com.", ro: "A apărut o eroare la trimitere. Încearcă din nou sau scrie la service@hrmforce.com." };
export const TOEP_MC_MENS = { nl: "We konden niet vaststellen dat je een mens bent. Vink het vakje aan en probeer het opnieuw.", en: "We could not confirm that you are human. Tick the box and try again.", de: "Wir konnten nicht feststellen, dass Sie ein Mensch sind. Bitte das Kästchen anklicken und erneut versuchen.", fr: "Nous n'avons pas pu confirmer que vous êtes humain. Cochez la case et réessayez.", es: "No hemos podido confirmar que eres una persona. Marca la casilla e inténtalo de nuevo.", ro: "Nu am putut confirma că ești o persoană. Bifează căsuța și încearcă din nou." };
export const TOEP_MC_BEZIG = { nl: "Verzenden…", en: "Sending…", de: "Wird gesendet…", fr: "Envoi…", es: "Enviando…", ro: "Se trimite…" };
export const MENSCHK_TAAL = { nl: "nl", en: "en", de: "de", fr: "fr", es: "es", ro: "ro" };
export const WPDET_MC_OK = { nl: "Bedankt. We nemen zo snel mogelijk contact met je op.", en: "Thank you. We will get in touch as soon as we can.", de: "Danke. Wir melden uns so schnell wie möglich.", fr: "Merci. Nous vous recontactons au plus vite.", es: "Gracias. Nos pondremos en contacto lo antes posible.", ro: "Mulțumim. Revenim cât de repede putem." };
export const WPDET_MC_FOUT = { nl: "Er ging iets mis bij het versturen. Probeer het nog eens of mail naar service@hrmforce.com.", en: "Something went wrong while sending. Please try again or email service@hrmforce.com.", de: "Beim Senden ist etwas schiefgelaufen. Bitte erneut versuchen oder an service@hrmforce.com mailen.", fr: "Une erreur est survenue lors de l'envoi. Réessayez ou écrivez à service@hrmforce.com.", es: "Algo salió mal al enviar. Inténtalo de nuevo o escribe a service@hrmforce.com.", ro: "A apărut o eroare la trimitere. Încearcă din nou sau scrie la service@hrmforce.com." };
export const WPDET_MC_MENS = { nl: "We konden niet vaststellen dat je een mens bent. Vink het vakje aan en probeer het opnieuw.", en: "We could not confirm that you are human. Tick the box and try again.", de: "Wir konnten nicht feststellen, dass Sie ein Mensch sind. Bitte das Kästchen anklicken und erneut versuchen.", fr: "Nous n'avons pas pu confirmer que vous êtes humain. Cochez la case et réessayez.", es: "No hemos podido confirmar que eres una persona. Marca la casilla e inténtalo de nuevo.", ro: "Nu am putut confirma că ești o persoană. Bifează căsuța și încearcă din nou." };
export const WPDET_MC_BEZIG = { nl: "Verzenden…", en: "Sending…", de: "Wird gesendet…", fr: "Envoi…", es: "Enviando…", ro: "Se trimite…" };
export const SHOP_MC_OK = { nl: "Bedankt. We nemen zo snel mogelijk contact met je op.", en: "Thank you. We will get in touch as soon as we can.", de: "Danke. Wir melden uns so schnell wie möglich.", fr: "Merci. Nous vous recontactons au plus vite.", es: "Gracias. Nos pondremos en contacto lo antes posible.", ro: "Mulțumim. Revenim cât de repede putem." };
export const SHOP_MC_FOUT = { nl: "Er ging iets mis bij het versturen. Probeer het nog eens of mail naar service@hrmforce.com.", en: "Something went wrong while sending. Please try again or email service@hrmforce.com.", de: "Beim Senden ist etwas schiefgelaufen. Bitte erneut versuchen oder an service@hrmforce.com mailen.", fr: "Une erreur est survenue lors de l'envoi. Réessayez ou écrivez à service@hrmforce.com.", es: "Algo salió mal al enviar. Inténtalo de nuevo o escribe a service@hrmforce.com.", ro: "A apărut o eroare la trimitere. Încearcă din nou sau scrie la service@hrmforce.com." };
export const SHOP_MC_MENS = { nl: "We konden niet vaststellen dat je een mens bent. Vink het vakje aan en probeer het opnieuw.", en: "We could not confirm that you are human. Tick the box and try again.", de: "Wir konnten nicht feststellen, dass Sie ein Mensch sind. Bitte das Kästchen anklicken und erneut versuchen.", fr: "Nous n'avons pas pu confirmer que vous êtes humain. Cochez la case et réessayez.", es: "No hemos podido confirmar que eres una persona. Marca la casilla e inténtalo de nuevo.", ro: "Nu am putut confirma că ești o persoană. Bifează căsuța și încearcă din nou." };
export const SHOP_MC_BEZIG = { nl: "Verzenden…", en: "Sending…", de: "Wird gesendet…", fr: "Envoi…", es: "Enviando…", ro: "Se trimite…" };
export const SANITY__sliderH = { nl: "Organisaties die u voorgingen", en: "Organisations that went before you", de: "Organisationen, die vor Ihnen kamen", fr: "Les organisations qui vous ont précédé", es: "Organizaciones que te precedieron", ro: "Organizații care te-au precedat" };
export const ASSESSL_MC_OK = { nl: "Bedankt. We nemen zo snel mogelijk contact met je op.", en: "Thank you. We will get in touch as soon as we can.", de: "Danke. Wir melden uns so schnell wie möglich.", fr: "Merci. Nous vous recontactons au plus vite.", es: "Gracias. Nos pondremos en contacto lo antes posible.", ro: "Mulțumim. Revenim cât de repede putem." };
export const ASSESSL_MC_FOUT = { nl: "Er ging iets mis bij het versturen. Probeer het nog eens of mail naar service@hrmforce.com.", en: "Something went wrong while sending. Please try again or email service@hrmforce.com.", de: "Beim Senden ist etwas schiefgelaufen. Bitte erneut versuchen oder an service@hrmforce.com mailen.", fr: "Une erreur est survenue lors de l'envoi. Réessayez ou écrivez à service@hrmforce.com.", es: "Algo salió mal al enviar. Inténtalo de nuevo o escribe a service@hrmforce.com.", ro: "A apărut o eroare la trimitere. Încearcă din nou sau scrie la service@hrmforce.com." };
export const ASSESSL_MC_MENS = { nl: "We konden niet vaststellen dat je een mens bent. Vink het vakje aan en probeer het opnieuw.", en: "We could not confirm that you are human. Tick the box and try again.", de: "Wir konnten nicht feststellen, dass Sie ein Mensch sind. Bitte das Kästchen anklicken und erneut versuchen.", fr: "Nous n'avons pas pu confirmer que vous êtes humain. Cochez la case et réessayez.", es: "No hemos podido confirmar que eres una persona. Marca la casilla e inténtalo de nuevo.", ro: "Nu am putut confirma că ești o persoană. Bifează căsuța și încearcă din nou." };
export const ASSESSL_MC_BEZIG = { nl: "Verzenden…", en: "Sending…", de: "Wird gesendet…", fr: "Envoi…", es: "Enviando…", ro: "Se trimite…" };
// Taalcodes, geen tekst: hier staat elke taal met de hand in. Via de
// vertaallaag zou een nieuwe taal "nl_NL" krijgen, en dan klopt og:locale niet.
export const BASE_LOCALE_MAP = { nl: "nl_NL", en: "en_US", de: "de_DE", fr: "fr_FR", es: "es_ES", ro: "ro_RO", pl: "pl_PL", da: "da_DK", sv: "sv_SE" };

// Hetzelfde, in de vorm die toLocaleDateString wil (artikelpagina's).
export const BASE_DATUM_LOCALE = { nl: "nl-NL", en: "en-GB", de: "de-DE", fr: "fr-FR", es: "es-ES", ro: "ro-RO", pl: "pl-PL", da: "da-DK", sv: "sv-SE" };

// De rubrieken in het kruimelpad. Stonden eerder in src/layouts/Base.astro en
// waren daardoor onzichtbaar voor het vertaalscript.
export const BASE_RUBRIEK = {
  assessments: { nl: "Assessments", en: "Assessments", de: "Assessments", fr: "Évaluations", es: "Evaluaciones", ro: "Evaluări" },
  kenniscentrum: { nl: "Kenniscentrum", en: "Knowledge centre", de: "Wissenszentrum", fr: "Centre de connaissances", es: "Centro de conocimiento", ro: "Centru de cunoștințe" },
  "hrm-oplossingen": { nl: "HRM-oplossingen", en: "HR solutions", de: "HR-Lösungen", fr: "Solutions RH", es: "Soluciones RR. HH.", ro: "Soluții HR" },
  advies: { nl: "Advies", en: "Advice", de: "Beratung", fr: "Conseil", es: "Asesoramiento", ro: "Consultanță" },
  integraties: { nl: "Integraties", en: "Integrations", de: "Anbindungen", fr: "Intégrations", es: "Integraciones", ro: "Integrări" },
  vergelijking: { nl: "Vergelijken", en: "Compare", de: "Vergleichen", fr: "Comparer", es: "Comparar", ro: "Comparați" },
  oefenen: { nl: "Oefenen", en: "Practise", de: "Üben", fr: "S'entraîner", es: "Practicar", ro: "Exersați" },
  sectoren: { nl: "Sectoren", en: "Sectors", de: "Branchen", fr: "Secteurs", es: "Sectores", ro: "Sectoare" },
  toepassingen: { nl: "Toepassingen", en: "Use cases", de: "Anwendungen", fr: "Cas d'usage", es: "Casos de uso", ro: "Aplicații" },
  whitepapers: { nl: "Whitepapers", en: "Whitepapers", de: "Whitepapers", fr: "Livres blancs", es: "Whitepapers", ro: "Whitepapers" },
  vacatures: { nl: "Vacatures", en: "Vacancies", de: "Stellen", fr: "Offres", es: "Vacantes", ro: "Posturi" },
  support: { nl: "Support", en: "Support", de: "Support", fr: "Assistance", es: "Soporte", ro: "Asistență" },
  voorbereiding: { nl: "Voorbereiding", en: "Preparation", de: "Vorbereitung", fr: "Préparation", es: "Preparación", ro: "Pregătire" },
  partner: { nl: "Partners", en: "Partners", de: "Partner", fr: "Partenaires", es: "Socios", ro: "Parteneri" },
};

// Losse labels die eerder in een component stonden.
export const FOOTER_TOUR = { nl: "Rondleiding", en: "Product tour", de: "Produkttour", fr: "Visite du produit", es: "Tour del producto", ro: "Tur al produsului" };
export const FOOTER_VERGELIJK = { nl: "Vergelijken", en: "Compare", de: "Vergleichen", fr: "Comparer", es: "Comparar", ro: "Comparație" };
export const FOOTER_TOEPASSINGEN = { nl: "Toepassingen", en: "Use cases", de: "Anwendungen", fr: "Cas d'usage", es: "Casos de uso", ro: "Aplicații" };
export const SECTOR_VOORBEELD = { nl: "Voorbeeld", en: "Example", de: "Beispiel", fr: "Exemple", es: "Ejemplo", ro: "Exemplu" };
export const INTEG_POPULAIR = { nl: "Populaire koppelingen", en: "Popular integrations", de: "Beliebte Anbindungen", fr: "Intégrations populaires", es: "Integraciones populares", ro: "Integrări populare" };
export const TRUST_BEOORDEELD = { nl: "Beoordeeld op", en: "Reviewed on", de: "Bewertet auf", fr: "Évalué sur", es: "Valorado en", ro: "Evaluat pe" };
export const SHOP_REQ_KANDIDAAT = { nl: "Vul voor elke kandidaat naam en een geldig e-mailadres in.", en: "Enter a name and a valid email for every candidate.", de: "Bitte für jeden Kandidaten Namen und eine gültige E-Mail-Adresse eingeben.", fr: "Saisissez un nom et un e-mail valide pour chaque candidat.", es: "Introduce nombre y un correo válido para cada candidato.", ro: "Introduceți nume și un e-mail valid pentru fiecare candidat." };
export const ASSESSD_MC_OK = { nl: "Bedankt. We nemen zo snel mogelijk contact met je op.", en: "Thank you. We will get in touch as soon as we can.", de: "Danke. Wir melden uns so schnell wie möglich.", fr: "Merci. Nous vous recontactons au plus vite.", es: "Gracias. Nos pondremos en contacto lo antes posible.", ro: "Mulțumim. Vă contactăm cât mai curând." };
export const ASSESSD_MC_FOUT = { nl: "Er ging iets mis bij het versturen. Probeer het nog eens of mail naar service@hrmforce.com.", en: "Something went wrong while sending. Please try again or email service@hrmforce.com.", de: "Beim Senden ist etwas schiefgelaufen. Bitte erneut versuchen oder an service@hrmforce.com mailen.", fr: "Une erreur est survenue lors de l'envoi. Réessayez ou écrivez à service@hrmforce.com.", es: "Algo salió mal al enviar. Inténtalo de nuevo o escribe a service@hrmforce.com.", ro: "A apărut o eroare la trimitere. Încercați din nou sau scrieți la service@hrmforce.com." };
export const ASSESSD_MC_MENS = { nl: "We konden niet vaststellen dat je een mens bent. Vink het vakje aan en probeer het opnieuw.", en: "We could not confirm that you are human. Tick the box and try again.", de: "Wir konnten nicht bestätigen, dass Sie ein Mensch sind. Bitte das Kästchen anhaken und erneut versuchen.", fr: "Nous n'avons pas pu confirmer que vous êtes humain. Cochez la case et réessayez.", es: "No pudimos confirmar que eres una persona. Marca la casilla e inténtalo de nuevo.", ro: "Nu am putut confirma că sunteți o persoană. Bifați căsuța și încercați din nou." };
export const ASSESSD_MC_BEZIG = { nl: "Verzenden…", en: "Sending…", de: "Wird gesendet…", fr: "Envoi…", es: "Enviando…", ro: "Se trimite…" };

// Talen zonder eigen tekst hierboven worden aangevuld uit
// src/data/translations-content/<taal>.json. Zie vertaal-inhoud.js.
Object.assign(SHOP_DOCS_T, vulAan(SHOP_DOCS_T));
Object.assign(SHOP_REQ_I18N, vulAan(SHOP_REQ_I18N));
Object.assign(SHOP_CAND_I18N, vulAan(SHOP_CAND_I18N));
Object.assign(SHOP_CART_I18N, vulAan(SHOP_CART_I18N));
Object.assign(HOME_ITC_ALLE, vulAan(HOME_ITC_ALLE));
Object.assign(HOME_GOOG_ALLE, vulAan(HOME_GOOG_ALLE));
Object.assign(HOME_TESTI, vulAan(HOME_TESTI));
Object.assign(HOME_MATCH_ALLE, vulAan(HOME_MATCH_ALLE));
Object.assign(VOORB_CT_UI, vulAan(VOORB_CT_UI));
Object.assign(VOORB_OT_BLOK, vulAan(VOORB_OT_BLOK));
Object.assign(VOORB_BOOK_UI, vulAan(VOORB_BOOK_UI));
Object.assign(VOORB_PREP_UI, vulAan(VOORB_PREP_UI));
Object.assign(OTOVER_MEER, vulAan(OTOVER_MEER));
Object.assign(OTOVER_KLEUREN, vulAan(OTOVER_KLEUREN));
Object.assign(OTOVER_KOPPEN, vulAan(OTOVER_KOPPEN));
Object.assign(OEFAANVR_BEVESTIGING, vulAan(OEFAANVR_BEVESTIGING));
Object.assign(OEFAANVR_MENSFOUT, vulAan(OEFAANVR_MENSFOUT));
Object.assign(QMOCK_L_ALLE, vulAan(QMOCK_L_ALLE));
Object.assign(HULPM_T_ALLE, vulAan(HULPM_T_ALLE));
Object.assign(FAQC_UI, vulAan(FAQC_UI));
Object.assign(SUBPAG_CTA, vulAan(SUBPAG_CTA));
Object.assign(DOCUM_L, vulAan(DOCUM_L));
Object.assign(GRATIS_TEKST, vulAan(GRATIS_TEKST));
Object.assign(HEADER_SEARCH_I18N, vulAan(HEADER_SEARCH_I18N));
Object.assign(SOCIAL_T_ALLE, vulAan(SOCIAL_T_ALLE));
Object.assign(QPREV_T_ALLE, vulAan(QPREV_T_ALLE));
Object.assign(ASSOVER_HUB_UI, vulAan(ASSOVER_HUB_UI));
Object.assign(BASE_STICKY_DEMO, vulAan(BASE_STICKY_DEMO));
Object.assign(BASE_EXIT_INTENT, vulAan(BASE_EXIT_INTENT));
Object.assign(SANITY_KC, vulAan(SANITY_KC));
Object.assign(SANITY_INTEG, vulAan(SANITY_INTEG));
Object.assign(SANITY_T, vulAan(SANITY_T));
Object.assign(SANITY_RECI18N, vulAan(SANITY_RECI18N));
Object.assign(KCSLUG_KC_ALLE, vulAan(KCSLUG_KC_ALLE));
Object.assign(DOCOVER_T, vulAan(DOCOVER_T));
Object.assign(LOGOSLIDER_T, vulAan(LOGOSLIDER_T));
Object.assign(TOEP_MC_OK, vulAan(TOEP_MC_OK));
Object.assign(TOEP_MC_FOUT, vulAan(TOEP_MC_FOUT));
Object.assign(TOEP_MC_MENS, vulAan(TOEP_MC_MENS));
Object.assign(TOEP_MC_BEZIG, vulAan(TOEP_MC_BEZIG));
Object.assign(MENSCHK_TAAL, vulAan(MENSCHK_TAAL));
Object.assign(WPDET_MC_OK, vulAan(WPDET_MC_OK));
Object.assign(WPDET_MC_FOUT, vulAan(WPDET_MC_FOUT));
Object.assign(WPDET_MC_MENS, vulAan(WPDET_MC_MENS));
Object.assign(WPDET_MC_BEZIG, vulAan(WPDET_MC_BEZIG));
Object.assign(SHOP_MC_OK, vulAan(SHOP_MC_OK));
Object.assign(SHOP_MC_FOUT, vulAan(SHOP_MC_FOUT));
Object.assign(SHOP_MC_MENS, vulAan(SHOP_MC_MENS));
Object.assign(SHOP_MC_BEZIG, vulAan(SHOP_MC_BEZIG));
Object.assign(SANITY__sliderH, vulAan(SANITY__sliderH));
Object.assign(ASSESSL_MC_OK, vulAan(ASSESSL_MC_OK));
Object.assign(ASSESSL_MC_FOUT, vulAan(ASSESSL_MC_FOUT));
Object.assign(ASSESSL_MC_MENS, vulAan(ASSESSL_MC_MENS));
Object.assign(ASSESSL_MC_BEZIG, vulAan(ASSESSL_MC_BEZIG));
Object.assign(BASE_LOCALE_MAP, vulAan(BASE_LOCALE_MAP));
Object.assign(BASE_RUBRIEK, vulAan(BASE_RUBRIEK));
Object.assign(FOOTER_TOUR, vulAan(FOOTER_TOUR));
Object.assign(FOOTER_VERGELIJK, vulAan(FOOTER_VERGELIJK));
Object.assign(FOOTER_TOEPASSINGEN, vulAan(FOOTER_TOEPASSINGEN));
Object.assign(SECTOR_VOORBEELD, vulAan(SECTOR_VOORBEELD));
Object.assign(INTEG_POPULAIR, vulAan(INTEG_POPULAIR));
Object.assign(TRUST_BEOORDEELD, vulAan(TRUST_BEOORDEELD));
Object.assign(SHOP_REQ_KANDIDAAT, vulAan(SHOP_REQ_KANDIDAAT));
Object.assign(ASSESSD_MC_OK, vulAan(ASSESSD_MC_OK));
Object.assign(ASSESSD_MC_FOUT, vulAan(ASSESSD_MC_FOUT));
Object.assign(ASSESSD_MC_MENS, vulAan(ASSESSD_MC_MENS));
Object.assign(ASSESSD_MC_BEZIG, vulAan(ASSESSD_MC_BEZIG));
