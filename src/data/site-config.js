// Centrale site-config. Alle formulieren posten naar /api/aanvraag of
// /api/oefenmateriaal, dus Formspree wordt niet meer gebruikt. De constante
// blijft leeg staan zodat een oude import niets stuks maakt.
export const FORMSPREE_ENDPOINT = "";
export const CONTACT_EMAIL = "service@hrmforce.com";

// De shop draait op de catalogus in deze repo (src/data/shop-catalog.json) en
// rekent af via /afrekenen/. Shopify wordt niet meer gebruikt; het Storefront-
// token is daarom weg. SHOP.ENABLED op false toont in plaats van de productlijst
// een verwijzing naar PUBLIC_URL.
export const SHOP = {
  ENABLED: true,
  PUBLIC_URL: "https://shop.hrmforce.com",
};
// Vul je GA4 Measurement-ID in (G-XXXXXXXXXX). Leeg = geen tracking.
// GTM_ID: de oude site laadde alles via Google Tag Manager (GTM-M6BLWR4). Deze
// site stuurt GA4 en Google Ads rechtstreeks via gtag aan, dat is lichter en
// beter te controleren. Wil je tóch via GTM werken (bijvoorbeeld omdat er nog
// andere tags in die container staan), vul dan GTM_ID in. Zodra GTM_ID is
// gevuld, laadt deze site GA4 en Ads NIET meer zelf, want dan zou je dubbel
// meten: die tags horen dan in de container te staan.
// G-7EZ2R7NG4J is de property van hrmforce.com, met de hele geschiedenis.
// De site stuurde sinds de overstap naar G-L4WHLCQ1WY, en dat is de property
// van sein.hrmforce.com. Daar hangt sinds 24 september ook het Ads-account
// Geschikt voor de Zorg (121-950-2974) aan, waardoor AW-18428504939 via die
// koppeling meeliep op de hoofdsite. Met deze wissel verdwijnt dat vanzelf;
// beide blijven in gebruik voor sein.hrmforce.com.
export const ANALYTICS = { GA4_ID: "G-7EZ2R7NG4J", GTM_ID: "" };

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
  //   AANKOOP = conversieactie "Aankoop" (primair, waarde uit de bestelling).
  // De bedankpagina stuurt het bestelbedrag als value, EUR als currency en het
  // bestelnummer als transaction_id, een keer per bestelling. Dit loopt via de
  // tag; lever aankopen niet ook nog via de import uit Analytics, want dan telt
  // elke bestelling dubbel.
  GOOGLE_ADS_PURCHASE_LABEL: "AW-1017809287/QaZmCP_m65IdEIeTquUD",
};

// Verificatie-meta-tags. Leeg = geen tag in de <head>.
// GOOGLE_SITE_VERIFICATION = content-waarde van de HTML-tag uit Search Console
// (property https://hrmforce.com/). Laat deze staan: zonder de tag verliest
// hrmforce de eigen verificatie van de property zodra de oude site verdwijnt.
export const VERIFICATION = {
  GOOGLE_SITE_VERIFICATION: "By4w3ybUKYoJWT-hw7g8LGQTQ0Ge6j3Q3uf4s8yU5QM",
  // De tag die op de oude site stond, van de huidige verifieerde eigenaar van de
  // Search Console-property. Laat deze staan: als hij verdwijnt verliest die
  // eigenaar zijn verificatie en kan er toegang tot de property wegvallen.
  GOOGLE_SITE_VERIFICATION_LEGACY: "ts39hmlPA9OTiFPdPDmFUjfKh5Bt1wL2sQA9w-S01pA",
};

// Externe reviewprofielen. Vul een URL in om de badge te tonen (leeg = verborgen).
// Zodra je een G2/Capterra/Trustpilot/Google-profiel hebt, plak je hier de link.
export const REVIEWS_EXTERNAL = {
  google: "https://www.google.com/maps?cid=5974766714085643202", // hrmforce Google Bedrijfsprofiel (4,8 sterren)
  g2: "",         // bv. "https://www.g2.com/products/hrmforce/reviews"
  capterra: "",   // bv. "https://www.capterra.com/p/....../hrmforce/"
  trustpilot: "", // bv. "https://www.trustpilot.com/review/hrmforce.com"
};
