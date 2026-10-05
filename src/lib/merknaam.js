/* De merknaam wordt altijd klein geschreven: hrmforce, nooit HRMForce of
   Hrmforce. In de repo is dat overal doorgevoerd, maar artikelen uit Sanity
   bevatten de oude schrijfwijze nog. Die halen we er bij het renderen uit.
   Binnen een tag blijft alles staan, zodat adressen en attributen onaangeroerd
   blijven. */
const PATROON = /\b(HRMForce|HRM Force|Hrmforce|HRMforce|HrmForce|hrmForce)\b/g;

export function merknaam(tekst = "") {
  return String(tekst).replace(PATROON, "hrmforce");
}

export function merknaamInHtml(html = "") {
  return String(html)
    .split(/(<[^>]*>)/)
    .map((deel) => (deel.startsWith("<") ? deel : merknaam(deel)))
    .join("");
}
