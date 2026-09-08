// Live Assessments (door assessoren begeleide assessment-diensten).
// Overgenomen van hrmforce.com/advies/assessments/ ("De 5 verschillende
// assessment opties"). Per taal, met gelokaliseerde doel-links.

export const LA_UI = {
  nl: { eyebrow: "Advies", h1: "Live Assessments", lead: "Een assessment is een belangrijk hulpmiddel voor de juiste beslissing bij selectie en ontwikkeling. Onze assessoren begeleiden je live: van praktijksimulaties en capaciteitentests tot persoonlijkheidsvragenlijsten. Zo krijg je inzicht dat anders verborgen blijft.", secTitle: "De assessment-opties", secLead: "Kies de assessmentvorm die past bij je vraagstuk. Klik door voor de uitleg.", more: "Meer informatie", slider: "Organisaties die u voorgingen", ctaTitle: "Niet zeker welk assessment past?", ctaText: "Onze assessoren denken met je mee en stellen het traject samen op basis van jouw doel en functie.", ctaBtn1: "Plan een gratis demo", ctaBtn2: "Naar het volledige overzicht" },
  en: { eyebrow: "Advice", h1: "Live Assessments", lead: "An assessment is a key tool for making the right decision in selection and development. Our assessors guide you live: from practical simulations and ability tests to personality questionnaires. This reveals insight that would otherwise stay hidden.", secTitle: "The assessment options", secLead: "Choose the assessment format that fits your challenge. Click through for details.", more: "More information", slider: "Organisations that went before you", ctaTitle: "Not sure which assessment fits?", ctaText: "Our assessors think along with you and compose the track based on your goal and role.", ctaBtn1: "Book a free demo", ctaBtn2: "See the full overview" },
  de: { eyebrow: "Beratung", h1: "Live Assessments", lead: "Ein Assessment ist ein wichtiges Hilfsmittel für die richtige Entscheidung bei Auswahl und Entwicklung. Unsere Assessoren begleiten Sie live: von Praxissimulationen und Leistungstests bis zu Persönlichkeitsfragebögen. So gewinnen Sie Einblicke, die sonst verborgen bleiben.", secTitle: "Die Assessment-Optionen", secLead: "Wählen Sie das Assessment-Format, das zu Ihrer Fragestellung passt. Klicken Sie für Details.", more: "Mehr Informationen", slider: "Organisationen, die vor Ihnen kamen", ctaTitle: "Unsicher, welches Assessment passt?", ctaText: "Unsere Assessoren denken mit und stellen den Weg auf Basis Ihres Ziels und Ihrer Rolle zusammen.", ctaBtn1: "Kostenlose Demo buchen", ctaBtn2: "Zur vollständigen Übersicht" },
  fr: { eyebrow: "Conseil", h1: "Live Assessments", lead: "Une évaluation est un outil clé pour prendre la bonne décision en matière de sélection et de développement. Nos assesseurs vous accompagnent en direct : des simulations pratiques et tests d'aptitude aux questionnaires de personnalité. Cela révèle des informations autrement invisibles.", secTitle: "Les options d'évaluation", secLead: "Choisissez le format d'évaluation adapté à votre problématique. Cliquez pour les détails.", more: "Plus d'informations", slider: "Les organisations qui vous ont précédé", ctaTitle: "Vous ne savez pas quelle évaluation choisir ?", ctaText: "Nos assesseurs réfléchissent avec vous et composent le parcours selon votre objectif et votre poste.", ctaBtn1: "Réserver une démo gratuite", ctaBtn2: "Voir l'aperçu complet" },
  es: { eyebrow: "Asesoría", h1: "Live Assessments", lead: "Una evaluación es una herramienta clave para tomar la decisión correcta en selección y desarrollo. Nuestros asesores te acompañan en directo: desde simulaciones prácticas y pruebas de aptitud hasta cuestionarios de personalidad. Así se revela información que de otro modo permanece oculta.", secTitle: "Las opciones de evaluación", secLead: "Elige el formato de evaluación que se ajuste a tu necesidad. Haz clic para más detalles.", more: "Más información", slider: "Organizaciones que te precedieron", ctaTitle: "¿No sabes qué evaluación encaja?", ctaText: "Nuestros asesores piensan contigo y componen el trayecto según tu objetivo y puesto.", ctaBtn1: "Reserva una demo gratuita", ctaBtn2: "Ver el resumen completo" },
  ro: { eyebrow: "Consultanță", h1: "Live Assessments", lead: "O evaluare este un instrument esențial pentru decizia corectă în selecție și dezvoltare. Asesorii noștri te ghidează live: de la simulări practice și teste de aptitudini la chestionare de personalitate. Astfel obții informații care altfel rămân ascunse.", secTitle: "Opțiunile de evaluare", secLead: "Alege formatul de evaluare potrivit nevoii tale. Dă clic pentru detalii.", more: "Mai multe informații", slider: "Organizații care te-au precedat", ctaTitle: "Nu ești sigur ce evaluare se potrivește?", ctaText: "Asesorii noștri gândesc împreună cu tine și compun traseul în funcție de obiectivul și postul tău.", ctaBtn1: "Programează un demo gratuit", ctaBtn2: "Vezi prezentarea completă" },
};

// hrefKey wordt met localizePath omgezet naar de juiste taal.
export const LA_OPTIONS = [
  {
    key: "e-assessment", href: "/online-assessments/",
    title: { nl: "E-Assessment", en: "E-Assessment", de: "E-Assessment", fr: "E-Assessment", es: "E-Assessment", ro: "E-Assessment" },
    desc: {
      nl: "Volledig online assessment dat kandidaten zelfstandig maken, met directe, objectieve rapportages.",
      en: "Fully online assessment candidates complete independently, with instant, objective reports.",
      de: "Vollständig online durchgeführtes Assessment mit sofortigen, objektiven Berichten.",
      fr: "Évaluation entièrement en ligne réalisée en autonomie, avec des rapports instantanés et objectifs.",
      es: "Evaluación totalmente online que los candidatos completan de forma autónoma, con informes objetivos e inmediatos.",
      ro: "Evaluare complet online pe care candidații o completează autonom, cu rapoarte imediate și obiective.",
    },
  },
  {
    key: "selectie-assessment", href: "/hrm-oplossingen/matching/",
    title: { nl: "Selectie Assessment", en: "Selection Assessment", de: "Auswahl-Assessment", fr: "Évaluation de sélection", es: "Assessment de selección", ro: "Assessment de selecție" },
    desc: {
      nl: "Onderbouw je selectiebeslissing en verhoog de kans op productieve, passende medewerkers.",
      en: "Underpin your selection decision and increase the chance of productive, well-matched employees.",
      de: "Untermauern Sie Ihre Auswahlentscheidung und erhöhen Sie die Chance auf passende, produktive Mitarbeiter.",
      fr: "Étayez votre décision de sélection et augmentez les chances d'avoir des collaborateurs productifs et adaptés.",
      es: "Fundamenta tu decisión de selección y aumenta la probabilidad de empleados productivos y adecuados.",
      ro: "Fundamentează decizia de selecție și crește șansa unor angajați productivi și potriviți.",
    },
  },
  {
    key: "ontwikkel-assessment", href: "/assessments/ontwikkelassessment/",
    title: { nl: "Ontwikkel Assessment / Potentieelbeoordeling", en: "Development Assessment / Potential review", de: "Entwicklungs-Assessment / Potenzialbeurteilung", fr: "Évaluation de développement / Potentiel", es: "Assessment de desarrollo / Evaluación de potencial", ro: "Assessment de dezvoltare / Evaluarea potențialului" },
    desc: {
      nl: "Breng ontwikkelpotentieel in kaart en geef gerichte richting aan groei en loopbaan.",
      en: "Map development potential and give targeted direction to growth and career.",
      de: "Erfassen Sie das Entwicklungspotenzial und geben Sie Wachstum und Laufbahn gezielt Richtung.",
      fr: "Cartographiez le potentiel de développement et orientez la croissance et la carrière.",
      es: "Mapea el potencial de desarrollo y da dirección al crecimiento y la carrera.",
      ro: "Cartografiază potentialul de dezvoltare și oferă direcție creșterii și carierei.",
    },
  },
  {
    key: "loopbaan-assessment", href: "/assessments/loopbaanwaarden/",
    title: { nl: "Loopbaan Assessment", en: "Career Assessment", de: "Laufbahn-Assessment", fr: "Évaluation de carrière", es: "Assessment de carrera", ro: "Assessment de carieră" },
    desc: {
      nl: "Gericht op de vraag 'wat wil ik?': van interesses en drijfveren naar passende loopbaankeuzes.",
      en: "Focused on 'what do I want?': from interests and drives to fitting career choices.",
      de: "Fokus auf 'was will ich?': von Interessen und Antrieben zu passenden Laufbahnentscheidungen.",
      fr: "Centré sur 'que veux-je ?' : des intérêts et moteurs vers des choix de carrière adaptés.",
      es: "Centrado en '¿qué quiero?': de intereses y motivaciones a decisiones de carrera adecuadas.",
      ro: "Concentrat pe 'ce vreau?': de la interese și motivații la alegeri de carieră potrivite.",
    },
  },
  {
    key: "executive-assessment", href: "/contact/",
    title: { nl: "Executive Assessment", en: "Executive Assessment", de: "Executive Assessment", fr: "Executive Assessment", es: "Executive Assessment", ro: "Executive Assessment" },
    desc: {
      nl: "Diepgaand assessment op maat voor management- en directiefuncties, met persoonlijke terugkoppeling.",
      en: "In-depth bespoke assessment for management and executive roles, with personal feedback.",
      de: "Tiefgehendes maßgeschneidertes Assessment für Management- und Führungspositionen, mit persönlicher Rückmeldung.",
      fr: "Évaluation approfondie sur mesure pour les postes de direction, avec restitution personnelle.",
      es: "Assessment a medida y en profundidad para puestos directivos, con devolución personal.",
      ro: "Assessment aprofundat, personalizat, pentru poziții de management, cu feedback personal.",
    },
  },
  {
    key: "teamanalyse", href: "/assessments/teamanalyse/",
    title: { nl: "Teamanalyse / Groepsassessment", en: "Team analysis / Group assessment", de: "Teamanalyse / Gruppen-Assessment", fr: "Analyse d'équipe / Évaluation de groupe", es: "Análisis de equipo / Assessment grupal", ro: "Analiză de echipă / Assessment de grup" },
    desc: {
      nl: "Maak talenten en ontwikkelpunten van een team zichtbaar en versterk de samenwerking.",
      en: "Make a team's talents and development points visible and strengthen collaboration.",
      de: "Machen Sie Talente und Entwicklungspunkte eines Teams sichtbar und stärken Sie die Zusammenarbeit.",
      fr: "Rendez visibles les talents et points de développement d'une équipe et renforcez la collaboration.",
      es: "Haz visibles los talentos y puntos de desarrollo de un equipo y refuerza la colaboración.",
      ro: "Fă vizibile talentele și punctele de dezvoltare ale unei echipe și întărește colaborarea.",
    },
  },
];

export function liveAssessmentsFor(lang) {
  const ui = LA_UI[lang] || LA_UI.nl;
  const L = (o) => o[lang] || o.nl;
  return { ui, options: LA_OPTIONS.map((o) => ({ key: o.key, href: o.href, title: L(o.title), desc: L(o.desc) })) };
}
