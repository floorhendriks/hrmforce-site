// Integraties-content per taal, gebruikt door src/components/Integraties.astro.
// NL = leidend. EN/DE/FR/ES/RO zijn een eerste vertaalslag — native review aanbevolen.
export const integratiesContent = {
  nl: {
    meta: { title: "Integraties - hrmforce", description: "Koppel hrmforce aan je bestaande HR-stack via API of SSO: ATS, HRIS, payroll en identity. Tijdens de intake bepalen we samen welke koppelingen waarde toevoegen." },
    crumb: "Integraties",
    hero: {
      eyebrow: "Integraties",
      title: "Koppel hrmforce aan je bestaande HR-stack",
      intro: "hrmforce werkt naast de systemen die je al gebruikt. Via <strong>API of SSO</strong> laat je assessment- en talentdata meebewegen met je ATS, HRIS of payroll, zodat gegevens niet dubbel worden ingevoerd.",
      positioning: "Koppelbaar met de meeste HRIS-, ATS- en identity-systemen",
      cta: "Plan een demo",
    },
    categories: {
      eyebrow: "Categorieën",
      title: "Waar koppelt hrmforce mee?",
      items: [
        { icon: "🎯", title: "ATS / recruitment", text: "Zet assessments klaar vanuit je recruitmentsysteem en laat scores en rapportages terugvloeien naar het kandidaatdossier." },
        { icon: "🗂️", title: "HRIS / kernsysteem", text: "Houd medewerker- en functiegegevens in lijn met je HR-kernsysteem, zodat profielen en trajecten kloppen." },
        { icon: "💶", title: "Payroll / salaris", text: "Sluit aan op je salaris- en personeelsadministratie voor consistente stamgegevens over systemen heen." },
        { icon: "🔐", title: "SSO / identity", text: "Laat gebruikers inloggen met de identity-provider van je organisatie via single sign-on, met rolgebaseerd toegangsbeheer." },
      ],
    },
    examples: {
      eyebrow: "Voorbeelden",
      title: "Koppelbaar met o.a.",
      intro: "Afhankelijk van je situatie is hrmforce koppelbaar met veelgebruikte HR-systemen, onder andere:",
      items: ["AFAS", "Visma", "Nmbrs", "SAP SuccessFactors"],
      note: "Genoemde systemen zijn voorbeelden van koppelingen die mogelijk zijn; ze impliceren geen officieel partnerschap. Welke koppeling voor jou beschikbaar of zinvol is, bepalen we samen tijdens de intake.",
    },
    how: {
      eyebrow: "Hoe werkt het?",
      title: "Van intake tot werkende koppeling",
      steps: [
        { title: "1. Intake", text: "We brengen je bestaande HR-stack in kaart en bepalen welke koppelingen daadwerkelijk waarde toevoegen." },
        { title: "2. API of SSO", text: "Op basis daarvan kiezen we de juiste techniek: een API-koppeling voor datastromen of SSO voor toegang en identity." },
        { title: "3. Inrichten & testen", text: "We richten de koppeling in, testen de dataflow en zorgen dat rollen en rechten kloppen voordat je live gaat." },
      ],
      note: "Niet elke koppeling is voor elke organisatie zinvol. We adviseren alleen wat aantoonbaar tijd bespaart of fouten voorkomt.",
    },
    ctaBand: {
      title: "Benieuwd wat er in jouw situatie mogelijk is?",
      text: "Plan een demo of neem contact op. We kijken samen naar je HR-stack en welke koppelingen waarde toevoegen.",
      primary: "Neem contact op",
      secondary: "Bekijk de tarieven",
    },
  },
};

// EN/DE/FR/ES/RO erven de NL-structuur en overschrijven de teksten.
const clone = (o) => JSON.parse(JSON.stringify(o));

integratiesContent.en = clone(integratiesContent.nl);
Object.assign(integratiesContent.en.meta, { title: "Integrations - hrmforce", description: "Connect hrmforce to your existing HR stack via API or SSO: ATS, HRIS, payroll and identity. During the intake we decide together which integrations add value." });
integratiesContent.en.crumb = "Integrations";
Object.assign(integratiesContent.en.hero, { eyebrow: "Integrations", title: "Connect hrmforce to your existing HR stack", intro: "hrmforce works alongside the systems you already use. Via <strong>API or SSO</strong> your assessment and talent data stays in sync with your ATS, HRIS or payroll, so information isn't entered twice.", positioning: "Connectable with most HRIS, ATS and identity systems", cta: "Book a demo" });
Object.assign(integratiesContent.en.categories, { eyebrow: "Categories", title: "What does hrmforce connect with?" });
integratiesContent.en.categories.items = [
  { icon: "🎯", title: "ATS / recruitment", text: "Launch assessments from your recruitment system and let scores and reports flow back into the candidate file." },
  { icon: "🗂️", title: "HRIS / core system", text: "Keep employee and job data aligned with your HR core system, so profiles and journeys stay accurate." },
  { icon: "💶", title: "Payroll", text: "Connect to your payroll and HR administration for consistent master data across systems." },
  { icon: "🔐", title: "SSO / identity", text: "Let users sign in with your organisation's identity provider via single sign-on, with role-based access control." },
];
Object.assign(integratiesContent.en.examples, { eyebrow: "Examples", title: "Connectable with, among others", intro: "Depending on your situation, hrmforce can connect with widely used HR systems, including:", note: "The systems mentioned are examples of possible integrations; they do not imply an official partnership. Which integration is available or worthwhile for you is something we determine together during the intake." });
Object.assign(integratiesContent.en.how, { eyebrow: "How does it work?", title: "From intake to working integration" });
integratiesContent.en.how.steps = [
  { title: "1. Intake", text: "We map your existing HR stack and decide which integrations genuinely add value." },
  { title: "2. API or SSO", text: "Based on that we choose the right technique: an API integration for data flows or SSO for access and identity." },
  { title: "3. Set up & test", text: "We configure the integration, test the data flow and make sure roles and permissions are correct before you go live." },
];
integratiesContent.en.how.note = "Not every integration makes sense for every organisation. We only advise what demonstrably saves time or prevents errors.";
Object.assign(integratiesContent.en.ctaBand, { title: "Curious what's possible in your situation?", text: "Book a demo or get in touch. We'll look at your HR stack together and which integrations add value.", primary: "Get in touch", secondary: "View pricing" });

integratiesContent.de = clone(integratiesContent.nl);
Object.assign(integratiesContent.de.meta, { title: "Integrationen - hrmforce", description: "Verbinden Sie hrmforce über API oder SSO mit Ihrem bestehenden HR-Stack: ATS, HRIS, Payroll und Identity. Im Intake legen wir gemeinsam fest, welche Anbindungen einen Mehrwert bieten." });
integratiesContent.de.crumb = "Integrationen";
Object.assign(integratiesContent.de.hero, { eyebrow: "Integrationen", title: "Verbinden Sie hrmforce mit Ihrem bestehenden HR-Stack", intro: "hrmforce arbeitet neben den Systemen, die Sie bereits nutzen. Über <strong>API oder SSO</strong> bleiben Ihre Assessment- und Talentdaten mit Ihrem ATS, HRIS oder Payroll synchron, sodass Daten nicht doppelt erfasst werden.", positioning: "Anbindbar an die meisten HRIS-, ATS- und Identity-Systeme", cta: "Demo buchen" });
Object.assign(integratiesContent.de.categories, { eyebrow: "Kategorien", title: "Womit lässt sich hrmforce verbinden?" });
integratiesContent.de.categories.items = [
  { icon: "🎯", title: "ATS / Recruiting", text: "Starten Sie Assessments aus Ihrem Recruiting-System und lassen Sie Scores und Berichte in die Bewerberakte zurückfließen." },
  { icon: "🗂️", title: "HRIS / Kernsystem", text: "Halten Sie Mitarbeiter- und Stellendaten mit Ihrem HR-Kernsystem im Einklang, damit Profile und Prozesse stimmen." },
  { icon: "💶", title: "Payroll / Lohn", text: "Anbindung an Ihre Lohn- und Personaladministration für konsistente Stammdaten über Systeme hinweg." },
  { icon: "🔐", title: "SSO / Identity", text: "Lassen Sie Nutzer per Single Sign-on mit dem Identity-Provider Ihrer Organisation anmelden – mit rollenbasierter Zugriffssteuerung." },
];
Object.assign(integratiesContent.de.examples, { eyebrow: "Beispiele", title: "Anbindbar u. a. an", intro: "Je nach Situation lässt sich hrmforce mit gängigen HR-Systemen verbinden, darunter:", note: "Die genannten Systeme sind Beispiele für mögliche Anbindungen; sie implizieren keine offizielle Partnerschaft. Welche Anbindung für Sie verfügbar oder sinnvoll ist, legen wir gemeinsam im Intake fest." });
Object.assign(integratiesContent.de.how, { eyebrow: "Wie funktioniert das?", title: "Vom Intake zur funktionierenden Anbindung" });
integratiesContent.de.how.steps = [
  { title: "1. Intake", text: "Wir erfassen Ihren bestehenden HR-Stack und legen fest, welche Anbindungen tatsächlich einen Mehrwert bieten." },
  { title: "2. API oder SSO", text: "Darauf aufbauend wählen wir die passende Technik: eine API-Anbindung für Datenströme oder SSO für Zugriff und Identity." },
  { title: "3. Einrichten & testen", text: "Wir richten die Anbindung ein, testen den Datenfluss und stellen sicher, dass Rollen und Rechte stimmen, bevor Sie live gehen." },
];
integratiesContent.de.how.note = "Nicht jede Anbindung ist für jede Organisation sinnvoll. Wir empfehlen nur, was nachweislich Zeit spart oder Fehler vermeidet.";
Object.assign(integratiesContent.de.ctaBand, { title: "Neugierig, was in Ihrer Situation möglich ist?", text: "Buchen Sie eine Demo oder nehmen Sie Kontakt auf. Wir schauen gemeinsam auf Ihren HR-Stack und welche Anbindungen einen Mehrwert bieten.", primary: "Kontakt aufnehmen", secondary: "Preise ansehen" });

integratiesContent.fr = clone(integratiesContent.nl);
Object.assign(integratiesContent.fr.meta, { title: "Intégrations - hrmforce", description: "Connectez hrmforce à votre stack RH existant via API ou SSO : ATS, SIRH, paie et identité. Lors de l'intake, nous déterminons ensemble quelles intégrations apportent de la valeur." });
integratiesContent.fr.crumb = "Intégrations";
Object.assign(integratiesContent.fr.hero, { eyebrow: "Intégrations", title: "Connectez hrmforce à votre stack RH existant", intro: "hrmforce fonctionne aux côtés des systèmes que vous utilisez déjà. Via <strong>API ou SSO</strong>, vos données d'évaluation et de talents restent synchronisées avec votre ATS, SIRH ou paie, pour ne pas saisir les informations deux fois.", positioning: "Compatible avec la plupart des SIRH, ATS et systèmes d'identité", cta: "Réserver une démo" });
Object.assign(integratiesContent.fr.categories, { eyebrow: "Catégories", title: "Avec quoi hrmforce se connecte-t-il ?" });
integratiesContent.fr.categories.items = [
  { icon: "🎯", title: "ATS / recrutement", text: "Lancez des évaluations depuis votre système de recrutement et faites remonter les scores et rapports dans le dossier du candidat." },
  { icon: "🗂️", title: "SIRH / système central", text: "Gardez les données des collaborateurs et des postes alignées sur votre système RH central, pour des profils et des parcours corrects." },
  { icon: "💶", title: "Paie", text: "Connectez-vous à votre gestion de paie et du personnel pour des données de référence cohérentes entre les systèmes." },
  { icon: "🔐", title: "SSO / identité", text: "Laissez les utilisateurs se connecter avec le fournisseur d'identité de votre organisation via l'authentification unique, avec un contrôle d'accès basé sur les rôles." },
];
Object.assign(integratiesContent.fr.examples, { eyebrow: "Exemples", title: "Compatible notamment avec", intro: "Selon votre situation, hrmforce peut se connecter à des systèmes RH courants, notamment :", note: "Les systèmes mentionnés sont des exemples d'intégrations possibles ; ils n'impliquent pas de partenariat officiel. L'intégration disponible ou pertinente pour vous est déterminée ensemble lors de l'intake." });
Object.assign(integratiesContent.fr.how, { eyebrow: "Comment ça marche ?", title: "De l'intake à l'intégration opérationnelle" });
integratiesContent.fr.how.steps = [
  { title: "1. Intake", text: "Nous cartographions votre stack RH existant et déterminons quelles intégrations apportent réellement de la valeur." },
  { title: "2. API ou SSO", text: "Sur cette base, nous choisissons la bonne technique : une intégration API pour les flux de données ou le SSO pour l'accès et l'identité." },
  { title: "3. Mise en place et tests", text: "Nous configurons l'intégration, testons le flux de données et vérifions que les rôles et les droits sont corrects avant la mise en production." },
];
integratiesContent.fr.how.note = "Toutes les intégrations ne sont pas pertinentes pour chaque organisation. Nous ne recommandons que ce qui fait gagner du temps ou évite des erreurs de manière démontrable.";
Object.assign(integratiesContent.fr.ctaBand, { title: "Curieux de savoir ce qui est possible dans votre situation ?", text: "Réservez une démo ou contactez-nous. Nous examinons ensemble votre stack RH et les intégrations qui apportent de la valeur.", primary: "Nous contacter", secondary: "Voir les tarifs" });

integratiesContent.es = clone(integratiesContent.nl);
Object.assign(integratiesContent.es.meta, { title: "Integraciones - hrmforce", description: "Conecte hrmforce con su stack de RR. HH. existente mediante API o SSO: ATS, HRIS, nóminas e identidad. Durante la intake decidimos juntos qué integraciones aportan valor." });
integratiesContent.es.crumb = "Integraciones";
Object.assign(integratiesContent.es.hero, { eyebrow: "Integraciones", title: "Conecte hrmforce con su stack de RR. HH. existente", intro: "hrmforce funciona junto a los sistemas que ya utiliza. Mediante <strong>API o SSO</strong>, sus datos de evaluación y de talento se mantienen sincronizados con su ATS, HRIS o nómina, para no introducir la información dos veces.", positioning: "Conectable con la mayoría de sistemas HRIS, ATS e identidad", cta: "Reservar una demo" });
Object.assign(integratiesContent.es.categories, { eyebrow: "Categorías", title: "¿Con qué se conecta hrmforce?" });
integratiesContent.es.categories.items = [
  { icon: "🎯", title: "ATS / selección", text: "Lance evaluaciones desde su sistema de selección y haga que las puntuaciones e informes vuelvan al expediente del candidato." },
  { icon: "🗂️", title: "HRIS / sistema central", text: "Mantenga los datos de empleados y puestos alineados con su sistema central de RR. HH., para perfiles y trayectorias correctos." },
  { icon: "💶", title: "Nóminas", text: "Conéctese con su administración de nóminas y personal para datos maestros coherentes entre sistemas." },
  { icon: "🔐", title: "SSO / identidad", text: "Permita a los usuarios iniciar sesión con el proveedor de identidad de su organización mediante inicio de sesión único, con control de acceso basado en roles." },
];
Object.assign(integratiesContent.es.examples, { eyebrow: "Ejemplos", title: "Conectable, entre otros, con", intro: "Según su situación, hrmforce puede conectarse con sistemas de RR. HH. de uso común, entre ellos:", note: "Los sistemas mencionados son ejemplos de integraciones posibles; no implican una asociación oficial. Qué integración está disponible o resulta útil para usted lo determinamos juntos durante la intake." });
Object.assign(integratiesContent.es.how, { eyebrow: "¿Cómo funciona?", title: "De la intake a la integración operativa" });
integratiesContent.es.how.steps = [
  { title: "1. Intake", text: "Mapeamos su stack de RR. HH. existente y decidimos qué integraciones aportan valor de verdad." },
  { title: "2. API o SSO", text: "En base a ello elegimos la técnica adecuada: una integración API para los flujos de datos o SSO para el acceso y la identidad." },
  { title: "3. Configurar y probar", text: "Configuramos la integración, probamos el flujo de datos y comprobamos que los roles y permisos son correctos antes de salir en producción." },
];
integratiesContent.es.how.note = "No todas las integraciones tienen sentido para cada organización. Solo recomendamos lo que demostrablemente ahorra tiempo o evita errores.";
Object.assign(integratiesContent.es.ctaBand, { title: "¿Con curiosidad por saber qué es posible en su caso?", text: "Reserve una demo o póngase en contacto. Analizamos juntos su stack de RR. HH. y qué integraciones aportan valor.", primary: "Contactar", secondary: "Ver tarifas" });

integratiesContent.ro = clone(integratiesContent.nl);
Object.assign(integratiesContent.ro.meta, { title: "Integrări - hrmforce", description: "Conectați hrmforce la stiva HR existentă prin API sau SSO: ATS, HRIS, salarizare și identitate. În cadrul intake-ului stabilim împreună ce integrări aduc valoare." });
integratiesContent.ro.crumb = "Integrări";
Object.assign(integratiesContent.ro.hero, { eyebrow: "Integrări", title: "Conectați hrmforce la stiva HR existentă", intro: "hrmforce funcționează alături de sistemele pe care le folosiți deja. Prin <strong>API sau SSO</strong>, datele de evaluare și de talent rămân sincronizate cu ATS-ul, HRIS-ul sau salarizarea, astfel încât informațiile să nu fie introduse de două ori.", positioning: "Conectabil cu majoritatea sistemelor HRIS, ATS și de identitate", cta: "Programați o demonstrație" });
Object.assign(integratiesContent.ro.categories, { eyebrow: "Categorii", title: "Cu ce se conectează hrmforce?" });
integratiesContent.ro.categories.items = [
  { icon: "🎯", title: "ATS / recrutare", text: "Lansați evaluări din sistemul de recrutare și faceți ca scorurile și rapoartele să revină în dosarul candidatului." },
  { icon: "🗂️", title: "HRIS / sistem central", text: "Păstrați datele despre angajați și posturi aliniate cu sistemul HR central, pentru profiluri și parcursuri corecte." },
  { icon: "💶", title: "Salarizare", text: "Conectați-vă la administrarea de salarizare și personal pentru date de referință coerente între sisteme." },
  { icon: "🔐", title: "SSO / identitate", text: "Permiteși utilizatorilor să se autentifice cu furnizorul de identitate al organizației prin single sign-on, cu control al accesului bazat pe roluri." },
];
Object.assign(integratiesContent.ro.examples, { eyebrow: "Exemple", title: "Conectabil, printre altele, cu", intro: "În funcție de situația dvs., hrmforce se poate conecta cu sisteme HR utilizate frecvent, printre care:", note: "Sistemele menționate sunt exemple de integrări posibile; nu implică un parteneriat oficial. Ce integrare este disponibilă sau utilă pentru dvs. stabilim împreună în cadrul intake-ului." });
Object.assign(integratiesContent.ro.how, { eyebrow: "Cum funcționează?", title: "De la intake la o integrare funcțională" });
integratiesContent.ro.how.steps = [
  { title: "1. Intake", text: "Cartografiem stiva HR existentă și stabilim ce integrări aduc cu adevărat valoare." },
  { title: "2. API sau SSO", text: "Pe baza acestora alegem tehnica potrivită: o integrare API pentru fluxurile de date sau SSO pentru acces și identitate." },
  { title: "3. Configurare și testare", text: "Configurăm integrarea, testăm fluxul de date și ne asigurăm că rolurile și permisiunile sunt corecte înainte de lansare." },
];
integratiesContent.ro.how.note = "Nu orice integrare are sens pentru orice organizație. Recomandăm doar ceea ce economisește timp sau previne erori în mod demonstrabil.";
Object.assign(integratiesContent.ro.ctaBand, { title: "Curioși ce este posibil în situația dvs.?", text: "Programați o demonstrație sau contactați-ne. Analizăm împreună stiva HR și ce integrări aduc valoare.", primary: "Contactați-ne", secondary: "Vedeți tarifele" });
