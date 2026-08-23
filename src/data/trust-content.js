// Trust/security-content per taal, gebruikt door src/components/Trust.astro.
// NL = leidend. EN/DE/FR/ES/RO zijn een eerste vertaalslag — native review aanbevolen.
export const trustContent = {
  nl: {
    meta: { title: "Trust & security - hrmforce", description: "Hoe hrmforce omgaat met data, privacy en toegang: verwerking binnen de EU, AVG, versleutelde verbindingen, rolgebaseerd toegangsbeheer en wetenschappelijk gevalideerde assessments." },
    crumb: "Trust & security",
    hero: {
      eyebrow: "Trust & security",
      title: "Zorgvuldig omgaan met data, privacy en toegang",
      intro: "Assessmentdata is gevoelig. hrmforce is daarom gebouwd op <strong>Europese dataverwerking, AVG-naleving en rolgebaseerd toegangsbeheer</strong>, met wetenschappelijk gevalideerde assessments en transparantie richting kandidaten.",
      cta: "Neem contact op",
    },
    themes: {
      eyebrow: "Waar we voor staan",
      title: "Onze uitgangspunten voor data en privacy",
      items: [
        { icon: "🇪🇺", title: "Dataverwerking binnen de EU", text: "Medewerker- en kandidaatgegevens worden binnen de Europese Unie verwerkt en opgeslagen." },
        { icon: "📜", title: "AVG + verwerkersovereenkomst", text: "hrmforce houdt zich aan de AVG. Per traject sluiten we een verwerkersovereenkomst af waarin afspraken over gegevensverwerking zijn vastgelegd." },
        { icon: "🔒", title: "Versleutelde verbindingen", text: "Gegevens worden via versleutelde verbindingen uitgewisseld tussen kandidaat, portal en jouw organisatie." },
        { icon: "👤", title: "Rolgebaseerd toegangsbeheer", text: "Toegang is rolgebaseerd: gebruikers zien alleen de gegevens en functies die bij hun rol horen." },
        { icon: "🗓️", title: "Instelbare bewaartermijnen", text: "Bewaartermijnen zijn per assessment instelbaar, zodat je gegevens niet langer bewaart dan nodig." },
        { icon: "🧪", title: "Wetenschappelijke validatie", text: "Onze assessments zijn wetenschappelijk onderbouwd en worden gereviewd door NIP-geregistreerde psychologen." },
        { icon: "🤝", title: "Transparantie naar kandidaten", text: "Kandidaten weten waarvoor een assessment wordt gebruikt en krijgen inzicht in wat er met hun gegevens gebeurt." },
      ],
    },
    ctaBand: {
      title: "Vragen over data, privacy of toegang?",
      text: "We denken graag mee over de eisen van jouw organisatie. Neem contact op, dan bespreken we hoe we hier in jouw traject invulling aan geven.",
      primary: "Neem contact op",
      secondary: "Meer over hrmforce",
    },
  },
};

// EN/DE/FR/ES/RO erven de NL-structuur en overschrijven de teksten.
const clone = (o) => JSON.parse(JSON.stringify(o));

trustContent.en = clone(trustContent.nl);
Object.assign(trustContent.en.meta, { title: "Trust & security - hrmforce", description: "How hrmforce handles data, privacy and access: processing within the EU, GDPR, encrypted connections, role-based access control and scientifically validated assessments." });
trustContent.en.crumb = "Trust & security";
Object.assign(trustContent.en.hero, { eyebrow: "Trust & security", title: "Handling data, privacy and access with care", intro: "Assessment data is sensitive. That's why hrmforce is built on <strong>European data processing, GDPR compliance and role-based access control</strong>, with scientifically validated assessments and transparency towards candidates.", cta: "Get in touch" });
Object.assign(trustContent.en.themes, { eyebrow: "What we stand for", title: "Our principles for data and privacy" });
trustContent.en.themes.items = [
  { icon: "🇪🇺", title: "Data processing within the EU", text: "Employee and candidate data is processed and stored within the European Union." },
  { icon: "📜", title: "GDPR + data processing agreement", text: "hrmforce complies with the GDPR. For each engagement we sign a data processing agreement setting out how data is handled." },
  { icon: "🔒", title: "Encrypted connections", text: "Data is exchanged over encrypted connections between candidate, portal and your organisation." },
  { icon: "👤", title: "Role-based access control", text: "Access is role-based: users only see the data and features that belong to their role." },
  { icon: "🗓️", title: "Configurable retention periods", text: "Retention periods can be set per assessment, so you don't keep data longer than necessary." },
  { icon: "🧪", title: "Scientific validation", text: "Our assessments are scientifically grounded and reviewed by NIP-registered psychologists." },
  { icon: "🤝", title: "Transparency towards candidates", text: "Candidates know what an assessment is used for and get insight into what happens with their data." },
];
Object.assign(trustContent.en.ctaBand, { title: "Questions about data, privacy or access?", text: "We're happy to think along with your organisation's requirements. Get in touch and we'll discuss how we address this in your engagement.", primary: "Get in touch", secondary: "More about hrmforce" });

trustContent.de = clone(trustContent.nl);
Object.assign(trustContent.de.meta, { title: "Trust & Security - hrmforce", description: "Wie hrmforce mit Daten, Datenschutz und Zugriff umgeht: Verarbeitung innerhalb der EU, DSGVO, verschlüsselte Verbindungen, rollenbasierte Zugriffssteuerung und wissenschaftlich validierte Assessments." });
trustContent.de.crumb = "Trust & Security";
Object.assign(trustContent.de.hero, { eyebrow: "Trust & Security", title: "Sorgfältiger Umgang mit Daten, Datenschutz und Zugriff", intro: "Assessment-Daten sind sensibel. Deshalb baut hrmforce auf <strong>europäischer Datenverarbeitung, DSGVO-Konformität und rollenbasierter Zugriffssteuerung</strong> auf – mit wissenschaftlich validierten Assessments und Transparenz gegenüber Kandidaten.", cta: "Kontakt aufnehmen" });
Object.assign(trustContent.de.themes, { eyebrow: "Wofür wir stehen", title: "Unsere Grundsätze für Daten und Datenschutz" });
trustContent.de.themes.items = [
  { icon: "🇪🇺", title: "Datenverarbeitung innerhalb der EU", text: "Mitarbeiter- und Kandidatendaten werden innerhalb der Europäischen Union verarbeitet und gespeichert." },
  { icon: "📜", title: "DSGVO + Auftragsverarbeitungsvertrag", text: "hrmforce hält sich an die DSGVO. Pro Projekt schließen wir einen Auftragsverarbeitungsvertrag, der den Umgang mit Daten festlegt." },
  { icon: "🔒", title: "Verschlüsselte Verbindungen", text: "Daten werden über verschlüsselte Verbindungen zwischen Kandidat, Portal und Ihrer Organisation ausgetauscht." },
  { icon: "👤", title: "Rollenbasierte Zugriffssteuerung", text: "Der Zugriff ist rollenbasiert: Nutzer sehen nur die Daten und Funktionen, die zu ihrer Rolle gehören." },
  { icon: "🗓️", title: "Einstellbare Aufbewahrungsfristen", text: "Aufbewahrungsfristen lassen sich pro Assessment einstellen, sodass Sie Daten nicht länger als nötig aufbewahren." },
  { icon: "🧪", title: "Wissenschaftliche Validierung", text: "Unsere Assessments sind wissenschaftlich fundiert und werden von NIP-registrierten Psychologen geprüft." },
  { icon: "🤝", title: "Transparenz gegenüber Kandidaten", text: "Kandidaten wissen, wofür ein Assessment verwendet wird, und erhalten Einblick, was mit ihren Daten geschieht." },
];
Object.assign(trustContent.de.ctaBand, { title: "Fragen zu Daten, Datenschutz oder Zugriff?", text: "Wir denken gerne über die Anforderungen Ihrer Organisation mit. Nehmen Sie Kontakt auf, dann besprechen wir, wie wir dies in Ihrem Projekt umsetzen.", primary: "Kontakt aufnehmen", secondary: "Mehr über hrmforce" });

trustContent.fr = clone(trustContent.nl);
Object.assign(trustContent.fr.meta, { title: "Trust & security - hrmforce", description: "Comment hrmforce gère les données, la confidentialité et les accès : traitement au sein de l'UE, RGPD, connexions chiffrées, contrôle d'accès basé sur les rôles et évaluations scientifiquement validées." });
trustContent.fr.crumb = "Trust & security";
Object.assign(trustContent.fr.hero, { eyebrow: "Trust & security", title: "Gérer les données, la confidentialité et les accès avec soin", intro: "Les données d'évaluation sont sensibles. C'est pourquoi hrmforce repose sur <strong>le traitement des données en Europe, la conformité RGPD et un contrôle d'accès basé sur les rôles</strong>, avec des évaluations scientifiquement validées et de la transparence envers les candidats.", cta: "Nous contacter" });
Object.assign(trustContent.fr.themes, { eyebrow: "Ce que nous défendons", title: "Nos principes en matière de données et de confidentialité" });
trustContent.fr.themes.items = [
  { icon: "🇪🇺", title: "Traitement des données au sein de l'UE", text: "Les données des collaborateurs et des candidats sont traitées et stockées au sein de l'Union européenne." },
  { icon: "📜", title: "RGPD + accord de traitement", text: "hrmforce respecte le RGPD. Pour chaque projet, nous signons un accord de traitement des données précisant la façon dont les données sont gérées." },
  { icon: "🔒", title: "Connexions chiffrées", text: "Les données sont échangées via des connexions chiffrées entre le candidat, le portail et votre organisation." },
  { icon: "👤", title: "Contrôle d'accès basé sur les rôles", text: "L'accès est basé sur les rôles : les utilisateurs ne voient que les données et fonctions correspondant à leur rôle." },
  { icon: "🗓️", title: "Durées de conservation configurables", text: "Les durées de conservation sont configurables par évaluation, afin de ne pas conserver les données plus longtemps que nécessaire." },
  { icon: "🧪", title: "Validation scientifique", text: "Nos évaluations sont fondées scientifiquement et revues par des psychologues enregistrés NIP." },
  { icon: "🤝", title: "Transparence envers les candidats", text: "Les candidats savent à quoi sert une évaluation et comprennent ce qu'il advient de leurs données." },
];
Object.assign(trustContent.fr.ctaBand, { title: "Des questions sur les données, la confidentialité ou les accès ?", text: "Nous réfléchissons volontiers aux exigences de votre organisation. Contactez-nous et nous verrons comment y répondre dans votre projet.", primary: "Nous contacter", secondary: "En savoir plus sur hrmforce" });

trustContent.es = clone(trustContent.nl);
Object.assign(trustContent.es.meta, { title: "Trust & security - hrmforce", description: "Cómo gestiona hrmforce los datos, la privacidad y el acceso: tratamiento dentro de la UE, RGPD, conexiones cifradas, control de acceso basado en roles y evaluaciones científicamente validadas." });
trustContent.es.crumb = "Trust & security";
Object.assign(trustContent.es.hero, { eyebrow: "Trust & security", title: "Gestionar los datos, la privacidad y el acceso con cuidado", intro: "Los datos de evaluación son sensibles. Por eso hrmforce se basa en <strong>el tratamiento de datos en Europa, el cumplimiento del RGPD y un control de acceso basado en roles</strong>, con evaluaciones científicamente validadas y transparencia hacia los candidatos.", cta: "Contactar" });
Object.assign(trustContent.es.themes, { eyebrow: "Lo que defendemos", title: "Nuestros principios sobre datos y privacidad" });
trustContent.es.themes.items = [
  { icon: "🇪🇺", title: "Tratamiento de datos dentro de la UE", text: "Los datos de empleados y candidatos se tratan y almacenan dentro de la Unión Europea." },
  { icon: "📜", title: "RGPD + contrato de encargo", text: "hrmforce cumple el RGPD. En cada proyecto firmamos un contrato de encargo del tratamiento que establece cómo se gestionan los datos." },
  { icon: "🔒", title: "Conexiones cifradas", text: "Los datos se intercambian mediante conexiones cifradas entre el candidato, el portal y su organización." },
  { icon: "👤", title: "Control de acceso basado en roles", text: "El acceso se basa en roles: los usuarios solo ven los datos y funciones que corresponden a su rol." },
  { icon: "🗓️", title: "Plazos de conservación configurables", text: "Los plazos de conservación se configuran por evaluación, para no conservar los datos más tiempo del necesario." },
  { icon: "🧪", title: "Validación científica", text: "Nuestras evaluaciones tienen base científica y las revisan psicólogos colegiados NIP." },
  { icon: "🤝", title: "Transparencia hacia los candidatos", text: "Los candidatos saben para qué se utiliza una evaluación y conocen qué ocurre con sus datos." },
];
Object.assign(trustContent.es.ctaBand, { title: "¿Preguntas sobre datos, privacidad o acceso?", text: "Analizamos con gusto los requisitos de su organización. Póngase en contacto y hablamos de cómo lo abordamos en su proyecto.", primary: "Contactar", secondary: "Más sobre hrmforce" });

trustContent.ro = clone(trustContent.nl);
Object.assign(trustContent.ro.meta, { title: "Trust & security - hrmforce", description: "Cum gestionează hrmforce datele, confidențialitatea și accesul: prelucrare în UE, GDPR, conexiuni criptate, control al accesului bazat pe roluri și evaluări validate științific." });
trustContent.ro.crumb = "Trust & security";
Object.assign(trustContent.ro.hero, { eyebrow: "Trust & security", title: "Gestionarea atentă a datelor, confidențialității și accesului", intro: "Datele de evaluare sunt sensibile. De aceea hrmforce este construit pe <strong>prelucrarea datelor în Europa, conformitatea GDPR și controlul accesului bazat pe roluri</strong>, cu evaluări validate științific și transparență față de candidați.", cta: "Contactați-ne" });
Object.assign(trustContent.ro.themes, { eyebrow: "Ce susținem", title: "Principiile noastre privind datele și confidențialitatea" });
trustContent.ro.themes.items = [
  { icon: "🇪🇺", title: "Prelucrarea datelor în UE", text: "Datele angajaților și candidaților sunt prelucrate și stocate în cadrul Uniunii Europene." },
  { icon: "📜", title: "GDPR + acord de prelucrare", text: "hrmforce respectă GDPR. Pentru fiecare proiect semnăm un acord de prelucrare a datelor care stabilește modul de gestionare a datelor." },
  { icon: "🔒", title: "Conexiuni criptate", text: "Datele sunt schimbate prin conexiuni criptate între candidat, portal și organizația dvs." },
  { icon: "👤", title: "Control al accesului bazat pe roluri", text: "Accesul este bazat pe roluri: utilizatorii văd doar datele și funcțiile care corespund rolului lor." },
  { icon: "🗓️", title: "Perioade de păstrare configurabile", text: "Perioadele de păstrare pot fi setate pentru fiecare evaluare, ca să nu păstrați datele mai mult decât este necesar." },
  { icon: "🧪", title: "Validare științifică", text: "Evaluările noastre au bază științifică și sunt revizuite de psihologi înregistrați NIP." },
  { icon: "🤝", title: "Transparență față de candidați", text: "Candidații știu pentru ce este folosită o evaluare și înțeleg ce se întâmplă cu datele lor." },
];
Object.assign(trustContent.ro.ctaBand, { title: "Întrebări despre date, confidențialitate sau acces?", text: "Analizăm cu plăcere cerințele organizației dvs. Contactați-ne și discutăm cum abordăm acest lucru în proiectul dvs.", primary: "Contactați-ne", secondary: "Mai multe despre hrmforce" });
