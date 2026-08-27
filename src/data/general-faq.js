// Algemene veelgestelde vragen (6 stuks per taal). Identiek aan de shop-FAQ
// (Shop.astro ENRICH.faq). Wordt op de assessment-detailpagina's ONDER de
// assessment-specifieke FAQ getoond, zodat bezoekers via het reguliere menu
// dezelfde antwoorden zien als in de shop.

export const GENERAL_FAQ = {
  nl: [
    { q: "Hoe lang duurt het invullen?", a: "Gemiddeld 10–20 minuten, volledig online en op elk moment in te vullen." },
    { q: "In welke talen is dit beschikbaar?", a: "In 6 talen: Nederlands, Engels, Duits, Frans, Spaans en Roemeens." },
    { q: "Hoe ontvang ik de resultaten?", a: "Direct na afronding ontvang je een helder rapport per e-mail, klaar om te bespreken." },
    { q: "Is het wetenschappelijk gevalideerd?", a: "Ja, de instrumenten zijn gebaseerd op gevalideerde modellen en worden doorlopend getoetst op betrouwbaarheid." },
    { q: "Heb ik een abonnement nodig?", a: "Nee, je neemt dit los af per stuk. Voor structureel gebruik is een eigen portal op licentiebasis vaak voordeliger." },
    { q: "Voor wie is dit geschikt?", a: "Voor selectie én ontwikkeling — inzetbaar door HR, recruiters en leidinggevenden." },
  ],
  en: [
    { q: "How long does it take to complete?", a: "On average 10–20 minutes, fully online and completed whenever it suits you." },
    { q: "Which languages is it available in?", a: "In 6 languages: Dutch, English, German, French, Spanish and Romanian." },
    { q: "How do I receive the results?", a: "Right after completion you receive a clear report by email, ready to discuss." },
    { q: "Is it scientifically validated?", a: "Yes, the instruments are based on validated models and continuously tested for reliability." },
    { q: "Do I need a subscription?", a: "No, you buy this individually. For structural use, your own licensed portal is often more cost-effective." },
    { q: "Who is it suitable for?", a: "For both selection and development — usable by HR, recruiters and managers." },
  ],
  de: [
    { q: "Wie lange dauert das Ausfüllen?", a: "Durchschnittlich 10–20 Minuten, komplett online und jederzeit ausfüllbar." },
    { q: "In welchen Sprachen ist es verfügbar?", a: "In 6 Sprachen: Niederländisch, Englisch, Deutsch, Französisch, Spanisch und Rumänisch." },
    { q: "Wie erhalte ich die Ergebnisse?", a: "Direkt nach Abschluss erhalten Sie einen klaren Bericht per E-Mail, bereit zur Besprechung." },
    { q: "Ist es wissenschaftlich validiert?", a: "Ja, die Instrumente basieren auf validierten Modellen und werden laufend auf Zuverlässigkeit geprüft." },
    { q: "Brauche ich ein Abo?", a: "Nein, Sie kaufen es einzeln. Für den strukturellen Einsatz ist ein eigenes Lizenzportal oft günstiger." },
    { q: "Für wen ist es geeignet?", a: "Für Auswahl und Entwicklung — einsetzbar durch HR, Recruiter und Führungskräfte." },
  ],
  fr: [
    { q: "Combien de temps faut-il pour le remplir ?", a: "En moyenne 10 à 20 minutes, entièrement en ligne et à tout moment." },
    { q: "Dans quelles langues est-il disponible ?", a: "En 6 langues : néerlandais, anglais, allemand, français, espagnol et roumain." },
    { q: "Comment vais-je recevoir les résultats ?", a: "Dès la fin, vous recevez un rapport clair par e-mail, prêt à être discuté." },
    { q: "Est-ce validé scientifiquement ?", a: "Oui, les instruments reposent sur des modèles validés et sont testés en continu pour leur fiabilité." },
    { q: "Ai-je besoin d'un abonnement ?", a: "Non, vous l'achetez à l'unité. Pour un usage structurel, votre propre portail sous licence est souvent plus avantageux." },
    { q: "À qui s'adresse-t-il ?", a: "À la sélection comme au développement — utilisable par les RH, recruteurs et managers." },
  ],
  es: [
    { q: "¿Cuánto tiempo lleva completarlo?", a: "De media 10–20 minutos, totalmente en línea y cuando te convenga." },
    { q: "¿En qué idiomas está disponible?", a: "En 6 idiomas: neerlandés, inglés, alemán, francés, español y rumano." },
    { q: "¿Cómo recibo los resultados?", a: "Justo al terminar recibes un informe claro por correo, listo para comentar." },
    { q: "¿Está validado científicamente?", a: "Sí, los instrumentos se basan en modelos validados y se comprueba continuamente su fiabilidad." },
    { q: "¿Necesito una suscripción?", a: "No, lo compras de forma individual. Para un uso estructural, tu propio portal con licencia suele ser más rentable." },
    { q: "¿Para quién es adecuado?", a: "Para selección y desarrollo — utilizable por RR. HH., reclutadores y responsables." },
  ],
  ro: [
    { q: "Cât durează completarea?", a: "În medie 10–20 de minute, complet online și oricând dorești." },
    { q: "În ce limbi este disponibil?", a: "În 6 limbi: neerlandeză, engleză, germană, franceză, spaniolă și română." },
    { q: "Cum primesc rezultatele?", a: "Imediat după finalizare primești un raport clar pe e-mail, gata de discutat." },
    { q: "Este validat științific?", a: "Da, instrumentele se bazează pe modele validate și sunt testate continuu pentru fiabilitate." },
    { q: "Am nevoie de un abonament?", a: "Nu, îl achiziționezi individual. Pentru utilizare structurală, un portal propriu pe licență este adesea mai avantajos." },
    { q: "Pentru cine este potrivit?", a: "Pentru selecție și dezvoltare — utilizabil de HR, recrutori și manageri." },
  ],
};

export function generalFaq(lang) {
  return GENERAL_FAQ[lang] || GENERAL_FAQ.nl;
}
