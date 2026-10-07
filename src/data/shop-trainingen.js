/* Trainingen in de webshop. Een training is geen test: er is geen rapport, geen
   afnametijd en geen voorbeeldrapport. Daarom krijgen deze producten een eigen
   segment, eigen kenmerken en een eigen vragenlijst, en blijft het blok voor
   het aanvragen van een voorbeeldrapport bij deze producten weg. */

import { vulAan } from "./vertaal-inhoud.js";

export const TRAINING_HANDLES = ["online-certificatietraining"];
export const TRAINING_SEGMENT = "Training";

/* De vier kenmerken onder de beschrijving. Alles hieronder staat in de
   productomschrijving van de training zelf. */
export const TRAINING_BULLETS = {
  nl: ["Eén dag, van 09:30 tot 16:30", "Maximaal twaalf deelnemers", "Certificering als hrmforce-gebruiker", "Op locatie, data staan in de trainingskalender"],
  en: ["One day, from 09:30 to 16:30", "Twelve participants at most", "Certification as an hrmforce user", "On site, dates are in the training calendar"],
  de: ["Ein Tag, von 09:30 bis 16:30 Uhr", "Höchstens zwölf Teilnehmende", "Zertifizierung als hrmforce-Nutzer", "Vor Ort, Termine stehen im Trainingskalender"],
  fr: ["Une journée, de 09h30 à 16h30", "Douze participants au maximum", "Certification comme utilisateur hrmforce", "Sur site, les dates figurent au calendrier des formations"],
  es: ["Un día, de 09:30 a 16:30", "Doce participantes como máximo", "Certificación como usuario de hrmforce", "Presencial, las fechas están en el calendario de formación"],
  ro: ["O zi, de la 09:30 la 16:30", "Cel mult doisprezece participanți", "Certificare ca utilizator hrmforce", "La sediu, datele sunt în calendarul de training"],
};

/* Vragen die bij een training horen, in plaats van de vragen over assessments. */
export const TRAINING_FAQ = {
  nl: [
    { q: "Hoe lang duurt de training?", a: "Eén dag, van 09:30 tot 16:30, inclusief pauzes. Je rondt de dag af als gecertificeerd gebruiker." },
    { q: "Hoeveel deelnemers zitten er in een groep?", a: "Maximaal twaalf. Daardoor is er ruimte om zelf te oefenen en je eigen vragen te stellen." },
    { q: "Wat komt er tijdens de dag aan bod?", a: "Het invoeren van kandidaten, het versturen van vragenlijsten, het interpreteren van de resultaten en het voeren van een feedbackgesprek." },
    { q: "Wat levert de training op?", a: "Na afloop ben je gecertificeerd hrmforce-gebruiker en werk je zelfstandig met de vragenlijsten en rapportages." },
    { q: "Waar vindt de training plaats?", a: "Op locatie. De data, het adres en de prijs staan in de trainingskalender." },
    { q: "Voor wie is de training bedoeld?", a: "Voor wie binnen de eigen organisatie met de vragenlijsten van hrmforce gaat werken. Voorkennis van testgebruik is niet nodig." },
  ],
  en: [
    { q: "How long does the training take?", a: "One day, from 09:30 to 16:30, breaks included. You finish the day as a certified user." },
    { q: "How many participants are in a group?", a: "Twelve at most. That leaves room to practise yourself and ask your own questions." },
    { q: "What does the day cover?", a: "Entering candidates, sending out questionnaires, interpreting the results and holding a feedback conversation." },
    { q: "What does the training give me?", a: "Afterwards you are a certified hrmforce user and work independently with the questionnaires and reports." },
    { q: "Where does the training take place?", a: "On site. The dates, address and price are in the training calendar." },
    { q: "Who is the training for?", a: "For anyone who will work with the hrmforce questionnaires within their own organisation. No prior test experience is needed." },
  ],
  de: [
    { q: "Wie lange dauert die Schulung?", a: "Ein Tag, von 09:30 bis 16:30 Uhr, Pausen inbegriffen. Sie schließen den Tag als zertifizierter Nutzer ab." },
    { q: "Wie viele Teilnehmende sind in einer Gruppe?", a: "Höchstens zwölf. So bleibt Raum zum eigenen Üben und für Ihre Fragen." },
    { q: "Was wird an diesem Tag behandelt?", a: "Das Anlegen von Kandidaten, das Versenden von Fragebögen, die Interpretation der Ergebnisse und das Führen eines Feedbackgesprächs." },
    { q: "Was bringt die Schulung?", a: "Danach sind Sie zertifizierter hrmforce-Nutzer und arbeiten selbstständig mit den Fragebögen und Berichten." },
    { q: "Wo findet die Schulung statt?", a: "Vor Ort. Termine, Adresse und Preis stehen im Trainingskalender." },
    { q: "Für wen ist die Schulung gedacht?", a: "Für alle, die in der eigenen Organisation mit den Fragebögen von hrmforce arbeiten werden. Vorkenntnisse im Testeinsatz sind nicht nötig." },
  ],
  fr: [
    { q: "Combien de temps dure la formation ?", a: "Une journée, de 09h30 à 16h30, pauses comprises. Vous terminez la journée comme utilisateur certifié." },
    { q: "Combien de participants par groupe ?", a: "Douze au maximum. Cela laisse la place pour s'exercer soi-même et poser ses propres questions." },
    { q: "Que couvre la journée ?", a: "La saisie des candidats, l'envoi des questionnaires, l'interprétation des résultats et la conduite d'un entretien de restitution." },
    { q: "Qu'apporte la formation ?", a: "Ensuite, vous êtes utilisateur hrmforce certifié et travaillez de façon autonome avec les questionnaires et les rapports." },
    { q: "Où se déroule la formation ?", a: "Sur site. Les dates, l'adresse et le prix figurent au calendrier des formations." },
    { q: "À qui s'adresse la formation ?", a: "À toute personne qui utilisera les questionnaires hrmforce au sein de son organisation. Aucune expérience préalable des tests n'est requise." },
  ],
  es: [
    { q: "¿Cuánto dura la formación?", a: "Un día, de 09:30 a 16:30, pausas incluidas. Terminas el día como usuario certificado." },
    { q: "¿Cuántos participantes hay por grupo?", a: "Doce como máximo. Así queda espacio para practicar y plantear tus propias preguntas." },
    { q: "¿Qué se ve durante el día?", a: "El alta de candidatos, el envío de cuestionarios, la interpretación de los resultados y la conducción de una entrevista de devolución." },
    { q: "¿Qué aporta la formación?", a: "Después eres usuario certificado de hrmforce y trabajas de forma autónoma con los cuestionarios y los informes." },
    { q: "¿Dónde se imparte la formación?", a: "Presencial. Las fechas, la dirección y el precio están en el calendario de formación." },
    { q: "¿A quién va dirigida la formación?", a: "A quien vaya a trabajar con los cuestionarios de hrmforce dentro de su organización. No hace falta experiencia previa con tests." },
  ],
  ro: [
    { q: "Cât durează trainingul?", a: "O zi, de la 09:30 la 16:30, pauzele incluse. Închei ziua ca utilizator certificat." },
    { q: "Câți participanți sunt într-o grupă?", a: "Cel mult doisprezece. Astfel rămâne loc pentru exercițiu și pentru întrebările tale." },
    { q: "Ce se parcurge în timpul zilei?", a: "Introducerea candidaților, trimiterea chestionarelor, interpretarea rezultatelor și purtarea unei discuții de feedback." },
    { q: "Ce oferă trainingul?", a: "După aceea ești utilizator hrmforce certificat și lucrezi independent cu chestionarele și rapoartele." },
    { q: "Unde are loc trainingul?", a: "La sediu. Datele, adresa și prețul sunt în calendarul de training." },
    { q: "Cui se adresează trainingul?", a: "Celor care vor lucra cu chestionarele hrmforce în propria organizație. Nu este nevoie de experiență anterioară cu teste." },
  ],
};

// Talen zonder eigen tekst in dit bestand worden aangevuld uit
// src/data/translations-content/<taal>.json. Zie vertaal-inhoud.js.
Object.assign(TRAINING_BULLETS, vulAan(TRAINING_BULLETS));
Object.assign(TRAINING_FAQ, vulAan(TRAINING_FAQ));
