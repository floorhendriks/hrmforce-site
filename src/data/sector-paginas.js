// Inhoud van de sectorpagina's onder /sectoren/. Per sector eigen tekst:
// welke functies je vult, waar de selectie op vastloopt, welke assessments
// daarbij horen, hoe je het inricht en wat het oplevert.
//
// Onderwijs staat hier niet in, die heeft een eigen pagina die de bestaande
// landing hergebruikt (src/pages/sectoren/onderwijs.astro).

export const SECTORPAGINAS = {
  "zorg": {
    "kort": "Zorg",
    "metaTitle": "Assessments voor de zorg | Werven en behouden van zorgprofessionals",
    "metaDescription": "Hoe zorgorganisaties assessments inzetten bij werving, roosterbestendigheid en ontwikkeling van verpleegkundigen, begeleiders en leidinggevenden.",
    "h1": "Assessments voor de zorg",
    "intro": [
      "Zorgorganisaties vullen vacatures in een markt waarin de kandidaat kiest. De vraag is daarom zelden wie het meeste kan, maar wie het werk volhoudt en bij het team past. Met een korte meting vooraf zie je houding, drijfveren en veerkracht voordat iemand start.",
      "hrmforce levert die meting online, in de taal van de kandidaat, met een rapport dat een leidinggevende zonder psychologische opleiding kan lezen."
    ],
    "rollenKop": "Functies waar zorgorganisaties assessments voor inzetten",
    "rollenTekst": "In de zorg draait selectie om gedrag onder druk en om de omgang met bewoners, patiënten en familie. Deze rollen komen het vaakst langs.",
    "rollen": [
      "Verpleegkundigen en verzorgenden, vaak in onregelmatige diensten",
      "Begeleiders in de gehandicaptenzorg en de jeugdzorg",
      "Teamleiders en zorgcoördinatoren die een vast team aansturen",
      "Medewerkers van het zorgloket en de planning, met veel klantcontact"
    ],
    "lastigKop": "Waar de selectie in de zorg op vastloopt",
    "lastigTekst": "Vroegtijdig verloop kost een zorgorganisatie meer dan de wervingskosten. Een begeleider die na vier maanden vertrekt laat een team achter dat de gaten opvult met overuren. In gesprekken komt dat zelden op tafel, want een kandidaat die het werk graag wil doen vertelt niet uit zichzelf dat nachtdiensten hem uitputten. Een meting van veerkracht en werkhouding brengt dat wel in beeld, voordat het rooster eraan hangt.",
    "assessmentsKop": "Welke assessments in de zorg worden gebruikt",
    "assessments": [
      {
        "slug": "mentale-veerkracht-scan",
        "waarom": "Laat zien hoe iemand omgaat met werkdruk, emotionele belasting en herstel na een zware dienst."
      },
      {
        "slug": "big-five",
        "waarom": "Geeft het persoonlijkheidsbeeld waarop je zorgvuldigheid, stabiliteit en samenwerking kunt inschatten."
      },
      {
        "slug": "canmeds",
        "waarom": "Vertaalt competenties naar de rollen die in de zorg gangbaar zijn, van zorgverlener tot samenwerkingspartner."
      },
      {
        "slug": "duurzame-inzetbaarheid-scan",
        "waarom": "Brengt in kaart of iemand het werk over vijf jaar nog volhoudt, en wat daarvoor nodig is."
      }
    ],
    "aanpakKop": "Hoe een zorgorganisatie het inricht",
    "aanpak": [
      "Je bepaalt per functiegroep welke vragenlijsten meegaan. Voor een verpleegkundige is dat vaak veerkracht en persoonlijkheid, voor een teamleider komt daar de leiderschapstest bij.",
      "De kandidaat krijgt een uitnodiging per mail en vult online in, meestal binnen een half uur. Talen zijn beschikbaar voor kandidaten die het Nederlands nog leren.",
      "De recruiter en de leidinggevende zien hetzelfde rapport, met gespreksvragen per aandachtspunt. Dat houdt het tweede gesprek concreet."
    ],
    "opleverKop": "Wat het oplevert",
    "opleverTekst": "Een zorgorganisatie met ongeveer 180 medewerkers nam persoonlijkheids- en veerkrachtmeting op als vaste stap in de selectie. Het vroegtijdig verloop daalde, en de gesprekken gingen eerder over de aanpak van het werk dan over het cv.",
    "oplever": [
      "Minder uitval in de eerste zes maanden",
      "Gespreksvragen die per kandidaat verschillen",
      "Een dossier waarin de onderbouwing van een keuze vastligt"
    ],
    "faq": [
      {
        "q": "Mogen we een assessment verplichten bij een sollicitatie?",
        "a": "Je mag een assessment als onderdeel van de procedure stellen, zolang de kandidaat weet wat er gemeten wordt en de uitslag terugkrijgt. hrmforce stuurt het rapport standaard ook naar de kandidaat."
      },
      {
        "q": "Werkt dit ook voor zij-instromers zonder zorgachtergrond?",
        "a": "Ja. Juist bij zij-instroom zegt eerdere ervaring weinig. De meting kijkt naar houding, leerbaarheid en veerkracht, en die voorspellen meer dan een cv uit een andere sector."
      }
    ],
    "thema": "welzijn",
    "omslag": "/media/kc-omslag/welzijn-0.svg"
  },
  "onderwijs": {
    "kort": "Onderwijs",
    "metaTitle": "Assessments voor het onderwijs | Leraren, schoolleiders en teams",
    "metaDescription": "Assessments voor scholen en onderwijsinstellingen: werven van leraren, ontwikkelgesprekken met inhoud en teams die beter samenwerken.",
    "h1": "Assessments voor het onderwijs",
    "intro": [
      "Scholen werven in een krappe markt en houden tegelijk het gesprek over ontwikkeling gaande met mensen die er al jaren werken. Beide vragen om een beeld dat verder gaat dan een lesbezoek en een functioneringsformulier.",
      "hrmforce meet competenties, drijfveren en samenwerking, met rapportages die een schoolleider zelf kan lezen en bespreken."
    ],
    "rollenKop": "Functies in het onderwijs",
    "rollenTekst": "Onderwijsinstellingen zetten assessments in bij werving en bij ontwikkeling, en soms bij een reorganisatie. Dit zijn de rollen die het vaakst langskomen.",
    "rollen": [
      "Leraren in het primair, voortgezet en middelbaar beroepsonderwijs",
      "Onderwijsassistenten en instructeurs",
      "Teamleiders, afdelingsleiders en schoolleiders",
      "Zij-instromers uit een andere sector"
    ],
    "lastigKop": "Het ontwikkelgesprek dat elk jaar hetzelfde is",
    "lastigTekst": "In veel scholen gaat het jaargesprek over lesbezoek en een formulier dat sinds vorig jaar nauwelijks veranderde. Leraren ervaren het als een verplichting, leidinggevenden als iets dat af moet. 360 graden feedback met collega's en leerlingen als bron brengt daar inhoud in: je bespreekt gedrag dat anderen zien, niet een indruk van één les. Bij werving speelt iets anders. Een zij-instromer heeft geen onderwijservaring, en de vraag is of hij een klas aankan.",
    "assessmentsKop": "Welke assessments in het onderwijs worden gebruikt",
    "assessments": [
      {
        "slug": "360-graden-feedback",
        "waarom": "Haalt het beeld op van collega's, leidinggevende en waar passend leerlingen."
      },
      {
        "slug": "competentie-check",
        "waarom": "Meet tegen de competenties uit je eigen onderwijskader."
      },
      {
        "slug": "drijfverentest",
        "waarom": "Geeft richting in loopbaangesprekken met mensen die er al lang werken."
      },
      {
        "slug": "mentale-veerkracht-scan",
        "waarom": "Laat zien hoe iemand omgaat met werkdruk, wat in het onderwijs zwaar telt."
      }
    ],
    "aanpakKop": "Hoe een school het inricht",
    "aanpak": [
      "Je legt het competentiekader van de school vast in de portal. De rapportage meet daartegen, dus in de taal die het team al kent.",
      "Voor de jaarcyclus zet je 360 graden feedback in, één keer per jaar of per twee jaar, met een vast moment in de agenda.",
      "Bij werving krijgt een kandidaat een korte set voor het tweede gesprek, en zie je als schoolleider waar je op doorvraagt."
    ],
    "opleverKop": "Wat het oplevert",
    "opleverTekst": "Een onderwijsinstelling met ongeveer 320 medewerkers maakte ontwikkelgesprekken concreter met 360 graden feedback en competentieprofielen per rol. De gesprekken duurden niet langer, wel gingen ze ergens over.",
    "oplever": [
      "Jaargesprekken met inhoud in plaats van een formulier",
      "Zicht op zij-instromers voordat ze voor de klas staan",
      "Een gedeeld beeld binnen een team over wat er van een rol wordt verwacht"
    ],
    "faq": [
      {
        "q": "Mogen leerlingen feedback geven?",
        "a": "Dat kan, en het werkt in het voortgezet en middelbaar beroepsonderwijs vaak sterk. Je bepaalt zelf welke bronnen meedoen en hoeveel gewicht ze krijgen."
      },
      {
        "q": "Werkt dit binnen de cao en het gesprekscyclusbeleid?",
        "a": "De rapportage is een hulpmiddel bij het gesprek, geen beoordeling op zichzelf. Scholen nemen het meestal op in de bestaande cyclus, zonder die te wijzigen."
      }
    ],
    "thema": "modellen",
    "omslag": "/media/kc-omslag/modellen-7.svg"
  },
  "industrie": {
    "kort": "Industrie",
    "metaTitle": "Assessments voor de industrie | Selectie en ontwikkeling in productie",
    "metaDescription": "Assessments voor productiebedrijven: operators, technici en teamleiders selecteren op veiligheidsbewustzijn, nauwkeurigheid en leerbaarheid.",
    "h1": "Assessments voor de industrie",
    "intro": [
      "Een productielijn staat of valt bij de mensen die eraan werken. Een operator die instructies verkeerd leest kost stilstand, een technicus die niet bijleert houdt een storing langer in stand. Een meting vooraf laat zien wie het tempo en de zorgvuldigheid aankan.",
      "hrmforce meet capaciteiten, veiligheidsbewustzijn en werkhouding online, ook voor kandidaten die het Nederlands beperkt beheersen."
    ],
    "rollenKop": "Functies in de industrie waar een meting verschil maakt",
    "rollenTekst": "Hoe technischer de rol, hoe groter het verschil tussen iemand die de theorie kent en iemand die hem toepast. Deze functies komen het vaakst voorbij.",
    "rollen": [
      "Operators en productiemedewerkers in ploegendienst",
      "Onderhoudstechnici en storingsmonteurs",
      "Teamleiders en shiftleaders op de vloer",
      "Kwaliteitsmedewerkers en procestechnologen"
    ],
    "lastigKop": "Waarom een cv in de industrie weinig voorspelt",
    "lastigTekst": "Veel kandidaten leren het vak in de praktijk, zonder diploma dat het vastlegt. Twee mensen met dezelfde vijf jaar ervaring verschillen sterk in hoe snel ze een nieuwe machine oppakken. Een capaciteitentest laat dat verschil zien in een halfuur. Voor werk met veiligheidsrisico's telt daarnaast hoe iemand omgaat met regels wanneer de druk oploopt, en dat is een vraag over gedrag, niet over kennis.",
    "assessmentsKop": "Welke assessments in de industrie worden gebruikt",
    "assessments": [
      {
        "slug": "cognitieve-test",
        "waarom": "Meet leervermogen en probleemoplossend denken, los van opleiding en taal."
      },
      {
        "slug": "disc-test",
        "waarom": "Laat zien hoe iemand communiceert op de vloer en reageert wanneer het tempo oploopt."
      },
      {
        "slug": "competentie-check",
        "waarom": "Toetst de competenties uit je eigen functieprofiel, bijvoorbeeld nauwkeurigheid en zelfstandigheid."
      },
      {
        "slug": "lean-scan",
        "waarom": "Brengt in beeld hoe een team naar verspilling en verbetering kijkt."
      }
    ],
    "aanpakKop": "Hoe een productiebedrijf het inricht",
    "aanpak": [
      "Je legt per functiegroep een profiel vast, bijvoorbeeld operator, technicus en teamleider. Dat profiel bepaalt welke vragenlijsten een kandidaat krijgt.",
      "Kandidaten vullen in op hun telefoon, ook buiten kantooruren. De capaciteitentest werkt met figuren en getallen, zodat taal minder meeweegt.",
      "De uitslag komt binnen als een matchscore per profiel. De teamleider ziet in één beeld waar het verschil zit met de rest van de ploeg."
    ],
    "opleverKop": "Wat het oplevert",
    "opleverTekst": "Productiebedrijven zetten de meting vooral in aan de voorkant, bij bureaus en uitzendkrachten. Een gedeeld profiel scheelt kandidaten die na twee weken afhaken omdat het werk anders bleek dan verwacht.",
    "oplever": [
      "Minder wisselingen in de ploeg",
      "Een objectieve tweede mening naast het gesprek met de leidinggevende",
      "Zicht op wie doorgroeit naar allround of teamleider"
    ],
    "faq": [
      {
        "q": "Kunnen kandidaten die weinig Nederlands spreken meedoen?",
        "a": "Ja. De vragenlijsten staan in zes talen en de capaciteitentest leunt op figuren en getallen in plaats van taal."
      },
      {
        "q": "Kunnen we onze eigen competenties gebruiken?",
        "a": "Ja. Je legt je eigen functieprofiel vast in de portal, en de rapportage meet daartegen af."
      }
    ],
    "thema": "hr",
    "omslag": "/media/kc-omslag/hr-1.svg"
  },
  "overheid": {
    "kort": "Overheid",
    "metaTitle": "Assessments voor de overheid | Selectie, ontwikkeling en mobiliteit",
    "metaDescription": "Assessments voor gemeenten, provincies en uitvoeringsorganisaties: onderbouwde selectie, loopbaanmobiliteit en ontwikkelgesprekken.",
    "h1": "Assessments voor de overheid",
    "intro": [
      "Bij de overheid ligt elke benoeming onder een vergrootglas. Een keuze moet uitlegbaar zijn aan de kandidaat, aan de ondernemingsraad en soms aan de politiek. Een gevalideerde meting geeft die onderbouwing, zonder dat het gesprek eromheen verdwijnt.",
      "hrmforce levert rapportages die vastleggen wat is gemeten en waarop de conclusie rust."
    ],
    "rollenKop": "Functies bij de overheid waar assessments worden ingezet",
    "rollenTekst": "Overheidsorganisaties gebruiken assessments in de breedte, van uitvoering tot management. Dit zijn de meest voorkomende toepassingen.",
    "rollen": [
      "Beleidsmedewerkers en adviseurs met veel afstemming",
      "Klantcontactmedewerkers aan de balie en de telefoon",
      "Handhavers en toezichthouders, met gedrag onder spanning",
      "Afdelingshoofden en programmamanagers"
    ],
    "lastigKop": "De uitlegbaarheid van een benoeming",
    "lastigTekst": "Een sollicitatiecommissie bestaat vaak uit vier tot zes mensen met verschillende beelden van dezelfde kandidaat. Zonder gedeelde taal wint degene die het overtuigendst praat. Een rapport met scores op dezelfde dimensies geeft de commissie een startpunt waar iedereen vanaf werkt. Bij interne mobiliteit speelt iets anders: een medewerker die twintig jaar hetzelfde doet weet zelf niet altijd waar hij nog naartoe kan.",
    "assessmentsKop": "Welke assessments bij de overheid worden gebruikt",
    "assessments": [
      {
        "slug": "competentie-check",
        "waarom": "Meet tegen het competentieprofiel dat in veel overheidsorganisaties al vastligt."
      },
      {
        "slug": "drijfverentest",
        "waarom": "Laat zien wat iemand motiveert, wat helpt bij loopbaanvragen en interne mobiliteit."
      },
      {
        "slug": "360-graden-feedback",
        "waarom": "Haalt het beeld op van collega's, leidinggevende en samenwerkingspartners."
      },
      {
        "slug": "loopbaanwaarden",
        "waarom": "Geeft richting bij medewerkers die vastlopen in hun huidige rol."
      }
    ],
    "aanpakKop": "Hoe een overheidsorganisatie het inricht",
    "aanpak": [
      "Het bestaande competentiewoordenboek gaat in de portal. Je meet dus tegen je eigen taal, niet tegen een standaardlijst.",
      "Voor selectie krijgt elke kandidaat dezelfde set. De commissie ziet de uitslag pas na het eerste gesprek, zodat het beeld niet vooraf wordt gekleurd.",
      "Voor mobiliteit start je met drijfveren en loopbaanwaarden, en volgt een gesprek met een loopbaanadviseur."
    ],
    "opleverKop": "Wat het oplevert",
    "opleverTekst": "Een gedeeld beeld vooraf verkort de nabespreking. Commissies die met dezelfde dimensies werken komen sneller tot een keuze en leggen die beter vast.",
    "oplever": [
      "Een onderbouwing die je aan de kandidaat kunt uitleggen",
      "Minder verschil van inzicht binnen de commissie",
      "Zicht op interne kandidaten die je anders over het hoofd ziet"
    ],
    "faq": [
      {
        "q": "Voldoet dit aan de AVG?",
        "a": "De gegevens staan binnen de Europese Unie, de kandidaat geeft toestemming en krijgt het rapport. Bewaartermijnen stel je zelf in per organisatie."
      },
      {
        "q": "Kunnen we ons eigen competentiewoordenboek gebruiken?",
        "a": "Ja. Dat wordt ingelezen in de portal, inclusief de niveaubeschrijvingen die je al hanteert."
      }
    ],
    "thema": "modellen",
    "omslag": "/media/kc-omslag/modellen-2.svg"
  },
  "zakelijk": {
    "kort": "Zakelijke dienstverlening",
    "metaTitle": "Assessments voor zakelijke dienstverlening | Adviseurs en consultants",
    "metaDescription": "Assessments voor advies-, accountants- en consultancykantoren: selecteren op analytisch vermogen, klantgerichtheid en groeipotentieel.",
    "h1": "Assessments voor zakelijke dienstverlening",
    "intro": [
      "In advieswerk verkoop je mensen. Een junior die na twee jaar vertrekt kost een kantoor de investering in opleiding en het vertrouwen van de klant. Een meting vooraf laat zien wie het analytische werk aankan en wie zich bij een klant staande houdt.",
      "hrmforce meet capaciteiten, drijfveren en gedrag in een halfuur, met een rapport dat de partner zelf leest."
    ],
    "rollenKop": "Functies in de zakelijke dienstverlening",
    "rollenTekst": "Wie scherp analyseert is daarmee nog geen adviseur waar klanten om vragen. Dat verschil zit in gedrag. Deze rollen komen het vaakst langs.",
    "rollen": [
      "Junior adviseurs en trainees, vaak direct van de universiteit",
      "Accountants en fiscalisten met een eigen klantenportefeuille",
      "Consultants die bij klanten op locatie werken",
      "Partners en teamleiders die anderen laten groeien"
    ],
    "lastigKop": "Waarom cijfers van de universiteit weinig zeggen",
    "lastigTekst": "Kantoren werven uit dezelfde vijver: afgestudeerden met vergelijkbare cijfers en stages. Op papier lijken ze op elkaar. Het verschil blijkt pas in het derde jaar, wanneer de een zelfstandig een klantgesprek voert en de ander nog steeds op instructies wacht. Drijfveren en werkhouding voorspellen dat verschil eerder dan een cijferlijst. Bij doorstroom naar partner speelt daarnaast of iemand het werk van anderen wil laten slagen, of dat vooral zelf wil doen.",
    "assessmentsKop": "Welke assessments in de zakelijke dienstverlening worden gebruikt",
    "assessments": [
      {
        "slug": "cognitieve-test",
        "waarom": "Meet analytisch vermogen, wat in advieswerk het zwaarst weegt bij starters."
      },
      {
        "slug": "drijfverentest",
        "waarom": "Laat zien wat iemand aan het werk houdt, wat helpt bij het inschatten van verloop."
      },
      {
        "slug": "leiderschapstest",
        "waarom": "Geeft richting bij de doorstroom van senior naar teamleider of partner."
      },
      {
        "slug": "360-graden-feedback",
        "waarom": "Haalt op hoe klanten en collega's het gedrag van een adviseur ervaren."
      }
    ],
    "aanpakKop": "Hoe een kantoor het inricht",
    "aanpak": [
      "Voor de traineeselectie krijgt elke kandidaat dezelfde set: capaciteiten en drijfveren. Dat maakt een lichting onderling vergelijkbaar.",
      "Voor ervaren adviseurs ligt de nadruk op gedrag en samenwerking, met 360 graden feedback vanuit klanten en collega's.",
      "De uitslag gaat mee in het jaargesprek, zodat ontwikkelafspraken op iets rusten dat je een jaar later opnieuw kunt meten."
    ],
    "opleverKop": "Wat het oplevert",
    "opleverTekst": "Kantoren die de meting aan de voorkant zetten houden hun traineelichting langer vast, en zien eerder wie zich richting klantverantwoordelijkheid beweegt.",
    "oplever": [
      "Vergelijkbare beoordeling binnen een lichting",
      "Eerder zicht op wie richting partner groeit",
      "Ontwikkelafspraken die je opnieuw kunt meten"
    ],
    "faq": [
      {
        "q": "Hoe lang duurt een traineeselectie met assessments?",
        "a": "De kandidaat is ongeveer 45 minuten bezig met capaciteiten en drijfveren. Het rapport staat direct klaar, dus de doorlooptijd van je procedure verandert nauwelijks."
      },
      {
        "q": "Kunnen we de uitslag met de kandidaat bespreken?",
        "a": "Ja, en dat werkt vaak in je voordeel. Kandidaten die een terugkoppeling krijgen waarderen de procedure hoger, ook wanneer ze worden afgewezen."
      }
    ],
    "thema": "cognitie",
    "omslag": "/media/kc-omslag/cognitie-3.svg"
  },
  "retail": {
    "kort": "Retail en e-commerce",
    "metaTitle": "Assessments voor retail en e-commerce | Werven op volume",
    "metaDescription": "Assessments voor winkelketens en webshops: snel selecteren op klantgerichtheid en werkhouding, met minder verloop op de vloer.",
    "h1": "Assessments voor retail en e-commerce",
    "intro": [
      "Retail werft in aantallen. Een filiaalmanager voert per maand tien gesprekken en heeft geen dagdeel per kandidaat. Een korte meting vooraf haalt de kandidaten naar voren die passen bij het werk op de vloer.",
      "hrmforce levert die meting in tien tot vijftien minuten, op de telefoon van de kandidaat."
    ],
    "rollenKop": "Functies in retail en e-commerce",
    "rollenTekst": "De meeste vacatures zitten op de vloer, en juist daar loopt het verloop op. Dit zijn de rollen waar retailers meten.",
    "rollen": [
      "Verkoopmedewerkers en kassamedewerkers, vaak parttime",
      "Filiaalmanagers en assistent-managers",
      "Medewerkers klantenservice en webcare",
      "Orderpickers en medewerkers in het distributiecentrum"
    ],
    "lastigKop": "Volume werven zonder de selectie te verliezen",
    "lastigTekst": "Wanneer een keten honderd vacatures per kwartaal vult, verschuift de vraag van wie de beste is naar wie er blijft. Een medewerker die na zes weken stopt kost inwerktijd van de hele ploeg. Klantgerichtheid en doorzettingsvermogen laten zich meten, en dat werkt beter dan een gesprek van twintig minuten waarin iedereen zegt graag met mensen te werken. Voor filiaalmanagers ligt het anders: daar bepaalt de stijl van aansturen hoeveel van hun team blijft.",
    "assessmentsKop": "Welke assessments in retail worden gebruikt",
    "assessments": [
      {
        "slug": "disc-test",
        "waarom": "Laat in een kort rapport zien hoe iemand met klanten en collega's omgaat."
      },
      {
        "slug": "verkoopvaardigheden",
        "waarom": "Meet het gedrag dat verkoop op de vloer vraagt, van benaderen tot afronden."
      },
      {
        "slug": "competentie-check",
        "waarom": "Toetst klantgerichtheid en zelfstandigheid tegen je eigen profiel."
      },
      {
        "slug": "leiderschapstest",
        "waarom": "Geeft filiaalmanagers zicht op hun stijl van aansturen."
      }
    ],
    "aanpakKop": "Hoe een retailer het inricht",
    "aanpak": [
      "De uitnodiging gaat mee in de sollicitatiebevestiging. Kandidaten vullen dezelfde avond in, op hun telefoon.",
      "De filiaalmanager ziet een matchscore per vacature, met twee gespreksvragen. Meer is er op dit volume niet nodig.",
      "Voor managementposities voeg je een tweede ronde toe met de leiderschapstest."
    ],
    "opleverKop": "Wat het oplevert",
    "opleverTekst": "Een keten die meet aan de voorkant nodigt minder mensen uit en houdt meer over. Het gesprek gaat over hoe iemand een drukke zaterdag aanpakt, niet over de standaardvragen.",
    "oplever": [
      "Kortere doorlooptijd per vacature",
      "Minder vertrek in de eerste twee maanden",
      "Een vergelijkbaar beeld over filialen heen"
    ],
    "faq": [
      {
        "q": "Hoe kort kan de meting zijn?",
        "a": "Voor vloerfuncties werkt een set van tien tot vijftien minuten. Langer meten levert bij dit soort rollen weinig extra voorspelling op."
      },
      {
        "q": "Werkt dit voor seizoenskrachten?",
        "a": "Ja. Juist bij korte contracten telt of iemand de periode uitdient, en dat is precies wat de meting aangeeft."
      }
    ],
    "thema": "selectie",
    "omslag": "/media/kc-omslag/selectie-4.svg"
  },
  "ict": {
    "kort": "ICT en technologie",
    "metaTitle": "Assessments voor ICT en technologie | Developers en engineers",
    "metaDescription": "Assessments voor ICT-bedrijven: leervermogen, samenwerking en teamrollen meten bij developers, engineers en teamleiders.",
    "h1": "Assessments voor ICT en technologie",
    "intro": [
      "Een technische test laat zien wat iemand vandaag kan. Hoe snel iemand een nieuwe taal of architectuur oppakt zegt meer over de vijf jaar erna. Daar meet je leervermogen voor, plus de manier waarop iemand in een team werkt.",
      "hrmforce meet dat los van de techniek, zodat de uitslag over een jaar nog klopt."
    ],
    "rollenKop": "Functies in ICT en technologie",
    "rollenTekst": "Teams in de ICT zijn klein en afhankelijk van elkaar. Eén persoon die niet meebeweegt vertraagt de rest. Dit zijn de rollen waar bedrijven meten.",
    "rollen": [
      "Developers en engineers, van junior tot lead",
      "Data- en cloudspecialisten",
      "Consultants en implementatiebegeleiders bij klanten",
      "Teamleiders, scrum masters en product owners"
    ],
    "lastigKop": "Techniek toetsen is niet hetzelfde als iemand beoordelen",
    "lastigTekst": "Veel bedrijven laten kandidaten een codeeropdracht maken en stoppen daar. Die opdracht toetst het huidige niveau, terwijl de stack over twee jaar anders is. Leervermogen voorspelt dan meer. Daarnaast draait het werk om overleg: een engineer die zijn keuzes niet uitlegt levert code op die niemand durft aan te raken. Teamrollen en communicatiestijl laten zien hoe iemand zich in een team gedraagt, ook wanneer een release onder druk staat.",
    "assessmentsKop": "Welke assessments in de ICT worden gebruikt",
    "assessments": [
      {
        "slug": "cognitieve-test",
        "waarom": "Meet abstract en numeriek redeneren, wat samenhangt met hoe snel iemand nieuwe techniek oppakt."
      },
      {
        "slug": "groepsrollen",
        "waarom": "Laat zien welke rol iemand in een team pakt, en welke rollen in je team ontbreken."
      },
      {
        "slug": "communicatiestijlen-test",
        "waarom": "Geeft zicht op hoe iemand overlegt en keuzes uitlegt."
      },
      {
        "slug": "lencioni-teamdynamiek",
        "waarom": "Brengt in beeld waar de samenwerking in een bestaand team vastloopt."
      }
    ],
    "aanpakKop": "Hoe een ICT-bedrijf het inricht",
    "aanpak": [
      "De capaciteitentest gaat vooraf aan de technische ronde. Dat scheelt technici tijd aan gesprekken die toch niet doorgaan.",
      "Voor bestaande teams meet je teamrollen en teamdynamiek in één ronde, en bespreek je de uitkomst met het team zelf.",
      "Bij doorgroei naar lead voeg je de leiderschapstest toe, want de stap van bouwen naar begeleiden gaat niet vanzelf."
    ],
    "opleverKop": "Wat het oplevert",
    "opleverTekst": "Teams die hun rolverdeling kennen ruzieën minder over werkwijze. Bij werving scheelt de voorselectie technici uren aan gesprekken.",
    "oplever": [
      "Minder technische gesprekken met kandidaten die afvallen",
      "Zicht op ontbrekende rollen in een team",
      "Een basis voor de stap van engineer naar lead"
    ],
    "faq": [
      {
        "q": "Vervangt dit een technische toets?",
        "a": "Nee. De meting zegt iets over leervermogen en samenwerking. De techniek toets je apart, en dan het liefst daarna."
      },
      {
        "q": "Hoe reageren developers hierop?",
        "a": "Beter wanneer je vooraf uitlegt wat je meet en waarom, en de uitslag met ze deelt. Een rapport dat ze zelf krijgen haalt de argwaan grotendeels weg."
      }
    ],
    "thema": "teams",
    "omslag": "/media/kc-omslag/teams-5.svg"
  },
  "bouw": {
    "kort": "Bouw",
    "metaTitle": "Assessments voor de bouw | Vakkrachten, uitvoerders en projectleiders",
    "metaDescription": "Assessments voor bouwbedrijven: veiligheidsbewustzijn, samenwerking op de bouwplaats en doorgroei van vakman naar uitvoerder.",
    "h1": "Assessments voor de bouw",
    "intro": [
      "Op een bouwplaats werken ploegen samen die elkaar vaak niet kenden. Wie de afspraken naleeft en wie onder tijdsdruk de hoek afsnijdt, bepaalt of een project veilig en op tijd oplevert. Dat gedrag laat zich vooraf meten.",
      "hrmforce meet veiligheidsbewustzijn, samenwerking en leerbaarheid, ook bij vakmensen zonder diploma op zak."
    ],
    "rollenKop": "Functies in de bouw",
    "rollenTekst": "In de bouw groeit bijna iedereen door vanaf de vloer. De vraag is wie die stap aankan. Deze rollen komen het vaakst voorbij.",
    "rollen": [
      "Timmerlieden, metselaars en installateurs",
      "Voormannen en uitvoerders op de bouwplaats",
      "Werkvoorbereiders en calculators",
      "Projectleiders met contact richting opdrachtgever"
    ],
    "lastigKop": "De stap van vakman naar uitvoerder",
    "lastigTekst": "De beste timmerman wordt vaak voorman, en daar gaat het regelmatig mis. Vakmanschap zegt weinig over het aansturen van een ploeg, het inplannen van onderaannemers of het voeren van een lastig gesprek met de opdrachtgever. Een meting vooraf laat zien of iemand die kant op wil en kan. Bij werving speelt iets anders: veiligheidsincidenten hangen vaker samen met werkhouding dan met vakkennis, en die houding zie je niet in een kennismakingsgesprek.",
    "assessmentsKop": "Welke assessments in de bouw worden gebruikt",
    "assessments": [
      {
        "slug": "competentie-check",
        "waarom": "Toetst zorgvuldigheid, zelfstandigheid en het naleven van afspraken tegen je eigen profiel."
      },
      {
        "slug": "disc-test",
        "waarom": "Laat zien hoe iemand communiceert in een ploeg en reageert wanneer het schuurt."
      },
      {
        "slug": "leiderschapstest",
        "waarom": "Geeft zicht op de stap van vakman naar voorman of uitvoerder."
      },
      {
        "slug": "cognitieve-test",
        "waarom": "Meet leervermogen, wat telt bij nieuwe technieken en bij werkvoorbereiding."
      }
    ],
    "aanpakKop": "Hoe een bouwbedrijf het inricht",
    "aanpak": [
      "Voor de vloer houd je het kort: een gedragsmeting van een kwartier, ingevuld op de telefoon.",
      "Voor doorgroei naar voorman voeg je de leiderschapstest toe, en bespreek je de uitslag in een ontwikkelgesprek.",
      "Projectleiders krijgen daarnaast een capaciteitentest, omdat planning en calculatie daar zwaarder wegen."
    ],
    "opleverKop": "Wat het oplevert",
    "opleverTekst": "Bouwbedrijven zetten de meting vooral in rond doorgroei. Een ontwikkelgesprek met een rapport erbij gaat over concreet gedrag in plaats van over gevoel.",
    "oplever": [
      "Onderbouwing bij de keuze voor een nieuwe voorman",
      "Zicht op veiligheidsgedrag voordat iemand start",
      "Minder mislukte promoties"
    ],
    "faq": [
      {
        "q": "Werkt dit voor mensen die weinig lezen?",
        "a": "De vragenlijsten zijn kort en in gewone taal. De capaciteitentest werkt met figuren, dus taal weegt daar nauwelijks mee."
      },
      {
        "q": "Kunnen we dit ook bij inleenkrachten gebruiken?",
        "a": "Ja. Veel bedrijven laten het bureau de meting afnemen en krijgen de uitslag mee bij de voordracht."
      }
    ],
    "thema": "leiderschap",
    "omslag": "/media/kc-omslag/leiderschap-0.svg"
  },
  "logistiek": {
    "kort": "Logistiek",
    "metaTitle": "Assessments voor logistiek | Distributiecentra en planning",
    "metaDescription": "Assessments voor logistieke bedrijven: werven op tempo en zorgvuldigheid, en minder verloop in het distributiecentrum.",
    "h1": "Assessments voor logistiek",
    "intro": [
      "In een distributiecentrum telt tempo, en telt nauwkeurigheid net zo hard. Een orderpicker die snel is en veel misgrijpt kost meer dan hij oplevert. Een korte meting laat zien wie dat evenwicht vasthoudt.",
      "hrmforce meet werkhouding, zorgvuldigheid en leerbaarheid in een kwartier, in zes talen."
    ],
    "rollenKop": "Functies in de logistiek",
    "rollenTekst": "De grootste aantallen zitten op de vloer, de grootste risico's bij planning en aansturing. Dit zijn de rollen waar bedrijven meten.",
    "rollen": [
      "Orderpickers, inpakkers en heftruckchauffeurs",
      "Teamleiders en shiftleaders in het distributiecentrum",
      "Planners en transportplanners",
      "Medewerkers klantenservice en logistiek administratie"
    ],
    "lastigKop": "Verloop op de vloer en druk op de planning",
    "lastigTekst": "Distributiecentra werven doorlopend en verliezen doorlopend. Een deel van dat verloop hangt samen met werk dat anders bleek dan de kandidaat verwachtte: de kou, het tempo, de ploegendienst. Wie dat vooraf meet, nodigt andere mensen uit. Bij planners speelt iets anders: daar bepaalt het omgaan met verstoringen hoe de dag verloopt, en dat is een vraag over stressbestendigheid en overzicht houden.",
    "assessmentsKop": "Welke assessments in de logistiek worden gebruikt",
    "assessments": [
      {
        "slug": "competentie-check",
        "waarom": "Toetst nauwkeurigheid en doorzettingsvermogen tegen je eigen profiel."
      },
      {
        "slug": "cognitieve-test",
        "waarom": "Meet overzicht en redeneervermogen, wat bij planners het zwaarst weegt."
      },
      {
        "slug": "mentale-veerkracht-scan",
        "waarom": "Laat zien hoe iemand omgaat met verstoringen en piekdrukte."
      },
      {
        "slug": "disc-test",
        "waarom": "Geeft teamleiders zicht op de manier waarop hun mensen reageren."
      }
    ],
    "aanpakKop": "Hoe een logistiek bedrijf het inricht",
    "aanpak": [
      "Voor de vloer gaat de uitnodiging direct mee met de sollicitatie. De uitslag staat er voordat de kandidaat op gesprek komt.",
      "Voor planners voeg je de capaciteitentest toe, en bespreek je het rapport in het tweede gesprek.",
      "Voor bestaande teams gebruik je een teammeting om te zien waar de aansturing knelt."
    ],
    "opleverKop": "Wat het oplevert",
    "opleverTekst": "Bedrijven die aan de voorkant meten zien het vertrek in de eerste maand teruglopen, en hoeven minder vaak dezelfde vacature opnieuw uit te zetten.",
    "oplever": [
      "Minder vertrek in de eerste vier weken",
      "Planners die piekdagen beter doorkomen",
      "Een gedeeld beeld tussen uitzendbureau en opdrachtgever"
    ],
    "faq": [
      {
        "q": "Kunnen uitzendkrachten dezelfde meting krijgen?",
        "a": "Ja. Veel bedrijven laten het bureau de meting afnemen, zodat vaste en ingeleende mensen op hetzelfde profiel worden vergeleken."
      },
      {
        "q": "Hoeveel tijd kost dit een kandidaat?",
        "a": "Voor vloerfuncties tien tot vijftien minuten, voor planners ongeveer drie kwartier."
      }
    ],
    "thema": "ontwikkeling",
    "omslag": "/media/kc-omslag/ontwikkeling-1.svg"
  },
  "financieel": {
    "kort": "Financiële dienstverlening",
    "metaTitle": "Assessments voor financiële dienstverlening | Banken en verzekeraars",
    "metaDescription": "Assessments voor banken, verzekeraars en intermediairs: integriteit, analytisch vermogen en klantgerichtheid onderbouwd meten.",
    "h1": "Assessments voor financiële dienstverlening",
    "intro": [
      "In de financiële sector ligt elke benoeming vast in een dossier. Toezichthouders vragen om onderbouwing, klanten om deskundigheid. Een gevalideerde meting geeft beide, en legt vast waarop een keuze rust.",
      "hrmforce meet analytisch vermogen, gedrag en drijfveren met rapportages die je in een dossier kunt opnemen."
    ],
    "rollenKop": "Functies in de financiële dienstverlening",
    "rollenTekst": "Hoe dichter bij de klant en bij het geld, hoe zwaarder gedrag weegt. Dit zijn de rollen waar assessments worden ingezet.",
    "rollen": [
      "Adviseurs hypotheken, pensioenen en schade",
      "Analisten, risk- en compliancemedewerkers",
      "Medewerkers klantenservice en bijzonder beheer",
      "Leidinggevenden en directieleden die getoetst worden"
    ],
    "lastigKop": "Onderbouwen wat je in een gesprek aanvoelt",
    "lastigTekst": "Een adviseur die druk voelt om targets te halen staat voor keuzes waar de klant niets van merkt. Integriteit en zorgvuldigheid laten zich niet uit een cv lezen, en in een gesprek geeft niemand het tegendeel toe. Een gedragsmeting geeft aanknopingspunten voor doorvragen. Bij toetsingen voor een leidinggevende rol telt daarnaast dat je kunt laten zien welke dimensies zijn gemeten en hoe de conclusie tot stand kwam.",
    "assessmentsKop": "Welke assessments in de financiële sector worden gebruikt",
    "assessments": [
      {
        "slug": "big-five",
        "waarom": "Geeft het persoonlijkheidsbeeld waarop zorgvuldigheid en stabiliteit zichtbaar worden."
      },
      {
        "slug": "cognitieve-test",
        "waarom": "Meet analytisch vermogen, wat bij analisten en adviseurs zwaar telt."
      },
      {
        "slug": "drijfverentest",
        "waarom": "Laat zien wat iemand drijft, wat helpt bij vragen over commerciële druk."
      },
      {
        "slug": "360-graden-feedback",
        "waarom": "Haalt op hoe collega's en klanten het gedrag ervaren, ook bij toetsingen."
      }
    ],
    "aanpakKop": "Hoe een financiële organisatie het inricht",
    "aanpak": [
      "Voor adviesfuncties meet je persoonlijkheid en drijfveren voorafgaand aan het tweede gesprek.",
      "Voor leidinggevende rollen zet je een ontwikkelassessment in, met een gesprek erna over de uitkomst.",
      "Rapportages en toestemming leg je vast in de portal, zodat het dossier compleet blijft."
    ],
    "opleverKop": "Wat het oplevert",
    "opleverTekst": "Een dossier dat laat zien wat er gemeten is, scheelt discussie achteraf. Voor de kandidaat verandert er weinig aan de doorlooptijd.",
    "oplever": [
      "Een onderbouwing die in een dossier past",
      "Gespreksvragen over gedrag in plaats van over het cv",
      "Zicht op wie klaar is voor een zwaardere rol"
    ],
    "faq": [
      {
        "q": "Hoe lang mogen we de uitslag bewaren?",
        "a": "Dat bepaal je zelf per organisatie in de portal. De kandidaat krijgt het rapport en kan verwijdering vragen."
      },
      {
        "q": "Is de meting wetenschappelijk onderbouwd?",
        "a": "De vragenlijsten zijn genormeerd en de onderbouwing staat per test op de assessmentpagina, inclusief de gebruikte modellen en bronnen."
      }
    ],
    "thema": "assessment",
    "omslag": "/media/kc-omslag/assessment-2.svg"
  },
  "nonprofit": {
    "kort": "Non-profit",
    "metaTitle": "Assessments voor non-profit | Stichtingen en verenigingen",
    "metaDescription": "Assessments voor stichtingen, goede doelen en verenigingen: werven op drijfveren en samenwerking, met een beperkt budget.",
    "h1": "Assessments voor non-profit",
    "intro": [
      "Non-profitorganisaties werven mensen die voor de zaak komen en voor het salaris blijven zitten. Dat vraagt een scherp beeld van drijfveren, want iemand die alleen de missie deelt houdt het werk zelf niet altijd vol.",
      "hrmforce meet drijfveren, samenwerking en veerkracht, in een opzet die ook past bij een klein wervingsbudget."
    ],
    "rollenKop": "Functies in de non-profit",
    "rollenTekst": "Veel non-profits werken met een kleine vaste kern en een grote schil vrijwilligers. Dit zijn de rollen waar een meting helpt.",
    "rollen": [
      "Programmamedewerkers en projectleiders",
      "Fondsenwervers en relatiebeheerders",
      "Coördinatoren van vrijwilligers",
      "Bestuurders en directeuren van kleine organisaties"
    ],
    "lastigKop": "Betrokkenheid is geen selectiecriterium",
    "lastigTekst": "Bij een goededoelenorganisatie solliciteren mensen die de missie belangrijk vinden. Dat geldt voor bijna alle kandidaten, dus het onderscheidt niet. Wat wel onderscheidt is hoe iemand omgaat met beperkte middelen, met vrijwilligers die je niet kunt aansturen en met werk dat nooit af is. Drijfveren en veerkracht geven daar zicht op. Bij coördinatoren telt daarnaast of iemand kan sturen zonder formele bevoegdheid.",
    "assessmentsKop": "Welke assessments in de non-profit worden gebruikt",
    "assessments": [
      {
        "slug": "drijfverentest",
        "waarom": "Laat zien wat iemand aan het werk houdt wanneer de middelen beperkt zijn."
      },
      {
        "slug": "mentale-veerkracht-scan",
        "waarom": "Geeft zicht op herstel en grenzen, bij werk dat emotioneel kan wegen."
      },
      {
        "slug": "groepsrollen",
        "waarom": "Brengt in kaart hoe iemand zich in een klein team beweegt."
      },
      {
        "slug": "loopbaanwaarden",
        "waarom": "Helpt bij medewerkers die jaren op dezelfde plek zitten."
      }
    ],
    "aanpakKop": "Hoe een non-profit het inricht",
    "aanpak": [
      "Je start met één vragenlijst per vacature, meestal drijfveren. Dat houdt het betaalbaar en levert het meeste op.",
      "Voor coördinatoren voeg je groepsrollen toe, zodat je ziet hoe iemand een vrijwilligersgroep bij elkaar houdt.",
      "Voor het zittende team werkt een korte teammeting, één keer per jaar."
    ],
    "opleverKop": "Wat het oplevert",
    "opleverTekst": "Een kleine organisatie merkt het snelst wanneer iemand niet past. Een meting vooraf voorkomt een misser die een team van acht mensen een jaar kost.",
    "oplever": [
      "Selectie die verder kijkt dan betrokkenheid bij de zaak",
      "Zicht op veerkracht bij emotioneel zwaar werk",
      "Een teambeeld zonder een duur traject"
    ],
    "faq": [
      {
        "q": "Is dit betaalbaar voor een kleine stichting?",
        "a": "Je kunt losse afnames doen via de shop, zonder abonnement. Vanaf een stuk of vijftien per jaar wordt een licentie voordeliger."
      },
      {
        "q": "Kunnen we dit ook voor vrijwilligers gebruiken?",
        "a": "Ja, en dan het liefst als ontwikkelinstrument. Een vrijwilliger die een terugkoppeling krijgt blijft langer betrokken."
      }
    ],
    "thema": "drijfveren",
    "omslag": "/media/kc-omslag/drijfveren-3.svg"
  },
  "horeca": {
    "kort": "Horeca en recreatie",
    "metaTitle": "Assessments voor horeca en recreatie | Werven en inwerken",
    "metaDescription": "Assessments voor horeca, hotels en recreatiebedrijven: selecteren op gastgerichtheid en tempo, met minder uitval in het seizoen.",
    "h1": "Assessments voor horeca en recreatie",
    "intro": [
      "Horeca werft in pieken. Voor het seizoen begint moeten tientallen mensen binnen zijn, en halverwege juli valt een deel alsnog af. Een korte meting laat vooraf zien wie het tempo en het late werk volhoudt.",
      "hrmforce meet gastgerichtheid, werkhouding en veerkracht in een kwartier, op de telefoon van de kandidaat."
    ],
    "rollenKop": "Functies in horeca en recreatie",
    "rollenTekst": "Het meeste verloop zit bij de mensen die de gast zien. Dit zijn de rollen waar bedrijven meten.",
    "rollen": [
      "Bediening, bar en keukenmedewerkers",
      "Receptiemedewerkers en gastheren",
      "Shiftleaders en assistent-managers",
      "Animatie- en recreatiemedewerkers"
    ],
    "lastigKop": "Uitval in het seizoen",
    "lastigTekst": "Een seizoenskracht die in juli stopt kost meer dan de wervingskosten, want er is geen tijd om iemand nieuws in te werken. Een deel van die uitval is te zien aankomen: lange dagen, laat werken en een baas die op drukke avonden kortaf is, dat past niet bij iedereen. Wie vooraf meet op werkhouding en veerkracht nodigt andere kandidaten uit. Bij shiftleaders telt hoe iemand een ploeg door een volle avond trekt.",
    "assessmentsKop": "Welke assessments in de horeca worden gebruikt",
    "assessments": [
      {
        "slug": "disc-test",
        "waarom": "Laat in een kort rapport zien hoe iemand met gasten en collega's omgaat."
      },
      {
        "slug": "competentie-check",
        "waarom": "Toetst gastgerichtheid en doorzettingsvermogen tegen je eigen profiel."
      },
      {
        "slug": "mentale-veerkracht-scan",
        "waarom": "Geeft zicht op herstel na lange dagen en drukke weekenden."
      },
      {
        "slug": "leiderschapstest",
        "waarom": "Voor shiftleaders die een ploeg aansturen tijdens de piek."
      }
    ],
    "aanpakKop": "Hoe een horecabedrijf het inricht",
    "aanpak": [
      "De uitnodiging gaat mee met de sollicitatiebevestiging, zodat de uitslag er is voor het eerste gesprek.",
      "De bedrijfsleider ziet een matchscore en twee gespreksvragen. Meer is bij dit volume niet nodig.",
      "Voor leidinggevenden voeg je een tweede ronde toe, bij voorkeur voor het seizoen begint."
    ],
    "opleverKop": "Wat het oplevert",
    "opleverTekst": "Een bedrijf dat voor het seizoen meet begint met een ploeg die past bij het werk, en hoeft halverwege minder bij te werven.",
    "oplever": [
      "Minder uitval halverwege het seizoen",
      "Kortere inwerktijd doordat de match beter is",
      "Een vast beeld over vestigingen heen"
    ],
    "faq": [
      {
        "q": "Is dit niet te zwaar voor een bijbaan?",
        "a": "De meting voor vloerfuncties duurt een kwartier. Kandidaten ervaren het meestal als een serieuze werkgever, zolang je uitlegt waarom je het vraagt."
      },
      {
        "q": "Kunnen scholieren meedoen?",
        "a": "Ja, vanaf zestien jaar. De normgroep houdt rekening met leeftijd, zodat een scholier niet tegen een beroepsgroep wordt afgezet."
      }
    ],
    "thema": "loopbaan",
    "omslag": "/media/kc-omslag/loopbaan-4.svg"
  },
  "agrofood": {
    "kort": "Agri en food",
    "metaTitle": "Assessments voor agri en food | Productie, teelt en voedselveiligheid",
    "metaDescription": "Assessments voor agri- en foodbedrijven: werven op zorgvuldigheid en veiligheidsgedrag, en doorgroei van medewerker naar teamleider.",
    "h1": "Assessments voor agri en food",
    "intro": [
      "In de voedingsindustrie hangt aan één verkeerde handeling een terugroepactie. Zorgvuldigheid en het naleven van protocollen wegen daarom zwaarder dan snelheid. Dat gedrag laat zich vooraf meten.",
      "hrmforce meet werkhouding, nauwkeurigheid en leerbaarheid, in zes talen en zonder dat lezen zwaar meetelt."
    ],
    "rollenKop": "Functies in agri en food",
    "rollenTekst": "Veel bedrijven werken met een vaste kern en een grote flexibele schil, vaak internationaal. Dit zijn de rollen waar een meting helpt.",
    "rollen": [
      "Productiemedewerkers en machineoperators",
      "Medewerkers teelt, oogst en verwerking",
      "Kwaliteitsmedewerkers en HACCP-verantwoordelijken",
      "Teamleiders en planners"
    ],
    "lastigKop": "Protocollen naleven wanneer het tempo oploopt",
    "lastigTekst": "De meeste voedselveiligheidsincidenten ontstaan niet uit onwetendheid maar uit een afweging op de vloer, op een moment dat de lijn stilstaat en iedereen haast heeft. Wie geneigd is de regel te volgen wanneer dat ongemakkelijk is, is te herkennen aan de hand van gedragsvragen. Bij internationale ploegen speelt daarnaast taal: instructies worden geknikt en niet begrepen. Een capaciteitentest zonder taal geeft dan een eerlijker beeld.",
    "assessmentsKop": "Welke assessments in agri en food worden gebruikt",
    "assessments": [
      {
        "slug": "competentie-check",
        "waarom": "Toetst nauwkeurigheid en het naleven van afspraken tegen je eigen profiel."
      },
      {
        "slug": "cognitieve-test",
        "waarom": "Meet leervermogen met figuren en getallen, zodat taal minder meeweegt."
      },
      {
        "slug": "disc-test",
        "waarom": "Laat zien hoe iemand reageert wanneer het tempo oploopt."
      },
      {
        "slug": "lean-scan",
        "waarom": "Brengt in beeld hoe een team naar verspilling en verbetering kijkt."
      }
    ],
    "aanpakKop": "Hoe een agri- of foodbedrijf het inricht",
    "aanpak": [
      "Voor de vloer houd je het kort, met een gedragsmeting in de taal van de kandidaat.",
      "Voor kwaliteitsfuncties voeg je de capaciteitentest toe, omdat daar redeneervermogen zwaarder telt.",
      "Voor doorgroei naar teamleider gebruik je een ontwikkelassessment en een gesprek over de uitkomst."
    ],
    "opleverKop": "Wat het oplevert",
    "opleverTekst": "Bedrijven die op de vloer meten zien minder wisselingen in de ploeg en kunnen hun keuze onderbouwen wanneer een auditor ernaar vraagt.",
    "oplever": [
      "Zicht op veiligheidsgedrag voordat iemand start",
      "Een eerlijker beeld bij anderstalige kandidaten",
      "Onderbouwing bij doorgroei naar teamleider"
    ],
    "faq": [
      {
        "q": "Werkt dit voor arbeidsmigranten?",
        "a": "Ja. De vragenlijsten staan in zes talen, en de capaciteitentest leunt op figuren in plaats van tekst."
      },
      {
        "q": "Kunnen we dit koppelen aan onze HACCP-procedure?",
        "a": "De uitslag is geen certificering, wel een onderbouwing van je selectiekeuze die je in je personeelsdossier kunt opnemen."
      }
    ],
    "thema": "product",
    "omslag": "/media/kc-omslag/product-5.svg"
  },
  "energie": {
    "kort": "Energie en utilities",
    "metaTitle": "Assessments voor energie en utilities | Technici en projectleiders",
    "metaDescription": "Assessments voor energiebedrijven en netbeheerders: werven van technici, veiligheidsgedrag meten en zij-instroom beoordelen.",
    "h1": "Assessments voor energie en utilities",
    "intro": [
      "De energiesector werft sneller dan de opleidingen mensen afleveren. Een groeiend deel van de instroom komt uit een andere sector, zonder technische achtergrond. De vraag is dan wie het vak binnen een jaar leert.",
      "hrmforce meet leervermogen en veiligheidsgedrag, los van diploma's en eerdere ervaring."
    ],
    "rollenKop": "Functies in energie en utilities",
    "rollenTekst": "Het werk gaat van de meterkast tot het hoogspanningsstation, met veiligheidsregels die zwaar wegen. Dit zijn de rollen waar bedrijven meten.",
    "rollen": [
      "Monteurs en technici in het veld",
      "Storingsmonteurs met wachtdiensten",
      "Werkvoorbereiders en projectleiders",
      "Medewerkers klantcontact en facturatie"
    ],
    "lastigKop": "Zij-instroom beoordelen zonder cv dat helpt",
    "lastigTekst": "Een kandidaat die tien jaar in de horeca werkte en monteur wil worden, is niet te beoordelen op werkervaring. Het cv zegt niets over hoe snel iemand schema's leest of een storing uitredeneert. Een capaciteitentest zegt daar wel iets over, en kost een halfuur. Daarnaast telt veiligheidsgedrag: in het veld werkt iemand alleen, en de regel geldt ook wanneer niemand meekijkt.",
    "assessmentsKop": "Welke assessments in de energiesector worden gebruikt",
    "assessments": [
      {
        "slug": "cognitieve-test",
        "waarom": "Meet leervermogen en technisch redeneren, los van opleiding."
      },
      {
        "slug": "competentie-check",
        "waarom": "Toetst zorgvuldigheid en zelfstandigheid tegen je eigen profiel."
      },
      {
        "slug": "mentale-veerkracht-scan",
        "waarom": "Geeft zicht op omgaan met wachtdiensten en storingen buiten kantooruren."
      },
      {
        "slug": "leiderschapstest",
        "waarom": "Voor de stap van technicus naar werkvoorbereider of projectleider."
      }
    ],
    "aanpakKop": "Hoe een energiebedrijf het inricht",
    "aanpak": [
      "Bij zij-instroom zet je de capaciteitentest vooraan, nog voor het eerste gesprek.",
      "Voor het veld voeg je een gedragsmeting toe met nadruk op zorgvuldigheid en zelfstandigheid.",
      "Voor doorgroei gebruik je een ontwikkelassessment, met een gesprek over de uitkomst."
    ],
    "opleverKop": "Wat het oplevert",
    "opleverTekst": "Bedrijven die zij-instroom meten halen kandidaten binnen die anders op hun cv waren afgevallen, en zien minder uitval tijdens de opleiding.",
    "oplever": [
      "Zij-instromers beoordelen op leervermogen",
      "Minder uitval tijdens het opleidingstraject",
      "Zicht op veiligheidsgedrag bij solowerk"
    ],
    "faq": [
      {
        "q": "Vervangt dit een vakopleiding?",
        "a": "Nee. De meting zegt iets over de kans dat iemand de opleiding haalt, en helpt bij de keuze wie je die opleiding aanbiedt."
      },
      {
        "q": "Hoe snel hebben we een uitslag?",
        "a": "Het rapport staat klaar zodra de kandidaat klaar is, meestal binnen het uur na de uitnodiging."
      }
    ],
    "thema": "cognitie",
    "omslag": "/media/kc-omslag/cognitie-0.svg"
  },
  "uitzend": {
    "kort": "Uitzenden en werving",
    "metaTitle": "Assessments voor uitzenden en werving | Bureaus en intercedenten",
    "metaDescription": "Assessments voor uitzendbureaus en werving- en selectiebureaus: kandidaten sneller plaatsen en het gesprek met de opdrachtgever onderbouwen.",
    "h1": "Assessments voor uitzenden en werving",
    "intro": [
      "Een bureau verkoopt een oordeel over mensen. Hoe scherper dat oordeel, hoe minder plaatsingen die na twee weken terugkomen. Een meting geeft de intercedent iets in handen dat verder gaat dan een kennismakingsgesprek van twintig minuten.",
      "hrmforce levert rapportages die je met de opdrachtgever kunt delen, met je eigen logo erop."
    ],
    "rollenKop": "Waar bureaus assessments voor inzetten",
    "rollenTekst": "Bureaus meten op twee plekken: bij de kandidaat die ze plaatsen en bij hun eigen mensen. Dit zijn de meest voorkomende toepassingen.",
    "rollen": [
      "Kandidaten voor uitzendwerk in productie, logistiek en zorg",
      "Kandidaten voor werving en selectie op vaste functies",
      "Intercedenten en recruiters van het bureau zelf",
      "Vestigingsmanagers en accountmanagers"
    ],
    "lastigKop": "Een voordracht onderbouwen bij de opdrachtgever",
    "lastigTekst": "Opdrachtgevers vragen steeds vaker waarom juist deze kandidaat. Een cv en een prettige eerste indruk zijn daarvoor dun, zeker wanneer een eerdere plaatsing is misgelopen. Een rapport dat naast het cv meegaat verandert dat gesprek: je legt uit welke dimensies je hebt gemeten en waar deze kandidaat afwijkt van het profiel. Voor het bureau zelf geldt hetzelfde: intercedenten met verschillende stijlen leveren verschillende plaatsingen op.",
    "assessmentsKop": "Welke assessments bureaus gebruiken",
    "assessments": [
      {
        "slug": "intake-candidate",
        "waarom": "Een korte meting voor de intake, bedoeld voor volume."
      },
      {
        "slug": "job-profiler",
        "waarom": "Legt het profiel van de opdrachtgever vast, zodat je kandidaten daartegen kunt afzetten."
      },
      {
        "slug": "competentie-check",
        "waarom": "Toetst de competenties die de opdrachtgever noemt."
      },
      {
        "slug": "verkoopvaardigheden",
        "waarom": "Voor de eigen intercedenten en accountmanagers."
      }
    ],
    "aanpakKop": "Hoe een bureau het inricht",
    "aanpak": [
      "Je legt per opdrachtgever een profiel vast met de job profiler. Daarna meet je elke kandidaat tegen dat profiel.",
      "De rapportage gaat in je eigen huisstijl naar de opdrachtgever, als bijlage bij de voordracht.",
      "Voor je eigen team gebruik je dezelfde instrumenten, zodat je ziet welke intercedent waar sterk in is."
    ],
    "opleverKop": "Wat het oplevert",
    "opleverTekst": "Bureaus die met een profiel werken voeren een ander gesprek met de opdrachtgever. De discussie gaat over het profiel in plaats van over een onderbuikgevoel.",
    "oplever": [
      "Minder plaatsingen die vroeg terugkomen",
      "Een voordracht met onderbouwing eronder",
      "Rapportage in je eigen huisstijl"
    ],
    "faq": [
      {
        "q": "Kunnen we de rapportage in onze eigen huisstijl krijgen?",
        "a": "Ja. De portal is als white label in te richten, met je eigen logo en kleuren in de rapportage."
      },
      {
        "q": "Wat kost het per kandidaat?",
        "a": "Bij losse afname reken je per test. Vanaf ongeveer vijftien afnames per maand is een licentie voordeliger, en dan is het aantal onbeperkt."
      }
    ],
    "thema": "selectie",
    "omslag": "/media/kc-omslag/selectie-1.svg"
  },
  "transport": {
    "kort": "Transport en mobiliteit",
    "metaTitle": "Assessments voor transport en mobiliteit | Chauffeurs en planners",
    "metaDescription": "Assessments voor transportbedrijven: chauffeurs selecteren op veiligheidsgedrag en zelfstandigheid, en planners op overzicht onder druk.",
    "h1": "Assessments voor transport en mobiliteit",
    "intro": [
      "Een chauffeur werkt de hele dag alleen, met een voertuig van veertig ton en een planning die schuift. Wie zich aan de regels houdt wanneer niemand meekijkt, bepaalt je schadecijfer. Dat gedrag laat zich vooraf meten.",
      "hrmforce meet zorgvuldigheid, zelfstandigheid en stressbestendigheid, in de taal van de kandidaat."
    ],
    "rollenKop": "Functies in transport en mobiliteit",
    "rollenTekst": "Het werk is verdeeld over de weg en de planning, met een sterke onderlinge afhankelijkheid. Dit zijn de rollen waar bedrijven meten.",
    "rollen": [
      "Vrachtwagenchauffeurs, nationaal en internationaal",
      "Bus- en taxichauffeurs met veel klantcontact",
      "Transportplanners en dispatchers",
      "Werkplaatsmedewerkers en fleetbeheerders"
    ],
    "lastigKop": "Gedrag achter het stuur is niet te observeren in een gesprek",
    "lastigTekst": "Schade en boetes hangen sterker samen met werkhouding dan met rijvaardigheid. Een chauffeur met twintig jaar ervaring die de rusttijden oprekt kost je meer dan een starter die zich aan de regels houdt. In een sollicitatiegesprek komt dat niet ter sprake. Een gedragsmeting geeft aanknopingspunten om door te vragen. Voor planners geldt iets anders: die moeten de dag herplannen terwijl vijf chauffeurs tegelijk bellen.",
    "assessmentsKop": "Welke assessments in transport worden gebruikt",
    "assessments": [
      {
        "slug": "competentie-check",
        "waarom": "Toetst zorgvuldigheid, zelfstandigheid en het naleven van afspraken."
      },
      {
        "slug": "mentale-veerkracht-scan",
        "waarom": "Geeft zicht op omgaan met files, wachttijden en werk ver van huis."
      },
      {
        "slug": "cognitieve-test",
        "waarom": "Meet overzicht en redeneervermogen, wat bij planners zwaar telt."
      },
      {
        "slug": "disc-test",
        "waarom": "Laat zien hoe iemand met klanten en met de planning communiceert."
      }
    ],
    "aanpakKop": "Hoe een transportbedrijf het inricht",
    "aanpak": [
      "Voor chauffeurs meet je gedrag in een kwartier, ingevuld op de telefoon voordat iemand op gesprek komt.",
      "Voor planners voeg je de capaciteitentest toe, omdat overzicht daar het verschil maakt.",
      "Bij internationale werving zet je de meting in de taal van de kandidaat, zodat je de houding meet en niet de taalvaardigheid."
    ],
    "opleverKop": "Wat het oplevert",
    "opleverTekst": "Bedrijven die op werkhouding meten voeren een ander gesprek met de kandidaat, en zien dat terug in schade- en verzuimcijfers over een langere periode.",
    "oplever": [
      "Zicht op regelnaleving voordat iemand de weg op gaat",
      "Planners die piekdagen doorkomen zonder de dag te verliezen",
      "Een eerlijker beeld bij anderstalige chauffeurs"
    ],
    "faq": [
      {
        "q": "Vervangt dit een rijvaardigheidstoets?",
        "a": "Nee. De rijvaardigheid toets je zoals je gewend bent. De meting gaat over houding en gedrag, en die voorspellen schade beter dan rijvaardigheid alleen."
      },
      {
        "q": "Werkt dit bij chauffeurs uit het buitenland?",
        "a": "Ja. De vragenlijsten staan in zes talen, en de capaciteitentest leunt op figuren in plaats van tekst."
      }
    ],
    "thema": "ontwikkeling",
    "omslag": "/media/kc-omslag/ontwikkeling-2.svg"
  },
  "telecom": {
    "kort": "Telecom en media",
    "metaTitle": "Assessments voor telecom en media | Klantcontact en techniek",
    "metaDescription": "Assessments voor telecom- en mediabedrijven: werven voor klantcontact, technische buitendienst en commerciële rollen.",
    "h1": "Assessments voor telecom en media",
    "intro": [
      "Telecom draait op twee soorten mensen: die met de klant aan de lijn en die bij de klant in de meterkast. Beide rollen kennen hoog verloop en korte inwerktijd. Een meting vooraf laat zien wie het werk een jaar volhoudt.",
      "hrmforce meet klantgerichtheid, stressbestendigheid en leervermogen in een kwartier tot een halfuur."
    ],
    "rollenKop": "Functies in telecom en media",
    "rollenTekst": "Het meeste volume zit in klantcontact, de grootste opleidingsinvestering bij de buitendienst. Dit zijn de rollen waar bedrijven meten.",
    "rollen": [
      "Medewerkers klantenservice en retentie",
      "Technici in de buitendienst en bij de aansluiting",
      "Accountmanagers en binnendienstverkopers",
      "Teamleiders op de klantcontactafdeling"
    ],
    "lastigKop": "Verloop op de klantcontactafdeling",
    "lastigTekst": "Een medewerker klantenservice krijgt de hele dag mensen aan de lijn die iets niet aan de praat krijgen. Wie daar na drie maanden op leegloopt, was aan de voorkant te herkennen aan een lage score op herstel en emotionele stabiliteit. Een meting van een kwartier is bij dit volume terugverdiend na één voorkomen vertrek. Bij de buitendienst weegt leervermogen zwaarder, omdat de techniek elke twee jaar verandert.",
    "assessmentsKop": "Welke assessments in telecom worden gebruikt",
    "assessments": [
      {
        "slug": "mentale-veerkracht-scan",
        "waarom": "Laat zien hoe iemand herstelt na een dag met lastige gesprekken."
      },
      {
        "slug": "disc-test",
        "waarom": "Geeft zicht op hoe iemand met klanten praat en reageert op weerstand."
      },
      {
        "slug": "cognitieve-test",
        "waarom": "Meet leervermogen, wat bij technici en bij complexe systemen telt."
      },
      {
        "slug": "verkoopvaardigheden",
        "waarom": "Voor retentie- en verkooprollen, van benaderen tot afronden."
      }
    ],
    "aanpakKop": "Hoe een telecombedrijf het inricht",
    "aanpak": [
      "Voor klantcontact gaat de meting mee in de sollicitatiebevestiging, met een uitslag voor het eerste gesprek.",
      "Voor de buitendienst zet je de capaciteitentest vooraan, zeker bij zij-instroom.",
      "Voor bestaande teams gebruik je een korte medewerkersmeting om te zien waar het verloop vandaan komt."
    ],
    "opleverKop": "Wat het oplevert",
    "opleverTekst": "Afdelingen die aan de voorkant meten zien het vertrek in het eerste kwartaal teruglopen, en houden hun opleidingsinvestering vast.",
    "oplever": [
      "Minder vertrek in het eerste kwartaal",
      "Opleidingsbudget dat bij de juiste mensen terechtkomt",
      "Zicht op wat de uitstroom veroorzaakt"
    ],
    "faq": [
      {
        "q": "Hoe kort kan de meting voor klantcontact zijn?",
        "a": "Een kwartier is genoeg voor een bruikbare voorspelling. Langer meten voegt bij dit soort rollen weinig toe."
      },
      {
        "q": "Kunnen we ook meten waarom mensen vertrekken?",
        "a": "Ja, met een exitmeting en een medewerkersonderzoek. Die twee samen laten zien of het verloop aan selectie of aan de afdeling ligt."
      }
    ],
    "thema": "teams",
    "omslag": "/media/kc-omslag/teams-3.svg"
  },
  "vastgoed": {
    "kort": "Vastgoed en facility",
    "metaTitle": "Assessments voor vastgoed en facility | Beheer en dienstverlening",
    "metaDescription": "Assessments voor vastgoedbeheerders en facilitaire organisaties: klantgerichtheid, zelfstandigheid en aansturing van serviceteams meten.",
    "h1": "Assessments voor vastgoed en facility",
    "intro": [
      "Vastgoedbeheer en facilitaire dienstverlening draaien om mensen die zelfstandig bij een klant staan. Een beheerder die een klacht laat liggen kost een contract. Een meting vooraf laat zien wie initiatief neemt en wie afwacht.",
      "hrmforce meet klantgerichtheid, zelfstandigheid en aansturing in een halfuur."
    ],
    "rollenKop": "Functies in vastgoed en facility",
    "rollenTekst": "Het werk loopt van de servicebalie tot het beheer van een portefeuille. Dit zijn de rollen waar organisaties meten.",
    "rollen": [
      "Vastgoedbeheerders en woonconsulenten",
      "Facilitair medewerkers en servicedeskmedewerkers",
      "Objectleiders en teamleiders van schoonmaak of beveiliging",
      "Makelaars en verhuuradviseurs"
    ],
    "lastigKop": "Zelfstandig werken bij de klant",
    "lastigTekst": "Een objectleider ziet zijn eigen leidinggevende soms één keer per week. De rest van de tijd staat hij bij de klant en stuurt hij een ploeg aan die hij niet zelf heeft aangenomen. Dat vraagt initiatief en het vermogen om een lastig gesprek te voeren zonder ruggespraak. Beide zijn te meten. Bij beheerders telt daarnaast hoe iemand omgaat met bewoners of huurders die boos zijn over iets waar hij zelf niets aan kan doen.",
    "assessmentsKop": "Welke assessments in vastgoed en facility worden gebruikt",
    "assessments": [
      {
        "slug": "competentie-check",
        "waarom": "Toetst klantgerichtheid en zelfstandigheid tegen je eigen profiel."
      },
      {
        "slug": "disc-test",
        "waarom": "Laat zien hoe iemand omgaat met klanten, huurders en weerstand."
      },
      {
        "slug": "conflictstijlen-test",
        "waarom": "Geeft zicht op de aanpak bij klachten en geschillen."
      },
      {
        "slug": "leiderschapstest",
        "waarom": "Voor objectleiders die een serviceteam op afstand aansturen."
      }
    ],
    "aanpakKop": "Hoe een vastgoed- of facilitaire organisatie het inricht",
    "aanpak": [
      "Voor uitvoerende rollen meet je gedrag en klantgerichtheid voor het eerste gesprek.",
      "Voor objectleiders voeg je de leiderschapstest en conflictstijlen toe, omdat daar de meeste misplaatsingen zitten.",
      "Voor het zittende team gebruik je 360 graden feedback, met de klant als een van de bronnen."
    ],
    "opleverKop": "Wat het oplevert",
    "opleverTekst": "Een beheerder matchte klantgerichtheid en zelfstandigheid voor beheer en service. Het aantal escalaties richting de accountmanager liep terug.",
    "oplever": [
      "Minder escalaties die bij de accountmanager landen",
      "Objectleiders die een gesprek zelf afronden",
      "Onderbouwing bij de keuze voor een nieuwe teamleider"
    ],
    "faq": [
      {
        "q": "Kunnen klanten meedoen aan de feedback?",
        "a": "Ja. Bij 360 graden feedback kies je zelf de bronnen, en een contactpersoon bij de klant kan daar een van zijn."
      },
      {
        "q": "Werkt dit voor schoonmaak- en beveiligingsteams?",
        "a": "Ja. Voor uitvoerende rollen houd je de meting kort, voor objectleiders ga je dieper."
      }
    ],
    "thema": "modellen",
    "omslag": "/media/kc-omslag/modellen-4.svg"
  }
};

export const SECTORSLEUTELS = Object.keys(SECTORPAGINAS);
