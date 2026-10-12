// Middleware voor alle paden die _routes.json naar de Functions stuurt.
//
// 1. shop.hrmforce.com/ -> /shop/ (stond eerder in functions/index.js)
// 2. WordPress-queryparameters (?post_type=..&p=123, ?page_id=..) -> zelfde pad zonder query
// 3. exacte redirects uit public/_redirects -> 301, vóór de pagina
// 4. geeft de pagina een 404: wildcards en WordPress-patronen -> 301 of 410
//
// Zie functions/_lib/redirects.js voor het waarom.

import { exacteRedirect, terugvalRedirect } from "./_lib/redirects.js";

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

  if (url.search && WP_QUERY(url.searchParams)) {
    const e = exacteRedirect(url.pathname);
    return doorsturen(url, e ? e.naar : url.pathname);
  }

  const e = exacteRedirect(url.pathname);
  if (e) return e.code === 410 ? new Response("Gone", { status: 410 }) : doorsturen(url, e.naar, e.code);

  const res = await next();
  if (res.status !== 404) return res;

  const bestaat = async (pad) => {
    try {
      const r = await env.ASSETS.fetch(new URL(pad, url.origin), { method: "HEAD", redirect: "manual" });
      return r.status === 200 || r.status === 308;
    } catch {
      return false;
    }
  };

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
