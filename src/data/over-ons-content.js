// Teksten van de pagina Over ons, per taal. De opbouw is in elke taal gelijk.
// Een sectie die voor een taal ontbreekt (oprichter, stappen, werken bij) wordt
// overgeslagen tot de vertaling er is.

import { vulAan } from "./vertaal-inhoud.js";

const WERELDBEELD = "/media/wp-content/uploads/2017/02/World_Supportteam-500x9999.webp";

export const overOnsContent = {
  nl: {
    meta: {
      title: "Over hrmforce: wie we zijn en wat we doen | hrmforce",
      description: "Wil je meer weten over het bedrijf hrmforce? We vertellen je er graag meer over op de over ons pagina op de website.",
    },
    homeHref: "/",
    crumb: "Over ons",
    hero: { eyebrow: "Over ons", title: "Over ons" },
    intro: {
      titel: "Over hrmforce",
      alineas: [
        "hrmforce levert HRM-software en assessments aan organisaties die hun selectie, ontwikkeling en inzetbaarheid willen onderbouwen met gegevens in plaats van met indrukken.",
        "Omdat we zelf ondernemers zijn, ondersteunen we onze klanten om hun organisatie te laten groeien door samenwerking te stimuleren en <strong>langdurige relaties</strong> op te bouwen.",
        "Samen kunnen we maatschappelijk verantwoord ondernemen. We zijn <strong>actief in meerdere landen</strong>. Onze lokale distributeurs kunnen je direct in contact brengen met hrmforce. Daarnaast is er een wereldwijd support team in de onderstaande gemarkeerde landen.",
      ],
      beeld: { src: WERELDBEELD, alt: "Wereldwijd support team van hrmforce" },
    },
    waarom: {
      titel: "Waarom hrmforce",
      items: [
        { h: "100% onafhankelijk", p: "Geen private equity of externe investeerders: hrmforce is in eigen beheer. Dat maakt keuzes voor de lange termijn mogelijk." },
        { h: "Nederlands bedrijf", p: "Opgericht en gevestigd in Nederland, met een team dat jouw taal en arbeidsmarkt kent." },
        { h: "Eigen R&amp;D", p: "Onze vragenlijsten en modellen ontwikkelen en valideren we in eigen huis, doorlopend verbeterd op basis van nieuwe inzichten." },
        { h: "Eigen IT in eigen beheer", p: "Ons platform bouwen en beheren we zelf. Dat betekent snelle doorontwikkeling, veilige data en geen afhankelijkheid van derden." },
        { h: "Meest complete aanbod", p: "36+ wetenschappelijk onderbouwde assessments voor selectie, ontwikkeling, teams en employability, onder een dak." },
        { h: "Scherp geprijsd", p: "Een eigen portal op licentiebasis is fors voordeliger en uitgebreider dan losse tools." },
      ],
    },
    oprichter: {
      eyebrow: "Oprichter",
      naam: "Floor Hendriks",
      alt: "Floor Hendriks, oprichter van hrmforce",
      alineas: [
        "Floor heeft een royale ervaring in het adviseren en implementeren van (online) HR-instrumenten en diensten. Al meer dan twintig jaar specialiseert hij zich in het benutten van online assessments en tools voor talentmanagement-uitdagingen in de HR-cyclus, met als doel de prestaties van medewerkers en organisaties te verhogen.",
        "Floor werkt samen met een vast team van specialisten in psychologie, data en HR, zodat elke opdracht met kennis en aandacht wordt uitgevoerd.",
      ],
      meta: "Meer dan twintig jaar ervaring in talentmanagement en HR-assessments.",
    },
    software: {
      titel: "Software leveren voor HRM",
      alineas: ['We leveren <a href="/assessment-overzicht/">online assessments</a> en HRM-oplossingen, met een adviseur die meedenkt over de inzet en de uitkomsten.'],
      domeinen: [
        { h: "Recruitment", href: "/hrm-oplossingen/matching/" },
        { h: "Development", href: "/hrm-oplossingen/development/" },
        { h: "Employability", href: "/hrm-oplossingen/employability/" },
        { h: "Analytics", href: "/hrm-oplossingen/hr-analytics/" },
      ],
    },
    oplossingen: {
      titel: "Software en HRM oplossingen",
      alineas: [
        "Onze software draait in de cloud. Het aanbod loopt van een losse persoonlijkheids- of intelligentievragenlijst tot een portal waarin de hele ontwikkelcyclus staat. We ondersteunen werving en selectie, ontwikkeling, inzetbaarheid en HR-analytics, zodat de gegevens uit die processen bij elkaar blijven.",
        'Ontdek onze <a href="/online-assessments/">online assessments</a> en verken onze <a href="/hrm-oplossingen/">HRM oplossingen</a>.',
      ],
    },
    werkwijze: {
      titel: "Way of working",
      alineas: ["Het potentieel van je sollicitanten en medewerkers in kaart brengen doen we in <strong>zes stappen</strong>. Hieronder staat per stap wat er gebeurt en wat je eruit krijgt."],
      stappen: [
        { h: "Scan", p: "We beginnen met een scan van je organisatie: welke functies staan open, waar loopt de doorstroom vast en welke gegevens zijn er al. Daaruit volgt welke vraag er werkelijk ligt. De scan duurt doorgaans een tot twee weken en levert een beeld waar we samen op verder bouwen." },
        { h: "Insight", p: "De uitkomsten van de scan bespreken we met onze adviseurs. We benoemen wat opvalt, welke patronen terugkomen en welke stappen daarbij passen. Samen stellen we een plan van aanpak vast met een volgorde en een tijdpad." },
        { h: "Custom-made", p: "Op basis van de scan stellen we een traject samen dat past bij je organisatie: welke instrumenten, voor welke functies, in welke volgorde. Je krijgt een voorstel met de stappen, de doorlooptijd en de kosten, zodat je vooraf weet waar je aan begint." },
        { h: "Assessment", p: "Onze psychologen ontwikkelen en valideren de vragenlijsten in eigen huis. We herzien ze op basis van nieuwe normgroepen, gebruikersdata en vragen van klanten. Ontbreekt er een instrument voor jouw situatie, dan bouwen we het op maat." },
        { h: "Result", p: "De rapportages laten zien waar iemand sterk in is, waar ontwikkeling nodig is en hoe dat zich verhoudt tot de functie en het team. Daarmee onderbouw je een selectiebesluit, een ontwikkelplan of een teamsamenstelling met meer dan een gesprek alleen." },
        { h: "Workflow", p: "In het portal leg je de ontwikkelcyclus vast: doelen, gesprekken, feedback en voortgang op een plek. Zo blijft een assessment geen momentopname en zie je over de jaren heen wat er in je organisatie verandert." },
      ],
    },
    werkenBij: { titel: "Werken bij hrmforce", tekst: 'Bekijk <a href="/vacatures/">onze openstaande vacatures</a>.' },
  },

  en: {
    meta: {
      title: "About us - hrmforce",
      description: "As a leading provider of HRM software, we help organizations operate more effectively by creating new ways of working and new partnerships.",
    },
    homeHref: "/en/",
    crumb: "About us",
    hero: { eyebrow: "About us", title: "About us" },
    intro: {
      titel: "About hrmforce",
      alineas: [
        "As a leading provider of HRM software, we help organizations operate more effectively by creating new ways of working and new partnerships.",
        "Because we are entrepreneurs ourselves, we support our customers to grow their organizations by encouraging collaboration and building <strong>long-term relationships</strong>.",
        "Together, we can be socially responsible. We are <strong>active in several countries</strong>. Our local distributors can put you in direct contact with hrmforce. In addition, there is a global support team in the highlighted countries below.",
      ],
      beeld: { src: WERELDBEELD, alt: "Global support team of hrmforce" },
    },
    waarom: {
      titel: "Why hrmforce",
      items: [
        { h: "100% independent", p: "No private equity or external investors: hrmforce is fully self-owned. That lets us choose the long term and you as our client." },
        { h: "Dutch company", p: "Founded and based in the Netherlands, with a team that knows your language and labour market." },
        { h: "Own R&amp;D", p: "We develop and validate our questionnaires and models in-house, continuously improved on new insights." },
        { h: "Own IT, fully in-house", p: "We build and run our platform ourselves. That means fast development, secure data and no dependence on third parties." },
        { h: "Most complete offering", p: "36+ scientifically grounded assessments for selection, development, teams and employability, under one roof." },
        { h: "Sharply priced", p: "A licensed portal is considerably cheaper and more extensive than separate tools." },
      ],
    },
    software: {
      titel: "Providing software for HRM",
      alineas: ['We serve businesses with information technology by delivering <a href="/en/online-assessments/">online assessments</a>, HRM solutions and services.'],
      domeinen: [
        { h: "Recruitment", href: "/en/hrm-oplossingen/" },
        { h: "Development", href: "/en/hrm-oplossingen/" },
        { h: "Employability", href: "/en/hrm-oplossingen/" },
        { h: "Analytics", href: "/en/hrm-oplossingen/" },
      ],
    },
    oplossingen: {
      titel: "Software and HRM solutions",
      alineas: [
        "We develop cloud-based solutions for people management, ranging from a single personality or ability questionnaire to a portal that holds the whole development cycle. We support recruitment, development, employability and analytics, so the data from those processes stays together.",
        'Explore our <a href="/en/online-assessments/">online assessments</a> or our <a href="/en/hrm-oplossingen/">HRM solutions</a>.',
      ],
    },
    werkwijze: {
      titel: "Way of working",
      alineas: ["Mapping the potential of your applicants and employees takes <strong>six steps</strong>. Below is what happens at each step and what it gives you."],
      stappen: [
        { h: "Scan", p: "We start with a scan of your organization: which roles are open, where progression stalls and what data already exists. That shows what the real question is. The scan usually takes one to two weeks and gives a picture to build on together." },
        { h: "Insight", p: "We discuss the outcomes of the scan with our consultants. We name what stands out, which patterns recur and which steps fit. Together we set a plan of action with an order and a timeline." },
        { h: "Custom-made", p: "Based on the scan we put together a track that fits your organization: which instruments, for which roles, in which order. You get a proposal with the steps, the lead time and the costs, so you know in advance what you are starting." },
        { h: "Assessment", p: "Our psychologists develop and validate the questionnaires in-house. We revise them on new norm groups, user data and client questions. If an instrument for your situation is missing, we build it to measure." },
        { h: "Result", p: "The reports show where someone is strong, where development is needed and how that relates to the role and the team. That lets you ground a selection decision, a development plan or a team composition in more than a conversation alone." },
        { h: "Workflow", p: "In the portal you record the development cycle: goals, conversations, feedback and progress in one place. An assessment then stays more than a snapshot and you see what changes in your organization over the years." },
      ],
    },
  },

  de: {
    meta: {
      title: "Über hrmforce - hrmforce",
      description: "Als führender Anbieter von HRM-Software helfen wir Unternehmen, wirksamer zu arbeiten, indem wir neue Arbeitsweisen und neue Partnerschaften schaffen.",
    },
    homeHref: "/de/",
    crumb: "Über uns",
    hero: { eyebrow: "Über uns", title: "Über uns" },
    intro: {
      titel: "Über hrmforce",
      alineas: [
        "Als führender Anbieter von HRM-Software helfen wir Unternehmen, wirksamer zu arbeiten, indem wir neue Arbeitsweisen und neue Partnerschaften schaffen.",
        "Da wir selbst Unternehmer sind, unterstützen wir unsere Kunden beim Ausbau ihrer Organisationen, indem wir die Zusammenarbeit fördern und <strong>langfristige Beziehungen</strong> aufbauen.",
        "Gemeinsam können wir als Unternehmen unsere soziale Verantwortung nehmen. Wir sind <strong>in mehreren Ländern tätig</strong>. Unsere lokalen Vertriebspartner können Sie direkt mit hrmforce in Kontakt bringen. Außerdem gibt es ein globales Support-Team in den unten genannten Ländern.",
      ],
      beeld: { src: WERELDBEELD, alt: "Globales Support-Team von hrmforce" },
    },
    waarom: {
      titel: "Warum hrmforce",
      items: [
        { h: "100% unabhängig", p: "Keine Private Equity oder externen Investoren: hrmforce ist vollständig in Eigenbesitz. So wählen wir die lange Sicht und Sie als Kunde." },
        { h: "Niederländisches Unternehmen", p: "Gegründet und ansässig in den Niederlanden, mit einem Team, das Ihre Sprache und Ihren Arbeitsmarkt kennt." },
        { h: "Eigene R&amp;D", p: "Wir entwickeln und validieren unsere Fragebögen und Modelle im eigenen Haus, laufend verbessert auf Basis neuer Erkenntnisse." },
        { h: "Eigene IT in Eigenregie", p: "Wir bauen und betreiben unsere Plattform selbst. Das bedeutet schnelle Weiterentwicklung, sichere Daten und keine Abhängigkeit von Dritten." },
        { h: "Umfassendstes Angebot", p: "36+ wissenschaftlich fundierte Assessments für Auswahl, Entwicklung, Teams und Beschäftigungsfähigkeit, unter einem Dach." },
        { h: "Attraktiv bepreist", p: "Ein Lizenzportal ist deutlich günstiger und umfangreicher als einzelne Tools." },
      ],
    },
    software: {
      titel: "Bereitstellung von Software für HRM",
      alineas: ['Wir unterstützen Unternehmen mit Informationstechnologie, indem wir <a href="/de/online-assessments/">Online-Assessments</a>, HRM-Lösungen und Beratung anbieten.'],
      domeinen: [
        { h: "Personalbeschaffung", href: "/de/hrm-loesungen-2/matching/" },
        { h: "Entwicklung", href: "/de/hrm-loesungen-2/entwicklung/" },
        { h: "Beschäftigungsfähigkeit", href: "/de/hrm-loesungen-2/beschaftigungsfahigkeit/" },
        { h: "Analytik", href: "/de/hrm-loesungen-2/hr-analytik/" },
      ],
    },
    oplossingen: {
      titel: "Software und HRM-Lösungen",
      alineas: [
        "Unsere Software läuft in der Cloud. Das Spektrum reicht von einem einzelnen Persönlichkeits- oder Intelligenzfragebogen bis zu einem Portal, in dem der gesamte Entwicklungszyklus steht. Wir unterstützen Rekrutierung und Auswahl, Entwicklung, Beschäftigungsfähigkeit und HR-Analytik, sodass die Daten aus diesen Prozessen zusammenbleiben.",
        'Entdecken Sie unsere <a href="/de/online-assessments/">Online-Assessments</a> und werfen Sie einen Blick auf unsere <a href="/de/hrm-oplossingen/">HRM-Lösungen</a>.',
      ],
    },
    werkwijze: {
      titel: "Arbeitsweise",
      alineas: ["Das Potenzial Ihrer Bewerber und Mitarbeiter erfassen wir in <strong>sechs Schritten</strong>. Unten steht pro Schritt, was geschieht und was Sie daraus bekommen."],
      stappen: [
        { h: "Scan", p: "Wir beginnen mit einem Scan Ihrer Organisation: welche Stellen offen sind, wo der Durchlauf stockt und welche Daten bereits vorliegen. Daraus folgt, welche Frage wirklich vorliegt. Der Scan dauert in der Regel ein bis zwei Wochen und liefert ein Bild, auf dem wir gemeinsam aufbauen." },
        { h: "Einblick", p: "Die Ergebnisse des Scans besprechen wir mit unseren Beratern. Wir benennen, was auffällt, welche Muster wiederkehren und welche Schritte dazu passen. Gemeinsam legen wir einen Aktionsplan mit Reihenfolge und Zeitplan fest." },
        { h: "Maßgeschneidert", p: "Auf Basis des Scans stellen wir einen Weg zusammen, der zu Ihrer Organisation passt: welche Instrumente, für welche Funktionen, in welcher Reihenfolge. Sie erhalten ein Angebot mit den Schritten, der Laufzeit und den Kosten, sodass Sie vorab wissen, worauf Sie sich einlassen." },
        { h: "Assessment", p: "Unsere Psychologen entwickeln und validieren die Fragebögen im eigenen Haus. Wir überarbeiten sie auf Basis neuer Normgruppen, Nutzerdaten und Kundenfragen. Fehlt ein Instrument für Ihre Situation, bauen wir es nach Maß." },
        { h: "Ergebnis", p: "Die Berichte zeigen, worin jemand stark ist, wo Entwicklung nötig ist und wie sich das zur Funktion und zum Team verhält. Damit begründen Sie eine Auswahlentscheidung, einen Entwicklungsplan oder eine Teamzusammensetzung mit mehr als einem Gespräch allein." },
        { h: "Workflow", p: "Im Portal halten Sie den Entwicklungszyklus fest: Ziele, Gespräche, Feedback und Fortschritt an einem Ort. So bleibt ein Assessment keine Momentaufnahme und Sie sehen über die Jahre, was sich in Ihrer Organisation verändert." },
      ],
    },
  },

  fr: {
    meta: {
      title: "À propos de hrmforce - hrmforce",
      description: "En tant que principal fournisseur de logiciels de GRH, nous aidons les organisations à travailler plus justement grâce à de nouvelles méthodes et à de nouveaux partenariats.",
    },
    homeHref: "/fr/",
    crumb: "À propos",
    hero: { eyebrow: "À propos", title: "À propos de nous" },
    intro: {
      titel: "À propos de hrmforce",
      alineas: [
        "En tant que principal fournisseur de logiciels de GRH, nous aidons les organisations à travailler plus justement en instaurant de nouvelles méthodes de travail et de nouveaux partenariats.",
        "Étant nous-mêmes des entrepreneurs, nous aidons nos clients à développer leurs organisations en les incitant à coopérer et à établir des <strong>relations à long terme</strong>.",
        "Tous ensemble, nous pourrons entreprendre de façon socialement responsable. Nous sommes <strong>actifs dans plusieurs pays</strong>. Les distributeurs locaux peuvent vous mettre en contact direct avec hrmforce. En outre, une équipe d'assistance internationale est présente dans les pays indiqués ci-dessous.",
      ],
      beeld: { src: WERELDBEELD, alt: "Équipe d'assistance internationale de hrmforce" },
    },
    waarom: {
      titel: "Pourquoi hrmforce",
      items: [
        { h: "100% indépendant", p: "Pas de private equity ni d'investisseurs externes : hrmforce est entièrement détenu par ses fondateurs. Nous choisissons le long terme et vous comme client." },
        { h: "Entreprise néerlandaise", p: "Fondée et basée aux Pays-Bas, avec une équipe qui connaît votre langue et votre marché du travail." },
        { h: "R&amp;D interne", p: "Nous développons et validons nos questionnaires et modèles en interne, améliorés en continu selon les nouvelles connaissances." },
        { h: "IT interne, en propre", p: "Nous construisons et exploitons notre plateforme nous-mêmes. Cela signifie un développement rapide, des données sécurisées et aucune dépendance à des tiers." },
        { h: "Offre la plus complète", p: "36+ évaluations scientifiquement fondées pour la sélection, le développement, les équipes et l'employabilité, sous un même toit." },
        { h: "Prix compétitif", p: "Un portail sous licence est nettement moins cher et plus complet que des outils séparés." },
      ],
    },
    software: {
      titel: "Fourniture de logiciels pour GRH",
      alineas: ['Nous proposons aux organisations des <a href="/fr/online-assessments/">tests en ligne</a>, des outils de GRH et un accompagnement par un conseiller.'],
      domeinen: [
        { h: "Recrutement", href: "/fr/hrm-oplossingen/" },
        { h: "Évolution", href: "/fr/hrm-oplossingen/" },
        { h: "Employabilité", href: "/fr/hrm-oplossingen/" },
        { h: "Analyses", href: "/fr/hrm-oplossingen/" },
      ],
    },
    oplossingen: {
      titel: "Logiciels et outils de GRH",
      alineas: [
        "Nos logiciels fonctionnent dans le cloud. L'offre va d'un simple questionnaire de personnalité ou d'intelligence à un portail qui contient tout le cycle de développement. Nous soutenons le recrutement, le développement, l'employabilité et les analyses RH, de sorte que les données de ces processus restent ensemble.",
        'Découvrez nos <a href="/fr/online-assessments/">tests en ligne</a> et nos <a href="/fr/hrm-oplossingen/">solutions de GRH</a>.',
      ],
    },
    werkwijze: {
      titel: "Notre méthode",
      alineas: ["Cartographier le potentiel de vos candidats et de vos collaborateurs se fait en <strong>six étapes</strong>. Ci-dessous, ce qui se passe à chaque étape et ce que vous en retirez."],
      stappen: [
        { h: "Scan", p: "Nous commençons par un scan de votre organisation : quels postes sont ouverts, où la mobilité se bloque et quelles données existent déjà. Il en ressort quelle est la vraie question. Le scan dure en général une à deux semaines et donne une image sur laquelle nous construisons ensemble." },
        { h: "Insight", p: "Nous discutons des résultats du scan avec nos conseillers. Nous nommons ce qui ressort, quels schémas reviennent et quelles étapes y répondent. Ensemble, nous fixons un plan d'action avec un ordre et un calendrier." },
        { h: "Sur mesure", p: "Sur la base du scan, nous composons un parcours adapté à votre organisation : quels instruments, pour quelles fonctions, dans quel ordre. Vous recevez une proposition avec les étapes, la durée et les coûts, pour savoir à l'avance ce que vous engagez." },
        { h: "Assessment", p: "Nos psychologues développent et valident les questionnaires en interne. Nous les révisons selon de nouveaux groupes de référence, les données d'usage et les questions des clients. S'il manque un instrument pour votre situation, nous le construisons sur mesure." },
        { h: "Résultat", p: "Les rapports montrent les points forts d'une personne, ce qui demande du développement et comment cela se rapporte à la fonction et à l'équipe. Vous fondez ainsi une décision de sélection, un plan de développement ou une composition d'équipe sur plus qu'un entretien." },
        { h: "Workflow", p: "Dans le portail, vous consignez le cycle de développement : objectifs, entretiens, feedback et progression au même endroit. Une évaluation ne reste alors pas un instantané et vous voyez au fil des années ce qui change dans votre organisation." },
      ],
    },
    visie: {
      titel: "Notre vision en résumé",
      alineas: [
        "Chez hrmforce, nous sommes conscients que nos actions portent au-delà de nos clients directs. Elles touchent les personnes pour lesquelles et avec lesquelles nous travaillons, la planète dans son ensemble et la société dont nous faisons partie.",
        "Nous cherchons donc à ce que nos activités aient l'effet positif le plus large possible, tout en limitant au maximum les effets potentiellement négatifs. Par responsabilité sociale, nous entendons mener les affaires de manière éthique, sociale et environnementale, tout en préservant les objectifs de croissance de l'entreprise.",
      ],
    },
  },

  es: {
    meta: {
      title: "Sobre hrmforce - hrmforce",
      description: "Como proveedor líder de software de gestión de recursos humanos, ayudamos a las organizaciones a trabajar mejor con nuevas formas de trabajo y nuevas asociaciones.",
    },
    homeHref: "/es/",
    crumb: "Sobre nosotros",
    hero: { eyebrow: "Sobre nosotros", title: "Sobre nosotros" },
    intro: {
      titel: "Sobre hrmforce",
      alineas: [
        "Como proveedor líder de software de gestión de recursos humanos, ayudamos a las organizaciones a trabajar mejor creando nuevas formas de trabajo y nuevas asociaciones.",
        "Siendo nosotros mismos empresarios, ayudamos a nuestros clientes a hacer crecer sus organizaciones fomentando la colaboración y estableciendo <strong>relaciones a largo plazo</strong>.",
        "Juntos, podemos ser empresas socialmente responsables. <strong>Operamos en varios países</strong>. Nuestros distribuidores locales pueden ponerte en contacto directo con hrmforce. También hay un equipo de apoyo global en los países que se destacan a continuación.",
      ],
      beeld: { src: WERELDBEELD, alt: "Equipo de apoyo global de hrmforce" },
    },
    waarom: {
      titel: "Por qué hrmforce",
      items: [
        { h: "100% independiente", p: "Sin private equity ni inversores externos: hrmforce es totalmente propio. Así elegimos el largo plazo y a ti como cliente." },
        { h: "Empresa neerlandesa", p: "Fundada y con sede en los Países Bajos, con un equipo que conoce tu idioma y tu mercado laboral." },
        { h: "I+D propia", p: "Desarrollamos y validamos nuestros cuestionarios y modelos internamente, mejorados de forma continua con nuevos conocimientos." },
        { h: "TI propia, en casa", p: "Construimos y operamos nuestra plataforma nosotros mismos. Eso significa desarrollo rápido, datos seguros y ninguna dependencia de terceros." },
        { h: "Oferta más completa", p: "36+ evaluaciones con base científica para selección, desarrollo, equipos y empleabilidad, bajo un mismo techo." },
        { h: "Precio competitivo", p: "Un portal con licencia es bastante más barato y más completo que herramientas sueltas." },
      ],
    },
    software: {
      titel: "Suministro de software para la gestión de recursos humanos",
      alineas: ['Servimos a las organizaciones con <a href="/es/online-assessments/">evaluaciones en línea</a>, soluciones de RR. HH. y el acompañamiento de un asesor.'],
      domeinen: [
        { h: "Contratación", href: "/es/hrm-oplossingen/" },
        { h: "Desarrollo", href: "/es/hrm-oplossingen/" },
        { h: "Empleabilidad", href: "/es/hrm-oplossingen/" },
        { h: "Analítica", href: "/es/hrm-oplossingen/" },
      ],
    },
    oplossingen: {
      titel: "Software y soluciones de gestión de recursos humanos",
      alineas: [
        "Nuestro software funciona en la nube. La oferta va desde un cuestionario suelto de personalidad o inteligencia hasta un portal que contiene todo el ciclo de desarrollo. Apoyamos el reclutamiento y la selección, el desarrollo, la empleabilidad y el análisis de RR. HH., de modo que los datos de esos procesos permanecen juntos.",
        'Descubre nuestras <a href="/es/online-assessments/">evaluaciones en línea</a> y explora nuestras <a href="/es/hrm-oplossingen/">soluciones de RR. HH.</a>',
      ],
    },
    werkwijze: {
      titel: "Nuestra forma de trabajar",
      alineas: ["Mapear el potencial de tus candidatos y empleados se hace en <strong>seis pasos</strong>. A continuación, lo que ocurre en cada paso y lo que obtienes."],
      stappen: [
        { h: "Scan", p: "Empezamos con un escaneo de tu organización: qué puestos están abiertos, dónde se estanca la movilidad y qué datos ya existen. De ahí se desprende cuál es la pregunta real. El escaneo dura normalmente una o dos semanas y da una imagen sobre la que construimos juntos." },
        { h: "Insight", p: "Los resultados del escaneo los comentamos con nuestros asesores. Nombramos lo que destaca, qué patrones se repiten y qué pasos encajan. Juntos fijamos un plan de acción con un orden y un calendario." },
        { h: "A medida", p: "A partir del escaneo componemos un trayecto que encaja con tu organización: qué instrumentos, para qué puestos, en qué orden. Recibes una propuesta con los pasos, el plazo y los costes, para saber de antemano en qué te embarcas." },
        { h: "Assessment", p: "Nuestros psicólogos desarrollan y validan los cuestionarios internamente. Los revisamos con nuevos grupos normativos, datos de uso y preguntas de clientes. Si falta un instrumento para tu situación, lo construimos a medida." },
        { h: "Resultado", p: "Los informes muestran en qué es fuerte una persona, dónde hace falta desarrollo y cómo se relaciona eso con el puesto y el equipo. Así fundamentas una decisión de selección, un plan de desarrollo o la composición de un equipo con más que una entrevista." },
        { h: "Workflow", p: "En el portal registras el ciclo de desarrollo: objetivos, conversaciones, feedback y progreso en un solo lugar. Una evaluación deja así de ser una foto fija y ves a lo largo de los años qué cambia en tu organización." },
      ],
    },
  },

  ro: {
    meta: {
      title: "Despre hrmforce - hrmforce",
      description: "În calitate de furnizor lider de software HRM, ajutăm organizațiile să lucreze mai bine prin crearea de noi modalități de lucru și noi parteneriate.",
    },
    homeHref: "/ro/",
    crumb: "Despre noi",
    hero: { eyebrow: "Despre noi", title: "Despre noi" },
    intro: {
      titel: "Despre hrmforce",
      alineas: [
        "În calitate de furnizor lider de software HRM, ajutăm organizațiile să lucreze mai bine prin crearea de noi modalități de lucru și noi parteneriate.",
        "Fiind noi înșine antreprenori, ne sprijinim clienții să își dezvolte organizațiile prin încurajarea colaborării și construirea unor <strong>relații pe termen lung</strong>.",
        "Împreună, putem fi întreprinderi responsabile din punct de vedere social. <strong>Ne desfășurăm activitatea în mai multe țări</strong>. Distribuitorii noștri locali vă pot pune în contact direct cu hrmforce. Există, de asemenea, o echipă de asistență globală în țările evidențiate mai jos.",
      ],
      beeld: { src: WERELDBEELD, alt: "Echipă de asistență globală hrmforce" },
    },
    waarom: {
      titel: "De ce hrmforce",
      items: [
        { h: "100% independent", p: "Fără private equity sau investitori externi: hrmforce este complet în proprietate proprie. Astfel alegem termenul lung și pe tine ca client." },
        { h: "Companie neerlandeză", p: "Fondată și cu sediul în Țările de Jos, cu o echipă care îți cunoaște limba și piața muncii." },
        { h: "R&amp;D propriu", p: "Ne dezvoltăm și validăm chestionarele și modelele intern, îmbunătățite continuu pe baza noilor cunoștințe." },
        { h: "IT propriu, în regie proprie", p: "Ne construim și administrăm platforma singuri. Asta înseamnă dezvoltare rapidă, date sigure și nicio dependență de terți." },
        { h: "Cea mai completă ofertă", p: "36+ evaluări fundamentate științific pentru selecție, dezvoltare, echipe și angajabilitate, sub un singur acoperiș." },
        { h: "Preț competitiv", p: "Un portal cu licență este considerabil mai ieftin și mai complet decât instrumente separate." },
      ],
    },
    software: {
      titel: "Furnizarea de software pentru managementul resurselor umane",
      alineas: ['Servim organizațiile cu <a href="/ro/online-assessments/">evaluări online</a>, soluții HRM și consilierea unui specialist.'],
      domeinen: [
        { h: "Recrutare", href: "/ro/hrm-oplossingen/" },
        { h: "Dezvoltare", href: "/ro/hrm-oplossingen/" },
        { h: "Capacitate de angajare", href: "/ro/hrm-oplossingen/" },
        { h: "Analize", href: "/ro/hrm-oplossingen/" },
      ],
    },
    oplossingen: {
      titel: "Software și soluții HRM",
      alineas: [
        "Software-ul nostru rulează în cloud. Oferta merge de la un singur chestionar de personalitate sau de inteligență până la un portal care conține întregul ciclu de dezvoltare. Susținem recrutarea și selecția, dezvoltarea, capacitatea de angajare și analiza resurselor umane, astfel încât datele din aceste procese rămân împreună.",
        'Descoperă <a href="/ro/online-assessments/">evaluările noastre online</a> și explorează <a href="/ro/hrm-oplossingen/">soluțiile noastre HRM</a>.',
      ],
    },
    werkwijze: {
      titel: "Modul nostru de lucru",
      alineas: ["Cartografierea potențialului candidaților și angajaților tăi se face în <strong>șase pași</strong>. Mai jos vezi ce se întâmplă la fiecare pas și ce obții."],
      stappen: [
        { h: "Scan", p: "Începem cu o scanare a organizației tale: ce posturi sunt deschise, unde se blochează mobilitatea și ce date există deja. De acolo reiese care este întrebarea reală. Scanarea durează de obicei una până la două săptămâni și oferă o imagine pe care construim împreună." },
        { h: "Insight", p: "Rezultatele scanării le discutăm cu consilierii noștri. Numim ce iese în evidență, ce tipare se repetă și ce pași se potrivesc. Împreună stabilim un plan de acțiune cu o ordine și un calendar." },
        { h: "La comandă", p: "Pe baza scanării alcătuim un traseu potrivit organizației tale: ce instrumente, pentru ce funcții, în ce ordine. Primești o propunere cu pașii, durata și costurile, ca să știi dinainte la ce te angajezi." },
        { h: "Assessment", p: "Psihologii noștri dezvoltă și validează chestionarele intern. Le revizuim pe baza unor grupuri normative noi, a datelor de utilizare și a întrebărilor clienților. Dacă lipsește un instrument pentru situația ta, îl construim la comandă." },
        { h: "Rezultat", p: "Rapoartele arată unde este cineva puternic, unde este nevoie de dezvoltare și cum se raportează asta la funcție și la echipă. Astfel fundamentezi o decizie de selecție, un plan de dezvoltare sau componența unei echipe cu mai mult decât o discuție." },
        { h: "Workflow", p: "În portal consemnezi ciclul de dezvoltare: obiective, discuții, feedback și progres într-un singur loc. O evaluare nu mai rămâne astfel o fotografie de moment și vezi de-a lungul anilor ce se schimbă în organizația ta." },
      ],
    },
  },
};

// Talen zonder eigen tekst in dit bestand worden aangevuld uit
// src/data/translations-content/<taal>.json. Zie vertaal-inhoud.js.
Object.assign(overOnsContent, vulAan(overOnsContent));
