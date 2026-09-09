/**
 * Vertaling van de vocabulairvelden van de dataset.
 *
 * Meetmethode, trainbaarheid, ai-vraag, herbruikbaarheid, instrumenten en de
 * competentienaam uit het framework van 2014 staan als vaste Nederlandse string in de
 * data, zonder en-variant. Zonder deze laag blijven ze op elke andere taal Nederlands
 * staan, ook op de Engelse pagina's.
 *
 * src/data/vocab.json wordt gevuld door scripts/hsf-translate-vocab.mjs. hrmforce-
 * productnamen (Big Fifty, Ability Scan, ...) staan daar met product: true en blijven
 * in alle talen gelijk. Een waarde die niet in het bestand staat komt onvertaald door,
 * zodat er nooit een leeg veld op de pagina belandt.
 */
import vocab from '../data/vocab.json';

type Entry = { nl: string; en: string; product?: boolean; [lang: string]: string | boolean | undefined };
const V = vocab as Record<string, Entry>;

/** Vertaalt een vocabulairwaarde naar de gevraagde taal. */
export function vt(value: string | null | undefined, lang: string): string {
  if (!value) return '';
  const e = V[value];
  if (!e) return value;
  return (e[lang] as string) || e.en || value;
}

/** Vertaalt een lijst vocabulairwaarden. */
export const vtList = (values: readonly string[] | null | undefined, lang: string): string[] =>
  (values ?? []).map((v) => vt(v, lang));

/** Is dit een hrmforce-productnaam? Die blijft in elke taal gelijk. */
export const isProduct = (value: string): boolean => V[value]?.product === true;
