// Analogieën. Formaat uit de Ability Analysis: "… staat tot X als Y staat tot …"
// met vijf woordparen als antwoord. De items komen uit een begrippenlexicon met
// tien relaties; elk paar staat in zes talen, zodat de analogie in elke taal
// klopt en niet als vertaling scheef gaat.
import { rng, tussen, schud } from "./hsf-oefenbank-lib.mjs";

const TALEN = ["nl", "en", "de", "fr", "es", "ro"];
const w = (nl, en, de, fr, es, ro) => ({ nl, en, de, fr, es, ro });

const VRAAG = {
  nl: "Kies de woorden die passen op de lege plekken.",
  en: "Choose the words that fit in the blanks.",
  de: "Wählen Sie die Wörter, die in die Lücken passen.",
  fr: "Choisissez les mots qui complètent les espaces vides.",
  es: "Elige las palabras que encajan en los espacios.",
  ro: "Alege cuvintele care se potrivesc în spațiile libere.",
};

const STAM = {
  nl: (b, c) => `… staat tot ${b} als ${c} staat tot …`,
  en: (b, c) => `… is to ${b} as ${c} is to …`,
  de: (b, c) => `… verhält sich zu ${b} wie ${c} zu …`,
  fr: (b, c) => `… est à ${b} ce que ${c} est à …`,
  es: (b, c) => `… es a ${b} lo que ${c} es a …`,
  ro: (b, c) => `… este față de ${b} ceea ce ${c} este față de …`,
};

const UITLEG = {
  nl: (a, b, c, d, h) => `${a} hoort bij ${b} zoals ${c} hoort bij ${d}. ${h}`,
  en: (a, b, c, d, h) => `${a} goes with ${b} just as ${c} goes with ${d}. ${h}`,
  de: (a, b, c, d, h) => `${a} gehört zu ${b} wie ${c} zu ${d}. ${h}`,
  fr: (a, b, c, d, h) => `${a} va avec ${b} comme ${c} va avec ${d}. ${h}`,
  es: (a, b, c, d, h) => `${a} va con ${b} igual que ${c} va con ${d}. ${h}`,
  ro: (a, b, c, d, h) => `${a} merge cu ${b} așa cum ${c} merge cu ${d}. ${h}`,
};

const RELATIES = [
  {
    naam: "tegenstelling",
    hint: w("Het gaat om tegenstellingen.", "The relation is opposites.", "Es geht um Gegensätze.",
            "La relation est celle des contraires.", "La relación es de opuestos.", "Relația este una de opoziție."),
    paren: [
      [w("Mooi", "Beautiful", "Schön", "Beau", "Bonito", "Frumos"), w("Lelijk", "Ugly", "Hässlich", "Laid", "Feo", "Urât")],
      [w("Schoon", "Clean", "Sauber", "Propre", "Limpio", "Curat"), w("Vies", "Dirty", "Schmutzig", "Sale", "Sucio", "Murdar")],
      [w("Groot", "Large", "Groß", "Grand", "Grande", "Mare"), w("Klein", "Small", "Klein", "Petit", "Pequeño", "Mic")],
      [w("Vroeg", "Early", "Früh", "Tôt", "Temprano", "Devreme"), w("Laat", "Late", "Spät", "Tard", "Tarde", "Târziu")],
      [w("Zwaar", "Heavy", "Schwer", "Lourd", "Pesado", "Greu"), w("Licht", "Light", "Leicht", "Léger", "Ligero", "Ușor")],
      [w("Warm", "Warm", "Warm", "Chaud", "Caliente", "Cald"), w("Koud", "Cold", "Kalt", "Froid", "Frío", "Rece")],
      [w("Snel", "Fast", "Schnell", "Rapide", "Rápido", "Rapid"), w("Langzaam", "Slow", "Langsam", "Lent", "Lento", "Lent")],
      [w("Zoet", "Sweet", "Süß", "Sucré", "Dulce", "Dulce"), w("Zuur", "Sour", "Sauer", "Acide", "Ácido", "Acru")],
    ],
  },
  {
    naam: "oorzaak-gevolg",
    hint: w("Het linker woord is de oorzaak, het rechter het gevolg.", "The left word is the cause, the right one the effect.",
            "Das linke Wort ist die Ursache, das rechte die Folge.", "Le mot de gauche est la cause, celui de droite l'effet.",
            "La palabra de la izquierda es la causa, la de la derecha el efecto.", "Cuvântul din stânga este cauza, cel din dreapta efectul."),
    paren: [
      [w("Vuur", "Fire", "Feuer", "Feu", "Fuego", "Foc"), w("Rook", "Smoke", "Rauch", "Fumée", "Humo", "Fum")],
      [w("Regen", "Rain", "Regen", "Pluie", "Lluvia", "Ploaie"), w("Plas", "Puddle", "Pfütze", "Flaque", "Charco", "Baltă")],
      [w("Wond", "Wound", "Wunde", "Blessure", "Herida", "Rană"), w("Litteken", "Scar", "Narbe", "Cicatrice", "Cicatriz", "Cicatrice")],
      [w("Vorst", "Frost", "Frost", "Gel", "Helada", "Îngheț"), w("IJs", "Ice", "Eis", "Glace", "Hielo", "Gheață")],
      [w("Zon", "Sun", "Sonne", "Soleil", "Sol", "Soare"), w("Schaduw", "Shadow", "Schatten", "Ombre", "Sombra", "Umbră")],
      [w("Wind", "Wind", "Wind", "Vent", "Viento", "Vânt"), w("Golf", "Wave", "Welle", "Vague", "Ola", "Val")],
      [w("Hitte", "Heat", "Hitze", "Chaleur", "Calor", "Căldură"), w("Dorst", "Thirst", "Durst", "Soif", "Sed", "Sete")],
      [w("Botsing", "Collision", "Zusammenstoß", "Collision", "Choque", "Coliziune"), w("Schade", "Damage", "Schaden", "Dégâts", "Daño", "Pagubă")],
    ],
  },
  {
    naam: "beroep-gereedschap",
    hint: w("Het linker woord is het beroep, het rechter het gereedschap.", "The left word is the trade, the right one its tool.",
            "Das linke Wort ist der Beruf, das rechte das Werkzeug.", "Le mot de gauche est le métier, celui de droite l'outil.",
            "La palabra de la izquierda es el oficio, la de la derecha la herramienta.", "Cuvântul din stânga este meseria, cel din dreapta unealta."),
    paren: [
      [w("Timmerman", "Carpenter", "Zimmermann", "Charpentier", "Carpintero", "Tâmplar"), w("Hamer", "Hammer", "Hammer", "Marteau", "Martillo", "Ciocan")],
      [w("Kapper", "Hairdresser", "Friseur", "Coiffeur", "Peluquero", "Frizer"), w("Schaar", "Scissors", "Schere", "Ciseaux", "Tijeras", "Foarfecă")],
      [w("Schilder", "Painter", "Maler", "Peintre", "Pintor", "Pictor"), w("Penseel", "Brush", "Pinsel", "Pinceau", "Pincel", "Pensulă")],
      [w("Chirurg", "Surgeon", "Chirurg", "Chirurgien", "Cirujano", "Chirurg"), w("Scalpel", "Scalpel", "Skalpell", "Scalpel", "Bisturí", "Bisturiu")],
      [w("Tuinman", "Gardener", "Gärtner", "Jardinier", "Jardinero", "Grădinar"), w("Schep", "Spade", "Spaten", "Bêche", "Pala", "Cazma")],
      [w("Boer", "Farmer", "Bauer", "Agriculteur", "Agricultor", "Fermier"), w("Ploeg", "Plough", "Pflug", "Charrue", "Arado", "Plug")],
      [w("Visser", "Fisherman", "Fischer", "Pêcheur", "Pescador", "Pescar"), w("Net", "Net", "Netz", "Filet", "Red", "Plasă")],
      [w("Naaister", "Seamstress", "Näherin", "Couturière", "Costurera", "Croitoreasă"), w("Naald", "Needle", "Nadel", "Aiguille", "Aguja", "Ac")],
    ],
  },
  {
    naam: "beroep-werkplek",
    hint: w("Het linker woord is het beroep, het rechter de werkplek.", "The left word is the profession, the right one the workplace.",
            "Das linke Wort ist der Beruf, das rechte der Arbeitsort.", "Le mot de gauche est la profession, celui de droite le lieu de travail.",
            "La palabra de la izquierda es la profesión, la de la derecha el lugar de trabajo.", "Cuvântul din stânga este profesia, cel din dreapta locul de muncă."),
    paren: [
      [w("Kok", "Cook", "Koch", "Cuisinier", "Cocinero", "Bucătar"), w("Keuken", "Kitchen", "Küche", "Cuisine", "Cocina", "Bucătărie")],
      [w("Leraar", "Teacher", "Lehrer", "Enseignant", "Maestro", "Învățător"), w("School", "School", "Schule", "École", "Escuela", "Școală")],
      [w("Rechter", "Judge", "Richter", "Juge", "Juez", "Judecător"), w("Rechtbank", "Court", "Gericht", "Tribunal", "Tribunal", "Tribunal")],
      [w("Piloot", "Pilot", "Pilot", "Pilote", "Piloto", "Pilot"), w("Cockpit", "Cockpit", "Cockpit", "Cockpit", "Cabina", "Cabină")],
      [w("Acteur", "Actor", "Schauspieler", "Acteur", "Actor", "Actor"), w("Theater", "Theatre", "Theater", "Théâtre", "Teatro", "Teatru")],
      [w("Bakker", "Baker", "Bäcker", "Boulanger", "Panadero", "Brutar"), w("Bakkerij", "Bakery", "Bäckerei", "Boulangerie", "Panadería", "Brutărie")],
      [w("Apotheker", "Pharmacist", "Apotheker", "Pharmacien", "Farmacéutico", "Farmacist"), w("Apotheek", "Pharmacy", "Apotheke", "Pharmacie", "Farmacia", "Farmacie")],
      [w("Monteur", "Mechanic", "Mechaniker", "Mécanicien", "Mecánico", "Mecanic"), w("Werkplaats", "Workshop", "Werkstatt", "Atelier", "Taller", "Atelier")],
    ],
  },
  {
    naam: "geheel-deel",
    hint: w("Het linker woord is het geheel, het rechter een deel daarvan.", "The left word is the whole, the right one a part of it.",
            "Das linke Wort ist das Ganze, das rechte ein Teil davon.", "Le mot de gauche est le tout, celui de droite une partie.",
            "La palabra de la izquierda es el conjunto, la de la derecha una parte.", "Cuvântul din stânga este întregul, cel din dreapta o parte a lui."),
    paren: [
      [w("Boom", "Tree", "Baum", "Arbre", "Árbol", "Copac"), w("Tak", "Branch", "Ast", "Branche", "Rama", "Ramură")],
      [w("Boek", "Book", "Buch", "Livre", "Libro", "Carte"), w("Hoofdstuk", "Chapter", "Kapitel", "Chapitre", "Capítulo", "Capitol")],
      [w("Huis", "House", "Haus", "Maison", "Casa", "Casă"), w("Kamer", "Room", "Zimmer", "Pièce", "Habitación", "Cameră")],
      [w("Fiets", "Bicycle", "Fahrrad", "Vélo", "Bicicleta", "Bicicletă"), w("Wiel", "Wheel", "Rad", "Roue", "Rueda", "Roată")],
      [w("Hand", "Hand", "Hand", "Main", "Mano", "Mână"), w("Vinger", "Finger", "Finger", "Doigt", "Dedo", "Deget")],
      [w("Schip", "Ship", "Schiff", "Navire", "Barco", "Navă"), w("Anker", "Anchor", "Anker", "Ancre", "Ancla", "Ancoră")],
      [w("Bloem", "Flower", "Blume", "Fleur", "Flor", "Floare"), w("Bloemblad", "Petal", "Blütenblatt", "Pétale", "Pétalo", "Petală")],
      [w("Gebergte", "Mountain range", "Gebirge", "Massif", "Cordillera", "Lanț muntos"), w("Top", "Summit", "Gipfel", "Sommet", "Cumbre", "Vârf")],
    ],
  },
  {
    naam: "voorwerp-materiaal",
    hint: w("Het linker woord is het voorwerp, het rechter het materiaal.", "The left word is the object, the right one the material.",
            "Das linke Wort ist der Gegenstand, das rechte das Material.", "Le mot de gauche est l'objet, celui de droite la matière.",
            "La palabra de la izquierda es el objeto, la de la derecha el material.", "Cuvântul din stânga este obiectul, cel din dreapta materialul."),
    paren: [
      [w("Raam", "Window", "Fenster", "Fenêtre", "Ventana", "Fereastră"), w("Glas", "Glass", "Glas", "Verre", "Vidrio", "Sticlă")],
      [w("Mes", "Knife", "Messer", "Couteau", "Cuchillo", "Cuțit"), w("Staal", "Steel", "Stahl", "Acier", "Acero", "Oțel")],
      [w("Trui", "Sweater", "Pullover", "Pull", "Jersey", "Pulover"), w("Wol", "Wool", "Wolle", "Laine", "Lana", "Lână")],
      [w("Muur", "Wall", "Mauer", "Mur", "Muro", "Zid"), w("Steen", "Brick", "Stein", "Brique", "Ladrillo", "Cărămidă")],
      [w("Band", "Tyre", "Reifen", "Pneu", "Neumático", "Anvelopă"), w("Rubber", "Rubber", "Gummi", "Caoutchouc", "Goma", "Cauciuc")],
      [w("Kaars", "Candle", "Kerze", "Bougie", "Vela", "Lumânare"), w("Was", "Wax", "Wachs", "Cire", "Cera", "Ceară")],
      [w("Ring", "Ring", "Ring", "Bague", "Anillo", "Inel"), w("Goud", "Gold", "Gold", "Or", "Oro", "Aur")],
      [w("Krant", "Newspaper", "Zeitung", "Journal", "Periódico", "Ziar"), w("Papier", "Paper", "Papier", "Papier", "Papel", "Hârtie")],
    ],
  },
  {
    naam: "dier-jong",
    hint: w("Het linker woord is het dier, het rechter het jong.", "The left word is the animal, the right one its young.",
            "Das linke Wort ist das Tier, das rechte sein Junges.", "Le mot de gauche est l'animal, celui de droite son petit.",
            "La palabra de la izquierda es el animal, la de la derecha su cría.", "Cuvântul din stânga este animalul, cel din dreapta puiul lui."),
    paren: [
      [w("Hond", "Dog", "Hund", "Chien", "Perro", "Câine"), w("Puppy", "Puppy", "Welpe", "Chiot", "Cachorro", "Cățeluș")],
      [w("Kat", "Cat", "Katze", "Chat", "Gato", "Pisică"), w("Kitten", "Kitten", "Kätzchen", "Chaton", "Gatito", "Pisoi")],
      [w("Paard", "Horse", "Pferd", "Cheval", "Caballo", "Cal"), w("Veulen", "Foal", "Fohlen", "Poulain", "Potro", "Mânz")],
      [w("Koe", "Cow", "Kuh", "Vache", "Vaca", "Vacă"), w("Kalf", "Calf", "Kalb", "Veau", "Ternero", "Vițel")],
      [w("Schaap", "Sheep", "Schaf", "Mouton", "Oveja", "Oaie"), w("Lam", "Lamb", "Lamm", "Agneau", "Cordero", "Miel")],
      [w("Kip", "Hen", "Henne", "Poule", "Gallina", "Găină"), w("Kuiken", "Chick", "Küken", "Poussin", "Pollito", "Pui")],
      [w("Varken", "Pig", "Schwein", "Cochon", "Cerdo", "Porc"), w("Big", "Piglet", "Ferkel", "Porcelet", "Lechón", "Purcel")],
      [w("Kikker", "Frog", "Frosch", "Grenouille", "Rana", "Broască"), w("Kikkervisje", "Tadpole", "Kaulquappe", "Têtard", "Renacuajo", "Mormoloc")],
    ],
  },
  {
    naam: "plaats-handeling",
    hint: w("Het linker woord is de plaats, het rechter wat je er doet.", "The left word is the place, the right one what you do there.",
            "Das linke Wort ist der Ort, das rechte, was man dort tut.", "Le mot de gauche est le lieu, celui de droite ce qu'on y fait.",
            "La palabra de la izquierda es el lugar, la de la derecha lo que se hace allí.", "Cuvântul din stânga este locul, cel din dreapta ce se face acolo."),
    paren: [
      [w("Zwembad", "Swimming pool", "Schwimmbad", "Piscine", "Piscina", "Piscină"), w("Zwemmen", "Swimming", "Schwimmen", "Nager", "Nadar", "A înota")],
      [w("Bibliotheek", "Library", "Bibliothek", "Bibliothèque", "Biblioteca", "Bibliotecă"), w("Lezen", "Reading", "Lesen", "Lire", "Leer", "A citi")],
      [w("Restaurant", "Restaurant", "Restaurant", "Restaurant", "Restaurante", "Restaurant"), w("Eten", "Eating", "Essen", "Manger", "Comer", "A mânca")],
      [w("Klaslokaal", "Classroom", "Klassenzimmer", "Salle de classe", "Aula", "Sală de clasă"), w("Leren", "Learning", "Lernen", "Apprendre", "Aprender", "A învăța")],
      [w("Ziekenhuis", "Hospital", "Krankenhaus", "Hôpital", "Hospital", "Spital"), w("Genezen", "Healing", "Heilen", "Guérir", "Curar", "A vindeca")],
      [w("Winkel", "Shop", "Laden", "Magasin", "Tienda", "Magazin"), w("Kopen", "Buying", "Kaufen", "Acheter", "Comprar", "A cumpăra")],
      [w("Bos", "Forest", "Wald", "Forêt", "Bosque", "Pădure"), w("Wandelen", "Walking", "Wandern", "Marcher", "Caminar", "A merge pe jos")],
      [w("Bed", "Bed", "Bett", "Lit", "Cama", "Pat"), w("Slapen", "Sleeping", "Schlafen", "Dormir", "Dormir", "A dormi")],
    ],
  },
  {
    naam: "instrument-bespeler",
    hint: w("Het linker woord is het instrument, het rechter wie het bespeelt.", "The left word is the instrument, the right one who plays it.",
            "Das linke Wort ist das Instrument, das rechte, wer es spielt.", "Le mot de gauche est l'instrument, celui de droite celui qui en joue.",
            "La palabra de la izquierda es el instrumento, la de la derecha quien lo toca.", "Cuvântul din stânga este instrumentul, cel din dreapta cine îl cântă."),
    paren: [
      [w("Viool", "Violin", "Geige", "Violon", "Violín", "Vioară"), w("Violist", "Violinist", "Geiger", "Violoniste", "Violinista", "Violonist")],
      [w("Piano", "Piano", "Klavier", "Piano", "Piano", "Pian"), w("Pianist", "Pianist", "Pianist", "Pianiste", "Pianista", "Pianist")],
      [w("Gitaar", "Guitar", "Gitarre", "Guitare", "Guitarra", "Chitară"), w("Gitarist", "Guitarist", "Gitarrist", "Guitariste", "Guitarrista", "Chitarist")],
      [w("Trompet", "Trumpet", "Trompete", "Trompette", "Trompeta", "Trompetă"), w("Trompettist", "Trumpeter", "Trompeter", "Trompettiste", "Trompetista", "Trompetist")],
      [w("Fluit", "Flute", "Flöte", "Flûte", "Flauta", "Flaut"), w("Fluitist", "Flautist", "Flötist", "Flûtiste", "Flautista", "Flautist")],
      [w("Drumstel", "Drums", "Schlagzeug", "Batterie", "Batería", "Tobe"), w("Drummer", "Drummer", "Schlagzeuger", "Batteur", "Baterista", "Toboșar")],
      [w("Cello", "Cello", "Cello", "Violoncelle", "Violonchelo", "Violoncel"), w("Cellist", "Cellist", "Cellist", "Violoncelliste", "Violonchelista", "Violoncelist")],
      [w("Harp", "Harp", "Harfe", "Harpe", "Arpa", "Harpă"), w("Harpist", "Harpist", "Harfenist", "Harpiste", "Arpista", "Harpist")],
    ],
  },
  {
    naam: "meetinstrument-grootheid",
    hint: w("Het linker woord is het meetinstrument, het rechter wat het meet.", "The left word is the instrument, the right one what it measures.",
            "Das linke Wort ist das Messgerät, das rechte, was es misst.", "Le mot de gauche est l'instrument, celui de droite ce qu'il mesure.",
            "La palabra de la izquierda es el instrumento, la de la derecha lo que mide.", "Cuvântul din stânga este instrumentul, cel din dreapta ce măsoară."),
    paren: [
      [w("Klok", "Clock", "Uhr", "Horloge", "Reloj", "Ceas"), w("Tijd", "Time", "Zeit", "Temps", "Tiempo", "Timp")],
      [w("Thermometer", "Thermometer", "Thermometer", "Thermomètre", "Termómetro", "Termometru"), w("Temperatuur", "Temperature", "Temperatur", "Température", "Temperatura", "Temperatură")],
      [w("Weegschaal", "Scales", "Waage", "Balance", "Balanza", "Cântar"), w("Gewicht", "Weight", "Gewicht", "Poids", "Peso", "Greutate")],
      [w("Liniaal", "Ruler", "Lineal", "Règle", "Regla", "Riglă"), w("Lengte", "Length", "Länge", "Longueur", "Longitud", "Lungime")],
      [w("Kompas", "Compass", "Kompass", "Boussole", "Brújula", "Busolă"), w("Richting", "Direction", "Richtung", "Direction", "Dirección", "Direcție")],
      [w("Barometer", "Barometer", "Barometer", "Baromètre", "Barómetro", "Barometru"), w("Luchtdruk", "Air pressure", "Luftdruck", "Pression", "Presión", "Presiune")],
      [w("Snelheidsmeter", "Speedometer", "Tachometer", "Compteur de vitesse", "Velocímetro", "Vitezometru"), w("Snelheid", "Speed", "Geschwindigkeit", "Vitesse", "Velocidad", "Viteză")],
      [w("Kalender", "Calendar", "Kalender", "Calendrier", "Calendario", "Calendar"), w("Datum", "Date", "Datum", "Date", "Fecha", "Dată")],
    ],
  },
];

const paar = (links, rechts, t) => `${links[t]} / ${rechts[t]}`;

export function bouwVerbaal(aantal = 250, zaad = 20260412) {
  const r = rng(zaad);
  const items = [];
  const gezien = new Set();
  let poging = 0;
  while (items.length < aantal && poging < aantal * 400) {
    const rel = RELATIES[poging % RELATIES.length];
    poging++;
    const n = rel.paren.length;
    const i = tussen(r, 0, n - 1);
    let j = tussen(r, 0, n - 1);
    if (j === i) j = (j + 1) % n;
    const sleutel = `${rel.naam}|${i}|${j}`;
    if (gezien.has(sleutel)) continue;
    // drie andere paren voor de afleiders
    const rest = [...Array(n).keys()].filter((k) => k !== i && k !== j);
    for (let k = rest.length - 1; k > 0; k--) { const m = Math.floor(r() * (k + 1)); [rest[k], rest[m]] = [rest[m], rest[k]]; }
    if (rest.length < 3) continue;
    const [x1, x2, x3] = rest;
    gezien.add(sleutel);

    const A = rel.paren[i][0], B = rel.paren[i][1];
    const C = rel.paren[j][0], D = rel.paren[j][1];
    const juistPaar = [A, D];
    const afleiders = [
      [A, rel.paren[x1][1]],            // links goed, rechts uit een ander paar
      [rel.paren[x2][0], D],            // rechts goed, links uit een ander paar
      [A, rel.paren[x2][1]],            // links goed, rechts opnieuw mis
      [rel.paren[x3][0], rel.paren[x3][1]], // een op zichzelf kloppend paar dat niet op de stam past
    ];
    const { waarden, juistIndex } = schud(r, juistPaar, afleiders);
    const uniek = new Set(waarden.map((p) => paar(p[0], p[1], "nl")));
    if (uniek.size !== 5) continue;

    const id = `ver-${String(items.length + 1).padStart(3, "0")}`;
    items.push({
      id, soort: rel.naam,
      q: Object.fromEntries(TALEN.map((t) => [t, VRAAG[t]])),
      stam: Object.fromEntries(TALEN.map((t) => [t, STAM[t](B[t], C[t])])),
      opties: Object.fromEntries(TALEN.map((t) => [t, waarden.map((p) => paar(p[0], p[1], t))])),
      juist: juistIndex,
      uitleg: Object.fromEntries(TALEN.map((t) => [t, UITLEG[t](A[t], B[t], C[t], D[t], rel.hint[t])])),
    });
  }
  return items;
}
