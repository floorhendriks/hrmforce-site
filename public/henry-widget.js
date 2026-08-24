/**
 * Henry — hrmforce chatbot widget (standalone external script)
 * Self-injecting build generated from the live hrmforce.com widget (latest).
 * Embed: <script src=".../henry-widget.js" defer></script> before </body>.
 */
(function(){
  var __HENRY_CSS = "\n  #hrmforce-chatbot * { box-sizing: border-box; }\n  #hrmforce-chatbot { position: fixed; bottom: 24px; right: 24px; z-index: 999999; font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Arial, sans-serif; }\n\n  #hrmf-bubble { width: 60px; height: 60px; border-radius: 50%; background: #f5a623 url('data:image/jpeg;base64,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') center/cover no-repeat; color: #1a3a5c; border: 2px solid #f5a623; cursor: pointer; box-shadow: 0 4px 14px rgba(0,0,0,0.18); display: flex; align-items: center; justify-content: center; transition: transform .2s ease, box-shadow .2s ease; overflow: hidden; }\n  #hrmf-bubble:hover { transform: scale(1.06); box-shadow: 0 6px 18px rgba(0,0,0,0.22); }\n  #hrmf-bubble svg { display: none; }\n\n  #hrmf-panel { display: none; flex-direction: column; width: 380px; max-width: calc(100vw - 32px); height: 580px; max-height: calc(100vh - 80px); background: #fff; border-radius: 14px; box-shadow: 0 14px 40px rgba(0,0,0,0.22); overflow: hidden; position: absolute; bottom: 76px; right: 0; }\n  #hrmforce-chatbot.open #hrmf-panel { display: flex; }\n  #hrmforce-chatbot.open #hrmf-bubble { display: none; }\n\n  .hrmf-header { background: #1a3a5c; color: #fff; padding: 14px 16px; display: flex; align-items: center; justify-content: space-between; }\n  .hrmf-header-info { display: flex; align-items: center; gap: 10px; }\n  .hrmf-avatar { width: 36px; height: 36px; border-radius: 50%; background: #f5a623 url('data:image/jpeg;base64,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') no-repeat; background-size: cover; background-position: center; color: transparent; font-weight: 700; display: flex; align-items: center; justify-content: center; font-size: 0; overflow: hidden; }\n  .hrmf-title { font-weight: 600; font-size: 15px; line-height: 1.2; }\n  .hrmf-subtitle { font-size: 11px; opacity: 0.8; }\n  .hrmf-header-actions { display: flex; gap: 6px; align-items: center; }\n  .hrmf-lang { background: rgba(255,255,255,0.12); color: #fff; border: 1px solid rgba(255,255,255,0.2); padding: 4px 6px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600; appearance: none; -webkit-appearance: none; padding-right: 18px; background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='white'><path d='M7 10l5 5 5-5z'/></svg>\"); background-repeat: no-repeat; background-position: right 4px center; }\n  .hrmf-lang:hover { background-color: rgba(255,255,255,0.2); }\n  .hrmf-lang option { background: #1a3a5c; color: #fff; }\n  .hrmf-close { background: transparent; border: none; color: #fff; font-size: 22px; line-height: 1; cursor: pointer; padding: 0 6px; }\n\n  .hrmf-messages { flex: 1; padding: 16px; overflow-y: auto; background: #f4f5f7; display: flex; flex-direction: column; gap: 10px; }\n  .hrmf-msg { max-width: 85%; padding: 10px 12px; border-radius: 12px; font-size: 14px; line-height: 1.45; word-wrap: break-word; }\n  .hrmf-msg a { color: inherit; text-decoration: underline; }\n  .hrmf-msg.bot { background: #fff; color: #1a3a5c; align-self: flex-start; border: 1px solid #e6e8eb; border-bottom-left-radius: 4px; }\n  .hrmf-msg.user { background: #1a3a5c; color: #fff; align-self: flex-end; border-bottom-right-radius: 4px; }\n  .hrmf-typing { align-self: flex-start; padding: 10px 14px; background: #fff; border-radius: 12px; border: 1px solid #e6e8eb; }\n  .hrmf-typing span { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #aab2ba; margin: 0 2px; animation: hrmf-blink 1.2s infinite; }\n  .hrmf-typing span:nth-child(2) { animation-delay: 0.2s; }\n  .hrmf-typing span:nth-child(3) { animation-delay: 0.4s; }\n  @keyframes hrmf-blink { 0%, 80%, 100% { opacity: 0.3; } 40% { opacity: 1; } }\n\n  .hrmf-suggestions { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }\n  .hrmf-chip { background: #fff; border: 1px solid #f5a623; color: #1a3a5c; padding: 6px 10px; border-radius: 16px; font-size: 12px; cursor: pointer; transition: background .15s; }\n  .hrmf-chip:hover { background: #fff5e0; }\n\n  .hrmf-input-wrap { border-top: 1px solid #e6e8eb; background: #fff; padding: 10px; display: flex; gap: 8px; align-items: center; }\n  .hrmf-input { flex: 1; border: 1px solid #d0d4d9; border-radius: 20px; padding: 9px 14px; font-size: 14px; outline: none; font-family: inherit; }\n  .hrmf-input:focus { border-color: #f5a623; }\n  .hrmf-send { background: #f5a623; color: #1a3a5c; border: none; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; }\n  .hrmf-send:hover { background: #e89500; }\n  .hrmf-send svg { width: 16px; height: 16px; }\n\n  .hrmf-footer { padding: 6px 12px; background: #fff; border-top: 1px solid #e6e8eb; font-size: 10px; color: #8892a0; text-align: center; }\n  .hrmf-footer a { color: #1a3a5c; text-decoration: none; }\n";
  var __HENRY_HTML = "<div id=\"hrmforce-chatbot\">\n  <button id=\"hrmf-bubble\" aria-label=\"Open chat\">\n    <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M12 2C6.48 2 2 6.04 2 11c0 2.5 1.16 4.74 3 6.31V22l3.97-2.18C9.95 19.94 10.96 20 12 20c5.52 0 10-4.04 10-9s-4.48-9-10-9z\"/>\n    </svg>\n  </button>\n\n  <div id=\"hrmf-panel\" role=\"dialog\" aria-label=\"Henry hrmforce assistant\">\n    <div class=\"hrmf-header\">\n      <div class=\"hrmf-header-info\">\n        <div class=\"hrmf-avatar\">H</div>\n        <div>\n          <div class=\"hrmf-title\" id=\"hrmf-bot-title\">Vraag het aan Henry</div>\n          <div class=\"hrmf-subtitle\" id=\"hrmf-status\">Online</div>\n        </div>\n      </div>\n      <div class=\"hrmf-header-actions\">\n        <select class=\"hrmf-lang\" id=\"hrmf-lang-toggle\" aria-label=\"Language\">\n          <option value=\"nl\">NL</option>\n          <option value=\"en\">EN</option>\n          <option value=\"de\">DE</option>\n          <option value=\"fr\">FR</option>\n          <option value=\"es\">ES</option>\n          <option value=\"ro\">RO</option>\n        </select>\n        <button class=\"hrmf-close\" id=\"hrmf-close\" aria-label=\"Close\">×</button>\n      </div>\n    </div>\n\n    <div class=\"hrmf-messages\" id=\"hrmf-messages\"></div>\n\n    <div class=\"hrmf-input-wrap\">\n      <input type=\"text\" class=\"hrmf-input\" id=\"hrmf-input\" placeholder=\"Schrijf je bericht…\" autocomplete=\"off\">\n      <button class=\"hrmf-send\" id=\"hrmf-send\" aria-label=\"Send\">\n        <svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M2 21l21-9L2 3v7l15 2-15 2z\"/></svg>\n      </button>\n    </div>\n    <div class=\"hrmf-footer\">Powered by <a href=\"https://hrmforce.com\" target=\"_blank\" rel=\"noopener\">hrmforce</a> · <span title=\"Chats worden verstuurd naar servicedesk@hrmforce.com voor kwaliteitsdoeleinden\">Chats worden opgeslagen</span> · <a href=\"https://hrmforce.com/support/privacy-statement/\" target=\"_blank\" rel=\"noopener\">Privacy</a></div>\n  </div>\n</div>";
  function __henryInject(){
    if (document.getElementById('hrmforce-chatbot')) return;
    var s = document.createElement('style'); s.id='hrmforce-chatbot-css'; s.textContent=__HENRY_CSS; document.head.appendChild(s);
    var w = document.createElement('div'); w.innerHTML=__HENRY_HTML; while(w.firstChild) document.body.appendChild(w.firstChild);
  }
  if (document.body) __henryInject(); else document.addEventListener('DOMContent'+'Loaded', __henryInject);
  // ---- widget logic (from live inline build) ----

  // ============================================================
  // CONFIG — paste your Cloudflare Worker URL here to enable LLM mode.
  // Leave empty ("") to use the local keyword matcher only (offline).
  // See llm-setup-guide.md for deployment instructions.
  // ============================================================
  var ENDPOINT_URL = "https://henry-chatbot.f-hendriks.workers.dev";
  var HISTORY_TURNS = 6;  // how many recent user/assistant turns to send to the LLM

  // Cloudflare Turnstile site key (public, safe to embed).
  // Leave empty to disable — the Worker will accept unauthenticated requests.
  // Once set, the Worker must also have TURNSTILE_SECRET env var configured.
  var TURNSTILE_SITEKEY = "0x4AAAAAADxY_rOwdWb8Dpdj";

  // ============================================================
  // UI strings per language
  // ============================================================
  var UI = {
    nl: {
      botTitle: "Vraag het aan Henry",
      welcome: "Welkom bij hrmforce! Hoe kan ik u vandaag helpen met talentmanagement?",
      placeholder: "Schrijf je bericht…",
      status: "Online",
      noMatch: "Daar heb ik nog geen kant-en-klaar antwoord op. Mail ons gerust via service@hrmforce.com of bel +31 (0)88 88 321 88 — onze servicedesk helpt je verder.",
      suggestedStart: ["Hoe werkt de talentmanagement software van hrmforce?", "Welke HRM oplossingen bieden jullie aan?", "Hoe snel kunnen we live?", "Gratis demo aanvragen"]
    },
    en: {
      botTitle: "Ask Henry",
      welcome: "Welcome to hrmforce! How can I assist you with our talent management solutions today?",
      placeholder: "Write your message…",
      status: "Online",
      noMatch: "I don't have a ready answer for that yet. Email us at service@hrmforce.com or call +31 (0)88 88 321 88 — our service desk will be glad to help.",
      suggestedStart: ["What HRM solutions does hrmforce offer?", "Where can I find more information about assessments?", "How fast can we go live?", "Request a free demo"]
    },
    de: {
      botTitle: "Henry fragen",
      welcome: "Willkommen bei hrmforce! Wie kann ich Ihnen heute beim Talentmanagement helfen?",
      placeholder: "Nachricht schreiben…",
      status: "Online",
      noMatch: "Dafür habe ich noch keine vorbereitete Antwort. Schreiben Sie uns gerne an service@hrmforce.com oder rufen Sie +31 (0)88 88 321 88 an — unser Service-Desk hilft Ihnen weiter.",
      suggestedStart: ["Was bietet hrmforce an Talentmanagement-Software?", "Welche HR-Lösungen bieten Sie an?", "Wie schnell können wir starten?", "Kostenlose Demo anfragen"]
    },
    fr: {
      botTitle: "Demander à Henry",
      welcome: "Bienvenue chez hrmforce ! Comment puis-je vous aider avec la gestion des talents aujourd'hui ?",
      placeholder: "Écrivez votre message…",
      status: "En ligne",
      noMatch: "Je n'ai pas encore de réponse prête pour cela. Écrivez-nous à service@hrmforce.com ou appelez le +31 (0)88 88 321 88 — notre service desk se fera un plaisir de vous aider.",
      suggestedStart: ["Que propose hrmforce comme logiciel de gestion des talents ?", "Quelles solutions RH proposez-vous ?", "Sous combien de temps peut-on démarrer ?", "Demander une démo gratuite"]
    },
    es: {
      botTitle: "Pregúntale a Henry",
      welcome: "¡Bienvenido a hrmforce! ¿Cómo puedo ayudarle hoy con la gestión del talento?",
      placeholder: "Escribe tu mensaje…",
      status: "En línea",
      noMatch: "Aún no tengo una respuesta preparada para eso. Escríbanos a service@hrmforce.com o llame al +31 (0)88 88 321 88 — nuestro service desk estará encantado de ayudarle.",
      suggestedStart: ["¿Qué software de gestión del talento ofrece hrmforce?", "¿Qué soluciones de RR.HH. ofrecen?", "¿En cuánto tiempo podemos empezar?", "Solicitar una demo gratuita"]
    },
    ro: {
      botTitle: "Întreabă-l pe Henry",
      welcome: "Bine ați venit la hrmforce! Cum vă pot ajuta astăzi cu managementul talentelor?",
      placeholder: "Scrieți mesajul dvs…",
      status: "Online",
      noMatch: "Nu am încă un răspuns pregătit pentru asta. Scrieți-ne la service@hrmforce.com sau sunați la +31 (0)88 88 321 88 — biroul nostru de service vă va ajuta cu plăcere.",
      suggestedStart: ["Ce software de management al talentelor oferă hrmforce?", "Ce soluții HR oferiți?", "Cât de repede putem începe?", "Solicită un demo gratuit"]
    }
  };

  // ============================================================
  // Stopwords per language (filter out from matching)
  // ============================================================
  var STOPWORDS = {
    nl: ["de","het","een","en","of","is","ben","bij","met","voor","op","aan","te","ik","jij","u","we","wij","jullie","mijn","je","jouw","onze","hoe","wat","waar","welke","wanneer","kan","kunt","kunnen","wil","wilt","zijn","worden","wordt","heb","heeft","hebben","ook","niet","maar","dat","die","dit","deze","er","na","naar","van","in","om","door","als","over","dan"],
    en: ["the","a","an","and","or","is","are","be","of","to","for","on","at","in","with","by","my","your","our","we","you","i","do","does","did","how","what","where","which","when","can","could","will","would","have","has","had","not","but","that","this","these","those","also","than","then","from","into","about","after"],
    de: ["der","die","das","ein","eine","und","oder","ist","sind","bei","mit","fur","auf","an","zu","ich","du","sie","wir","ihr","mein","dein","unser","wie","was","wo","welche","wann","kann","konnen","will","sein","werden","wird","habe","hat","haben","auch","nicht","aber","dass","den","dem","des","von","im","in","es","uber","als","dann","fur","durch"],
    fr: ["le","la","les","un","une","des","et","ou","est","sont","au","aux","avec","pour","sur","de","du","je","tu","vous","nous","mon","ton","notre","votre","comment","que","quoi","ou","quel","quelle","quand","peut","peux","veux","etre","avoir","ne","pas","mais","que","ce","cette","cela","par","dans","en","sur","apres","si"],
    es: ["el","la","los","las","un","una","unos","unas","y","o","es","son","de","del","a","en","con","para","por","yo","tu","usted","nosotros","mi","tu","nuestro","como","que","donde","cual","cuando","puede","puedo","quiero","ser","estar","tiene","tenemos","no","pero","esto","esta","ese","esa","si","sobre","tras","entre"],
    ro: ["si","sau","este","sunt","la","cu","pentru","pe","in","din","de","ce","cum","unde","cand","care","poate","pot","vrea","fi","avea","are","au","nu","dar","acest","aceasta","acel","acea","peste","prin","intre","dupa","daca","despre","eu","tu","voi","noi","el","ea"]
  };

  // ============================================================
  // KNOWLEDGE BASE — each entry has the question/answer/tags
  // in all 6 languages. Tags are normalized (lowercase, no diacritics)
  // and are scored highest by the matcher.
  // ============================================================
  var KB = [
    // ---------- Product & sales ----------
    {
      id: "what-is-hrmforce",
      nl: { q: "Wat doet hrmforce eigenlijk?",
            a: "Hrmforce is het snelstgroeiende online ontwikkelplatform voor talentmanagement, met het meest complete aanbod van assessments in Nederland. Wij ondersteunen werving, ontwikkeling, employability en HR-analytics — wetenschappelijk onderbouwd en met persoonlijke begeleiding. 1.500+ organisaties gingen je voor, met meer dan 100.000 tests per jaar.",
            tags: ["over","wat","doet","bedrijf","talentmanagement","platform","wie","hrmforce"] },
      en: { q: "What does hrmforce do?",
            a: "Hrmforce is the fastest-growing online development platform for talent management, offering the most complete range of assessments in the Netherlands. We support recruitment, development, employability and HR analytics — scientifically grounded with personal guidance. 1,500+ organisations have preceded you, with over 100,000 tests run per year.",
            tags: ["about","what","do","company","talent management","platform","who","hrmforce"] },
      de: { q: "Was macht hrmforce eigentlich?",
            a: "Hrmforce ist die am schnellsten wachsende Online-Entwicklungsplattform für Talentmanagement mit dem umfassendsten Assessment-Angebot in den Niederlanden. Wir unterstützen Recruiting, Entwicklung, Employability und HR-Analytics — wissenschaftlich fundiert und mit persönlicher Begleitung. Über 1.500 Organisationen vertrauen uns, mit mehr als 100.000 Tests pro Jahr.",
            tags: ["uber","was","macht","unternehmen","talentmanagement","plattform","wer","hrmforce"] },
      fr: { q: "Que fait hrmforce ?",
            a: "Hrmforce est la plateforme de développement en ligne pour la gestion des talents qui connaît la croissance la plus rapide, avec la gamme d'assessments la plus complète aux Pays-Bas. Nous accompagnons recrutement, développement, employabilité et analytique RH — scientifiquement fondé et avec un accompagnement personnel. Plus de 1 500 organisations nous font confiance, avec plus de 100 000 tests réalisés chaque année.",
            tags: ["a propos","que","fait","entreprise","gestion talents","plateforme","qui","hrmforce"] },
      es: { q: "¿Qué hace hrmforce?",
            a: "Hrmforce es la plataforma de desarrollo en línea para la gestión del talento de más rápido crecimiento, con la oferta de assessments más completa de los Países Bajos. Apoyamos selección, desarrollo, empleabilidad y analítica de RR.HH. — con base científica y acompañamiento personal. Más de 1.500 organizaciones nos han precedido, con más de 100.000 tests al año.",
            tags: ["sobre","que","hace","empresa","gestion talento","plataforma","quien","hrmforce"] },
      ro: { q: "Ce face hrmforce?",
            a: "Hrmforce este cea mai rapid în creștere platformă online de dezvoltare pentru managementul talentelor, cu cea mai completă gamă de evaluări din Olanda. Susținem recrutare, dezvoltare, employability și analitică HR — fundamentat științific și cu îndrumare personală. Peste 1.500 de organizații ne-au precedat, cu peste 100.000 de teste pe an.",
            tags: ["despre","ce","face","companie","management talente","platforma","cine","hrmforce"] }
    },
    {
      id: "selection-vs-development",
      nl: { q: "Welke assessments passen bij selectie en welke bij ontwikkeling?",
            a: "Het doel bepaalt de keuze. Bij selectie zoek je signalen die voorspellen hoe iemand zich gedraagt in de functie — gestructureerde capaciteitentesten en persoonlijkheidsvragenlijsten zoals de Big Fifty horen daarbij. Bij ontwikkeling draait het om zelfinzicht en groei; DISC en 360° feedback passen daar beter. Zie het assessment-overzicht voor de doelen per instrument.\n\nMeer: https://hrmforce.com/assessment-overzicht/",
            tags: ["selectie","ontwikkeling","assessment","big five","big fifty","disc","360","keuze","welke","verschil"] },
      en: { q: "Which assessments fit selection and which fit development?",
            a: "Your purpose drives the choice. For selection you want signals that predict on-the-job behaviour — structured ability tests and personality questionnaires such as the Big Fifty. For development the value sits in self-insight and growth, so DISC and 360° feedback fit better. The assessment overview shows what each instrument was built for.\n\nMore: https://hrmforce.com/en/online-assessments/",
            tags: ["selection","development","assessment","big five","big fifty","disc","360","choose","which","difference"] },
      de: { q: "Welche Assessments passen zur Auswahl, welche zur Entwicklung?",
            a: "Der Zweck bestimmt die Wahl. Für die Auswahl wollen Sie Signale, die das Verhalten am Arbeitsplatz vorhersagen — strukturierte Fähigkeitstests und Persönlichkeitsfragebögen wie der Big Fifty gehören dazu. Bei der Entwicklung geht es um Selbsterkenntnis und Wachstum; DISC und 360°-Feedback passen besser. Die Assessment-Übersicht zeigt, wofür jedes Instrument entwickelt wurde.",
            tags: ["auswahl","entwicklung","assessment","big five","big fifty","disc","360","wahl","welche","unterschied"] },
      fr: { q: "Quels assessments pour la sélection et lesquels pour le développement ?",
            a: "L'objectif détermine le choix. Pour la sélection, vous cherchez des signaux qui prédisent le comportement au poste — tests d'aptitudes structurés et questionnaires de personnalité comme le Big Fifty. Pour le développement, la valeur est dans l'introspection et la croissance ; DISC et feedback 360° conviennent mieux. La vue d'ensemble des assessments indique l'usage de chaque instrument.",
            tags: ["selection","developpement","assessment","big five","big fifty","disc","360","choisir","quel","difference"] },
      es: { q: "¿Qué assessments encajan para selección y cuáles para desarrollo?",
            a: "El propósito determina la elección. Para selección busca señales que predigan el comportamiento en el puesto — pruebas de aptitudes estructuradas y cuestionarios de personalidad como el Big Fifty. Para desarrollo el valor está en el autoconocimiento y el crecimiento; DISC y feedback 360° encajan mejor. La visión general muestra para qué se diseñó cada instrumento.",
            tags: ["seleccion","desarrollo","assessment","big five","big fifty","disc","360","elegir","cual","diferencia"] },
      ro: { q: "Ce evaluări sunt pentru selecție și care pentru dezvoltare?",
            a: "Scopul determină alegerea. Pentru selecție căutați semnale care prezic comportamentul la post — teste de aptitudini structurate și chestionare de personalitate precum Big Fifty. Pentru dezvoltare, valoarea stă în auto-cunoaștere și creștere; DISC și feedback-ul 360° se potrivesc mai bine. Prezentarea generală arată pentru ce a fost creat fiecare instrument.",
            tags: ["selectie","dezvoltare","evaluare","big five","big fifty","disc","360","alege","care","diferenta"] }
    },
    {
      id: "scientific-basis",
      nl: { q: "Hoe wetenschappelijk onderbouwd zijn de vragenlijsten?",
            a: "De vragenlijsten zijn gebouwd op bewezen modellen: Big Five voor persoonlijkheid, werkgerelateerde drijfverenmodellen voor motivatie, en klassieke testtheorie voor cognitief vermogen. Waar een COTAN-beoordeling beschikbaar is, vermelden we die op de assessment-pagina. NIP-geregistreerde psychologen reviewen de inhoud van de rapporten.",
            tags: ["wetenschappelijk","onderbouwd","cotan","nip","big five","psycholoog","validiteit","betrouwbaar","kwaliteit"] },
      en: { q: "How scientifically grounded are your questionnaires?",
            a: "The questionnaires are built on proven models: Big Five for personality, work-related motivational models for drives, and classical test theory for cognitive ability. Where a COTAN rating is available we list it on the assessment page. NIP-registered psychologists review report content.",
            tags: ["scientific","evidence","cotan","nip","big five","psychologist","validity","reliable","quality"] },
      de: { q: "Wie wissenschaftlich fundiert sind die Fragebögen?",
            a: "Die Fragebögen basieren auf bewährten Modellen: Big Five für Persönlichkeit, arbeitsbezogene Motivationsmodelle für Antriebe und klassische Testtheorie für kognitive Fähigkeiten. Wo eine COTAN-Bewertung verfügbar ist, geben wir sie auf der Assessment-Seite an. NIP-registrierte Psychologen prüfen die Inhalte der Berichte.",
            tags: ["wissenschaftlich","fundiert","cotan","nip","big five","psychologe","validitat","zuverlassig","qualitat"] },
      fr: { q: "À quel point vos questionnaires sont-ils scientifiquement fondés ?",
            a: "Les questionnaires reposent sur des modèles éprouvés : Big Five pour la personnalité, modèles motivationnels liés au travail pour les drives, et théorie classique des tests pour les capacités cognitives. Lorsqu'une évaluation COTAN est disponible, nous l'indiquons sur la page de l'assessment. Des psychologues enregistrés NIP révisent le contenu des rapports.",
            tags: ["scientifique","fonde","cotan","nip","big five","psychologue","validite","fiable","qualite"] },
      es: { q: "¿Qué tan respaldados científicamente están sus cuestionarios?",
            a: "Los cuestionarios se basan en modelos probados: Big Five para personalidad, modelos motivacionales laborales para impulsos y teoría clásica de tests para capacidad cognitiva. Cuando hay valoración COTAN disponible la indicamos en la página del assessment. Psicólogos registrados en el NIP revisan el contenido de los informes.",
            tags: ["cientifico","respaldo","cotan","nip","big five","psicologo","validez","fiable","calidad"] },
      ro: { q: "Cât de fundamentate științific sunt chestionarele?",
            a: "Chestionarele sunt construite pe modele dovedite: Big Five pentru personalitate, modele motivaționale legate de muncă pentru drivere și teoria clasică a testelor pentru abilități cognitive. Acolo unde există o evaluare COTAN o indicăm pe pagina evaluării. Psihologi înregistrați NIP revizuiesc conținutul rapoartelor.",
            tags: ["stiintific","fundamentat","cotan","nip","big five","psiholog","validitate","fiabil","calitate"] }
    },
    {
      id: "time-to-live",
      nl: { q: "Hoe snel kunnen we live met de assessments?",
            a: "Voor losse afnames via de webshop ben je direct online: afrekenen, uitnodigingslink versturen, rapport per mail. Voor een licentie of implementatie binnen de HR-tooling rekenen we doorgaans 2 tot 3 weken voor inrichting, uitrol en gebruikersinstructie. Bij grotere trajecten met integraties plannen we in overleg.\n\nShop: https://hrmforce.com/shop/",
            tags: ["snel","live","start","implementatie","duur","tijd","webshop","licentie","inrichten","wanneer"] },
      en: { q: "How quickly can we go live?",
            a: "Single purchases via the webshop are instant: check out, send the invitation link, get the report by email. For a licence or full HR-tooling implementation we usually plan 2–3 weeks for set-up, rollout and user training. Larger integration projects are scheduled in consultation.",
            tags: ["fast","live","launch","implementation","duration","time","shop","licence","setup","when"] },
      de: { q: "Wie schnell können wir live gehen?",
            a: "Einzelne Käufe über den Webshop sind sofort verfügbar: bezahlen, Einladungslink versenden, Bericht per E-Mail. Für eine Lizenz oder vollständige Implementierung in der HR-Tooling planen wir in der Regel 2–3 Wochen für Einrichtung, Rollout und Schulung. Größere Integrationsprojekte werden in Absprache geplant.",
            tags: ["schnell","live","start","implementierung","dauer","zeit","shop","lizenz","einrichten","wann"] },
      fr: { q: "À quelle vitesse peut-on être opérationnel ?",
            a: "Les achats unitaires via la boutique en ligne sont instantanés : payer, envoyer le lien d'invitation, recevoir le rapport par mail. Pour une licence ou une implémentation dans l'outil RH, nous prévoyons généralement 2 à 3 semaines pour la configuration, le déploiement et la formation. Les projets d'intégration plus importants sont planifiés en concertation.",
            tags: ["rapide","operationnel","lancement","implementation","duree","temps","boutique","licence","configurer","quand"] },
      es: { q: "¿Con qué rapidez podemos estar en marcha?",
            a: "Las compras únicas en la tienda son instantáneas: pagar, enviar el enlace de invitación, recibir el informe por correo. Para una licencia o implementación completa en la tooling de RR.HH. solemos planificar 2 a 3 semanas para configuración, despliegue y formación. Los proyectos de integración mayores se programan de común acuerdo.",
            tags: ["rapido","en marcha","lanzamiento","implementacion","duracion","tiempo","tienda","licencia","configurar","cuando"] },
      ro: { q: "Cât de rapid putem trece live?",
            a: "Achizițiile individuale prin magazinul online sunt instantanee: plătiți, trimiteți linkul de invitație, primiți raportul pe email. Pentru o licență sau o implementare completă în HR-tooling planificăm de obicei 2-3 săptămâni pentru configurare, lansare și instruire. Proiectele mai mari de integrare sunt programate de comun acord.",
            tags: ["rapid","live","lansare","implementare","durata","timp","magazin","licenta","configurare","cand"] }
    },
    {
      id: "shop-vs-licence",
      nl: { q: "Wat is het verschil tussen een licentie en de webshop?",
            a: "De webshop is voor incidentele afnames — handig voor freelance consultants of kleinere organisaties die af en toe een vragenlijst inzetten. Een licentie past bij organisaties die structureel of op grotere schaal assessments inzetten: toegang binnen afgesproken kaders, eigen branding op rapporten en gebruikersbeheer in het platform.",
            tags: ["webshop","shop","licentie","verschil","prijs","losse","incidenteel","structureel"] },
      en: { q: "What's the difference between a licence and the webshop?",
            a: "The webshop is for occasional use — handy for freelance consultants or smaller organisations that run a questionnaire now and then. A licence suits organisations that use assessments structurally or at scale: access within agreed limits, your own branding on reports, and user management in the platform.",
            tags: ["shop","webshop","licence","license","difference","price","one-off","structural"] },
      de: { q: "Was ist der Unterschied zwischen einer Lizenz und dem Webshop?",
            a: "Der Webshop ist für gelegentliche Nutzung — praktisch für freiberufliche Consultants oder kleinere Organisationen, die ab und zu einen Fragebogen einsetzen. Eine Lizenz passt zu Organisationen, die Assessments strukturell oder in größerem Umfang einsetzen: Zugang innerhalb vereinbarter Rahmen, eigenes Branding in Berichten und Benutzerverwaltung auf der Plattform.",
            tags: ["shop","webshop","lizenz","unterschied","preis","einzeln","gelegentlich","strukturell"] },
      fr: { q: "Quelle est la différence entre une licence et la boutique en ligne ?",
            a: "La boutique en ligne est pour un usage occasionnel — pratique pour les consultants indépendants ou les petites organisations qui utilisent un questionnaire de temps en temps. Une licence convient aux organisations qui utilisent des assessments de manière structurelle ou à grande échelle : accès dans un cadre convenu, branding sur les rapports et gestion des utilisateurs dans la plateforme.",
            tags: ["boutique","licence","difference","prix","unitaire","occasionnel","structurel"] },
      es: { q: "¿Cuál es la diferencia entre una licencia y la tienda?",
            a: "La tienda es para uso ocasional — práctica para consultores autónomos u organizaciones pequeñas que aplican un cuestionario de vez en cuando. Una licencia conviene a organizaciones que usan assessments de forma estructural o a gran escala: acceso dentro de los límites acordados, marca propia en los informes y gestión de usuarios en la plataforma.",
            tags: ["tienda","licencia","diferencia","precio","unitario","ocasional","estructural"] },
      ro: { q: "Care este diferența între o licență și magazinul online?",
            a: "Magazinul online este pentru utilizare ocazională — util pentru consultanți independenți sau organizații mici care folosesc ocazional un chestionar. O licență se potrivește organizațiilor care folosesc evaluări structural sau la scară: acces în limitele convenite, branding propriu pe rapoarte și gestionarea utilizatorilor în platformă.",
            tags: ["magazin","licenta","diferenta","pret","unitar","ocazional","structural"] }
    },
    {
      id: "integrations",
      nl: { q: "Kunnen we de assessments koppelen aan onze HR-software?",
            a: "Ja. Onze Matching-module en het bredere platform werken samen met de meest gebruikte ATS-, HR- en payroll-systemen via API of SSO. Veel klanten koppelen aan AFAS, Visma, Nmbrs, SuccessFactors of een eigen recruitmentsysteem. Tijdens de intake brengen we in kaart welke koppelingen waarde toevoegen.",
            tags: ["koppeling","integratie","api","sso","afas","visma","nmbrs","successfactors","ats","payroll","hr software"] },
      en: { q: "Can we integrate with our existing HR software?",
            a: "Yes. Our Matching module and broader platform connect to the most-used ATS, HR and payroll systems via API or SSO. Common integrations include AFAS, Visma, Nmbrs, SuccessFactors and bespoke recruitment systems. We map out the right connections during intake.",
            tags: ["integration","api","sso","afas","visma","nmbrs","successfactors","ats","payroll","hr software"] },
      de: { q: "Können wir die Assessments mit unserer HR-Software verbinden?",
            a: "Ja. Unser Matching-Modul und die breitere Plattform verbinden sich mit den am meisten verwendeten ATS-, HR- und Payroll-Systemen über API oder SSO. Häufige Integrationen sind AFAS, Visma, Nmbrs, SuccessFactors und eigene Recruiting-Systeme. Im Intake klären wir, welche Anbindungen Mehrwert bieten.",
            tags: ["anbindung","integration","api","sso","afas","visma","nmbrs","successfactors","ats","payroll","hr software"] },
      fr: { q: "Peut-on intégrer les assessments à notre logiciel RH ?",
            a: "Oui. Notre module Matching et la plateforme plus largement s'intègrent aux systèmes ATS, RH et paie les plus utilisés via API ou SSO. Les intégrations courantes incluent AFAS, Visma, Nmbrs, SuccessFactors et des systèmes de recrutement sur-mesure. Lors de l'intake, nous identifions les connexions à valeur ajoutée.",
            tags: ["integration","api","sso","afas","visma","nmbrs","successfactors","ats","paie","logiciel rh"] },
      es: { q: "¿Podemos integrar con nuestro software de RR.HH.?",
            a: "Sí. Nuestro módulo Matching y la plataforma se conectan con los sistemas ATS, RR.HH. y nómina más usados vía API o SSO. Integraciones habituales: AFAS, Visma, Nmbrs, SuccessFactors y sistemas de recruitment a medida. En la entrevista inicial identificamos las conexiones de valor.",
            tags: ["integracion","api","sso","afas","visma","nmbrs","successfactors","ats","nomina","software rrhh"] },
      ro: { q: "Putem integra evaluările cu software-ul nostru HR?",
            a: "Da. Modulul nostru Matching și platforma se conectează cu cele mai utilizate sisteme ATS, HR și payroll prin API sau SSO. Integrări frecvente: AFAS, Visma, Nmbrs, SuccessFactors și sisteme proprii de recrutare. La intake identificăm conexiunile cu valoare adăugată.",
            tags: ["integrare","api","sso","afas","visma","nmbrs","successfactors","ats","payroll","software hr"] }
    },
    {
      id: "gdpr",
      nl: { q: "Hoe gaan jullie om met persoonsgegevens en de AVG?",
            a: "Persoonsgegevens worden verwerkt binnen de Europese Unie, met versleutelde verbindingen, rolgebaseerd gebruikersbeheer en bewaartermijnen die je per assessment zelf instelt. Voor elk traject sluiten we een verwerkersovereenkomst. Kandidaten zien vooraf wat er met hun gegevens gebeurt — conform AVG en de NIP-richtlijnen.\n\nPrivacy: https://hrmforce.com/support/privacy-statement/",
            tags: ["avg","gdpr","privacy","persoonsgegevens","data","verwerker","beveiliging","encryptie","bewaartermijn","wbp"] },
      en: { q: "How do you handle personal data and the GDPR?",
            a: "Personal data is processed within the European Union, with encrypted connections, role-based user management and retention periods you set per assessment. Each project gets a data processing agreement. Candidates see beforehand what happens with their data — in line with the GDPR and NIP guidelines.\n\nPrivacy: https://hrmforce.com/en/support/privacy-statement/",
            tags: ["gdpr","privacy","personal data","data","processor","security","encryption","retention","compliance"] },
      de: { q: "Wie gehen Sie mit personenbezogenen Daten und der DSGVO um?",
            a: "Personenbezogene Daten werden innerhalb der Europäischen Union verarbeitet, mit verschlüsselten Verbindungen, rollenbasierter Benutzerverwaltung und Aufbewahrungsfristen, die Sie pro Assessment selbst festlegen. Für jedes Projekt schließen wir eine Auftragsverarbeitungsvereinbarung. Kandidaten sehen im Voraus, was mit ihren Daten geschieht — gemäß DSGVO und NIP-Richtlinien.",
            tags: ["dsgvo","gdpr","datenschutz","personenbezogene daten","verarbeiter","sicherheit","verschlusselung","aufbewahrung","compliance"] },
      fr: { q: "Comment gérez-vous les données personnelles et le RGPD ?",
            a: "Les données personnelles sont traitées au sein de l'Union européenne, avec des connexions chiffrées, une gestion des utilisateurs basée sur les rôles et des durées de conservation que vous définissez par assessment. Chaque projet fait l'objet d'un contrat de sous-traitance. Les candidats voient au préalable ce qui est fait de leurs données — conformément au RGPD et aux directives NIP.",
            tags: ["rgpd","gdpr","confidentialite","donnees personnelles","sous-traitant","securite","chiffrement","conservation","conformite"] },
      es: { q: "¿Cómo manejan los datos personales y el RGPD?",
            a: "Los datos personales se procesan dentro de la Unión Europea, con conexiones cifradas, gestión de usuarios por roles y plazos de conservación que usted define por assessment. Cada proyecto incluye un contrato de encargo de tratamiento. Los candidatos ven de antemano qué ocurre con sus datos — conforme al RGPD y a las directrices del NIP.",
            tags: ["rgpd","gdpr","privacidad","datos personales","encargado","seguridad","cifrado","conservacion","cumplimiento"] },
      ro: { q: "Cum gestionați datele personale și GDPR?",
            a: "Datele personale sunt procesate în cadrul Uniunii Europene, cu conexiuni criptate, gestionarea utilizatorilor pe roluri și perioade de păstrare pe care le setați per evaluare. Pentru fiecare proiect încheiem un acord de prelucrare. Candidații văd din timp ce se întâmplă cu datele lor — conform GDPR și ghidurilor NIP.",
            tags: ["gdpr","confidentialitate","date personale","procesator","securitate","criptare","pastrare","conformitate"] }
    },
    {
      id: "languages",
      nl: { q: "In welke talen zijn de assessments beschikbaar?",
            a: "De meeste vragenlijsten zijn beschikbaar in Nederlands, Engels, Duits, Frans, Spaans en Roemeens. Per assessment verschilt welke talen actief zijn — op de pagina van het instrument zie je het actuele overzicht. Werk je internationaal of in een andere taal, bespreek dat vooraf zodat we de juiste versie klaarzetten.",
            tags: ["talen","taal","engels","duits","frans","spaans","roemeens","internationaal","language","languages"] },
      en: { q: "Which languages are the assessments available in?",
            a: "Most questionnaires are available in Dutch, English, German, French, Spanish and Romanian. Active languages vary per instrument — check the assessment page for the current overview. If you work internationally or need a specific language, let us know upfront so we can prepare the right version.",
            tags: ["languages","language","dutch","english","german","french","spanish","romanian","international"] },
      de: { q: "In welchen Sprachen sind die Assessments verfügbar?",
            a: "Die meisten Fragebögen sind in Niederländisch, Englisch, Deutsch, Französisch, Spanisch und Rumänisch verfügbar. Welche Sprachen aktiv sind, variiert pro Instrument — die aktuelle Übersicht finden Sie auf der Assessment-Seite. Bei internationaler Nutzung oder anderen Sprachen bitte vorab abstimmen.",
            tags: ["sprachen","sprache","niederlandisch","englisch","deutsch","franzosisch","spanisch","rumanisch","international"] },
      fr: { q: "Dans quelles langues les assessments sont-ils disponibles ?",
            a: "La plupart des questionnaires sont disponibles en néerlandais, anglais, allemand, français, espagnol et roumain. Les langues actives varient selon l'instrument — la page de l'assessment indique la disponibilité actuelle. Pour un usage international ou une autre langue, signalez-le en amont pour que nous préparions la bonne version.",
            tags: ["langues","langue","neerlandais","anglais","allemand","francais","espagnol","roumain","international"] },
      es: { q: "¿En qué idiomas están disponibles los assessments?",
            a: "La mayoría de los cuestionarios están disponibles en neerlandés, inglés, alemán, francés, español y rumano. Los idiomas activos varían por instrumento — la página del assessment muestra el estado actual. Para uso internacional u otro idioma, avísenos por adelantado para preparar la versión adecuada.",
            tags: ["idiomas","idioma","neerlandes","ingles","aleman","frances","espanol","rumano","internacional"] },
      ro: { q: "În ce limbi sunt disponibile evaluările?",
            a: "Majoritatea chestionarelor sunt disponibile în olandeză, engleză, germană, franceză, spaniolă și română. Limbile active variază pe instrument — pagina evaluării arată starea curentă. Pentru utilizare internațională sau o altă limbă, anunțați-ne în avans pentru a pregăti versiunea potrivită.",
            tags: ["limbi","limba","olandeza","engleza","germana","franceza","spaniola","romana","international"] }
    },
    {
      id: "candidate-report",
      nl: { q: "Wat krijgt de kandidaat na het invullen?",
            a: "De kandidaat ontvangt direct een bevestiging en, afhankelijk van de afspraak, een persoonlijk rapport. Bij ontwikkelassessments krijgt de kandidaat doorgaans hetzelfde rapport als de opdrachtgever, soms met een gespreksleidraad. Bij selectie-assessments bepaalt de opdrachtgever wat de kandidaat terugkrijgt. Een terugkoppelingsgesprek vergroot de waarde.",
            tags: ["kandidaat","rapport","resultaat","feedback","terugkoppeling","selectie","ontwikkeling","na afloop"] },
      en: { q: "What does the candidate receive after completing an assessment?",
            a: "The candidate gets an immediate confirmation and, depending on what's agreed, a personal report. For development assessments the candidate usually receives the same report as the client, sometimes with a discussion guide. For selection the client decides what goes back to the candidate. A debrief conversation increases the value.",
            tags: ["candidate","report","result","feedback","debrief","selection","development","after"] },
      de: { q: "Was bekommt der Kandidat nach dem Ausfüllen?",
            a: "Der Kandidat erhält sofort eine Bestätigung und, je nach Vereinbarung, einen persönlichen Bericht. Bei Entwicklungs-Assessments erhält der Kandidat in der Regel denselben Bericht wie der Auftraggeber, manchmal mit einem Gesprächsleitfaden. Bei Auswahl-Assessments entscheidet der Auftraggeber, was der Kandidat zurückerhält. Ein Feedback-Gespräch erhöht den Wert.",
            tags: ["kandidat","bericht","ergebnis","feedback","entwicklung","auswahl","nach"] },
      fr: { q: "Que reçoit le candidat après avoir complété un assessment ?",
            a: "Le candidat reçoit une confirmation immédiate et, selon ce qui a été convenu, un rapport personnel. Pour les assessments de développement, le candidat reçoit en général le même rapport que le client, parfois avec un guide d'entretien. Pour la sélection, le client décide de ce qui est restitué au candidat. Un entretien de restitution augmente la valeur.",
            tags: ["candidat","rapport","resultat","feedback","restitution","selection","developpement","apres"] },
      es: { q: "¿Qué recibe el candidato tras completar el assessment?",
            a: "El candidato recibe una confirmación inmediata y, según lo acordado, un informe personal. En assessments de desarrollo el candidato suele recibir el mismo informe que el cliente, a veces con una guía de conversación. En selección, el cliente decide qué se entrega al candidato. Una sesión de devolución aumenta el valor.",
            tags: ["candidato","informe","resultado","feedback","devolucion","seleccion","desarrollo","despues"] },
      ro: { q: "Ce primește candidatul după completarea evaluării?",
            a: "Candidatul primește o confirmare imediată și, în funcție de ce s-a convenit, un raport personal. La evaluările de dezvoltare, candidatul primește de obicei același raport ca și clientul, uneori cu un ghid de discuție. La selecție, clientul decide ce primește candidatul. O sesiune de debrief crește valoarea.",
            tags: ["candidat","raport","rezultat","feedback","debrief","selectie","dezvoltare","dupa"] }
    },
    {
      id: "small-orgs",
      nl: { q: "Werken jullie ook voor kleinere organisaties of zelfstandige consultants?",
            a: "Ja. Onze klanten variëren van zelfstandige loopbaancoaches die via de webshop een vragenlijst afnemen, tot ministeries en grote werkgevers met een volledige HR-cyclus. Bij kleinere organisaties starten we vaak licht: één of twee assessments, een paar gebruikers, en ruimte om op te schalen.",
            tags: ["klein","zzp","freelance","consultant","loopbaancoach","mkb","starten"] },
      en: { q: "Do you also work with smaller organisations or independent consultants?",
            a: "Yes. Our clients range from independent career coaches using the webshop occasionally, to ministries and large employers with a full HR cycle in our tooling. For smaller organisations we usually start light: one or two assessments, a few users, and room to scale up later.",
            tags: ["small","sme","freelance","consultant","career coach","start","scale"] },
      de: { q: "Arbeiten Sie auch mit kleineren Organisationen oder freiberuflichen Consultants?",
            a: "Ja. Unsere Kunden reichen von freiberuflichen Karrierecoaches, die den Webshop gelegentlich nutzen, bis zu Ministerien und Großunternehmen mit einem vollständigen HR-Zyklus in unserer Tooling. Bei kleineren Organisationen starten wir oft schlank: ein bis zwei Assessments, einige Nutzer und Spielraum zum späteren Skalieren.",
            tags: ["klein","kmu","freelance","consultant","karrierecoach","start","skalieren"] },
      fr: { q: "Travaillez-vous aussi avec des petites organisations ou des consultants indépendants ?",
            a: "Oui. Nos clients vont des coachs de carrière indépendants qui utilisent occasionnellement la boutique en ligne, aux ministères et grands employeurs avec un cycle RH complet dans notre tooling. Pour les petites organisations, nous commençons souvent léger : un ou deux assessments, quelques utilisateurs, avec marge pour évoluer.",
            tags: ["petit","pme","freelance","consultant","coach carriere","demarrer","evoluer"] },
      es: { q: "¿También trabajan con organizaciones pequeñas o consultores autónomos?",
            a: "Sí. Nuestros clientes van desde coaches de carrera autónomos que usan la tienda ocasionalmente, hasta ministerios y grandes empleadores con un ciclo de RR.HH. completo en nuestra tooling. Con organizaciones pequeñas solemos empezar ligero: uno o dos assessments, algunos usuarios y margen para escalar.",
            tags: ["pequeno","pyme","freelance","consultor","coach carrera","empezar","escalar"] },
      ro: { q: "Lucrați și cu organizații mai mici sau consultanți independenți?",
            a: "Da. Clienții noștri variază de la coachi de carieră independenți care folosesc ocazional magazinul, până la ministere și angajatori mari cu un ciclu HR complet în tooling-ul nostru. Cu organizațiile mai mici începem de obicei ușor: una sau două evaluări, câțiva utilizatori și loc pentru a scala ulterior.",
            tags: ["mic","imm","freelance","consultant","coach cariera","incepe","scala"] }
    },
    {
      id: "ai-in-selection",
      nl: { q: "Wat is jullie standpunt over AI in selectie?",
            a: "We zijn terughoudend met AI op plekken waar dat de uitlegbaarheid van scores zou verzwakken. Rapporten zijn gebouwd op transparante meetmodellen en navolgbare normgroepen, geen black box. Waar AI waarde toevoegt — bijvoorbeeld bij interpretatie-ondersteuning — gebruiken we het als hulpmiddel voor de adviseur, in lijn met de NIP- en SIOP-richtlijnen.",
            tags: ["ai","kunstmatige","intelligentie","blackbox","standpunt","ethiek","uitlegbaar","nip","siop"] },
      en: { q: "What is your stance on AI in selection?",
            a: "We're cautious about using AI where it weakens the explainability of scores. Our reports run on transparent measurement models and traceable norm groups — not a black box. Where AI adds value (e.g. interpretation support) we use it as a tool for the consultant, aligned with NIP and SIOP guidance on AI in selection.",
            tags: ["ai","artificial","intelligence","blackbox","stance","ethics","explainable","nip","siop"] },
      de: { q: "Wie stehen Sie zu KI in der Personalauswahl?",
            a: "Wir sind zurückhaltend mit KI dort, wo sie die Erklärbarkeit von Scores schwächen würde. Unsere Berichte basieren auf transparenten Messmodellen und nachvollziehbaren Normgruppen — keine Blackbox. Wo KI Mehrwert schafft (z. B. Interpretationsunterstützung), nutzen wir sie als Hilfsmittel für den Berater, im Einklang mit NIP- und SIOP-Leitlinien.",
            tags: ["ki","ai","kunstliche intelligenz","blackbox","standpunkt","ethik","erklarbar","nip","siop"] },
      fr: { q: "Quelle est votre position sur l'IA en sélection ?",
            a: "Nous sommes prudents avec l'IA là où elle affaiblirait l'explicabilité des scores. Nos rapports reposent sur des modèles de mesure transparents et des groupes de référence traçables — pas une boîte noire. Là où l'IA apporte de la valeur (par ex. en soutien à l'interprétation), nous l'utilisons comme outil pour le consultant, conformément aux directives du NIP et de la SIOP.",
            tags: ["ia","intelligence artificielle","boite noire","position","ethique","explicable","nip","siop"] },
      es: { q: "¿Cuál es su postura sobre la IA en selección?",
            a: "Somos prudentes con la IA donde podría debilitar la explicabilidad de las puntuaciones. Nuestros informes se basan en modelos de medición transparentes y grupos normativos rastreables — no una caja negra. Donde la IA aporta valor (p. ej. apoyo a la interpretación) la usamos como herramienta del consultor, en línea con las directrices del NIP y SIOP.",
            tags: ["ia","inteligencia artificial","caja negra","postura","etica","explicable","nip","siop"] },
      ro: { q: "Care este poziția voastră privind IA în selecție?",
            a: "Suntem prudenți cu IA acolo unde ar slăbi explicabilitatea scorurilor. Rapoartele noastre se bazează pe modele transparente de măsurare și grupuri normative trasabile — nu o cutie neagră. Unde IA aduce valoare (de ex. suport pentru interpretare) o folosim ca instrument pentru consultant, în linie cu ghidurile NIP și SIOP.",
            tags: ["ia","inteligenta artificiala","cutie neagra","pozitie","etica","explicabil","nip","siop"] }
    },

    // ---------- Support / troubleshooting ----------
    {
      id: "verification-screen",
      nl: { q: "Het verificatiescherm reageert niet — wat doe ik?",
            a: "Loop deze stappen door:\n1. Wis browsercache en cookies, sluit de browser volledig en log opnieuw in.\n2. Probeer een andere browser (Chrome ↔ Firefox) of een incognitovenster.\n3. Type de zescijferige code in een leeg tekstvak (Kladblok) en plak die in het verificatiescherm — of juist andersom.\n4. Vraag via het inlogscherm een nieuwe verificatie-/resetlink aan (links zijn eenmalig en verlopen).\n5. Werkt het nog niet, dan kan een beheerder via het profiel een verse uitnodigingsmail sturen.",
            tags: ["verificatie","verificatiescherm","inloggen","login","code","reageert","werkt niet","reset","cache","cookies","incognito"] },
      en: { q: "The verification screen isn't responding — what should I do?",
            a: "Work through these steps:\n1. Clear browser cache and cookies, close the browser fully and log in again.\n2. Try a different browser (Chrome ↔ Firefox) or a private/incognito window.\n3. Type the six-digit code into an empty text box (Notepad) and paste it into the verification screen — or the other way around.\n4. Request a new verification/reset link via the login screen (links are single-use and expire).\n5. If it still fails, an administrator can send a fresh invitation email from the user profile.",
            tags: ["verification","login","code","not responding","not working","reset","cache","cookies","incognito"] },
      de: { q: "Der Verifizierungsbildschirm reagiert nicht — was tun?",
            a: "Gehen Sie diese Schritte der Reihe nach durch:\n1. Browser-Cache und Cookies löschen, Browser vollständig schließen und erneut anmelden.\n2. Anderen Browser (Chrome ↔ Firefox) oder Inkognito-Fenster ausprobieren.\n3. Den sechsstelligen Code in ein leeres Textfeld (Notepad) tippen und in den Verifizierungsbildschirm einfügen — oder umgekehrt.\n4. Über den Login-Bildschirm einen neuen Verifizierungs-/Reset-Link anfordern (Links sind einmalig und laufen ab).\n5. Wenn es immer noch nicht funktioniert, kann ein Administrator über das Benutzerprofil eine neue Einladungs-E-Mail senden.",
            tags: ["verifizierung","anmeldung","code","reagiert nicht","funktioniert nicht","reset","cache","cookies","inkognito"] },
      fr: { q: "L'écran de vérification ne répond pas — que faire ?",
            a: "Suivez ces étapes dans l'ordre :\n1. Videz le cache et les cookies du navigateur, fermez-le complètement et reconnectez-vous.\n2. Essayez un autre navigateur (Chrome ↔ Firefox) ou une fenêtre privée/incognito.\n3. Tapez le code à six chiffres dans un champ vide (Bloc-notes) et collez-le dans l'écran de vérification — ou l'inverse.\n4. Demandez un nouveau lien de vérification/réinitialisation via l'écran de connexion (à usage unique, expirent).\n5. Si cela échoue encore, un administrateur peut envoyer un nouveau mail d'invitation depuis le profil utilisateur.",
            tags: ["verification","connexion","code","ne repond pas","ne fonctionne pas","reinitialisation","cache","cookies","incognito"] },
      es: { q: "La pantalla de verificación no responde — ¿qué hago?",
            a: "Siga estos pasos por orden:\n1. Borre caché y cookies del navegador, ciérrelo completamente y vuelva a iniciar sesión.\n2. Pruebe otro navegador (Chrome ↔ Firefox) o una ventana privada/incógnito.\n3. Escriba el código de seis dígitos en un campo vacío (Bloc de notas) y péguelo en la pantalla de verificación — o al revés.\n4. Solicite un nuevo enlace de verificación/restablecimiento desde la pantalla de inicio (de un solo uso y caducan).\n5. Si aún falla, un administrador puede enviar un nuevo correo de invitación desde el perfil del usuario.",
            tags: ["verificacion","inicio sesion","codigo","no responde","no funciona","reset","cache","cookies","incognito"] },
      ro: { q: "Ecranul de verificare nu răspunde — ce să fac?",
            a: "Parcurgeți acești pași în ordine:\n1. Ștergeți cache-ul și cookie-urile, închideți complet browserul și conectați-vă din nou.\n2. Încercați alt browser (Chrome ↔ Firefox) sau o fereastră privată/incognito.\n3. Tastați codul de șase cifre într-un câmp gol (Notepad) și lipiți-l în ecranul de verificare — sau invers.\n4. Solicitați un nou link de verificare/resetare din ecranul de conectare (sunt de unică folosință și expiră).\n5. Dacă tot nu funcționează, un administrator poate trimite un email nou de invitație din profilul utilizatorului.",
            tags: ["verificare","conectare","cod","nu raspunde","nu functioneaza","resetare","cache","cookie","incognito"] }
    },
    {
      id: "only-first-tab",
      nl: { q: "Een kandidaat ziet alleen de eerste tab — hoe komt dat?",
            a: "De vervolg-tabs worden pas vrijgegeven nadat de kandidaat de openingspagina actief heeft geaccepteerd via 'I accept'. Heeft de kandidaat dat vinkje overgeslagen, dan blijven de andere vragenlijsten gesloten. Laat de kandidaat opnieuw inloggen, terug naar de eerste pagina gaan, de voorwaarden accepteren en opslaan — de overige tabs komen dan automatisch beschikbaar.",
            tags: ["tab","tabs","vragenlijst","kandidaat","eerste","i accept","accepteren","openingspagina","zichtbaar"] },
      en: { q: "A candidate only sees the first tab — why?",
            a: "The follow-up tabs only unlock after the candidate actively accepts the opening page via 'I accept'. If they skipped that checkbox, the remaining questionnaires stay closed. Ask the candidate to log in again, return to the first page, accept the terms and save — the other tabs become available automatically.",
            tags: ["tab","tabs","questionnaire","candidate","first","i accept","accept","opening page","visible"] },
      de: { q: "Ein Kandidat sieht nur den ersten Tab — woran liegt das?",
            a: "Die weiteren Tabs werden erst freigegeben, nachdem der Kandidat die Startseite über 'I accept' aktiv akzeptiert hat. Wurde dieses Häkchen übersprungen, bleiben die übrigen Fragebögen geschlossen. Lassen Sie den Kandidaten erneut anmelden, zur ersten Seite zurückkehren, die Bedingungen akzeptieren und speichern — die anderen Tabs werden dann automatisch verfügbar.",
            tags: ["tab","fragebogen","kandidat","erster","i accept","akzeptieren","startseite","sichtbar"] },
      fr: { q: "Un candidat ne voit que le premier onglet — pourquoi ?",
            a: "Les onglets suivants ne se déverrouillent qu'après que le candidat ait accepté activement la page d'accueil via 'I accept'. S'il a sauté cette case, les autres questionnaires restent fermés. Demandez-lui de se reconnecter, de revenir à la première page, d'accepter les conditions et d'enregistrer — les autres onglets seront alors disponibles automatiquement.",
            tags: ["onglet","questionnaire","candidat","premier","i accept","accepter","page accueil","visible"] },
      es: { q: "Un candidato solo ve la primera pestaña — ¿por qué?",
            a: "Las demás pestañas solo se desbloquean cuando el candidato acepta activamente la página inicial mediante 'I accept'. Si saltó esa casilla, los demás cuestionarios quedan cerrados. Pídale que vuelva a entrar, regrese a la primera página, acepte las condiciones y guarde — las otras pestañas se activan automáticamente.",
            tags: ["pestana","cuestionario","candidato","primera","i accept","aceptar","pagina inicial","visible"] },
      ro: { q: "Un candidat vede doar prima filă — de ce?",
            a: "Filele următoare se deblochează doar după ce candidatul acceptă activ pagina inițială prin 'I accept'. Dacă a sărit acea bifă, celelalte chestionare rămân închise. Cereți-i să se reconecteze, să revină la prima pagină, să accepte termenii și să salveze — celelalte file devin apoi disponibile automat.",
            tags: ["fila","chestionar","candidat","prima","i accept","acceptare","pagina initiala","vizibil"] }
    },
    {
      id: "logiks-mbo",
      nl: { q: "Logiks Advanced biedt geen MBO-benchmark — wat nu?",
            a: "Het Advanced-rapport ondersteunt alleen HBO 2.0 en WO 2.0. Een MBO-normgroep zit uitsluitend in het Intermediate-rapport. Vraagt de klant nadrukkelijk om MBO terwijl Advanced is besteld, lever dan tegen HBO 2.0 en meld transparant welke normgroep is gebruikt. Vuistregel: een score op HBO valt ongeveer 1 punt lager uit dan op MBO (een 4 op HBO ≈ een 5 op MBO).",
            tags: ["logiks","advanced","intermediate","mbo","hbo","wo","benchmark","normgroep","capaciteit","rapport"] },
      en: { q: "Logiks Advanced has no MBO benchmark — how do we handle it?",
            a: "The Advanced report only supports HBO 2.0 and WO 2.0. An MBO norm group is only available in the Intermediate report. If a client explicitly asks for MBO while Advanced has been ordered, deliver against HBO 2.0 and inform the client transparently which norm group is used. Rule of thumb: a score on HBO is roughly one point lower than on MBO (a 4 on HBO ≈ a 5 on MBO).",
            tags: ["logiks","advanced","intermediate","mbo","hbo","wo","benchmark","norm group","cognitive","report"] },
      de: { q: "Logiks Advanced bietet keinen MBO-Benchmark — wie gehen wir damit um?",
            a: "Der Advanced-Bericht unterstützt nur HBO 2.0 und WO 2.0. Eine MBO-Normgruppe gibt es ausschließlich im Intermediate-Bericht. Verlangt der Kunde ausdrücklich MBO, obwohl Advanced bestellt wurde, liefern Sie gegen HBO 2.0 und teilen Sie transparent mit, welche Normgruppe verwendet wurde. Faustregel: Ein Score auf HBO liegt etwa einen Punkt niedriger als auf MBO (eine 4 auf HBO ≈ eine 5 auf MBO).",
            tags: ["logiks","advanced","intermediate","mbo","hbo","wo","benchmark","normgruppe","kognitiv","bericht"] },
      fr: { q: "Logiks Advanced n'offre pas de benchmark MBO — comment faire ?",
            a: "Le rapport Advanced ne prend en charge que HBO 2.0 et WO 2.0. Un groupe normatif MBO n'existe que dans le rapport Intermediate. Si le client demande explicitement MBO alors qu'Advanced a été commandé, livrez contre HBO 2.0 et informez-le de manière transparente du groupe de référence utilisé. Règle empirique : un score sur HBO est environ un point inférieur à un score sur MBO (un 4 sur HBO ≈ un 5 sur MBO).",
            tags: ["logiks","advanced","intermediate","mbo","hbo","wo","benchmark","groupe reference","cognitif","rapport"] },
      es: { q: "Logiks Advanced no ofrece benchmark MBO — ¿cómo lo manejamos?",
            a: "El informe Advanced solo admite HBO 2.0 y WO 2.0. Un grupo normativo MBO existe únicamente en el informe Intermediate. Si el cliente pide MBO explícitamente cuando se pidió Advanced, entregue con HBO 2.0 e informe con transparencia el grupo normativo usado. Regla práctica: una puntuación en HBO es aproximadamente un punto inferior que en MBO (un 4 en HBO ≈ un 5 en MBO).",
            tags: ["logiks","advanced","intermediate","mbo","hbo","wo","benchmark","grupo normativo","cognitivo","informe"] },
      ro: { q: "Logiks Advanced nu are benchmark MBO — cum procedăm?",
            a: "Raportul Advanced acceptă doar HBO 2.0 și WO 2.0. Un grup normativ MBO există doar în raportul Intermediate. Dacă clientul cere explicit MBO deși s-a comandat Advanced, livrați pe HBO 2.0 și informați-l transparent ce grup normativ s-a folosit. Regulă orientativă: un scor pe HBO este cu aproximativ un punct mai mic decât pe MBO (un 4 pe HBO ≈ un 5 pe MBO).",
            tags: ["logiks","advanced","intermediate","mbo","hbo","wo","benchmark","grup normativ","cognitiv","raport"] }
    },
    {
      id: "pearson-migration",
      nl: { q: "Verandert er iets aan Pearson TalentLens-assessments?",
            a: "Pearson migreert TalentLens van het oude Talogy-platform naar het nieuwe platform 'Palladium'. Inhoud, normering en validiteit blijven ongewijzigd, dus lopende afnames en bestaande rapportages houden hun waarde. De technische koppeling tussen HRMForce en Pearson stemmen we vooraf af in een kick-off — klanten hoeven zelf niets te doen.",
            tags: ["pearson","talentlens","talogy","palladium","migratie","platform","integratie","servicedesk"] },
      en: { q: "Is anything changing with Pearson TalentLens assessments?",
            a: "Pearson is migrating TalentLens from the legacy Talogy platform to the new 'Palladium' platform. Content, norming and validity stay the same, so ongoing assessments and existing reports retain their value. The technical link between HRMForce and Pearson is coordinated upfront in a kick-off — clients don't need to do anything.",
            tags: ["pearson","talentlens","talogy","palladium","migration","platform","integration","servicedesk"] },
      de: { q: "Ändert sich etwas bei Pearson TalentLens-Assessments?",
            a: "Pearson migriert TalentLens von der alten Talogy-Plattform auf 'Palladium'. Inhalt, Normierung und Validität bleiben unverändert — laufende Assessments und Berichte behalten ihren Wert. Die technische Anbindung wird in einem Kick-off abgestimmt — Kunden müssen nichts tun.",
            tags: ["pearson","talentlens","talogy","palladium","migration","plattform","integration","servicedesk"] },
      fr: { q: "Y a-t-il des changements pour Pearson TalentLens ?",
            a: "Pearson migre TalentLens de Talogy vers la nouvelle plateforme 'Palladium'. Contenu, étalonnage et validité restent inchangés — les assessments en cours et rapports existants conservent leur valeur. La connexion technique est coordonnée lors d'un kick-off — les clients n'ont rien à faire.",
            tags: ["pearson","talentlens","talogy","palladium","migration","plateforme","integration","service desk"] },
      es: { q: "¿Cambia algo en Pearson TalentLens?",
            a: "Pearson está migrando TalentLens de Talogy a la nueva plataforma 'Palladium'. Contenido, baremación y validez no cambian — los assessments en curso e informes existentes conservan su valor. La conexión técnica se coordina en un kick-off — los clientes no tienen que hacer nada.",
            tags: ["pearson","talentlens","talogy","palladium","migracion","plataforma","integracion","service desk"] },
      ro: { q: "Se schimbă ceva la Pearson TalentLens?",
            a: "Pearson migrează TalentLens de pe Talogy pe noua platformă 'Palladium'. Conținutul, etalonarea și validitatea rămân neschimbate — evaluările în curs și rapoartele existente își păstrează valoarea. Conexiunea tehnică se coordonează printr-un kick-off — clienții nu trebuie să facă nimic.",
            tags: ["pearson","talentlens","talogy","palladium","migrare","platforma","integrare","service desk"] }
    },
    {
      id: "data-retention",
      nl: { q: "Hoe lang worden mijn gegevens bewaard?",
            a: "Persoonlijke gegevens van kandidaten worden niet langer bewaard dan nodig: maximaal twee jaar beschikbaar. Daarna worden gegevens geanonimiseerd en alleen anoniem gerapporteerd voor onderzoek. Wil je gegevens langer bewaren (bv. voor ontwikkeling), dan kun je dat zelf instellen.",
            tags: ["bewaartermijn","bewaren","data","gegevens","twee jaar","anonimiseren","retention"] },
      en: { q: "How long is my data stored?",
            a: "Candidate personal data is kept no longer than necessary: maximum two years. After that, data is anonymised and used only at group level for research. To keep data longer (e.g. development), configure it yourself.",
            tags: ["retention","store","data","two years","anonymise","period"] },
      de: { q: "Wie lange werden Daten gespeichert?",
            a: "Persönliche Kandidatendaten werden maximal zwei Jahre aufbewahrt. Danach werden Daten anonymisiert und nur auf Gruppenebene für Forschung verwendet. Zum längeren Aufbewahren (z. B. Entwicklung) selbst konfigurieren.",
            tags: ["aufbewahrung","speichern","daten","zwei jahre","anonymisieren","frist"] },
      fr: { q: "Combien de temps les données sont-elles conservées ?",
            a: "Les données personnelles des candidats sont conservées deux ans maximum. Ensuite anonymisées et utilisées au niveau du groupe pour la recherche. Pour conserver plus longtemps (par ex. développement), configurez-le vous-même.",
            tags: ["conservation","stocker","donnees","deux ans","anonymiser","duree"] },
      es: { q: "¿Cuánto tiempo se conservan los datos?",
            a: "Los datos personales se conservan dos años máximo. Después se anonimizan y se usan solo a nivel de grupo para investigación. Para conservar más tiempo (p. ej. desarrollo), configúrelo usted mismo.",
            tags: ["conservacion","almacenar","datos","dos anos","anonimizar","periodo"] },
      ro: { q: "Cât timp sunt păstrate datele?",
            a: "Datele personale ale candidaților se păstrează maximum doi ani. După aceea sunt anonimizate și folosite la nivel de grup pentru cercetare. Pentru păstrare mai îndelungată (de ex. dezvoltare), configurați dvs.",
            tags: ["pastrare","stocare","date","doi ani","anonimizare","perioada"] }
    },
    {
      id: "delete-data",
      nl: { q: "Kan ik mijn gegevens laten verwijderen?",
            a: "Ja. Stuur het verzoek naar service@hrmforce.com met een kopie van een identiteitsbewijs. Je krijgt binnen 2 werkdagen antwoord. Verwijdering wordt altijd ingewilligd, tenzij gegevens om wettelijke redenen bewaard moeten worden.",
            tags: ["verwijderen","wissen","inzage","recht","avg","privacy","gegevens","verzoek"] },
      en: { q: "Can I have my data deleted?",
            a: "Yes. Send the request to service@hrmforce.com with a copy of an ID. Reply within 2 working days. Deletion is granted unless data must be retained for legal reasons.",
            tags: ["delete","remove","access","right","gdpr","privacy","data","request"] },
      de: { q: "Kann ich meine Daten löschen lassen?",
            a: "Ja. Senden Sie den Antrag an service@hrmforce.com mit Ausweiskopie. Antwort innerhalb von 2 Werktagen. Löschung wird gewährt, außer bei rechtlicher Aufbewahrungspflicht.",
            tags: ["loschen","entfernen","auskunft","recht","dsgvo","datenschutz","daten","antrag"] },
      fr: { q: "Puis-je faire supprimer mes données ?",
            a: "Oui. Envoyez la demande à service@hrmforce.com avec copie d'une pièce d'identité. Réponse sous 2 jours ouvrés. La suppression est accordée sauf obligation légale.",
            tags: ["supprimer","effacer","acces","droit","rgpd","confidentialite","donnees","demande"] },
      es: { q: "¿Puedo eliminar mis datos?",
            a: "Sí. Envíe la solicitud a service@hrmforce.com con copia de documento de identidad. Respuesta en 2 días laborables. Se concede salvo motivo legal.",
            tags: ["eliminar","borrar","acceso","derecho","rgpd","privacidad","datos","solicitud"] },
      ro: { q: "Pot șterge datele mele?",
            a: "Da. Trimiteți cererea la service@hrmforce.com cu o copie a unui act de identitate. Răspuns în 2 zile lucrătoare. Ștergerea se acordă, cu excepția cazurilor legale.",
            tags: ["sterge","elimina","acces","drept","gdpr","confidentialitate","date","cerere"] }
    },
    {
      id: "teamviewer",
      nl: { q: "Waar download ik TeamViewer of Chrome Remote Desktop?",
            a: "TeamViewer: https://www.teamviewer.com\nChrome Remote Desktop: https://remotedesktop.google.com",
            tags: ["teamviewer","chrome","remote","desktop","meekijken","demo","support","download"] },
      en: { q: "Where do I download TeamViewer or Chrome Remote Desktop?",
            a: "TeamViewer: https://www.teamviewer.com\nChrome Remote Desktop: https://remotedesktop.google.com",
            tags: ["teamviewer","chrome","remote","desktop","screen share","demo","support","download"] },
      de: { q: "Wo lade ich TeamViewer oder Chrome Remote Desktop herunter?",
            a: "TeamViewer: https://www.teamviewer.com\nChrome Remote Desktop: https://remotedesktop.google.com",
            tags: ["teamviewer","chrome","remote","desktop","bildschirm","demo","support","download"] },
      fr: { q: "Où télécharger TeamViewer ou Chrome Remote Desktop ?",
            a: "TeamViewer : https://www.teamviewer.com\nChrome Remote Desktop : https://remotedesktop.google.com",
            tags: ["teamviewer","chrome","remote","desktop","ecran","demo","support","telechargement"] },
      es: { q: "¿Dónde descargo TeamViewer o Chrome Remote Desktop?",
            a: "TeamViewer: https://www.teamviewer.com\nChrome Remote Desktop: https://remotedesktop.google.com",
            tags: ["teamviewer","chrome","remoto","escritorio","pantalla","demo","soporte","descarga"] },
      ro: { q: "De unde descarc TeamViewer sau Chrome Remote Desktop?",
            a: "TeamViewer: https://www.teamviewer.com\nChrome Remote Desktop: https://remotedesktop.google.com",
            tags: ["teamviewer","chrome","remote","desktop","ecran","demo","suport","descarcare"] }
    },
    {
      id: "account-blocked",
      nl: { q: "Een kandidaat krijgt 'account geblokkeerd' — waarom?",
            a: "Meestal omdat het profiel naar een ander segment is verplaatst (bv. Sollicitant naar Medewerker of Talent Pool). De oude login wordt automatisch gedeactiveerd. De kandidaat moet inloggen met het nieuwe account, of een beheerder kan het oorspronkelijke account deblokkeren via gebruikersbeheer.",
            tags: ["account","geblokkeerd","blocked","inloggen","segment","talent pool","sollicitant","medewerker","deblokkeren"] },
      en: { q: "A candidate gets 'account blocked' on first login — why?",
            a: "Usually because the profile was moved to another segment (e.g. Applicant to Employee or Talent Pool). The old login is automatically deactivated. The candidate should log in with the new account matching their current status, or an administrator can unblock the original account via user management.",
            tags: ["account","blocked","login","segment","talent pool","applicant","employee","unblock"] },
      de: { q: "Ein Kandidat erhält 'Konto gesperrt' — warum?",
            a: "Meist weil das Profil in ein anderes Segment verschoben wurde (z. B. Bewerber zu Mitarbeiter oder Talent Pool). Das alte Login wird automatisch deaktiviert. Der Kandidat muss sich mit dem neuen Konto anmelden, oder ein Administrator kann das ursprüngliche Konto entsperren.",
            tags: ["konto","gesperrt","anmeldung","segment","talent pool","bewerber","mitarbeiter","entsperren"] },
      fr: { q: "Un candidat reçoit 'compte bloqué' — pourquoi ?",
            a: "Généralement parce que le profil a été déplacé vers un autre segment (par ex. Candidat → Employé ou Talent Pool). L'ancien login est désactivé automatiquement. Le candidat doit se connecter avec le nouveau compte, ou un administrateur peut débloquer le compte d'origine.",
            tags: ["compte","bloque","connexion","segment","talent pool","candidat","employe","debloquer"] },
      es: { q: "Un candidato recibe 'cuenta bloqueada' — ¿por qué?",
            a: "Suele ser porque el perfil se movió a otro segmento (p. ej. Candidato a Empleado o Talent Pool). El login antiguo se desactiva. El candidato debe entrar con la nueva cuenta, o un administrador puede desbloquear la cuenta original.",
            tags: ["cuenta","bloqueada","inicio sesion","segmento","talent pool","candidato","empleado","desbloquear"] },
      ro: { q: "Un candidat primește 'cont blocat' — de ce?",
            a: "De obicei pentru că profilul a fost mutat în alt segment (de ex. Candidat → Angajat sau Talent Pool). Login-ul vechi este dezactivat automat. Candidatul trebuie să se conecteze cu noul cont, sau un administrator poate debloca contul original.",
            tags: ["cont","blocat","conectare","segment","talent pool","candidat","angajat","deblocare"] }
    },
    {
      id: "report-not-visible",
      nl: { q: "Het rapport is niet zichtbaar terwijl status 'afgerond' is — hoe los ik dat op?",
            a: "Bijna altijd een berekeningsvertraging. Open het kandidatenprofiel, wissel het competentieprofiel naar een ander en terug, of trigger een herberekening van de Capaciteitenanalyse via de beheerderstools. Het rapport wordt opnieuw gegenereerd en wordt zichtbaar.",
            tags: ["rapport","niet zichtbaar","afgerond","berekening","herberekening","competentieprofiel","capaciteitenanalyse"] },
      en: { q: "The report isn't visible even though status is 'completed' — how do I fix it?",
            a: "Almost always a calculation lag. Open the candidate profile, switch the competency profile to another and back, or trigger a recalculation of the cognitive analysis via admin tools. The report regenerates and becomes visible.",
            tags: ["report","not visible","completed","calculation","recalculate","competency profile","cognitive"] },
      de: { q: "Bericht ist nicht sichtbar, Status 'abgeschlossen' — wie behebe ich das?",
            a: "Fast immer eine Berechnungsverzögerung. Öffnen Sie das Kandidatenprofil, wechseln Sie das Kompetenzprofil auf ein anderes und zurück, oder lösen Sie eine Neuberechnung der Fähigkeitsanalyse aus. Der Bericht wird neu generiert.",
            tags: ["bericht","nicht sichtbar","abgeschlossen","berechnung","neu berechnen","kompetenzprofil","kognitiv"] },
      fr: { q: "Rapport non visible alors que statut 'terminé' — comment corriger ?",
            a: "Presque toujours un délai de calcul. Ouvrez le profil candidat, basculez le profil de compétences sur un autre puis revenez, ou déclenchez un recalcul de l'analyse cognitive. Le rapport se régénère.",
            tags: ["rapport","non visible","termine","calcul","recalculer","profil competences","cognitif"] },
      es: { q: "Informe no visible aunque estado 'finalizado' — ¿cómo lo soluciono?",
            a: "Casi siempre es un retardo de cálculo. Abra el perfil del candidato, cambie el perfil competencial a otro y vuelva, o dispare un recálculo del análisis cognitivo. El informe se regenera.",
            tags: ["informe","no visible","finalizado","calculo","recalcular","perfil competencias","cognitivo"] },
      ro: { q: "Raport invizibil deși status 'finalizat' — cum rezolv?",
            a: "Aproape întotdeauna o întârziere de calcul. Deschideți profilul candidatului, schimbați profilul de competențe pe alt profil și înapoi, sau declanșați o recalculare a analizei cognitive. Raportul se regenerează.",
            tags: ["raport","invizibil","finalizat","calcul","recalcul","profil competente","cognitiv"] }
    },
    {
      id: "afas-sync",
      nl: { q: "Wat verandert er na een AFAS-sync?",
            a: "Een AFAS-sync kan de rolcatalogus vernieuwen en handmatig toegevoegde competenties overschrijven. Controleer na een sync steekproefsgewijs rollen op aangepaste resultaatgebieden (bv. Vitaliteit, NTB-velden). De servicedesk kan een volledige controle uitvoeren.",
            tags: ["afas","sync","integratie","rollen","competenties","vitaliteit","ntb","controle"] },
      en: { q: "What changes after an AFAS sync?",
            a: "An AFAS sync can refresh the role catalogue and overwrite manually added competencies. After a sync, sample-check roles for customised result areas (e.g. Vitality, NTB fields). The service desk can run a full check on request.",
            tags: ["afas","sync","integration","roles","competencies","vitality","ntb","check"] },
      de: { q: "Was ändert sich nach einer AFAS-Sync?",
            a: "Eine AFAS-Sync kann den Rollenkatalog aktualisieren und manuell hinzugefügte Kompetenzen überschreiben. Nach einer Sync stichprobenartig Rollen prüfen auf angepasste Ergebnisbereiche (z. B. Vitalität, NTB). Service-Desk kann vollständig prüfen.",
            tags: ["afas","sync","integration","rollen","kompetenzen","vitalitat","ntb","prufung"] },
      fr: { q: "Que change une sync AFAS ?",
            a: "Une sync AFAS peut rafraîchir le catalogue de rôles et écraser des compétences ajoutées manuellement. Après une sync, contrôler quelques rôles et confirmer les domaines personnalisés (par ex. Vitalité, champs NTB). Service desk peut vérifier complètement.",
            tags: ["afas","sync","integration","roles","competences","vitalite","ntb","verification"] },
      es: { q: "¿Qué cambia tras una sincronización AFAS?",
            a: "Una sincronización AFAS puede refrescar el catálogo y sobrescribir competencias añadidas manualmente. Tras una sincronización, revise por muestreo roles y áreas personalizadas (p. ej. Vitalidad, NTB). Service desk puede revisar todo.",
            tags: ["afas","sync","integracion","roles","competencias","vitalidad","ntb","revision"] },
      ro: { q: "Ce se schimbă după o sincronizare AFAS?",
            a: "O sincronizare AFAS poate reîmprospăta catalogul de roluri și suprascrie competențe adăugate manual. După sincronizare, verificați prin eșantion rolurile pentru zone personalizate (de ex. Vitalitate, NTB). Biroul de service poate verifica complet.",
            tags: ["afas","sync","integrare","roluri","competente","vitalitate","ntb","verificare"] }
    },
    {
      id: "service-desk-hours",
      nl: { q: "Wat zijn de openingstijden van de servicedesk?",
            a: "De servicedesk is bereikbaar via service@hrmforce.com, ma-vr 08:00–18:00 (CET). Verzoeken vóór 18:00 worden dezelfde dag opgepakt. Direct telefonisch contact via je accountmanager — markeer urgenties in het onderwerp.",
            tags: ["servicedesk","openingstijden","urgent","support","bereikbaar","email","contact","spoed"] },
      en: { q: "What are the service desk hours?",
            a: "service@hrmforce.com is available Monday–Friday, 08:00–18:00 (CET). Requests before 18:00 are picked up the same day. Direct phone contact runs via your account manager — flag urgencies in the subject.",
            tags: ["service desk","hours","urgent","support","available","email","contact","priority"] },
      de: { q: "Was sind die Öffnungszeiten des Service-Desks?",
            a: "service@hrmforce.com ist Mo-Fr 08:00–18:00 (MEZ) erreichbar. Anfragen vor 18:00 werden am selben Tag bearbeitet. Direkter Telefonkontakt via Account Manager — Dringlichkeit im Betreff markieren.",
            tags: ["service desk","offnungszeiten","dringend","support","erreichbar","email","kontakt"] },
      fr: { q: "Quels sont les horaires du service desk ?",
            a: "service@hrmforce.com est joignable lun-ven 08h-18h (CET). Les demandes avant 18h sont traitées le jour même. Contact téléphonique direct via votre account manager — indiquer les urgences dans l'objet.",
            tags: ["service desk","horaires","urgent","support","joignable","email","contact"] },
      es: { q: "¿Cuál es el horario del service desk?",
            a: "service@hrmforce.com está disponible lun-vie 08:00–18:00 (CET). Solicitudes antes de las 18:00 se atienden el mismo día. Contacto telefónico directo a través de su account manager — indique urgencias en el asunto.",
            tags: ["service desk","horario","urgente","soporte","disponible","email","contacto"] },
      ro: { q: "Care este programul biroului de service?",
            a: "service@hrmforce.com este disponibil lu-vi 08:00–18:00 (CET). Solicitările înainte de 18:00 se preiau în aceeași zi. Contact telefonic direct prin account managerul dvs. — marcați urgențele în subiect.",
            tags: ["service desk","program","urgent","suport","disponibil","email","contact"] }
    },
    {
      id: "contact",
      nl: { q: "Hoe neem ik contact op?",
            a: "Je bereikt ons makkelijk:\n• Telefoon: +31 (0)88 88 321 88\n• E-mail: service@hrmforce.com\n• Bezoek: Solitudolaan 396, 1096 DS Amsterdam\n• Contactformulier: https://hrmforce.com/contact/",
            tags: ["contact","telefoon","mail","email","adres","bellen","servicedesk","support"] },
      en: { q: "How do I get in touch?",
            a: "Easy ways to reach us:\n• Phone: +31 (0)88 88 321 88\n• Email: service@hrmforce.com\n• Visit: Solitudolaan 396, 1096 DS Amsterdam, The Netherlands\n• Contact form: https://hrmforce.com/en/contact/",
            tags: ["contact","phone","mail","email","address","call","servicedesk","support"] },
      de: { q: "Wie kontaktiere ich Sie?",
            a: "So erreichen Sie uns:\n• Telefon: +31 (0)88 88 321 88\n• E-Mail: service@hrmforce.com\n• Besuch: Solitudolaan 396, 1096 DS Amsterdam, Niederlande\n• Formular: https://hrmforce.com/contact/",
            tags: ["kontakt","telefon","mail","email","adresse","anrufen","service desk","support"] },
      fr: { q: "Comment vous contacter ?",
            a: "Pour nous joindre :\n• Téléphone : +31 (0)88 88 321 88\n• E-mail : service@hrmforce.com\n• Adresse : Solitudolaan 396, 1096 DS Amsterdam, Pays-Bas\n• Formulaire : https://hrmforce.com/contact/",
            tags: ["contact","telephone","mail","email","adresse","appeler","service desk","support"] },
      es: { q: "¿Cómo me pongo en contacto?",
            a: "Para contactarnos:\n• Teléfono: +31 (0)88 88 321 88\n• Correo: service@hrmforce.com\n• Visita: Solitudolaan 396, 1096 DS Amsterdam, Países Bajos\n• Formulario: https://hrmforce.com/contact/",
            tags: ["contacto","telefono","correo","email","direccion","llamar","service desk","soporte"] },
      ro: { q: "Cum vă contactez?",
            a: "Cum ne contactați:\n• Telefon: +31 (0)88 88 321 88\n• Email: service@hrmforce.com\n• Vizită: Solitudolaan 396, 1096 DS Amsterdam, Olanda\n• Formular: https://hrmforce.com/contact/",
            tags: ["contact","telefon","mail","email","adresa","suna","service desk","suport"] }
    },
    {
      id: "demo",
      nl: { q: "Kan ik een gratis demo aanvragen?",
            a: "Ja. Vraag een vrijblijvende demo aan — een adviseur neemt binnen één werkdag contact op.\n\nDemo aanvragen: https://hrmforce.com/demo/",
            tags: ["demo","gratis","proberen","afspraak","vrijblijvend","adviseur","kennismaken"] },
      en: { q: "Can I request a free demo?",
            a: "Yes. Request a no-obligation demo — a consultant will reach out within one business day.\n\nRequest a demo: https://hrmforce.com/en/demo-2/",
            tags: ["demo","free","trial","appointment","no obligation","consultant","intro"] },
      de: { q: "Kann ich eine kostenlose Demo anfragen?",
            a: "Ja. Fordern Sie eine unverbindliche Demo an — ein Berater meldet sich innerhalb eines Werktags.\n\nDemo: https://hrmforce.com/demo/",
            tags: ["demo","kostenlos","testen","termin","unverbindlich","berater"] },
      fr: { q: "Puis-je demander une démo gratuite ?",
            a: "Oui. Demandez une démo sans engagement — un consultant vous contactera sous un jour ouvré.\n\nDémo : https://hrmforce.com/en/demo-2/",
            tags: ["demo","gratuite","essai","rendez-vous","sans engagement","consultant"] },
      es: { q: "¿Puedo solicitar una demo gratuita?",
            a: "Sí. Solicite una demo sin compromiso — un consultor le contactará en un día laborable.\n\nDemo: https://hrmforce.com/en/demo-2/",
            tags: ["demo","gratis","probar","cita","sin compromiso","consultor"] },
      ro: { q: "Pot solicita un demo gratuit?",
            a: "Da. Solicitați un demo fără obligație — un consultant vă contactează în decurs de o zi lucrătoare.\n\nDemo: https://hrmforce.com/en/demo-2/",
            tags: ["demo","gratuit","incercare","programare","fara obligatie","consultant"] }
    },
    {
      id: "pricing",
      nl: { q: "Wat kost een assessment?",
            a: "Tarieven hangen af van het assessment, het volume en of je losse afnames doet of een licentie afsluit. Webshop-prijzen staan direct in de shop. Voor licenties of grotere trajecten maken we een passend voorstel.\n\nTarieven: https://hrmforce.com/tarieven/\nShop: https://hrmforce.com/shop/",
            tags: ["prijs","kosten","tarief","tarieven","hoeveel","betalen","abonnement"] },
      en: { q: "What does an assessment cost?",
            a: "Pricing depends on assessment, volume and whether you use the webshop or a licence. Webshop prices are visible directly. For licences or larger projects we prepare a tailored proposal.\n\nPricing: https://hrmforce.com/en/pricing/\nShop: https://hrmforce.com/en/shop/",
            tags: ["price","cost","pricing","tariff","how much","pay","subscription"] },
      de: { q: "Was kostet ein Assessment?",
            a: "Die Preise hängen von Assessment, Volumen und Bezugsweg (Webshop oder Lizenz) ab. Webshop-Preise sind direkt sichtbar. Für Lizenzen oder größere Projekte passendes Angebot.\n\nPreise: https://hrmforce.com/en/pricing/\nShop: https://hrmforce.com/en/shop/",
            tags: ["preis","kosten","kostet","tarif","wie viel","zahlen","abonnement","gebuhr"] },
      fr: { q: "Combien coûte un assessment ?",
            a: "Le tarif dépend de l'assessment, du volume et du mode (boutique ou licence). Les tarifs de la boutique sont visibles directement. Pour licences ou projets importants, offre sur mesure.\n\nTarifs : https://hrmforce.com/en/pricing/\nBoutique : https://hrmforce.com/en/shop/",
            tags: ["prix","cout","tarif","combien","payer","abonnement"] },
      es: { q: "¿Cuánto cuesta un assessment?",
            a: "El precio depende del assessment, volumen y de si usa la tienda o una licencia. Precios de tienda visibles directamente. Para licencias o proyectos mayores, propuesta a medida.\n\nPrecios: https://hrmforce.com/en/pricing/\nTienda: https://hrmforce.com/en/shop/",
            tags: ["precio","coste","tarifa","cuanto","pagar","suscripcion"] },
      ro: { q: "Cât costă o evaluare?",
            a: "Prețul depinde de evaluare, volum și mod (magazin sau licență). Prețurile din magazin sunt vizibile direct. Pentru licențe sau proiecte mari, ofertă personalizată.\n\nPrețuri: https://hrmforce.com/en/pricing/\nMagazin: https://hrmforce.com/en/shop/",
            tags: ["pret","cost","tarif","cat","plata","abonament"] }
    }
  ];

  // ============================================================
  // MATCHING
  // ============================================================
  function tokenize(text, lang) {
    var stop = STOPWORDS[lang] || [];
    return text.toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter(function(t) { return t.length > 1 && stop.indexOf(t) === -1; });
  }

  function score(query, entry, lang) {
    var qTokens = tokenize(query, lang);
    if (qTokens.length === 0) return 0;
    var data = entry[lang] || entry.en || entry.nl;
    var qText = (data.q || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    var aText = (data.a || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    var tags = (data.tags || []).map(function(t) { return t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); });
    var s = 0;
    qTokens.forEach(function(tok) {
      tags.forEach(function(tag) {
        if (tag === tok) s += 5;
        else if (tag.indexOf(tok) !== -1 || tok.indexOf(tag) !== -1) s += 2;
      });
      if (qText.indexOf(tok) !== -1) s += 3;
      if (aText.indexOf(tok) !== -1) s += 1;
    });
    return s;
  }

  function findBest(query, lang) {
    var rankedActive = KB.map(function(entry) { return { entry: entry, score: score(query, entry, lang) }; })
                        .sort(function(a, b) { return b.score - a.score; });
    if (rankedActive[0] && rankedActive[0].score >= 3) {
      return { match: rankedActive[0].entry,
               alternatives: rankedActive.slice(1, 4).filter(function(r) { return r.score >= 2; }).map(function(r) { return r.entry; }) };
    }
    var rankedAll = KB.map(function(entry) {
      var best = 0;
      ["nl","en","de","fr","es","ro"].forEach(function(L) { if (entry[L]) { var sc = score(query, entry, L); if (sc > best) best = sc; } });
      return { entry: entry, score: best };
    }).sort(function(a, b) { return b.score - a.score; });
    if (rankedAll[0] && rankedAll[0].score >= 3) {
      return { match: rankedAll[0].entry,
               alternatives: rankedAll.slice(1, 4).filter(function(r) { return r.score >= 2; }).map(function(r) { return r.entry; }) };
    }
    return { match: null, alternatives: [] };
  }

  // ============================================================
  // DOM
  // ============================================================
  var state = { lang: "nl", open: false, history: [], lead: null };
  var root, panel, bubble, messagesEl, input, sendBtn, closeBtn, langBtn, statusEl, botTitleEl;

  // ============================================================
  // Cloudflare Turnstile integration (invisible). No-op if TURNSTILE_SITEKEY is empty.
  // ============================================================
  var _turnstileWidgetId = null;
  var _turnstileReadyPromise = null;
  var _lastTurnstileToken = "";
  var _tokenReady = null;
  function _loadTurnstile() {
    if (_turnstileReadyPromise) return _turnstileReadyPromise;
    _turnstileReadyPromise = new Promise(function(resolve, reject) {
      if (window.turnstile) return resolve();
      var s = document.createElement("script");
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      s.async = true; s.defer = true;
      s.onload = resolve;
      s.onerror = function() { reject(new Error("turnstile_script_load_failed")); };
      document.head.appendChild(s);
    }).then(function() {
      var container = document.createElement("div");
      container.style.cssText = "position:absolute;left:-9999px;top:-9999px;width:300px;height:65px;";
      document.body.appendChild(container);
      _turnstileWidgetId = window.turnstile.render(container, {
        sitekey: TURNSTILE_SITEKEY,
        callback: function(tok) { _lastTurnstileToken = tok; _tokenReady && _tokenReady(tok); _tokenReady = null; },
        "error-callback": function() { _lastTurnstileToken = ""; }
      });
    });
    return _turnstileReadyPromise;
  }
  function getTurnstileToken() {
    if (!TURNSTILE_SITEKEY) return Promise.resolve("");
    return _loadTurnstile().then(function() {
      if (_lastTurnstileToken) {
        var tok = _lastTurnstileToken; _lastTurnstileToken = "";
        setTimeout(function() { try { if (window.turnstile && _turnstileWidgetId) { window.turnstile.reset(_turnstileWidgetId); window.turnstile.execute(_turnstileWidgetId); } } catch(e){} }, 0);
        return tok;
      }
      return new Promise(function(resolve, reject) {
        var settled = false;
        _tokenReady = function(tok) { if (!settled) { settled = true; resolve(tok); } };
        try { window.turnstile.execute(_turnstileWidgetId); } catch(e) { _tokenReady = null; return reject(e); }
        setTimeout(function() { if (!settled) { settled = true; _tokenReady = null; reject(new Error("turnstile_timeout")); } }, 20000);
      }).then(function(tok) {
        _lastTurnstileToken = "";
        setTimeout(function() { try { if (window.turnstile && _turnstileWidgetId) { window.turnstile.reset(_turnstileWidgetId); window.turnstile.execute(_turnstileWidgetId); } } catch(e){} }, 0);
        return tok;
      });
    });
  }

  // ============================================================
  // LLM call — POSTs to the Cloudflare Worker. Falls back to the
  // local keyword matcher if no ENDPOINT_URL is set or the call fails.
  // ============================================================
  function callLLM(history, lang, onProgress) {
    return getTurnstileToken().then(function(turnstileToken) {
      return fetch(ENDPOINT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history, lang: lang, turnstileToken: turnstileToken })
      });
    }).then(function(r) {
      if (!r.ok) throw new Error("worker_status_" + r.status);
      var ct = r.headers.get("content-type") || "";
      if (ct.indexOf("event-stream") < 0) {
        return r.json().then(function(data) {
          if (!data || typeof data.reply !== "string") throw new Error("bad_payload");
          return { reply: data.reply.trim(), streamed: false };
        });
      }
      var reader = r.body.getReader();
      var decoder = new TextDecoder();
      var buffer = "";
      var full = "";
      function pump() {
        return reader.read().then(function(res) {
          if (res.done) return { reply: full.trim(), streamed: true };
          buffer += decoder.decode(res.value, { stream: true });
          var lines = buffer.split("\n");
          buffer = lines.pop() || "";
          for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (!line || line.charAt(0) === ":") continue;
            if (line.indexOf("data:") !== 0) continue;
            var payload = line.slice(5).trim();
            if (!payload || payload === "[DONE]") continue;
            try {
              var evt = JSON.parse(payload);
              if (evt.type === "content_block_delta" && evt.delta && evt.delta.type === "text_delta") {
                full += evt.delta.text;
                if (onProgress) onProgress(full);
              }
            } catch (e) {}
          }
          return pump();
        });
      }
      return pump();
    });
  }

  function el(tag, props, children) {
    var e = document.createElement(tag);
    if (props) Object.keys(props).forEach(function(k) {
      if (k === "class") e.className = props[k];
      else if (k === "onclick") e.onclick = props[k];
      else e.setAttribute(k, props[k]);
    });
    (children || []).forEach(function(c) {
      if (typeof c === "string") e.appendChild(document.createTextNode(c));
      else if (c) e.appendChild(c);
    });
    return e;
  }

  function linkify(text) {
    // 1. HTML-escape
    var t = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    // 2. Strip / convert leftover Markdown (defensive — Henry should not produce these,
    //    but if he slips, we render them as plain styled text rather than raw # / **)
    t = t.replace(/^#{1,6}\s+(.*)$/gm, '<strong>$1</strong>');           // headers → bold line
    t = t.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');       // **bold**
    t = t.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');    // *italic*
    t = t.replace(/^\s*[-•]\s+(.*)$/gm, '• $1');                         // - bullet → •
    // 3. Linkify URLs and emails, newlines → <br>
    // NOTE: URL regex excludes quotes and angle brackets so a crafted URL like
    // https://x/"onmouseover="..." cannot break out of the href attribute (H2 fix).
    return t
      .replace(/(https?:\/\/[^\s<>"'`]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>')
      .replace(/([\w.+-]+@[\w-]+\.[\w.-]+)/g, '<a href="mailto:$1">$1</a>')
      .replace(/\n/g, "<br>");
  }

  // Extract [CONTACT_LEAD name="..." email="..." topic="..."] tag from Henry's reply.
  function extractLead(text) {
    var re = /\[CONTACT_LEAD\s+([^\]]+)\]\s*$/;
    var m = text.match(re);
    if (!m) return { cleanText: text, lead: null };
    var attrs = {};
    var attrRe = /(\w+)="([^"]*)"/g;
    var a;
    while ((a = attrRe.exec(m[1])) !== null) attrs[a[1]] = a[2];
    return {
      cleanText: text.replace(re, "").trim(),
      lead: { name: attrs.name || "", email: attrs.email || "", topic: attrs.topic || "" }
    };
  }

  // Fire-and-forget transcript POST. Used on panel close and on lead capture.
  function sendTranscript(reason) {
    if (!ENDPOINT_URL || !state.history.length) return;
    var payload = {
      messages: state.history.slice(),
      lang: state.lang,
      lead: state.lead || null,
      reason: reason || "close",
      turnstileToken: _lastTurnstileToken || ""
    };
    try {
      if (navigator.sendBeacon) {
        // Use text/plain to avoid CORS preflight (which gets aborted on page unload).
        // The Worker accepts and JSON-parses the body regardless of Content-Type.
        var blob = new Blob([JSON.stringify(payload)], { type: "text/plain" });
        navigator.sendBeacon(ENDPOINT_URL.replace(/\/?$/, "") + "/lead", blob);
      } else {
        fetch(ENDPOINT_URL.replace(/\/?$/, "") + "/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(function() {});
      }
    } catch (e) { /* swallow */ }
  }

  function addMessage(text, who, suggestions) {
    var msg = document.createElement("div");
    msg.className = "hrmf-msg " + (who === "user" ? "user" : "bot");
    msg.innerHTML = linkify(text);
    messagesEl.appendChild(msg);
    if (suggestions && suggestions.length) {
      var wrap = el("div", { class: "hrmf-suggestions" });
      suggestions.forEach(function(s) {
        var chip = el("button", { class: "hrmf-chip" }, [s.label]);
        chip.onclick = function() { handleUserInput(s.value || s.label); };
        wrap.appendChild(chip);
      });
      messagesEl.appendChild(wrap);
    }
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function showTyping() {
    var t = el("div", { class: "hrmf-typing", id: "hrmf-typing-indicator" }, []);
    t.appendChild(el("span")); t.appendChild(el("span")); t.appendChild(el("span"));
    messagesEl.appendChild(t);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }
  function hideTyping() { var t = document.getElementById("hrmf-typing-indicator"); if (t) t.remove(); }

  function handleUserInput(text) {
    text = (text || "").trim();
    if (!text) return;
    addMessage(text, "user");
    state.history.push({ role: "user", content: text });
    // Keep only the last N turns to limit token cost
    if (state.history.length > HISTORY_TURNS * 2) {
      state.history = state.history.slice(-HISTORY_TURNS * 2);
    }
    input.value = "";
    showTyping();
    respond(text);
  }

  function respond(query) {
    var lang = state.lang;

    if (ENDPOINT_URL) {
      var msgEl = null;
      function ensureMsgEl(t) {
        if (msgEl) return;
        hideTyping();
        msgEl = document.createElement("div");
        msgEl.className = "hrmf-msg bot";
        msgEl.innerHTML = linkify(t || "");
        messagesEl.appendChild(msgEl);
        messagesEl.scrollTop = messagesEl.scrollHeight;
      }
      callLLM(state.history, lang, function(fullSoFar) {
        ensureMsgEl(fullSoFar);
        msgEl.innerHTML = linkify(fullSoFar);
        messagesEl.scrollTop = messagesEl.scrollHeight;
      }).then(function(res) {
        var reply = res.reply;
        var streamed = res.streamed;
        hideTyping();
        var parsed = extractLead(reply);
        state.history.push({ role: "assistant", content: reply });
        if (streamed && msgEl) {
          msgEl.innerHTML = linkify(parsed.reply || reply);
        } else {
          addMessage(parsed.reply || reply, "bot");
        }
        messagesEl.scrollTop = messagesEl.scrollHeight;
        if (parsed.lead && parsed.lead.email) {
          state.lead = parsed.lead;
          sendTranscript("lead_captured");
        }
      }).catch(function(err) {
        console.warn("Henry LLM error, falling back to local matcher:", err);
        hideTyping();
        if (msgEl) { msgEl.remove(); msgEl = null; }
        localRespond(query, lang);
      });
      return;
    }

    setTimeout(function() {
      hideTyping();
      localRespond(query, lang);
    }, 350 + Math.random() * 250);
  }

  function localRespond(query, lang) {
    var result = findBest(query, lang);
    if (result.match) {
      var data = result.match[lang] || result.match.en || result.match.nl;
      var suggestions = result.alternatives.map(function(alt) {
        var altData = alt[lang] || alt.en || alt.nl;
        return { label: altData.q, value: altData.q };
      });
      state.history.push({ role: "assistant", content: data.a });
      addMessage(data.a, "bot", suggestions);
    } else {
      state.history.push({ role: "assistant", content: UI[lang].noMatch });
      addMessage(UI[lang].noMatch, "bot", pickRandomSuggestions(4));
    }
  }

  function pickRandomSuggestions(n) {
    var shuffled = KB.slice().sort(function() { return Math.random() - 0.5; });
    return shuffled.slice(0, n).map(function(entry) {
      var data = entry[state.lang] || entry.en || entry.nl;
      return { label: data.q, value: data.q };
    });
  }

  function setLanguage(lang) {
    if (!UI[lang]) lang = "en";
    state.lang = lang;
    state.history = []; // reset conversation when switching language
    if (langBtn) langBtn.value = lang;
    input.placeholder = UI[lang].placeholder;
    statusEl.textContent = UI[lang].status;
    botTitleEl.textContent = UI[lang].botTitle;
    document.documentElement.setAttribute("lang", lang);
    messagesEl.innerHTML = "";
    addMessage(UI[lang].welcome, "bot", UI[lang].suggestedStart.map(function(s) { return { label: s, value: s }; }));
  }

  function togglePanel() {
    var wasOpen = state.open;
    state.open = !state.open;
    root.classList.toggle("open", state.open);
    // PRE-WARM: on chat open, kick off Turnstile widget load + worker cold-start
    if (state.open) {
      try { _loadTurnstile(); } catch(e){}
      try { fetch(ENDPOINT_URL, { method: "OPTIONS", mode: "cors", credentials: "omit" }).catch(function(){}); } catch(e){}
    }
    if (state.open) {
      setTimeout(function() { input.focus(); }, 100);
    } else if (wasOpen) {
      var userTurns = state.history.filter(function(m) { return m.role === "user"; }).length;
      if (userTurns > 0) sendTranscript("close");
    }
  }

  window.addEventListener("beforeunload", function() {
    if (state.history.filter(function(m){return m.role==="user";}).length > 0) {
      sendTranscript("unload");
    }
  });

  function init() {
    root = document.getElementById("hrmforce-chatbot");
    panel = document.getElementById("hrmf-panel");
    bubble = document.getElementById("hrmf-bubble");
    messagesEl = document.getElementById("hrmf-messages");
    input = document.getElementById("hrmf-input");
    sendBtn = document.getElementById("hrmf-send");
    closeBtn = document.getElementById("hrmf-close");
    langBtn = document.getElementById("hrmf-lang-toggle");
    statusEl = document.getElementById("hrmf-status");
    botTitleEl = document.getElementById("hrmf-bot-title");

    bubble.onclick = togglePanel;
    closeBtn.onclick = togglePanel;
    sendBtn.onclick = function() { handleUserInput(input.value); };
    input.addEventListener("keydown", function(e) {
      if (e.key === "Enter") { e.preventDefault(); handleUserInput(input.value); }
    });
    langBtn.addEventListener("change", function(e) { setLanguage(e.target.value); });

    var htmlLang = (document.documentElement.getAttribute("lang") || "nl").toLowerCase().split("-")[0];
    if (UI[htmlLang]) setLanguage(htmlLang);
    else setLanguage("nl");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContent" + "Loaded", init);
  } else {
    init();
  }

})();
