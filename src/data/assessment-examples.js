// Voorbeeldvragen per assessment-TYPE, in 6 talen. Ter illustratie op de
// detailpagina's - het zijn representatieve voorbeelden, niet de echte items.

export const EX_UI = {
  nl: { title: "Voorbeeldvragen", intro: "Zo ziet dit assessment er in de praktijk uit. Onderstaande vragen zijn ter illustratie - de echte vragenlijst is uitgebreider.", scaleLabel: "Antwoordschaal", tag: "Voorbeeld" },
  en: { title: "Example questions", intro: "A preview of what this assessment looks like in practice. The questions below are illustrative - the actual questionnaire is more extensive.", scaleLabel: "Answer scale", tag: "Example" },
  de: { title: "Beispielfragen", intro: "Ein Vorgeschmack, wie dieses Assessment in der Praxis aussieht. Die folgenden Fragen dienen der Veranschaulichung - der eigentliche Fragebogen ist umfangreicher.", scaleLabel: "Antwortskala", tag: "Beispiel" },
  fr: { title: "Exemples de questions", intro: "Un aperçu de cet assessment en pratique. Les questions ci-dessous sont données à titre d'illustration - le questionnaire réel est plus complet.", scaleLabel: "Échelle de réponse", tag: "Exemple" },
  es: { title: "Preguntas de ejemplo", intro: "Una muestra de cómo es esta evaluación en la práctica. Las preguntas siguientes son ilustrativas; el cuestionario real es más amplio.", scaleLabel: "Escala de respuesta", tag: "Ejemplo" },
  ro: { title: "Întrebări exemplu", intro: "O previzualizare a modului în care arată această evaluare în practică. Întrebările de mai jos sunt ilustrative - chestionarul real este mai amplu.", scaleLabel: "Scală de răspuns", tag: "Exemplu" },
};

// Koppeling assessment-slug -> type. Onbekende slugs vallen terug op "personality".
export const slugType = {
  "big-five": "personality", "15pf": "personality", "canmeds": "personality",
  "communicatiestijlen-test": "personality", "conflictstijlen-test": "personality",
  "leerstijlen": "personality", "typology": "personality", "leiderschapstest": "personality",
  "ontwikkelassessment": "personality", "intake-candidate": "personality",
  "ability-scan": "cognitive", "cognitieve-test": "cognitive",
  "disc-test": "disc",
  "drijfverentest": "drives", "value-drives": "drives", "loopbaanwaarden": "drives",
  "360-graden-feedback": "feedback360", "appraisal": "feedback360",
  "competentie-check": "feedback360", "referentie-check": "feedback360",
  "interesse-scan": "interest", "beroepskeuze-test": "interest", "studiekeuzetest": "interest",
  "teamanalyse": "team", "groepsrollen": "team", "lencioni-teamdynamiek": "team",
  "mentale-veerkracht-scan": "wellbeing", "duurzame-inzetbaarheid-scan": "wellbeing",
  "levensloop-scan": "wellbeing", "coaching-screener-scan": "wellbeing",
  "pulse-survey": "wellbeing", "tevredenheidsonderzoek-medewerkers": "wellbeing", "exit-assessment": "wellbeing",
  "verkoopvaardigheden": "skills", "lean-scan": "skills", "job-profiler": "jobprofile",
};

const LIKERT = { nl: "Helemaal oneens - Oneens - Neutraal - Eens - Helemaal eens", en: "Strongly disagree - Disagree - Neutral - Agree - Strongly agree", de: "Stimme gar nicht zu - Neutral - Stimme voll zu", fr: "Pas du tout d'accord - Neutre - Tout à fait d'accord", es: "Muy en desacuerdo - Neutral - Muy de acuerdo", ro: "Total dezacord - Neutru - Total de acord" };

export const EXAMPLES = {
  personality: {
    scale: LIKERT, answer: "scale",
    items: {
      nl: ["Ik voel me op mijn gemak in een groep onbekende mensen.", "Ik plan mijn werk graag ruim van tevoren.", "Ik blijf rustig als er onverwacht iets misgaat.", "Ik neem graag de leiding als een groep iets moet beslissen.", "Ik let scherp op details in mijn werk.", "Ik zoek uit mezelf contact met nieuwe collega's."],
      en: ["I feel at ease in a group of people I don't know.", "I like to plan my work well in advance.", "I stay calm when something unexpectedly goes wrong.", "I like to take the lead when a group has to decide something.", "I pay close attention to detail in my work.", "I reach out to new colleagues on my own initiative."],
      de: ["Ich fühle mich in einer Gruppe unbekannter Menschen wohl.", "Ich plane meine Arbeit gern lange im Voraus.", "Ich bleibe ruhig, wenn unerwartet etwas schiefgeht.", "Ich übernehme gern die Führung, wenn eine Gruppe entscheiden muss.", "Ich achte in meiner Arbeit genau auf Details.", "Ich gehe von mir aus auf neue Kolleginnen und Kollegen zu."],
      fr: ["Je me sens à l'aise dans un groupe de personnes que je ne connais pas.", "J'aime planifier mon travail bien à l'avance.", "Je reste calme lorsqu'un imprévu survient.", "J'aime prendre la direction quand un groupe doit décider.", "Je fais très attention aux détails dans mon travail.", "Je vais spontanément vers de nouveaux collègues."],
      es: ["Me siento cómodo en un grupo de personas desconocidas.", "Me gusta planificar mi trabajo con antelación.", "Mantengo la calma cuando algo sale mal de forma inesperada.", "Me gusta tomar la iniciativa cuando un grupo debe decidir.", "Presto mucha atención a los detalles en mi trabajo.", "Busco contacto por iniciativa propia con nuevos compañeros."],
      ro: ["Mă simt în largul meu într-un grup de persoane necunoscute.", "Îmi place să îmi planific munca din timp.", "Rămân calm când ceva nu merge bine pe neașteptate.", "Îmi place să preiau conducerea când un grup trebuie să decidă.", "Sunt foarte atent la detalii în munca mea.", "Caut din proprie inițiativă contactul cu colegii noi."],
    },
  },
  cognitive: {
    scale: { nl: "Meerkeuze - kies het juiste antwoord", en: "Multiple choice - pick the correct answer", de: "Multiple Choice - wählen Sie die richtige Antwort", fr: "Choix multiple - choisissez la bonne réponse", es: "Opción múltiple - elige la respuesta correcta", ro: "Alegere multiplă - alege răspunsul corect" },
    answer: "choice",
    mock: {
      q: { nl: "Welk getal komt logisch na: 2, 4, 8, 16, …?", en: "Which number logically follows: 2, 4, 8, 16, …?", de: "Welche Zahl folgt logisch: 2, 4, 8, 16, …?", fr: "Quel nombre suit logiquement : 2, 4, 8, 16, … ?", es: "¿Qué número sigue lógicamente: 2, 4, 8, 16, …?", ro: "Ce număr urmează logic: 2, 4, 8, 16, …?" },
      options: { nl: ["24", "30", "32", "64"], en: ["24", "30", "32", "64"], de: ["24", "30", "32", "64"], fr: ["24", "30", "32", "64"], es: ["24", "30", "32", "64"], ro: ["24", "30", "32", "64"] },
    },
    items: {
      nl: ["Welk getal komt logisch na: 2, 4, 8, 16, …?", "‘Boek’ verhoudt zich tot ‘lezen’ zoals ‘vork’ tot …?", "Als alle A’s B zijn en alle B’s C, dan zijn alle A’s …?", "Welke figuur hoort niet in de reeks thuis?", "Een product van 80 euro daalt met 25% in prijs. Wat kost het dan?", "'Altijd' verhoudt zich tot 'nooit' zoals 'alles' tot …?"],
      en: ["Which number logically follows: 2, 4, 8, 16, …?", "‘Book’ is to ‘reading’ as ‘fork’ is to …?", "If all A’s are B and all B’s are C, then all A’s are …?", "Which figure does not belong in the series?", "A product of 80 euro drops 25% in price. What does it cost then?", "'Always' relates to 'never' as 'everything' relates to …?"],
      de: ["Welche Zahl folgt logisch: 2, 4, 8, 16, …?", "‘Buch’ verhält sich zu ‘lesen’ wie ‘Gabel’ zu …?", "Wenn alle A B sind und alle B C, dann sind alle A …?", "Welche Figur gehört nicht in die Reihe?", "Ein Produkt für 80 Euro wird um 25% günstiger. Was kostet es dann?", "'Immer' verhält sich zu 'nie' wie 'alles' zu …?"],
      fr: ["Quel nombre suit logiquement : 2, 4, 8, 16, … ?", "‘Livre’ est à ‘lire’ ce que ‘fourchette’ est à … ?", "Si tous les A sont B et tous les B sont C, alors tous les A sont … ?", "Quelle figure n'appartient pas à la série ?", "Un produit à 80 euros baisse de 25%. Combien coûte-t-il ?", "'Toujours' est à 'jamais' ce que 'tout' est à …?"],
      es: ["¿Qué número sigue lógicamente: 2, 4, 8, 16, …?", "‘Libro’ es a ‘leer’ como ‘tenedor’ es a …?", "Si todos los A son B y todos los B son C, entonces todos los A son …?", "¿Qué figura no encaja en la serie?", "Un producto de 80 euros baja un 25%. ¿Cuánto cuesta entonces?", "'Siempre' es a 'nunca' lo que 'todo' es a …?"],
      ro: ["Ce număr urmează logic: 2, 4, 8, 16, …?", "‘Carte’ este pentru ‘citit’ ceea ce ‘furculiță’ este pentru …?", "Dacă toți A sunt B și toți B sunt C, atunci toți A sunt …?", "Care figură nu se potrivește în serie?", "Un produs de 80 de euro scade cu 25%. Cât costă atunci?", "'Întotdeauna' este pentru 'niciodată' ceea ce 'tot' este pentru …?"],
    },
  },
  disc: {
    scale: { nl: "Kies wat het best (en minst) bij je past", en: "Choose what fits you best (and least)", de: "Wählen Sie, was am besten (und am wenigsten) passt", fr: "Choisissez ce qui vous correspond le mieux (et le moins)", es: "Elige lo que mejor (y menos) te describe", ro: "Alege ce ți se potrivește cel mai bine (și cel mai puțin)" },
    answer: "choice",
    mock: {
      q: { nl: "Kies het woord dat het best bij je past.", en: "Pick the word that fits you best.", de: "Wählen Sie das Wort, das am besten zu Ihnen passt.", fr: "Choisissez le mot qui vous correspond le mieux.", es: "Elige la palabra que mejor te describe.", ro: "Alege cuvântul care ți se potrivește cel mai bine." },
      options: { nl: ["Daadkrachtig", "Enthousiast", "Geduldig", "Nauwkeurig"], en: ["Decisive", "Enthusiastic", "Patient", "Precise"], de: ["Entschlossen", "Enthusiastisch", "Geduldig", "Genau"], fr: ["Déterminé", "Enthousiaste", "Patient", "Précis"], es: ["Decidido", "Entusiasta", "Paciente", "Preciso"], ro: ["Hotărât", "Entuziast", "Răbdător", "Precis"] },
    },
    items: {
      nl: ["Kies het woord dat het best bij je past: Daadkrachtig / Enthousiast / Geduldig / Nauwkeurig.", "Wat past het minst bij je: Direct / Sociaal / Kalm / Kritisch.", "In een team ben ik vooral: Sturend / Inspirerend / Ondersteunend / Analyserend.", "Wat typeert jou het meest in overleg: Beslissen / Overtuigen / Luisteren / Onderbouwen.", "Onder tijdsdruk word ik vooral: Directer / Enthousiaster / Rustiger / Preciezer.", "Wat vind je het lastigst: Details / Regels / Snelle wisselingen / Confrontatie."],
      en: ["Pick the word that fits you best: Decisive / Enthusiastic / Patient / Precise.", "Which fits you least: Direct / Sociable / Calm / Critical.", "In a team I am mainly: Directing / Inspiring / Supporting / Analysing.", "What typifies you most in a meeting: Deciding / Persuading / Listening / Substantiating.", "Under time pressure I mainly become: More direct / More enthusiastic / Calmer / More precise.", "What do you find hardest: Details / Rules / Rapid changes / Confrontation."],
      de: ["Wählen Sie das Wort, das am besten passt: Entschlossen / Enthusiastisch / Geduldig / Genau.", "Was passt am wenigsten: Direkt / Gesellig / Ruhig / Kritisch.", "Im Team bin ich vor allem: Steuernd / Inspirierend / Unterstützend / Analysierend.", "Was kennzeichnet Sie in Besprechungen am meisten: Entscheiden / Überzeugen / Zuhören / Begründen.", "Unter Zeitdruck werde ich vor allem: Direkter / Begeisterter / Ruhiger / Genauer.", "Was fällt Ihnen am schwersten: Details / Regeln / Schnelle Wechsel / Konfrontation."],
      fr: ["Choisissez le mot qui vous correspond le mieux : Déterminé / Enthousiaste / Patient / Précis.", "Lequel vous correspond le moins : Direct / Sociable / Calme / Critique.", "Dans une équipe, je suis surtout : Directif / Inspirant / Soutenant / Analytique.", "Ce qui vous caractérise le plus en réunion : Décider / Convaincre / Écouter / Argumenter.", "Sous pression, je deviens surtout : Plus direct / Plus enthousiaste / Plus calme / Plus précis.", "Ce que vous trouvez le plus difficile : Les détails / Les règles / Les changements rapides / La confrontation."],
      es: ["Elige la palabra que mejor te describe: Decidido / Entusiasta / Paciente / Preciso.", "¿Cuál te describe menos: Directo / Sociable / Tranquilo / Crítico.", "En un equipo soy sobre todo: Directivo / Inspirador / Colaborador / Analítico.", "Lo que más te caracteriza en una reunión: Decidir / Convencer / Escuchar / Argumentar.", "Bajo presión me vuelvo sobre todo: Más directo / Más entusiasta / Más tranquilo / Más preciso.", "Lo que te resulta más difícil: Los detalles / Las reglas / Los cambios rápidos / La confrontación."],
      ro: ["Alege cuvântul care ți se potrivește cel mai bine: Hotărât / Entuziast / Răbdător / Precis.", "Care ți se potrivește cel mai puțin: Direct / Sociabil / Calm / Critic.", "Într-o echipă sunt mai ales: Directiv / Inspirator / Suportiv / Analitic.", "Ce te caracterizează cel mai mult în ședințe: Decizi / Convingi / Asculți / Argumentezi.", "Sub presiune devin mai ales: Mai direct / Mai entuziast / Mai calm / Mai precis.", "Ce ți se pare cel mai greu: Detaliile / Regulile / Schimbările rapide / Confruntarea."],
    },
  },
  drives: {
    scale: { nl: "Onbelangrijk - Heel belangrijk", en: "Not important - Very important", de: "Unwichtig - Sehr wichtig", fr: "Pas important - Très important", es: "Nada importante - Muy importante", ro: "Neimportant - Foarte important" },
    answer: "scale",
    items: {
      nl: ["Hoe belangrijk is het voor jou om je werk zelfstandig in te richten?", "Hoe belangrijk is het om te blijven leren en jezelf te ontwikkelen?", "Hoe belangrijk zijn waardering en erkenning van collega’s?", "Hoe belangrijk is het voor jou om samen met anderen te werken?", "Hoe belangrijk is zekerheid over je baan en inkomen?", "Hoe belangrijk is het om invloed te hebben op besluiten?"],
      en: ["How important is it for you to organise your work independently?", "How important is it to keep learning and developing yourself?", "How important are appreciation and recognition from colleagues?", "How important is it for you to work together with others?", "How important is security about your job and income?", "How important is it to have influence on decisions?"],
      de: ["Wie wichtig ist es Ihnen, Ihre Arbeit selbstständig zu gestalten?", "Wie wichtig ist es, weiter zu lernen und sich zu entwickeln?", "Wie wichtig sind Wertschätzung und Anerkennung durch Kollegen?", "Wie wichtig ist es Ihnen, mit anderen zusammenzuarbeiten?", "Wie wichtig ist Sicherheit bei Arbeitsplatz und Einkommen?", "Wie wichtig ist Einfluss auf Entscheidungen?"],
      fr: ["Quelle importance accordez-vous à organiser votre travail de façon autonome ?", "Quelle importance accordez-vous à continuer d'apprendre et à vous développer ?", "Quelle importance accordez-vous à la reconnaissance de vos collègues ?", "Quelle importance accordez-vous au travail avec les autres ?", "Quelle importance a la sécurité de l'emploi et du revenu ?", "Quelle importance a le fait d'influencer les décisions ?"],
      es: ["¿Qué importancia tiene para ti organizar tu trabajo de forma autónoma?", "¿Qué importancia tiene seguir aprendiendo y desarrollándote?", "¿Qué importancia tiene el reconocimiento de tus compañeros?", "¿Qué importancia tiene para ti trabajar junto a otros?", "¿Qué importancia tiene la seguridad del empleo y los ingresos?", "¿Qué importancia tiene influir en las decisiones?"],
      ro: ["Cât de important este pentru tine să îți organizezi munca independent?", "Cât de important este să înveți continuu și să te dezvolți?", "Cât de importantă este aprecierea din partea colegilor?", "Cât de important este pentru tine să lucrezi împreună cu alții?", "Cât de importantă este siguranța locului de muncă și a venitului?", "Cât de important este să ai influență asupra deciziilor?"],
    },
  },
  feedback360: {
    scale: { nl: "Nooit - Zelden - Soms - Vaak - Altijd", en: "Never - Rarely - Sometimes - Often - Always", de: "Nie - Selten - Manchmal - Oft - Immer", fr: "Jamais - Rarement - Parfois - Souvent - Toujours", es: "Nunca - Rara vez - A veces - A menudo - Siempre", ro: "Niciodată - Rar - Uneori - Des - Întotdeauna" },
    answer: "scale",
    items: {
      nl: ["Deze collega communiceert helder en op tijd.", "Deze collega neemt verantwoordelijkheid voor resultaten.", "Deze collega staat open voor feedback van anderen.", "Deze collega geeft anderen ruimte om mee te denken.", "Deze collega houdt het overzicht als het druk wordt.", "Deze collega komt afspraken na."],
      en: ["This colleague communicates clearly and on time.", "This colleague takes responsibility for results.", "This colleague is open to feedback from others.", "This colleague gives others room to contribute.", "This colleague keeps an overview when things get busy.", "This colleague keeps agreements."],
      de: ["Diese Kollegin/dieser Kollege kommuniziert klar und rechtzeitig.", "Diese Person übernimmt Verantwortung für Ergebnisse.", "Diese Person ist offen für Feedback anderer.", "Diese Kollegin oder dieser Kollege lässt anderen Raum zum Mitdenken.", "Diese Person behält den Überblick, wenn es hektisch wird.", "Diese Person hält Absprachen ein."],
      fr: ["Ce collègue communique de manière claire et en temps voulu.", "Ce collègue assume la responsabilité des résultats.", "Ce collègue est ouvert aux retours des autres.", "Ce collègue laisse de la place aux idées des autres.", "Ce collègue garde une vue d'ensemble quand la charge augmente.", "Ce collègue respecte les engagements pris."],
      es: ["Este compañero se comunica con claridad y a tiempo.", "Este compañero asume la responsabilidad de los resultados.", "Este compañero está abierto a las opiniones de los demás.", "Este compañero da espacio a las ideas de los demás.", "Este compañero mantiene la visión de conjunto cuando hay mucha carga.", "Este compañero cumple los acuerdos."],
      ro: ["Acest coleg comunică clar și la timp.", "Acest coleg își asumă responsabilitatea pentru rezultate.", "Acest coleg este deschis la feedback din partea altora.", "Acest coleg lasă spațiu ideilor celorlalți.", "Acest coleg păstrează imaginea de ansamblu când e aglomerat.", "Acest coleg respectă înțelegerile."],
    },
  },
  interest: {
    scale: { nl: "Spreekt me niet aan - Spreekt me erg aan", en: "Not appealing - Very appealing", de: "Spricht mich nicht an - Spricht mich sehr an", fr: "Ne m'attire pas - M'attire beaucoup", es: "No me atrae - Me atrae mucho", ro: "Nu mă atrage - Mă atrage foarte mult" },
    answer: "scale",
    items: {
      nl: ["Ik werk graag met mijn handen aan concrete resultaten.", "Ik los graag ingewikkelde problemen op met cijfers of data.", "Ik help en begeleid graag andere mensen.", "Ik organiseer graag activiteiten voor een groep.", "Ik ben graag creatief bezig met vormgeving of tekst.", "Ik werk het liefst volgens duidelijke procedures."],
      en: ["I enjoy working with my hands on concrete results.", "I enjoy solving complex problems with numbers or data.", "I enjoy helping and guiding other people.", "I enjoy organising activities for a group.", "I like being creative with design or writing.", "I prefer working according to clear procedures."],
      de: ["Ich arbeite gern mit den Händen an konkreten Ergebnissen.", "Ich löse gern komplexe Probleme mit Zahlen oder Daten.", "Ich helfe und begleite gern andere Menschen.", "Ich organisiere gern Aktivitäten für eine Gruppe.", "Ich bin gern kreativ mit Gestaltung oder Text.", "Ich arbeite am liebsten nach klaren Abläufen."],
      fr: ["J'aime travailler de mes mains sur des résultats concrets.", "J'aime résoudre des problèmes complexes avec des chiffres ou des données.", "J'aime aider et accompagner les autres.", "J'aime organiser des activités pour un groupe.", "J'aime être créatif avec le design ou l'écriture.", "Je préfère travailler selon des procédures claires."],
      es: ["Me gusta trabajar con las manos en resultados concretos.", "Me gusta resolver problemas complejos con números o datos.", "Me gusta ayudar y orientar a otras personas.", "Me gusta organizar actividades para un grupo.", "Me gusta ser creativo con el diseño o los textos.", "Prefiero trabajar con procedimientos claros."],
      ro: ["Îmi place să lucrez cu mâinile la rezultate concrete.", "Îmi place să rezolv probleme complexe cu cifre sau date.", "Îmi place să ajut și să îndrum alte persoane.", "Îmi place să organizez activități pentru un grup.", "Îmi place să fiu creativ cu design sau text.", "Prefer să lucrez după proceduri clare."],
    },
  },
  team: {
    scale: LIKERT, answer: "scale",
    items: {
      nl: ["In ons team weten we wat we van elkaar kunnen verwachten.", "We spreken elkaar aan als afspraken niet worden nagekomen.", "Besluiten worden in ons team door iedereen gedragen.", "We bespreken verschillen van mening open met elkaar.", "Iedereen weet waar het team dit jaar voor gaat.", "We staan stil bij wat er goed gaat."],
      en: ["In our team we know what to expect from one another.", "We address each other when agreements aren't kept.", "Decisions in our team are supported by everyone.", "We discuss differences of opinion openly.", "Everyone knows what the team is going for this year.", "We take time to note what is going well."],
      de: ["In unserem Team wissen wir, was wir voneinander erwarten können.", "Wir sprechen einander an, wenn Absprachen nicht eingehalten werden.", "Entscheidungen werden in unserem Team von allen mitgetragen.", "Wir sprechen Meinungsverschiedenheiten offen an.", "Alle wissen, wofür das Team dieses Jahr steht.", "Wir halten fest, was gut läuft."],
      fr: ["Dans notre équipe, nous savons à quoi nous attendre les uns des autres.", "Nous nous interpellons lorsque les accords ne sont pas respectés.", "Les décisions sont soutenues par tous dans notre équipe.", "Nous abordons ouvertement nos désaccords.", "Chacun sait ce que vise l'équipe cette année.", "Nous prenons le temps de souligner ce qui va bien."],
      es: ["En nuestro equipo sabemos qué esperar unos de otros.", "Nos decimos las cosas cuando no se cumplen los acuerdos.", "Las decisiones cuentan con el apoyo de todo el equipo.", "Hablamos abiertamente de las diferencias de opinión.", "Todos saben qué persigue el equipo este año.", "Nos detenemos en lo que va bien."],
      ro: ["În echipa noastră știm la ce să ne așteptăm unii de la alții.", "Ne atragem atenția când nu se respectă înțelegerile.", "Deciziile sunt susținute de toți în echipa noastră.", "Discutăm deschis diferențele de opinie.", "Toți știu ce urmărește echipa anul acesta.", "Ne oprim și asupra a ceea ce merge bine."],
    },
  },
  wellbeing: {
    scale: LIKERT, answer: "scale",
    items: {
      nl: ["Ik heb voldoende energie voor mijn werk.", "Ik kan werk en privé goed in balans houden.", "Ik herstel snel na een drukke of stressvolle periode.", "Ik krijg voldoende steun van mijn leidinggevende.", "Ik zie mezelf dit werk over drie jaar nog doen.", "De hoeveelheid werk is goed te behappen."],
      en: ["I have enough energy for my work.", "I can keep a good balance between work and private life.", "I recover quickly after a busy or stressful period.", "I get enough support from my manager.", "I can see myself still doing this work in three years.", "The amount of work is manageable."],
      de: ["Ich habe genug Energie für meine Arbeit.", "Ich kann Arbeit und Privatleben gut in Balance halten.", "Ich erhole mich schnell nach einer stressigen Phase.", "Ich bekomme genug Unterstützung von meiner Führungskraft.", "Ich sehe mich diese Arbeit in drei Jahren noch machen.", "Die Arbeitsmenge ist gut zu bewältigen."],
      fr: ["J'ai suffisamment d'énergie pour mon travail.", "Je parviens à bien équilibrer travail et vie privée.", "Je récupère vite après une période chargée ou stressante.", "Je reçois assez de soutien de mon responsable.", "Je me vois encore faire ce travail dans trois ans.", "La charge de travail reste gérable."],
      es: ["Tengo suficiente energía para mi trabajo.", "Consigo un buen equilibrio entre el trabajo y la vida privada.", "Me recupero rápido tras un periodo intenso o estresante.", "Recibo suficiente apoyo de mi responsable.", "Me veo haciendo este trabajo dentro de tres años.", "La cantidad de trabajo es manejable."],
      ro: ["Am suficientă energie pentru munca mea.", "Reușesc să echilibrez bine munca și viața personală.", "Îmi revin repede după o perioadă aglomerată sau stresantă.", "Primesc suficient sprijin de la managerul meu.", "Mă văd făcând această muncă și peste trei ani.", "Volumul de muncă este gestionabil."],
    },
  },
  skills: {
    scale: { nl: "Kies de meest passende aanpak", en: "Choose the most appropriate approach", de: "Wählen Sie den passendsten Ansatz", fr: "Choisissez l'approche la plus adaptée", es: "Elige el enfoque más adecuado", ro: "Alege abordarea cea mai potrivită" },
    answer: "choice",
    mock: {
      q: { nl: "Een proces verloopt inefficiënt. Welke stap zet je als eerste?", en: "A process runs inefficiently. What is your first step?", de: "Ein Prozess läuft ineffizient. Welchen Schritt gehen Sie zuerst?", fr: "Un processus est inefficace. Quelle est votre première étape ?", es: "Un proceso es ineficiente. ¿Cuál es tu primer paso?", ro: "Un proces este ineficient. Care este primul tău pas?" },
      options: { nl: ["Breng eerst de knelpunten in kaart", "Los meteen het grootste symptoom op", "Vraag om een extra budget", "Wacht op instructies van boven"], en: ["Map the bottlenecks first", "Fix the biggest symptom right away", "Ask for extra budget", "Wait for instructions from above"], de: ["Zuerst die Engpässe erfassen", "Sofort das größte Symptom beheben", "Zusätzliches Budget anfragen", "Auf Anweisungen von oben warten"], fr: ["Cartographier d'abord les points de blocage", "Corriger tout de suite le principal symptôme", "Demander un budget supplémentaire", "Attendre les instructions de la hiérarchie"], es: ["Mapear primero los cuellos de botella", "Resolver de inmediato el mayor síntoma", "Pedir presupuesto adicional", "Esperar instrucciones de arriba"], ro: ["Cartografiază mai întâi blocajele", "Rezolvă imediat cel mai mare simptom", "Cere buget suplimentar", "Așteaptă instrucțiuni de sus"] },
    },
    items: {
      nl: ["Een klant twijfelt over de prijs. Wat doe je als eerste?", "Een proces verloopt inefficiënt. Welke stap zet je als eerste?", "Je krijgt tegenstrijdige opdrachten. Hoe pak je dit aan?", "Een collega levert te laat aan. Wat doe je als eerste?", "Een klant is ontevreden over de service. Hoe reageer je?", "Je ziet een fout die steeds terugkomt. Wat doe je?"],
      en: ["A client hesitates about the price. What do you do first?", "A process runs inefficiently. What is your first step?", "You receive conflicting instructions. How do you handle this?", "A colleague delivers too late. What do you do first?", "A customer is unhappy with the service. How do you respond?", "You spot a mistake that keeps recurring. What do you do?"],
      de: ["Ein Kunde zögert wegen des Preises. Was tun Sie zuerst?", "Ein Prozess läuft ineffizient. Welchen Schritt gehen Sie zuerst?", "Sie erhalten widersprüchliche Aufträge. Wie gehen Sie vor?", "Eine Kollegin liefert zu spät. Was tun Sie zuerst?", "Ein Kunde ist unzufrieden mit dem Service. Wie reagieren Sie?", "Ihnen fällt ein wiederkehrender Fehler auf. Was tun Sie?"],
      fr: ["Un client hésite sur le prix. Que faites-vous en premier ?", "Un processus est inefficace. Quelle est votre première étape ?", "Vous recevez des consignes contradictoires. Comment gérez-vous cela ?", "Un collègue livre en retard. Que faites-vous en premier ?", "Un client est mécontent du service. Comment réagissez-vous ?", "Vous repérez une erreur qui revient sans cesse. Que faites-vous ?"],
      es: ["Un cliente duda por el precio. ¿Qué haces primero?", "Un proceso es ineficiente. ¿Cuál es tu primer paso?", "Recibes instrucciones contradictorias. ¿Cómo lo gestionas?", "Un compañero entrega tarde. ¿Qué haces primero?", "Un cliente está descontento con el servicio. ¿Cómo reaccionas?", "Detectas un error que se repite. ¿Qué haces?"],
      ro: ["Un client ezită din cauza prețului. Ce faci mai întâi?", "Un proces este ineficient. Care este primul tău pas?", "Primești instrucțiuni contradictorii. Cum procedezi?", "Un coleg livrează prea târziu. Ce faci mai întâi?", "Un client este nemulțumit de servicii. Cum reacționezi?", "Observi o greșeală care se tot repetă. Ce faci?"],
    },
  },
  jobprofile: {
    scale: { nl: "Niet nodig - Essentieel voor de functie", en: "Not needed - Essential for the role", de: "Nicht nötig - Unverzichtbar für die Stelle", fr: "Pas nécessaire - Essentiel pour le poste", es: "No necesario - Esencial para el puesto", ro: "Nu este necesar - Esențial pentru post" },
    answer: "scale",
    items: {
      nl: ["Hoe belangrijk is 'analytisch vermogen' voor deze functie?", "Hoe belangrijk is 'klantgerichtheid' voor deze functie?", "Hoe belangrijk is 'plannen en organiseren' voor deze functie?", "Hoe belangrijk is 'samenwerken' voor deze functie?", "Hoe belangrijk is 'stressbestendigheid' voor deze functie?", "Hoe belangrijk is 'zelfstandig werken' voor deze functie?"],
      en: ["How important is 'analytical ability' for this role?", "How important is 'customer focus' for this role?", "How important is 'planning and organising' for this role?", "How important is 'collaboration' for this role?", "How important is 'resilience under pressure' for this role?", "How important is 'working independently' for this role?"],
      de: ["Wie wichtig ist 'analytisches Denken' für diese Stelle?", "Wie wichtig ist 'Kundenorientierung' für diese Stelle?", "Wie wichtig ist 'Planen und Organisieren' für diese Stelle?", "Wie wichtig ist 'Zusammenarbeit' für diese Stelle?", "Wie wichtig ist 'Belastbarkeit' für diese Stelle?", "Wie wichtig ist 'selbstständiges Arbeiten' für diese Stelle?"],
      fr: ["Quelle importance a 'la capacité d'analyse' pour ce poste ?", "Quelle importance a 'l'orientation client' pour ce poste ?", "Quelle importance a 'la planification et l'organisation' pour ce poste ?", "Quelle importance a 'la collaboration' pour ce poste ?", "Quelle importance a 'la résistance au stress' pour ce poste ?", "Quelle importance a 'l'autonomie' pour ce poste ?"],
      es: ["¿Qué importancia tiene 'la capacidad analítica' para este puesto?", "¿Qué importancia tiene 'la orientación al cliente' para este puesto?", "¿Qué importancia tiene 'planificar y organizar' para este puesto?", "¿Qué importancia tiene 'la colaboración' para este puesto?", "¿Qué importancia tiene 'la resistencia al estrés' para este puesto?", "¿Qué importancia tiene 'trabajar de forma autónoma' para este puesto?"],
      ro: ["Cât de importantă este 'capacitatea analitică' pentru acest post?", "Cât de importantă este 'orientarea către client' pentru acest post?", "Cât de importantă este 'planificarea și organizarea' pentru acest post?", "Cât de importantă este 'colaborarea' pentru acest post?", "Cât de importantă este 'rezistența la stres' pentru acest post?", "Cât de important este 'lucrul independent' pentru acest post?"],
    },
  },
};

// Handige helper: geeft {title,intro,scaleLabel,tag,scale,items} voor een slug+taal.
export function examplesFor(slug, lang) {
  const ui = EX_UI[lang] || EX_UI.nl;
  const type = slugType[slug] || "personality";
  const set = EXAMPLES[type];
  const L = (o) => o[lang] || o.nl;
  const answer = set.answer || "scale";
  const mockQuestion = set.mock ? L(set.mock.q) : (L(set.items)[0] || "");
  const mockOptions = set.mock ? L(set.mock.options) : null;
  return { title: ui.title, intro: ui.intro, scaleLabel: ui.scaleLabel, tag: ui.tag, scale: L(set.scale), items: L(set.items), answer, mockQuestion, mockOptions };
}
