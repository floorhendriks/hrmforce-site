// Wetenschappelijke onderbouwing per assessment: het theoretische model en
// een aantal onderbouwende bronnen (tekst-only, geen links). Feitelijke,
// algemeen erkende referenties. Gekoppeld via slug -> theorie-sleutel.

export const theoryUI = {
  nl: { title: "Wetenschappelijke onderbouwing", modelLabel: "Theoretisch kader", refLabel: "Onderbouwende literatuur", note: "Referenties ter illustratie van het theoretische kader; hrmforce ontwikkelt en valideert de vragenlijsten in eigen beheer." },
  en: { title: "Scientific foundation", modelLabel: "Theoretical framework", refLabel: "Supporting literature", note: "References illustrate the theoretical framework; hrmforce develops and validates the questionnaires in-house." },
  de: { title: "Wissenschaftliche Fundierung", modelLabel: "Theoretischer Rahmen", refLabel: "Untermauernde Literatur", note: "Die Referenzen veranschaulichen den theoretischen Rahmen; hrmforce entwickelt und validiert die Fragebögen in Eigenregie." },
  fr: { title: "Fondement scientifique", modelLabel: "Cadre théorique", refLabel: "Littérature de référence", note: "Les références illustrent le cadre théorique ; hrmforce développe et valide les questionnaires en interne." },
  es: { title: "Fundamento científico", modelLabel: "Marco teórico", refLabel: "Literatura de referencia", note: "Las referencias ilustran el marco teórico; hrmforce desarrolla y valida los cuestionarios internamente." },
  ro: { title: "Fundament științific", modelLabel: "Cadru teoretic", refLabel: "Literatură de referință", note: "Referințele ilustrează cadrul teoretic; hrmforce dezvoltă și validează chestionarele intern." },
};

export const slugTheory = {
  "big-five": "bigfive", "intake-candidate": "bigfive", "15pf": "cattell16pf",
  "disc-test": "disc",
  "drijfverentest": "motivation", "value-drives": "motivation", "loopbaanwaarden": "motivation",
  "cognitieve-test": "cognitive", "ability-scan": "cognitive",
  "360-graden-feedback": "competency360", "appraisal": "competency360", "competentie-check": "competency360", "referentie-check": "competency360",
  "studiekeuzetest": "interest", "beroepskeuze-test": "interest", "interesse-scan": "interest",
  "lencioni-teamdynamiek": "lencioni", "teamanalyse": "belbin", "groepsrollen": "belbin",
  "leiderschapstest": "leadership",
  "communicatiestijlen-test": "leary",
  "conflictstijlen-test": "conflict",
  "leerstijlen": "kolb",
  "typology": "jung",
  "canmeds": "canmeds",
  "mentale-veerkracht-scan": "resilience",
  "duurzame-inzetbaarheid-scan": "employability", "levensloop-scan": "employability", "coaching-screener-scan": "employability",
  "pulse-survey": "engagement", "tevredenheidsonderzoek-medewerkers": "engagement", "exit-assessment": "engagement",
  "verkoopvaardigheden": "sjt", "lean-scan": "sjt",
  "job-profiler": "competencymodel",
  "ontwikkelassessment": "potential",
};

export const THEORIES = {
  bigfive: {
    name: { nl: "Vijffactorenmodel (Big Five, Costa & McCrae)", en: "Five-Factor Model (Big Five, Costa & McCrae)", de: "Fünf-Faktoren-Modell (Big Five, Costa & McCrae)", fr: "Modèle en cinq facteurs (Big Five, Costa & McCrae)", es: "Modelo de los cinco factores (Big Five, Costa & McCrae)", ro: "Modelul celor cinci factori (Big Five, Costa & McCrae)" },
    desc: { nl: "De persoonlijkheid wordt beschreven op vijf brede, empirisch robuuste dimensies die wereldwijd zijn gerepliceerd.", en: "Personality is described along five broad, empirically robust dimensions replicated worldwide.", de: "Die Persönlichkeit wird auf fünf breiten, empirisch robusten Dimensionen beschrieben, die weltweit repliziert wurden.", fr: "La personnalité est décrite selon cinq dimensions larges et empiriquement robustes, répliquées dans le monde entier.", es: "La personalidad se describe en cinco dimensiones amplias y empíricamente robustas, replicadas a nivel mundial.", ro: "Personalitatea este descrisă pe cinci dimensiuni ample, robuste empiric, replicate la nivel mondial." },
    refs: ["Costa, P. T., & McCrae, R. R. (1992). Revised NEO Personality Inventory (NEO-PI-R).", "Goldberg, L. R. (1990). An alternative description of personality: the Big-Five factor structure.", "McCrae, R. R., & John, O. P. (1992). An introduction to the Five-Factor Model and its applications."],
  },
  cattell16pf: {
    name: { nl: "16 persoonlijkheidsfactoren (Cattell)", en: "16 Personality Factors (Cattell)", de: "16 Persönlichkeitsfaktoren (Cattell)", fr: "16 facteurs de personnalité (Cattell)", es: "16 factores de personalidad (Cattell)", ro: "16 factori de personalitate (Cattell)" },
    desc: { nl: "Persoonlijkheid gemeten via zestien primaire factoren, ontwikkeld met factoranalyse.", en: "Personality measured via sixteen primary factors, developed through factor analysis.", de: "Persönlichkeit gemessen über sechzehn Primärfaktoren, entwickelt durch Faktorenanalyse.", fr: "Personnalité mesurée via seize facteurs primaires, développés par analyse factorielle.", es: "Personalidad medida mediante dieciséis factores primarios, desarrollados con análisis factorial.", ro: "Personalitate măsurată prin șaisprezece factori primari, dezvoltați prin analiză factorială." },
    refs: ["Cattell, R. B., Eber, H. W., & Tatsuoka, M. M. (1970). Handbook for the 16PF.", "Cattell, R. B. (1943). The description of personality: basic traits resolved into clusters."],
  },
  disc: {
    name: { nl: "DISC-model (Marston)", en: "DISC model (Marston)", de: "DISC-Modell (Marston)", fr: "Modèle DISC (Marston)", es: "Modelo DISC (Marston)", ro: "Modelul DISC (Marston)" },
    desc: { nl: "Gedrag beschreven op vier stijlen: Dominantie, Invloed, Stabiliteit en Consciëntieusheid.", en: "Behaviour described along four styles: Dominance, Influence, Steadiness and Conscientiousness.", de: "Verhalten beschrieben über vier Stile: Dominanz, Einfluss, Stetigkeit und Gewissenhaftigkeit.", fr: "Comportement décrit selon quatre styles : Dominance, Influence, Stabilité et Conformité.", es: "Comportamiento descrito en cuatro estilos: Dominancia, Influencia, Estabilidad y Cumplimiento.", ro: "Comportament descris pe patru stiluri: Dominanță, Influență, Stabilitate și Conștiinciozitate." },
    refs: ["Marston, W. M. (1928). Emotions of Normal People.", "Marston, W. M. (1931). Integrative Psychology."],
  },
  motivation: {
    name: { nl: "Werkmotivatie & zelfdeterminatie", en: "Work motivation & self-determination", de: "Arbeitsmotivation & Selbstbestimmung", fr: "Motivation au travail & autodétermination", es: "Motivación laboral y autodeterminación", ro: "Motivația în muncă și autodeterminarea" },
    desc: { nl: "Wat mensen motiveert en energie geeft in werk, gebaseerd op motivatie- en drijfverentheorie.", en: "What motivates and energises people at work, based on motivation and drives theory.", de: "Was Menschen bei der Arbeit motiviert und mit Energie versorgt, basierend auf Motivations- und Antriebstheorie.", fr: "Ce qui motive et dynamise les personnes au travail, fondé sur la théorie de la motivation et des moteurs.", es: "Qué motiva y da energía a las personas en el trabajo, según la teoría de la motivación y los motores.", ro: "Ce motivează și energizează oamenii la muncă, pe baza teoriei motivației și a motivatoarelor." },
    refs: ["Deci, E. L., & Ryan, R. M. (1985). Intrinsic Motivation and Self-Determination in Human Behavior.", "Herzberg, F. (1959). The Motivation to Work.", "Schein, E. H. (1978). Career Dynamics: Matching Individual and Organizational Needs."],
  },
  cognitive: {
    name: { nl: "Intelligentiestructuur (CHC-model)", en: "Intelligence structure (CHC model)", de: "Intelligenzstruktur (CHC-Modell)", fr: "Structure de l'intelligence (modèle CHC)", es: "Estructura de la inteligencia (modelo CHC)", ro: "Structura inteligenței (modelul CHC)" },
    desc: { nl: "Cognitief vermogen als hiërarchie van een algemene factor en onderliggende capaciteiten.", en: "Cognitive ability as a hierarchy of a general factor and underlying capacities.", de: "Kognitive Fähigkeit als Hierarchie aus einem Generalfaktor und zugrunde liegenden Kapazitäten.", fr: "Aptitude cognitive comme hiérarchie d'un facteur général et de capacités sous-jacentes.", es: "Capacidad cognitiva como jerarquía de un factor general y capacidades subyacentes.", ro: "Capacitatea cognitivă ca ierarhie a unui factor general și a capacităților subiacente." },
    refs: ["Carroll, J. B. (1993). Human Cognitive Abilities: A Survey of Factor-Analytic Studies.", "Cattell, R. B. (1971). Abilities: Their Structure, Growth, and Action.", "Spearman, C. (1904). General intelligence, objectively determined and measured."],
  },
  competency360: {
    name: { nl: "Competentiegericht multi-rater feedback", en: "Competency-based multi-rater feedback", de: "Kompetenzbasiertes Multi-Rater-Feedback", fr: "Feedback multi-évaluateurs par compétences", es: "Feedback multi-evaluador basado en competencias", ro: "Feedback multi-evaluator bazat pe competențe" },
    desc: { nl: "Gedrag en competenties beoordeeld vanuit meerdere perspectieven rond de medewerker.", en: "Behaviour and competencies rated from multiple perspectives around the employee.", de: "Verhalten und Kompetenzen aus mehreren Perspektiven rund um den Mitarbeiter bewertet.", fr: "Comportements et compétences évalués sous plusieurs angles autour du collaborateur.", es: "Comportamientos y competencias evaluados desde varias perspectivas en torno al empleado.", ro: "Comportamente și competențe evaluate din mai multe perspective în jurul angajatului." },
    refs: ["Lepsinger, R., & Lucia, A. D. (2009). The Art and Science of 360-Degree Feedback.", "Bracken, D. W., Timmreck, C. W., & Church, A. H. (2001). The Handbook of Multisource Feedback.", "Spencer, L. M., & Spencer, S. M. (1993). Competence at Work."],
  },
  interest: {
    name: { nl: "Beroepsinteresses (RIASEC, Holland)", en: "Vocational interests (RIASEC, Holland)", de: "Berufsinteressen (RIASEC, Holland)", fr: "Intérêts professionnels (RIASEC, Holland)", es: "Intereses profesionales (RIASEC, Holland)", ro: "Interese profesionale (RIASEC, Holland)" },
    desc: { nl: "Interesses en werkomgevingen ingedeeld in zes types die passendheid voorspellen.", en: "Interests and work environments classified into six types that predict fit.", de: "Interessen und Arbeitsumfelder in sechs Typen eingeteilt, die Passung vorhersagen.", fr: "Intérêts et environnements de travail classés en six types qui prédisent l'adéquation.", es: "Intereses y entornos laborales clasificados en seis tipos que predicen el ajuste.", ro: "Interese și medii de muncă clasificate în șase tipuri care prezic potrivirea." },
    refs: ["Holland, J. L. (1997). Making Vocational Choices: A Theory of Vocational Personalities and Work Environments.", "Nauta, M. M. (2010). The development, evolution, and status of Holland's theory of vocational personalities."],
  },
  lencioni: {
    name: { nl: "Teamdynamiek (Lencioni)", en: "Team dynamics (Lencioni)", de: "Teamdynamik (Lencioni)", fr: "Dynamique d'équipe (Lencioni)", es: "Dinámica de equipo (Lencioni)", ro: "Dinamica echipei (Lencioni)" },
    desc: { nl: "Teams onderzocht op vertrouwen, constructief conflict, betrokkenheid, verantwoordelijkheid en resultaat.", en: "Teams examined on trust, healthy conflict, commitment, accountability and results.", de: "Teams untersucht auf Vertrauen, konstruktiven Konflikt, Commitment, Verantwortung und Ergebnisse.", fr: "Équipes examinées sur la confiance, le conflit constructif, l'engagement, la responsabilité et les résultats.", es: "Equipos analizados en confianza, conflicto sano, compromiso, responsabilidad y resultados.", ro: "Echipe analizate pe încredere, conflict constructiv, angajament, responsabilitate și rezultate." },
    refs: ["Lencioni, P. (2002). The Five Dysfunctions of a Team.", "Tuckman, B. W. (1965). Developmental sequence in small groups."],
  },
  belbin: {
    name: { nl: "Teamrollen (Belbin)", en: "Team roles (Belbin)", de: "Teamrollen (Belbin)", fr: "Rôles en équipe (Belbin)", es: "Roles de equipo (Belbin)", ro: "Roluri în echipă (Belbin)" },
    desc: { nl: "De bijdrage van personen aan een team beschreven in complementaire teamrollen.", en: "The contribution of individuals to a team described in complementary team roles.", de: "Der Beitrag von Personen zum Team, beschrieben in komplementären Teamrollen.", fr: "La contribution des individus à une équipe décrite en rôles d'équipe complémentaires.", es: "La contribución de las personas a un equipo descrita en roles de equipo complementarios.", ro: "Contribuția persoanelor la o echipă descrisă prin roluri de echipă complementare." },
    refs: ["Belbin, R. M. (1981). Management Teams: Why They Succeed or Fail.", "Belbin, R. M. (1993). Team Roles at Work."],
  },
  leadership: {
    name: { nl: "Leiderschap (situationeel & transformationeel)", en: "Leadership (situational & transformational)", de: "Führung (situativ & transformational)", fr: "Leadership (situationnel & transformationnel)", es: "Liderazgo (situacional y transformacional)", ro: "Leadership (situațional și transformațional)" },
    desc: { nl: "Effectief leiderschap dat stijl afstemt op de situatie en medewerkers inspireert en ontwikkelt.", en: "Effective leadership that adapts style to the situation and inspires and develops people.", de: "Effektive Führung, die den Stil an die Situation anpasst und Menschen inspiriert und entwickelt.", fr: "Un leadership efficace qui adapte le style à la situation et inspire et développe les personnes.", es: "Liderazgo eficaz que adapta el estilo a la situación e inspira y desarrolla a las personas.", ro: "Leadership eficient care adaptează stilul la situație și inspiră și dezvoltă oamenii." },
    refs: ["Hersey, P., & Blanchard, K. H. (1969). Management of Organizational Behavior.", "Bass, B. M. (1985). Leadership and Performance Beyond Expectations.", "Bass, B. M., & Avolio, B. J. (1994). Improving Organizational Effectiveness through Transformational Leadership."],
  },
  leary: {
    name: { nl: "Roos van Leary (interpersoonlijk gedrag)", en: "Leary's Rose (interpersonal behaviour)", de: "Leary-Rose (interpersonelles Verhalten)", fr: "Rose de Leary (comportement interpersonnel)", es: "Rosa de Leary (conducta interpersonal)", ro: "Roza lui Leary (comportament interpersonal)" },
    desc: { nl: "Communicatie- en gedragsstijlen op de assen boven/onder en samen/tegen.", en: "Communication and behaviour styles on the axes above/below and together/opposed.", de: "Kommunikations- und Verhaltensstile auf den Achsen oben/unten und mit/gegen.", fr: "Styles de communication et de comportement sur les axes dessus/dessous et avec/contre.", es: "Estilos de comunicación y comportamiento en los ejes arriba/abajo y con/contra.", ro: "Stiluri de comunicare și comportament pe axele sus/jos și împreună/împotrivă." },
    refs: ["Leary, T. (1957). Interpersonal Diagnosis of Personality.", "Wiggins, J. S. (1979). A psychological taxonomy of trait-descriptive terms: the interpersonal domain.", "Kiesler, D. J. (1983). The 1982 interpersonal circle."],
  },
  conflict: {
    name: { nl: "Conflicthanteringsstijlen (Thomas-Kilmann)", en: "Conflict-handling styles (Thomas-Kilmann)", de: "Konfliktstile (Thomas-Kilmann)", fr: "Styles de gestion des conflits (Thomas-Kilmann)", es: "Estilos de manejo de conflictos (Thomas-Kilmann)", ro: "Stiluri de gestionare a conflictelor (Thomas-Kilmann)" },
    desc: { nl: "Vijf conflictstijlen op de assen assertiviteit en coöperativiteit.", en: "Five conflict styles along the axes of assertiveness and cooperativeness.", de: "Fünf Konfliktstile auf den Achsen Durchsetzungsvermögen und Kooperationsbereitschaft.", fr: "Cinq styles de conflit sur les axes de l'affirmation de soi et de la coopération.", es: "Cinco estilos de conflicto en los ejes de asertividad y cooperación.", ro: "Cinci stiluri de conflict pe axele asertivității și cooperării." },
    refs: ["Thomas, K. W., & Kilmann, R. H. (1974). Thomas-Kilmann Conflict Mode Instrument (TKI).", "Blake, R. R., & Mouton, J. S. (1964). The Managerial Grid.", "Rahim, M. A. (1983). A measure of styles of handling interpersonal conflict."],
  },
  kolb: {
    name: { nl: "Leerstijlen (Kolb)", en: "Learning styles (Kolb)", de: "Lernstile (Kolb)", fr: "Styles d'apprentissage (Kolb)", es: "Estilos de aprendizaje (Kolb)", ro: "Stiluri de învățare (Kolb)" },
    desc: { nl: "Leren als cyclus van ervaren, reflecteren, denken en experimenteren.", en: "Learning as a cycle of experiencing, reflecting, thinking and experimenting.", de: "Lernen als Zyklus aus Erfahren, Reflektieren, Denken und Experimentieren.", fr: "L'apprentissage comme cycle d'expérience, de réflexion, de pensée et d'expérimentation.", es: "El aprendizaje como ciclo de experimentar, reflexionar, pensar y experimentar.", ro: "Învățarea ca ciclu de experimentare, reflecție, gândire și experimentare." },
    refs: ["Kolb, D. A. (1984). Experiential Learning: Experience as the Source of Learning and Development.", "Kolb, A. Y., & Kolb, D. A. (2005). Learning styles and learning spaces."],
  },
  jung: {
    name: { nl: "Psychologische typen (Jung)", en: "Psychological types (Jung)", de: "Psychologische Typen (Jung)", fr: "Types psychologiques (Jung)", es: "Tipos psicológicos (Jung)", ro: "Tipuri psihologice (Jung)" },
    desc: { nl: "Voorkeuren in waarnemen en oordelen, en in het richten van aandacht en energie.", en: "Preferences in perceiving and judging, and in directing attention and energy.", de: "Präferenzen im Wahrnehmen und Urteilen sowie im Ausrichten von Aufmerksamkeit und Energie.", fr: "Préférences dans la perception et le jugement, et dans l'orientation de l'attention et de l'énergie.", es: "Preferencias al percibir y juzgar, y al dirigir la atención y la energía.", ro: "Preferințe în percepere și judecare și în direcționarea atenției și energiei." },
    refs: ["Jung, C. G. (1921). Psychologische Typen.", "Myers, I. B., & McCaulley, M. H. (1985). Manual: A Guide to the Development and Use of the MBTI."],
  },
  canmeds: {
    name: { nl: "CanMEDS-competentieraamwerk", en: "CanMEDS competency framework", de: "CanMEDS-Kompetenzrahmen", fr: "Référentiel de compétences CanMEDS", es: "Marco de competencias CanMEDS", ro: "Cadrul de competențe CanMEDS" },
    desc: { nl: "Zeven samenhangende rollen die professioneel functioneren beschrijven.", en: "Seven interrelated roles that describe professional functioning.", de: "Sieben zusammenhängende Rollen, die professionelles Handeln beschreiben.", fr: "Sept rôles interdépendants qui décrivent le fonctionnement professionnel.", es: "Siete roles interrelacionados que describen el desempeño profesional.", ro: "Șapte roluri interconectate care descriu funcționarea profesională." },
    refs: ["Frank, J. R. (Ed.). (2005). The CanMEDS 2005 Physician Competency Framework.", "Frank, J. R., Snell, L., & Sherbino, J. (Eds.). (2015). CanMEDS 2015 Physician Competency Framework."],
  },
  resilience: {
    name: { nl: "Mentale veerkracht", en: "Mental resilience", de: "Mentale Widerstandsfähigkeit", fr: "Résilience mentale", es: "Resiliencia mental", ro: "Reziliență mentală" },
    desc: { nl: "Het vermogen om te herstellen en zich aan te passen na druk of tegenslag.", en: "The capacity to recover and adapt after pressure or adversity.", de: "Die Fähigkeit, sich nach Druck oder Rückschlägen zu erholen und anzupassen.", fr: "La capacité à récupérer et à s'adapter après une pression ou une adversité.", es: "La capacidad de recuperarse y adaptarse tras la presión o la adversidad.", ro: "Capacitatea de a-și reveni și de a se adapta după presiune sau adversitate." },
    refs: ["Connor, K. M., & Davidson, J. R. T. (2003). Development of a new resilience scale (CD-RISC).", "Masten, A. S. (2001). Ordinary magic: resilience processes in development.", "Smith, B. W., et al. (2008). The Brief Resilience Scale."],
  },
  employability: {
    name: { nl: "Duurzame inzetbaarheid (JD-R & employability)", en: "Sustainable employability (JD-R & employability)", de: "Nachhaltige Beschäftigungsfähigkeit (JD-R & Employability)", fr: "Employabilité durable (JD-R & employabilité)", es: "Empleabilidad sostenible (JD-R y empleabilidad)", ro: "Angajabilitate durabilă (JD-R & angajabilitate)" },
    desc: { nl: "De balans tussen werkeisen en hulpbronnen die inzetbaarheid op lange termijn bepaalt.", en: "The balance between job demands and resources that shapes long-term employability.", de: "Das Gleichgewicht zwischen Arbeitsanforderungen und Ressourcen, das langfristige Beschäftigungsfähigkeit bestimmt.", fr: "L'équilibre entre exigences du travail et ressources qui détermine l'employabilité à long terme.", es: "El equilibrio entre demandas laborales y recursos que determina la empleabilidad a largo plazo.", ro: "Echilibrul dintre cerințele muncii și resurse care determină angajabilitatea pe termen lung." },
    refs: ["Van der Heijden, B. I. J. M., & De Vos, A. (2015). Sustainable careers: introductory chapter.", "Bakker, A. B., & Demerouti, E. (2007). The Job Demands-Resources model.", "Fugate, M., Kinicki, A. J., & Ashforth, B. E. (2004). Employability: a psycho-social construct."],
  },
  engagement: {
    name: { nl: "Bevlogenheid & werktevredenheid", en: "Work engagement & job satisfaction", de: "Arbeitsengagement & Arbeitszufriedenheit", fr: "Engagement au travail & satisfaction professionnelle", es: "Compromiso laboral y satisfacción", ro: "Implicare în muncă și satisfacție profesională" },
    desc: { nl: "De mate van energie, toewijding en betrokkenheid van medewerkers bij hun werk.", en: "The degree of energy, dedication and involvement of employees in their work.", de: "Der Grad an Energie, Hingabe und Einbindung der Mitarbeiter in ihre Arbeit.", fr: "Le degré d'énergie, de dévouement et d'implication des collaborateurs dans leur travail.", es: "El grado de energía, dedicación e implicación de los empleados en su trabajo.", ro: "Gradul de energie, dedicare și implicare a angajaților în munca lor." },
    refs: ["Schaufeli, W. B., & Bakker, A. B. (2004). Utrecht Work Engagement Scale (UWES).", "Bakker, A. B., & Demerouti, E. (2007). The Job Demands-Resources model.", "Harter, J. K., Schmidt, F. L., & Hayes, T. L. (2002). Business-unit-level relationship between engagement and outcomes."],
  },
  sjt: {
    name: { nl: "Praktijkgericht beoordelen (situational judgment)", en: "Situational judgment assessment", de: "Situatives Urteilsvermögen (Situational Judgment)", fr: "Jugement situationnel (situational judgment)", es: "Juicio situacional (situational judgment)", ro: "Judecată situațională (situational judgment)" },
    desc: { nl: "Het beoordelen van gedrag in realistische werksituaties met bewezen voorspellende waarde.", en: "Assessing behaviour in realistic work situations with proven predictive value.", de: "Bewertung von Verhalten in realistischen Arbeitssituationen mit nachgewiesener Vorhersagekraft.", fr: "Évaluer le comportement dans des situations de travail réalistes avec une valeur prédictive prouvée.", es: "Evaluar la conducta en situaciones laborales realistas con valor predictivo probado.", ro: "Evaluarea comportamentului în situații de muncă realiste, cu valoare predictivă dovedită." },
    refs: ["McDaniel, M. A., et al. (2001). Use of situational judgment tests to predict job performance.", "Lievens, F., Peeters, H., & Schollaert, E. (2008). Situational judgment tests: a review.", "Motowidlo, S. J., Dunnette, M. D., & Carter, G. W. (1990). An alternative selection procedure: the low-fidelity simulation."],
  },
  competencymodel: {
    name: { nl: "Competentiemodellering (functieprofilering)", en: "Competency modelling (job profiling)", de: "Kompetenzmodellierung (Stellenprofilierung)", fr: "Modélisation des compétences (profilage de poste)", es: "Modelado de competencias (perfilado de puestos)", ro: "Modelarea competențelor (profilarea posturilor)" },
    desc: { nl: "Functies beschreven in de competenties en niveaus die succes in de rol voorspellen.", en: "Roles described in the competencies and levels that predict success in the role.", de: "Stellen beschrieben in den Kompetenzen und Niveaus, die Erfolg in der Rolle vorhersagen.", fr: "Postes décrits selon les compétences et niveaux qui prédisent la réussite dans le rôle.", es: "Puestos descritos en las competencias y niveles que predicen el éxito en el rol.", ro: "Posturi descrise prin competențele și nivelurile care prezic succesul în rol." },
    refs: ["Spencer, L. M., & Spencer, S. M. (1993). Competence at Work: Models for Superior Performance.", "Boyatzis, R. E. (1982). The Competent Manager.", "Campion, M. A., et al. (2011). Doing competencies well: best practices in competency modeling."],
  },
  potential: {
    name: { nl: "Ontwikkelpotentieel (persoonlijkheid + cognitief)", en: "Development potential (personality + cognitive)", de: "Entwicklungspotenzial (Persönlichkeit + kognitiv)", fr: "Potentiel de développement (personnalité + cognitif)", es: "Potencial de desarrollo (personalidad + cognitivo)", ro: "Potențial de dezvoltare (personalitate + cognitiv)" },
    desc: { nl: "De combinatie van persoonlijkheid en cognitief vermogen die groei en prestatie voorspelt.", en: "The combination of personality and cognitive ability that predicts growth and performance.", de: "Die Kombination aus Persönlichkeit und kognitiver Fähigkeit, die Wachstum und Leistung vorhersagt.", fr: "La combinaison de personnalité et d'aptitude cognitive qui prédit croissance et performance.", es: "La combinación de personalidad y capacidad cognitiva que predice crecimiento y desempeño.", ro: "Combinația dintre personalitate și capacitatea cognitivă care prezice creșterea și performanța." },
    refs: ["Schmidt, F. L., & Hunter, J. E. (1998). The validity and utility of selection methods in personnel psychology.", "Silzer, R., & Church, A. H. (2009). The pearls and perils of identifying potential.", "Costa, P. T., & McCrae, R. R. (1992). Revised NEO Personality Inventory (NEO-PI-R)."],
  },
};

export function theoryFor(slug, lang) {
  const key = slugTheory[slug];
  if (!key || !THEORIES[key]) return null;
  const th = THEORIES[key];
  const ui = theoryUI[lang] || theoryUI.nl;
  const L = (o) => (o ? (o[lang] || o.nl) : "");
  return { title: ui.title, modelLabel: ui.modelLabel, refLabel: ui.refLabel, note: ui.note, name: L(th.name), desc: L(th.desc), refs: th.refs };
}
