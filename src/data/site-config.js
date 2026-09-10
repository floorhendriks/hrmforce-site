// Centrale site-config. Vul FORMSPREE_ENDPOINT in met je eigen Formspree-URL
// (bijv. "https://formspree.io/f/xxxxxxxx"). Zolang deze leeg is, vallen de
// formulieren terug op een mailto-link naar service@hrmforce.com.
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqpznaqn";
export const CONTACT_EMAIL = "service@hrmforce.com";

// Shopify Storefront (voor de ingebedde /shop/). Vul STOREFRONT_TOKEN in met een
// Storefront API access token uit Shopify-admin (Settings → Apps and sales channels
// → Develop apps → jouw app → Storefront API). Zolang deze leeg is, toont /shop/
// een nette placeholder met een knop naar shop.hrmforce.com.
export const SHOPIFY = {
  DOMAIN: "nad8cn-ni.myshopify.com", // Shopify-verkoopdomein (niet het custom domein)
  STOREFRONT_TOKEN: "eec96c05b11f763039d06b54f372c00f", // publiek Storefront-token (Headless-kanaal, bedoeld voor client-side)
  API_VERSION: "2024-07",
  PUBLIC_SHOP_URL: "https://shop.hrmforce.com",
};

// Vul je GA4 Measurement-ID in (G-XXXXXXXXXX). Leeg = geen tracking.
export const ANALYTICS = { GA4_ID: "G-L4WHLCQ1WY" };

// Marketing- en analytics-tags. Laden uitsluitend na cookie-toestemming
// (LinkedIn = categorie 'marketing', Clarity = categorie 'statistieken').
// LinkedIn Insight partner-ID komt van de oude site. Clarity-ID nog invullen
// (clarity.microsoft.com → project → Install manually → het 10-teken ID).
export const MARKETING = {
  LINKEDIN_PARTNER_ID: "8219026",
  CLARITY_ID: "yezxhal0q8", // Clarity-project "hrmforce"
  // Google Ads (account 679-053-3640 HrmForce). De tag laadt uitsluitend na
  // toestemming voor de categorie 'marketing'. De labels komen uit de
  // gebeurtenisfragmenten van de conversieacties in Google Ads:
  //   DEMO       = conversieactie "Demo Aangevraagd" (primair)
  //   ASSESSMENT = conversieactie "Assessment Aangevraagd" (primair, waarde EUR 1)
  // Leeg laten = geen Ads-tracking.
  GOOGLE_ADS_ID: "AW-1017809287",
  GOOGLE_ADS_DEMO_LABEL: "AW-1017809287/Od-yCOT3kLMaEIeTquUD",
  GOOGLE_ADS_ASSESSMENT_LABEL: "AW-1017809287/siOSCM6QipscEIeTquUD",
};

// Verificatie-meta-tags. Leeg = geen tag in de <head>.
// GOOGLE_SITE_VERIFICATION = content-waarde van de HTML-tag uit Search Console
// (property https://hrmforce.com/). Laat deze staan: zonder de tag verliest
// hrmforce de eigen verificatie van de property zodra de oude site verdwijnt.
export const VERIFICATION = {
  GOOGLE_SITE_VERIFICATION: "By4w3ybUKYoJWT-hw7g8LGQTQ0Ge6j3Q3uf4s8yU5QM",
};

// Externe reviewprofielen. Vul een URL in om de badge te tonen (leeg = verborgen).
// Zodra je een G2/Capterra/Trustpilot/Google-profiel hebt, plak je hier de link.
export const REVIEWS_EXTERNAL = {
  google: "https://www.google.com/maps?cid=5974766714085643202", // hrmforce Google Bedrijfsprofiel (4,8 sterren)
  g2: "",         // bv. "https://www.g2.com/products/hrmforce/reviews"
  capterra: "",   // bv. "https://www.capterra.com/p/....../hrmforce/"
  trustpilot: "", // bv. "https://www.trustpilot.com/review/hrmforce.com"
};
