/* De sitesleutel van Cloudflare Turnstile voor hrmforce.com. Deze sleutel is
   publiek: hij staat in de HTML van elke pagina met een formulier. De geheime
   sleutel hoort er niet bij te staan, die leeft als secret in Cloudflare.
   De variabelen van dit project lopen via wrangler.toml, dus een
   build-variabele is er niet; PUBLIC_TURNSTILE_SITE_KEY blijft wel werken als
   hij ooit wel wordt gezet, bijvoorbeeld lokaal of op een testomgeving. */
export const TURNSTILE_SITE_KEY =
  import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAFE7bSi8lU2xFA5D";
