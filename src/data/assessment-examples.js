// Voorbeeldvragen per assessment-TYPE, in 6 talen. Ter illustratie op de
// detailpagina's — het zijn representatieve voorbeelden, niet de echte items.

export const EX_UI = {
  nl: { title: "Voorbeeldvragen", intro: "Zo ziet dit assessment er in de praktijk uit. Onderstaande vragen zijn ter illustratie — de echte vragenlijst is uitgebreider.", scaleLabel: "Antwoordschaal", tag: "Voorbeeld" },
  en: { title: "Example questions", intro: "A preview of what this assessment looks like in practice. The questions below are illustrative — the actual questionnaire is more extensive.", scaleLabel: "Answer scale", tag: "Example" },
  de: { title: "Beispielfragen", intro: "Ein Vorgeschmack, wie dieses Assessment in der Praxis aussieht. Die folgenden Fragen dienen der Veranschaulichung — der eigentliche Fragebogen ist umfangreicher.", scaleLabel: "Antwortskala", tag: "Beispiel" },
  fr: { title: "Exemples de questions", intro: "Un aperçu de cet assessment en pratique. Les questions ci-dessous sont données à titre d'illustration — le questionnaire réel est plus complet.", scaleLabel: "Échelle de réponse", tag: "Exemple" },
  es: { title: "Preguntas de ejemplo", intro: "Una muestra de cómo es esta evaluación en la práctica. Las preguntas siguientes son ilustrativas; el cuestionario real es más amplio.", scaleLabel: "Escala de respuesta", tag: "Ejemplo" },
  ro: { title: "Întrebări exemplu", intro: "O previzualizare a modului în care arată această evaluare în practică. Întrebările de mai jos sunt ilustrative — chestionarul real este mai amplu.", scaleLabel: "Scală de răspuns", tag: "Exemplu" },
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
  "verkoopvaardigheden": "skills", "lean-scan": "skills", "job-profiler": "skills",
};

const LIKERT = { nl: "Helemaal oneens — Oneens — Neutraal — Eens — Helemaal eens", en: "Strongly disagree — Disagree — Neutral — Agree — Strongly agree", de: "Stimme gar nicht zu — Neutral — Stimme voll zu", fr: "Pas du tout d'accord — Neutre — Tout à fait d'accord", es: "Muy en desacuerdo — Neutral — Muy de acuerdo", ro: "Total dezacord — Neutru — Total de acord" };

export const EXAMPLES = {
  personality: {
    scale: LIKERT,
    items: {
      nl: ["Ik voel me op mijn gemak in een groep onbekende mensen.", "Ik plan mijn werk graag ruim van tevoren.", "Ik blijf rustig als er onverwacht iets misgaat."],
      en: ["I feel at ease in a group of people I don't know.", "I like to plan my work well in advance.", "I stay calm when something unexpectedly goes wrong."],
      de: ["Ich fühle mich in einer Gruppe unbekannter Menschen wohl.", "Ich plane meine Arbeit gern lange im Voraus.", "Ich bleibe ruhig, wenn unerwartet etwas schiefgeht."],
      fr: ["Je me sens à l'aise dans un groupe de personnes que je ne connais pas.", "J'aime planifier mon travail bien à l'avance.", "Je reste calme lorsqu'un imprévu survient."],
      es: ["Me siento cómodo en un grupo de personas desconocidas.", "Me gusta planificar mi trabajo con antelación.", "Mantengo la calma cuando algo sale mal de forma inesperada."],
      ro: ["Mă simt în largul meu într-un grup de persoane necunoscute.", "Îmi place să îmi planific munca din timp.", "Rămân calm când ceva nu merge bine pe neașteptate."],
    },
  },
  cognitive: {
    scale: { nl: "Meerkeuze — kies het juiste antwoord", en: "Multiple choice — pick the correct answer", de: "Multiple Choice — wählen Sie die richtige Antwort", fr: "Choix multiple — choisissez la bonne réponse", es: "Opción múltiple — elige la respuesta correcta", ro: "Alegere multiplă — alege răspunsul corect" },
    items: {
      nl: ["Welk getal komt logisch na: 2, 4, 8, 16, …?", "‘Boek’ verhoudt zich tot ‘lezen’ zoals ‘vork’ tot …?", "Als alle A’s B zijn en alle B’s C, dan zijn alle A’s …?"],
      en: ["Which number logically follows: 2, 4, 8, 16, …?", "‘Book’ is to ‘reading’ as ‘fork’ is to …?", "If all A’s are B and all B’s are C, then all A’s are …?"],
      de: ["Welche Zahl folgt logisch: 2, 4, 8, 16, …?", "‘Buch’ verhält sich zu ‘lesen’ wie ‘Gabel’ zu …?", "Wenn alle A B sind und alle B C, dann sind alle A …?"],
      fr: ["Quel nombre suit logiquement : 2, 4, 8, 16, … ?", "‘Livre’ est à ‘lire’ ce que ‘fourchette’ est à … ?", "Si tous les A sont B et tous les B sont C, alors tous les A sont … ?"],
      es: ["¿Qué número sigue lógicamente: 2, 4, 8, 16, …?", "‘Libro’ es a ‘leer’ como ‘tenedor’ es a …?", "Si todos los A son B y todos los B son C, entonces todos los A son …?"],
      ro: ["Ce număr urmează logic: 2, 4, 8, 16, …?", "‘Carte’ este pentru ‘citit’ ceea ce ‘furculiță’ este pentru …?", "Dacă toți A sunt B și toți B sunt C, atunci toți A sunt …?"],
    },
  },
  disc: {
    scale: { nl: "Kies wat het best (en minst) bij je past", en: "Choose what fits you best (and least)", de: "Wählen Sie, was am besten (und am wenigsten) passt", fr: "Choisissez ce qui vous correspond le mieux (et le moins)", es: "Elige lo que mejor (y menos) te describe", ro: "Alege ce ți se potrivește cel mai bine (și cel mai puțin)" },
    items: {
      nl: ["Kies het woord dat het best bij je past: Daadkrachtig / Enthousiast / Geduldig / Nauwkeurig.", "Wat past het minst bij je: Direct / Sociaal / Kalm / Kritisch.", "In een team ben ik vooral: Sturend / Inspirerend / Ondersteunend / Analyserend."],
      en: ["Pick the word that fits you best: Decisive / Enthusiastic / Patient / Precise.", "Which fits you least: Direct / Sociable / Calm / Critical.", "In a team I am mainly: Directing / Inspiring / Supporting / Analysing."],
      de: ["Wählen Sie das Wort, das am besten passt: Entschlossen / Enthusiastisch / Geduldig / Genau.", "Was passt am wenigsten: Direkt / Gesellig / Ruhig / Kritisch.", "Im Team bin ich vor allem: Steuernd / Inspirierend / Unterstützend / Analysierend."],
      fr: ["Choisissez le mot qui vous correspond le mieux : Déterminé / Enthousiaste / Patient / Précis.", "Lequel vous correspond le moins : Direct / Sociable / Calme / Critique.", "Dans une équipe, je suis surtout : Directif / Inspirant / Soutenant / Analytique."],
      es: ["Elige la palabra que mejor te describe: Decidido / Entusiasta / Paciente / Preciso.", "¿Cuál te describe menos: Directo / Sociable / Tranquilo / Crítico.", "En un equipo soy sobre todo: Directivo / Inspirador / Colaborador / Analítico."],
      ro: ["Alege cuvântul care ți se potrivește cel mai bine: Hotărât / Entuziast / Răbdător / Precis.", "Care ți se potrivește cel mai puțin: Direct / Sociabil / Calm / Critic.", "Într-o echipă sunt mai ales: Directiv / Inspirator / Suportiv / Analitic."],
    },
  },
  drives: {
    scale: { nl: "Onbelangrijk — Heel belangrijk", en: "Not important — Very important", de: "Unwichtig — Sehr wichtig", fr: "Pas important — Très important", es: "Nada importante — Muy importante", ro: "Neimportant — Foarte important" },
    items: {
      nl: ["Hoe belangrijk is het voor jou om je werk zelfstandig in te richten?", "Hoe belangrijk is het om te blijven leren en jezelf te ontwikkelen?", "Hoe belangrijk zijn waardering en erkenning van collega’s?"],
      en: ["How important is it for you to organise your work independently?", "How important is it to keep learning and developing yourself?", "How important are appreciation and recognition from colleagues?"],
      de: ["Wie wichtig ist es Ihnen, Ihre Arbeit selbstständig zu gestalten?", "Wie wichtig ist es, weiter zu lernen und sich zu entwickeln?", "Wie wichtig sind Wertschätzung und Anerkennung durch Kollegen?"],
      fr: ["Quelle importance accordez-vous à organiser votre travail de façon autonome ?", "Quelle importance accordez-vous à continuer d'apprendre et à vous développer ?", "Quelle importance accordez-vous à la reconnaissance de vos collègues ?"],
      es: ["¿Qué importancia tiene para ti organizar tu trabajo de forma autónoma?", "¿Qué importancia tiene seguir aprendiendo y desarrollándote?", "¿Qué importancia tiene el reconocimiento de tus compañeros?"],
      ro: ["Cât de important este pentru tine să îți organizezi munca independent?", "Cât de important este să înveți continuu și să te dezvolți?", "Cât de importantă este aprecierea din partea colegilor?"],
    },
  },
  feedback360: {
    scale: { nl: "Nooit — Zelden — Soms — Vaak — Altijd", en: "Never — Rarely — Sometimes — Often — Always", de: "Nie — Selten — Manchmal — Oft — Immer", fr: "Jamais — Rarement — Parfois — Souvent — Toujours", es: "Nunca — Rara vez — A veces — A menudo — Siempre", ro: "Niciodată — Rar — Uneori — Des — Întotdeauna" },
    items: {
      nl: ["Deze collega communiceert helder en op tijd.", "Deze collega neemt verantwoordelijkheid voor resultaten.", "Deze collega staat open voor feedback van anderen."],
      en: ["This colleague communicates clearly and on time.", "This colleague takes responsibility for results.", "This colleague is open to feedback from others."],
      de: ["Diese Kollegin/dieser Kollege kommuniziert klar und rechtzeitig.", "Diese Person übernimmt Verantwortung für Ergebnisse.", "Diese Person ist offen für Feedback anderer."],
      fr: ["Ce collègue communique de manière claire et en temps voulu.", "Ce collègue assume la responsabilité des résultats.", "Ce collègue est ouvert aux retours des autres."],
      es: ["Este compañero se comunica con claridad y a tiempo.", "Este compañero asume la responsabilidad de los resultados.", "Este compañero está abierto a las opiniones de los demás."],
      ro: ["Acest coleg comunică clar și la timp.", "Acest coleg își asumă responsabilitatea pentru rezultate.", "Acest coleg este deschis la feedback din partea altora."],
    },
  },
  interest: {
    scale: { nl: "Spreekt me niet aan — Spreekt me erg aan", en: "Not appealing — Very appealing", de: "Spricht mich nicht an — Spricht mich sehr an", fr: "Ne m'attire pas — M'attire beaucoup", es: "No me atrae — Me atrae mucho", ro: "Nu mă atrage — Mă atrage foarte mult" },
    items: {
      nl: ["Ik werk graag met mijn handen aan concrete resultaten.", "Ik los graag ingewikkelde problemen op met cijfers of data.", "Ik help en begeleid graag andere mensen."],
      en: ["I enjoy working with my hands on concrete results.", "I enjoy solving complex problems with numbers or data.", "I enjoy helping and guiding other people."],
      de: ["Ich arbeite gern mit den Händen an konkreten Ergebnissen.", "Ich löse gern komplexe Probleme mit Zahlen oder Daten.", "Ich helfe und begleite gern andere Menschen."],
      fr: ["J'aime travailler de mes mains sur des résultats concrets.", "J'aime résoudre des problèmes complexes avec des chiffres ou des données.", "J'aime aider et accompagner les autres."],
      es: ["Me gusta trabajar con las manos en resultados concretos.", "Me gusta resolver problemas complejos con números o datos.", "Me gusta ayudar y orientar a otras personas."],
      ro: ["Îmi place să lucrez cu mâinile la rezultate concrete.", "Îmi place să rezolv probleme complexe cu cifre sau date.", "Îmi place să ajut și să îndrum alte persoane."],
    },
  },
  team: {
    scale: LIKERT,
    items: {
      nl: ["In ons team weten we wat we van elkaar kunnen verwachten.", "We spreken elkaar aan als afspraken niet worden nagekomen.", "Besluiten worden in ons team door iedereen gedragen."],
      en: ["In our team we know what to expect from one another.", "We address each other when agreements aren't kept.", "Decisions in our team are supported by everyone."],
      de: ["In unserem Team wissen wir, was wir voneinander erwarten können.", "Wir sprechen einander an, wenn Absprachen nicht eingehalten werden.", "Entscheidungen werden in unserem Team von allen mitgetragen."],
      fr: ["Dans notre équipe, nous savons à quoi nous attendre les uns des autres.", "Nous nous interpellons lorsque les accords ne sont pas respectés.", "Les décisions sont soutenues par tous dans notre équipe."],
      es: ["En nuestro equipo sabemos qué esperar unos de otros.", "Nos decimos las cosas cuando no se cumplen los acuerdos.", "Las decisiones cuentan con el apoyo de todo el equipo."],
      ro: ["În echipa noastră știm la ce să ne așteptăm unii de la alții.", "Ne atragem atenția când nu se respectă înțelegerile.", "Deciziile sunt susținute de toți în echipa noastră."],
    },
  },
  wellbeing: {
    scale: LIKERT,
    items: {
      nl: ["Ik heb voldoende energie voor mijn werk.", "Ik kan werk en privé goed in balans houden.", "Ik herstel snel na een drukke of stressvolle periode."],
      en: ["I have enough energy for my work.", "I can keep a good balance between work and private life.", "I recover quickly after a busy or stressful period."],
      de: ["Ich habe genug Energie für meine Arbeit.", "Ich kann Arbeit und Privatleben gut in Balance halten.", "Ich erhole mich schnell nach einer stressigen Phase."],
      fr: ["J'ai suffisamment d'énergie pour mon travail.", "Je parviens à bien équilibrer travail et vie privée.", "Je récupère vite après une période chargée ou stressante."],
      es: ["Tengo suficiente energía para mi trabajo.", "Consigo un buen equilibrio entre el trabajo y la vida privada.", "Me recupero rápido tras un periodo intenso o estresante."],
      ro: ["Am suficientă energie pentru munca mea.", "Reușesc să echilibrez bine munca și viața personală.", "Îmi revin repede după o perioadă aglomerată sau stresantă."],
    },
  },
  skills: {
    scale: { nl: "Kies de meest passende aanpak", en: "Choose the most appropriate approach", de: "Wählen Sie den passendsten Ansatz", fr: "Choisissez l'approche la plus adaptée", es: "Elige el enfoque más adecuado", ro: "Alege abordarea cea mai potrivită" },
    items: {
      nl: ["Een klant twijfelt over de prijs. Wat doe je als eerste?", "Een proces verloopt inefficiënt. Welke stap zet je als eerste?", "Je krijgt tegenstrijdige opdrachten. Hoe pak je dit aan?"],
      en: ["A client hesitates about the price. What do you do first?", "A process runs inefficiently. What is your first step?", "You receive conflicting instructions. How do you handle this?"],
      de: ["Ein Kunde zögert wegen des Preises. Was tun Sie zuerst?", "Ein Prozess läuft ineffizient. Welchen Schritt gehen Sie zuerst?", "Sie erhalten widersprüchliche Aufträge. Wie gehen Sie vor?"],
      fr: ["Un client hésite sur le prix. Que faites-vous en premier ?", "Un processus est inefficace. Quelle est votre première étape ?", "Vous recevez des consignes contradictoires. Comment gérez-vous cela ?"],
      es: ["Un cliente duda por el precio. ¿Qué haces primero?", "Un proceso es ineficiente. ¿Cuál es tu primer paso?", "Recibes instrucciones contradictorias. ¿Cómo lo gestionas?"],
      ro: ["Un client ezită din cauza prețului. Ce faci mai întâi?", "Un proces este ineficient. Care este primul tău pas?", "Primești instrucțiuni contradictorii. Cum procedezi?"],
    },
  },
};

// Handige helper: geeft {title,intro,scaleLabel,tag,scale,items} voor een slug+taal.
export function examplesFor(slug, lang) {
  const ui = EX_UI[lang] || EX_UI.nl;
  const type = slugType[slug] || "personality";
  const set = EXAMPLES[type];
  const L = (o) => o[lang] || o.nl;
  return { title: ui.title, intro: ui.intro, scaleLabel: ui.scaleLabel, tag: ui.tag, scale: L(set.scale), items: L(set.items) };
}
