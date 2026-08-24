// Meertalige labels voor de dropdown-submenu's in de header.
// De paden zijn taal-onafhankelijk (navHref zet de juiste taalprefix erop);
// alleen de labels verschillen per taal.

const PATHS = {
  assessments: [
    "/assessments/360-graden-feedback/",
    "/assessments/big-five/",
    "/assessments/drijfverentest/",
    "/assessments/ability-scan/",
    "/assessments/disc-test/",
    "/assessments/studiekeuzetest/",
    "/assessments/mentale-veerkracht-scan/",
    "/assessments/lencioni-teamdynamiek/",
    "/assessments/leiderschapstest/",
    "/assessments/ontwikkelassessment/",
    "/assessment-overzicht/",
  ],
  solutions: [
    "/hrm-oplossingen/matching/",
    "/hrm-oplossingen/development/",
    "/hrm-oplossingen/employability/",
    "/hrm-oplossingen/hr-analytics/",
    "/integraties/",
    "/sectoren/",
  ],
  advice: [
    "/advies/overzicht/",
    "/advies/assessments/",
    "/advies/trainingen/",
    "/advies/competentie-management/",
    "/advies/talent-management/",
  ],
  about: [
    "/over-ons/",
    "/tarieven/",
    "/roi-rekentool/",
    "/klantcases/",
    "/kenniscentrum/",
    "/trust/",
    "/hrmforce/voordelen/",
    "/partners/",
    "/vacatures/",
  ],
  contact: [
    "/contact/",
    "/support/",
    "/voorbereiding/",
    "/support/f-a-q/",
    "/vacatures/",
  ],
};

const LABELS = {
  nl: {
    assessments: ["360 graden feedback", "Persoonlijkheidstest (Big 5)", "Drijfverentest", "Cognitieve test", "DISC Test", "Studiekeuzetest", "Mentale veerkracht scan", "Lencioni Teamdynamiek", "Leiderschapstest", "Ontwikkelassessment", "Ontdek alle assessments"],
    solutions: ["Matching & selectie", "HR Gesprekcyclus", "Employability", "HR Analytics", "Integraties", "Sectoren"],
    advice: ["Overzicht", "Assessments", "Trainingen", "Competentiemanagement", "Talentmanagement"],
    about: ["Over hrmforce", "Tarieven", "ROI-rekentool", "Klantcases", "Kenniscentrum", "Trust & security", "Wat levert het concreet op?", "Partners", "Vacatures"],
    contact: ["Contact opnemen", "Support", "Voorbereiding", "FAQ", "Vacatures"],
  },
  en: {
    assessments: ["360-degree feedback", "Personality test (Big 5)", "Motivational drivers test", "Cognitive ability test", "DISC test", "Study choice test", "Mental resilience scan", "Lencioni team dynamics", "Leadership test", "Development assessment", "Discover all assessments"],
    solutions: ["Matching & selection", "HR review cycle", "Employability", "HR analytics", "Integrations", "Sectors"],
    advice: ["Overview", "Assessments", "Training", "Competency management", "Talent management"],
    about: ["About hrmforce", "Pricing", "ROI calculator", "Client cases", "Knowledge centre", "Trust & security", "What are the concrete benefits?", "Partners", "Careers"],
    contact: ["Get in touch", "Support", "Preparation", "FAQ", "Careers"],
  },
  de: {
    assessments: ["360-Grad-Feedback", "Persönlichkeitstest (Big 5)", "Motivationstest", "Kognitiver Test", "DISC-Test", "Studienwahltest", "Scan mentale Widerstandskraft", "Lencioni Teamdynamik", "Führungstest", "Entwicklungsassessment", "Alle Assessments entdecken"],
    solutions: ["Matching & Auswahl", "HR-Gesprächszyklus", "Beschäftigungsfähigkeit", "HR-Analytik", "Integrationen", "Branchen"],
    advice: ["Übersicht", "Assessments", "Schulungen", "Kompetenzmanagement", "Talentmanagement"],
    about: ["Über hrmforce", "Preise", "ROI-Rechner", "Kundenreferenzen", "Wissenszentrum", "Trust & Security", "Was bringt es konkret?", "Partner", "Stellenangebote"],
    contact: ["Kontakt aufnehmen", "Support", "Vorbereitung", "FAQ", "Stellenangebote"],
  },
  fr: {
    assessments: ["Feedback à 360 degrés", "Test de personnalité (Big 5)", "Test des motivations", "Test cognitif", "Test DISC", "Test d'orientation", "Scan de résilience mentale", "Dynamique d'équipe Lencioni", "Test de leadership", "Évaluation de développement", "Découvrir toutes les évaluations"],
    solutions: ["Matching & sélection", "Cycle d'entretiens RH", "Employabilité", "Analytique RH", "Intégrations", "Secteurs"],
    advice: ["Aperçu", "Évaluations", "Formations", "Gestion des compétences", "Gestion des talents"],
    about: ["À propos de hrmforce", "Tarifs", "Calculateur de ROI", "Cas clients", "Centre de connaissances", "Confiance & sécurité", "Quels bénéfices concrets ?", "Partenaires", "Carrières"],
    contact: ["Nous contacter", "Support", "Préparation", "FAQ", "Carrières"],
  },
  es: {
    assessments: ["Feedback de 360 grados", "Test de personalidad (Big 5)", "Test de motivaciones", "Test cognitivo", "Test DISC", "Test de orientación académica", "Escáner de resiliencia mental", "Dinámica de equipo Lencioni", "Test de liderazgo", "Evaluación de desarrollo", "Descubrir todas las evaluaciones"],
    solutions: ["Matching y selección", "Ciclo de entrevistas de RR. HH.", "Empleabilidad", "Analítica de RR. HH.", "Integraciones", "Sectores"],
    advice: ["Resumen", "Evaluaciones", "Cursos", "Gestión de competencias", "Gestión del talento"],
    about: ["Sobre hrmforce", "Precios", "Calculadora de ROI", "Casos de clientes", "Centro de conocimiento", "Confianza y seguridad", "¿Qué beneficios concretos aporta?", "Socios", "Vacantes"],
    contact: ["Contactar", "Ayuda", "Preparación", "FAQ", "Vacantes"],
  },
  ro: {
    assessments: ["Feedback 360 de grade", "Test de personalitate (Big 5)", "Test al motivațiilor", "Test cognitiv", "Test DISC", "Test de orientare în studii", "Scanare a rezilienței mentale", "Dinamica echipei Lencioni", "Test de leadership", "Evaluare de dezvoltare", "Descoperiți toate evaluările"],
    solutions: ["Matching și selecție", "Ciclul de evaluări HR", "Angajabilitate", "Analiză HR", "Integrări", "Sectoare"],
    advice: ["Prezentare generală", "Evaluări", "Cursuri", "Managementul competențelor", "Managementul talentelor"],
    about: ["Despre hrmforce", "Prețuri", "Calculator ROI", "Studii de caz", "Centru de cunoștințe", "Încredere și securitate", "Ce beneficii concrete aduce?", "Parteneri", "Cariere"],
    contact: ["Contactați-ne", "Asistență", "Pregătire", "FAQ", "Cariere"],
  },
};

// Bouwt de submenu-items ({label, path}) voor de gekozen taal.
export function menuFor(lang) {
  const lab = LABELS[lang] || LABELS.nl;
  const build = (section) => PATHS[section].map((path, i) => ({ path, label: lab[section][i] }));
  return {
    assessments: build("assessments"),
    solutions: build("solutions"),
    advice: build("advice"),
    about: build("about"),
    contact: build("contact"),
  };
}
