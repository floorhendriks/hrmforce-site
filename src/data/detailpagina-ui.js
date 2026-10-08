// Vaste woorden op de HRM-oplossingen- en adviespagina's: kruimelpad, knoppen,
// tussenkopjes en de slotoproep. Ze stonden eerder in de .astro-bestanden zelf
// en waren daardoor onzichtbaar voor het vertaalscript.
//
// De tekst staat alleen in het Nederlands. vertaalAlles maakt er een kopie per
// taal van met de vertalingen uit src/data/translations-content/<taal>.json.

import { vertaalAlles, voorTaal } from "./vertaal-inhoud.js";

const OPLOSSING_NL = {
  home: "Home",
  sectie: "HRM Oplossingen",
  demo: "Plan een gratis demo",
  tarieven: "Bekijk tarieven",
  toelichting: "Toelichting",
  bijschrift: "Wij laten je graag in een demo zien hoe deze oplossing werkt voor jouw organisatie.",
  ctaTitel: "Benieuwd wat deze oplossing voor jouw organisatie kan doen?",
  ctaLead: "Plan een vrijblijvende demo en zie deze oplossing in actie, of bekijk direct de mogelijkheden en tarieven.",
};

const ADVIES_NL = {
  home: "Home",
  sectie: "Advies",
  kennismaking: "Plan een gratis kennismaking",
  tarieven: "Bekijk tarieven",
  toelichting: "Toelichting",
  bijschrift: "Wij stellen samen met jou een traject op maat samen dat past bij jouw vraagstuk.",
  ctaTitel: "Klaar om hier samen mee aan de slag te gaan?",
  ctaLead: "Plan een gratis kennismaking en ontdek hoe hrmforce jouw HR-vraagstuk concreet aanpakt.",
};

// De labels van het stappenplan-blok (PlanBlock).
const PLANBLOK_NL = {
  rolverdeling: "Rolverdeling",
  hrm: "Wat hrmforce doet",
  org: "Wat jij doet",
};

export const oplossingUi = vertaalAlles(OPLOSSING_NL);
export const adviesUi = vertaalAlles(ADVIES_NL);
export const planblokUi = vertaalAlles(PLANBLOK_NL);

export const oplossingUiVoor = (taal) => voorTaal(oplossingUi, taal);
export const adviesUiVoor = (taal) => voorTaal(adviesUi, taal);
export const planblokUiVoor = (taal) => voorTaal(planblokUi, taal);
