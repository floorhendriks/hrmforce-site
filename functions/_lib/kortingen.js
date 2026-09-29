// Kortingscodes voor de webshop. De server rekent de korting uit; wat de
// browser meestuurt is alleen de code, nooit een bedrag.
//
// Een code kan gelden voor bepaalde producten (handles) of voor de hele
// bestelling (handles leeg). De datum in `tot` is de laatste dag waarop de code
// werkt, in UTC.

export const KORTINGEN = {
  TALENT: {
    percent: 10,
    handles: ["competentieboek"],
    tot: "2027-12-31",
  },
};

export function normaliseerCode(s) {
  return String(s == null ? "" : s).trim().toUpperCase().replace(/\s+/g, "").slice(0, 32);
}

// Geeft null als er geen code is ingevuld. Anders altijd een object met `ok`,
// zodat de checkoutpagina kan laten zien waarom een code niet werkt.
export function bepaalKorting(code, items, nu) {
  const c = normaliseerCode(code);
  if (!c) return null;
  const k = KORTINGEN[c];
  if (!k) return { code: c, ok: false, reden: "onbekend", cents: 0 };

  const moment = nu instanceof Date ? nu : new Date();
  if (k.vanaf && moment < new Date(k.vanaf + "T00:00:00Z")) return { code: c, ok: false, reden: "nog_niet_geldig", cents: 0 };
  if (k.tot && moment > new Date(k.tot + "T23:59:59Z")) return { code: c, ok: false, reden: "verlopen", cents: 0 };

  const vanToepassing = (it) => !k.handles || !k.handles.length || k.handles.indexOf(it.handle) > -1;
  const grondslag = (items || []).filter(vanToepassing).reduce((s, it) => s + (it.lineCents || 0), 0);
  if (grondslag <= 0) return { code: c, ok: false, reden: "niet_van_toepassing", cents: 0 };

  const cents = Math.min(grondslag, Math.round((grondslag * k.percent) / 100));
  if (cents <= 0) return { code: c, ok: false, reden: "niet_van_toepassing", cents: 0 };
  return { code: c, ok: true, percent: k.percent, cents, handles: k.handles || [] };
}
