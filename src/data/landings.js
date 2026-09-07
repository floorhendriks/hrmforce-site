// Toepassings- en sectorlandingspagina's. Generiek geschreven: geen verzonnen
// cijfers of klantnamen. Elke pagina linkt naar bestaande assessment-detailpagina's.
export const landings = [
  {
    slug: "werving-en-selectie", kind: "usecase",
    title: "Assessments voor werving en selectie",
    metaTitle: "Assessments voor werving en selectie | hrmforce",
    metaDescription: "Selecteer objectiever met wetenschappelijk gevalideerde assessments. Meet capaciteiten, persoonlijkheid en drijfveren en neem betere aannamebeslissingen.",
    eyebrow: "Toepassing", hero: "Beter kiezen, met minder onderbuikgevoel",
    intro: "Een verkeerde aanname kost tijd, geld en energie. Met objectieve assessments voeg je betrouwbare informatie toe aan je selectie, zodat je beslist op basis van meer dan cv en eerste indruk.",
    pains: [
      "Kandidaten presenteren zich sterk in het gesprek, maar hoe voorspel je werkgedrag?",
      "Selectiebeslissingen leunen vaak op gevoel en zijn lastig uit te leggen.",
      "Een mismatch merk je pas na de proeftijd, als de kosten al zijn gemaakt.",
    ],
    approach: [
      { h: "Meet wat telt voor de functie", p: "Combineer een capaciteitentest met een persoonlijkheidsvragenlijst en meet gericht de eigenschappen die er voor de rol toe doen." },
      { h: "Vergelijk eerlijk en gestructureerd", p: "Iedere kandidaat doorloopt dezelfde meting, waardoor je mensen op vergelijkbare gronden beoordeelt en onbewuste aannames beperkt." },
      { h: "Direct bruikbaar in het gesprek", p: "Je ontvangt een helder rapport met gespreksvragen, zodat je het interview verdiept in plaats van herhaalt." },
    ],
    assessmentSlugs: ["big-five", "cognitieve-test", "disc-test", "competentie-check", "job-profiler", "intake-candidate"],
    faq: [
      { q: "Vervangt een assessment het sollicitatiegesprek?", a: "Nee. Een assessment is aanvullende informatie. Je combineert de uitkomst met het gesprek en andere bronnen tot een compleet beeld." },
      { q: "Hoe ervaren kandidaten dit?", a: "Kandidaten vullen de vragenlijst online in eigen tempo in en hebben recht op feedback op hun resultaten. Een zorgvuldig proces versterkt je werkgeversimago." },
    ],
  },
  {
    slug: "ontwikkeling", kind: "usecase",
    title: "Assessments voor ontwikkeling en groei",
    metaTitle: "Assessments voor ontwikkeling en groei | hrmforce",
    metaDescription: "Maak ontwikkeling concreet met assessments die sterktes en groeirichting in kaart brengen. Voer betere loopbaan- en ontwikkelgesprekken.",
    eyebrow: "Toepassing", hero: "Van onderbuikgevoel naar gericht ontwikkelen",
    intro: "Ontwikkeling werkt het best als ze gebaseerd is op inzicht. Assessments maken sterktes en ontwikkelpunten bespreekbaar, zodat medewerkers zelf aan de slag kunnen met hun groei.",
    pains: [
      "Ontwikkelgesprekken blijven vaag en leiden zelden tot concrete acties.",
      "Medewerkers weten niet goed waar hun kracht ligt of wat een logische volgende stap is.",
      "Investeringen in opleiding sluiten niet altijd aan bij wat iemand nodig heeft.",
    ],
    approach: [
      { h: "Inzicht als startpunt", p: "Breng persoonlijkheid, drijfveren en competenties in kaart en gebruik de uitkomst als basis voor een persoonlijk ontwikkelplan." },
      { h: "Feedback van meerdere kanten", p: "Met 360-graden-feedback koppel je zelfbeeld aan hoe collega's het gedrag ervaren, een krachtige spiegel voor groei." },
      { h: "Onderdeel van de gesprekscyclus", p: "Herhaal metingen in de tijd en volg voortgang, zodat ontwikkeling geen eenmalige actie is maar een doorlopend proces." },
    ],
    assessmentSlugs: ["ontwikkelassessment", "360-graden-feedback", "drijfverentest", "competentie-check", "duurzame-inzetbaarheid-scan"],
    faq: [
      { q: "Is een ontwikkelassessment alleen voor leidinggevenden?", a: "Nee. Iedere medewerker heeft baat bij inzicht in sterktes en ontwikkelpunten, ongeacht functie of niveau." },
      { q: "Wat levert het de medewerker op?", a: "Herkenbare inzichten en concrete handvatten om zelf richting te geven aan de eigen loopbaan en groei." },
    ],
  },
  {
    slug: "leidinggevenden", kind: "usecase",
    title: "Assessments voor leidinggevenden",
    metaTitle: "Assessments voor leidinggevenden en leiderschap | hrmforce",
    metaDescription: "Onderbouw leiderschapsontwikkeling en -selectie met assessments. Krijg inzicht in stijl, drijfveren en veerkracht van (aankomend) leidinggevenden.",
    eyebrow: "Toepassing", hero: "Leiders die teams meenemen in verandering",
    intro: "Goed leiderschap is te ontwikkelen, mits je weet waar je staat. Assessments geven leidinggevenden inzicht in hun stijl, drijfveren en veerkracht, als basis voor gerichte groei.",
    pains: [
      "Leiderschapstrajecten missen richting doordat een objectief startpunt ontbreekt.",
      "Bij de doorgroei naar een leidinggevende rol is onduidelijk of iemand er klaar voor is.",
      "Onder druk valt gedrag soms terug, terwijl juist dan sturing nodig is.",
    ],
    approach: [
      { h: "Zicht op stijl en gedrag", p: "Breng leiderschapsgedrag en voorkeuren in kaart en bespreek wat dit betekent voor het team en de organisatie." },
      { h: "Drijfveren en veerkracht", p: "Begrijp wat iemand motiveert en hoe iemand omgaat met druk, zodat ontwikkeling aansluit bij de persoon." },
      { h: "Groei onderbouwd met data", p: "Combineer assessment- en 360-data tot een gericht ontwikkelpad met concrete leerdoelen." },
    ],
    assessmentSlugs: ["leiderschapstest", "360-graden-feedback", "drijfverentest", "mentale-veerkracht-scan", "lencioni-teamdynamiek"],
    faq: [
      { q: "Kun je hiermee ook potentieel voor leiderschap herkennen?", a: "Ja. Assessments helpen om aanleg en ontwikkelpunten voor een leidinggevende rol zichtbaar te maken, als aanvulling op prestaties en gesprek." },
      { q: "Werkt dit ook voor teams?", a: "Zeker. Naast individuele inzichten kun je teamdynamiek in kaart brengen om samenwerking en rolverdeling te versterken." },
    ],
  },
  {
    slug: "jong-talent", kind: "usecase",
    title: "Assessments voor jong talent en studiekeuze",
    metaTitle: "Assessments voor jong talent en studiekeuze | hrmforce",
    metaDescription: "Help jongeren en starters richting kiezen met studiekeuze- en beroepskeuzetests. Breng interesses, capaciteiten en talenten objectief in beeld.",
    eyebrow: "Toepassing", hero: "Richting geven aan een beginnende loopbaan",
    intro: "Kiezen aan het begin van een loopbaan is lastig. Assessments brengen interesses, capaciteiten en talenten in beeld, zodat jongeren en starters een onderbouwde keuze maken.",
    pains: [
      "Studie- en beroepskeuzes worden gemaakt zonder goed zicht op eigen talenten.",
      "Starters twijfelen of een richting bij hen past, met uitval of switchen tot gevolg.",
      "Begeleiders missen een objectief startpunt voor het loopbaangesprek.",
    ],
    approach: [
      { h: "Interesses en talenten in beeld", p: "Meet waar iemand energie van krijgt en waar de aanleg ligt, als basis voor een passende richting." },
      { h: "Capaciteiten meewegen", p: "Een capaciteitentest laat zien welk leer- en werkniveau past, onafhankelijk van cijfers alleen." },
      { h: "Concreet gesprek over keuzes", p: "De uitkomst geeft begeleiders en jongeren een gezamenlijke taal om opties te wegen." },
    ],
    assessmentSlugs: ["studiekeuzetest", "beroepskeuze-test", "cognitieve-test", "interesse-scan", "leerstijlen"],
    faq: [
      { q: "Vanaf welke leeftijd is dit geschikt?", a: "De studie- en beroepskeuze-instrumenten zijn geschikt voor jongeren die voor een opleidings- of loopbaankeuze staan, en voor starters." },
      { q: "Bepaalt de test de keuze?", a: "Nee. De test geeft inzicht en gespreksstof; de keuze blijft altijd aan de jongere zelf, samen met begeleiding." },
    ],
  },
  {
    slug: "onderwijs", kind: "sector",
    title: "Assessments voor het onderwijs",
    metaTitle: "Assessments voor het onderwijs | hrmforce",
    metaDescription: "Assessments voor onderwijsinstellingen: van studiekeuze en toelating tot ontwikkeling van docenten en teams. Wetenschappelijk onderbouwd en meertalig.",
    eyebrow: "Sector", hero: "Onderbouwde keuzes in het onderwijs",
    intro: "Onderwijsinstellingen zetten assessments in bij studiekeuze en toelating, én bij de ontwikkeling van docenten en teams. Objectief inzicht helpt studenten en medewerkers verder.",
    pains: [
      "Studenten kiezen een richting die niet past, met studievertraging of uitval.",
      "Bij toelating ontbreekt een objectief beeld van aanleg en motivatie.",
      "Professionalisering van docenten mist soms een concreet startpunt.",
    ],
    approach: [
      { h: "Studiekeuze en instroom", p: "Breng interesses en capaciteiten in kaart, zodat studenten beter geïnformeerd kiezen en instromen." },
      { h: "Ontwikkeling van medewerkers", p: "Ondersteun de groei van docenten en onderwijsteams met inzicht in competenties en samenwerking." },
      { h: "Meertalig en toegankelijk", p: "Vragenlijsten zijn in meerdere talen beschikbaar en online af te nemen, passend bij een diverse populatie." },
    ],
    assessmentSlugs: ["studiekeuzetest", "cognitieve-test", "big-five", "360-graden-feedback", "interesse-scan"],
    faq: [
      { q: "Zijn de instrumenten geschikt voor studenten?", a: "Ja. Er zijn instrumenten specifiek gericht op studie- en beroepskeuze, naast instrumenten voor de ontwikkeling van medewerkers." },
      { q: "Kunnen we dit op grotere schaal inzetten?", a: "Ja. Met een eigen omgeving op licentiebasis neem je eenvoudig en tegen een vaste prijs op grotere schaal af." },
    ],
  },
  {
    slug: "industrie", kind: "sector",
    title: "Assessments voor de industrie en techniek",
    metaTitle: "Assessments voor de industrie en techniek | hrmforce",
    metaDescription: "Assessments voor industrie en techniek: objectief selecteren, teams versterken en medewerkers duurzaam inzetbaar houden. Wetenschappelijk gevalideerd.",
    eyebrow: "Sector", hero: "Vakmensen vinden, binden en ontwikkelen",
    intro: "In industrie en techniek is de arbeidsmarkt krap en telt elke aanname. Assessments helpen om objectief te selecteren, teams te versterken en mensen duurzaam inzetbaar te houden.",
    pains: [
      "Krappe arbeidsmarkt maakt elke verkeerde aanname extra kostbaar.",
      "Vakinhoud is te toetsen, maar hoe beoordeel je samenwerking en veerkracht?",
      "Fysiek en mentaal zwaar werk vraagt aandacht voor duurzame inzetbaarheid.",
    ],
    approach: [
      { h: "Objectief selecteren", p: "Meet capaciteiten en werkgedrag naast vakkennis, zodat nieuwe medewerkers beter passen bij de functie en het team." },
      { h: "Sterkere teams", p: "Breng team- en samenwerkingsdynamiek in kaart en verbeter de onderlinge afstemming op de werkvloer." },
      { h: "Duurzaam inzetbaar", p: "Krijg zicht op belastbaarheid en veerkracht, zodat je tijdig kunt sturen op inzetbaarheid." },
    ],
    assessmentSlugs: ["cognitieve-test", "disc-test", "competentie-check", "mentale-veerkracht-scan", "teamanalyse", "duurzame-inzetbaarheid-scan"],
    faq: [
      { q: "Werken de vragenlijsten ook voor productiemedewerkers?", a: "Ja. Er zijn non-verbale capaciteitentests die onafhankelijk van taal en opleiding het denkvermogen meten, geschikt voor uiteenlopende functies." },
      { q: "Kunnen we meertalig afnemen?", a: "Ja. De vragenlijsten zijn in meerdere talen beschikbaar, handig bij een internationale personeelssamenstelling." },
    ],
  },
];
