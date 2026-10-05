/**
 * De zoekindex van de header, per taal, als los bestand.
 *
 * Stond eerder als inline JSON in elke pagina: 61 KB op een pagina van 113 KB,
 * dus meer dan de helft van het gewicht, en dat 13.839 keer. De lijst is pas
 * nodig zodra iemand het zoekvenster opent, dus hij wordt nu opgehaald op het
 * moment dat dat gebeurt.
 *
 * De opbouw is dezelfde als in Header.astro stond, zodat de uitkomst gelijk is.
 */
import type { APIRoute } from "astro";
import validPaths from "../data/valid-paths.js";
import { zoekindexVoor } from "../lib/zoekindex.js";

const TALEN = ["nl", "en", "de", "fr", "es", "ro"];

export function getStaticPaths() {
  return TALEN.map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = ({ params }) => {
  const lang = String(params.lang || "nl");
  return new Response(JSON.stringify(zoekindexVoor(lang, validPaths)), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
