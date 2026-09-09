/**
 * Datatalen voor het hrmforce Skills Framework.
 *
 * De dataset zelf staat in NL en EN. Extra talen komen uit
 * src/data/translations/<taal>.json: een map van de Engelse string naar de
 * vertaling, gemaakt door scripts/hsf-translate-data.mjs.
 *
 * Op buildtijd hydrateert `hydrate()` de ingelezen data: elk vertaalbaar veld
 * ({ nl, en }) krijgt er per beschikbare taal een sleutel bij. Zo blijven alle
 * views gewoon `veld[dl]` gebruiken en groeit de repo niet mee met het aantal
 * talen. Wat niet vertaald is valt terug op Engels; `slug` houdt altijd de
 * Engelse slug, zodat de url's van de andere talen niet veranderen.
 */

// Vite/Astro leest de vertaalbestanden op buildtijd in. Zonder bestanden blijft dit leeg.
const modules = import.meta.glob('../data/translations/*.json', { eager: true, import: 'default' }) as Record<string, Record<string, string>>;

const MAPS: Record<string, Record<string, string>> = {};
for (const [path, map] of Object.entries(modules)) {
  const code = path.split('/').pop()!.replace(/\.json$/, '');
  if (map && Object.keys(map).length) MAPS[code] = map;
}

/** Talen waarvoor de data beschikbaar is: nl en en altijd, plus de vertaalde talen. */
export const DATA_LANGS: string[] = ['nl', 'en', ...Object.keys(MAPS).sort()];

/**
 * De taal waarin de datavelden gelezen moeten worden. Bestaat er voor deze taal
 * geen vertaling, dan is dat Engels, precies zoals voorheen.
 */
export const dlang = (lang: string): string => (DATA_LANGS.includes(lang) ? lang : 'en');

/** Velden die niet vertaald worden maar wel een sleutel per taal nodig hebben. */
const COPY_KEYS = new Set(['slug']);

const isLeaf = (o: any): boolean => o && typeof o === 'object' && !Array.isArray(o)
  && 'en' in o && 'nl' in o && (typeof o.en === 'string' || Array.isArray(o.en));

const seen = new WeakSet<object>();

/**
 * Vult de vertaalde sleutels aan in een datastructuur. Muteert ter plaatse, want
 * dit gebeurt eenmalig op buildtijd op de geïmporteerde json-modules.
 */
export function hydrate<T>(node: T, key: string | null = null): T {
  const langs = Object.keys(MAPS);
  if (!langs.length) return node;
  if (Array.isArray(node)) {
    for (const v of node) hydrate(v, null);
    return node;
  }
  if (node && typeof node === 'object') {
    const obj = node as Record<string, any>;
    if (seen.has(obj)) return node;
    seen.add(obj);
    if (isLeaf(obj)) {
      const copyOnly = key !== null && COPY_KEYS.has(key);
      for (const lang of langs) {
        if (obj[lang] !== undefined) continue;
        if (Array.isArray(obj.en)) {
          obj[lang] = copyOnly ? obj.en.slice() : obj.en.map((v: any) => (typeof v === 'string' ? (MAPS[lang][v] ?? v) : v));
        } else {
          obj[lang] = copyOnly ? obj.en : (MAPS[lang][obj.en] ?? obj.en);
        }
      }
      return node;
    }
    for (const [k, v] of Object.entries(obj)) hydrate(v, k);
  }
  return node;
}
