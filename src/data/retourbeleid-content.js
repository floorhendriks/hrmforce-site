// Retourbeleid voor webshopbestellingen (/retourbeleid/ en /<taal>/retourbeleid/).
// Merchant Center verwijst naar deze pagina: 14 dagen, gratis retour.
// Plaatshouders: {mail}, {tel}, {av}. Een taal zonder eigen tekst valt terug op het Engels.
export const RETOUR_MAIL = "service@hrmforce.com";

export const retourContent = {
  nl: {
    meta: {
      title: "Retourbeleid | hrmforce",
      description: "Op bestellingen in de hrmforce webshop heb je 14 dagen bedenktijd en retourneren is gratis. Lees hoe je een product retourneert of een online test annuleert.",
    },
    crumb: "Retourbeleid",
    hero: { eyebrow: "Support", title: "Retourbeleid", intro: "Op bestellingen in de webshop heb je 14 dagen bedenktijd. Retourneren is gratis." },
    secties: [
      { titel: "14 dagen bedenktijd", tekst: "Je kunt een bestelling in de webshop binnen 14 dagen zonder opgave van reden ontbinden. De termijn start bij een fysiek product op de dag van ontvangst en bij een online product op de dag van aankoop." },
      { titel: "Fysieke producten", tekst: "Het Competentieboek, het hrmforce Competentiespel en de Teamflow-mat stuur je binnen 14 dagen na ontvangst ongebruikt en in de originele verpakking terug. Na je melding ontvang je een gratis retourlabel." },
      { titel: "Online tests, rapportages en trainingen", tekst: "Een online test, rapportage of training annuleer je binnen 14 dagen na aankoop kosteloos, zolang de vragenlijst nog niet is uitgezet of de training nog niet is gestart. Daarna vervalt de bedenktijd, omdat de digitale levering dan met je toestemming is begonnen." },
      { titel: "Retour melden", tekst: "Meld een retour of annulering via {mail} of {tel}. Vermeld je ordernummer en het product." },
      { titel: "Terugbetaling", tekst: "Je betaalt geen retourkosten. Het aankoopbedrag staat binnen 14 dagen na je annulering of na ontvangst van het geretourneerde product weer op je rekening, via de betaalmethode waarmee je hebt betaald." },
      { titel: "Andere opdrachten", tekst: "Deze bedenktijd geldt voor bestellingen in de webshop. Voor opdrachten op offerte, zoals assessments, trainingen en consultancy, gelden de annuleringsvoorwaarden in de {av}." },
    ],
    av: "algemene voorwaarden",
  },
  en: {
    meta: {
      title: "Return policy | hrmforce",
      description: "Orders from the hrmforce web shop come with a 14-day cooling-off period and free returns. Read how to return a product or cancel an online test.",
    },
    crumb: "Return policy",
    hero: { eyebrow: "Support", title: "Return policy", intro: "Orders from the web shop come with a 14-day cooling-off period. Returns are free." },
    secties: [
      { titel: "14-day cooling-off period", tekst: "You can cancel a web shop order within 14 days without giving a reason. For a physical product the period starts on the day you receive it, for an online product on the day of purchase." },
      { titel: "Physical products", tekst: "Return the Competency Book, the hrmforce Competency Game or the Teamflow mat unused and in its original packaging within 14 days of receipt. After you report the return, you receive a free return label." },
      { titel: "Online tests, reports and training", tekst: "You can cancel an online test, report or training free of charge within 14 days of purchase, as long as the questionnaire has not been sent out and the training has not started. After that the cooling-off period ends, because the digital delivery has then started with your consent." },
      { titel: "Reporting a return", tekst: "Report a return or cancellation to {mail} or call {tel}. Include your order number and the product." },
      { titel: "Refund", tekst: "You pay no return costs. We refund the purchase price within 14 days of your cancellation or of receiving the returned product, using the payment method you paid with." },
      { titel: "Other assignments", tekst: "This cooling-off period applies to web shop orders. Assignments based on a quotation, such as assessments, training and consultancy, follow the cancellation terms in our {av}." },
    ],
    av: "general terms and conditions",
  },
  de: {
    meta: {
      title: "Rückgaberecht | hrmforce",
      description: "Für Bestellungen im hrmforce Webshop gilt ein Widerrufsrecht von 14 Tagen, die Rücksendung ist kostenlos. So senden Sie ein Produkt zurück oder stornieren einen Online-Test.",
    },
    crumb: "Rückgaberecht",
    hero: { eyebrow: "Support", title: "Rückgaberecht", intro: "Für Bestellungen im Webshop gilt ein Widerrufsrecht von 14 Tagen. Die Rücksendung ist kostenlos." },
    secties: [
      { titel: "14 Tage Widerrufsrecht", tekst: "Sie können eine Bestellung im Webshop innerhalb von 14 Tagen ohne Angabe von Gründen widerrufen. Die Frist beginnt bei einem physischen Produkt am Tag des Erhalts, bei einem Online-Produkt am Tag des Kaufs." },
      { titel: "Physische Produkte", tekst: "Senden Sie das Kompetenzbuch, das hrmforce Kompetenzspiel oder die Teamflow-Matte innerhalb von 14 Tagen nach Erhalt unbenutzt und in der Originalverpackung zurück. Nach Ihrer Meldung erhalten Sie ein kostenloses Rücksendeetikett." },
      { titel: "Online-Tests, Berichte und Trainings", tekst: "Einen Online-Test, einen Bericht oder ein Training stornieren Sie innerhalb von 14 Tagen nach dem Kauf kostenlos, solange der Fragebogen noch nicht versendet und das Training noch nicht begonnen hat. Danach erlischt das Widerrufsrecht, weil die digitale Lieferung mit Ihrer Zustimmung begonnen hat." },
      { titel: "Rücksendung melden", tekst: "Melden Sie eine Rücksendung oder Stornierung an {mail} oder telefonisch unter {tel}. Geben Sie Ihre Bestellnummer und das Produkt an." },
      { titel: "Erstattung", tekst: "Sie zahlen keine Rücksendekosten. Wir erstatten den Kaufpreis innerhalb von 14 Tagen nach Ihrer Stornierung oder nach Erhalt des zurückgesandten Produkts über die Zahlungsmethode, mit der Sie bezahlt haben." },
      { titel: "Andere Aufträge", tekst: "Dieses Widerrufsrecht gilt für Bestellungen im Webshop. Für Aufträge auf Angebotsbasis, etwa Assessments, Trainings und Beratung, gelten die Stornobedingungen in unseren {av}." },
    ],
    av: "Allgemeinen Geschäftsbedingungen",
  },
  fr: {
    meta: {
      title: "Politique de retour | hrmforce",
      description: "Les commandes passées sur la boutique en ligne hrmforce bénéficient d'un délai de rétractation de 14 jours et de retours gratuits. Découvrez comment retourner un produit ou annuler un test en ligne.",
    },
    crumb: "Politique de retour",
    hero: { eyebrow: "Support", title: "Politique de retour", intro: "Les commandes passées sur la boutique en ligne bénéficient d'un délai de rétractation de 14 jours. Le retour est gratuit." },
    secties: [
      { titel: "Délai de rétractation de 14 jours", tekst: "Vous pouvez annuler une commande de la boutique en ligne dans les 14 jours sans donner de motif. Pour un produit physique, le délai commence le jour de la réception, pour un produit en ligne le jour de l'achat." },
      { titel: "Produits physiques", tekst: "Renvoyez le Livre des compétences, le Jeu des compétences hrmforce ou le tapis Teamflow inutilisé et dans son emballage d'origine dans les 14 jours suivant la réception. Après votre signalement, vous recevez une étiquette de retour gratuite." },
      { titel: "Tests en ligne, rapports et formations", tekst: "Vous pouvez annuler gratuitement un test en ligne, un rapport ou une formation dans les 14 jours suivant l'achat, tant que le questionnaire n'a pas été envoyé et que la formation n'a pas commencé. Ensuite, le délai de rétractation prend fin, car la livraison numérique a commencé avec votre accord." },
      { titel: "Signaler un retour", tekst: "Signalez un retour ou une annulation à {mail} ou par téléphone au {tel}. Indiquez votre numéro de commande et le produit." },
      { titel: "Remboursement", tekst: "Vous ne payez aucun frais de retour. Nous remboursons le prix d'achat dans les 14 jours suivant votre annulation ou la réception du produit retourné, avec le moyen de paiement utilisé." },
      { titel: "Autres missions", tekst: "Ce délai de rétractation s'applique aux commandes de la boutique en ligne. Les missions sur devis, comme les assessments, les formations et le conseil, suivent les conditions d'annulation de nos {av}." },
    ],
    av: "conditions générales",
  },
  es: {
    meta: {
      title: "Política de devoluciones | hrmforce",
      description: "Los pedidos de la tienda en línea de hrmforce tienen un plazo de desistimiento de 14 días y devolución gratuita. Lee cómo devolver un producto o cancelar un test en línea.",
    },
    crumb: "Política de devoluciones",
    hero: { eyebrow: "Soporte", title: "Política de devoluciones", intro: "Los pedidos de la tienda en línea tienen un plazo de desistimiento de 14 días. La devolución es gratuita." },
    secties: [
      { titel: "14 días de desistimiento", tekst: "Puedes cancelar un pedido de la tienda en línea en un plazo de 14 días sin indicar el motivo. Para un producto físico el plazo empieza el día de la recepción, para un producto en línea el día de la compra." },
      { titel: "Productos físicos", tekst: "Devuelve el Libro de competencias, el Juego de competencias hrmforce o la alfombra Teamflow sin usar y en su embalaje original en un plazo de 14 días desde la recepción. Tras tu aviso recibes una etiqueta de devolución gratuita." },
      { titel: "Tests en línea, informes y formaciones", tekst: "Puedes cancelar gratis un test en línea, un informe o una formación en un plazo de 14 días desde la compra, mientras el cuestionario no se haya enviado y la formación no haya empezado. Después el plazo de desistimiento termina, porque la entrega digital ha comenzado con tu consentimiento." },
      { titel: "Avisar de una devolución", tekst: "Avisa de una devolución o cancelación en {mail} o llamando al {tel}. Indica tu número de pedido y el producto." },
      { titel: "Reembolso", tekst: "No pagas gastos de devolución. Reembolsamos el precio de compra en un plazo de 14 días desde tu cancelación o desde la recepción del producto devuelto, con el mismo método de pago." },
      { titel: "Otros encargos", tekst: "Este plazo de desistimiento se aplica a los pedidos de la tienda en línea. Los encargos con presupuesto, como assessments, formaciones y consultoría, siguen las condiciones de cancelación de nuestras {av}." },
    ],
    av: "condiciones generales",
  },
  ro: {
    meta: {
      title: "Politica de retur | hrmforce",
      description: "Comenzile din magazinul online hrmforce au o perioadă de retragere de 14 zile, iar returul este gratuit. Află cum returnezi un produs sau anulezi un test online.",
    },
    crumb: "Politica de retur",
    hero: { eyebrow: "Suport", title: "Politica de retur", intro: "Comenzile din magazinul online au o perioadă de retragere de 14 zile. Returul este gratuit." },
    secties: [
      { titel: "14 zile pentru retragere", tekst: "Poți anula o comandă din magazinul online în 14 zile fără să indici motivul. Pentru un produs fizic termenul începe în ziua primirii, pentru un produs online în ziua cumpărării." },
      { titel: "Produse fizice", tekst: "Returnează Cartea competențelor, Jocul competențelor hrmforce sau covorașul Teamflow nefolosit și în ambalajul original în 14 zile de la primire. După ce anunți returul, primești o etichetă de retur gratuită." },
      { titel: "Teste online, rapoarte și training", tekst: "Poți anula gratuit un test online, un raport sau un training în 14 zile de la cumpărare, cât timp chestionarul nu a fost trimis și trainingul nu a început. După aceea perioada de retragere se încheie, deoarece livrarea digitală a început cu acordul tău." },
      { titel: "Anunțarea unui retur", tekst: "Anunță un retur sau o anulare la {mail} sau la telefon {tel}. Menționează numărul comenzii și produsul." },
      { titel: "Rambursare", tekst: "Nu plătești costuri de retur. Rambursăm prețul în 14 zile de la anulare sau de la primirea produsului returnat, prin metoda de plată folosită." },
      { titel: "Alte proiecte", tekst: "Această perioadă de retragere se aplică comenzilor din magazinul online. Proiectele pe bază de ofertă, precum assessment-uri, training și consultanță, urmează condițiile de anulare din {av}." },
    ],
    av: "termenii și condițiile generale",
  },
};
