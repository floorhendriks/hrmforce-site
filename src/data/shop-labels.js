/* Labels voor de filters en de labeltjes op de productkaarten in de webshop.
   De waarden zelf komen uit Shopify en blijven Nederlands, want daar filtert de
   code op. Alleen wat de bezoeker leest wordt vertaald. Staat een waarde hier
   niet, dan blijft de oorspronkelijke tekst staan. */

const l = (nl, en, de, fr, es, ro) => ({ nl, en, de, fr, es, ro });

// Segmenten: het producttype uit Shopify.
const SEGMENT = {
  "360 Feedback": l("360 Feedback", "360 Feedback", "360-Feedback", "Feedback 360", "Feedback 360", "Feedback 360"),
  "Gedrag": l("Gedrag", "Behaviour", "Verhalten", "Comportement", "Comportamiento", "Comportament"),
  "Intelligentie": l("Intelligentie", "Intelligence", "Intelligenz", "Intelligence", "Inteligencia", "Inteligență"),
  "Interesse": l("Interesse", "Interests", "Interessen", "Intérêts", "Intereses", "Interese"),
  "Live assessment": l("Live assessment", "Live assessment", "Live-Assessment", "Assessment live", "Assessment presencial", "Assessment live"),
  "Materialen": l("Materialen", "Materials", "Materialien", "Supports", "Materiales", "Materiale"),
  "Motivatie": l("Motivatie", "Motivation", "Motivation", "Motivation", "Motivación", "Motivație"),
  "Persoonlijkheid": l("Persoonlijkheid", "Personality", "Persönlichkeit", "Personnalité", "Personalidad", "Personalitate"),
  "Simulaties": l("Simulaties", "Simulations", "Simulationen", "Simulations", "Simulaciones", "Simulări"),
  "Training": l("Training", "Training", "Schulung", "Formation", "Formación", "Training"),
  "Vaardigheden": l("Vaardigheden", "Skills", "Fähigkeiten", "Compétences", "Habilidades", "Competențe"),
  "Voorselectie": l("Voorselectie", "Pre-selection", "Vorauswahl", "Présélection", "Preselección", "Preselecție"),
};

// Stappen in de HR-cyclus: de tags uit Shopify.
const CYCLUS = {
  "Beoordelen": l("Beoordelen", "Appraisal", "Beurteilung", "Évaluation", "Evaluación", "Evaluare"),
  "Doorstroom": l("Doorstroom", "Progression", "Aufstieg", "Évolution interne", "Promoción interna", "Avansare"),
  "Employability": l("Employability", "Employability", "Employability", "Employabilité", "Empleabilidad", "Angajabilitate"),
  "Functioneren": l("Functioneren", "Performance", "Arbeitsleistung", "Performance", "Desempeño", "Performanță"),
  "Mobiliteit": l("Mobiliteit", "Mobility", "Mobilität", "Mobilité", "Movilidad", "Mobilitate"),
  "Ontwikkeling": l("Ontwikkeling", "Development", "Entwicklung", "Développement", "Desarrollo", "Dezvoltare"),
  "Selectie": l("Selectie", "Selection", "Auswahl", "Sélection", "Selección", "Selecție"),
  "Voorselectie": SEGMENT["Voorselectie"],
};

/* Alle labels voor een taal, als platte tabel {waarde: tekst}. Segment en
   cyclus gebruiken dezelfde tabel, want Voorselectie komt in allebei voor met
   dezelfde vertaling. */
export function shopLabels(lang) {
  const uit = {};
  [CYCLUS, SEGMENT].forEach((groep) => {
    Object.keys(groep).forEach((k) => { uit[k] = groep[k][lang] || groep[k].nl; });
  });
  return uit;
}
