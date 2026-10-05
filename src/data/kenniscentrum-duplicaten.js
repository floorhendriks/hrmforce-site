// Kennisartikelen die onder twee adressen op de site stonden.
//
// Twee oorzaken. Bij de migratie uit WordPress kreeg een deel van de artikelen
// een tweede, genest adres met de oude categorie erin; die versie bevatte
// alleen het woord "Verplaatst". Daarnaast zijn vier artikelen later opnieuw
// geschreven onder een kort adres, terwijl het oude adres bleef staan en de
// posities hield.
//
// Links staat het adres dat verdwijnt, rechts het adres dat blijft. De keuze
// is gemaakt op de cijfers uit Search Console: het adres met de vertoningen en
// de klikken blijft staan.
//
// De site bouwt de linkerkant niet meer. De terugvalpagina uit
// npm run hsf:redirects vangt het oude adres op, met noindex en een canonical
// naar het artikel dat blijft. Dat is nodig omdat Cloudflare Pages maar een
// deel van _redirects toepast.
export const DUBBELE_ARTIKELEN = {
  // Lege "Verplaatst"-adressen uit de migratie.
  "/kenniscentrum/onderwijs/werkdruk-onderwijs/":
    "/kenniscentrum/werkdruk-onderwijs/",
  "/kenniscentrum/ontwikkeling/krachtige-talentontwikkeling-begint-met-onbekend-talent-verkennen/":
    "/kenniscentrum/krachtige-talentontwikkeling-begint-met-onbekend-talent-verkennen/",
  "/kenniscentrum/ontwikkeling/lessen-voor-een-goede-hr-vlootschouw-met-ontwikkelaanpak/":
    "/kenniscentrum/lessen-voor-een-goede-hr-vlootschouw-met-ontwikkelaanpak/",
  "/kenniscentrum/ontwikkeling/piramide-van-lencioni/":
    "/assessments/lencioni-teamdynamiek/",

  // Opnieuw geschreven artikelen onder een kort adres. Het oude adres houdt de
  // posities, dus daar blijft het artikel staan.
  "/kenniscentrum/intelligentietest-volwassenen/":
    "/kenniscentrum/capaciteiten/intelligentietest-volwassenen/",
  "/kenniscentrum/ontwikkelassessment-belangrijk/":
    "/kenniscentrum/ontwikkeling/ontwikkelassessment-belangrijk/",
  "/kenniscentrum/matrigma-capaciteitentest/":
    "/kenniscentrum/ontwikkeling/matrigma/",
  "/kenniscentrum/leiderschapsontwikkeling-data/":
    "/kenniscentrum/ontwikkeling/leiderschapsontwikkeling/",
};

// Twee artikelen staan in alle zes talen dubbel. Het tweede adres verdwijnt,
// in elke taal.
const IN_ALLE_TALEN = {
  "/kenniscentrum/hrmforce-bundelt-krachten-met-pearson/":
    "/kenniscentrum/nieuws/hrmforce-bundelt-krachten-met-pearson-2/",
  "/kenniscentrum/7-tips-om-leren-en-ontwikkelen-bij-medewerkers-te-stimuleren/":
    "/kenniscentrum/7-tips-leren-ontwikkelen-medewerkers-stimuleren/",
};
for (const taal of ["", "/en", "/de", "/fr", "/es", "/ro"]) {
  for (const [weg, blijft] of Object.entries(IN_ALLE_TALEN)) {
    DUBBELE_ARTIKELEN[taal + weg] = taal + blijft;
  }
}

// Niet uit het kenniscentrum, wel dezelfde kwestie: /trainingskalender/ is een
// oud artikel uit Sanity met dezelfde trainingsdata als /advies/trainingen/.
// Dat tweede adres wordt bijgehouden, het eerste niet, en stond deels op data
// die al voorbij waren. Het verdwijnt in alle zes talen.
const LOSSE_DUBBELEN = {
  "/trainingskalender/": "/advies/trainingen/",
  // /voorbereiden-assessment/ is het oude adres van de voorbereidingspagina.
  // Beide stonden er, met dezelfde titel en dezelfde inhoud. Het adres dat de
  // site zelf gebruikt en dat in het menu staat is /voorbereiding/.
  "/voorbereiden-assessment/": "/voorbereiding/",
  // "Demo-2" is een tweede democpagina uit de migratie, met die naam ook in de
  // titel. De echte pagina is /demo/, in de andere talen /contact/.
  "/demo-2/": "/demo/",
  // Dit artikel staat twee keer: een keer onder de rubriek en een keer los, met
  // "-2" achter de slug. De versie onder de rubriek blijft.
  "/kenniscentrum/waar-vind-je-de-unieke-vragenlijsten-url-in-hrmforce-week-45-2/":
    "/kenniscentrum/wekelijkse-update/waar-vind-je-de-unieke-vragenlijsten-url-in-hrmforce-week-45/",
};
for (const taal of ["", "/en", "/de", "/fr", "/es", "/ro"]) {
  for (const [weg, blijft] of Object.entries(LOSSE_DUBBELEN)) {
    DUBBELE_ARTIKELEN[taal + weg] = taal + blijft;
  }
}

// Restanten van de migratie uit WordPress. Deze adressen staan nog in Sanity,
// zijn indexeerbaar en staan in de sitemap, maar er linkt niets op de site naar
// toe. Ze zijn stuk voor stuk een dubbel van een pagina die wel in de navigatie
// zit: /es/vacantes/ naast /es/vacatures/, /de/preise/ naast /de/tarieven/,
// en /en/vavcancies/ is een typefout in de slug.
//
// Rechts staat het adres waar de site zelf naartoe linkt; dat blijft staan. De
// terugvalpagina uit npm run hsf:redirects vangt het oude adres op met noindex
// en een canonical, zodat posities meeverhuizen in plaats van op een 404 te
// eindigen.
const WEESPAGINAS = {
  "/de/assessment-ubersicht/":
    "/de/assessment-overzicht/",
  "/de/branchen/":
    "/de/sectoren/",
  "/de/preise/":
    "/de/tarieven/",
  "/de/vorbereitung-auf-ein-assessment/":
    "/de/voorbereiding/",
  "/en/about-us/":
    "/en/over-ons/",
  "/en/consulting/":
    "/en/advies/",
  "/en/home-new/":
    "/en/",
  "/en/key-benefits/":
    "/en/online-assessments/",
  "/en/partners/become-a-partner/":
    "/en/partners/partner-worden/",
  "/en/partners/our-partners/":
    "/en/partners/",
  "/en/preparing-for-assessment/":
    "/en/voorbereiding/",
  "/en/pricing/":
    "/en/tarieven/",
  "/en/vacancies/":
    "/en/vacatures/",
  "/en/vacancies/business-development-intern/":
    "/en/vacatures/stagiair-business-development/",
  "/en/vacancies/independent-hr-business-partner-value-added-reseller-distributor-in-peru/":
    "/en/vacatures/zelfstandige-hr-business-partner-value-added-reseller-distributeur-in-peru/",
  "/en/independent-hr-business-partner-value-added-reseller-distributor-in-spain/":
    "/en/vacatures/zelfstandige-hr-business-partner-value-added-reseller-distributeur-in-spanje/",
  "/en/vavcancies/independent-hr-business-partner-value-added-reseller-distributor-in-argentina/":
    "/en/vacatures/zelfstandige-hr-business-partner-value-added-reseller-distributeur-in-argentinie/",
  "/en/vavcancies/independent-hr-business-partner-value-added-reseller-distributor-in-colombia/":
    "/en/vacatures/zelfstandige-hr-business-partner-value-added-reseller-distributeur-in-colombia/",
  "/en/vavcancies/independent-hr-business-partner-value-added-reseller-distributor-in-ecuador/":
    "/en/vacatures/zelfstandige-hr-business-partner-value-added-reseller-distributeur-in-ecuador/",
  "/en/vavcancies/independent-hr-business-partner-value-added-reseller-distributor-in-mexico/":
    "/en/vacatures/zelfstandige-hr-business-partner-value-added-reseller-distributeur-in-mexico/",
  "/es/asesoria-de-hrmforce/":
    "/es/advies/",
  "/es/asesoria-de-hrmforce/cursos/":
    "/es/advies/trainingen/",
  "/es/asesoria-de-hrmforce/evaluacion-de-rr-hh/":
    "/es/advies/assessments/",
  "/es/ayuda/":
    "/es/support/",
  "/es/ayuda/f-a-q/":
    "/es/support/f-a-q/",
  "/es/ayuda/general-terms-privacy-statement/":
    "/es/support/algemene-voorwaarden/",
  "/es/beneficios-clave/":
    "/es/online-assessments/",
  "/es/contacto/":
    "/es/contact/",
  "/es/gestion-del-talento/":
    "/es/advies/talent-management/",
  "/es/gestion-por-competencias/":
    "/es/advies/competentie-management/",
  "/es/lo-que-hacemos/":
    "/es/over-ons/",
  "/es/precios/":
    "/es/tarieven/",
  "/es/sectores/":
    "/es/sectoren/",
  "/es/socios/":
    "/es/partners/",
  "/es/socios/nuestras-alianzas/":
    "/es/partners/",
  "/es/vacantes/":
    "/es/vacatures/",
  "/es/vacantes/practicante-de-desarrollo-de-negocios/":
    "/es/vacatures/stagiair-business-development/",
  "/es/vacantes/socio-a-de-negocio-de-rr-hh-independiente-value-added-reseller-distribuidor-a-en-argentina/":
    "/es/vacatures/zelfstandige-hr-business-partner-value-added-reseller-distributeur-in-argentinie/",
  "/es/vacantes/socio-a-de-negocio-de-rr-hh-independiente-value-added-reseller-distribuidor-a-en-colombia/":
    "/es/vacatures/zelfstandige-hr-business-partner-value-added-reseller-distributeur-in-colombia/",
  "/es/vacantes/socio-a-de-negocio-de-rr-hh-independiente-value-added-reseller-distribuidor-a-en-ecuador/":
    "/es/vacatures/zelfstandige-hr-business-partner-value-added-reseller-distributeur-in-ecuador/",
  "/es/vacantes/socio-a-de-negocio-de-rr-hh-independiente-value-added-reseller-distribuidor-a-en-espana/":
    "/es/vacatures/zelfstandige-hr-business-partner-value-added-reseller-distributeur-in-spanje/",
  "/es/vacantes/socio-a-de-negocio-de-rr-hh-independiente-value-added-reseller-distribuidor-a-en-mexico/":
    "/es/vacatures/zelfstandige-hr-business-partner-value-added-reseller-distributeur-in-mexico/",
  "/es/vacantes/socio-a-de-negocio-de-rr-hh-independiente-value-added-reseller-distribuidor-a-en-peru/":
    "/es/vacatures/zelfstandige-hr-business-partner-value-added-reseller-distributeur-in-peru/",
  "/fr/boutique/":
    "/fr/shop/",
  "/fr/demander-une-demo/":
    "/fr/contact/",
  "/fr/evaluation-en-ligne/":
    "/fr/online-assessments/",
  "/fr/general-terms-privacy-statement/":
    "/fr/support/algemene-voorwaarden/",
  "/fr/hrm-solutions/":
    "/fr/hrm-oplossingen/",
  "/ro/asistenta/":
    "/ro/support/",
  "/ro/asistenta/f-a-q/":
    "/ro/support/f-a-q/",
  "/ro/asistenta/general-terms-privacy-statement/":
    "/ro/support/algemene-voorwaarden/",
  "/ro/beneficii/":
    "/ro/online-assessments/",
  "/ro/ce-facem-noi/":
    "/ro/over-ons/",
  "/ro/colaboratorii-nostri/":
    "/ro/partners/",
  "/ro/solutii/":
    "/ro/hrm-oplossingen/",
};
for (const [weg, blijft] of Object.entries(WEESPAGINAS)) {
  DUBBELE_ARTIKELEN[weg] = blijft;
}

// Tweede ronde restanten: oude sectiepaden uit WordPress waar de onderliggende
// pagina's ook nog onder stonden. /en/solutions/ naast /en/hrm-oplossingen/,
// /de/hrm-loesungen-2/ naast /de/hrm-oplossingen/, en drie artikelen die onder
// een vertaald sectiepad stonden in plaats van onder /kenniscentrum/.
const WEESPAGINAS_2 = {
  "/en/solutions/":
    "/en/hrm-oplossingen/",
  "/en/solutions/development/":
    "/en/hrm-oplossingen/development/",
  "/en/solutions/hr-analytics/":
    "/en/hrm-oplossingen/hr-analytics/",
  "/en/solutions/employability/":
    "/en/hrm-oplossingen/employability/",
  "/en/solutions/recruitment/":
    "/en/hrm-oplossingen/matching/",
  "/es/soluciones-de-grh/":
    "/es/hrm-oplossingen/",
  "/es/soluciones-de-grh/ajuste-y-seleccion/":
    "/es/hrm-oplossingen/matching/",
  "/es/soluciones-de-grh/empleabilidad/":
    "/es/hrm-oplossingen/employability/",
  "/es/soluciones-de-grh/analitica-de-rr-hh/":
    "/es/hrm-oplossingen/hr-analytics/",
  "/es/soluciones-de-grh/ciclo-de-entrevistas-de-rr-hh/":
    "/es/hrm-oplossingen/development/",
  "/de/hrm-loesungen/":
    "/de/hrm-oplossingen/",
  "/de/hrm-loesungen-2/matching/":
    "/de/hrm-oplossingen/matching/",
  "/de/hrm-loesungen-2/hr-analytik/":
    "/de/hrm-oplossingen/hr-analytics/",
  "/de/hrm-loesungen-2/entwicklung/":
    "/de/hrm-oplossingen/development/",
  "/de/hrm-loesungen-2/beschaftigungsfahigkeit/":
    "/de/hrm-oplossingen/employability/",
  "/en/knowledge-center/big50-personality-test-booster-for-connecting-leadership/":
    "/en/kenniscentrum/big50-persoonlijkheidstest-aanjager-voor-verbindend-leiderschap/",
  "/en/knowledge-center/using-natural-language-processing-for-efficient-employee-recruitment-and-development/":
    "/en/kenniscentrum/gebruik-van-natural-language-processing-voor-efficiente-werving-en-ontwikkeling-van-werknemers/",
  "/en/knowledge-center/take-the-drag-out-of-performance-reviews-with-customized-interview-cycle/":
    "/en/kenniscentrum/haal-de-sleur-uit-beoordelingsgesprekken-met-maatwerk-gesprekscyclus/",
  "/de/wissenszentrum/big50-persoenlichkeitstest-booster-fuer-verbindende-fuehrung/":
    "/de/kenniscentrum/big50-persoonlijkheidstest-aanjager-voor-verbindend-leiderschap/",
  "/es/centro-de-conocimiento/test-de-personalidad-big50-para-conectar-el-liderazgo/":
    "/es/kenniscentrum/big50-persoonlijkheidstest-aanjager-voor-verbindend-leiderschap/",
  "/fr/centre-de-connaissances/le-test-de-personnalite-big50-renforce-le-leadership-en-reseau/":
    "/fr/kenniscentrum/big50-persoonlijkheidstest-aanjager-voor-verbindend-leiderschap/",
  "/ro/centru-de-cunoștințe/testul-de-personalitate-big50-un-stimulent-pentru-conectarea-conducerii/":
    "/ro/kenniscentrum/big50-persoonlijkheidstest-aanjager-voor-verbindend-leiderschap/",
  "/de/kontakt/":
    "/de/contact/",
  "/de/datenshutzpagina/":
    "/de/support/privacy-statement/",
  "/de/home-new-ro/":
    "/de/",
  "/es/home-new-ro/":
    "/es/",
  "/en/tests/":
    "/en/assessment-overzicht/",
  "/es/evaluaciones-vision-general/":
    "/es/assessment-overzicht/",
  "/es/evaluacion-online/":
    "/es/online-assessments/",
  "/ro/evaluare-online/":
    "/ro/online-assessments/",
};
for (const [weg, blijft] of Object.entries(WEESPAGINAS_2)) {
  DUBBELE_ARTIKELEN[weg] = blijft;
}

// Deze vier staan in alle zes talen dubbel.
const WEES_IN_ALLE_TALEN = {
  "/hr-analytics-vragenlijst/": "/hrm-oplossingen/hr-analytics/",
  "/about-us-new-translations/": "/over-ons/",
  "/home/": "/",
  "/assessment-nieuw/": "/assessments/360-graden-feedback/",
};
for (const taal of ["", "/en", "/de", "/fr", "/es", "/ro"]) {
  for (const [weg, blijft] of Object.entries(WEES_IN_ALLE_TALEN)) {
    DUBBELE_ARTIKELEN[taal + weg] = blijft === "/" ? (taal ? taal + "/" : "/") : taal + blijft;
  }
}

// Laatste drie dubbelen, alleen in het Engels en het Duits. De versie die
// blijft staan is steeds de uitgebreidste: 1.799 tegenover 979 woorden bij het
// Big Five-artikel en 805 tegenover 575 bij het bila-artikel.
const LAATSTE_DUBBELEN = {
  "/en/kenniscentrum/personality/big-five-personality-model/":
    "/en/kenniscentrum/big-five-persoonlijkheidsmodel/",
  "/en/kenniscentrum/the-bila-conversation-has-to-be-relevant-for-employees/":
    "/en/kenniscentrum/bila-gesprek/",
  "/de/partner/": "/de/partners/",
};
for (const [weg, blijft] of Object.entries(LAATSTE_DUBBELEN)) {
  DUBBELE_ARTIKELEN[weg] = blijft;
}

// De paden zoals de catch-all route ze kent: zonder schuine streep ervoor en erachter.
export const DUBBELE_PADEN = new Set(
  Object.keys(DUBBELE_ARTIKELEN).map((p) => p.replace(/^\/+|\/+$/g, ""))
);

// De slugs van de kenniscentrum-route /kenniscentrum/<slug>/.
export const DUBBELE_SLUGS = new Set(
  Object.keys(DUBBELE_ARTIKELEN)
    .filter((p) => /^\/kenniscentrum\/[^/]+\/$/.test(p))
    .map((p) => p.split("/")[2])
);
