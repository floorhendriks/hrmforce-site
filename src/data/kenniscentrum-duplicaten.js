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
};
for (const taal of ["", "/en", "/de", "/fr", "/es", "/ro"]) {
  for (const [weg, blijft] of Object.entries(LOSSE_DUBBELEN)) {
    DUBBELE_ARTIKELEN[taal + weg] = taal + blijft;
  }
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
