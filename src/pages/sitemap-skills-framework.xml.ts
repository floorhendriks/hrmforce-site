/**
 * Sitemap voor alleen de skills-frameworkmodule.
 * Voeg de url van deze sitemap toe aan je bestaande robots.txt of aan een
 * sitemapindex, zodat de rest van de site onaangeroerd blijft.
 * Volledige profielen (volledig / full) staan bewust NIET in de sitemap: die
 * pagina's staan op noindex, de beknopte versie is de indexeerbare pagina.
 */
import type { APIRoute } from 'astro';
import { functions, skills, families } from '../lib/hsf';
import { path, LOCALES } from '../lib/i18n';

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://website.hrmforce.com')).toString().replace(/\/$/, '');
  const today = new Date().toISOString().slice(0, 10);
  type Entry = { paths: Record<string, string>; prio: string; freq: string };
  const entries: Entry[] = [];

  const add = (nl: string, en: string, prio: string, freq = 'monthly') =>
    entries.push({ paths: { nl, en }, prio, freq });

  add(path('nl'), path('en'), '1.0', 'weekly');
  add(path('nl', 'functions'), path('en', 'functions'), '0.9', 'weekly');
  add(path('nl', 'skills'), path('en', 'skills'), '0.9', 'weekly');
  add(path('nl', 'families'), path('en', 'families'), '0.8');
  add(path('nl', 'match'), path('en', 'match'), '0.8');
  add(path('nl', 'method'), path('en', 'method'), '0.7');
  for (const f of families) add(path('nl', 'families', f.slug.nl), path('en', 'families', f.slug.en), '0.7');
  for (const f of functions) add(path('nl', 'functions', f.slug.nl), path('en', 'functions', f.slug.en), '0.8');
  for (const f of functions) add(path('nl', 'match', f.slug.nl), path('en', 'match', f.slug.en), '0.5');
  for (const s of skills as any[]) add(path('nl', 'skills', s.slug.nl), path('en', 'skills', s.slug.en), '0.6');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map((e) => LOCALES.map((l) => `  <url>
    <loc>${base}${e.paths[l]}</loc>
${LOCALES.map((a) => `    <xhtml:link rel="alternate" hreflang="${a}" href="${base}${e.paths[a]}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${base}${e.paths.nl}"/>
    <lastmod>${today}</lastmod>
    <changefreq>${e.freq}</changefreq>
    <priority>${e.prio}</priority>
  </url>`).join('\n')).join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
