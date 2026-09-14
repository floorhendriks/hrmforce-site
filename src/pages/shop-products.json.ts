// De productteksten van de shop als apart bestand. Ze stonden als 257 kB
// inline script in elke shoppagina, wat de zwaarste pagina van de site opleverde.
// De lijst met producten rendert nu meteen; deze teksten komen er vlak daarna bij.
import { SHOP_CONTENT } from "../data/shop-products.js";

export const prerender = true;

export function GET() {
  return new Response(JSON.stringify(SHOP_CONTENT), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
