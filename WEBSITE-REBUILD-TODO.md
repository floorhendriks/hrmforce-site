# Werklijst website rebuild

Bron: videofeedback van Dion Smits op de nieuwe site, 3 september 2026, opname van 11:58.
Tijdstempels achter een taak verwijzen naar het moment in die opname.
Prioriteit: P1 is nu, P2 daarna, P3 afwerking, MOB is het mobiele spoor.
Uren zijn een indicatie voor handwerk. 33 taken, 82 uur.

## Fase 1: P1, 27,5 uur

### Content en materiaal
- [x] (2026-09-03) P1 · 1 u · Screenshots van de vragenlijst-interface genereren. Drie tot vijf beelden per assessment, kloppend met het echte product. Voorwaarde voor de sliders op de assessment-, oplossing- en shoppagina's. (03:29)
  3 herbruikbare SVG-mockups in public/mockups (vraag met Likert-schaal, intro, afgerond). Gebaseerd op de voorbeeldvragen op de site, geen verzonnen functionaliteit, geen pdf-download. Assessment-specifieke varianten (bv. cognitief) kunnen later.

### Sitebreed
- [x] (2026-09-03) P1 · 1 u · Menu sticky maken. Het menu verdwijnt nu bij scrollen en moet altijd zichtbaar blijven. (02:54)
  Was al sticky via global.css (header position:sticky, top:0, z-index:50), live geverifieerd op homepage.
- [x] (2026-09-03) P1 · 3 u · Herbruikbare logoslider bouwen, logo's in kleur. Voor homepage, oplossingen en training. (01:28)
  LogoSlider.astro met 22 echte klantlogo's in kleur (marquee). Logos laden eager, want lazy brak in de horizontale marquee.

### Homepage
- [x] (2026-09-03) P1 · 1 u · Hero terugbrengen tot één USP. "Binnen 24 uur reactie" werkt, "vrijblijvend advies" is geen USP en kan eruit. (00:56)
  Hero-micro in 6 talen teruggebracht tot alleen "Binnen 24 uur reactie".
- [x] (2026-09-03) P1 · 1 u · Pijn/oplossing-blok naar boven halen, direct onder de hero. Dit blok werd expliciet goed genoemd maar staat te laag. (01:20)
  Het "Het verschil / Van onderbuik naar onderbouwd"-blok (compare) staat nu direct onder de hero, boven het why-blok. Logoslider staat als dunne trustbalk tussen hero en dit blok (onder de hero, beter voor conversie).
- [x] (2026-09-03) P1 · 1 u · Logoslider direct onder de header plaatsen, logo's in kleur. (01:28)
  Op homepage direct onder de header geplaatst, de kapotte proof-strook (verzonnen bestandsnamen) vervangen. Kan desgewenst onder de hero i.p.v. erboven.

### Assessmentpagina's
- [x] (2026-09-03) P1 · 0,5 u · Hero-afbeelding verkleinen, die duwt nu de inhoud weg. (03:17)
  report-afbeelding in de hero gecapt op max-height 300px (object-fit cover), in beide templates (NL + anderstalig). NB: de report-afbeelding laadt momenteel niet (kapotte bron), zie Later opgemerkt.
- [x] (2026-09-03) P1 · 3 u · Screenshot-slider in het assessment-template. Voorbeeldvragen blijven als tekst staan. (04:32)
  "Een kijkje in de vragenlijst"-slider met de 3 mockups toegevoegd (scroll-snap), in beide templates, anderstalig vertaald. Voorbeeldvragen ongewijzigd. Live geverifieerd op NL en EN.
- [x] (2026-09-03) P1 · 7,5 u · Copy herschrijven volgens pijn, dan oplossing, voor de vijf assessments waarop geadverteerd wordt. (04:59)
  Intro's herschreven naar pijn dan oplossing voor big-five, 360-graden-feedback, drijfverentest, cognitieve-test en disc-test (de 5 bovenaan/uitgelicht). NL in assessments.js. NB: "Big Fifty Personality" is de productnaam (op basis van Big 5) en blijft staan. Let op: welke 5 er echt geadverteerd worden even bevestigen; anderstalige intro's (assessments-i18n.js) volgen nog.

### Oplossingenpagina's
- [x] (2026-09-03) P1 · 2 u · Concrete call to action per oplossing in plaats van "gratis demo". (06:42)
  Elke oplossing (matching, HR gesprekscyclus, employability, hr-analytics) heeft nu een concrete CTA die zegt wat er gebeurt.
- [x] (2026-09-03) P1 · 2 u · Aanbod specificeren. Bij de gesprekscyclus is nu onduidelijk of het om de hele cyclus gaat of om de vijf digitale gesprekken, en welke dan. (07:16)
  Verduidelijkt (na afstemming): het is de volledige jaarcyclus, met de gesprekken die je erin inzet (bila-gesprek, bila+, ontwikkelgesprek, jaargesprek).

### Tarieven
- [ ] P1 · 3 u · Eén tarievenblok met prijzen en features samen. Light, Base en Pro naast elkaar, vanaf-prijs en features in dezelfde kolom, geen losse tabel eronder. (08:58)
- [ ] P1 · 1,5 u · Implementatieprijzen als apart blok direct onder het pakketblok. Eenmalige kosten los van de licentie. (08:40)

## Fase 2: P2, 41,5 uur

### Content en materiaal
- [ ] P2 · 1 u · Voorlopige reviews plaatsen, zichtbaar gemarkeerd als voorbeeld. (02:01)
- [ ] P2 · 2 u · Foto en persoonlijk verhaal van Floor verzamelen voor Over ons. (09:22)

### Sitebreed
- [ ] P2 · 3 u · Standaardblokken boven en onder pagina's vervangen of weghalen. (00:18)
- [ ] P2 · 3 u · Herbruikbare reviewslider bouwen, met sterren en foto. (10:43)

### Homepage
- [ ] P2 · 1 u · Hero opschonen. De keuzepaden en de checklistrijtjes onder de knoppen maken het rommelig, kies er één. (01:45)
- [ ] P2 · 2 u · Reviewblok met sterren en foto's hoog op de pagina. (01:40)
- [ ] P2 · 0,5 u · Actiebutton in het middenblok, dat loopt nu dood. (02:25)

### Assessmentpagina's
- [ ] P2 · 10 u · De vijf assessmentpagina's verdiepen en verlengen. De basis is goed, de inhoud mag uitgebreider. (04:39)

### Oplossingenpagina's
- [ ] P2 · 0,5 u · Logoslider toevoegen. (05:40)
- [ ] P2 · 1,5 u · Interface-screenshots toevoegen in plaats van alleen tekst. (05:43)
- [ ] P2 · 6 u · Copy herschrijven volgens pijn, dan oplossing, voor vier oplossingenpagina's. (05:54)
- [ ] P2 · 2 u · Trainingspagina overtuigender maken, met klantlogo's en reviews. (08:00)

### Over ons
- [ ] P2 · 2 u · Floor prominent in beeld met persoonlijk verhaal en jaren ervaring. Mensen kopen van mensen. (09:33)

### Shop
- [ ] P2 · 2 u · Per product screenshots van de vragenlijst en de interface. (10:19)
- [ ] P2 · 2 u · Reviews of reviewslider in de shop. (10:43)
- [ ] P2 · 3 u · Uitleg over afname, vragenlijst en wat je terugkrijgt. Geen downloadbaar rapport. (11:11)

## Fase 3: P3, 3 uur
- [ ] P3 · 2 u · Iconen bij de sectoren zorg, onderwijs en industrie op de homepage. (02:27)
- [ ] P3 · 0,5 u · Vanaf-prijs prominenter in beeld op de assessmentpagina's. (03:09)
- [ ] P3 · 0,5 u · Op Over ons vermelden dat er met een team gewerkt wordt, zonder alle medewerkers in beeld. (09:40)

## Eigen spoor: mobiel, 10 uur
- [ ] MOB · 10 u · Mobiele weergave van alle templates doorlopen. Pas oppakken als de templates inhoudelijk vastliggen, anders doe je het werk twee keer. (11:35)

## Geen actie nodig
- Kennisbank. Werd expliciet goed bevonden en is gelijk aan wat er al was. (08:26)

## Voor livegang
- [ ] Voorlopige reviews vervangen door echte, verifieerbare reviews met naam en foto.

## Later opgemerkt
(hier zet je dingen die je onderweg tegenkomt en die niet bij je huidige taak horen)
- Het /assessments/ overzicht gaf een 404 bij bezoek (detailpagina's werken wel). Overzicht-URL of routing nakijken.
- Big Five detailpagina bevat een typo "Big Fifty Personality-vragenlijst" in een FAQ-antwoord.
- De hero-report-afbeelding op assessmentpagina's laadt niet (kapotte bron, natW 0). Overwegen te vervangen door een werkende vragenlijst-mockup (past ook bij de afspraak: geen voorbeeldrapporten).
- home.js regel 31 (nl werkwijze-lead) gebruikt een gedachtestreepje, in strijd met de stijlafspraak. Vervangen door komma.
- Base.astro herschrijft lazy afbeeldingen naar de weserv-proxy. In horizontale marquees laden off-screen lazy afbeeldingen niet. Breder nakijken of dit elders speelt.
- Live homepage liep bij aanvang achter op de broncode (oude build). Na deploy komt de nieuwe hero/logoslider door.
