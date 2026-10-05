/**
 * Unieke functienamen per taal.
 *
 * De dataset staat in het Nederlands en het Engels; de vier andere talen zijn
 * vertaald. Daarbij vallen verschillende functies op dezelfde vertaling: chief
 * executive officer, general manager en managing director worden in het Spaans
 * alle drie "Director general". Dat levert pagina's op die voor Google niet van
 * elkaar te onderscheiden zijn: 37 in het Duits, 29 in het Frans, 21 in het
 * Spaans en 22 in het Roemeens.
 *
 * Waar dat gebeurt zetten we de Engelse naam erachter. Die wordt in het
 * zakelijke taalgebruik toch gebruikt, dus het is de naam die de lezer herkent.
 * Skills en functiefamilies botsen niet; daar is niets voor nodig.
 */
import { functions, families } from './hsf';

const cache: Record<string, Set<string>> = {};

function botsend(dl: string): Set<string> {
  if (!cache[dl]) {
    const tel = new Map<string, number>();
    for (const f of functions as any[]) {
      const n = f.title?.[dl] ?? f.title?.en;
      if (n) tel.set(n, (tel.get(n) ?? 0) + 1);
    }
    cache[dl] = new Set([...tel].filter(([, n]) => n > 1).map(([k]) => k));
  }
  return cache[dl];
}

/** De naam van een functie, uniek binnen de taal van de pagina. */
export function functieNaam(fn: any, dl: string): string {
  const naam = fn?.title?.[dl] ?? fn?.title?.en ?? '';
  if (!naam || !botsend(dl).has(naam)) return naam;
  const en = fn?.title?.en;
  if (en && en !== naam && !botsend('en').has(en)) return `${naam} (${en})`;
  // Twee functies met dezelfde naam in alle talen: School Principal is zowel de
  // schooldirecteur in het basisonderwijs als de rector in het voortgezet
  // onderwijs. De functiefamilie zegt om welke van de twee het gaat.
  const fam = (families as any[]).find((f) => f.id === fn?.family_id);
  const famNaam = fam?.name?.[dl] ?? fam?.name?.en;
  return famNaam ? `${naam} (${famNaam})` : naam;
}
