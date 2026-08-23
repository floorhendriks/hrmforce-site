// Tarieven-content per taal, gebruikt door src/components/Tarieven.astro.
// NL = leidend. DE/FR/ES/RO zijn een eerste vertaalslag — laat nakijken door een native speaker.
export const tarievenContent = {
  nl: {
    meta: { title: "Tarieven - hrmforce", description: "Bekijk de mogelijkheden en tarieven van hrmforce: eigen portal op licentiebasis of losse afname per assessment." },
    crumb: "Tarieven",
    hero: { eyebrow: "Tarieven", title: "Haal het maximale uit medewerkers met onze talentmanagement-software", intro: "De meeste organisaties starten met een <strong>eigen portal op licentiebasis</strong>: onbeperkt afnemen tegen een vaste jaarprijs, in je eigen huisstijl en gekoppeld aan je HR-systeem. Voor pilots of incidentele afname kan het ook per assessment via de shop.", positioning: "Voor organisaties van 25 tot 2.500 medewerkers", cta: "Plan een demo", roiCta: "Bereken je besparing" },
    fit: { eyebrow: "Welke vorm past?", title: "Vind snel de juiste opzet voor jouw organisatie", q: "Hoeveel medewerkers heeft je organisatie?", tiers: ["25–250", "250–1.000", "1.000–2.500"], out: [
      "Bij <b>25–250 medewerkers</b> is een jaarlicentie met een eigen portal meestal het voordeligst zodra je meerdere trajecten per jaar draait. Twijfel je? Start met een pilot en schaal op.",
      "Bij <b>250–1.000 medewerkers</b> loont een <b>jaarlicentie</b> vrijwel altijd: onbeperkt afnemen, eigen huisstijl en koppeling met je HR-systeem. Vraag een prijs op maat.",
      "Bij <b>1.000–2.500 medewerkers</b> kies je voor een <b>Pro-licentie</b> met eigen ontwikkelflows, maatwerk-API en een vaste accountmanager.",
    ], cta: "Plan een demo" },
    plansTitle: { eyebrow: "Licenties", title: "Onze pakketten" },
    plans: [
      { name: "Pay-as-you-go", tagline: "Betaal per kandidaat per rapportage. Geen vaste kosten, maar koop in naar behoefte.", price: "€19,- tot €99,-", priceNote: "per test", featured: false, cta: "Plan een demo", groups: [
        { title: "Vragenlijsten", items: ["37 vragenlijsten", "Onbeperkt competentieprofielen", "50 competenties", "Big50 Personality", "360 Feedback"] },
        { title: "Hrmforce portal", items: ["Standaard Look & Feel", "Volledig online", "Kandidatenbeheer", "Management reporting"] },
        { title: "Support", items: ["Online kennisbank", "Training open inschrijving"] } ] },
      { name: "Advanced", tagline: "Onbeperkt gebruik van vragenlijsten. Jaarlijkse licentie op basis van het aantal medewerkers of consultants.", price: "Op aanvraag", priceNote: "jaarlicentie", featured: true, cta: "Plan een demo", groups: [
        { title: "Vragenlijsten", items: ["37 vragenlijsten", "Maatwerk vragenlijst Onderwijs", "Maatwerk vragenlijst Zorg", "CanMeds vragenlijst", "Onderwijs competentietaal", "Onbeperkt competentieprofielen", "Big50 Personality", "360 Feedback + Extra open vragen"] },
        { title: "HRM Tools", items: ["Analytics", "Recruitment", "BiLa"] },
        { title: "Hrmforce portal", items: ["Dashboard", "Eigen bedrijfslogo", "Management Reporting", "Kandidatenbeheer", "Mass upload & Edit"] },
        { title: "Support", items: ["Telefonische helpdesk", "Nieuwe talen", "Certificatietraining voor 1 deelnemer", "API (bestaande koppelingen)"] } ] },
      { name: "Pro", tagline: "Onbeperkt gebruik van vragenlijsten en alle hrmforce functionaliteiten. Jaarlijkse licentie op basis van het aantal medewerkers of consultants.", price: "Op aanvraag", priceNote: "jaarlicentie", featured: false, cta: "Plan een demo", groups: [
        { title: "Vragenlijsten", items: ["Alle vragenlijsten", "Vragenlijsten op maat", "Extra open vragen", "Onbeperkt competentieprofielen", "Maatwerk competenties"] },
        { title: "HRM Tools", items: ["Recruitment", "Development", "Employability", "Teamview", "Analytics", "Ontwikkelflow op maat"] },
        { title: "Hrmforce portal", items: ["Dashboard+", "Eigen huisstijl in portal en rapportages", "Management Reporting", "Kandidatenbeheer", "Mass upload & Edit"] },
        { title: "Support", items: ["Eigen accountmanager", "Direct toegang tot nieuwe functionaliteiten", "Maatwerk API", "Autosync", "Certificatietraining tot 8 deelnemers"] } ] },
    ],
    featuredBadge: "Meest gekozen",
    plansNote: "Prijzen pay-as-you-go variëren van €19,- tot €99,- per test. Jaarlicenties zijn gebaseerd op het aantal medewerkers of consultants; vraag een offerte aan voor een prijs op maat.",
    compare: { eyebrow: "Vergelijken", title: "Pakketten vergelijken", featCol: "Advanced", featBadge: "Meest gekozen", head: ["Functionaliteit", "Pay-as-you-go", "Pro"], cta: "Vraag een offerte op maat aan", rows: [
      { label: "Aantal vragenlijsten", pay: "37", adv: "37 + maatwerk", pro: "Alle + op maat" },
      { label: "Big50 Personality & 360 Feedback", pay: true, adv: "+ extra open vragen", pro: "+ extra open vragen" },
      { label: "CanMeds & maatwerk vragenlijsten (Zorg/Onderwijs)", pay: false, adv: true, pro: true },
      { label: "HRM Tools (Analytics, Recruitment, Development)", pay: false, adv: "Analytics, Recruitment, BiLa", pro: "Volledige suite + Teamview" },
      { label: "Eigen huisstijl in portal & rapportages", pay: false, adv: "Eigen bedrijfslogo", pro: true },
      { label: "Management reporting & kandidatenbeheer", pay: true, adv: true, pro: true },
      { label: "Support", pay: "Online kennisbank", adv: "Telefonische helpdesk", pro: "Eigen accountmanager" },
      { label: "Certificatietraining", pay: "Open inschrijving", adv: "1 deelnemer", pro: "Tot 8 deelnemers" },
      { label: "API-koppelingen", pay: false, adv: "Bestaande koppelingen", pro: "Maatwerk API + autosync" },
      { label: "Prijsmodel", pay: "Betaal per test", adv: "Jaarlicentie", pro: "Jaarlicentie" },
    ] },
    incl: { eyebrow: "Standaard", title: "Ieder pakket is inclusief", items: ["AVG / GDPR Compliant", "2-staps Authenticatie", "Beschikbaar in meerdere talen", "Volledig Online", "Competentiebibliotheek", "Standaard functieprofielen"] },
    onb: { eyebrow: "Implementatie", title: "Onboarden was nog nooit zo makkelijk", note: "* Eenmalige kosten.", self: "Zelfstandigheidsniveau", det: "Detailniveau", fromLabel: "vanaf", tiers: [
      { name: "Light", zelf: "5/5", detail: "1/5", price: "Gratis*", items: ["Basic inrichting", "Online instructieportal", "Online support portal", "Zelf aanvullend inrichten"] },
      { name: "Basic", zelf: "3/5", detail: "3/5", price: "1750,-*", items: ["LIGHT +", "Inrichten Competentieprofielen", "Inrichten Functies", "Inrichten Matchprofielen", "E-learning psychometrie", "Live certificatietraining open inschrijving"] },
      { name: "Pro", zelf: "1/5", detail: "5/5", price: "3750,-*", items: ["BASIC +", "Contact consultant", "Inrichten maatwerk API", "Inrichten Ontwikkelcyclus", "Begeleiding interne communicatie", "Kickoff"] },
    ] },
    faqSection: { eyebrow: "Veelgestelde vragen", title: "Veelgestelde vragen over tarieven" },
    faqs: [
      { q: "Wat voor soort vragenlijsten biedt hrmforce aan?", a: "hrmforce biedt een breed scala aan vragenlijsten, waaronder persoonlijkheidstests, competentie-assessments, 360 graden feedback en medewerkerstevredenheidsonderzoeken, allemaal ontworpen om de HR-processen te versterken." },
      { q: "Kunnen de vragenlijsten worden aangepast aan de behoeften van ons bedrijf?", a: "Ja, we bieden maatwerkoplossingen waarbij onze vragenlijsten kunnen worden aangepast om te voldoen aan de specifieke behoeften en doelen van uw organisatie." },
      { q: "Hoe integreert hrmforce met onze bestaande HR-systemen?", a: "Onze software integreert eenvoudig met de meeste HRIS-, LMS- en ERP-systemen via API of SSO, voor een naadloze dataflow binnen uw organisatie." },
      { q: "Hoe betrouwbaar en valide zijn de vragenlijsten?", a: "Onze vragenlijsten zijn wetenschappelijk onderbouwd en getest op hoge betrouwbaarheid en validiteit, en worden gereviewd door NIP-geregistreerde psychologen." },
      { q: "Hoe wordt de privacy en AVG gewaarborgd?", a: "hrmforce houdt zich strikt aan de AVG. Alle medewerkersgegevens worden binnen de EU verwerkt en veilig opgeslagen met de hoogste standaarden van gegevensbeveiliging." },
      { q: "Wat zijn de kosten?", a: "De kosten variëren met je behoeften en schaal. We bieden flexibele modellen: pay-as-you-go per assessment of een jaarlicentie op basis van het aantal medewerkers." },
    ],
    ctaBand: { title: "Heb je een andere vraag?", text: "Ons team staat voor je klaar. Vraag een offerte of demo aan en we stemmen de juiste vorm af op jouw situatie.", primary: "Neem contact op", secondary: "Lees meer over hrmforce", hours: "Onze adviseurs zijn bereikbaar op maandag t/m vrijdag van 08:00 – 18:00 uur." },
  },
};

// en/de/fr/es/ro erven de NL-structuur en overschrijven de teksten.
const clone = (o) => JSON.parse(JSON.stringify(o));

tarievenContent.en = clone(tarievenContent.nl);
Object.assign(tarievenContent.en.meta, { title: "Pricing - hrmforce", description: "Explore hrmforce options and pricing: your own portal on a licence basis, or pay per assessment." });
tarievenContent.en.crumb = "Pricing";
Object.assign(tarievenContent.en.hero, { eyebrow: "Pricing", title: "Get the most out of your people with our talent management software", intro: "Most organisations start with <strong>their own portal on a licence basis</strong>: unlimited use for a fixed annual price, in your own branding and connected to your HR system. For pilots or occasional use you can also pay per assessment via the shop.", positioning: "For organisations of 25 to 2,500 employees", cta: "Book a demo", roiCta: "Calculate your savings" });
Object.assign(tarievenContent.en.fit, { eyebrow: "Which fits?", title: "Quickly find the right setup for your organisation", q: "How many employees does your organisation have?", tiers: ["25–250", "250–1,000", "1,000–2,500"], out: [
  "At <b>25–250 employees</b> an annual licence with your own portal is usually most cost-effective once you run several projects a year. Unsure? Start with a pilot and scale up.",
  "At <b>250–1,000 employees</b> an <b>annual licence</b> almost always pays off: unlimited use, your own branding and a link to your HR system. Request a tailored price.",
  "At <b>1,000–2,500 employees</b> you choose a <b>Pro licence</b> with custom development flows, a bespoke API and a dedicated account manager.",
], cta: "Book a demo" });
tarievenContent.en.plansTitle = { eyebrow: "Licences", title: "Our packages" };
tarievenContent.en.featuredBadge = "Most chosen";
tarievenContent.en.plansNote = "Pay-as-you-go prices range from €19 to €99 per test. Annual licences are based on the number of employees or consultants; request a quote for a tailored price.";
tarievenContent.en.plans[0].tagline = "Pay per candidate per report. No fixed costs — buy as you need.";
tarievenContent.en.plans[0].priceNote = "per test"; tarievenContent.en.plans[0].cta = "Book a demo";
tarievenContent.en.plans[1].tagline = "Unlimited use of questionnaires. Annual licence based on the number of employees or consultants."; tarievenContent.en.plans[1].price = "On request"; tarievenContent.en.plans[1].priceNote = "annual licence"; tarievenContent.en.plans[1].cta = "Book a demo";
tarievenContent.en.plans[2].tagline = "Unlimited use of questionnaires and all hrmforce features. Annual licence based on the number of employees or consultants."; tarievenContent.en.plans[2].price = "On request"; tarievenContent.en.plans[2].priceNote = "annual licence"; tarievenContent.en.plans[2].cta = "Book a demo";
Object.assign(tarievenContent.en.compare, { eyebrow: "Compare", title: "Compare packages", featBadge: "Most chosen", head: ["Feature", "Pay-as-you-go", "Pro"], cta: "Request a tailored quote" });
tarievenContent.en.incl = { eyebrow: "Standard", title: "Every package includes", items: ["GDPR compliant", "2-step authentication", "Available in multiple languages", "Fully online", "Competency library", "Standard job profiles"] };
Object.assign(tarievenContent.en.onb, { eyebrow: "Implementation", title: "Onboarding has never been easier", note: "* One-off cost.", self: "Independence level", det: "Detail level", fromLabel: "from" });
tarievenContent.en.onb.tiers[0].price = "Free*";
tarievenContent.en.faqSection = { eyebrow: "FAQ", title: "Frequently asked questions about pricing" };
tarievenContent.en.faqs = [
  { q: "What kind of questionnaires does hrmforce offer?", a: "hrmforce offers a broad range of questionnaires — personality tests, competency assessments, 360-degree feedback and employee satisfaction surveys — all designed to strengthen HR processes." },
  { q: "Can the questionnaires be tailored to our company's needs?", a: "Yes, we offer bespoke solutions where our questionnaires can be adapted to your organisation's specific needs and goals." },
  { q: "How does hrmforce integrate with our existing HR systems?", a: "Our software integrates easily with most HRIS, LMS and ERP systems via API or SSO, for a seamless data flow within your organisation." },
  { q: "How reliable and valid are the questionnaires?", a: "Our questionnaires are scientifically grounded and tested for high reliability and validity, and reviewed by NIP-registered psychologists." },
  { q: "How is privacy and GDPR safeguarded?", a: "hrmforce strictly complies with the GDPR. All employee data is processed within the EU and stored securely to the highest data-security standards." },
  { q: "What does it cost?", a: "Costs vary with your needs and scale. We offer flexible models: pay-as-you-go per assessment or an annual licence based on the number of employees." },
];
tarievenContent.en.ctaBand = { title: "Have a different question?", text: "Our team is here to help. Request a quote or demo and we'll match the right setup to your situation.", primary: "Get in touch", secondary: "Read more about hrmforce", hours: "Our advisors are available Monday to Friday, 08:00 – 18:00." };

tarievenContent.de = clone(tarievenContent.nl);
Object.assign(tarievenContent.de.meta, { title: "Preise - hrmforce", description: "Entdecken Sie Optionen und Preise von hrmforce: ein eigenes Portal auf Lizenzbasis oder Abrechnung pro Assessment." });
tarievenContent.de.crumb = "Preise";
Object.assign(tarievenContent.de.hero, { eyebrow: "Preise", title: "Holen Sie mit unserer Talentmanagement-Software das Beste aus Ihren Mitarbeitern heraus", intro: "Die meisten Organisationen starten mit einem <strong>eigenen Portal auf Lizenzbasis</strong>: unbegrenzte Nutzung zu einem festen Jahrespreis, in Ihrem Branding und mit Anbindung an Ihr HR-System. Für Pilotprojekte oder gelegentliche Nutzung ist auch die Abrechnung pro Assessment über den Shop möglich.", positioning: "Für Organisationen von 25 bis 2.500 Mitarbeitern", cta: "Demo anfragen", roiCta: "Ersparnis berechnen" });
Object.assign(tarievenContent.de.fit, { eyebrow: "Was passt?", title: "Finden Sie schnell die richtige Lösung für Ihre Organisation", q: "Wie viele Mitarbeiter hat Ihre Organisation?", tiers: ["25–250", "250–1.000", "1.000–2.500"], out: [
  "Bei <b>25–250 Mitarbeitern</b> ist eine Jahreslizenz mit eigenem Portal meist am günstigsten, sobald Sie mehrere Projekte pro Jahr durchführen. Unsicher? Starten Sie mit einem Pilotprojekt.",
  "Bei <b>250–1.000 Mitarbeitern</b> lohnt sich fast immer eine <b>Jahreslizenz</b>: unbegrenzte Nutzung, eigenes Branding und Anbindung an Ihr HR-System. Fordern Sie einen individuellen Preis an.",
  "Bei <b>1.000–2.500 Mitarbeitern</b> wählen Sie eine <b>Pro-Lizenz</b> mit eigenen Entwicklungs-Flows, maßgeschneiderter API und festem Ansprechpartner.",
], cta: "Demo anfragen" });
tarievenContent.de.plansTitle = { eyebrow: "Lizenzen", title: "Unsere Pakete" };
tarievenContent.de.featuredBadge = "Am häufigsten gewählt";
tarievenContent.de.plansNote = "Pay-as-you-go-Preise liegen zwischen 19 € und 99 € pro Test. Jahreslizenzen richten sich nach der Anzahl der Mitarbeiter oder Berater; fordern Sie ein individuelles Angebot an.";
tarievenContent.de.plans[0].tagline = "Zahlen Sie pro Kandidat und Bericht. Keine Fixkosten — kaufen Sie nach Bedarf."; tarievenContent.de.plans[0].priceNote = "pro Test"; tarievenContent.de.plans[0].cta = "Demo anfragen";
tarievenContent.de.plans[1].tagline = "Unbegrenzte Nutzung der Fragebögen. Jahreslizenz nach Anzahl der Mitarbeiter oder Berater."; tarievenContent.de.plans[1].price = "Auf Anfrage"; tarievenContent.de.plans[1].priceNote = "Jahreslizenz"; tarievenContent.de.plans[1].cta = "Demo anfragen";
tarievenContent.de.plans[2].tagline = "Unbegrenzte Nutzung aller Fragebögen und Funktionen. Jahreslizenz nach Anzahl der Mitarbeiter oder Berater."; tarievenContent.de.plans[2].price = "Auf Anfrage"; tarievenContent.de.plans[2].priceNote = "Jahreslizenz"; tarievenContent.de.plans[2].cta = "Demo anfragen";
Object.assign(tarievenContent.de.compare, { eyebrow: "Vergleichen", title: "Pakete vergleichen", featBadge: "Am häufigsten gewählt", head: ["Funktion", "Pay-as-you-go", "Pro"], cta: "Individuelles Angebot anfordern" });
tarievenContent.de.incl = { eyebrow: "Standard", title: "In jedem Paket enthalten", items: ["DSGVO-konform", "2-Faktor-Authentifizierung", "In mehreren Sprachen verfügbar", "Vollständig online", "Kompetenzbibliothek", "Standard-Stellenprofile"] };
Object.assign(tarievenContent.de.onb, { eyebrow: "Implementierung", title: "Onboarding war noch nie so einfach", note: "* Einmalige Kosten.", self: "Selbstständigkeit", det: "Detailgrad", fromLabel: "ab" });
tarievenContent.de.onb.tiers[0].price = "Kostenlos*";
tarievenContent.de.faqSection = { eyebrow: "Häufige Fragen", title: "Häufige Fragen zu den Preisen" };
tarievenContent.de.faqs = [
  { q: "Welche Fragebögen bietet hrmforce an?", a: "hrmforce bietet ein breites Spektrum an Fragebögen — Persönlichkeitstests, Kompetenz-Assessments, 360-Grad-Feedback und Mitarbeiterbefragungen — alle zur Stärkung Ihrer HR-Prozesse." },
  { q: "Können die Fragebögen an unser Unternehmen angepasst werden?", a: "Ja, wir bieten maßgeschneiderte Lösungen, bei denen unsere Fragebögen an die Bedürfnisse und Ziele Ihrer Organisation angepasst werden." },
  { q: "Wie integriert sich hrmforce in bestehende HR-Systeme?", a: "Unsere Software lässt sich über API oder SSO einfach in die meisten HRIS-, LMS- und ERP-Systeme integrieren." },
  { q: "Wie zuverlässig und valide sind die Fragebögen?", a: "Unsere Fragebögen sind wissenschaftlich fundiert, auf hohe Zuverlässigkeit und Validität geprüft und werden von NIP-registrierten Psychologen überprüft." },
  { q: "Wie werden Datenschutz und DSGVO gewährleistet?", a: "hrmforce hält die DSGVO streng ein. Alle Mitarbeiterdaten werden innerhalb der EU verarbeitet und sicher gespeichert." },
  { q: "Was kostet es?", a: "Die Kosten richten sich nach Bedarf und Umfang. Wir bieten flexible Modelle: Pay-as-you-go pro Assessment oder eine Jahreslizenz nach Mitarbeiterzahl." },
];
tarievenContent.de.ctaBand = { title: "Haben Sie eine andere Frage?", text: "Unser Team hilft Ihnen gerne. Fordern Sie ein Angebot oder eine Demo an — wir stimmen die passende Lösung auf Ihre Situation ab.", primary: "Kontakt aufnehmen", secondary: "Mehr über hrmforce", hours: "Unsere Berater sind Montag bis Freitag von 08:00 bis 18:00 Uhr erreichbar." };

tarievenContent.fr = clone(tarievenContent.nl);
Object.assign(tarievenContent.fr.meta, { title: "Tarifs - hrmforce", description: "Découvrez les options et tarifs de hrmforce : votre propre portail sous licence ou paiement à l'évaluation." });
tarievenContent.fr.crumb = "Tarifs";
Object.assign(tarievenContent.fr.hero, { eyebrow: "Tarifs", title: "Tirez le meilleur de vos collaborateurs avec notre logiciel de gestion des talents", intro: "La plupart des organisations démarrent avec <strong>leur propre portail sous licence</strong> : utilisation illimitée à un prix annuel fixe, à vos couleurs et connecté à votre système RH. Pour des pilotes ou un usage ponctuel, le paiement à l'évaluation via la boutique est aussi possible.", positioning: "Pour les organisations de 25 à 2 500 collaborateurs", cta: "Demander une démo", roiCta: "Calculez vos économies" });
Object.assign(tarievenContent.fr.fit, { eyebrow: "Quelle formule ?", title: "Trouvez rapidement la bonne formule pour votre organisation", q: "Combien de collaborateurs compte votre organisation ?", tiers: ["25–250", "250–1 000", "1 000–2 500"], out: [
  "Pour <b>25 à 250 collaborateurs</b>, une licence annuelle avec portail dédié est généralement la plus rentable dès que vous menez plusieurs projets par an. Un doute ? Commencez par un pilote.",
  "Pour <b>250 à 1 000 collaborateurs</b>, une <b>licence annuelle</b> est presque toujours rentable : usage illimité, vos couleurs et connexion à votre SIRH. Demandez un tarif sur mesure.",
  "Pour <b>1 000 à 2 500 collaborateurs</b>, optez pour une <b>licence Pro</b> avec des parcours de développement sur mesure, une API dédiée et un gestionnaire de compte attitré.",
], cta: "Demander une démo" });
tarievenContent.fr.plansTitle = { eyebrow: "Licences", title: "Nos formules" };
tarievenContent.fr.featuredBadge = "Le plus choisi";
tarievenContent.fr.plansNote = "Les tarifs à l'unité vont de 19 € à 99 € par test. Les licences annuelles dépendent du nombre de collaborateurs ou de consultants ; demandez un devis sur mesure.";
tarievenContent.fr.plans[0].tagline = "Payez par candidat et par rapport. Aucun coût fixe — achetez selon vos besoins."; tarievenContent.fr.plans[0].priceNote = "par test"; tarievenContent.fr.plans[0].cta = "Demander une démo";
tarievenContent.fr.plans[1].tagline = "Utilisation illimitée des questionnaires. Licence annuelle selon le nombre de collaborateurs ou consultants."; tarievenContent.fr.plans[1].price = "Sur demande"; tarievenContent.fr.plans[1].priceNote = "licence annuelle"; tarievenContent.fr.plans[1].cta = "Demander une démo";
tarievenContent.fr.plans[2].tagline = "Utilisation illimitée des questionnaires et de toutes les fonctionnalités. Licence annuelle selon le nombre de collaborateurs ou consultants."; tarievenContent.fr.plans[2].price = "Sur demande"; tarievenContent.fr.plans[2].priceNote = "licence annuelle"; tarievenContent.fr.plans[2].cta = "Demander une démo";
Object.assign(tarievenContent.fr.compare, { eyebrow: "Comparer", title: "Comparer les formules", featBadge: "Le plus choisi", head: ["Fonctionnalité", "À l'unité", "Pro"], cta: "Demander un devis sur mesure" });
tarievenContent.fr.incl = { eyebrow: "Standard", title: "Chaque formule comprend", items: ["Conforme au RGPD", "Authentification en 2 étapes", "Disponible en plusieurs langues", "Entièrement en ligne", "Bibliothèque de compétences", "Profils de poste standard"] };
Object.assign(tarievenContent.fr.onb, { eyebrow: "Implémentation", title: "L'onboarding n'a jamais été aussi simple", note: "* Coût unique.", self: "Niveau d'autonomie", det: "Niveau de détail", fromLabel: "à partir de" });
tarievenContent.fr.onb.tiers[0].price = "Gratuit*";
tarievenContent.fr.faqSection = { eyebrow: "FAQ", title: "Questions fréquentes sur les tarifs" };
tarievenContent.fr.faqs = [
  { q: "Quels types de questionnaires hrmforce propose-t-il ?", a: "hrmforce propose une large gamme de questionnaires — tests de personnalité, évaluations de compétences, feedback 360° et enquêtes de satisfaction — conçus pour renforcer vos processus RH." },
  { q: "Les questionnaires peuvent-ils être adaptés à notre entreprise ?", a: "Oui, nous proposons des solutions sur mesure adaptées aux besoins et objectifs de votre organisation." },
  { q: "Comment hrmforce s'intègre-t-il à nos systèmes RH ?", a: "Notre logiciel s'intègre facilement à la plupart des systèmes SIRH, LMS et ERP via API ou SSO." },
  { q: "Quelle est la fiabilité et la validité des questionnaires ?", a: "Nos questionnaires sont scientifiquement fondés, testés pour une haute fiabilité et validité, et revus par des psychologues agréés NIP." },
  { q: "Comment la confidentialité et le RGPD sont-ils garantis ?", a: "hrmforce respecte strictement le RGPD. Toutes les données sont traitées au sein de l'UE et stockées en toute sécurité." },
  { q: "Quel est le coût ?", a: "Les coûts varient selon vos besoins et votre échelle. Nous proposons des modèles flexibles : à l'unité par évaluation ou une licence annuelle selon le nombre de collaborateurs." },
];
tarievenContent.fr.ctaBand = { title: "Une autre question ?", text: "Notre équipe est à votre disposition. Demandez un devis ou une démo et nous adapterons la formule à votre situation.", primary: "Nous contacter", secondary: "En savoir plus sur hrmforce", hours: "Nos conseillers sont disponibles du lundi au vendredi de 08h00 à 18h00." };

tarievenContent.es = clone(tarievenContent.nl);
Object.assign(tarievenContent.es.meta, { title: "Precios - hrmforce", description: "Descubra las opciones y precios de hrmforce: su propio portal con licencia o pago por evaluación." });
tarievenContent.es.crumb = "Precios";
Object.assign(tarievenContent.es.hero, { eyebrow: "Precios", title: "Saque el máximo partido a sus empleados con nuestro software de gestión del talento", intro: "La mayoría de las organizaciones empiezan con <strong>su propio portal con licencia</strong>: uso ilimitado por un precio anual fijo, con su marca y conectado a su sistema de RR. HH. Para pilotos o uso puntual también puede pagar por evaluación en la tienda.", positioning: "Para organizaciones de 25 a 2.500 empleados", cta: "Solicitar una demo", roiCta: "Calcule su ahorro" });
Object.assign(tarievenContent.es.fit, { eyebrow: "¿Qué encaja?", title: "Encuentre rápido la opción adecuada para su organización", q: "¿Cuántos empleados tiene su organización?", tiers: ["25–250", "250–1.000", "1.000–2.500"], out: [
  "Con <b>25–250 empleados</b>, una licencia anual con portal propio suele ser lo más rentable en cuanto realiza varios proyectos al año. ¿Dudas? Empiece con un piloto.",
  "Con <b>250–1.000 empleados</b>, una <b>licencia anual</b> casi siempre compensa: uso ilimitado, su marca y conexión con su sistema de RR. HH. Solicite un precio a medida.",
  "Con <b>1.000–2.500 empleados</b>, elija una <b>licencia Pro</b> con flujos de desarrollo a medida, API personalizada y un gestor de cuenta dedicado.",
], cta: "Solicitar una demo" });
tarievenContent.es.plansTitle = { eyebrow: "Licencias", title: "Nuestros paquetes" };
tarievenContent.es.featuredBadge = "El más elegido";
tarievenContent.es.plansNote = "Los precios por uso van de 19 € a 99 € por test. Las licencias anuales se basan en el número de empleados o consultores; solicite un presupuesto a medida.";
tarievenContent.es.plans[0].tagline = "Pague por candidato y por informe. Sin costes fijos — compre según necesite."; tarievenContent.es.plans[0].priceNote = "por test"; tarievenContent.es.plans[0].cta = "Solicitar una demo";
tarievenContent.es.plans[1].tagline = "Uso ilimitado de cuestionarios. Licencia anual según el número de empleados o consultores."; tarievenContent.es.plans[1].price = "Bajo solicitud"; tarievenContent.es.plans[1].priceNote = "licencia anual"; tarievenContent.es.plans[1].cta = "Solicitar una demo";
tarievenContent.es.plans[2].tagline = "Uso ilimitado de cuestionarios y de todas las funciones. Licencia anual según el número de empleados o consultores."; tarievenContent.es.plans[2].price = "Bajo solicitud"; tarievenContent.es.plans[2].priceNote = "licencia anual"; tarievenContent.es.plans[2].cta = "Solicitar una demo";
Object.assign(tarievenContent.es.compare, { eyebrow: "Comparar", title: "Comparar paquetes", featBadge: "El más elegido", head: ["Función", "Pago por uso", "Pro"], cta: "Solicitar un presupuesto a medida" });
tarievenContent.es.incl = { eyebrow: "Estándar", title: "Cada paquete incluye", items: ["Cumple el RGPD", "Autenticación en 2 pasos", "Disponible en varios idiomas", "Totalmente en línea", "Biblioteca de competencias", "Perfiles de puesto estándar"] };
Object.assign(tarievenContent.es.onb, { eyebrow: "Implementación", title: "Empezar nunca fue tan fácil", note: "* Coste único.", self: "Nivel de autonomía", det: "Nivel de detalle", fromLabel: "desde" });
tarievenContent.es.onb.tiers[0].price = "Gratis*";
tarievenContent.es.faqSection = { eyebrow: "Preguntas frecuentes", title: "Preguntas frecuentes sobre los precios" };
tarievenContent.es.faqs = [
  { q: "¿Qué tipo de cuestionarios ofrece hrmforce?", a: "hrmforce ofrece una amplia gama de cuestionarios — tests de personalidad, evaluaciones de competencias, feedback 360° y encuestas de satisfacción — diseñados para reforzar sus procesos de RR. HH." },
  { q: "¿Se pueden adaptar los cuestionarios a nuestra empresa?", a: "Sí, ofrecemos soluciones a medida adaptadas a las necesidades y objetivos de su organización." },
  { q: "¿Cómo se integra hrmforce con nuestros sistemas de RR. HH.?", a: "Nuestro software se integra fácilmente con la mayoría de sistemas HRIS, LMS y ERP mediante API o SSO." },
  { q: "¿Qué fiabilidad y validez tienen los cuestionarios?", a: "Nuestros cuestionarios tienen base científica, se prueban para alta fiabilidad y validez, y los revisan psicólogos colegiados NIP." },
  { q: "¿Cómo se garantiza la privacidad y el RGPD?", a: "hrmforce cumple estrictamente el RGPD. Todos los datos se procesan dentro de la UE y se almacenan de forma segura." },
  { q: "¿Cuánto cuesta?", a: "Los costes varían según sus necesidades y escala. Ofrecemos modelos flexibles: pago por uso por evaluación o una licencia anual según el número de empleados." },
];
tarievenContent.es.ctaBand = { title: "¿Tiene otra pregunta?", text: "Nuestro equipo está a su disposición. Solicite un presupuesto o una demo y adaptaremos la opción a su situación.", primary: "Contactar", secondary: "Más sobre hrmforce", hours: "Nuestros asesores están disponibles de lunes a viernes de 08:00 a 18:00." };

tarievenContent.ro = clone(tarievenContent.nl);
Object.assign(tarievenContent.ro.meta, { title: "Prețuri - hrmforce", description: "Descoperiți opțiunile și prewas prețurile hrmforce: propriul portal pe bază de licență sau plată per evaluare." });
tarievenContent.ro.meta.description = "Descoperiți opțiunile și prețurile hrmforce: propriul portal pe bază de licență sau plată per evaluare.";
tarievenContent.ro.crumb = "Prețuri";
Object.assign(tarievenContent.ro.hero, { eyebrow: "Prețuri", title: "Obțineți maximum de la angajați cu software-ul nostru de management al talentelor", intro: "Majoritatea organizațiilor încep cu <strong>propriul portal pe bază de licență</strong>: utilizare nelimitată la un preț anual fix, cu identitatea dvs. și conectat la sistemul HR. Pentru piloturi sau utilizare ocazională, plata per evaluare prin magazin este de asemenea posibilă.", positioning: "Pentru organizații de la 25 la 2.500 de angajați", cta: "Solicitați o demonstrație", roiCta: "Calculați economiile" });
Object.assign(tarievenContent.ro.fit, { eyebrow: "Ce se potrivește?", title: "Găsiți rapid soluția potrivită pentru organizația dvs.", q: "Câți angajați are organizația dvs.?", tiers: ["25–250", "250–1.000", "1.000–2.500"], out: [
  "La <b>25–250 de angajați</b>, o licență anuală cu portal propriu este de obicei cea mai avantajoasă când derulați mai multe proiecte pe an. Nesigur? Începeți cu un pilot.",
  "La <b>250–1.000 de angajați</b>, o <b>licență anuală</b> este aproape întotdeauna avantajoasă: utilizare nelimitată, identitate proprie și conectare la sistemul HR. Solicitați un preț personalizat.",
  "La <b>1.000–2.500 de angajați</b>, alegeți o <b>licență Pro</b> cu fluxuri de dezvoltare personalizate, API dedicat și manager de cont dedicat.",
], cta: "Solicitați o demonstrație" });
tarievenContent.ro.plansTitle = { eyebrow: "Licențe", title: "Pachetele noastre" };
tarievenContent.ro.featuredBadge = "Cel mai ales";
tarievenContent.ro.plansNote = "Prețurile per utilizare variază între 19 € și 99 € per test. Licențele anuale se bazează pe numărul de angajați sau consultanți; solicitați o ofertă personalizată.";
tarievenContent.ro.plans[0].tagline = "Plătiți per candidat și per raport. Fără costuri fixe — cumpărați după nevoie."; tarievenContent.ro.plans[0].priceNote = "per test"; tarievenContent.ro.plans[0].cta = "Solicitați o demonstrație";
tarievenContent.ro.plans[1].tagline = "Utilizare nelimitată a chestionarelor. Licență anuală în funcție de numărul de angajați sau consultanți."; tarievenContent.ro.plans[1].price = "La cerere"; tarievenContent.ro.plans[1].priceNote = "licență anuală"; tarievenContent.ro.plans[1].cta = "Solicitați o demonstrație";
tarievenContent.ro.plans[2].tagline = "Utilizare nelimitată a chestionarelor și a tuturor funcțiilor. Licență anuală în funcție de numărul de angajați sau consultanți."; tarievenContent.ro.plans[2].price = "La cerere"; tarievenContent.ro.plans[2].priceNote = "licență anuală"; tarievenContent.ro.plans[2].cta = "Solicitați o demonstrație";
Object.assign(tarievenContent.ro.compare, { eyebrow: "Comparați", title: "Comparați pachetele", featBadge: "Cel mai ales", head: ["Funcție", "Per utilizare", "Pro"], cta: "Solicitați o ofertă personalizată" });
tarievenContent.ro.incl = { eyebrow: "Standard", title: "Fiecare pachet include", items: ["Conform GDPR", "Autentificare în 2 pași", "Disponibil în mai multe limbi", "Complet online", "Bibliotecă de competențe", "Profiluri de post standard"] };
Object.assign(tarievenContent.ro.onb, { eyebrow: "Implementare", title: "Onboarding-ul nu a fost niciodată mai simplu", note: "* Cost unic.", self: "Nivel de autonomie", det: "Nivel de detaliu", fromLabel: "de la" });
tarievenContent.ro.onb.tiers[0].price = "Gratuit*";
tarievenContent.ro.faqSection = { eyebrow: "Întrebări frecvente", title: "Întrebări frecvente despre prețuri" };
tarievenContent.ro.faqs = [
  { q: "Ce tipuri de chestionare oferă hrmforce?", a: "hrmforce oferă o gamă largă de chestionare — teste de personalitate, evaluări de competențe, feedback 360° și sondaje de satisfacție — concepute pentru a întări procesele HR." },
  { q: "Pot fi adaptate chestionarele la compania noastră?", a: "Da, oferim soluții personalizate adaptate nevoilor și obiectivelor organizației dvs." },
  { q: "Cum se integrează hrmforce cu sistemele noastre HR?", a: "Software-ul nostru se integrează ușor cu majoritatea sistemelor HRIS, LMS și ERP prin API sau SSO." },
  { q: "Cât de fiabile și valide sunt chestionarele?", a: "Chestionarele noastre au bază științifică, sunt testate pentru fiabilitate și validitate ridicate și sunt revizuite de psihologi înregistrați NIP." },
  { q: "Cum sunt asigurate confidențialitatea și GDPR?", a: "hrmforce respectă strict GDPR. Toate datele sunt procesate în UE și stocate în siguranță." },
  { q: "Cât costă?", a: "Costurile variază în funcție de nevoi și amploare. Oferim modele flexibile: plată per evaluare sau licență anuală în funcție de numărul de angajați." },
];
tarievenContent.ro.ctaBand = { title: "Aveți altă întrebare?", text: "Echipa noastră vă stă la dispoziție. Solicitați o ofertă sau o demonstrație și adaptăm soluția la situația dvs.", primary: "Contactați-ne", secondary: "Mai multe despre hrmforce", hours: "Consilierii noștri sunt disponibili de luni până vineri, între 08:00 și 18:00." };
