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
          nl: "Vanuit één afname bevat de rapportage meerdere onderdelen en modules:",
          en: "From a single assessment the report contains several parts and modules:",
          de: "Aus einer einzigen Durchführung enthält der Bericht mehrere Teile und Module:",
          fr: "À partir d'une seule passation, le rapport contient plusieurs parties et modules :",
          es: "A partir de una sola aplicación, el informe contiene varias partes y módulos:",
          ro: "Dintr-o singură aplicare, raportul conține mai multe părți și module:",
        },
        items: {
          nl: ["Algemeen profiel: beschrijving op de onderliggende persoonlijkheidsfactoren", "Persoonlijk rapport: uitgebreide, persoonlijke terugkoppeling", "DISC-rapportage: gedrags- en communicatiestijl", "Kleurenrapportage: kleurtypologie (o.b.v. Jung), met goede- en slechte-dag-gedrag", "Interview rapport: gerichte interviewvragen op basis van de scores", "Overzicht scores op factoren: alle factoren in één overzicht", "Teamprofiel: teamrollen, samenwerking en het perspectief van anderen", "Verbindend leiderschap: leiderschaps- en samenwerkingsstijl"],
          en: ["General profile: description across the underlying personality factors", "Personal report: an extensive, personal read-back", "DISC report: behaviour and communication style", "Colour report: colour typology (based on Jung), with good-day and bad-day behaviour", "Interview report: targeted interview questions based on the scores", "Overview of factor scores: all factors in one overview", "Team profile: team roles, collaboration and the perspective of others", "Connective leadership: leadership and collaboration style"],
          de: ["Allgemeines Profil: Beschreibung über die zugrunde liegenden Persönlichkeitsfaktoren", "Persönlicher Bericht: umfassende, persönliche Rückmeldung", "DISC-Bericht: Verhaltens- und Kommunikationsstil", "Farbbericht: Farbtypologie (auf Basis von Jung), mit Gut-Tag- und Schlecht-Tag-Verhalten", "Interviewbericht: gezielte Interviewfragen auf Basis der Werte", "Übersicht der Faktorwerte: alle Faktoren in einer Übersicht", "Teamprofil: Teamrollen, Zusammenarbeit und die Perspektive anderer", "Verbindende Führung: Führungs- und Kooperationsstil"],
          fr: ["Profil général : description sur les facteurs de personnalité sous-jacents", "Rapport personnel : restitution personnelle et détaillée", "Rapport DISC : style de comportement et de communication", "Rapport couleurs : typologie de couleurs (basée sur Jung), avec comportement bon jour / mauvais jour", "Rapport d'entretien : questions d'entretien ciblées basées sur les scores", "Aperçu des scores par facteur : tous les facteurs en un aperçu", "Profil d'équipe : rôles d'équipe, collaboration et perspective des autres", "Leadership fédérateur : style de leadership et de collaboration"],
          es: ["Perfil general: descripción sobre los factores de personalidad subyacentes", "Informe personal: una devolución personal y amplia", "Informe DISC: estilo de comportamiento y comunicación", "Informe de colores: tipología de colores (basada en Jung), con conducta de buen día y mal día", "Informe de entrevista: preguntas de entrevista dirigidas según las puntuaciones", "Resumen de puntuaciones por factor: todos los factores en un resumen", "Perfil de equipo: roles de equipo, colaboración y la perspectiva de los demás", "Liderazgo conector: estilo de liderazgo y colaboración"],
          ro: ["Profil general: descriere pe factorii de personalitate subiacenți", "Raport personal: o transmitere personală și amplă", "Raport DISC: stil de comportament și comunicare", "Raport de culori: tipologie de culori (bazată pe Jung), cu comportament în zi bună și zi rea", "Raport de interviu: întrebări de interviu țintite pe baza scorurilor", "Prezentare a scorurilor pe factori: toți factorii într-o singură prezentare", "Profil de echipă: roluri de echipă, colaborare și perspectiva celorlalți", "Leadership conectiv: stil de leadership și colaborare"],
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
