// Centrale site-config. Vul FORMSPREE_ENDPOINT in met je eigen Formspree-URL
// (bijv. "https://formspree.io/f/xxxxxxxx"). Zolang deze leeg is, vallen de
// formulieren terug op een mailto-link naar service@hrmforce.com.
export const FORMSPREE_ENDPOINT = "";
export const CONTACT_EMAIL = "service@hrmforce.com";

// Shopify Storefront (voor de ingebedde /shop/). Vul STOREFRONT_TOKEN in met een
// Storefront API access token uit Shopify-admin (Settings → Apps and sales channels
// → Develop apps → jouw app → Storefront API). Zolang deze leeg is, toont /shop/
// een nette placeholder met een knop naar shop.hrmforce.com.
export const SHOPIFY = {
  DOMAIN: "nad8cn-ni.myshopify.com", // Shopify-verkoopdomein (niet het custom domein)
  STOREFRONT_TOKEN: "",              // <-- hier je Storefront API access token
  API_VERSION: "2024-07",
  PUBLIC_SHOP_URL: "https://shop.hrmforce.com",
};
