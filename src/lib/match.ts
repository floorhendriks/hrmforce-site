/**
 * Het matchmodel van hrmforce Skills Framework 2.0.
 * Bewust simpel en navertelbaar. Dezelfde formules staan in de Excel-database
 * en in de documentatie, zodat elke uitkomst uit te leggen is aan een kandidaat.
 */
export interface Req { skill_id: string; target_level: number; weight: number; critical: boolean }
export interface Result {
  fit: number;
  rows: { skill_id: string; target: number; candidate: number; weight: number;
          critical: boolean; gap: number; skillFit: number }[];
  below: number;
  knockouts: string[];
  band: 'strong' | 'development' | 'insufficient' | 'blocked';
}

export const clamp = (n: number, lo = 1, hi = 5) => Math.max(lo, Math.min(hi, n));

/** Streefniveau na senioriteitsbijstelling. */
export const effectiveTarget = (target: number, delta: number) => clamp(target + delta);

export function match(reqs: Req[], candidate: Record<string, number>): Result {
  const rows = reqs.map((r) => {
    const c = candidate[r.skill_id] ?? 0;
    return {
      skill_id: r.skill_id, target: r.target_level, candidate: c, weight: r.weight,
      critical: r.critical, gap: c - r.target_level,
      skillFit: r.target_level > 0 ? Math.min(1, c / r.target_level) : 1,
    };
  });
  const wsum = rows.reduce((a, r) => a + r.weight, 0) || 1;
  const fit = rows.reduce((a, r) => a + r.weight * r.skillFit, 0) / wsum;
  const knockouts = rows.filter((r) => r.critical && r.gap < 0).map((r) => r.skill_id);
  const below = rows.filter((r) => r.gap < 0).length;
  const band: Result['band'] = knockouts.length > 0 ? 'blocked'
    : fit >= 0.9 ? 'strong' : fit >= 0.75 ? 'development' : 'insufficient';
  return { fit, rows, below, knockouts, band };
}
