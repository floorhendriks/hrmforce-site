// Extra detail-content per assessment: portaalnaam (alias) en aanvullende
// blokken zoals rapportagemogelijkheden, beheersingsniveaus en maatwerkmodel.
// Alleen feitelijke, door hrmforce aangeleverde informatie.

export const detailExtra = {
  "big-five": {
    alias: { nl: "Big Fifty Personality", en: "Big Fifty Personality", de: "Big Fifty Personality", fr: "Big Fifty Personality", es: "Big Fifty Personality", ro: "Big Fifty Personality" },
    aliasNote: {
      nl: "Bij hrmforce heet deze persoonlijkheidstest de <strong>Big Fifty Personality</strong>.",
      en: "At hrmforce this personality test is called the <strong>Big Fifty Personality</strong>.",
      de: "Bei hrmforce heißt dieser Persönlichkeitstest <strong>Big Fifty Personality</strong>.",
      fr: "Chez hrmforce, ce test de personnalité s'appelle la <strong>Big Fifty Personality</strong>.",
      es: "En hrmforce esta prueba de personalidad se llama <strong>Big Fifty Personality</strong>.",
      ro: "La hrmforce acest test de personalitate se numește <strong>Big Fifty Personality</strong>.",
    },
    blocks: [
      {
        type: "list",
        title: { nl: "Rapportagemogelijkheden", en: "Reporting options", de: "Berichtsoptionen", fr: "Options de rapport", es: "Opciones de informe", ro: "Opțiuni de raportare" },
        lead: {
          nl: "Vanuit één afname kies je de rapportage die past bij je doel:",
          en: "From a single assessment you choose the report that fits your goal:",
          de: "Aus einer einzigen Durchführung wählen Sie den Bericht, der zu Ihrem Ziel passt:",
          fr: "À partir d'une seule passation, vous choisissez le rapport adapté à votre objectif :",
          es: "A partir de una sola aplicación eliges el informe que se ajusta a tu objetivo:",
          ro: "Dintr-o singură aplicare alegi raportul potrivit obiectivului tău:",
        },
        items: {
          nl: ["Signalenrapport: snelle signalen en aandachtspunten", "Persoonlijk rapport: uitgebreid beeld van de persoonlijkheid", "Competentierapport: vertaling naar werkgerelateerde competenties", "Verbindend leiderschap: inzicht in leiderschaps- en samenwerkingsstijl", "Teamflow: hoe iemand bijdraagt aan de dynamiek van een team"],
          en: ["Signals report: quick signals and points of attention", "Personal report: an extensive picture of the personality", "Competency report: translation into work-related competencies", "Connective leadership: insight into leadership and collaboration style", "Team flow: how someone contributes to team dynamics"],
          de: ["Signalbericht: schnelle Signale und Aufmerksamkeitspunkte", "Persönlicher Bericht: umfassendes Bild der Persönlichkeit", "Kompetenzbericht: Übersetzung in arbeitsbezogene Kompetenzen", "Verbindende Führung: Einblick in Führungs- und Kooperationsstil", "Teamflow: wie jemand zur Teamdynamik beiträgt"],
          fr: ["Rapport de signaux : signaux rapides et points d'attention", "Rapport personnel : image complète de la personnalité", "Rapport de compétences : traduction en compétences professionnelles", "Leadership fédérateur : aperçu du style de leadership et de collaboration", "Team flow : comment une personne contribue à la dynamique d'équipe"],
          es: ["Informe de señales: señales rápidas y puntos de atención", "Informe personal: una imagen amplia de la personalidad", "Informe de competencias: traducción a competencias laborales", "Liderazgo conector: perspectiva del estilo de liderazgo y colaboración", "Team flow: cómo contribuye alguien a la dinámica del equipo"],
          ro: ["Raport de semnale: semnale rapide și puncte de atenție", "Raport personal: o imagine amplă a personalității", "Raport de competențe: traducere în competențe legate de muncă", "Leadership conectiv: perspectivă asupra stilului de leadership și colaborare", "Team flow: cum contribuie cineva la dinamica echipei"],
        },
      },
    ],
  },

  "drijfverentest": {
    alias: { nl: "Motivation", en: "Motivation", de: "Motivation", fr: "Motivation", es: "Motivation", ro: "Motivation" },
    aliasNote: {
      nl: "Deze test staat in het hrmforce-portaal bekend als <strong>Motivation</strong>.",
      en: "In the hrmforce portal this test is known as <strong>Motivation</strong>.",
      de: "Im hrmforce-Portal ist dieser Test als <strong>Motivation</strong> bekannt.",
      fr: "Dans le portail hrmforce, ce test est connu sous le nom de <strong>Motivation</strong>.",
      es: "En el portal de hrmforce esta prueba se conoce como <strong>Motivation</strong>.",
      ro: "În portalul hrmforce acest test este cunoscut ca <strong>Motivation</strong>.",
    },
    blocks: [
      {
        type: "list",
        title: { nl: "Wat de Motivation-rapportage laat zien", en: "What the Motivation report shows", de: "Was der Motivation-Bericht zeigt", fr: "Ce que montre le rapport Motivation", es: "Qué muestra el informe Motivation", ro: "Ce arată raportul Motivation" },
        lead: {
          nl: "De rapportage brengt de drijfveren in kaart via 17 onderliggende indicatoren en vertaalt de vergelijking tussen de ideale en de huidige werksituatie naar een engagement score die laat zien hoe betrokken iemand is. De 17 indicatoren zijn:",
          en: "The report maps the drives through 17 underlying indicators and translates the comparison between the ideal and current work situation into an engagement score that shows how engaged someone is. The 17 indicators are:",
          de: "Der Bericht erfasst die Antriebe über 17 zugrunde liegende Indikatoren und übersetzt den Vergleich zwischen idealer und aktueller Arbeitssituation in einen Engagement-Score, der zeigt, wie engagiert jemand ist. Die 17 Indikatoren sind:",
          fr: "Le rapport cartographie les motivations via 17 indicateurs sous-jacents et traduit la comparaison entre la situation de travail idéale et actuelle en un score d'engagement qui montre le niveau d'implication. Les 17 indicateurs sont :",
          es: "El informe mapea las motivaciones mediante 17 indicadores subyacentes y traduce la comparación entre la situación laboral ideal y la actual en una puntuación de engagement que muestra cuán comprometida está una persona. Los 17 indicadores son:",
          ro: "Raportul cartografiază motivațiile prin 17 indicatori subiacenți și traduce comparația dintre situația de muncă ideală și cea actuală într-un scor de engagement care arată cât de implicat este cineva. Cei 17 indicatori sunt:",
        },
        items: {
          nl: ["Afwisseling", "Balans werk-privé", "Beloning", "Commercie", "Competitie", "Erkenning", "Positieve faalangst", "Idealen", "Onafhankelijkheid", "Ontwikkeling", "Promotie", "Sociale interactie", "Status", "Uitdaging", "Verantwoordelijkheid", "Werkdruk", "Werkomgeving"],
          en: ["Variety", "Work-life balance", "Reward", "Commerce", "Competition", "Recognition", "Positive fear of failure", "Ideals", "Independence", "Development", "Promotion", "Social interaction", "Status", "Challenge", "Responsibility", "Work pressure", "Work environment"],
          de: ["Abwechslung", "Work-Life-Balance", "Belohnung", "Kommerz", "Wettbewerb", "Anerkennung", "Positive Versagensangst", "Ideale", "Unabhängigkeit", "Entwicklung", "Aufstieg", "Soziale Interaktion", "Status", "Herausforderung", "Verantwortung", "Arbeitsdruck", "Arbeitsumfeld"],
          fr: ["Variété", "Équilibre vie pro-perso", "Rémunération", "Commerce", "Compétition", "Reconnaissance", "Peur positive de l'échec", "Idéaux", "Indépendance", "Développement", "Promotion", "Interaction sociale", "Statut", "Défi", "Responsabilité", "Pression au travail", "Environnement de travail"],
          es: ["Variedad", "Equilibrio vida-trabajo", "Recompensa", "Comercio", "Competición", "Reconocimiento", "Miedo positivo al fracaso", "Ideales", "Independencia", "Desarrollo", "Promoción", "Interacción social", "Estatus", "Reto", "Responsabilidad", "Presión laboral", "Entorno laboral"],
          ro: ["Varietate", "Echilibru muncă-viață", "Recompensă", "Comerț", "Competiție", "Recunoaștere", "Teama pozitivă de eșec", "Idealuri", "Independență", "Dezvoltare", "Promovare", "Interacțiune socială", "Statut", "Provocare", "Responsabilitate", "Presiunea muncii", "Mediul de lucru"],
        },
      },
    ],
  },

  "ontwikkelassessment": {
    alias: { nl: "Talent Scan", en: "Talent Scan", de: "Talent Scan", fr: "Talent Scan", es: "Talent Scan", ro: "Talent Scan" },
    aliasNote: {
      nl: "Dit ontwikkelassessment heet in het hrmforce-portaal de <strong>Talent Scan</strong>.",
      en: "In the hrmforce portal this development assessment is called the <strong>Talent Scan</strong>.",
      de: "Im hrmforce-Portal heißt dieses Entwicklungs-Assessment <strong>Talent Scan</strong>.",
      fr: "Dans le portail hrmforce, cet assessment de développement s'appelle le <strong>Talent Scan</strong>.",
      es: "En el portal de hrmforce esta evaluación de desarrollo se llama <strong>Talent Scan</strong>.",
      ro: "În portalul hrmforce această evaluare de dezvoltare se numește <strong>Talent Scan</strong>.",
    },
    blocks: [],
  },

  "360-graden-feedback": {
    blocks: [
      {
        type: "list",
        title: { nl: "Alle competenties, meetbaar op 4 niveaus", en: "All competencies, measurable at 4 levels", de: "Alle Kompetenzen, messbar auf 4 Niveaus", fr: "Toutes les compétences, mesurables sur 4 niveaux", es: "Todas las competencias, medibles en 4 niveles", ro: "Toate competențele, măsurabile pe 4 niveluri" },
        lead: {
          nl: "In de 360 graden feedback beoordeel je elke competentie op vier beheersingsniveaus, zodat je gericht kunt ontwikkelen:",
          en: "In the 360-degree feedback you assess every competency at four proficiency levels, so you can develop in a targeted way:",
          de: "Beim 360-Grad-Feedback bewerten Sie jede Kompetenz auf vier Beherrschungsniveaus, um gezielt zu entwickeln:",
          fr: "Dans le feedback 360 degrés, vous évaluez chaque compétence sur quatre niveaux de maîtrise, pour un développement ciblé :",
          es: "En el feedback de 360 grados evalúas cada competencia en cuatro niveles de dominio, para desarrollar de forma dirigida:",
          ro: "În feedback-ul la 360 de grade evaluezi fiecare competență pe patru niveluri de stăpânire, pentru o dezvoltare țintită:",
        },
        items: {
          nl: ["Beginner: eerste stappen, met begeleiding", "Operationeel: zelfstandig in de dagelijkse praktijk", "Tactisch: vertaalt naar plannen en verbetert processen", "Strategisch: stuurt op langetermijnkoers en visie"],
          en: ["Beginner: first steps, with guidance", "Operational: independent in daily practice", "Tactical: translates into plans and improves processes", "Strategic: steers on long-term direction and vision"],
          de: ["Anfänger: erste Schritte, mit Begleitung", "Operativ: selbstständig in der täglichen Praxis", "Taktisch: übersetzt in Pläne und verbessert Prozesse", "Strategisch: steuert langfristige Ausrichtung und Vision"],
          fr: ["Débutant : premiers pas, avec accompagnement", "Opérationnel : autonome dans la pratique quotidienne", "Tactique : traduit en plans et améliore les processus", "Stratégique : oriente la direction et la vision à long terme"],
          es: ["Principiante: primeros pasos, con acompañamiento", "Operativo: autónomo en la práctica diaria", "Táctico: traduce en planes y mejora procesos", "Estratégico: dirige el rumbo y la visión a largo plazo"],
          ro: ["Începător: primii pași, cu îndrumare", "Operațional: autonom în practica zilnică", "Tactic: transpune în planuri și îmbunătățește procese", "Strategic: orientează direcția și viziunea pe termen lung"],
        },
      },
      {
        type: "text",
        title: { nl: "Ook een maatwerkmodel", en: "A custom model too", de: "Auch ein maßgeschneidertes Modell", fr: "Aussi un modèle sur mesure", es: "También un modelo a medida", ro: "Și un model personalizat" },
        text: {
          nl: "Naast het standaard competentiemodel kun je een eigen, op je organisatie afgestemd competentiemodel laten inrichten, met je eigen competenties en niveaus.",
          en: "Besides the standard competency model, you can have a custom model set up that fits your organisation, with your own competencies and levels.",
          de: "Neben dem Standard-Kompetenzmodell können Sie ein eigenes, auf Ihre Organisation abgestimmtes Modell einrichten lassen, mit eigenen Kompetenzen und Niveaus.",
          fr: "Outre le modèle de compétences standard, vous pouvez faire configurer un modèle sur mesure adapté à votre organisation, avec vos propres compétences et niveaux.",
          es: "Además del modelo de competencias estándar, puedes configurar un modelo a medida que se ajuste a tu organización, con tus propias competencias y niveles.",
          ro: "Pe lângă modelul standard de competențe, poți configura un model personalizat, adaptat organizației tale, cu propriile competențe și niveluri.",
        },
      },
    ],
  },

  "job-profiler": {
    aliasNote: {
      nl: "De <strong>Job Profiler</strong> is een competentiegerichte profiler van functies: je legt per competentie vast hoe belangrijk die is voor de functie. Het kijkje in de vragenlijst laat dat zien.",
      en: "The <strong>Job Profiler</strong> is a competency-based profiler of roles: for each competency you set how important it is for the role. The questionnaire preview reflects this.",
      de: "Der <strong>Job Profiler</strong> ist ein kompetenzorientierter Profiler von Stellen: pro Kompetenz legen Sie fest, wie wichtig sie für die Stelle ist. Die Fragebogen-Vorschau zeigt dies.",
      fr: "Le <strong>Job Profiler</strong> est un profileur de postes axé sur les compétences : pour chaque compétence, vous définissez son importance pour le poste. L'aperçu du questionnaire le reflète.",
      es: "El <strong>Job Profiler</strong> es un perfilador de puestos basado en competencias: para cada competencia defines su importancia para el puesto. La vista previa del cuestionario lo refleja.",
      ro: "<strong>Job Profiler</strong> este un profiler al posturilor bazat pe competențe: pentru fiecare competență stabilești cât de importantă este pentru post. Previzualizarea chestionarului reflectă acest lucru.",
    },
    blocks: [],
  },
};

export function extraFor(slug, lang) {
  const e = detailExtra[slug];
  if (!e) return null;
  const L = (o) => (o ? (o[lang] || o.nl) : "");
  return {
    alias: e.alias ? L(e.alias) : "",
    aliasNote: e.aliasNote ? L(e.aliasNote) : "",
    blocks: (e.blocks || []).map((b) => ({
      type: b.type,
      title: L(b.title),
      lead: b.lead ? L(b.lead) : "",
      text: b.text ? L(b.text) : "",
      items: b.items ? (b.items[lang] || b.items.nl) : [],
    })),
  };
}
