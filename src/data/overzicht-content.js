// Content voor het assessment-overzicht per taal, gebruikt door
// src/components/AssessmentOverzicht.astro.
// NL = leidend. DE/FR/ES/RO eerste vertaalslag — native review aanbevolen.
// Segment- en uitgever-labels komen uit assessment-shop.js en blijven Nederlands.
export const ovContent = {
  nl: {
    meta: { title: "Assessment Overzicht - hrmforce", description: "Bekijk het assessment overzicht met meer dan 35 online assessments. Filter op HR-cyclus, segment en uitgever en vind direct het juiste instrument." },
    crumb: "Assessment overzicht",
    hero: { eyebrow: "online assessments", title: "Overzicht", intro: "Met hrmforce heeft u de beschikking over een groot aantal <strong>online assessments</strong>. Krijg inzicht in de kennis, capaciteiten, persoonlijkheid, tevredenheid en motivatie van uw personeel. Er zijn tests voor iedere HR fase: (pre)selectie, ontwikkeling, functioneren en beoordelen.", cta: "Gratis demo aanvragen" },
    ui: { search: "Zoek een assessment…", searchAria: "Zoek een assessment", allPhases: "Alle fases", segmentLabel: "Segment", allSegments: "Alle segmenten", uitgeverLabel: "Uitgever", allUitgevers: "Alle uitgevers", reset: "Wissen", countMid: " van ", countSuffix: " assessments", noResult: "Geen assessments gevonden.", clearFilters: "Wis de filters", goalLabel: "Doel:", readmore: "Lees meer", inShop: "In de shop" },
    cyclus: ["(Pre)Selectie", "Evalueren", "Ontwikkeling", "Studiekeuze"],
    items: [
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
      { slug: "levensloop-scan", title: "Levensloop Scan", cats: ["Ontwikkeling"], goal: "Inzicht krijgen in de levensloop van een kandidaat om daarmee aanknopingspunten voor coaching en ontwikkeling bloot te leggen." },
      { slug: "lean-scan", title: "Lean Scan", cats: ["Evalueren", "Ontwikkeling"], goal: "Inzicht verkrijgen in de gap tussen huidige en ideale situatie om zo behoefte en noodzaak van Lean management aan te tonen." },
      { slug: "interesse-scan", title: "Interesse test", cats: ["Ontwikkeling"], goal: "Inzicht verkrijgen in welke sectoren een scholier, student of medewerker de meest interesse heeft om deze resultaten te koppelen aan relevante opleidingen en beroepen" },
      { slug: "duurzame-inzetbaarheid-scan", title: "Duurzame Inzetbaarheid Scan", cats: ["Ontwikkeling"], goal: "Snel inzicht verkrijgen of een medewerker en/of organisatie nog voldoende duurzaam inzetbaar zijn." },
      { slug: "coaching-screener-scan", title: "Coaching Screener Scan", cats: ["Ontwikkeling"], goal: "Inzicht krijgen in welke klachten en problemen een kandidaat ervaart en hoe hij/zij hiermee omgaat." },
      { slug: "value-drives", title: "Value Drives", cats: ["(Pre)Selectie", "Ontwikkeling"], goal: "Voor bedrijven is verandering een belangrijk thema. Binnen die kaders zijn het de waarden van mensen die een rol spelen. Met de Value Drives vragenlijst worden deze waarden gesorteerd op kleur en in kaart gebracht." },
      { slug: "teamanalyse", title: "Teamanalyse", cats: ["Ontwikkeling"], goal: "Inzicht geven in welke onderwerpen en thema's binnen het team (extra) aandacht nodig hebben om deze op te nemen in het team ontwikkel plan." },
      { slug: "job-profiler", title: "Job Profiler", cats: ["(Pre)Selectie", "Evalueren", "Ontwikkeling"], goal: "Inzicht verkrijgen welke competenties en gedragingen de verschillende respondentgroepen relevant vinden voor een functie als input voor selectie, ontwikkeling en beoordeling." },
      { slug: "intake-candidate", title: "Intake Candidate", cats: ["(Pre)Selectie"], goal: "Alle vragen die in de ideale situatie in het eerste interview aan de orde moeten komen alvast online stellen, zodat het interview echt inhoud kan krijgen." },
      { slug: "exit-assessment", title: "Exit Assessment", cats: ["Evalueren", "Ontwikkeling"], goal: "Verschaffen van inzicht in redenen en oorzaken voor vertrek medewerkers alsmede tips ontvangen voor verbetering." },
      { slug: "cognitieve-test", title: "Cognitieve Capaciteitentest", cats: ["(Pre)Selectie", "Ontwikkeling"], goal: "Meten hoe snel een persoon problemen kan begrijpen, zich een mening kan vormen en/of nieuwe dingen kan aanleren." },
      { slug: "appraisal", title: "Appraisal", cats: ["Evalueren", "Ontwikkeling"], goal: "Verschaffen feedback (90 graden) vanuit een aantal verschillende perspectieven. Ideaal als input voor de functionerings- en beoordelingscyclus." },
      { slug: "canmeds", title: "CanMeds", cats: ["(Pre)Selectie", "Evalueren", "Ontwikkeling"], goal: "Aangeven hoe makkelijk een medewerker met een bepaald persoonlijkheidsprofiel specifieke competenties kan laten zien of kan ontwikkelen. Daarnaast wordt het presteren op een specifieke rol gescoord." },
      { slug: "beroepskeuze-test", title: "Beroepskeuzetest", cats: ["Evalueren", "Ontwikkeling"], goal: "Betrouwbaar advies omtrent passende en minder passende beroepsgroepen." },
      { slug: "loopbaanwaarden", title: "Loopbaanwaarden", cats: ["(Pre)Selectie", "Ontwikkeling"], goal: "Bieden van ondersteuning bij het beantwoorden van de vraag of bepaalde functies, rollen of organisties passen bij de loopbaanwaarden van de persoon." },
      { slug: "communicatiestijlen-test", title: "Communicatiestijl test", cats: ["Evalueren", "Ontwikkeling"], goal: "Vergelijken aanwezigheid essentiële omgangsfactoren (macht/invloed en persoonlijke afstand/nabijheid) en het vertalen hiervan naar specifieke communicatiestijlen." },
      { slug: "competentie-check", title: "Competentietest", cats: ["Evalueren", "Ontwikkeling"], goal: "Verschaffen feedback (0 graden) over eigen gedrag van medewerker. Antwoord op de vraag hoe men zichzelf ziet." },
      { slug: "conflictstijlen-test", title: "Conflictstijlen test", cats: ["Evalueren", "Ontwikkeling"], goal: "Analyseren van het individuele gedrag in conflict situaties. De test geeft aan in welke mate een bepaalde conflictstijl iemand tot nut kan zijn." },
      { slug: "tevredenheidsonderzoek-medewerkers", title: "Tevredenheidsonderzoek", cats: ["Evalueren", "Ontwikkeling"], goal: "Creëren van een overzicht van de tevredenheid van medewerkers over factoren als werkprocessen, cultuur, management, arbeidsomstandigheden, loopbaanontwikkeling en loyaliteit." },
      { slug: "leiderschapstest", title: "Leiderschapstest", cats: ["(Pre)Selectie", "Ontwikkeling"], goal: "Overzicht van de managementrollen en leiderschapsstijlen die een medewerker zal aannemen in verschillende situaties." },
      { slug: "leerstijlen", title: "Leerstijlen test", cats: ["Evalueren", "Ontwikkeling"], goal: "Inzicht in de wijze waarop een medewerker met leeractiviteiten omgaat en wat zijn/haar leervoorkeur is." },
      { slug: "15pf", title: "15PF", cats: ["Ontwikkeling"], goal: "Inzicht in de manier waarop een medewerker zich in verschillende situaties zal gedragen of reageren." },
      { slug: "referentie-check", title: "Referentie Check", cats: ["(Pre)Selectie"], goal: "Adequaat opvragen referenties ten behoeve van een sollicitatie- of selectieprocedure." },
      { slug: "verkoopvaardigheden", title: "Verkoopvaardigheden", cats: ["(Pre)Selectie", "Ontwikkeling"], goal: "Inzicht in de verkoopvaardigheden van uw topverkoper. Tevens kan inzicht verkregen worden in het inkoopgedrag van de klant en de communicatiestijl van uw verkopers." },
      { slug: "groepsrollen", title: "Groepsrollen", cats: ["Evalueren", "Ontwikkeling"], goal: "Overzicht van de groepsrollen, die een medewerker al dan niet zal aannemen in bepaalde situaties." },
      { slug: "typology", title: "Typology", cats: ["(Pre)Selectie", "Ontwikkeling"], goal: "Inzicht in het type medewerkers, gebaseerd op hoe we omgaan met dominantie (invloed versus samenwerken) en emotie (gevoel versus ratio)." },
    ],
  },
};

const clone = (o) => JSON.parse(JSON.stringify(o));

// Vult een gekloonde taalvariant met vertaalde cyclus-labels + item-teksten.
// rows = array van [title, goal] in dezelfde volgorde als items.
function applyLang(o, cyc, rows) {
  o.cyclus = cyc;
  const map = { "(Pre)Selectie": cyc[0], "Evalueren": cyc[1], "Ontwikkeling": cyc[2], "Studiekeuze": cyc[3] };
  o.items.forEach((it, i) => {
    it.cats = it.cats.map((c) => map[c] || c);
    it.title = rows[i][0];
    it.goal = rows[i][1];
  });
}

ovContent.en = clone(ovContent.nl);
ovContent.en.meta = { title: "Assessment Overview - hrmforce", description: "View the assessment overview with more than 35 online assessments. Filter by HR cycle, segment and publisher and find the right instrument straight away." };
ovContent.en.crumb = "Assessment overview";
ovContent.en.hero = { eyebrow: "online assessments", title: "Overview", intro: "With hrmforce you have access to a large number of <strong>online assessments</strong>. Gain insight into the knowledge, abilities, personality, satisfaction and motivation of your staff. There are tests for every HR phase: (pre)selection, development, performance and appraisal.", cta: "Request a free demo" };
ovContent.en.ui = { search: "Search an assessment…", searchAria: "Search an assessment", allPhases: "All phases", segmentLabel: "Segment", allSegments: "All segments", uitgeverLabel: "Publisher", allUitgevers: "All publishers", reset: "Clear", countMid: " of ", countSuffix: " assessments", noResult: "No assessments found.", clearFilters: "Clear the filters", goalLabel: "Goal:", readmore: "Read more", inShop: "In the shop" };
applyLang(ovContent.en, ["(Pre)Selection", "Evaluation", "Development", "Study choice"], [
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
  ["Life Course Scan", "Gain insight into a candidate's life course to reveal starting points for coaching and development."],
  ["Lean Scan", "Gain insight into the gap between the current and ideal situation to demonstrate the need for Lean management."],
  ["Interest test", "Gain insight into which sectors a pupil, student or employee is most interested in, to link these results to relevant study programmes and professions."],
  ["Sustainable Employability Scan", "Quickly gain insight into whether an employee and/or organisation is still sufficiently sustainably employable."],
  ["Coaching Screener Scan", "Gain insight into which complaints and problems a candidate experiences and how they deal with them."],
  ["Value Drives", "For companies, change is an important theme. Within that framework, it is people's values that play a role. The Value Drives questionnaire sorts these values by colour and maps them out."],
  ["Team analysis", "Provide insight into which topics and themes within the team need (extra) attention, to include them in the team development plan."],
  ["Job Profiler", "Gain insight into which competencies and behaviours the various respondent groups consider relevant for a role, as input for selection, development and appraisal."],
  ["Intake Candidate", "Ask all the questions that should ideally be covered in the first interview online in advance, so the interview can gain real substance."],
  ["Exit Assessment", "Provide insight into the reasons and causes of employee departures, as well as tips for improvement."],
  ["Cognitive Ability Test", "Measure how quickly a person can understand problems, form an opinion and/or learn new things."],
  ["Appraisal", "Provide feedback (90 degrees) from a number of different perspectives. Ideal as input for the performance and appraisal cycle."],
  ["CanMeds", "Indicate how easily an employee with a certain personality profile can demonstrate or develop specific competencies. In addition, performance in a specific role is scored."],
  ["Career choice test", "Reliable advice on suitable and less suitable occupational groups."],
  ["Career values", "Provide support in answering whether certain roles, positions or organisations match a person's career values."],
  ["Communication style test", "Compare the presence of essential interaction factors (power/influence and personal distance/closeness) and translate these into specific communication styles."],
  ["Competency test", "Provide feedback (0 degrees) on an employee's own behaviour. An answer to the question of how one sees oneself."],
  ["Conflict styles test", "Analyse individual behaviour in conflict situations. The test indicates to what extent a certain conflict style can be useful to someone."],
  ["Satisfaction survey", "Create an overview of employee satisfaction on factors such as work processes, culture, management, working conditions, career development and loyalty."],
  ["Leadership test", "Overview of the management roles and leadership styles an employee will adopt in different situations."],
  ["Learning styles test", "Insight into how an employee approaches learning activities and what their learning preference is."],
  ["15PF", "Insight into how an employee will behave or react in different situations."],
  ["Reference Check", "Adequately request references for an application or selection procedure."],
  ["Sales skills", "Insight into the sales skills of your top salesperson. It also provides insight into the customer's buying behaviour and the communication style of your salespeople."],
  ["Group roles", "Overview of the group roles an employee may or may not adopt in certain situations."],
  ["Typology", "Insight into the type of employees, based on how we deal with dominance (influence versus cooperation) and emotion (feeling versus reason)."],
]);

ovContent.de = clone(ovContent.nl);
ovContent.de.meta = { title: "Assessment-Übersicht - hrmforce", description: "Sehen Sie die Assessment-Übersicht mit mehr als 35 Online-Assessments. Filtern Sie nach HR-Zyklus, Segment und Herausgeber und finden Sie sofort das richtige Instrument." };
ovContent.de.crumb = "Assessment-Übersicht";
ovContent.de.hero = { eyebrow: "online-assessments", title: "Übersicht", intro: "Mit hrmforce steht Ihnen eine große Anzahl von <strong>Online-Assessments</strong> zur Verfügung. Gewinnen Sie Einblick in Wissen, Fähigkeiten, Persönlichkeit, Zufriedenheit und Motivation Ihrer Mitarbeitenden. Es gibt Tests für jede HR-Phase: (Vor-)Auswahl, Entwicklung, Leistung und Beurteilung.", cta: "Kostenlose Demo anfragen" };
ovContent.de.ui = { search: "Assessment suchen…", searchAria: "Assessment suchen", allPhases: "Alle Phasen", segmentLabel: "Segment", allSegments: "Alle Segmente", uitgeverLabel: "Herausgeber", allUitgevers: "Alle Herausgeber", reset: "Zurücksetzen", countMid: " von ", countSuffix: " Assessments", noResult: "Keine Assessments gefunden.", clearFilters: "Filter zurücksetzen", goalLabel: "Ziel:", readmore: "Mehr erfahren", inShop: "Im Shop" };
applyLang(ovContent.de, ["(Vor)Auswahl", "Bewertung", "Entwicklung", "Studienwahl"], [
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
  ["Lebenslauf-Scan", "Einblick in den Lebenslauf eines Kandidaten gewinnen, um Ansatzpunkte für Coaching und Entwicklung aufzudecken."],
  ["Lean-Scan", "Einblick in die Lücke zwischen der aktuellen und der idealen Situation gewinnen, um den Bedarf an Lean Management aufzuzeigen."],
  ["Interessentest", "Einblick gewinnen, für welche Bereiche ein Schüler, Student oder Mitarbeiter das meiste Interesse hat, um diese Ergebnisse mit relevanten Ausbildungen und Berufen zu verknüpfen."],
  ["Scan der nachhaltigen Beschäftigungsfähigkeit", "Schnell erkennen, ob ein Mitarbeiter und/oder eine Organisation noch ausreichend nachhaltig beschäftigungsfähig ist."],
  ["Coaching-Screener-Scan", "Einblick gewinnen, welche Beschwerden und Probleme ein Kandidat erlebt und wie er/sie damit umgeht."],
  ["Value Drives", "Für Unternehmen ist Veränderung ein wichtiges Thema. In diesem Rahmen spielen die Werte der Menschen eine Rolle. Der Value-Drives-Fragebogen sortiert diese Werte nach Farbe und stellt sie dar."],
  ["Teamanalyse", "Einblick geben, welche Themen innerhalb des Teams (zusätzliche) Aufmerksamkeit benötigen, um sie in den Teamentwicklungsplan aufzunehmen."],
  ["Job Profiler", "Einblick gewinnen, welche Kompetenzen und Verhaltensweisen die verschiedenen Befragtengruppen für eine Funktion relevant finden, als Input für Auswahl, Entwicklung und Beurteilung."],
  ["Intake Candidate", "Alle Fragen, die idealerweise im ersten Interview behandelt werden sollten, vorab online stellen, damit das Interview wirklich Inhalt bekommt."],
  ["Exit Assessment", "Einblick in Gründe und Ursachen für das Ausscheiden von Mitarbeitern geben sowie Tipps zur Verbesserung erhalten."],
  ["Kognitiver Fähigkeitstest", "Messen, wie schnell eine Person Probleme verstehen, sich eine Meinung bilden und/oder Neues lernen kann."],
  ["Appraisal", "Feedback (90 Grad) aus verschiedenen Perspektiven geben. Ideal als Input für den Beurteilungszyklus."],
  ["CanMeds", "Angeben, wie leicht ein Mitarbeiter mit einem bestimmten Persönlichkeitsprofil spezifische Kompetenzen zeigen oder entwickeln kann. Zusätzlich wird die Leistung in einer bestimmten Rolle bewertet."],
  ["Berufswahltest", "Zuverlässige Beratung zu passenden und weniger passenden Berufsgruppen."],
  ["Laufbahnwerte", "Unterstützung bei der Beantwortung der Frage, ob bestimmte Funktionen, Rollen oder Organisationen zu den Laufbahnwerten der Person passen."],
  ["Kommunikationsstiltest", "Das Vorhandensein wesentlicher Umgangsfaktoren (Macht/Einfluss und persönliche Distanz/Nähe) vergleichen und in spezifische Kommunikationsstile übersetzen."],
  ["Kompetenztest", "Feedback (0 Grad) zum eigenen Verhalten des Mitarbeiters geben. Eine Antwort auf die Frage, wie man sich selbst sieht."],
  ["Konfliktstiltest", "Das individuelle Verhalten in Konfliktsituationen analysieren. Der Test zeigt, inwieweit ein bestimmter Konfliktstil jemandem nützlich sein kann."],
  ["Zufriedenheitsumfrage", "Einen Überblick über die Mitarbeiterzufriedenheit zu Faktoren wie Arbeitsprozessen, Kultur, Management, Arbeitsbedingungen, Laufbahnentwicklung und Loyalität erstellen."],
  ["Führungstest", "Überblick über die Managementrollen und Führungsstile, die ein Mitarbeiter in verschiedenen Situationen einnehmen wird."],
  ["Lernstiltest", "Einblick, wie ein Mitarbeiter mit Lernaktivitäten umgeht und was seine/ihre Lernpräferenz ist."],
  ["15PF", "Einblick, wie sich ein Mitarbeiter in verschiedenen Situationen verhalten oder reagieren wird."],
  ["Referenzprüfung", "Referenzen für ein Bewerbungs- oder Auswahlverfahren angemessen einholen."],
  ["Verkaufskompetenzen", "Einblick in die Verkaufskompetenzen Ihres Top-Verkäufers. Zudem lässt sich Einblick in das Kaufverhalten des Kunden und den Kommunikationsstil Ihrer Verkäufer gewinnen."],
  ["Gruppenrollen", "Überblick über die Gruppenrollen, die ein Mitarbeiter in bestimmten Situationen einnehmen kann oder nicht."],
  ["Typologie", "Einblick in den Typ der Mitarbeiter, basierend darauf, wie wir mit Dominanz (Einfluss versus Zusammenarbeit) und Emotion (Gefühl versus Verstand) umgehen."],
]);

ovContent.fr = clone(ovContent.nl);
ovContent.fr.meta = { title: "Aperçu des assessments - hrmforce", description: "Consultez l'aperçu des assessments avec plus de 35 assessments en ligne. Filtrez par cycle RH, segment et éditeur et trouvez immédiatement le bon instrument." };
ovContent.fr.crumb = "Aperçu des assessments";
ovContent.fr.hero = { eyebrow: "assessments en ligne", title: "Aperçu", intro: "Avec hrmforce, vous disposez d'un grand nombre d'<strong>assessments en ligne</strong>. Obtenez un aperçu des connaissances, des aptitudes, de la personnalité, de la satisfaction et de la motivation de votre personnel. Il existe des tests pour chaque phase RH : (pré)sélection, développement, performance et évaluation.", cta: "Demander une démo gratuite" };
ovContent.fr.ui = { search: "Rechercher un assessment…", searchAria: "Rechercher un assessment", allPhases: "Toutes les phases", segmentLabel: "Segment", allSegments: "Tous les segments", uitgeverLabel: "Éditeur", allUitgevers: "Tous les éditeurs", reset: "Effacer", countMid: " sur ", countSuffix: " assessments", noResult: "Aucun assessment trouvé.", clearFilters: "Effacer les filtres", goalLabel: "Objectif :", readmore: "En savoir plus", inShop: "Dans la boutique" };
applyLang(ovContent.fr, ["(Pré)Sélection", "Évaluation", "Développement", "Orientation"], [
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
  ["Scan du parcours de vie", "Comprendre le parcours de vie d'un candidat afin de révéler des pistes de coaching et de développement."],
  ["Scan Lean", "Comprendre l'écart entre la situation actuelle et la situation idéale afin de démontrer le besoin de Lean management."],
  ["Test d'intérêts", "Comprendre les secteurs qui intéressent le plus un élève, étudiant ou employé, afin de relier ces résultats à des formations et métiers pertinents."],
  ["Scan d'employabilité durable", "Déterminer rapidement si un employé et/ou une organisation reste suffisamment employable durablement."],
  ["Scan Coaching Screener", "Comprendre quelles plaintes et quels problèmes un candidat rencontre et comment il/elle les gère."],
  ["Value Drives", "Pour les entreprises, le changement est un thème important. Dans ce cadre, ce sont les valeurs des personnes qui jouent un rôle. Le questionnaire Value Drives trie ces valeurs par couleur et les cartographie."],
  ["Analyse d'équipe", "Indiquer quels sujets et thèmes au sein de l'équipe nécessitent une attention (supplémentaire), afin de les intégrer au plan de développement de l'équipe."],
  ["Job Profiler", "Comprendre quelles compétences et quels comportements les différents groupes de répondants jugent pertinents pour un poste, comme base de sélection, de développement et d'évaluation."],
  ["Intake Candidate", "Poser en ligne à l'avance toutes les questions qui devraient idéalement être abordées lors du premier entretien, afin que l'entretien prenne vraiment du contenu."],
  ["Exit Assessment", "Comprendre les raisons et les causes du départ des employés et recevoir des conseils d'amélioration."],
  ["Test d'aptitudes cognitives", "Mesurer la rapidité avec laquelle une personne comprend les problèmes, se forge une opinion et/ou apprend."],
  ["Appraisal", "Fournir un feedback (90 degrés) selon plusieurs perspectives. Idéal comme base du cycle d'évaluation."],
  ["CanMeds", "Indiquer avec quelle facilité un employé au profil de personnalité donné peut démontrer ou développer des compétences spécifiques. La performance dans un rôle spécifique est également évaluée."],
  ["Test d'orientation professionnelle", "Conseils fiables sur les groupes de métiers adaptés et moins adaptés."],
  ["Valeurs de carrière", "Aider à répondre à la question de savoir si certaines fonctions, rôles ou organisations correspondent aux valeurs de carrière de la personne."],
  ["Test de style de communication", "Comparer la présence des facteurs relationnels essentiels (pouvoir/influence et distance/proximité personnelle) et les traduire en styles de communication spécifiques."],
  ["Test de compétences", "Fournir un feedback (0 degré) sur le comportement de l'employé. Une réponse à la question de savoir comment on se perçoit."],
  ["Test des styles de conflit", "Analyser le comportement individuel en situation de conflit. Le test indique dans quelle mesure un style de conflit donné peut être utile."],
  ["Enquête de satisfaction", "Créer un aperçu de la satisfaction des employés sur des facteurs tels que les processus de travail, la culture, le management, les conditions de travail, l'évolution de carrière et la loyauté."],
  ["Test de leadership", "Aperçu des rôles de management et des styles de leadership qu'un employé adoptera dans différentes situations."],
  ["Test des styles d'apprentissage", "Comprendre comment un employé aborde les activités d'apprentissage et quelle est sa préférence d'apprentissage."],
  ["15PF", "Comprendre comment un employé se comportera ou réagira dans différentes situations."],
  ["Vérification des références", "Demander correctement des références dans le cadre d'une procédure de candidature ou de sélection."],
  ["Compétences commerciales", "Comprendre les compétences commerciales de votre meilleur vendeur. Cela permet aussi de comprendre le comportement d'achat du client et le style de communication de vos vendeurs."],
  ["Rôles de groupe", "Aperçu des rôles de groupe qu'un employé adoptera ou non dans certaines situations."],
  ["Typologie", "Comprendre le type d'employés, selon la façon dont nous gérons la dominance (influence versus coopération) et l'émotion (ressenti versus raison)."],
]);

ovContent.es = clone(ovContent.nl);
ovContent.es.meta = { title: "Resumen de assessments - hrmforce", description: "Consulte el resumen de assessments con más de 35 assessments en línea. Filtre por ciclo de RR. HH., segmento y editor y encuentre de inmediato el instrumento adecuado." };
ovContent.es.crumb = "Resumen de assessments";
ovContent.es.hero = { eyebrow: "assessments en línea", title: "Resumen", intro: "Con hrmforce dispone de un gran número de <strong>assessments en línea</strong>. Obtenga información sobre los conocimientos, las capacidades, la personalidad, la satisfacción y la motivación de su personal. Hay pruebas para cada fase de RR. HH.: (pre)selección, desarrollo, desempeño y evaluación.", cta: "Solicitar una demo gratuita" };
ovContent.es.ui = { search: "Buscar un assessment…", searchAria: "Buscar un assessment", allPhases: "Todas las fases", segmentLabel: "Segmento", allSegments: "Todos los segmentos", uitgeverLabel: "Editor", allUitgevers: "Todos los editores", reset: "Borrar", countMid: " de ", countSuffix: " assessments", noResult: "No se han encontrado assessments.", clearFilters: "Borrar los filtros", goalLabel: "Objetivo:", readmore: "Leer más", inShop: "En la tienda" };
applyLang(ovContent.es, ["(Pre)Selección", "Evaluación", "Desarrollo", "Orientación"], [
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
  ["Escáner de trayectoria vital", "Comprender la trayectoria vital de un candidato para revelar puntos de partida para el coaching y el desarrollo."],
  ["Escáner Lean", "Comprender la brecha entre la situación actual y la ideal para demostrar la necesidad de la gestión Lean."],
  ["Test de intereses", "Comprender en qué sectores tiene más interés un alumno, estudiante o empleado, para vincular estos resultados con formaciones y profesiones relevantes."],
  ["Escáner de empleabilidad sostenible", "Determinar rápidamente si un empleado y/o una organización siguen siendo suficientemente empleables de forma sostenible."],
  ["Escáner Coaching Screener", "Comprender qué quejas y problemas experimenta un candidato y cómo los gestiona."],
  ["Value Drives", "Para las empresas, el cambio es un tema importante. En ese marco, son los valores de las personas los que desempeñan un papel. El cuestionario Value Drives ordena estos valores por color y los representa."],
  ["Análisis de equipo", "Indicar qué temas dentro del equipo necesitan atención (adicional), para incluirlos en el plan de desarrollo del equipo."],
  ["Job Profiler", "Comprender qué competencias y comportamientos consideran relevantes los distintos grupos de encuestados para un puesto, como base para la selección, el desarrollo y la evaluación."],
  ["Intake Candidate", "Plantear en línea de antemano todas las preguntas que idealmente deberían tratarse en la primera entrevista, para que la entrevista adquiera contenido real."],
  ["Exit Assessment", "Comprender las razones y causas de la salida de los empleados y recibir consejos de mejora."],
  ["Test de capacidad cognitiva", "Medir con qué rapidez una persona puede comprender problemas, formarse una opinión y/o aprender."],
  ["Appraisal", "Proporcionar feedback (90 grados) desde varias perspectivas. Ideal como base del ciclo de evaluación."],
  ["CanMeds", "Indicar con qué facilidad un empleado con un determinado perfil de personalidad puede mostrar o desarrollar competencias específicas. Además, se evalúa el desempeño en un rol concreto."],
  ["Test de orientación profesional", "Asesoramiento fiable sobre grupos profesionales adecuados y menos adecuados."],
  ["Valores de carrera", "Ayudar a responder si determinadas funciones, roles u organizaciones encajan con los valores de carrera de la persona."],
  ["Test de estilo de comunicación", "Comparar la presencia de factores de trato esenciales (poder/influencia y distancia/cercanía personal) y traducirlos en estilos de comunicación específicos."],
  ["Test de competencias", "Proporcionar feedback (0 grados) sobre el propio comportamiento del empleado. Una respuesta a cómo se ve uno a sí mismo."],
  ["Test de estilos de conflicto", "Analizar el comportamiento individual en situaciones de conflicto. El test indica en qué medida un determinado estilo de conflicto puede ser útil."],
  ["Encuesta de satisfacción", "Crear una visión de la satisfacción de los empleados sobre factores como los procesos de trabajo, la cultura, la dirección, las condiciones laborales, el desarrollo profesional y la lealtad."],
  ["Test de liderazgo", "Visión de los roles de gestión y estilos de liderazgo que un empleado adoptará en distintas situaciones."],
  ["Test de estilos de aprendizaje", "Comprender cómo aborda un empleado las actividades de aprendizaje y cuál es su preferencia de aprendizaje."],
  ["15PF", "Comprender cómo se comportará o reaccionará un empleado en distintas situaciones."],
  ["Verificación de referencias", "Solicitar referencias de forma adecuada para un proceso de solicitud o selección."],
  ["Habilidades comerciales", "Comprender las habilidades comerciales de su mejor vendedor. También permite conocer el comportamiento de compra del cliente y el estilo de comunicación de sus vendedores."],
  ["Roles de grupo", "Visión de los roles de grupo que un empleado adoptará o no en determinadas situaciones."],
  ["Tipología", "Comprender el tipo de empleados, según cómo gestionamos la dominancia (influencia frente a cooperación) y la emoción (sentimiento frente a razón)."],
]);

ovContent.ro = clone(ovContent.nl);
ovContent.ro.meta = { title: "Prezentare generală a assessment-elor - hrmforce", description: "Consultați prezentarea generală a assessment-elor cu peste 35 de assessment-e online. Filtrați după ciclul HR, segment și editor și găsiți imediat instrumentul potrivit." };
ovContent.ro.crumb = "Prezentare generală a assessment-elor";
ovContent.ro.hero = { eyebrow: "assessment-e online", title: "Prezentare generală", intro: "Cu hrmforce aveți la dispoziție un număr mare de <strong>assessment-e online</strong>. Obțineți o imagine asupra cunoștințelor, capacităților, personalității, satisfacției și motivației personalului dvs. Există teste pentru fiecare fază HR: (pre)selecție, dezvoltare, performanță și evaluare.", cta: "Solicitați o demonstrație gratuită" };
ovContent.ro.ui = { search: "Căutați un assessment…", searchAria: "Căutați un assessment", allPhases: "Toate fazele", segmentLabel: "Segment", allSegments: "Toate segmentele", uitgeverLabel: "Editor", allUitgevers: "Toți editorii", reset: "Ștergeți", countMid: " din ", countSuffix: " assessment-e", noResult: "Nu s-au găsit assessment-e.", clearFilters: "Ștergeți filtrele", goalLabel: "Obiectiv:", readmore: "Aflați mai multe", inShop: "În magazin" };
applyLang(ovContent.ro, ["(Pre)Selecție", "Evaluare", "Dezvoltare", "Orientare"], [
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
  ["Scanare a parcursului de viață", "Înțelegerea parcursului de viață al unui candidat pentru a dezvălui puncte de plecare pentru coaching și dezvoltare."],
  ["Scanare Lean", "Înțelegerea decalajului dintre situația actuală și cea ideală pentru a demonstra nevoia de management Lean."],
  ["Test de interese", "Înțelegerea sectoarelor care interesează cel mai mult un elev, student sau angajat, pentru a lega aceste rezultate de programe de studiu și profesii relevante."],
  ["Scanare a angajabilității durabile", "Determinarea rapidă dacă un angajat și/sau o organizație mai sunt suficient de angajabile pe termen lung."],
  ["Scanare Coaching Screener", "Înțelegerea plângerilor și problemelor pe care le are un candidat și a modului în care le gestionează."],
  ["Value Drives", "Pentru companii, schimbarea este o temă importantă. În acest cadru, valorile oamenilor joacă un rol. Chestionarul Value Drives sortează aceste valori pe culori și le cartografiază."],
  ["Analiză de echipă", "Indicarea subiectelor din cadrul echipei care necesită atenție (suplimentară), pentru a le include în planul de dezvoltare al echipei."],
  ["Job Profiler", "Înțelegerea competențelor și comportamentelor pe care diferitele grupuri de respondenți le consideră relevante pentru un post, ca bază pentru selecție, dezvoltare și evaluare."],
  ["Intake Candidate", "Adresarea online, în avans, a tuturor întrebărilor care ar trebui abordate ideal la primul interviu, astfel încât interviul să capete conținut real."],
  ["Exit Assessment", "Înțelegerea motivelor și cauzelor plecării angajaților, precum și primirea de sfaturi pentru îmbunătățire."],
  ["Test de capacitate cognitivă", "Măsurarea rapidității cu care o persoană poate înțelege probleme, își poate forma o opinie și/sau poate învăța."],
  ["Appraisal", "Oferirea de feedback (90 de grade) din mai multe perspective. Ideal ca bază pentru ciclul de evaluare."],
  ["CanMeds", "Indicarea cât de ușor un angajat cu un anumit profil de personalitate poate demonstra sau dezvolta competențe specifice. În plus, se evaluează performanța într-un rol specific."],
  ["Test de orientare profesională", "Sfaturi fiabile privind grupurile profesionale potrivite și mai puțin potrivite."],
  ["Valori de carieră", "Sprijin în a răspunde dacă anumite funcții, roluri sau organizații se potrivesc cu valorile de carieră ale persoanei."],
  ["Test al stilului de comunicare", "Compararea prezenței factorilor esențiali de interacțiune (putere/influență și distanță/apropiere personală) și traducerea lor în stiluri de comunicare specifice."],
  ["Test de competențe", "Oferirea de feedback (0 grade) privind propriul comportament al angajatului. Un răspuns la întrebarea cum se vede cineva pe sine."],
  ["Test al stilurilor de conflict", "Analiza comportamentului individual în situații de conflict. Testul indică în ce măsură un anumit stil de conflict poate fi util."],
  ["Sondaj de satisfacție", "Crearea unei imagini asupra satisfacției angajaților privind factori precum procesele de lucru, cultura, managementul, condițiile de muncă, dezvoltarea carierei și loialitatea."],
  ["Test de leadership", "Imagine asupra rolurilor de management și stilurilor de leadership pe care un angajat le va adopta în diferite situații."],
  ["Test al stilurilor de învățare", "Înțelegerea modului în care un angajat abordează activitățile de învățare și care este preferința sa de învățare."],
  ["15PF", "Înțelegerea modului în care un angajat se va comporta sau va reacționa în diferite situații."],
  ["Verificarea referințelor", "Solicitarea adecvată a referințelor pentru o procedură de candidatură sau de selecție."],
  ["Abilități de vânzare", "Înțelegerea abilităților de vânzare ale celui mai bun vânzător al dvs. Oferă, de asemenea, o imagine asupra comportamentului de cumpărare al clientului și a stilului de comunicare al vânzătorilor."],
  ["Roluri de grup", "Imagine asupra rolurilor de grup pe care un angajat le va adopta sau nu în anumite situații."],
  ["Tipologie", "Înțelegerea tipului de angajați, în funcție de modul în care gestionăm dominanța (influență versus cooperare) și emoția (sentiment versus rațiune)."],
]);
