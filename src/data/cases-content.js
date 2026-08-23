// Klantcases-content per taal, gebruikt door src/components/Cases.astro.
// NL = leidend. en/de/fr/es/ro eerste vertaalslag — native review aanbevolen.
//
// LET OP (ethiek): dit zijn REPRESENTATIEVE VOORBEELDCASES ter illustratie,
// gebaseerd op geanonimiseerde profielen (sector + omvang). Geen geverifieerde
// resultaten van met naam genoemde klanten en geen verzonnen quotes.
export const casesContent = {
  nl: {
    meta: {
      title: "Klantcases - hrmforce",
      description: "Representatieve voorbeeldcases: hoe organisaties van 25 tot 2.500 medewerkers hrmforce inzetten voor selectie, ontwikkeling en teams.",
    },
    hero: {
      eyebrow: "Klantcases",
      title: "Zo werkt onderbouwd talentmanagement in de praktijk",
      intro: "Van selectie tot ontwikkeling: deze voorbeelden laten zien hoe organisaties in uiteenlopende sectoren met een eigen portal op licentiebasis meer rendement uit hun mensen halen.",
      disclaimer: "Representatieve voorbeeldcases ter illustratie. Deze cases zijn gebaseerd op geanonimiseerde sector- en omvangprofielen en tonen realistische, bescheiden uitkomsten. Ze zijn geen geverifieerde resultaten van met naam genoemde klanten.",
    },
    labels: { challenge: "Uitdaging", approach: "Aanpak", results: "Resultaten" },
    cases: [
      {
        sector: "Zorg",
        size: "±180 medewerkers",
        tag: "Selectie",
        challenge: "Hoog verloop onder nieuwe zorgprofessionals en veel selectiegesprekken die op onderbuikgevoel werden gevoerd.",
        approach: "Eigen portal met een persoonlijkheidstest en een sectorgerichte vragenlijst als vaste stap in de sollicitatieprocedure, gekoppeld aan een helder matchprofiel per functie.",
        results: [
          "Kortere doorlooptijd in de selectie doordat gesprekken gerichter verlopen",
          "Betere onderbouwing van aannamebeslissingen",
          "Minder mismatch in de eerste maanden na indiensttreding",
        ],
      },
      {
        sector: "Onderwijs",
        size: "±320 medewerkers",
        tag: "Ontwikkeling",
        challenge: "Ontwikkelgesprekken bleven algemeen en vrijblijvend; docenten en staf misten concrete handvatten voor groei.",
        approach: "360 graden feedback en een competentieprofiel per rol als basis voor het jaarlijkse ontwikkelgesprek, met rapportages in de eigen huisstijl.",
        results: [
          "Gerichtere ontwikkelgesprekken op basis van concrete feedback",
          "Meer eigenaarschap bij medewerkers over hun eigen groei",
          "Eenduidige taal voor competenties door de hele organisatie",
        ],
      },
      {
        sector: "Industrie",
        size: "±950 medewerkers",
        tag: "Werving & selectie",
        challenge: "Grote wervingsvolumes voor operationele functies, waarbij handmatige screening veel tijd kostte en kwaliteit varieerde.",
        approach: "Een cognitieve capaciteitentest en een korte preselectie-vragenlijst vooraan in het proces, met koppeling aan het bestaande ATS via de portal.",
        results: [
          "Snellere voorselectie van kandidaten",
          "Consistentere kwaliteit van hires over meerdere vestigingen",
          "Minder administratieve last voor recruiters",
        ],
      },
      {
        sector: "Overheid",
        size: "±240 medewerkers",
        tag: "Gesprekscyclus",
        challenge: "De HR-gesprekscyclus was versnipperd over losse formulieren en tools, waardoor overzicht en opvolging ontbraken.",
        approach: "Eén portal voor de volledige gesprekscyclus, met vaste momenten voor doelstellingen, voortgang en ontwikkeling en overzichtelijke managementrapportages.",
        results: [
          "Meer afgeronde gesprekken binnen de cyclus",
          "Beter zicht op ontwikkelbehoeften per team",
          "Minder losse tools en handmatig bijhouden",
        ],
      },
      {
        sector: "Zakelijke dienstverlening",
        size: "±75 medewerkers",
        tag: "Teamontwikkeling",
        challenge: "Snelgroeiend team met samenwerkingswrijving; leidinggevenden zochten inzicht in teamdynamiek en drijfveren.",
        approach: "Een drijfverentest en teamscan als startpunt voor teamsessies, aangevuld met individuele terugkoppeling in de portal.",
        results: [
          "Beter onderling begrip binnen teams",
          "Concretere afspraken over samenwerking",
          "Soepelere onboarding van nieuwe teamleden",
        ],
      },
      {
        sector: "Retail / e-commerce",
        size: "±1.400 medewerkers",
        tag: "Employability",
        challenge: "Behoefte aan interne doorstroom en duurzame inzetbaarheid in een organisatie met veel wisselende functies.",
        approach: "Employability-scans en ontwikkelprofielen in de portal, ingezet om loopbaanpaden en interne mobiliteit bespreekbaar te maken.",
        results: [
          "Meer zicht op interne doorgroeimogelijkheden",
          "Gerichtere ontwikkelplannen voor medewerkers",
          "Actiever gesprek over duurzame inzetbaarheid",
        ],
      },
    ],
    ctaBand: {
      title: "Benieuwd wat dit voor jouw organisatie kan betekenen?",
      text: "We denken graag mee over een opzet die past bij jouw sector en omvang. Plan een demo of bekijk de mogelijkheden en tarieven.",
      primary: "Plan een demo",
      secondary: "Bekijk tarieven",
    },
  },
};

const clone = (o) => JSON.parse(JSON.stringify(o));

// ---------- EN ----------
casesContent.en = clone(casesContent.nl);
Object.assign(casesContent.en.meta, {
  title: "Client cases - hrmforce",
  description: "Representative example cases: how organisations from 25 to 2,500 employees use hrmforce for selection, development and teams.",
});
Object.assign(casesContent.en.hero, {
  eyebrow: "Client cases",
  title: "How evidence-based talent management works in practice",
  intro: "From selection to development: these examples show how organisations across a range of sectors get more out of their people with their own portal on a licence basis.",
  disclaimer: "Representative example cases for illustration. These cases are based on anonymised sector and size profiles and show realistic, modest outcomes. They are not verified results of named clients.",
});
casesContent.en.labels = { challenge: "Challenge", approach: "Approach", results: "Results" };
casesContent.en.cases = [
  { sector: "Healthcare", size: "±180 employees", tag: "Selection",
    challenge: "High turnover among new care professionals and many selection interviews driven by gut feeling.",
    approach: "Own portal with a personality test and a sector-specific questionnaire as a fixed step in the hiring process, linked to a clear match profile per role.",
    results: ["Shorter time-to-hire because interviews are more focused", "Better substantiation of hiring decisions", "Fewer mismatches in the first months after onboarding"] },
  { sector: "Education", size: "±320 employees", tag: "Development",
    challenge: "Development reviews stayed generic and non-committal; teachers and staff lacked concrete tools for growth.",
    approach: "360-degree feedback and a competency profile per role as the basis for the annual development review, with reports in the organisation's own house style.",
    results: ["More focused development conversations based on concrete feedback", "More ownership among employees over their own growth", "Consistent language for competencies across the organisation"] },
  { sector: "Manufacturing", size: "±950 employees", tag: "Recruitment & selection",
    challenge: "Large recruitment volumes for operational roles, where manual screening cost a lot of time and quality varied.",
    approach: "A cognitive ability test and a short pre-selection questionnaire early in the process, linked to the existing ATS via the portal.",
    results: ["Faster pre-selection of candidates", "More consistent quality of hires across multiple sites", "Less administrative burden for recruiters"] },
  { sector: "Public sector", size: "±240 employees", tag: "Review cycle",
    challenge: "The HR review cycle was fragmented across separate forms and tools, so overview and follow-up were lacking.",
    approach: "A single portal for the entire review cycle, with fixed moments for goals, progress and development and clear management reporting.",
    results: ["More completed reviews within the cycle", "Better insight into development needs per team", "Fewer separate tools and manual tracking"] },
  { sector: "Professional services", size: "±75 employees", tag: "Team development",
    challenge: "Fast-growing team with collaboration friction; managers were looking for insight into team dynamics and drivers.",
    approach: "A drivers test and team scan as a starting point for team sessions, complemented by individual feedback in the portal.",
    results: ["Better mutual understanding within teams", "More concrete agreements on collaboration", "Smoother onboarding of new team members"] },
  { sector: "Retail / e-commerce", size: "±1,400 employees", tag: "Employability",
    challenge: "A need for internal mobility and sustainable employability in an organisation with many changing roles.",
    approach: "Employability scans and development profiles in the portal, used to open up conversations about career paths and internal mobility.",
    results: ["More insight into internal growth opportunities", "More targeted development plans for employees", "A more active conversation about sustainable employability"] },
];
Object.assign(casesContent.en.ctaBand, {
  title: "Curious what this could mean for your organisation?",
  text: "We're happy to think along about a setup that fits your sector and size. Book a demo or explore the options and pricing.",
  primary: "Book a demo",
  secondary: "View pricing",
});

// ---------- DE ----------
casesContent.de = clone(casesContent.nl);
Object.assign(casesContent.de.meta, {
  title: "Kundenbeispiele - hrmforce",
  description: "Repräsentative Beispielfälle: Wie Organisationen von 25 bis 2.500 Mitarbeitenden hrmforce für Auswahl, Entwicklung und Teams einsetzen.",
});
Object.assign(casesContent.de.hero, {
  eyebrow: "Kundenbeispiele",
  title: "So funktioniert fundiertes Talentmanagement in der Praxis",
  intro: "Von der Auswahl bis zur Entwicklung: Diese Beispiele zeigen, wie Organisationen aus unterschiedlichen Branchen mit einem eigenen Portal auf Lizenzbasis mehr aus ihren Mitarbeitenden herausholen.",
  disclaimer: "Repräsentative Beispielfälle zur Veranschaulichung. Diese Fälle basieren auf anonymisierten Branchen- und Größenprofilen und zeigen realistische, bescheidene Ergebnisse. Es handelt sich nicht um verifizierte Ergebnisse namentlich genannter Kunden.",
});
casesContent.de.labels = { challenge: "Herausforderung", approach: "Ansatz", results: "Ergebnisse" };
casesContent.de.cases = [
  { sector: "Gesundheitswesen", size: "±180 Mitarbeitende", tag: "Auswahl",
    challenge: "Hohe Fluktuation bei neuen Pflegekräften und viele Auswahlgespräche, die aus dem Bauchgefühl heraus geführt wurden.",
    approach: "Eigenes Portal mit einem Persönlichkeitstest und einem branchenspezifischen Fragebogen als festem Schritt im Bewerbungsprozess, verknüpft mit einem klaren Matchprofil je Funktion.",
    results: ["Kürzere Durchlaufzeit in der Auswahl, weil Gespräche gezielter verlaufen", "Bessere Fundierung von Einstellungsentscheidungen", "Weniger Fehlbesetzungen in den ersten Monaten nach Eintritt"] },
  { sector: "Bildung", size: "±320 Mitarbeitende", tag: "Entwicklung",
    challenge: "Entwicklungsgespräche blieben allgemein und unverbindlich; Lehrkräfte und Personal fehlten konkrete Ansatzpunkte für Wachstum.",
    approach: "360-Grad-Feedback und ein Kompetenzprofil je Rolle als Basis für das jährliche Entwicklungsgespräch, mit Berichten im eigenen Corporate Design.",
    results: ["Gezieltere Entwicklungsgespräche auf Basis konkreten Feedbacks", "Mehr Eigenverantwortung der Mitarbeitenden für ihr Wachstum", "Einheitliche Sprache für Kompetenzen in der gesamten Organisation"] },
  { sector: "Industrie", size: "±950 Mitarbeitende", tag: "Rekrutierung & Auswahl",
    challenge: "Große Rekrutierungsvolumen für operative Funktionen, bei denen manuelles Screening viel Zeit kostete und die Qualität schwankte.",
    approach: "Ein kognitiver Fähigkeitstest und ein kurzer Vorauswahl-Fragebogen früh im Prozess, angebunden an das bestehende ATS über das Portal.",
    results: ["Schnellere Vorauswahl von Kandidaten", "Konsistentere Qualität der Einstellungen über mehrere Standorte", "Geringerer Verwaltungsaufwand für Recruiter"] },
  { sector: "Öffentlicher Sektor", size: "±240 Mitarbeitende", tag: "Gesprächszyklus",
    challenge: "Der HR-Gesprächszyklus war über einzelne Formulare und Tools verstreut, sodass Überblick und Nachverfolgung fehlten.",
    approach: "Ein Portal für den gesamten Gesprächszyklus, mit festen Momenten für Ziele, Fortschritt und Entwicklung sowie übersichtlichen Management-Berichten.",
    results: ["Mehr abgeschlossene Gespräche innerhalb des Zyklus", "Besserer Einblick in Entwicklungsbedarfe je Team", "Weniger einzelne Tools und manuelle Pflege"] },
  { sector: "Unternehmensdienstleistungen", size: "±75 Mitarbeitende", tag: "Teamentwicklung",
    challenge: "Schnell wachsendes Team mit Reibung in der Zusammenarbeit; Führungskräfte suchten Einblick in Teamdynamik und Motive.",
    approach: "Ein Motivtest und ein Team-Scan als Ausgangspunkt für Teamsitzungen, ergänzt durch individuelle Rückmeldungen im Portal.",
    results: ["Besseres gegenseitiges Verständnis in Teams", "Konkretere Absprachen zur Zusammenarbeit", "Reibungsloseres Onboarding neuer Teammitglieder"] },
  { sector: "Einzelhandel / E-Commerce", size: "±1.400 Mitarbeitende", tag: "Employability",
    challenge: "Bedarf an interner Mobilität und nachhaltiger Beschäftigungsfähigkeit in einer Organisation mit vielen wechselnden Funktionen.",
    approach: "Employability-Scans und Entwicklungsprofile im Portal, eingesetzt, um Laufbahnwege und interne Mobilität besprechbar zu machen.",
    results: ["Mehr Einblick in interne Aufstiegsmöglichkeiten", "Gezieltere Entwicklungspläne für Mitarbeitende", "Aktiveres Gespräch über nachhaltige Beschäftigungsfähigkeit"] },
];
Object.assign(casesContent.de.ctaBand, {
  title: "Neugierig, was das für Ihre Organisation bedeuten kann?",
  text: "Wir denken gerne über eine Lösung nach, die zu Ihrer Branche und Größe passt. Buchen Sie eine Demo oder sehen Sie sich die Möglichkeiten und Preise an.",
  primary: "Demo buchen",
  secondary: "Preise ansehen",
});

// ---------- FR ----------
casesContent.fr = clone(casesContent.nl);
Object.assign(casesContent.fr.meta, {
  title: "Cas clients - hrmforce",
  description: "Cas exemples représentatifs : comment des organisations de 25 à 2 500 collaborateurs utilisent hrmforce pour la sélection, le développement et les équipes.",
});
Object.assign(casesContent.fr.hero, {
  eyebrow: "Cas clients",
  title: "La gestion des talents fondée sur les données, en pratique",
  intro: "De la sélection au développement : ces exemples montrent comment des organisations de secteurs variés tirent davantage de leurs collaborateurs grâce à leur propre portail sous licence.",
  disclaimer: "Cas exemples représentatifs à titre d'illustration. Ces cas reposent sur des profils anonymisés (secteur et taille) et présentent des résultats réalistes et modestes. Il ne s'agit pas de résultats vérifiés de clients nommés.",
});
casesContent.fr.labels = { challenge: "Défi", approach: "Approche", results: "Résultats" };
casesContent.fr.cases = [
  { sector: "Santé", size: "±180 collaborateurs", tag: "Sélection",
    challenge: "Fort turnover parmi les nouveaux professionnels de santé et de nombreux entretiens de sélection menés à l'intuition.",
    approach: "Portail propre avec un test de personnalité et un questionnaire sectoriel comme étape fixe du processus de recrutement, relié à un profil de correspondance clair par poste.",
    results: ["Délai de recrutement plus court car les entretiens sont plus ciblés", "Meilleure justification des décisions d'embauche", "Moins d'inadéquations dans les premiers mois après l'arrivée"] },
  { sector: "Éducation", size: "±320 collaborateurs", tag: "Développement",
    challenge: "Les entretiens de développement restaient génériques et peu engageants ; enseignants et personnel manquaient de repères concrets.",
    approach: "Feedback à 360 degrés et un profil de compétences par rôle comme base de l'entretien annuel de développement, avec des rapports à la charte de l'organisation.",
    results: ["Des entretiens de développement plus ciblés fondés sur un feedback concret", "Plus d'appropriation par les collaborateurs de leur propre croissance", "Un langage cohérent des compétences dans toute l'organisation"] },
  { sector: "Industrie", size: "±950 collaborateurs", tag: "Recrutement & sélection",
    challenge: "Volumes de recrutement importants pour des postes opérationnels, où le tri manuel coûtait du temps et la qualité variait.",
    approach: "Un test d'aptitude cognitive et un court questionnaire de présélection en amont du processus, relié à l'ATS existant via le portail.",
    results: ["Présélection plus rapide des candidats", "Qualité des embauches plus homogène sur plusieurs sites", "Moins de charge administrative pour les recruteurs"] },
  { sector: "Secteur public", size: "±240 collaborateurs", tag: "Cycle d'entretiens",
    challenge: "Le cycle d'entretiens RH était fragmenté entre formulaires et outils distincts, d'où un manque de vue d'ensemble et de suivi.",
    approach: "Un portail unique pour l'ensemble du cycle d'entretiens, avec des moments fixes pour les objectifs, le suivi et le développement et des rapports de gestion clairs.",
    results: ["Davantage d'entretiens menés à terme dans le cycle", "Meilleure visibilité des besoins de développement par équipe", "Moins d'outils disparates et de suivi manuel"] },
  { sector: "Services aux entreprises", size: "±75 collaborateurs", tag: "Développement d'équipe",
    challenge: "Équipe en forte croissance avec des frictions de collaboration ; les managers cherchaient à comprendre la dynamique d'équipe et les moteurs.",
    approach: "Un test de motivations et un scan d'équipe comme point de départ des sessions d'équipe, complétés par un retour individuel dans le portail.",
    results: ["Meilleure compréhension mutuelle au sein des équipes", "Des accords plus concrets sur la collaboration", "Intégration plus fluide des nouveaux membres"] },
  { sector: "Commerce / e-commerce", size: "±1 400 collaborateurs", tag: "Employabilité",
    challenge: "Besoin de mobilité interne et d'employabilité durable dans une organisation aux fonctions nombreuses et changeantes.",
    approach: "Scans d'employabilité et profils de développement dans le portail, utilisés pour ouvrir le dialogue sur les parcours de carrière et la mobilité interne.",
    results: ["Meilleure visibilité des possibilités d'évolution interne", "Des plans de développement plus ciblés pour les collaborateurs", "Un dialogue plus actif sur l'employabilité durable"] },
];
Object.assign(casesContent.fr.ctaBand, {
  title: "Curieux de savoir ce que cela pourrait apporter à votre organisation ?",
  text: "Nous réfléchissons volontiers à une configuration adaptée à votre secteur et à votre taille. Réservez une démo ou découvrez les options et les tarifs.",
  primary: "Réserver une démo",
  secondary: "Voir les tarifs",
});

// ---------- ES ----------
casesContent.es = clone(casesContent.nl);
Object.assign(casesContent.es.meta, {
  title: "Casos de clientes - hrmforce",
  description: "Casos de ejemplo representativos: cómo organizaciones de 25 a 2.500 empleados usan hrmforce para selección, desarrollo y equipos.",
});
Object.assign(casesContent.es.hero, {
  eyebrow: "Casos de clientes",
  title: "Así funciona la gestión del talento basada en datos en la práctica",
  intro: "De la selección al desarrollo: estos ejemplos muestran cómo organizaciones de sectores diversos obtienen más de sus personas con su propio portal en régimen de licencia.",
  disclaimer: "Casos de ejemplo representativos con fines ilustrativos. Estos casos se basan en perfiles anonimizados (sector y tamaño) y muestran resultados realistas y moderados. No son resultados verificados de clientes con nombre propio.",
});
casesContent.es.labels = { challenge: "Reto", approach: "Enfoque", results: "Resultados" };
casesContent.es.cases = [
  { sector: "Sanidad", size: "±180 empleados", tag: "Selección",
    challenge: "Alta rotación entre nuevos profesionales sanitarios y muchas entrevistas de selección guiadas por la intuición.",
    approach: "Portal propio con un test de personalidad y un cuestionario sectorial como paso fijo del proceso de selección, vinculado a un perfil de encaje claro por puesto.",
    results: ["Menor plazo de contratación porque las entrevistas son más enfocadas", "Mejor fundamentación de las decisiones de contratación", "Menos desajustes en los primeros meses tras la incorporación"] },
  { sector: "Educación", size: "±320 empleados", tag: "Desarrollo",
    challenge: "Las conversaciones de desarrollo eran genéricas y poco comprometidas; docentes y personal carecían de pautas concretas.",
    approach: "Feedback de 360 grados y un perfil de competencias por rol como base de la conversación anual de desarrollo, con informes en la imagen propia de la organización.",
    results: ["Conversaciones de desarrollo más enfocadas a partir de feedback concreto", "Mayor apropiación de los empleados sobre su propio crecimiento", "Un lenguaje coherente de competencias en toda la organización"] },
  { sector: "Industria", size: "±950 empleados", tag: "Reclutamiento y selección",
    challenge: "Grandes volúmenes de reclutamiento para puestos operativos, donde el cribado manual consumía tiempo y la calidad variaba.",
    approach: "Un test de capacidad cognitiva y un breve cuestionario de preselección al inicio del proceso, conectado al ATS existente a través del portal.",
    results: ["Preselección de candidatos más rápida", "Calidad de las contrataciones más consistente entre varios centros", "Menos carga administrativa para los reclutadores"] },
  { sector: "Sector público", size: "±240 empleados", tag: "Ciclo de conversaciones",
    challenge: "El ciclo de conversaciones de RR. HH. estaba fragmentado en formularios y herramientas sueltas, faltando visión y seguimiento.",
    approach: "Un único portal para todo el ciclo de conversaciones, con momentos fijos para objetivos, avance y desarrollo e informes de gestión claros.",
    results: ["Más conversaciones completadas dentro del ciclo", "Mejor visión de las necesidades de desarrollo por equipo", "Menos herramientas sueltas y seguimiento manual"] },
  { sector: "Servicios profesionales", size: "±75 empleados", tag: "Desarrollo de equipos",
    challenge: "Equipo en rápido crecimiento con fricciones de colaboración; los responsables buscaban entender la dinámica y los motores del equipo.",
    approach: "Un test de motivaciones y un escaneo de equipo como punto de partida de las sesiones de equipo, complementados con feedback individual en el portal.",
    results: ["Mejor comprensión mutua dentro de los equipos", "Acuerdos más concretos sobre la colaboración", "Incorporación más fluida de nuevos miembros"] },
  { sector: "Retail / comercio electrónico", size: "±1.400 empleados", tag: "Empleabilidad",
    challenge: "Necesidad de movilidad interna y empleabilidad sostenible en una organización con muchos puestos cambiantes.",
    approach: "Escaneos de empleabilidad y perfiles de desarrollo en el portal, usados para abrir el diálogo sobre trayectorias profesionales y movilidad interna.",
    results: ["Mayor visión de las posibilidades de crecimiento interno", "Planes de desarrollo más específicos para los empleados", "Un diálogo más activo sobre la empleabilidad sostenible"] },
];
Object.assign(casesContent.es.ctaBand, {
  title: "¿Con curiosidad por lo que esto podría aportar a su organización?",
  text: "Estaremos encantados de pensar en una configuración que encaje con su sector y tamaño. Reserve una demo o consulte las opciones y las tarifas.",
  primary: "Reservar una demo",
  secondary: "Ver tarifas",
});

// ---------- RO ----------
casesContent.ro = clone(casesContent.nl);
Object.assign(casesContent.ro.meta, {
  title: "Studii de caz - hrmforce",
  description: "Cazuri exemplu reprezentative: cum folosesc organizațiile de la 25 la 2.500 de angajați hrmforce pentru selecție, dezvoltare și echipe.",
});
Object.assign(casesContent.ro.hero, {
  eyebrow: "Studii de caz",
  title: "Cum funcționează în practică managementul talentelor bazat pe date",
  intro: "De la selecție la dezvoltare: aceste exemple arată cum organizații din sectoare diverse obțin mai mult de la oamenii lor cu un portal propriu în regim de licență.",
  disclaimer: "Cazuri exemplu reprezentative, cu rol ilustrativ. Aceste cazuri se bazează pe profiluri anonimizate (sector și dimensiune) și prezintă rezultate realiste și modeste. Nu sunt rezultate verificate ale unor clienți menționați cu numele.",
});
casesContent.ro.labels = { challenge: "Provocare", approach: "Abordare", results: "Rezultate" };
casesContent.ro.cases = [
  { sector: "Sănătate", size: "±180 de angajați", tag: "Selecție",
    challenge: "Fluctuație ridicată în rândul noilor profesioniști din sănătate și multe interviuri de selecție conduse pe baza intuiției.",
    approach: "Portal propriu cu un test de personalitate și un chestionar specific sectorului ca pas fix în procesul de recrutare, conectat la un profil clar de potrivire pentru fiecare funcție.",
    results: ["Durată mai scurtă a selecției, pentru că interviurile sunt mai bine țintite", "Fundamentare mai bună a deciziilor de angajare", "Mai puține nepotriviri în primele luni după angajare"] },
  { sector: "Educație", size: "±320 de angajați", tag: "Dezvoltare",
    challenge: "Discuțiile de dezvoltare rămâneau generale și fără angajament; profesorii și personalul nu aveau repere concrete pentru creștere.",
    approach: "Feedback 360 de grade și un profil de competențe pentru fiecare rol ca bază a discuției anuale de dezvoltare, cu rapoarte în identitatea proprie a organizației.",
    results: ["Discuții de dezvoltare mai bine țintite, pe baza unui feedback concret", "Mai multă asumare a propriei creșteri de către angajați", "Un limbaj unitar al competențelor în întreaga organizație"] },
  { sector: "Industrie", size: "±950 de angajați", tag: "Recrutare și selecție",
    challenge: "Volume mari de recrutare pentru funcții operaționale, unde trierea manuală consuma timp și calitatea varia.",
    approach: "Un test de capacitate cognitivă și un chestionar scurt de preselecție la începutul procesului, conectat la ATS-ul existent prin portal.",
    results: ["Preselecție mai rapidă a candidaților", "Calitate mai constantă a angajărilor în mai multe locații", "Mai puțină sarcină administrativă pentru recrutori"] },
  { sector: "Sector public", size: "±240 de angajați", tag: "Ciclu de discuții",
    challenge: "Ciclul de discuții HR era fragmentat între formulare și instrumente separate, lipsind ansamblul și urmărirea.",
    approach: "Un singur portal pentru întregul ciclu de discuții, cu momente fixe pentru obiective, progres și dezvoltare și rapoarte de management clare.",
    results: ["Mai multe discuții finalizate în cadrul ciclului", "Vizibilitate mai bună a nevoilor de dezvoltare pe echipă", "Mai puține instrumente separate și urmărire manuală"] },
  { sector: "Servicii pentru companii", size: "±75 de angajați", tag: "Dezvoltarea echipei",
    challenge: "Echipă în creștere rapidă, cu fricțiuni de colaborare; managerii căutau să înțeleagă dinamica echipei și motivațiile.",
    approach: "Un test de motivații și un scan de echipă ca punct de plecare pentru sesiunile de echipă, completate cu feedback individual în portal.",
    results: ["Înțelegere reciprocă mai bună în cadrul echipelor", "Înțelegeri mai concrete privind colaborarea", "Integrare mai lină a noilor membri"] },
  { sector: "Retail / e-commerce", size: "±1.400 de angajați", tag: "Angajabilitate",
    challenge: "Nevoie de mobilitate internă și angajabilitate sustenabilă într-o organizație cu multe funcții în schimbare.",
    approach: "Scanări de angajabilitate și profiluri de dezvoltare în portal, folosite pentru a deschide discuția despre trasee de carieră și mobilitate internă.",
    results: ["Vizibilitate mai bună a posibilităților de creștere internă", "Planuri de dezvoltare mai bine țintite pentru angajați", "O discuție mai activă despre angajabilitatea sustenabilă"] },
];
Object.assign(casesContent.ro.ctaBand, {
  title: "Curioși ce ar putea însemna acest lucru pentru organizația dvs.?",
  text: "Gândim cu plăcere împreună o soluție potrivită sectorului și dimensiunii dvs. Programați o demonstrație sau consultați opțiunile și prețurile.",
  primary: "Programați o demonstrație",
  secondary: "Vedeți prețurile",
});
