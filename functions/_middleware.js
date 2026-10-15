// Middleware voor alle paden die _routes.json naar de Functions stuurt.
//
// 1. shop.hrmforce.com/ -> /shop/ (stond eerder in functions/index.js)
// 2. WordPress-queryparameters (?post_type=..&p=123, ?page_id=..) -> zelfde pad zonder query
// 3. exacte redirects uit public/_redirects -> 301, vóór de pagina
// 4. geeft de pagina een 404: wildcards en WordPress-patronen -> 301 of 410
//
// Zie functions/_lib/redirects.js voor het waarom.

import { exacteRedirect, terugvalRedirect, normaliseer, ALLEEN_POST } from "./_lib/redirects.js";

const ALLEEN_GET_WEG = (p) => ALLEEN_POST.test(p);

const WP_QUERY = (sp) => sp.has("post_type") || sp.has("page_id") || sp.has("attachment_id") || /^\d+$/.test(sp.get("p") || "");

function doorsturen(url, naar, code = 301) {
  const doel = new URL(naar, url.origin);
  return new Response(null, {
    status: code,
    headers: { Location: doel.toString(), "Cache-Control": "public, max-age=3600" },
  });
}

export async function onRequest(context) {
  const { request, env, next } = context;
  if (request.method !== "GET" && request.method !== "HEAD") return next();

  const url = new URL(request.url);

  if (url.hostname === "shop.hrmforce.com" && url.pathname === "/") return doorsturen(url, "/shop/");

  const e = exacteRedirect(url.pathname);
  if (e) return e.code === 410 ? new Response("Gone", { status: 410 }) : doorsturen(url, e.naar, e.code);

  const bestaat = async (pad) => {
    try {
      const r = await env.ASSETS.fetch(new URL(pad, url.origin), { method: "HEAD", redirect: "manual" });
      return r.status === 200 || r.status === 308;
    } catch {
      return false;
    }
  };

  // WordPress-query (?page_id=12587, ?post_type=..&p=123): zonder query verder,
  // en meteen naar het eindadres als het kale pad zelf ook doorverwijst.
  if (url.search && WP_QUERY(url.searchParams)) {
    let doel = url.pathname;
    if (!(await bestaat(normaliseer(url.pathname)))) {
      const t = await terugvalRedirect(url.pathname, bestaat).catch(() => null);
      if (t && t.code === 410) return new Response("Gone", { status: 410 });
      if (t) doel = t.naar;
    }
    return doorsturen(url, doel);
  }

  // De API en /lead zijn geen pagina's. Google mag ze ophalen (robots.txt blokkeert
  // ze niet meer), zodat hij deze noindex ziet en ze uit de index haalt. Met een
  // blokkade in robots.txt bleven ze juist als "Indexed, though blocked" staan.
  if (/^\/(api\/|lead\/?$)/.test(url.pathname)) {
    const r = await next();
    const kop = new Headers(r.headers);
    kop.set("X-Robots-Tag", "noindex");
    const status = r.status === 404 && ALLEEN_GET_WEG(url.pathname) ? 410 : r.status;
    return new Response(r.body, { status, statusText: status === r.status ? r.statusText : "Gone", headers: kop });
  }

  const res = await next();
  if (res.status !== 404) return res;

  let t = null;
  try {
    t = await terugvalRedirect(url.pathname, bestaat);
  } catch {
    t = null;
  }
  if (!t) return res;
  if (t.code === 410) return new Response(res.body, { status: 410, headers: res.headers });
  return doorsturen(url, t.naar, t.code);
}
