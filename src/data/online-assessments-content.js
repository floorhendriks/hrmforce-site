// Content voor de online-assessments-pagina per taal, gebruikt door
// src/components/OnlineAssessments.astro.
// NL = leidend. DE/FR/ES/RO eerste vertaalslag — native review aanbevolen.
export const oaContent = {
  nl: {
    meta: { title: "Online assessments | 10.000+ deelnemers, 4,9 sterren", description: "Gevalideerde online assessments voor selectie en ontwikkeling. Beoordeeld met 4,9 sterren door 10.000+ deelnemers. Bekijk het volledige aanbod." },
    crumb: "Online Assessments",
    hero: { eyebrow: "Online assessments", title: "Online assessments voor SELECTIE en ONTWIKKELING", intro: "hrmforce biedt gevalideerde online assessments waarmee HR-professionals en recruiters selectie- en ontwikkelbeslissingen objectiveren. Van persoonlijkheids- en capaciteitentests tot 360-graden feedback, je kiest het instrument dat past bij je vraag en zet het binnen een uur in. Onze assessments meten intelligentie, persoonlijkheid, drijfveren en gedrag, en vertalen dat naar concrete competenties.", cta: "Bekijk alle assessments" },
    why: { eyebrow: "Waarom assessments", title: "Waarom assessments", body: "Objectiveer de selectie en ontwikkeling van sollicitanten en medewerkers. Door de inzet van objectieve meetinstrumenten met een gevalideerde, hoge voorspellende waarde, kun je (grote groepen) sollicitanten vooraf screenen om de kans op succes in de functie te vergroten. Je interviewt alleen potentieel geschikte kandidaten en bespaart hiermee tijd en geld. Een bovengemiddeld presterende medewerker kan tot 40% meer rendement behalen dan een gemiddelde medewerker. Door vragenlijsten in te zetten voor ontwikkeling, stimuleer je de groei van medewerkers, behoudt je talent en laat je de organisatie en resultaten groeien." },
    how: { eyebrow: "Hoe werkt het?", title: "Hoe werkt het?", body: "Binnen één uur zet een van onze implementatie specialisten een online portal voor je klaar in de look &amp; feel van jouw organisatie. Maak gebruik van onze gratis competentietaal van 50 competenties uitgewerkt op 4 niveaus (beginner, operationeel, tactisch en strategisch) en onze benchmarks om sollicitanten en medewerkers te testen. Met je eigen testmanager login kan je direct kandidaten uitnodigen. Kandidaten ontvangen vervolgens een email met link naar de portal en kunnen de vragenlijsten direct invullen. Nadat de vragenlijsten zijn ingevuld, zijn de resultaten conform de laatste AVG richtlijnen binnen 1 minuut in de portal beschikbaar. Betalen doe je achteraf op basis van daadwerkelijk afgeronde vragenlijsten of middels een licentie voor onbeperkt gebruik." },
    clients: { eyebrow: "Onze klanten", title: "Organisaties waarmee wij samenwerken" },
    featuredSection: { eyebrow: "Uitgelichte assessments", title: "Uitgelichte assessments", cta: "Bekijk alle assessments" },
    video: { alt: "Bekijk de video: van talent naar resultaat", eyebrow: "Van talent naar resultaat", title: "Van talent naar resultaat", body: "Als manager van mensen heb je altijd veel te doen. Het assessen van nieuwe en huidige medewerkers, het ontwikkelen van medewerkers en teams, functionerings- en beoordelingsgesprekken voeren én data analyseren om beleid te bepalen &amp; visie te ontwikkelen. De talentmanagement-software van <strong>hrmforce helpt je bij elk onderdeel van het HR-proces</strong>. Ontwikkel je medewerkers, laat je organisatie groeien en behaal het maximale rendement. Hrmforce, van talent naar resultaat.", cta: "Neem contact op" },
    reviews: { eyebrow: "Reviews", title: "hrmforce werkt", body: "Het oordeel van onze tevreden klanten en de 242.000 afgenomen tests spreken voor zich. Vertrouw op onze jarenlange ervaring en het meest complete aanbod van assessments in Nederland." },
    reviewItems: [
      { name: "Eric H.", text: "Goede dienstverlener met uitstekende tools voor talentontwikkeling. Zo help je organisaties vooruit." },
      { name: "Esther M.", text: "Enorm klantvriendelijk en meedenkend. hrmforce heeft mij geholpen talenten en ontwikkelpunten van mijn medewerkers in kaart te brengen, wat heeft gezorgd voor een enorm boost voor het bedrijf." },
      { name: "Juliëtte K.", text: "Leuke gratis kleurentest gedaan !" },
    ],
    ctaBand: { title: "Vraag een gratis demo aan", text: "Wij zijn overtuigd van de kwaliteit van onze assessments en HRM oplossingen. Wil je het graag zelf ervaren? Vul dan het formulier in. Een van onze adviseurs neemt dan (vrijblijvend) contact met je op voor een gratis hrmforce demo.", primary: "Demo aanvragen", secondary: "Bekijk alle assessments" },
    ui: { goalLabel: "Doel:", readmore: "Lees meer" },
    cyclus: ["(Pre)Selectie", "Evalueren", "Ontwikkeling", "Studiekeuze"],
    featured: [
      { slug: "disc-test", title: "DISC test", cats: ["(Pre)Selectie", "Evalueren", "Ontwikkeling"], goal: "Inzicht in gedrag, communicatie en samenwerking, zodat je weet hoe iemand het beste presteert, samenwerkt en aangestuurd wil worden." },
      { slug: "360-graden-feedback", title: "360 Graden Feedback", cats: ["Evalueren", "Ontwikkeling"], goal: "Feedback ontvangen m.b.t. vaardigheden, capaciteiten, persoonlijkheid en motivatie." },
      { slug: "big-five", title: "Persoonlijkheidstest: Big Five", cats: ["(Pre)Selectie", "Evalueren", "Ontwikkeling"], goal: "Persoonlijkheidskenmerken omzetten naar vaardigheden en zo ontdekken waar iemand kan groeien." },
      { slug: "drijfverentest", title: "Drijfverentest", cats: ["(Pre)Selectie", "Ontwikkeling"], goal: "Duidelijk helpen begrijpen wat motivatie verhoogt en verlaagt." },
      { slug: "ability-scan", title: "Ability Scan | Cognitieve capaciteitentest", cats: ["(Pre)Selectie", "Ontwikkeling"], goal: "Hoe snel kan je problemen begrijpen, een mening vormen en nieuwe dingen aanleren. Daaruit gemiddelde niveau opmaken: mbo, hbo of Master." },
      { slug: "ontwikkelassessment", title: "Ontwikkelassessment", cats: ["Ontwikkeling"], goal: "Valide overzicht van welke competenties ontwikkeling behoeven en welke al goed gaan." },
      { slug: "studiekeuzetest", title: "Studiekeuzetest", cats: ["Ontwikkeling", "Studiekeuze"], goal: "Op basis van interesses scholieren, studenten en werknemers inzicht geven in de best passende opleidingen." },
      { slug: "lencioni-teamdynamiek", title: "Lencioni Teamdynamiek", cats: ["Ontwikkeling"], goal: "De Lencioni vragenlijst is ontworpen om teams te helpen de teamdynamiek te begrijpen en te evalueren door de aanwezigheid en impact van de vijf disfuncties in teamwork te meten." },
      { slug: "pulse-survey", title: "Pulse Survey", cats: ["(Pre)Selectie", "Ontwikkeling"], goal: "De mogelijkheid bieden aan organisaties om met behulp van onze standaard vragenlijsten en vragendatabase zelf vragenlijsten te ontwerpen en deze te versturen naar sollicitanten en medewerkers." },
      { slug: "mentale-veerkracht-scan", title: "Mentale Veerkracht Scan", cats: ["(Pre)Selectie", "Ontwikkeling"], goal: "Inzicht verkrijgen in de mate waarin men effectief blijft werken bij hoge druk en/of tegenslag" },
    ],
  },
};

const clone = (o) => JSON.parse(JSON.stringify(o));

// Vult featured-kaarten met vertaalde cyclus-tags en teksten.
function applyFeatured(o, cyc, rows) {
  o.cyclus = cyc;
  const map = { "(Pre)Selectie": cyc[0], "Evalueren": cyc[1], "Ontwikkeling": cyc[2], "Studiekeuze": cyc[3] };
  o.featured.forEach((it, i) => {
    it.cats = it.cats.map((c) => map[c] || c);
    it.title = rows[i][0];
    it.goal = rows[i][1];
  });
}

oaContent.en = clone(oaContent.nl);
oaContent.en.meta = { title: "Online assessments | 10,000+ participants, 4.9 stars", description: "Validated online assessments for selection and development. Rated 4.9 stars by 10,000+ participants. View the full range." };
oaContent.en.crumb = "Online Assessments";
oaContent.en.hero = { eyebrow: "Online assessments", title: "Online assessments for SELECTION and DEVELOPMENT", intro: "hrmforce offers validated online assessments that let HR professionals and recruiters make selection and development decisions objective. From personality and ability tests to 360-degree feedback, you choose the instrument that fits your question and deploy it within an hour. Our assessments measure intelligence, personality, drivers and behaviour, and translate this into concrete competencies.", cta: "View all assessments" };
oaContent.en.why = { eyebrow: "Why assessments", title: "Why assessments", body: "Make the selection and development of applicants and employees objective. By using objective measuring instruments with a validated, high predictive value, you can pre-screen (large groups of) applicants to increase the chance of success in the role. You only interview potentially suitable candidates, saving time and money. An above-average performing employee can achieve up to 40% more return than an average employee. By using questionnaires for development, you stimulate employee growth, retain talent and let your organisation and results grow." };
oaContent.en.how = { eyebrow: "How does it work?", title: "How does it work?", body: "Within one hour, one of our implementation specialists sets up an online portal for you in the look &amp; feel of your organisation. Use our free competency language of 50 competencies worked out at 4 levels (beginner, operational, tactical and strategic) and our benchmarks to test applicants and employees. With your own test manager login you can invite candidates straight away. Candidates then receive an email with a link to the portal and can complete the questionnaires immediately. Once the questionnaires are completed, the results are available in the portal within 1 minute, in line with the latest GDPR guidelines. You pay afterwards based on questionnaires actually completed, or via a licence for unlimited use." };
oaContent.en.clients = { eyebrow: "Our clients", title: "Organisations we work with" };
oaContent.en.featuredSection = { eyebrow: "Featured assessments", title: "Featured assessments", cta: "View all assessments" };
oaContent.en.video = { alt: "Watch the video: from talent to results", eyebrow: "From talent to results", title: "From talent to results", body: "As a manager of people, you always have a lot to do. Assessing new and current employees, developing employees and teams, holding performance and appraisal interviews and analysing data to set policy &amp; develop vision. hrmforce's talent management software <strong>helps you with every part of the HR process</strong>. Develop your employees, let your organisation grow and achieve maximum return. Hrmforce, from talent to results.", cta: "Get in touch" };
oaContent.en.reviews = { eyebrow: "Reviews", title: "hrmforce works", body: "The verdict of our satisfied customers and the 242,000 tests taken speak for themselves. Rely on our years of experience and the most complete range of assessments in the Netherlands." };
oaContent.en.reviewItems = [
  { name: "Eric H.", text: "A good service provider with excellent tools for talent development. That's how you move organisations forward." },
  { name: "Esther M.", text: "Extremely customer-friendly and proactive. hrmforce helped me map out the talents and development points of my employees, which gave the company a huge boost." },
  { name: "Juliëtte K.", text: "Did a nice free colour test!" },
];
oaContent.en.ctaBand = { title: "Request a free demo", text: "We are convinced of the quality of our assessments and HRM solutions. Would you like to experience it yourself? Then fill in the form. One of our advisors will contact you (without obligation) for a free hrmforce demo.", primary: "Request a demo", secondary: "View all assessments" };
oaContent.en.ui = { goalLabel: "Goal:", readmore: "Read more" };
applyFeatured(oaContent.en, ["(Pre)Selection", "Evaluation", "Development", "Study choice"], [
  ["DISC test", "Insight into behaviour, communication and collaboration, so you know how someone performs, collaborates and wants to be managed best."],
  ["360-Degree Feedback", "Receive feedback on skills, abilities, personality and motivation."],
  ["Personality test: Big Five", "Translate personality traits into skills and discover where someone can grow."],
  ["Drivers test", "Clearly help understand what raises and lowers motivation."],
  ["Ability Scan | Cognitive ability test", "How quickly you can understand problems, form an opinion and learn new things. From this an average level is derived: vocational, bachelor or Master."],
  ["Development assessment", "A valid overview of which competencies need development and which are already strong."],
  ["Study choice test", "Based on interests, give pupils, students and employees insight into the best-fitting study programmes."],
  ["Lencioni Team Dynamics", "The Lencioni questionnaire is designed to help teams understand and evaluate team dynamics by measuring the presence and impact of the five dysfunctions in teamwork."],
  ["Pulse Survey", "Enable organisations to design their own questionnaires using our standard questionnaires and question database, and send them to applicants and employees."],
  ["Mental Resilience Scan", "Gain insight into the extent to which someone keeps working effectively under high pressure and/or setbacks."],
]);

oaContent.de = clone(oaContent.nl);
oaContent.de.meta = { title: "Online-Assessments | 10.000+ Teilnehmer, 4,9 Sterne", description: "Validierte Online-Assessments für Auswahl und Entwicklung. Mit 4,9 Sternen von über 10.000 Teilnehmern bewertet. Sehen Sie das gesamte Angebot." };
oaContent.de.crumb = "Online-Assessments";
oaContent.de.hero = { eyebrow: "Online-Assessments", title: "Online-Assessments für AUSWAHL und ENTWICKLUNG", intro: "hrmforce bietet validierte Online-Assessments, mit denen HR-Fachleute und Recruiter Auswahl- und Entwicklungsentscheidungen objektivieren. Von Persönlichkeits- und Fähigkeitstests bis hin zum 360-Grad-Feedback wählen Sie das Instrument, das zu Ihrer Frage passt, und setzen es innerhalb einer Stunde ein. Unsere Assessments messen Intelligenz, Persönlichkeit, Antriebe und Verhalten und übersetzen dies in konkrete Kompetenzen.", cta: "Alle Assessments ansehen" };
oaContent.de.why = { eyebrow: "Warum Assessments", title: "Warum Assessments", body: "Objektivieren Sie die Auswahl und Entwicklung von Bewerbern und Mitarbeitenden. Durch den Einsatz objektiver Messinstrumente mit einem validierten, hohen Vorhersagewert können Sie (große Gruppen von) Bewerbern vorab screenen, um die Erfolgschancen in der Funktion zu erhöhen. Sie führen nur mit potenziell geeigneten Kandidaten Gespräche und sparen so Zeit und Geld. Ein überdurchschnittlich leistungsfähiger Mitarbeiter kann bis zu 40 % mehr Ertrag erzielen als ein durchschnittlicher Mitarbeiter. Durch den Einsatz von Fragebögen für die Entwicklung fördern Sie das Wachstum der Mitarbeitenden, halten Talente und lassen Ihre Organisation und Ergebnisse wachsen." };
oaContent.de.how = { eyebrow: "Wie funktioniert es?", title: "Wie funktioniert es?", body: "Innerhalb einer Stunde richtet einer unserer Implementierungsspezialisten ein Online-Portal im Look &amp; Feel Ihrer Organisation für Sie ein. Nutzen Sie unsere kostenlose Kompetenzsprache mit 50 Kompetenzen auf 4 Niveaus (Anfänger, operativ, taktisch und strategisch) sowie unsere Benchmarks, um Bewerber und Mitarbeitende zu testen. Mit Ihrem eigenen Testmanager-Login können Sie direkt Kandidaten einladen. Die Kandidaten erhalten anschließend eine E-Mail mit einem Link zum Portal und können die Fragebögen sofort ausfüllen. Nach dem Ausfüllen sind die Ergebnisse gemäß den neuesten DSGVO-Richtlinien innerhalb von 1 Minute im Portal verfügbar. Bezahlt wird nachträglich auf Basis der tatsächlich abgeschlossenen Fragebögen oder über eine Lizenz für unbegrenzte Nutzung." };
oaContent.de.clients = { eyebrow: "Unsere Kunden", title: "Organisationen, mit denen wir zusammenarbeiten" };
oaContent.de.featuredSection = { eyebrow: "Ausgewählte Assessments", title: "Ausgewählte Assessments", cta: "Alle Assessments ansehen" };
oaContent.de.video = { alt: "Video ansehen: vom Talent zum Ergebnis", eyebrow: "Vom Talent zum Ergebnis", title: "Vom Talent zum Ergebnis", body: "Als Führungskraft von Menschen haben Sie immer viel zu tun. Das Assessen neuer und aktueller Mitarbeitender, die Entwicklung von Mitarbeitenden und Teams, das Führen von Beurteilungs- und Zielgesprächen und das Analysieren von Daten, um Strategien &amp; eine Vision zu entwickeln. Die Talentmanagement-Software von <strong>hrmforce unterstützt Sie bei jedem Teil des HR-Prozesses</strong>. Entwickeln Sie Ihre Mitarbeitenden, lassen Sie Ihre Organisation wachsen und erzielen Sie den maximalen Ertrag. Hrmforce, vom Talent zum Ergebnis.", cta: "Kontakt aufnehmen" };
oaContent.de.reviews = { eyebrow: "Bewertungen", title: "hrmforce wirkt", body: "Das Urteil unserer zufriedenen Kunden und die 242.000 durchgeführten Tests sprechen für sich. Verlassen Sie sich auf unsere langjährige Erfahrung und das umfassendste Assessment-Angebot in den Niederlanden." };
oaContent.de.reviewItems = [
  { name: "Eric H.", text: "Ein guter Dienstleister mit exzellenten Tools für die Talententwicklung. So bringt man Organisationen voran." },
  { name: "Esther M.", text: "Äußerst kundenfreundlich und mitdenkend. hrmforce hat mir geholfen, die Talente und Entwicklungsfelder meiner Mitarbeitenden zu erfassen, was dem Unternehmen einen enormen Schub gegeben hat." },
  { name: "Juliëtte K.", text: "Habe einen netten kostenlosen Farbtest gemacht!" },
];
oaContent.de.ctaBand = { title: "Fordern Sie eine kostenlose Demo an", text: "Wir sind von der Qualität unserer Assessments und HRM-Lösungen überzeugt. Möchten Sie es selbst erleben? Dann füllen Sie das Formular aus. Einer unserer Berater setzt sich dann (unverbindlich) für eine kostenlose hrmforce-Demo mit Ihnen in Verbindung.", primary: "Demo anfragen", secondary: "Alle Assessments ansehen" };
oaContent.de.ui = { goalLabel: "Ziel:", readmore: "Mehr erfahren" };
applyFeatured(oaContent.de, ["(Vor)Auswahl", "Bewertung", "Entwicklung", "Studienwahl"], [
  ["DISC-Test", "Einblick in Verhalten, Kommunikation und Zusammenarbeit, damit Sie wissen, wie jemand am besten arbeitet, zusammenarbeitet und geführt werden möchte."],
  ["360-Grad-Feedback", "Feedback zu Fähigkeiten, Kompetenzen, Persönlichkeit und Motivation erhalten."],
  ["Persönlichkeitstest: Big Five", "Persönlichkeitsmerkmale in Fähigkeiten übersetzen und so entdecken, wo jemand wachsen kann."],
  ["Motivationstest", "Klar verständlich machen, was die Motivation erhöht und senkt."],
  ["Ability Scan | Kognitiver Fähigkeitstest", "Wie schnell jemand Probleme versteht, sich eine Meinung bildet und Neues lernt. Daraus wird ein durchschnittliches Niveau abgeleitet: Berufsausbildung, Bachelor oder Master."],
  ["Entwicklungsassessment", "Ein valider Überblick, welche Kompetenzen Entwicklung benötigen und welche bereits stark sind."],
  ["Studienwahltest", "Auf Basis der Interessen Schülern, Studierenden und Mitarbeitenden Einblick in die am besten passenden Ausbildungen geben."],
  ["Lencioni Teamdynamik", "Der Lencioni-Fragebogen wurde entwickelt, um Teams zu helfen, die Teamdynamik zu verstehen und zu bewerten, indem das Vorhandensein und die Wirkung der fünf Dysfunktionen in der Teamarbeit gemessen werden."],
  ["Pulse Survey", "Organisationen die Möglichkeit bieten, mithilfe unserer Standardfragebögen und Fragendatenbank eigene Fragebögen zu erstellen und an Bewerber und Mitarbeitende zu senden."],
  ["Scan der mentalen Belastbarkeit", "Einblick gewinnen, inwieweit jemand unter hohem Druck und/oder bei Rückschlägen weiterhin effektiv arbeitet."],
]);

oaContent.fr = clone(oaContent.nl);
oaContent.fr.meta = { title: "Assessments en ligne | 10 000+ participants, 4,9 étoiles", description: "Assessments en ligne validés pour la sélection et le développement. Notés 4,9 étoiles par plus de 10 000 participants. Découvrez toute l'offre." };
oaContent.fr.crumb = "Assessments en ligne";
oaContent.fr.hero = { eyebrow: "Assessments en ligne", title: "Assessments en ligne pour la SÉLECTION et le DÉVELOPPEMENT", intro: "hrmforce propose des assessments en ligne validés qui permettent aux professionnels RH et aux recruteurs d'objectiver les décisions de sélection et de développement. Des tests de personnalité et d'aptitudes au feedback 360 degrés, vous choisissez l'instrument adapté à votre besoin et le déployez en une heure. Nos assessments mesurent l'intelligence, la personnalité, les motivations et le comportement, et les traduisent en compétences concrètes.", cta: "Voir tous les assessments" };
oaContent.fr.why = { eyebrow: "Pourquoi des assessments", title: "Pourquoi des assessments", body: "Objectivez la sélection et le développement des candidats et des employés. En utilisant des instruments de mesure objectifs à haute valeur prédictive validée, vous pouvez présélectionner de (grands groupes de) candidats afin d'augmenter les chances de réussite dans le poste. Vous n'interviewez que des candidats potentiellement adaptés, ce qui vous fait gagner du temps et de l'argent. Un employé performant au-dessus de la moyenne peut obtenir jusqu'à 40 % de rendement en plus qu'un employé moyen. En utilisant des questionnaires pour le développement, vous stimulez la croissance des employés, fidélisez les talents et faites croître votre organisation et vos résultats." };
oaContent.fr.how = { eyebrow: "Comment ça marche ?", title: "Comment ça marche ?", body: "En une heure, l'un de nos spécialistes de la mise en œuvre configure pour vous un portail en ligne aux couleurs de votre organisation. Utilisez notre langage de compétences gratuit de 50 compétences déclinées sur 4 niveaux (débutant, opérationnel, tactique et stratégique) et nos benchmarks pour tester candidats et employés. Avec votre propre identifiant de gestionnaire de tests, vous pouvez inviter immédiatement des candidats. Les candidats reçoivent ensuite un e-mail contenant un lien vers le portail et peuvent remplir les questionnaires directement. Une fois les questionnaires remplis, les résultats sont disponibles dans le portail en 1 minute, conformément aux dernières directives RGPD. Le paiement s'effectue a posteriori sur la base des questionnaires réellement complétés ou via une licence d'utilisation illimitée." };
oaContent.fr.clients = { eyebrow: "Nos clients", title: "Les organisations avec lesquelles nous travaillons" };
oaContent.fr.featuredSection = { eyebrow: "Assessments en vedette", title: "Assessments en vedette", cta: "Voir tous les assessments" };
oaContent.fr.video = { alt: "Regarder la vidéo : du talent au résultat", eyebrow: "Du talent au résultat", title: "Du talent au résultat", body: "En tant que manager d'équipes, vous avez toujours beaucoup à faire. Évaluer les nouveaux et actuels collaborateurs, développer les collaborateurs et les équipes, mener des entretiens d'évaluation et analyser les données pour définir la politique &amp; développer la vision. Le logiciel de gestion des talents de <strong>hrmforce vous accompagne à chaque étape du processus RH</strong>. Développez vos collaborateurs, faites croître votre organisation et atteignez un rendement maximal. Hrmforce, du talent au résultat.", cta: "Nous contacter" };
oaContent.fr.reviews = { eyebrow: "Avis", title: "hrmforce fonctionne", body: "L'avis de nos clients satisfaits et les 242 000 tests réalisés parlent d'eux-mêmes. Fiez-vous à nos années d'expérience et à l'offre d'assessments la plus complète des Pays-Bas." };
oaContent.fr.reviewItems = [
  { name: "Eric H.", text: "Un bon prestataire avec d'excellents outils pour le développement des talents. C'est ainsi que l'on fait progresser les organisations." },
  { name: "Esther M.", text: "Extrêmement orienté client et force de proposition. hrmforce m'a aidé à cartographier les talents et les axes de développement de mes collaborateurs, ce qui a donné un énorme coup de pouce à l'entreprise." },
  { name: "Juliëtte K.", text: "J'ai fait un chouette test de couleurs gratuit !" },
];
oaContent.fr.ctaBand = { title: "Demandez une démo gratuite", text: "Nous sommes convaincus de la qualité de nos assessments et de nos solutions RH. Vous souhaitez en faire l'expérience vous-même ? Remplissez alors le formulaire. L'un de nos conseillers vous contactera (sans engagement) pour une démo hrmforce gratuite.", primary: "Demander une démo", secondary: "Voir tous les assessments" };
oaContent.fr.ui = { goalLabel: "Objectif :", readmore: "En savoir plus" };
applyFeatured(oaContent.fr, ["(Pré)Sélection", "Évaluation", "Développement", "Orientation"], [
  ["Test DISC", "Comprendre le comportement, la communication et la collaboration, afin de savoir comment une personne performe, collabore et souhaite être managée."],
  ["Feedback 360 degrés", "Recevoir un feedback sur les compétences, les aptitudes, la personnalité et la motivation."],
  ["Test de personnalité : Big Five", "Traduire les traits de personnalité en compétences et découvrir où une personne peut progresser."],
  ["Test des motivations", "Aider à comprendre clairement ce qui augmente et diminue la motivation."],
  ["Ability Scan | Test d'aptitudes cognitives", "À quelle vitesse une personne comprend les problèmes, se forge une opinion et apprend. On en déduit un niveau moyen : professionnel, licence ou master."],
  ["Assessment de développement", "Un aperçu valide des compétences à développer et de celles déjà solides."],
  ["Test d'orientation", "Sur la base des intérêts, donner aux élèves, étudiants et employés un aperçu des formations les plus adaptées."],
  ["Dynamique d'équipe Lencioni", "Le questionnaire Lencioni est conçu pour aider les équipes à comprendre et évaluer la dynamique d'équipe en mesurant la présence et l'impact des cinq dysfonctionnements du travail en équipe."],
  ["Pulse Survey", "Permettre aux organisations de concevoir leurs propres questionnaires à l'aide de nos questionnaires standard et de notre base de questions, et de les envoyer aux candidats et aux employés."],
  ["Scan de résilience mentale", "Comprendre dans quelle mesure une personne reste efficace sous forte pression et/ou en cas de difficultés."],
]);

oaContent.es = clone(oaContent.nl);
oaContent.es.meta = { title: "Assessments en línea | 10.000+ participantes, 4,9 estrellas", description: "Assessments en línea validados para selección y desarrollo. Valorados con 4,9 estrellas por más de 10.000 participantes. Vea toda la oferta." };
oaContent.es.crumb = "Assessments en línea";
oaContent.es.hero = { eyebrow: "Assessments en línea", title: "Assessments en línea para la SELECCIÓN y el DESARROLLO", intro: "hrmforce ofrece assessments en línea validados que permiten a los profesionales de RR. HH. y a los reclutadores objetivar las decisiones de selección y desarrollo. Desde tests de personalidad y capacidad hasta el feedback de 360 grados, usted elige el instrumento que se ajusta a su necesidad y lo pone en marcha en una hora. Nuestros assessments miden la inteligencia, la personalidad, las motivaciones y el comportamiento, y los traducen en competencias concretas.", cta: "Ver todos los assessments" };
oaContent.es.why = { eyebrow: "Por qué assessments", title: "Por qué assessments", body: "Objetive la selección y el desarrollo de candidatos y empleados. Mediante el uso de instrumentos de medición objetivos con un valor predictivo validado y elevado, puede preseleccionar a (grandes grupos de) candidatos para aumentar las probabilidades de éxito en el puesto. Solo entrevista a candidatos potencialmente adecuados, ahorrando tiempo y dinero. Un empleado con un rendimiento superior a la media puede lograr hasta un 40 % más de rentabilidad que un empleado medio. Al utilizar cuestionarios para el desarrollo, estimula el crecimiento de los empleados, retiene el talento y hace crecer su organización y sus resultados." };
oaContent.es.how = { eyebrow: "¿Cómo funciona?", title: "¿Cómo funciona?", body: "En una hora, uno de nuestros especialistas de implementación le prepara un portal en línea con la imagen de su organización. Utilice nuestro lenguaje de competencias gratuito de 50 competencias desarrolladas en 4 niveles (principiante, operativo, táctico y estratégico) y nuestros benchmarks para evaluar a candidatos y empleados. Con su propio acceso de gestor de pruebas puede invitar a candidatos de inmediato. A continuación, los candidatos reciben un correo con un enlace al portal y pueden completar los cuestionarios directamente. Una vez completados, los resultados están disponibles en el portal en 1 minuto, conforme a las últimas directrices del RGPD. El pago se realiza a posteriori en función de los cuestionarios realmente completados o mediante una licencia de uso ilimitado." };
oaContent.es.clients = { eyebrow: "Nuestros clientes", title: "Organizaciones con las que colaboramos" };
oaContent.es.featuredSection = { eyebrow: "Assessments destacados", title: "Assessments destacados", cta: "Ver todos los assessments" };
oaContent.es.video = { alt: "Ver el vídeo: del talento al resultado", eyebrow: "Del talento al resultado", title: "Del talento al resultado", body: "Como responsable de personas, siempre tiene mucho que hacer. Evaluar a los empleados nuevos y actuales, desarrollar a empleados y equipos, mantener entrevistas de desempeño y evaluación y analizar datos para definir políticas &amp; desarrollar una visión. El software de gestión del talento de <strong>hrmforce le ayuda en cada parte del proceso de RR. HH.</strong>. Desarrolle a sus empleados, haga crecer su organización y logre la máxima rentabilidad. Hrmforce, del talento al resultado.", cta: "Póngase en contacto" };
oaContent.es.reviews = { eyebrow: "Reseñas", title: "hrmforce funciona", body: "El veredicto de nuestros clientes satisfechos y los 242.000 tests realizados hablan por sí solos. Confíe en nuestros años de experiencia y en la oferta de assessments más completa de los Países Bajos." };
oaContent.es.reviewItems = [
  { name: "Eric H.", text: "Un buen proveedor de servicios con excelentes herramientas para el desarrollo del talento. Así se hace avanzar a las organizaciones." },
  { name: "Esther M.", text: "Sumamente orientado al cliente y proactivo. hrmforce me ayudó a mapear los talentos y los puntos de desarrollo de mis empleados, lo que supuso un enorme impulso para la empresa." },
  { name: "Juliëtte K.", text: "¡Hice una simpática prueba de colores gratuita!" },
];
oaContent.es.ctaBand = { title: "Solicite una demo gratuita", text: "Estamos convencidos de la calidad de nuestros assessments y soluciones de RR. HH. ¿Le gustaría experimentarlo usted mismo? Rellene entonces el formulario. Uno de nuestros asesores se pondrá en contacto con usted (sin compromiso) para una demo gratuita de hrmforce.", primary: "Solicitar una demo", secondary: "Ver todos los assessments" };
oaContent.es.ui = { goalLabel: "Objetivo:", readmore: "Leer más" };
applyFeatured(oaContent.es, ["(Pre)Selección", "Evaluación", "Desarrollo", "Orientación"], [
  ["Test DISC", "Comprender el comportamiento, la comunicación y la colaboración, para saber cómo rinde, colabora y quiere ser dirigida una persona."],
  ["Feedback 360 grados", "Recibir feedback sobre habilidades, capacidades, personalidad y motivación."],
  ["Test de personalidad: Big Five", "Traducir los rasgos de personalidad en habilidades y descubrir dónde puede crecer una persona."],
  ["Test de motivaciones", "Ayudar a comprender claramente qué aumenta y qué reduce la motivación."],
  ["Ability Scan | Test de capacidad cognitiva", "Con qué rapidez una persona comprende problemas, se forma una opinión y aprende. De ahí se deduce un nivel medio: formación profesional, grado o máster."],
  ["Assessment de desarrollo", "Una visión válida de qué competencias necesitan desarrollo y cuáles ya son sólidas."],
  ["Test de orientación de estudios", "A partir de los intereses, dar a alumnos, estudiantes y empleados una visión de las formaciones que mejor se adaptan."],
  ["Dinámica de equipo Lencioni", "El cuestionario Lencioni está diseñado para ayudar a los equipos a comprender y evaluar la dinámica de equipo midiendo la presencia y el impacto de las cinco disfunciones del trabajo en equipo."],
  ["Pulse Survey", "Permitir a las organizaciones diseñar sus propios cuestionarios con nuestros cuestionarios estándar y base de preguntas, y enviarlos a candidatos y empleados."],
  ["Escáner de resiliencia mental", "Comprender en qué medida una persona sigue trabajando de forma eficaz bajo alta presión y/o adversidad."],
]);

oaContent.ro = clone(oaContent.nl);
oaContent.ro.meta = { title: "Assessment-e online | 10.000+ participanți, 4,9 stele", description: "Assessment-e online validate pentru selecție și dezvoltare. Evaluate cu 4,9 stele de peste 10.000 de participanți. Vedeți întreaga ofertă." };
oaContent.ro.crumb = "Assessment-e online";
oaContent.ro.hero = { eyebrow: "Assessment-e online", title: "Assessment-e online pentru SELECȚIE și DEZVOLTARE", intro: "hrmforce oferă assessment-e online validate care permit profesioniștilor HR și recrutorilor să obiectiveze deciziile de selecție și dezvoltare. De la teste de personalitate și capacitate până la feedback 360 de grade, alegeți instrumentul potrivit nevoii dvs. și îl puneți în funcțiune în decurs de o oră. Assessment-ele noastre măsoară inteligența, personalitatea, motivațiile și comportamentul și le traduc în competențe concrete.", cta: "Vedeți toate assessment-ele" };
oaContent.ro.why = { eyebrow: "De ce assessment-e", title: "De ce assessment-e", body: "Obiectivați selecția și dezvoltarea candidaților și angajaților. Prin utilizarea unor instrumente de măsurare obiective, cu o valoare predictivă ridicată și validată, puteți preselecta (grupuri mari de) candidați pentru a crește șansele de succes în funcție. Intervievați doar candidați potențial potriviți, economisind astfel timp și bani. Un angajat cu performanțe peste medie poate obține cu până la 40 % mai mult randament decât un angajat mediu. Prin utilizarea chestionarelor pentru dezvoltare, stimulați creșterea angajaților, păstrați talentele și faceți organizația și rezultatele să crească." };
oaContent.ro.how = { eyebrow: "Cum funcționează?", title: "Cum funcționează?", body: "În decurs de o oră, unul dintre specialiștii noștri de implementare vă pregătește un portal online în identitatea vizuală a organizației dvs. Folosiți limbajul nostru gratuit de competențe, cu 50 de competențe dezvoltate pe 4 niveluri (începător, operațional, tactic și strategic) și benchmark-urile noastre pentru a testa candidați și angajați. Cu propriul cont de test manager puteți invita imediat candidați. Candidații primesc apoi un e-mail cu un link către portal și pot completa chestionarele imediat. După completare, rezultatele sunt disponibile în portal în 1 minut, conform celor mai recente directive GDPR. Plata se face ulterior, pe baza chestionarelor efectiv finalizate, sau printr-o licență de utilizare nelimitată." };
oaContent.ro.clients = { eyebrow: "Clienții noștri", title: "Organizații cu care colaborăm" };
oaContent.ro.featuredSection = { eyebrow: "Assessment-e recomandate", title: "Assessment-e recomandate", cta: "Vedeți toate assessment-ele" };
oaContent.ro.video = { alt: "Vizionați videoclipul: de la talent la rezultat", eyebrow: "De la talent la rezultat", title: "De la talent la rezultat", body: "În calitate de manager de oameni, aveți întotdeauna multe de făcut. Evaluarea angajaților noi și actuali, dezvoltarea angajaților și echipelor, purtarea discuțiilor de performanță și evaluare și analiza datelor pentru a stabili politici &amp; a dezvolta o viziune. Software-ul de management al talentelor de la <strong>hrmforce vă ajută în fiecare parte a procesului HR</strong>. Dezvoltați-vă angajații, faceți organizația să crească și obțineți randamentul maxim. Hrmforce, de la talent la rezultat.", cta: "Contactați-ne" };
oaContent.ro.reviews = { eyebrow: "Recenzii", title: "hrmforce funcționează", body: "Opinia clienților noștri mulțumiți și cele 242.000 de teste efectuate vorbesc de la sine. Bazați-vă pe experiența noastră de mulți ani și pe cea mai completă ofertă de assessment-e din Țările de Jos." };
oaContent.ro.reviewItems = [
  { name: "Eric H.", text: "Un furnizor de servicii bun, cu instrumente excelente pentru dezvoltarea talentelor. Așa faci organizațiile să progreseze." },
  { name: "Esther M.", text: "Extrem de orientat spre client și proactiv. hrmforce m-a ajutat să identific talentele și punctele de dezvoltare ale angajaților mei, ceea ce a adus un impuls enorm companiei." },
  { name: "Juliëtte K.", text: "Am făcut un test de culori gratuit și plăcut!" },
];
oaContent.ro.ctaBand = { title: "Solicitați o demonstrație gratuită", text: "Suntem convinși de calitatea assessment-elor și a soluțiilor noastre HRM. Doriți să experimentați personal? Completați formularul. Unul dintre consilierii noștri vă va contacta (fără obligații) pentru o demonstrație hrmforce gratuită.", primary: "Solicitați o demonstrație", secondary: "Vedeți toate assessment-ele" };
oaContent.ro.ui = { goalLabel: "Obiectiv:", readmore: "Aflați mai multe" };
applyFeatured(oaContent.ro, ["(Pre)Selecție", "Evaluare", "Dezvoltare", "Orientare"], [
  ["Test DISC", "Înțelegerea comportamentului, comunicării și colaborării, astfel încât să știți cum performează, colaborează și dorește să fie coordonată o persoană."],
  ["Feedback 360 de grade", "Primirea de feedback privind abilitățile, capacitățile, personalitatea și motivația."],
  ["Test de personalitate: Big Five", "Transformarea trăsăturilor de personalitate în abilități și descoperirea zonelor în care o persoană poate crește."],
  ["Test al motivațiilor", "Ajutor pentru a înțelege clar ce crește și ce scade motivația."],
  ["Ability Scan | Test de capacitate cognitivă", "Cât de repede înțelege o persoană problemele, își formează o opinie și învață. De aici se deduce un nivel mediu: profesional, licență sau master."],
  ["Assessment de dezvoltare", "O imagine validă asupra competențelor care necesită dezvoltare și a celor deja solide."],
  ["Test de orientare în studii", "Pe baza intereselor, oferă elevilor, studenților și angajaților o imagine asupra celor mai potrivite programe de studiu."],
  ["Dinamica echipei Lencioni", "Chestionarul Lencioni este conceput pentru a ajuta echipele să înțeleagă și să evalueze dinamica echipei prin măsurarea prezenței și impactului celor cinci disfuncții ale muncii în echipă."],
  ["Pulse Survey", "Oferă organizațiilor posibilitatea de a-și crea propriile chestionare folosind chestionarele noastre standard și baza de întrebări, și de a le trimite candidaților și angajaților."],
  ["Scanare a rezilienței mentale", "Înțelegerea măsurii în care o persoană rămâne eficientă sub presiune ridicată și/sau în fața dificultăților."],
]);
