// Teksten voor de mail die de klant krijgt zodra een bestelling binnen is maar
// de betaling nog niet. Dat gebeurt vooral bij een overboeking: Mollie stuurt
// dan alleen de bankgegevens, en zonder dit bericht hoort de klant dagenlang
// niets van hrmforce.

const T = {
  nl: {
    onderwerp: (nr) => "We hebben je bestelling ontvangen (" + nr + ")",
    aanhef: (naam) => "Beste " + (naam || "klant") + ",",
    intro: "We hebben je bestelling ontvangen. De betaling is nog niet bij ons verwerkt.",
    overboeking: "Je hebt gekozen voor een overboeking. Dat duurt meestal een tot drie werkdagen. De bankgegevens staan in de e-mail van Mollie, onze betaalpartner.",
    anders: "Zodra de betaling is afgerond gaat je bestelling verder.",
    slot: "Zodra de betaling binnen is, ontvang je de bevestiging met de factuur en zetten we de assessments voor je klaar. Je hoeft zelf niets te doen.",
    vraag: "Vragen over deze bestelling? Mail naar service@hrmforce.com en noem het ordernummer.",
    groet: "Met vriendelijke groet,\nhrmforce",
    kop: "Je bestelling:",
  },
  en: {
    onderwerp: (nr) => "We have received your order (" + nr + ")",
    aanhef: (naam) => "Dear " + (naam || "customer") + ",",
    intro: "We have received your order. Your payment has not reached us yet.",
    overboeking: "You chose a bank transfer. That usually takes one to three working days. The bank details are in the email from Mollie, our payment partner.",
    anders: "Your order continues as soon as the payment is completed.",
    slot: "Once the payment arrives you receive the confirmation with the invoice, and we prepare the assessments for you. Nothing further is needed from your side.",
    vraag: "Questions about this order? Email service@hrmforce.com and mention the order number.",
    groet: "Kind regards,\nhrmforce",
    kop: "Your order:",
  },
  de: {
    onderwerp: (nr) => "Wir haben Ihre Bestellung erhalten (" + nr + ")",
    aanhef: (naam) => "Guten Tag " + (naam || "") + ",",
    intro: "Wir haben Ihre Bestellung erhalten. Ihre Zahlung ist bei uns noch nicht eingegangen.",
    overboeking: "Sie haben eine Überweisung gewählt. Das dauert in der Regel ein bis drei Werktage. Die Bankdaten stehen in der E-Mail von Mollie, unserem Zahlungspartner.",
    anders: "Sobald die Zahlung abgeschlossen ist, läuft Ihre Bestellung weiter.",
    slot: "Sobald die Zahlung eingegangen ist, erhalten Sie die Bestätigung mit der Rechnung und wir richten die Assessments für Sie ein. Von Ihrer Seite ist nichts weiter nötig.",
    vraag: "Fragen zu dieser Bestellung? Schreiben Sie an service@hrmforce.com und nennen Sie die Bestellnummer.",
    groet: "Mit freundlichen Grüßen,\nhrmforce",
    kop: "Ihre Bestellung:",
  },
  fr: {
    onderwerp: (nr) => "Nous avons bien reçu votre commande (" + nr + ")",
    aanhef: (naam) => "Bonjour " + (naam || "") + ",",
    intro: "Nous avons bien reçu votre commande. Votre paiement ne nous est pas encore parvenu.",
    overboeking: "Vous avez choisi le virement bancaire. Cela prend généralement un à trois jours ouvrables. Les coordonnées bancaires figurent dans l'e-mail de Mollie, notre partenaire de paiement.",
    anders: "Votre commande se poursuit dès que le paiement est finalisé.",
    slot: "Dès réception du paiement, vous recevez la confirmation avec la facture et nous préparons les évaluations. Rien d'autre n'est requis de votre part.",
    vraag: "Des questions sur cette commande ? Écrivez à service@hrmforce.com en indiquant le numéro de commande.",
    groet: "Cordialement,\nhrmforce",
    kop: "Votre commande :",
  },
  es: {
    onderwerp: (nr) => "Hemos recibido tu pedido (" + nr + ")",
    aanhef: (naam) => "Hola " + (naam || "") + ",",
    intro: "Hemos recibido tu pedido. Tu pago todavía no nos ha llegado.",
    overboeking: "Has elegido una transferencia bancaria. Suele tardar de uno a tres días laborables. Los datos bancarios están en el correo de Mollie, nuestro socio de pagos.",
    anders: "Tu pedido continúa en cuanto se complete el pago.",
    slot: "En cuanto llegue el pago recibirás la confirmación con la factura y prepararemos las evaluaciones. No tienes que hacer nada más.",
    vraag: "¿Dudas sobre este pedido? Escribe a service@hrmforce.com indicando el número de pedido.",
    groet: "Un cordial saludo,\nhrmforce",
    kop: "Tu pedido:",
  },
  ro: {
    onderwerp: (nr) => "Am primit comanda ta (" + nr + ")",
    aanhef: (naam) => "Bună " + (naam || "") + ",",
    intro: "Am primit comanda ta. Plata nu a ajuns încă la noi.",
    overboeking: "Ai ales transferul bancar. De obicei durează una până la trei zile lucrătoare. Datele bancare sunt în e-mailul de la Mollie, partenerul nostru de plăți.",
    anders: "Comanda continuă imediat ce plata este finalizată.",
    slot: "Imediat ce plata ajunge primești confirmarea cu factura și pregătim evaluările. Nu mai trebuie să faci nimic.",
    vraag: "Întrebări despre această comandă? Scrie la service@hrmforce.com și menționează numărul comenzii.",
    groet: "Cu stimă,\nhrmforce",
    kop: "Comanda ta:",
  },
};

const geld = (c) => "EUR " + (c / 100).toFixed(2).replace(".", ",");

// order = het record uit de database, methode = de betaalmethode van Mollie.
export function wachtOpBetalingMail(order, methode) {
  const t = T[order.locale] || T.nl;
  const nr = String(order.id).slice(0, 8).toUpperCase();
  const regels = (order.items || []).map((it) => "- " + it.title + " x" + it.qty + "  " + geld(it.lineCents));
  const tekst = [
    t.aanhef((order.billing && order.billing.contact) || ""),
    "",
    t.intro,
    "",
    t.kop,
    ...regels,
    "Totaal: " + geld(order.totalCents),
    "",
    methode === "banktransfer" ? t.overboeking : t.anders,
    "",
    t.slot,
    "",
    t.vraag,
    "",
    t.groet,
  ].join("\n");
  return { onderwerp: t.onderwerp(nr), tekst };
}
