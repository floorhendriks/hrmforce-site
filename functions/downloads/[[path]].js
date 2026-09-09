// GET /downloads/<taal>/<slug>.pdf — de functieprofiel-pdf's uit de R2-bucket.
//
// De pdf's staan niet in de repo: 450 profielen x 6 talen is ongeveer 1,2 GB en dat
// hoort niet in git en niet in elke Cloudflare-build. Ze staan in de R2-bucket die
// in wrangler.toml aan de binding DOWNLOADS hangt, en deze functie levert ze uit op
// het eigen domein. Dat laatste is belangrijk: het download-attribuut in de leadform
// werkt alleen same-origin, dus een los downloadsubdomein zou de pdf in een tab
// openen in plaats van hem op te slaan.
//
// Statische bestanden gaan bij Pages voor op functies. Staat een pdf dus nog wel in
// public/downloads, dan wordt die geleverd en komt deze functie niet aan bod.
//
// GET en HEAD worden beide bediend. Alleen onRequestGet exporteren betekent dat een
// HEAD-verzoek geen handler vindt en doorvalt naar de statische assets, wat een 404
// oplevert voor een pdf die wel bestaat: linkcheckers en monitors zien de download dan
// als kapot.
//
// Uploaden: zie scripts/hsf-upload-downloads.sh

const LANGS = new Set(['nl', 'en', 'de', 'fr', 'es', 'ro']);

export async function onRequest(context) {
  const { params, env, request } = context;
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
  }
  const parts = Array.isArray(params.path) ? params.path : [params.path].filter(Boolean);

  // exact <taal>/<slug>.pdf, geen padtrucs
  if (parts.length !== 2) return new Response('not found', { status: 404 });
  const [lang, file] = parts;
  if (!LANGS.has(lang) || !/^[a-z0-9][a-z0-9-]*\.pdf$/.test(file)) {
    return new Response('not found', { status: 404 });
  }
  if (!env.DOWNLOADS) return new Response('downloads unavailable', { status: 503 });

  const key = `${lang}/${file}`;
  const head = request.method === 'HEAD';
  // bij HEAD alleen de metadata ophalen, dan gaat de body niet over de lijn
  const object = head ? await env.DOWNLOADS.head(key) : await env.DOWNLOADS.get(key);
  if (!object) return new Response('not found', { status: 404 });

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('Content-Type', 'application/pdf');
  headers.set('Content-Disposition', `attachment; filename="hrmforce-${file}"`);
  headers.set('Cache-Control', 'public, max-age=86400, s-maxage=604800');
  headers.set('ETag', object.httpEtag);
  headers.set('X-Content-Type-Options', 'nosniff');

  // Content-Length alleen bij HEAD: bij GET is de body een stream en vult de runtime
  // dat zelf, een handmatige waarde kan daar botsen.
  if (head) headers.set('Content-Length', String(object.size));

  // conditionele request: scheelt bandbreedte bij herhaald ophalen
  if (request.headers.get('if-none-match') === object.httpEtag) {
    return new Response(null, { status: 304, headers });
  }
  return new Response(head ? null : object.body, { headers });
}
