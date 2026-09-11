// Vaste indeling voor de advies- en trainingspagina's: hetzelfde ritme als de
// software-/oplossingenpagina's (stappenplan + rolverdeling), zodat de
// adviespagina's niet als losse blokken aanvoelen.

export const adviesPlanDefault = {
  eyebrow: "Stappenplan",
  title: "Zo verloopt een adviestraject bij hrmforce",
  lead: "Geen open eind en geen verrassingen. Je weet vooraf wat er gebeurt, wie wat doet en wat je krijgt.",
  steps: [
    { t: "Kennismaking", d: "In een gesprek van 30 minuten brengen we je vraag scherp: wat speelt er, wie is betrokken en wat moet er over drie maanden anders zijn." },
    { t: "Voorstel op maat", d: "Je ontvangt een voorstel met de aanpak, de instrumenten die we inzetten, de doorlooptijd en een vaste prijs. Geen uren achteraf." },
    { t: "Uitvoering", d: "We voeren het traject uit met een vaste adviseur als aanspreekpunt. Deelnemers vullen online in, gesprekken en sessies plannen we in overleg." },
    { t: "Terugkoppeling", d: "Je krijgt de uitkomsten in een rapportage plus een mondelinge terugkoppeling, met concrete aanbevelingen in plaats van alleen scores." },
    { t: "Vervolg", d: "Samen bepalen we wat er nodig is om het effect vast te houden: een training, een volgende meting of zelf verder met een eigen portal." },
  ],
  outcome: "Het resultaat: een onderbouwd advies dat je intern kunt uitleggen, en een vervolgstap die past bij wat je organisatie aankan.",
};

export const adviesRolesDefault = {
  title: "Wat doet hrmforce, wat doe je zelf?",
  hrmforce: [
    "Traject ontwerpen en de instrumenten kiezen",
    "Uitvoering, gesprekken en terugkoppeling",
    "Rapportage en concrete aanbevelingen",
    "Een vast aanspreekpunt gedurende het traject",
  ],
  org: [
    "Context en doel aanleveren",
    "Deelnemers aandragen en informeren",
    "Interne communicatie en planning",
    "Besluit over het vervolg",
  ],
};

// Per traject een afwijkend stappenplan waar dat echt anders werkt.
export const adviesPlanBySlug = {
  "certificatietraining": {
    eyebrow: "Stappenplan",
    title: "Van aanmelding tot gecertificeerd gebruiker",
    lead: "De certificatietraining bestaat uit voorbereiding, een trainingsdag en een toets.",
    steps: [
      { t: "Aanmelden", d: "Je schrijft je in via de trainingskalender of we plannen een incompany-datum. Je ontvangt direct de praktische informatie." },
      { t: "Voorbereiden", d: "Vooraf doorloop je de e-learning psychometrie en vul je zelf een aantal vragenlijsten in, zodat je de rapportages vanuit de deelnemer kent." },
      { t: "Trainingsdag", d: "Tijdens de training leer je de vragenlijsten kiezen, scores interpreteren en resultaten zorgvuldig terugkoppelen. Je oefent met echte casuïstiek." },
      { t: "Toets en certificaat", d: "Je rondt af met een toets. Na afronding ben je gecertificeerd gebruiker en mag je zelfstandig assessments inzetten en terugkoppelen." },
      { t: "Nazorg", d: "Bij vragen over een specifieke rapportage kun je terecht bij onze psychologen. Nieuwe functionaliteiten krijg je via updates aangereikt." },
    ],
    outcome: "Het resultaat: je zet assessments zelfstandig en verantwoord in, zonder afhankelijk te zijn van een adviseur bij elke afname.",
  },
  "training-het-goede-gesprek": {
    eyebrow: "Stappenplan",
    title: "Van losse gesprekken naar het goede gesprek",
    lead: "Een training voor leidinggevenden die hun gesprekken concreter en eerlijker willen maken.",
    steps: [
      { t: "Intake met HR", d: "We bepalen waar de gesprekken nu op vastlopen: te vaag, te veel over het verleden of ze vinden simpelweg niet plaats." },
      { t: "Voorbereiding deelnemers", d: "Deelnemers vullen een vragenlijst in over hun eigen gedrag en drijfveren, zodat de training over hun praktijk gaat en niet over theorie." },
      { t: "Trainingsdag", d: "Je oefent gespreksstructuur, doorvragen en het benoemen van wat stroef loopt. Met eigen casussen en directe feedback." },
      { t: "Toepassen", d: "Deelnemers voeren de eerstvolgende gesprekken met de gesprekopzet uit de training, ondersteund door de gesprekscyclus in de portal." },
      { t: "Terugkomsessie", d: "Na een paar weken bespreken we wat werkte en wat niet, en scherpen we de aanpak aan." },
    ],
    outcome: "Het resultaat: gesprekken die daadwerkelijk plaatsvinden, concreter zijn en tot afspraken leiden die worden opgevolgd.",
  },
};

export function adviesPlanFor(slug) {
  return adviesPlanBySlug[slug] || adviesPlanDefault;
}
