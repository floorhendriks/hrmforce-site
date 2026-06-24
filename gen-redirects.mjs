// Genereert public/_redirects op basis van de echte oude URL's + de nieuwe structuur.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const ROOT = dirname(fileURLToPath(import.meta.url));

// Oude assessment-slugs (uit assessments-sitemap.xml) -> nieuwe bestemming.
// "" = ongewijzigd (geen redirect nodig). Anders -> nieuwe slug. null = naar overzicht.
const OVERVIEW = "/online-assessments/";
const map = {
  "big-fifty": "big-five",
  "ability-scan": "cognitieve-test",
  "cognitieve-capaciteitentest": "cognitieve-test",
  "preselectie/disc-test": "disc-test",
  "ontwikkelmatrix": "ontwikkelassessment",
  "360-graden-feedback": "", "drijfverentest": "", "studiekeuzetest": "",
  "mentale-veerkracht-scan": "", "lencioni-teamdynamiek": "", "leiderschapstest": "",
  // geen eigen nieuwe pagina (vaak shop-producten) -> naar het assessment-overzicht
  "referentie-check": null, "verkoopvaardigheden": null, "job-profiler": null, "intake-candidate": null,
  "exit-assessment": null, "groepsrollen": null, "typology": null, "appraisal": null, "canmeds": null,
  "beroepskeuze-test": null, "loopbaanwaarden": null, "communicatiestijlen-test": null, "competentie-check": null,
  "conflictstijlen-test": null, "tevredenheidsonderzoek-medewerkers": null, "leerstijlen": null, "15pf": null,
  "pulse-survey": null, "levensloop-scan": null, "lean-scan": null, "interesse-scan": null,
  "duurzame-inzetbaarheid-scan": null, "coaching-screener-scan": null, "value-drives": null, "teamanalyse": null,
};

const lines = [];
lines.push("# 301-redirects voor hrmforce - gegenereerd uit de Yoast-sitemap + nieuwe structuur.");
lines.push("# Formaat: <oud>  <nieuw>  301   |   werkt op Cloudflare Pages en Netlify.");
lines.push("");
lines.push("# --- Assessments (NL) ---");
for (const [oldSlug, target] of Object.entries(map)) {
  const from = `/assessments/${oldSlug}/`;
  let to;
  if (target === "") continue;            // ongewijzigd
  else if (target === null) to = OVERVIEW; // geen eigen pagina -> overzicht
  else to = `/assessments/${target}/`;
  lines.push(`${from.padEnd(52)} ${to.padEnd(34)} 301`);
}
lines.push("");
lines.push("# --- Assessments: gelokaliseerde Big Five ---");
lines.push(`/en/assessments/big-fifty-personality-test/                    /en/assessments/big-five/   301`);
lines.push(`/de/assessments/entwicklung/persoenlichkeitstest-big-five/     /de/assessments/big-five/   301`);
lines.push(`/es/assessments/preseleccion/perfil-big-fifty/                 /es/assessments/big-five/   301`);
lines.push("");
lines.push("# --- Gelokaliseerde paginaslugs -> uniforme slugs ---");
const pageRedirects = [
  ["/de/hrm-loesungen/", "/de/hrm-oplossingen/"], ["/de/hrm-loesungen-2/", "/de/hrm-oplossingen/"],
  ["/de/hrmforce/", "/de/over-ons/"], ["/de/kontakt/", "/de/contact/"], ["/de/wissenszentrum/", "/de/kenniscentrum/"],
  ["/fr/hrm-solutions/", "/fr/hrm-oplossingen/"], ["/fr/hrmforce/", "/fr/over-ons/"],
  ["/es/soluciones-de-grh/", "/es/hrm-oplossingen/"], ["/es/asesoria-de-hrmforce/", "/es/advies/"],
  ["/es/lo-que-hacemos/", "/es/over-ons/"], ["/es/contacto/", "/es/contact/"], ["/es/ayuda/", "/es/support/"],
  ["/ro/solutii/", "/ro/hrm-oplossingen/"], ["/ro/ce-facem-noi/", "/ro/over-ons/"], ["/ro/asistenta/", "/ro/support/"],
];
for (const [f, t] of pageRedirects) lines.push(`${f.padEnd(28)} ${t.padEnd(26)} 301`);
lines.push("");
lines.push("# --- Webshop: oude WooCommerce-URL's -> nieuwe shop (alle producten) ---");
lines.push("/winkel/*                 /shop/                 301");
lines.push("/en/winkel/*              /en/shop/              301");
lines.push("/de/einkaufswagen/        /shop/                 301");
lines.push("/fr/boutique/*            /fr/shop/              301");
lines.push("/es/cesta-de-la-compra/   /es/shop/              301");
lines.push("/winkelwagen/             /shop/                 301");
lines.push("/mijn-account/            /shop/                 301");
lines.push("");
lines.push("# Let op: per-product redirects naar Shopify-handles voeg je toe zodra de shop in Shopify staat.");

writeFileSync(join(ROOT, "public", "_redirects"), lines.join("\n") + "\n");
const count = lines.filter((l) => / 301$/.test(l)).length;
console.log(`_redirects gegenereerd: ${count} redirect-regels.`);
