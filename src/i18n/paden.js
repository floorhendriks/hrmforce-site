// Hulpfunctie voor de gedeelde taalroutes onder src/pages/[lang]/.
//
// Eén routebestand bedient alle talen met een prefix. Voor een pagina zonder
// verdere parameters roep je perTaal() aan, voor een pagina met een eigen
// parameter geef je de bestaande routes mee en komt de taal erbij.
import { PREFIXED } from "./utils.js";
import { BRONTALEN } from "./ui.js";

// Het skills framework bestaat alleen in de brontalen, zie alleen-brontaal.js.
export const HSF_PREFIXED = PREFIXED.filter((l) => BRONTALEN.includes(l));

export function perTaal(basis) {
  if (!basis) return PREFIXED.map((lang) => ({ params: { lang } }));
  return PREFIXED.flatMap((lang) =>
    basis.map((p) => ({ params: { ...p.params, lang }, props: p.props }))
  );
}

/** Zelfde als perTaal, maar alleen voor de talen van het skills framework. */
export function perHsfTaal(basis) {
  if (!basis) return HSF_PREFIXED.map((lang) => ({ params: { lang } }));
  return HSF_PREFIXED.flatMap((lang) =>
    basis.map((p) => ({ params: { ...p.params, lang }, props: p.props }))
  );
}
