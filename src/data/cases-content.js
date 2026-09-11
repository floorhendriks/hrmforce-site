// Klantcases: UI + vocab + representatieve voorbeeldcases (6 talen).
// ETHIEK: geanonimiseerde voorbeeldprofielen (sector + omvang), geen
// verzonnen klantnamen of quotes. Echte cases met naam volgen later.

export const CASE_UI = {
  nl: { meta: { title: "Klantcases - hrmforce", description: "Voorbeeldcases: hoe organisaties in uiteenlopende sectoren hrmforce inzetten voor selectie, ontwikkeling, teams en employability." }, eyebrow: "Klantcases", title: "Zo werkt onderbouwd talentmanagement in de praktijk", intro: "Filter op thema, sector of omvang. Dit zijn representatieve voorbeeldcases ter illustratie, gebaseerd op geanonimiseerde profielen; echte cases met naam volgen.", labels: { challenge: "Uitdaging", approach: "Aanpak", results: "Resultaten" }, filters: { theme: "Thema", sector: "Sector", size: "Omvang", all: "Alle", search: "Zoek op sector, thema of trefwoord...", none: "Geen cases gevonden. Pas je filters aan.", count: "cases" }, cta: { title: "Klaar om jouw case te schrijven?", text: "Bespreek met een specialist hoe een eigen portal op licentiebasis in jouw sector werkt.", primary: "Plan een demo", secondary: "Bekijk de tarieven" } },
  en: { meta: { title: "Client cases - hrmforce", description: "Example cases: how organisations across sectors use hrmforce for selection, development, teams and employability." }, eyebrow: "Client cases", title: "How evidence-based talent management works in practice", intro: "Filter by theme, sector or size. These are representative example cases for illustration, based on anonymised profiles; named real cases will follow.", labels: { challenge: "Challenge", approach: "Approach", results: "Results" }, filters: { theme: "Theme", sector: "Sector", size: "Size", all: "All", search: "Search by sector, theme or keyword...", none: "No cases found. Adjust your filters.", count: "cases" }, cta: { title: "Ready to write your case?", text: "Discuss with a specialist how a licensed portal works in your sector.", primary: "Book a demo", secondary: "View pricing" } },
  de: { meta: { title: "Kundenfälle - hrmforce", description: "Beispielfälle: wie Organisationen verschiedener Branchen hrmforce für Auswahl, Entwicklung, Teams und Beschäftigungsfähigkeit nutzen." }, eyebrow: "Kundenfälle", title: "So funktioniert fundiertes Talentmanagement in der Praxis", intro: "Filtern Sie nach Thema, Branche oder Größe. Dies sind repräsentative Beispielfälle zur Veranschaulichung, basierend auf anonymisierten Profilen; benannte echte Fälle folgen.", labels: { challenge: "Herausforderung", approach: "Ansatz", results: "Ergebnisse" }, filters: { theme: "Thema", sector: "Branche", size: "Größe", all: "Alle", search: "Suche nach Branche, Thema oder Stichwort...", none: "Keine Fälle gefunden. Passen Sie die Filter an.", count: "Fälle" }, cta: { title: "Bereit für Ihren Fall?", text: "Besprechen Sie mit einem Spezialisten, wie ein Lizenzportal in Ihrer Branche funktioniert.", primary: "Demo planen", secondary: "Preise ansehen" } },
  fr: { meta: { title: "Cas clients - hrmforce", description: "Cas d'exemple : comment des organisations de divers secteurs utilisent hrmforce pour la sélection, le développement, les équipes et l'employabilité." }, eyebrow: "Cas clients", title: "Le talent management fondé sur des preuves en pratique", intro: "Filtrez par thème, secteur ou taille. Ce sont des cas d'exemple représentatifs à titre d'illustration, basés sur des profils anonymisés ; des cas réels nommés suivront.", labels: { challenge: "Défi", approach: "Approche", results: "Résultats" }, filters: { theme: "Thème", sector: "Secteur", size: "Taille", all: "Tous", search: "Rechercher par secteur, thème ou mot-clé...", none: "Aucun cas trouvé. Ajustez vos filtres.", count: "cas" }, cta: { title: "Prêt à écrire votre cas ?", text: "Discutez avec un spécialiste du fonctionnement d'un portail sous licence dans votre secteur.", primary: "Planifier une démo", secondary: "Voir les tarifs" } },
  es: { meta: { title: "Casos de clientes - hrmforce", description: "Casos de ejemplo: cómo organizaciones de distintos sectores usan hrmforce para selección, desarrollo, equipos y empleabilidad." }, eyebrow: "Casos de clientes", title: "Así funciona la gestión del talento basada en evidencia", intro: "Filtra por tema, sector o tamaño. Son casos de ejemplo representativos a título ilustrativo, basados en perfiles anonimizados; seguirán casos reales con nombre.", labels: { challenge: "Reto", approach: "Enfoque", results: "Resultados" }, filters: { theme: "Tema", sector: "Sector", size: "Tamaño", all: "Todos", search: "Busca por sector, tema o palabra clave...", none: "No se encontraron casos. Ajusta los filtros.", count: "casos" }, cta: { title: "¿Listo para escribir tu caso?", text: "Habla con un especialista sobre cómo funciona un portal con licencia en tu sector.", primary: "Reservar una demo", secondary: "Ver precios" } },
  ro: { meta: { title: "Cazuri de clienți - hrmforce", description: "Cazuri exemplu: cum folosesc organizații din diverse sectoare hrmforce pentru selecție, dezvoltare, echipe și angajabilitate." }, eyebrow: "Cazuri de clienți", title: "Cum funcționează managementul talentelor bazat pe dovezi", intro: "Filtrează după temă, sector sau mărime. Sunt cazuri exemplu reprezentative cu scop ilustrativ, bazate pe profiluri anonimizate; vor urma cazuri reale cu nume.", labels: { challenge: "Provocare", approach: "Abordare", results: "Rezultate" }, filters: { theme: "Temă", sector: "Sector", size: "Mărime", all: "Toate", search: "Caută după sector, temă sau cuvânt-cheie...", none: "Niciun caz găsit. Ajustează filtrele.", count: "cazuri" }, cta: { title: "Gata să scrii cazul tău?", text: "Discută cu un specialist cum funcționează un portal cu licență în sectorul tău.", primary: "Programează un demo", secondary: "Vezi prețurile" } },
};

export const CASE_THEMES = {
  selectie: { nl: "Selectie", en: "Selection", de: "Auswahl", fr: "Sélection", es: "Selección", ro: "Selecție" },
  werving: { nl: "Werving", en: "Recruitment", de: "Rekrutierung", fr: "Recrutement", es: "Reclutamiento", ro: "Recrutare" },
  ontwikkeling: { nl: "Ontwikkeling", en: "Development", de: "Entwicklung", fr: "Développement", es: "Desarrollo", ro: "Dezvoltare" },
  gesprekscyclus: { nl: "Gesprekscyclus", en: "Review cycle", de: "Gesprächszyklus", fr: "Cycle d'entretiens", es: "Ciclo de evaluación", ro: "Ciclu de evaluare" },
  teams: { nl: "Teams", en: "Teams", de: "Teams", fr: "Équipes", es: "Equipos", ro: "Echipe" },
  employability: { nl: "Employability", en: "Employability", de: "Beschäftigungsfähigkeit", fr: "Employabilité", es: "Empleabilidad", ro: "Angajabilitate" },
};

export const CASE_SECTORS = {
  zorg: { nl: "Zorg", en: "Healthcare", de: "Gesundheitswesen", fr: "Santé", es: "Sanidad", ro: "Sănătate" },
  onderwijs: { nl: "Onderwijs", en: "Education", de: "Bildung", fr: "Éducation", es: "Educación", ro: "Educație" },
  industrie: { nl: "Industrie", en: "Manufacturing", de: "Industrie", fr: "Industrie", es: "Industria", ro: "Industrie" },
  overheid: { nl: "Overheid", en: "Government", de: "Öffentlicher Sektor", fr: "Secteur public", es: "Sector público", ro: "Sector public" },
  zakelijk: { nl: "Zakelijke dienstverlening", en: "Professional services", de: "Unternehmensdienstleistungen", fr: "Services professionnels", es: "Servicios profesionales", ro: "Servicii profesionale" },
  retail: { nl: "Retail / e-commerce", en: "Retail / e-commerce", de: "Einzelhandel / E-Commerce", fr: "Commerce / e-commerce", es: "Retail / e-commerce", ro: "Retail / e-commerce" },
  ict: { nl: "ICT / Technologie", en: "IT / Technology", de: "IT / Technologie", fr: "IT / Technologie", es: "TI / Tecnología", ro: "IT / Tehnologie" },
  bouw: { nl: "Bouw", en: "Construction", de: "Bauwesen", fr: "Construction", es: "Construcción", ro: "Construcții" },
  logistiek: { nl: "Logistiek", en: "Logistics", de: "Logistik", fr: "Logistique", es: "Logística", ro: "Logistică" },
  financieel: { nl: "Financiële dienstverlening", en: "Financial services", de: "Finanzdienstleistungen", fr: "Services financiers", es: "Servicios financieros", ro: "Servicii financiare" },
  nonprofit: { nl: "Non-profit", en: "Non-profit", de: "Non-Profit", fr: "Non lucratif", es: "Sin ánimo de lucro", ro: "Non-profit" },
  horeca: { nl: "Horeca / Recreatie", en: "Hospitality / Leisure", de: "Gastgewerbe / Freizeit", fr: "Hôtellerie / Loisirs", es: "Hostelería / Ocio", ro: "Ospitalitate / Agrement" },
  agrofood: { nl: "Agri & Food", en: "Agri & Food", de: "Agrar & Lebensmittel", fr: "Agroalimentaire", es: "Agroalimentario", ro: "Agroalimentar" },
  energie: { nl: "Energie & Utilities", en: "Energy & Utilities", de: "Energie & Versorgung", fr: "Énergie & Services publics", es: "Energía & Utilities", ro: "Energie & Utilități" },
  uitzend: { nl: "Uitzenden & Werving", en: "Staffing & Recruitment", de: "Zeitarbeit & Personalvermittlung", fr: "Intérim & Recrutement", es: "ETT & Selección", ro: "Muncă temporară & Recrutare" },
};

export const CASE_SIZES = {
  klein: { nl: "< 100 medewerkers", en: "< 100 employees", de: "< 100 Mitarbeiter", fr: "< 100 collaborateurs", es: "< 100 empleados", ro: "< 100 angajați" },
  middel: { nl: "100-500 medewerkers", en: "100-500 employees", de: "100-500 Mitarbeiter", fr: "100-500 collaborateurs", es: "100-500 empleados", ro: "100-500 angajați" },
  groot: { nl: "500-1.500 medewerkers", en: "500-1,500 employees", de: "500-1.500 Mitarbeiter", fr: "500-1 500 collaborateurs", es: "500-1.500 empleados", ro: "500-1.500 angajați" },
  zeergroot: { nl: "1.500+ medewerkers", en: "1,500+ employees", de: "1.500+ Mitarbeiter", fr: "1 500+ collaborateurs", es: "1.500+ empleados", ro: "1.500+ angajați" },
};

export const CASES = [
  {
    sector: "zorg", size: "middel", theme: "selectie",
    text: {
      nl: { challenge: "Hoog verloop onder nieuwe zorgprofessionals en selectie op onderbuikgevoel.", approach: "Persoonlijkheidstest en sectorgerichte vragenlijst als vaste stap, gekoppeld aan een matchprofiel per functie.", results: ["Gerichtere selectiegesprekken", "Betere onderbouwing van aannames", "Minder mismatch in de eerste maanden"] },
      en: { challenge: "High turnover among new care professionals and gut-feeling selection.", approach: "Personality test and sector questionnaire as a fixed step, linked to a match profile per role.", results: ["More focused selection interviews", "Better-substantiated hiring decisions", "Less mismatch in the first months"] },
      de: { challenge: "Hohe Fluktuation bei neuen Pflegekräften und Auswahl nach Bauchgefühl.", approach: "Persönlichkeitstest und Branchenfragebogen als feste Stufe, verknüpft mit einem Matchprofil je Rolle.", results: ["Gezieltere Auswahlgespräche", "Besser fundierte Einstellungen", "Weniger Fehlbesetzung in den ersten Monaten"] },
      fr: { challenge: "Fort turnover parmi les nouveaux soignants et sélection à l'instinct.", approach: "Test de personnalité et questionnaire sectoriel comme étape fixe, liés à un profil de correspondance par poste.", results: ["Entretiens de sélection plus ciblés", "Décisions d'embauche mieux fondées", "Moins d'inadéquation les premiers mois"] },
      es: { challenge: "Alta rotación entre nuevos profesionales sanitarios y selección por intuición.", approach: "Test de personalidad y cuestionario sectorial como paso fijo, ligados a un perfil de ajuste por puesto.", results: ["Entrevistas de selección más enfocadas", "Decisiones de contratación mejor fundamentadas", "Menos desajuste en los primeros meses"] },
      ro: { challenge: "Fluctuație mare printre noii profesioniști din sănătate și selecție pe intuiție.", approach: "Test de personalitate și chestionar sectorial ca etapă fixă, legate de un profil de potrivire per rol.", results: ["Interviuri de selecție mai focalizate", "Decizii de angajare mai bine fundamentate", "Mai puține nepotriviri în primele luni"] },
    },
  },
  {
    sector: "onderwijs", size: "groot", theme: "ontwikkeling",
    text: {
      nl: { challenge: "Ontwikkelgesprekken bleven algemeen en vrijblijvend.", approach: "360 graden feedback en een competentieprofiel per rol als basis voor het jaargesprek.", results: ["Gerichtere ontwikkelgesprekken", "Meer eigenaarschap bij medewerkers", "Eenduidige taal voor competenties"] },
      en: { challenge: "Development conversations stayed generic and non-committal.", approach: "360-degree feedback and a competency profile per role as a basis for the annual review.", results: ["More targeted development talks", "More ownership among staff", "Consistent language for competencies"] },
      de: { challenge: "Entwicklungsgespräche blieben allgemein und unverbindlich.", approach: "360-Grad-Feedback und ein Kompetenzprofil je Rolle als Basis für das Jahresgespräch.", results: ["Gezieltere Entwicklungsgespräche", "Mehr Eigenverantwortung der Mitarbeiter", "Einheitliche Sprache für Kompetenzen"] },
      fr: { challenge: "Les entretiens de développement restaient généraux et sans engagement.", approach: "Feedback 360 et un profil de compétences par poste comme base de l'entretien annuel.", results: ["Entretiens de développement plus ciblés", "Plus de responsabilisation du personnel", "Un langage commun pour les compétences"] },
      es: { challenge: "Las conversaciones de desarrollo eran genéricas y poco comprometidas.", approach: "Feedback de 360 grados y un perfil de competencias por puesto como base de la evaluación anual.", results: ["Conversaciones de desarrollo más enfocadas", "Más responsabilidad del personal", "Un lenguaje común para las competencias"] },
      ro: { challenge: "Discuțiile de dezvoltare rămâneau generale și fără angajament.", approach: "Feedback la 360 de grade și un profil de competențe per rol ca bază pentru evaluarea anuală.", results: ["Discuții de dezvoltare mai țintite", "Mai multă asumare din partea angajaților", "Un limbaj comun pentru competențe"] },
    },
  },
  {
    sector: "industrie", size: "groot", theme: "werving",
    text: {
      nl: { challenge: "Grote wervingsvolumes voor operationele functies met tijdrovende screening.", approach: "Cognitieve capaciteitentest en korte preselectie vooraan, gekoppeld aan het ATS.", results: ["Snellere voorselectie", "Consistenter niveau van kandidaten", "Minder handmatig screeningwerk"] },
      en: { challenge: "High recruitment volumes for operational roles with time-consuming screening.", approach: "Cognitive ability test and short pre-selection up front, linked to the ATS.", results: ["Faster pre-selection", "Consistent candidate quality", "Less manual screening work"] },
      de: { challenge: "Hohe Einstellungsvolumina für operative Rollen mit zeitaufwändigem Screening.", approach: "Kognitiver Leistungstest und kurze Vorauswahl am Anfang, mit dem ATS verknüpft.", results: ["Schnellere Vorauswahl", "Konsistente Kandidatenqualität", "Weniger manuelle Screening-Arbeit"] },
      fr: { challenge: "Volumes de recrutement élevés pour des postes opérationnels avec un tri chronophage.", approach: "Test d'aptitude cognitive et présélection courte en amont, liés à l'ATS.", results: ["Présélection plus rapide", "Qualité de candidats constante", "Moins de tri manuel"] },
      es: { challenge: "Altos volúmenes de contratación para puestos operativos con criba costosa.", approach: "Test de aptitud cognitiva y preselección breve al inicio, conectados al ATS.", results: ["Preselección más rápida", "Calidad de candidatos constante", "Menos criba manual"] },
      ro: { challenge: "Volume mari de recrutare pentru roluri operaționale cu triere consumatoare de timp.", approach: "Test de aptitudine cognitivă și preselecție scurtă la început, legate de ATS.", results: ["Preselecție mai rapidă", "Calitate constantă a candidaților", "Mai puțină triere manuală"] },
    },
  },
  {
    sector: "overheid", size: "middel", theme: "gesprekscyclus",
    text: {
      nl: { challenge: "Versnipperde gesprekscyclus zonder centrale structuur of overzicht.", approach: "Digitale gesprekscyclus met bila, ontwikkel- en jaargesprek in één portal.", results: ["Structuur in de hele jaarcyclus", "Betere voortgangsbewaking", "Minder administratieve last"] },
      en: { challenge: "Fragmented review cycle without central structure or overview.", approach: "Digital review cycle with check-ins, development and annual talks in one portal.", results: ["Structure across the year cycle", "Better progress tracking", "Less administrative burden"] },
      de: { challenge: "Zersplitterter Gesprächszyklus ohne zentrale Struktur oder Überblick.", approach: "Digitaler Gesprächszyklus mit Check-ins, Entwicklungs- und Jahresgespräch in einem Portal.", results: ["Struktur im gesamten Jahreszyklus", "Bessere Fortschrittsverfolgung", "Weniger Verwaltungsaufwand"] },
      fr: { challenge: "Cycle d'entretiens fragmenté sans structure ni vue d'ensemble.", approach: "Cycle d'entretiens digital avec points, développement et entretien annuel dans un portail.", results: ["Structure sur tout le cycle annuel", "Meilleur suivi des progrès", "Moins de charge administrative"] },
      es: { challenge: "Ciclo de evaluación fragmentado sin estructura ni visión central.", approach: "Ciclo de evaluación digital con seguimientos, desarrollo y evaluación anual en un portal.", results: ["Estructura en todo el ciclo anual", "Mejor seguimiento del progreso", "Menos carga administrativa"] },
      ro: { challenge: "Ciclu de evaluare fragmentat, fără structură sau vedere de ansamblu.", approach: "Ciclu de evaluare digital cu discuții, dezvoltare și evaluare anuală într-un portal.", results: ["Structură pe tot ciclul anual", "Urmărire mai bună a progresului", "Mai puțină povară administrativă"] },
    },
  },
  {
    sector: "zakelijk", size: "klein", theme: "teams",
    text: {
      nl: { challenge: "Snel gegroeid team met onduidelijke rolverdeling en oplopende wrijving.", approach: "Teamanalyse en drijfverentest als basis voor een teamsessie over samenwerking.", results: ["Meer inzicht in teamrollen", "Betere onderlinge afstemming", "Concreter ontwikkelplan voor het team"] },
      en: { challenge: "Fast-grown team with unclear roles and rising friction.", approach: "Team analysis and drives test as a basis for a session on collaboration.", results: ["More insight into team roles", "Better mutual alignment", "A more concrete team development plan"] },
      de: { challenge: "Schnell gewachsenes Team mit unklaren Rollen und zunehmender Reibung.", approach: "Teamanalyse und Antriebstest als Basis für eine Session zur Zusammenarbeit.", results: ["Mehr Einblick in Teamrollen", "Bessere gegenseitige Abstimmung", "Konkreterer Team-Entwicklungsplan"] },
      fr: { challenge: "Équipe en forte croissance avec des rôles flous et des frictions croissantes.", approach: "Analyse d'équipe et test des moteurs comme base d'une session sur la collaboration.", results: ["Plus de clarté sur les rôles", "Meilleur alignement mutuel", "Un plan de développement d'équipe concret"] },
      es: { challenge: "Equipo de rápido crecimiento con roles poco claros y fricción creciente.", approach: "Análisis de equipo y test de motivaciones como base de una sesión sobre colaboración.", results: ["Más claridad sobre los roles", "Mejor alineación mutua", "Un plan de desarrollo de equipo concreto"] },
      ro: { challenge: "Echipă crescută rapid, cu roluri neclare și fricțiuni în creștere.", approach: "Analiză de echipă și test de motivații ca bază pentru o sesiune despre colaborare.", results: ["Mai multă claritate asupra rolurilor", "Aliniere reciprocă mai bună", "Un plan concret de dezvoltare a echipei"] },
    },
  },
  {
    sector: "retail", size: "zeergroot", theme: "employability",
    text: {
      nl: { challenge: "Hoog verloop en beperkte doorgroei in winkel- en distributieteams.", approach: "Employability-scan en ontwikkelpaden om intern talent zichtbaar te maken.", results: ["Meer interne doorstroom", "Beter zicht op inzetbaarheid", "Lager verloop op sleutelposities"] },
      en: { challenge: "High turnover and limited progression in store and distribution teams.", approach: "Employability scan and development paths to surface internal talent.", results: ["More internal mobility", "Better view of employability", "Lower turnover in key roles"] },
      de: { challenge: "Hohe Fluktuation und wenig Aufstieg in Filial- und Logistikteams.", approach: "Employability-Scan und Entwicklungspfade, um internes Talent sichtbar zu machen.", results: ["Mehr interne Mobilität", "Besserer Blick auf Beschäftigungsfähigkeit", "Weniger Fluktuation in Schlüsselrollen"] },
      fr: { challenge: "Fort turnover et faible évolution dans les équipes magasin et logistique.", approach: "Scan d'employabilité et parcours de développement pour révéler les talents internes.", results: ["Plus de mobilité interne", "Meilleure vue sur l'employabilité", "Moins de turnover sur les postes clés"] },
      es: { challenge: "Alta rotación y escasa progresión en equipos de tienda y distribución.", approach: "Escaneo de empleabilidad y rutas de desarrollo para visibilizar el talento interno.", results: ["Más movilidad interna", "Mejor visión de la empleabilidad", "Menor rotación en puestos clave"] },
      ro: { challenge: "Fluctuație mare și progres limitat în echipele de magazin și distribuție.", approach: "Scanare de angajabilitate și trasee de dezvoltare pentru a evidenția talentul intern.", results: ["Mai multă mobilitate internă", "Vedere mai bună asupra angajabilității", "Fluctuație mai mică pe roluri-cheie"] },
    },
  },
  {
    sector: "ict", size: "klein", theme: "selectie",
    text: {
      nl: { challenge: "Schaarste aan tech-talent maakte elke misser kostbaar.", approach: "Cognitieve test en persoonlijkheidstest om potentieel en teamfit vooraf te toetsen.", results: ["Betere teamfit van nieuwe hires", "Snellere onderbouwde keuzes", "Minder kostbare misinvesteringen"] },
      en: { challenge: "Scarcity of tech talent made every miss costly.", approach: "Cognitive and personality test to assess potential and team fit up front.", results: ["Better team fit of new hires", "Faster well-founded choices", "Fewer costly misinvestments"] },
      de: { challenge: "Knappheit an Tech-Talent machte jeden Fehlgriff teuer.", approach: "Kognitiver und Persönlichkeitstest, um Potenzial und Teamfit vorab zu prüfen.", results: ["Besserer Teamfit neuer Mitarbeiter", "Schnellere fundierte Entscheidungen", "Weniger teure Fehlinvestitionen"] },
      fr: { challenge: "La pénurie de talents tech rendait chaque erreur coûteuse.", approach: "Test cognitif et de personnalité pour évaluer le potentiel et l'adéquation en amont.", results: ["Meilleure adéquation des recrues", "Choix fondés plus rapides", "Moins d'erreurs coûteuses"] },
      es: { challenge: "La escasez de talento tech hacía costoso cada error.", approach: "Test cognitivo y de personalidad para evaluar potencial y encaje antes.", results: ["Mejor encaje de las nuevas incorporaciones", "Decisiones fundamentadas más rápidas", "Menos inversiones erróneas costosas"] },
      ro: { challenge: "Lipsa de talent tech făcea fiecare greșeală costisitoare.", approach: "Test cognitiv și de personalitate pentru a evalua potențialul și potrivirea din start.", results: ["Potrivire mai bună a noilor angajați", "Decizii fundamentate mai rapide", "Mai puține investiții greșite costisitoare"] },
    },
  },
  {
    sector: "bouw", size: "middel", theme: "werving",
    text: {
      nl: { challenge: "Veel vacatures voor uitvoerende functies en weinig tijd voor screening.", approach: "Korte preselectie-vragenlijst en capaciteitentest als eerste filter.", results: ["Snellere doorlooptijd", "Betere eerste selectie", "Minder no-shows in gesprekken"] },
      en: { challenge: "Many vacancies for field roles and little time for screening.", approach: "Short pre-selection questionnaire and ability test as a first filter.", results: ["Faster lead time", "Better first selection", "Fewer no-shows in interviews"] },
      de: { challenge: "Viele Stellen für ausführende Rollen und wenig Zeit fürs Screening.", approach: "Kurzer Vorauswahl-Fragebogen und Leistungstest als erster Filter.", results: ["Kürzere Durchlaufzeit", "Bessere Erstauswahl", "Weniger No-Shows in Gesprächen"] },
      fr: { challenge: "De nombreux postes de terrain et peu de temps pour le tri.", approach: "Questionnaire de présélection court et test d'aptitude comme premier filtre.", results: ["Délai plus court", "Meilleure première sélection", "Moins d'absences aux entretiens"] },
      es: { challenge: "Muchas vacantes de campo y poco tiempo para la criba.", approach: "Cuestionario breve de preselección y test de aptitud como primer filtro.", results: ["Menor tiempo de proceso", "Mejor primera selección", "Menos ausencias en entrevistas"] },
      ro: { challenge: "Multe posturi de teren și puțin timp pentru triere.", approach: "Chestionar scurt de preselecție și test de aptitudine ca prim filtru.", results: ["Timp de proces mai scurt", "Primă selecție mai bună", "Mai puține absențe la interviuri"] },
    },
  },
  {
    sector: "logistiek", size: "groot", theme: "selectie",
    text: {
      nl: { challenge: "Piekwerving met sterk wisselend niveau van instroom.", approach: "Gestandaardiseerd selectieassessment met matchprofiel per functiegroep.", results: ["Consistentere instroomkwaliteit", "Objectievere selectie", "Beter voorspelbare prestaties"] },
      en: { challenge: "Peak recruitment with variable quality of intake.", approach: "Standardised selection assessment with a match profile per job group.", results: ["More consistent intake quality", "More objective selection", "More predictable performance"] },
      de: { challenge: "Spitzenrekrutierung mit schwankender Qualität des Zulaufs.", approach: "Standardisiertes Auswahl-Assessment mit Matchprofil je Funktionsgruppe.", results: ["Konsistentere Zulaufqualität", "Objektivere Auswahl", "Besser vorhersagbare Leistung"] },
      fr: { challenge: "Recrutement de pointe avec une qualité d'entrée variable.", approach: "Évaluation de sélection standardisée avec profil de correspondance par groupe de postes.", results: ["Qualité d'entrée plus régulière", "Sélection plus objective", "Performance plus prévisible"] },
      es: { challenge: "Reclutamiento en picos con calidad de entrada variable.", approach: "Evaluación de selección estandarizada con perfil de ajuste por grupo de puestos.", results: ["Calidad de entrada más constante", "Selección más objetiva", "Rendimiento más previsible"] },
      ro: { challenge: "Recrutare de vârf cu o calitate variabilă a intrărilor.", approach: "Evaluare de selecție standardizată cu profil de potrivire per grup de posturi.", results: ["Calitate mai constantă a intrărilor", "Selecție mai obiectivă", "Performanță mai previzibilă"] },
    },
  },
  {
    sector: "financieel", size: "middel", theme: "gesprekscyclus",
    text: {
      nl: { challenge: "Beoordelingen liepen uiteen en waren moeilijk te vergelijken.", approach: "Competentiegericht gesprekscyclus met heldere niveaus per rol.", results: ["Objectievere beoordelingen", "Betere vergelijkbaarheid", "Meer transparantie richting medewerkers"] },
      en: { challenge: "Appraisals diverged and were hard to compare.", approach: "Competency-based review cycle with clear levels per role.", results: ["More objective appraisals", "Better comparability", "More transparency towards staff"] },
      de: { challenge: "Beurteilungen gingen auseinander und waren schwer vergleichbar.", approach: "Kompetenzbasierter Gesprächszyklus mit klaren Niveaus je Rolle.", results: ["Objektivere Beurteilungen", "Bessere Vergleichbarkeit", "Mehr Transparenz für Mitarbeiter"] },
      fr: { challenge: "Les évaluations divergeaient et étaient difficiles à comparer.", approach: "Cycle d'entretiens par compétences avec des niveaux clairs par poste.", results: ["Évaluations plus objectives", "Meilleure comparabilité", "Plus de transparence envers le personnel"] },
      es: { challenge: "Las evaluaciones divergían y eran difíciles de comparar.", approach: "Ciclo de evaluación por competencias con niveles claros por puesto.", results: ["Evaluaciones más objetivas", "Mejor comparabilidad", "Más transparencia hacia el personal"] },
      ro: { challenge: "Evaluările divergeau și erau greu de comparat.", approach: "Ciclu de evaluare pe competențe cu niveluri clare per rol.", results: ["Evaluări mai obiective", "Comparabilitate mai bună", "Mai multă transparență față de angajați"] },
    },
  },
  {
    sector: "nonprofit", size: "klein", theme: "ontwikkeling",
    text: {
      nl: { challenge: "Beperkt opleidingsbudget en behoefte aan gerichte ontwikkeling.", approach: "Persoonlijkheids- en drijfverentest om ontwikkelfocus scherp te stellen.", results: ["Gerichtere inzet van budget", "Meer motivatie bij medewerkers", "Concrete ontwikkelafspraken"] },
      en: { challenge: "Limited training budget and a need for focused development.", approach: "Personality and drives test to sharpen the development focus.", results: ["More targeted use of budget", "More motivation among staff", "Concrete development agreements"] },
      de: { challenge: "Begrenztes Weiterbildungsbudget und Bedarf an gezielter Entwicklung.", approach: "Persönlichkeits- und Antriebstest, um den Entwicklungsfokus zu schärfen.", results: ["Gezielterer Budgeteinsatz", "Mehr Motivation der Mitarbeiter", "Konkrete Entwicklungsvereinbarungen"] },
      fr: { challenge: "Budget de formation limité et besoin de développement ciblé.", approach: "Test de personnalité et des moteurs pour préciser le focus de développement.", results: ["Utilisation plus ciblée du budget", "Plus de motivation du personnel", "Des accords de développement concrets"] },
      es: { challenge: "Presupuesto de formación limitado y necesidad de desarrollo enfocado.", approach: "Test de personalidad y motivaciones para afinar el foco de desarrollo.", results: ["Uso más enfocado del presupuesto", "Más motivación del personal", "Acuerdos de desarrollo concretos"] },
      ro: { challenge: "Buget de formare limitat și nevoia unei dezvoltări focalizate.", approach: "Test de personalitate și motivații pentru a clarifica focusul dezvoltării.", results: ["Utilizare mai țintită a bugetului", "Mai multă motivație a angajaților", "Acorduri concrete de dezvoltare"] },
    },
  },
  {
    sector: "horeca", size: "middel", theme: "werving",
    text: {
      nl: { challenge: "Seizoenspieken en snelle werving met veel uitval.", approach: "Korte preselectie op houding en klantgerichtheid vooraan in het proces.", results: ["Betere match op klantgerichtheid", "Minder vroegtijdige uitval", "Snellere seizoenswerving"] },
      en: { challenge: "Seasonal peaks and fast hiring with high drop-out.", approach: "Short pre-selection on attitude and customer focus up front.", results: ["Better match on customer focus", "Less early drop-out", "Faster seasonal hiring"] },
      de: { challenge: "Saisonspitzen und schnelle Einstellung mit hoher Abbruchquote.", approach: "Kurze Vorauswahl zu Haltung und Kundenorientierung am Anfang.", results: ["Bessere Passung bei Kundenorientierung", "Weniger frühe Abbrüche", "Schnellere Saisonrekrutierung"] },
      fr: { challenge: "Pics saisonniers et embauche rapide avec fort abandon.", approach: "Présélection courte sur l'attitude et l'orientation client en amont.", results: ["Meilleure adéquation orientation client", "Moins d'abandons précoces", "Embauche saisonnière plus rapide"] },
      es: { challenge: "Picos estacionales y contratación rápida con mucho abandono.", approach: "Preselección breve sobre actitud y orientación al cliente al inicio.", results: ["Mejor encaje en orientación al cliente", "Menos abandono temprano", "Contratación estacional más rápida"] },
      ro: { challenge: "Vârfuri sezoniere și angajare rapidă cu abandon ridicat.", approach: "Preselecție scurtă privind atitudinea și orientarea către client, la început.", results: ["Potrivire mai bună pe orientarea către client", "Mai puțin abandon timpuriu", "Angajare sezonieră mai rapidă"] },
    },
  },
  {
    sector: "agrofood", size: "groot", theme: "employability",
    text: {
      nl: { challenge: "Vergrijzing en fysiek werk vroegen om duurzame inzetbaarheid.", approach: "Inzetbaarheidsscan en ontwikkelpaden om medewerkers vitaal en flexibel te houden.", results: ["Beter zicht op inzetbaarheid", "Meer interne mobiliteit", "Lager langdurig verzuim"] },
      en: { challenge: "Ageing workforce and physical work called for sustainable employability.", approach: "Employability scan and development paths to keep staff vital and flexible.", results: ["Better view of employability", "More internal mobility", "Lower long-term absence"] },
      de: { challenge: "Alternde Belegschaft und körperliche Arbeit erforderten nachhaltige Einsetzbarkeit.", approach: "Einsetzbarkeitsscan und Entwicklungspfade, um Mitarbeiter vital und flexibel zu halten.", results: ["Besserer Blick auf Einsetzbarkeit", "Mehr interne Mobilität", "Weniger Langzeitausfall"] },
      fr: { challenge: "Vieillissement et travail physique appelaient une employabilité durable.", approach: "Scan d'employabilité et parcours de développement pour garder le personnel vital et flexible.", results: ["Meilleure vue sur l'employabilité", "Plus de mobilité interne", "Moins d'absences de longue durée"] },
      es: { challenge: "Envejecimiento y trabajo físico exigían empleabilidad sostenible.", approach: "Escaneo de empleabilidad y rutas de desarrollo para mantener al personal vital y flexible.", results: ["Mejor visión de la empleabilidad", "Más movilidad interna", "Menos absentismo de larga duración"] },
      ro: { challenge: "Îmbătrânirea și munca fizică cereau angajabilitate durabilă.", approach: "Scanare de angajabilitate și trasee de dezvoltare pentru a menține personalul vital și flexibil.", results: ["Vedere mai bună asupra angajabilității", "Mai multă mobilitate internă", "Absență de lungă durată mai mică"] },
    },
  },
  {
    sector: "energie", size: "groot", theme: "teams",
    text: {
      nl: { challenge: "Reorganisatie vroeg om sterkere, wendbare teams.", approach: "Teamanalyse en 360 feedback om samenwerking en rollen te versterken.", results: ["Duidelijkere rolverdeling", "Sterkere samenwerking", "Gerichter teamontwikkelplan"] },
      en: { challenge: "Reorganisation called for stronger, agile teams.", approach: "Team analysis and 360 feedback to strengthen collaboration and roles.", results: ["Clearer role division", "Stronger collaboration", "A more targeted team plan"] },
      de: { challenge: "Reorganisation erforderte stärkere, agile Teams.", approach: "Teamanalyse und 360-Feedback, um Zusammenarbeit und Rollen zu stärken.", results: ["Klarere Rollenverteilung", "Stärkere Zusammenarbeit", "Gezielterer Teamplan"] },
      fr: { challenge: "La réorganisation exigeait des équipes plus fortes et agiles.", approach: "Analyse d'équipe et feedback 360 pour renforcer collaboration et rôles.", results: ["Répartition des rôles plus claire", "Collaboration renforcée", "Un plan d'équipe plus ciblé"] },
      es: { challenge: "La reorganización exigía equipos más fuertes y ágiles.", approach: "Análisis de equipo y feedback 360 para reforzar colaboración y roles.", results: ["Reparto de roles más claro", "Colaboración más fuerte", "Un plan de equipo más enfocado"] },
      ro: { challenge: "Reorganizarea cerea echipe mai puternice și agile.", approach: "Analiză de echipă și feedback 360 pentru a întări colaborarea și rolurile.", results: ["Împărțire mai clară a rolurilor", "Colaborare mai puternică", "Un plan de echipă mai țintit"] },
    },
  },
  {
    sector: "uitzend", size: "zeergroot", theme: "werving",
    text: {
      nl: { challenge: "Grote kandidaatstromen die snel en objectief beoordeeld moesten worden.", approach: "Geautomatiseerde preselectie met capaciteiten- en persoonlijkheidstest via API.", results: ["Snellere plaatsingen", "Objectievere matching", "Sterkere voordrachten"] },
      en: { challenge: "Large candidate flows needing fast, objective assessment.", approach: "Automated pre-selection with ability and personality test via API.", results: ["Faster placements", "More objective matching", "Higher quality of shortlists"] },
      de: { challenge: "Große Kandidatenströme, die schnell und objektiv bewertet werden mussten.", approach: "Automatisierte Vorauswahl mit Leistungs- und Persönlichkeitstest per API.", results: ["Schnellere Vermittlungen", "Objektiveres Matching", "Höhere Qualität der Vorschläge"] },
      fr: { challenge: "Flux de candidats importants à évaluer vite et objectivement.", approach: "Présélection automatisée avec test d'aptitude et de personnalité via API.", results: ["Placements plus rapides", "Matching plus objectif", "Meilleure qualité des présélections"] },
      es: { challenge: "Grandes flujos de candidatos que evaluar rápido y objetivamente.", approach: "Preselección automatizada con test de aptitud y personalidad vía API.", results: ["Colocaciones más rápidas", "Emparejamiento más objetivo", "Mayor calidad de las propuestas"] },
      ro: { challenge: "Fluxuri mari de candidați de evaluat rapid și obiectiv.", approach: "Preselecție automatizată cu test de aptitudine și personalitate prin API.", results: ["Plasări mai rapide", "Potrivire mai obiectivă", "Calitate mai mare a propunerilor"] },
    },
  },
  {
    sector: "zorg", size: "groot", theme: "employability",
    text: {
      nl: { challenge: "Hoge werkdruk en verzuim vroegen om aandacht voor veerkracht.", approach: "Mentale-veerkrachtscan en ontwikkelgesprekken gericht op werkbalans.", results: ["Vroeger signaleren van risico's", "Meer aandacht voor werkbalans", "Gerichtere ondersteuning"] },
      en: { challenge: "High workload and absence called for attention to resilience.", approach: "Mental resilience scan and development talks focused on work balance.", results: ["Earlier signalling of risks", "More attention to work balance", "More targeted support"] },
      de: { challenge: "Hohe Arbeitslast und Ausfälle erforderten Aufmerksamkeit für Resilienz.", approach: "Scan zur mentalen Widerstandsfähigkeit und Entwicklungsgespräche zur Work-Balance.", results: ["Frühere Risikoerkennung", "Mehr Fokus auf Work-Balance", "Gezieltere Unterstützung"] },
      fr: { challenge: "Charge et absentéisme élevés appelaient à l'attention à la résilience.", approach: "Scan de résilience mentale et entretiens axés sur l'équilibre au travail.", results: ["Détection plus précoce des risques", "Plus d'attention à l'équilibre", "Un soutien plus ciblé"] },
      es: { challenge: "Alta carga y absentismo exigían atención a la resiliencia.", approach: "Escaneo de resiliencia mental y conversaciones sobre equilibrio laboral.", results: ["Detección más temprana de riesgos", "Más atención al equilibrio", "Apoyo más enfocado"] },
      ro: { challenge: "Volumul mare și absenteismul cereau atenție pentru reziliență.", approach: "Scanare de reziliență mentală și discuții axate pe echilibrul muncii.", results: ["Semnalare mai timpurie a riscurilor", "Mai multă atenție la echilibru", "Sprijin mai țintit"] },
    },
  },
  {
    sector: "onderwijs", size: "klein", theme: "teams",
    text: {
      nl: { challenge: "Nieuw samengesteld team met verschillende werkstijlen.", approach: "Drijfveren- en teamanalyse als basis voor werkafspraken.", results: ["Meer wederzijds begrip", "Duidelijke werkafspraken", "Soepelere samenwerking"] },
      en: { challenge: "Newly formed team with different working styles.", approach: "Drives and team analysis as a basis for working agreements.", results: ["More mutual understanding", "Clear working agreements", "Smoother collaboration"] },
      de: { challenge: "Neu zusammengesetztes Team mit unterschiedlichen Arbeitsstilen.", approach: "Antriebs- und Teamanalyse als Basis für Arbeitsvereinbarungen.", results: ["Mehr gegenseitiges Verständnis", "Klare Arbeitsvereinbarungen", "Reibungslosere Zusammenarbeit"] },
      fr: { challenge: "Équipe nouvellement formée aux styles de travail variés.", approach: "Analyse des moteurs et d'équipe comme base d'accords de travail.", results: ["Plus de compréhension mutuelle", "Des accords de travail clairs", "Une collaboration plus fluide"] },
      es: { challenge: "Equipo recién formado con estilos de trabajo distintos.", approach: "Análisis de motivaciones y de equipo como base de acuerdos de trabajo.", results: ["Más comprensión mutua", "Acuerdos de trabajo claros", "Colaboración más fluida"] },
      ro: { challenge: "Echipă nou formată cu stiluri de lucru diferite.", approach: "Analiză a motivațiilor și de echipă ca bază pentru acorduri de lucru.", results: ["Mai multă înțelegere reciprocă", "Acorduri de lucru clare", "Colaborare mai fluidă"] },
    },
  },
  {
    sector: "ict", size: "groot", theme: "ontwikkeling",
    text: {
      nl: { challenge: "Snelle groei vroeg om schaalbare ontwikkeling van leiderschap.", approach: "Leiderschapstest en 360 feedback als basis voor een ontwikkelprogramma.", results: ["Zicht op leiderschapspotentieel", "Gerichte ontwikkelprogramma's", "Sterkere interne doorgroei"] },
      en: { challenge: "Fast growth called for scalable leadership development.", approach: "Leadership test and 360 feedback as a basis for a development programme.", results: ["Insight into leadership potential", "Targeted development programmes", "Stronger internal progression"] },
      de: { challenge: "Schnelles Wachstum erforderte skalierbare Führungsentwicklung.", approach: "Führungstest und 360-Feedback als Basis für ein Entwicklungsprogramm.", results: ["Einblick ins Führungspotenzial", "Gezielte Entwicklungsprogramme", "Stärkerer interner Aufstieg"] },
      fr: { challenge: "Une croissance rapide exigeait un développement du leadership scalable.", approach: "Test de leadership et feedback 360 comme base d'un programme de développement.", results: ["Visibilité sur le potentiel de leadership", "Programmes de développement ciblés", "Progression interne renforcée"] },
      es: { challenge: "El rápido crecimiento exigía desarrollo de liderazgo escalable.", approach: "Test de liderazgo y feedback 360 como base de un programa de desarrollo.", results: ["Visión del potencial de liderazgo", "Programas de desarrollo enfocados", "Mayor progresión interna"] },
      ro: { challenge: "Creșterea rapidă cerea dezvoltarea scalabilă a leadershipului.", approach: "Test de leadership și feedback 360 ca bază pentru un program de dezvoltare.", results: ["Vizibilitate asupra potențialului de leadership", "Programe de dezvoltare țintite", "Progres intern mai puternic"] },
    },
  },
];

export function casesFor(lang) {
  const L = (o) => (o[lang] || o.nl);
  const ui = CASE_UI[lang] || CASE_UI.nl;
  const themeList = Object.entries(CASE_THEMES).map(([key, v]) => ({ key, label: L(v) }));
  const sectorList = Object.entries(CASE_SECTORS).map(([key, v]) => ({ key, label: L(v) }));
  const sizeList = Object.entries(CASE_SIZES).map(([key, v]) => ({ key, label: L(v) }));
  const cases = CASES.map((c) => {
    const t = c.text[lang] || c.text.nl;
    return {
      sectorKey: c.sector, sizeKey: c.size, themeKey: c.theme,
      sector: L(CASE_SECTORS[c.sector]), size: L(CASE_SIZES[c.size]), theme: L(CASE_THEMES[c.theme]),
      challenge: t.challenge, approach: t.approach, results: t.results,
      search: [L(CASE_SECTORS[c.sector]), L(CASE_THEMES[c.theme]), t.challenge, t.approach, t.results.join(" ")].join(" ").toLowerCase(),
    };
  });
  return { ui, themeList, sectorList, sizeList, cases };
}
