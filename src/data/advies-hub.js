// Teksten van de pagina Advies (/advies/).
//
// De tekst staat alleen in het Nederlands. vertaalAlles maakt er een kopie per
// taal van met de vertalingen uit src/data/translations-content/<taal>.json. De
// iconen en de links staan in het sjabloon en de data; die vertalen niet mee.

import { vertaalAlles, voorTaal } from "./vertaal-inhoud.js";

const NL = {
  meta: {
    title: "hrmforce advies | Trainingen, assessments en implementatie",
    description: "Naast onze online assessments en HRM-oplossingen kun je bij ons terecht voor adviestrajecten op maat, live assessments met een assessor en trainingen.",
  },
  crumb: { home: "Home", hier: "Advies" },
  hero: {
    eyebrow: "Advies",
    title: "Advies, assessments en trainingen",
    lead: "Naast de <a href=\"/online-assessments/\">online assessments</a> en <a href=\"/hrm-oplossingen/\">HRM-oplossingen</a> begeleiden onze adviseurs en assessoren trajecten op maat. Je kiest of je het zelf doet met een training, of dat wij het assessment afnemen.",
    knop: "Plan een gratis kennismaking",
    knop2: "Bekijk trainingen",
    note: "In 30 minuten bepalen we samen welk traject past bij jouw vraag.",
  },
  logoKop: "Vertrouwd door 1.200+ organisaties",
  groups: [
    {
      eyebrow: "Trainingen",
      title: "Zelf leren werken met assessments",
      lead: "Zodat je niet bij elke afname een adviseur nodig hebt.",
      items: [
        { h: "Certificatietraining", icon: "cap", p: "Word gecertificeerd gebruiker: vragenlijsten kiezen, resultaten correct interpreteren en zorgvuldig terugkoppelen. Inclusief e-learning psychometrie en toets.", href: "/advies/trainingen/", cta: "Bekijk trainingen" },
        { h: "Training Het goede gesprek", icon: "chat", p: "Voor leidinggevenden die hun bila's, ontwikkel- en jaargesprekken concreter willen maken. Oefenen met eigen casuïstiek en een terugkomsessie.", href: "/advies/training-het-goede-gesprek/", cta: "Bekijk de training" },
        { h: "Teamtraining", icon: "users", p: "Een sessie met het hele team op basis van de teamanalyse: hoe vul je elkaar aan, waar botst het en welke afspraken maak je daarover.", href: "/advies/team-training/", cta: "Bekijk de teamtraining" },
      ],
    },
    {
      eyebrow: "Assessments met een assessor",
      title: "Wij nemen het assessment voor je af",
      lead: "Onze assessoren zetten online vragenlijsten in, voeren daarna een gesprek en koppelen persoonlijk terug. Bekijk ook het <a href=\"/advies/assessments/\">volledige overzicht van live assessments</a>.",
      items: [
        { h: "Selectie-assessment", icon: "clip", p: "Onderbouw je aannamebeslissing met een objectief beeld van geschiktheid, potentieel en risico's, plus doorvraagpunten voor het vervolggesprek.", href: "/advies/selectie-assessment/", cta: "Meer over selectie" },
        { h: "Ontwikkel-assessment", icon: "route", p: "Zicht op waar iemand staat en welke groei realistisch is, als basis voor een ontwikkelplan dat de medewerker zelf herkent.", href: "/advies/ontwikkel-assessment/", cta: "Meer over ontwikkeling" },
        { h: "Executive assessment", icon: "star", p: "Voor senior en directieposities: diepgaand onderzoek naar leiderschap, besluitvorming en drijfveren, met een vertrouwelijke terugkoppeling.", href: "/advies/executive-assessment/", cta: "Meer over executive" },
        { h: "Loopbaan-assessment", icon: "compass", p: "Voor de vraag 'wat wil ik?'. Een traject gericht op richting geven, met persoonlijkheid, drijfveren en interesses als vertrekpunt.", href: "/advies/loopbaan-assessment/", cta: "Meer over loopbaan" },
        { h: "Teamanalyse", icon: "users", p: "Breng in kaart hoe een team is samengesteld: welke rollen zijn sterk vertegenwoordigd, wat ontbreekt en waar zit de spanning.", href: "/advies/teamanalyse/", cta: "Meer over teamanalyse" },
        { h: "Medezeggenschap", icon: "grid", p: "Ondersteuning bij OR- en medezeggenschapstrajecten, van selectie van leden tot ontwikkeling van het orgaan als geheel.", href: "/advies/medezeggenschap/", cta: "Meer over medezeggenschap" },
      ],
    },
    {
      eyebrow: "Advies en implementatie",
      title: "Hulp bij het inrichten van je HR-processen",
      lead: "Van competentietaal tot de complete gesprekscyclus, samen met een vaste adviseur.",
      items: [
        { h: "Talent management", icon: "star", p: "Talent in je organisatie herkennen, benutten en behouden. We vertalen je strategie naar wat dat van mensen vraagt en hoe je dat meet.", href: "/advies/talent-management/", cta: "Meer over talent management" },
        { h: "Competentiemanagement", icon: "grid", p: "Visie en strategie vertaald naar competenties en functieprofielen, zodat er helderheid en structuur komt in alle functies.", href: "/advies/competentie-management/", cta: "Meer over competentiemanagement" },
        { h: "Consultancy en coaching", icon: "chat", p: "Begeleiding bij verandering, en coaching van medewerkers op basis van persoonlijkheid, motivatie en gedrag.", href: "/contact/", cta: "Plan een kennismaking" },
      ],
    },
  ],
  cta: {
    title: "Benieuwd welk traject bij jouw vraag past?",
    lead: "Plan een gratis kennismaking van 30 minuten. We stemmen de aanpak af op je situatie en je krijgt een voorstel met een vaste prijs.",
    knop: "Plan een gratis kennismaking",
    tarieven: "Bekijk tarieven",
  },
};

export const adviesHub = vertaalAlles(NL);

export const adviesHubVoor = (taal) => voorTaal(adviesHub, taal);
