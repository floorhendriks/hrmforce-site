// Regel boven de algemene voorwaarden en de privacyverklaring in de talen
// buiten de brontalen: die versies komen uit DeepL, de Nederlandse tekst blijft
// juridisch leidend. Loopt mee in de vertaalronde.
import { vulAan } from "./vertaal-inhoud.js";

export const VERTAALNOOT = {
  nl: "Deze vertaling is bedoeld ter informatie. Bij verschil tussen de vertaling en de Nederlandse tekst geldt de Nederlandse tekst.",
  en: "This translation is provided for information only. In case of any difference between the translation and the Dutch text, the Dutch text prevails.",
};

Object.assign(VERTAALNOOT, vulAan(VERTAALNOOT));
