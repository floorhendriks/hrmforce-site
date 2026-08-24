// Koppeling assessment-slug -> Shopify-product (handle, prijs, segment, uitgever).
// Gebruikt door het assessment-overzicht (filter + prijs) en de detailpagina's
// (prijs + 'direct bestellen'). Prijzen komen uit hrmforce-shop-import.csv.
// handle=null: geen betrouwbare productkoppeling -> knop linkt naar de shop-home.
export const SHOP_BASE = "https://shop.hrmforce.com";

export const shopMap = {
  "disc-test": { handle: "disc-vragenlijst", price: "94.00", segments: ["Gedrag"], uitgever: "DISC Academy" },
  "360-graden-feedback": { handle: "360-graden-feedback", price: "114.00", segments: ["360 & Gedrag"], uitgever: "hrmforce" },
  "big-five": { handle: "big-5-test-big-fifty-personality", price: "104.00", segments: ["Persoonlijkheid"], uitgever: "hrmforce" },
  "drijfverentest": { handle: "motivation", price: "74.00", segments: ["Drijfveren"], uitgever: "hrmforce" },
  "ability-scan": { handle: "ability-scan", price: "74.00", segments: ["Capaciteiten"], uitgever: "hrmforce" },
  "ontwikkelassessment": { handle: "ontwikkelmatrix", price: "208.00", segments: [], uitgever: "hrmforce" },
  "studiekeuzetest": { handle: "studiekeuzetest-basis", price: "49.00", segments: [], uitgever: "hrmforce" },
  "lencioni-teamdynamiek": { handle: "lencioni-teamdynamiek", price: "39.00", segments: [], uitgever: "hrmforce" },
  "pulse-survey": { handle: "pulse-survey", price: "34.00", segments: [], uitgever: "hrmforce" },
  "mentale-veerkracht-scan": { handle: "mentale-veerkracht-scan", price: "34.00", segments: [], uitgever: "hrmforce" },
  "levensloop-scan": { handle: "levensloop-scan", price: "34.00", segments: [], uitgever: "hrmforce" },
  "lean-scan": { handle: "lean-scan", price: "34.00", segments: [], uitgever: "hrmforce" },
  "interesse-scan": { handle: "interesse-scan", price: "34.00", segments: ["Interesse"], uitgever: "hrmforce" },
  "duurzame-inzetbaarheid-scan": { handle: "duurzame-inzetbaarheid-scan", price: "34.00", segments: [], uitgever: "hrmforce" },
  "coaching-screener-scan": { handle: "coaching-screener-scan", price: "34.00", segments: [], uitgever: "hrmforce" },
  "value-drives": { handle: "value-drives", price: "79.00", segments: [], uitgever: "hrmforce" },
  "teamanalyse": { handle: "team-analyse", price: "59.00", segments: [], uitgever: "hrmforce" },
  "job-profiler": { handle: "job-profiler", price: "59.00", segments: [], uitgever: "hrmforce" },
  "intake-candidate": { handle: "intake-candidate", price: "34.00", segments: [], uitgever: "hrmforce" },
  "exit-assessment": { handle: "exit-assessment", price: "54.00", segments: [], uitgever: "hrmforce" },
  "cognitieve-test": { handle: "ability-analysis-capaciteitentest", price: "74.00", segments: ["Capaciteiten"], uitgever: "hrmforce" },
  "appraisal": { handle: "appraisal", price: "84.00", segments: ["360 & Gedrag"], uitgever: "hrmforce" },
  "canmeds": { handle: null, price: null, segments: ["Persoonlijkheid"], uitgever: "hrmforce" },
  "beroepskeuze-test": { handle: null, price: null, segments: ["Interesse"], uitgever: "hrmforce" },
  "loopbaanwaarden": { handle: "career-orientations", price: "74.00", segments: ["Drijfveren"], uitgever: "hrmforce" },
  "communicatiestijlen-test": { handle: "communicatie-stijlen", price: "74.00", segments: ["360 & Gedrag", "Persoonlijkheid", "Vaardigheden"], uitgever: "hrmforce" },
  "competentie-check": { handle: "competentietest", price: "74.00", segments: ["360 & Gedrag"], uitgever: "hrmforce" },
  "conflictstijlen-test": { handle: "conflict-styles", price: "74.00", segments: ["360 & Gedrag", "Persoonlijkheid", "Vaardigheden"], uitgever: "hrmforce" },
  "tevredenheidsonderzoek-medewerkers": { handle: "employee-satisfaction", price: "34.00", segments: ["360 & Gedrag", "Drijfveren"], uitgever: "hrmforce" },
  "leiderschapstest": { handle: "leadership-test", price: "74.00", segments: ["Persoonlijkheid"], uitgever: "hrmforce" },
  "leerstijlen": { handle: "leerstijlen-test", price: "74.00", segments: ["Persoonlijkheid"], uitgever: "hrmforce" },
  "15pf": { handle: "15pf", price: "94.00", segments: ["Persoonlijkheid"], uitgever: "hrmforce" },
  "referentie-check": { handle: "referentie-check", price: "34.00", segments: ["360 & Gedrag", "Vaardigheden"], uitgever: "hrmforce" },
  "verkoopvaardigheden": { handle: "verkoopvaardigheden", price: "104.00", segments: ["Vaardigheden"], uitgever: "hrmforce" },
  "groepsrollen": { handle: "team-roles", price: "74.00", segments: ["360 & Gedrag", "Persoonlijkheid"], uitgever: "hrmforce" },
  "typology": { handle: "typology", price: "34.00", segments: [], uitgever: "hrmforce" },
};

export function shopInfo(slug) {
  const m = shopMap[slug] || { handle: null, price: null, segments: [], uitgever: null };
  return {
    ...m,
    url: m.handle ? `${SHOP_BASE}/products/${m.handle}` : SHOP_BASE,
  };
}
