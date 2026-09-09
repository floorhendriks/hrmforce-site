/**
 * Welke functieprofiel-pdf's bestaan er, en waar staan ze.
 *
 * De pdf's zitten niet in de repo maar in een R2-bucket, uitgeleverd door
 * functions/downloads/[[path]].js op het eigen domein. Op buildtijd kan er dus niet
 * met existsSync gekeken worden of een pdf bestaat; dat doet dit manifest, dat door
 * scripts/hsf-build-downloads-manifest.mjs wordt bijgewerkt zodra de pdf's opnieuw
 * gegenereerd zijn.
 *
 * Staat een profiel niet in het manifest, dan wijst de downloadknop naar de
 * volledige printpagina. Zo staat er nooit een dode link op de site.
 */
import manifest from '../data/downloads-manifest.json';

type Manifest = { generated: string; counts: Record<string, number>; files: Record<string, string[]> };

const M = manifest as Manifest;
const SETS: Record<string, Set<string>> = {};
for (const [lang, slugs] of Object.entries(M.files ?? {})) SETS[lang] = new Set(slugs);

/** Bestaat er een pdf voor deze taal en slug? */
export const hasDownload = (lang: string, slug: string): boolean => SETS[lang]?.has(slug) ?? false;

/** Het pad naar de pdf. Same-origin, zodat het download-attribuut werkt. */
export const downloadUrl = (lang: string, slug: string): string => `/downloads/${lang}/${slug}.pdf`;

/** Aantallen per taal, voor de verantwoordingspagina en om te controleren. */
export const downloadCounts = M.counts ?? {};
