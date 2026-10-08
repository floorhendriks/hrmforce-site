// Teksten van de pagina HRM oplossingen (/hrm-oplossingen/).
//
// De tekst staat alleen in het Nederlands. vertaalAlles maakt er een kopie per
// taal van met de vertalingen uit src/data/translations-content/<taal>.json, zodat
// de pagina in elke taal dezelfde opbouw heeft. De iconen en de links staan in
// het sjabloon en de data; die vertalen niet mee.

import { vertaalAlles, voorTaal } from "./vertaal-inhoud.js";

const NL = {
  meta: {
    title: "HR oplossingen nodig? O.a. matching | Selectie | Gesprekscycli",
    description: "Onze vragenlijsten zijn verwerkt in workflows voor (pre)selectie, ontwikkeling en beoordeling van sollicitanten en medewerkers.",
  },
  crumb: { home: "Home", hier: "HRM oplossingen" },
  hero: {
    eyebrow: "HRM oplossingen",
    title: "HRM oplossingen",
    lead: "hrmforce biedt naast het afnemen van online assessments nog veel meer functionaliteiten. De vragenlijsten zijn verwerkt in workflows voor (pre)selectie, ontwikkeling en beoordeling van sollicitanten en medewerkers.",
  },
  cyclusKop: {
    eyebrow: "De HR-cyclus",
    title: "Eén platform voor de complete HR-cyclus",
    lead: "Onze oplossingen ondersteunen elke fase, van selectie tot beoordeling, met dezelfde gevalideerde vragenlijsten en data.",
  },
  // De vier fases van de HR-cyclus (processchema). Het nummer komt uit de volgorde.
  cyclus: [
    { t: "(Pre)selectie", d: "Objectief de juiste kandidaat kiezen met selectie-assessments.", icon: "search" },
    { t: "Ontwikkeling", d: "Groei sturen met persoonlijke ontwikkelplannen.", icon: "grow" },
    { t: "Functioneren", d: "Voortgang volgen via feedback en gesprekscyclus.", icon: "talk" },
    { t: "Beoordelen", d: "Prestaties objectief evalueren en vastleggen.", icon: "check" },
  ],
  blokkenKop: { eyebrow: "Oplossingen", title: "Kies de oplossing die bij je vraag past" },
  blocks: [
    { h: "Matching & selectie", icon: "target", p: "Vind de best passende kandidaat door het in-en extern selecteren van medewerkers op basis van het gewenste matchprofiel. Dit doen we aan de hand van selectieassessments.", href: "/hrm-oplossingen/matching/" },
    { h: "HR Gesprekscyclus", icon: "cycle", p: "Het maken van een persoonlijk ontwikkelplan voor de kandidaat. Met stap voor stap begeleiding in het proces om ontwikkel- en resultaat afspraken te maken.", href: "/hrm-oplossingen/development/" },
    { h: "Employability", icon: "compass", p: "De kandidaten laten zoeken naar mogelijke beroepen en actueel beschikbare vacatures op basis van hun persoonlijkheid, motivatie en gedrag.", href: "/hrm-oplossingen/employability/" },
    { h: "HR Analytics", icon: "chart", p: "Voor het genereren van geautomatiseerde team-, afdeling- en organisatie overzichten. Deze zijn voor elke vragenlijst beschikbaar.", href: "/hrm-oplossingen/hr-analytics/" },
  ],
  readmore: "Meer informatie",
  cta: {
    title: "Benieuwd wat hrmforce voor jouw HR-proces kan doen?",
    lead: "Plan een vrijblijvende demo en ontdek hoe onze oplossingen selectie, ontwikkeling en beoordeling versterken.",
    demo: "Plan een gratis demo",
    tarieven: "Bekijk tarieven",
  },
  roi: {
    eyebrow: "Rekenhulp",
    title: "Bereken wat objectief selecteren jou oplevert",
    lead: "Een verkeerde aanname kost al snel een veelvoud van een assessment. Reken in twee minuten uit wat gerichter selecteren en ontwikkelen voor jouw organisatie kan besparen.",
    knop: "Open de ROI-rekentool",
  },
};

export const oplossingenHub = vertaalAlles(NL);

export const oplossingenHubVoor = (taal) => voorTaal(oplossingenHub, taal);
