// Meertalige navigatie. 5 hoofdmenu-items: Assessments, Oplossingen, Tarieven,
// Kennisbank, Over ons. Paden zijn taal-onafhankelijk (navHref zet de taalprefix
// erop of valt terug op NL). Alleen de labels verschillen per taal.

const A = {
  assessments: [
    { p: "/assessments/360-graden-feedback/" },
    { p: "/assessments/big-five/" },
    { p: "/assessments/drijfverentest/" },
    { p: "/assessments/ability-scan/" },
    { p: "/assessments/disc-test/" },
    { p: "/assessments/studiekeuzetest/" },
    { p: "/assessments/mentale-veerkracht-scan/" },
    { p: "/assessments/lencioni-teamdynamiek/" },
    { p: "/assessments/leiderschapstest/" },
    { p: "/assessments/ontwikkelassessment/" },
    { p: "/assessment-overzicht/" },
    { p: "/shop/" },
  ],
  software: ["/hrm-oplossingen/matching/", "/hrm-oplossingen/development/", "/hrm-oplossingen/employability/", "/hrm-oplossingen/hr-analytics/"],
  advies: ["/advies/", "/advies/trainingen/", "/advies/competentie-management/", "/advies/talent-management/"],
  meer: ["/integraties/", "/sectoren/"],
  kennisbank: ["/kenniscentrum/", "/klantcases/", "/roi-rekentool/", "/voorbereiding/", "/support/f-a-q/"],
  about: ["/over-ons/", "/trust/", "/partners/", "/vacatures/", "/contact/"],
};

const LABELS = {
  nl: {
    nav: { assessments: "Assessments", solutions: "Oplossingen", tarieven: "Tarieven", kennisbank: "Kennisbank", about: "Over ons" },
    demo: "Gratis demo", contact: "Contact",
    groups: { software: "Software", advies: "Advies & trainingen", meer: "Meer" },
    assessments: ["360 graden feedback", "Persoonlijkheidstest (Big 5)", "Drijfverentest", "Cognitieve test", "DISC Test", "Studiekeuzetest", "Mentale veerkracht scan", "Lencioni Teamdynamiek", "Leiderschapstest", "Ontwikkelassessment", "Ontdek alle assessments", "Shop"],
    software: ["Matching & selectie", "HR-gesprekscyclus", "Employability", "HR-analytics"],
    advies: ["Adviestrajecten", "Trainingen", "Competentiemanagement", "Talentmanagement"],
    meer: ["Integraties", "Sectoren"],
    kennisbank: ["Kenniscentrum", "Klantcases", "ROI-rekentool", "Voorbereiding", "FAQ"],
    about: ["Over hrmforce", "Trust & security", "Partners", "Vacatures", "Contact"],
  },
  en: {
    nav: { assessments: "Assessments", solutions: "Solutions", tarieven: "Pricing", kennisbank: "Knowledge base", about: "About us" },
    demo: "Free demo", contact: "Contact",
    groups: { software: "Software", advies: "Advice & training", meer: "More" },
    assessments: ["360-degree feedback", "Personality test (Big 5)", "Motivational drivers test", "Cognitive ability test", "DISC test", "Study choice test", "Mental resilience scan", "Lencioni team dynamics", "Leadership test", "Development assessment", "Discover all assessments", "Shop"],
    software: ["Matching & selection", "HR review cycle", "Employability", "HR analytics"],
    advies: ["Advisory tracks", "Training", "Competency management", "Talent management"],
    meer: ["Integrations", "Sectors"],
    kennisbank: ["Knowledge centre", "Client cases", "ROI calculator", "Preparation", "FAQ"],
    about: ["About hrmforce", "Trust & security", "Partners", "Careers", "Contact"],
  },
  de: {
    nav: { assessments: "Assessments", solutions: "Lösungen", tarieven: "Preise", kennisbank: "Wissensdatenbank", about: "Über uns" },
    demo: "Kostenlose Demo", contact: "Kontakt",
    groups: { software: "Software", advies: "Beratung & Schulungen", meer: "Mehr" },
    assessments: ["360-Grad-Feedback", "Persönlichkeitstest (Big 5)", "Motivationstest", "Kognitiver Test", "DISC-Test", "Studienwahltest", "Scan mentale Widerstandskraft", "Lencioni Teamdynamik", "Führungstest", "Entwicklungsassessment", "Alle Assessments entdecken", "Shop"],
    software: ["Matching & Auswahl", "HR-Gesprächszyklus", "Beschäftigungsfähigkeit", "HR-Analytik"],
    advies: ["Beratungswege", "Schulungen", "Kompetenzmanagement", "Talentmanagement"],
    meer: ["Integrationen", "Branchen"],
    kennisbank: ["Wissenszentrum", "Kundenreferenzen", "ROI-Rechner", "Vorbereitung", "FAQ"],
    about: ["Über hrmforce", "Trust & Security", "Partner", "Stellenangebote", "Kontakt"],
  },
  fr: {
    nav: { assessments: "Évaluations", solutions: "Solutions", tarieven: "Tarifs", kennisbank: "Base de connaissances", about: "À propos" },
    demo: "Démo gratuite", contact: "Contact",
    groups: { software: "Logiciel", advies: "Conseil & formations", meer: "Plus" },
    assessments: ["Feedback à 360 degrés", "Test de personnalité (Big 5)", "Test des motivations", "Test cognitif", "Test DISC", "Test d'orientation", "Scan de résilience mentale", "Dynamique d'équipe Lencioni", "Test de leadership", "Évaluation de développement", "Découvrir toutes les évaluations", "Boutique"],
    software: ["Matching & sélection", "Cycle d'entretiens RH", "Employabilité", "Analytique RH"],
    advies: ["Parcours de conseil", "Formations", "Gestion des compétences", "Gestion des talents"],
    meer: ["Intégrations", "Secteurs"],
    kennisbank: ["Centre de connaissances", "Cas clients", "Calculateur de ROI", "Préparation", "FAQ"],
    about: ["À propos de hrmforce", "Confiance & sécurité", "Partenaires", "Carrières", "Contact"],
  },
  es: {
    nav: { assessments: "Evaluaciones", solutions: "Soluciones", tarieven: "Precios", kennisbank: "Base de conocimiento", about: "Sobre nosotros" },
    demo: "Prueba gratis", contact: "Contacto",
    groups: { software: "Software", advies: "Asesoría y formación", meer: "Más" },
    assessments: ["Feedback de 360 grados", "Test de personalidad (Big 5)", "Test de motivaciones", "Test cognitivo", "Test DISC", "Test de orientación académica", "Escáner de resiliencia mental", "Dinámica de equipo Lencioni", "Test de liderazgo", "Evaluación de desarrollo", "Descubrir todas las evaluaciones", "Shop"],
    software: ["Matching y selección", "Ciclo de entrevistas de RR. HH.", "Empleabilidad", "Analítica de RR. HH."],
    advies: ["Trayectos de asesoría", "Formación", "Gestión de competencias", "Gestión del talento"],
    meer: ["Integraciones", "Sectores"],
    kennisbank: ["Centro de conocimiento", "Casos de clientes", "Calculadora de ROI", "Preparación", "FAQ"],
    about: ["Sobre hrmforce", "Confianza y seguridad", "Socios", "Vacantes", "Contacto"],
  },
  ro: {
    nav: { assessments: "Evaluări", solutions: "Soluții", tarieven: "Prețuri", kennisbank: "Bază de cunoștințe", about: "Despre noi" },
    demo: "Demo gratuită", contact: "Contact",
    groups: { software: "Software", advies: "Consultanță & cursuri", meer: "Mai mult" },
    assessments: ["Feedback 360 de grade", "Test de personalitate (Big 5)", "Test al motivațiilor", "Test cognitiv", "Test DISC", "Test de orientare în studii", "Scanare a rezilienței mentale", "Dinamica echipei Lencioni", "Test de leadership", "Evaluare de dezvoltare", "Descoperiți toate evaluările", "Shop"],
    software: ["Matching și selecție", "Ciclul de evaluări HR", "Angajabilitate", "Analiză HR"],
    advies: ["Trasee de consultanță", "Cursuri", "Managementul competențelor", "Managementul talentelor"],
    meer: ["Integrări", "Sectoare"],
    kennisbank: ["Centru de cunoștințe", "Studii de caz", "Calculator ROI", "Pregătire", "FAQ"],
    about: ["Despre hrmforce", "Încredere și securitate", "Parteneri", "Cariere", "Contact"],
  },
};

// Bouwt de volledige navigatiestructuur voor de gekozen taal.
export function navFor(lang) {
  const L = LABELS[lang] || LABELS.nl;
  const zip = (paths, labels) => paths.map((p, i) => ({ path: p.p || p, label: labels[i] }));
  return {
    labels: L.nav,
    demo: L.demo,
    contact: L.contact,
    assessments: zip(A.assessments, L.assessments),
    solutions: [
      { title: L.groups.software, items: zip(A.software, L.software) },
      { title: L.groups.advies, items: zip(A.advies, L.advies) },
      { title: L.groups.meer, items: zip(A.meer, L.meer) },
    ],
    kennisbank: zip(A.kennisbank, L.kennisbank),
    about: zip(A.about, L.about),
  };
}
