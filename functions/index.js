// Alleen shop.hrmforce.com stuurt de root door naar /shop/; andere hosts tonen de homepage.
// Draait uitsluitend op de root-request, dus geen overhead elders.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === "shop.hrmforce.com") {
    return Response.redirect(url.origin + "/shop/", 301);
  }
  return context.next();
}
