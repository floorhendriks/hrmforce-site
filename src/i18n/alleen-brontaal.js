// Pagina's die alleen in de brontalen (nl, en, de, fr, es, ro) bestaan.
//
// Twee redenen: ze hebben nog een eigen .astro per taal (/advies/ en
// /hrm-oplossingen/), of ze komen uit Sanity, waar alleen de brontalen in
// staan. Een taal daarbuiten houdt hier de Nederlandse link, anders wijst het
// menu, de voettekst of een knop naar een pagina die niet gebouwd wordt.
//
// Staat in een eigen bestand zodat zowel src/i18n/utils.js als
// src/data/valid-paths.js dezelfde lijst gebruikt.
export const ALLEEN_BRONTAAL = new Set([
  "/advies/", "/advies/competentie-management/", "/advies/overzicht/", "/advies/talent-management/",
  "/hrm-oplossingen/", "/hrm-oplossingen/career/", "/hrm-oplossingen/development/",
  "/hrm-oplossingen/employability/", "/hrm-oplossingen/hr-analytics/", "/hrm-oplossingen/matching/",
  "/hrmforce/over-ons/", "/hrmforce/referenties/", "/hrmforce/voordelen/",
  "/partners/", "/partners/aanvraag/", "/partners/partner-worden/",
  "/demo/", "/gratis-kleurentest/", "/sectoren/zorg-specialisten-ifms/",
  "/support/algemene-voorwaarden/", "/support/privacy-statement/",
]);
