// Analogieën. Formaat uit de Ability Analysis: "… staat tot X als Y staat tot …"
// met vijf woordparen als antwoord. De items komen uit een begrippenlexicon met
// tien relaties; elk paar staat in zes talen, zodat de analogie in elke taal
// klopt en niet als vertaling scheef gaat.
import { rng, tussen, schud } from "./hsf-oefenbank-lib.mjs";

const TALEN = ["nl", "en", "de", "fr", "es", "ro", "it", "pt"];
const w = (nl, en, de, fr, es, ro, it, pt) => ({ nl, en, de, fr, es, ro, it, pt });

const VRAAG = {
  nl: "Kies de woorden die passen op de lege plekken.",
  en: "Choose the words that fit in the blanks.",
  de: "Wählen Sie die Wörter, die in die Lücken passen.",
  fr: "Choisissez les mots qui complètent les espaces vides.",
  es: "Elige las palabras que encajan en los espacios.",
  ro: "Alege cuvintele care se potrivesc în spațiile libere.",
  it: "Scegliere le parole che completano gli spazi vuoti.",
  pt: "Escolha as palavras que preenchem os espaços em branco.",
};

const STAM = {
  nl: (b, c) => `… staat tot ${b} als ${c} staat tot …`,
  en: (b, c) => `… is to ${b} as ${c} is to …`,
  de: (b, c) => `… verhält sich zu ${b} wie ${c} zu …`,
  fr: (b, c) => `… est à ${b} ce que ${c} est à …`,
  es: (b, c) => `… es a ${b} lo que ${c} es a …`,
  ro: (b, c) => `… este față de ${b} ceea ce ${c} este față de …`,
  it: (b, c) => `… sta a ${b} come ${c} sta a …`,
  pt: (b, c) => `… está para ${b} assim como ${c} está para …`,
};

const UITLEG = {
  nl: (a, b, c, d, h) => `${a} hoort bij ${b} zoals ${c} hoort bij ${d}. ${h}`,
  en: (a, b, c, d, h) => `${a} goes with ${b} just as ${c} goes with ${d}. ${h}`,
  de: (a, b, c, d, h) => `${a} gehört zu ${b} wie ${c} zu ${d}. ${h}`,
  fr: (a, b, c, d, h) => `${a} va avec ${b} comme ${c} va avec ${d}. ${h}`,
  es: (a, b, c, d, h) => `${a} va con ${b} igual que ${c} va con ${d}. ${h}`,
  ro: (a, b, c, d, h) => `${a} merge cu ${b} așa cum ${c} merge cu ${d}. ${h}`,
  it: (a, b, c, d, h) => `${a} sta a ${b} come ${c} sta a ${d}. ${h}`,
  pt: (a, b, c, d, h) => `${a} está para ${b} assim como ${c} está para ${d}. ${h}`,
};

const RELATIES = [
  {
    naam: "tegenstelling",
    hint: w("Het gaat om tegenstellingen.", "The relation is opposites.", "Es geht um Gegensätze.",
            "La relation est celle des contraires.", "La relación es de opuestos.", "Relația este una de opoziție.", "Si tratta di contrari.", "A relação é de opostos."),
    paren: [
      [w("Mooi", "Beautiful", "Schön", "Beau", "Bonito", "Frumos", "Bello", "Bonito"), w("Lelijk", "Ugly", "Hässlich", "Laid", "Feo", "Urât", "Brutto", "Feio")],
      [w("Schoon", "Clean", "Sauber", "Propre", "Limpio", "Curat", "Pulito", "Limpo"), w("Vies", "Dirty", "Schmutzig", "Sale", "Sucio", "Murdar", "Sporco", "Sujo")],
      [w("Groot", "Large", "Groß", "Grand", "Grande", "Mare", "Grande", "Grande"), w("Klein", "Small", "Klein", "Petit", "Pequeño", "Mic", "Piccolo", "Pequeno")],
      [w("Vroeg", "Early", "Früh", "Tôt", "Temprano", "Devreme", "Presto", "Cedo"), w("Laat", "Late", "Spät", "Tard", "Tarde", "Târziu", "Tardi", "Tarde")],
      [w("Zwaar", "Heavy", "Schwer", "Lourd", "Pesado", "Greu", "Pesante", "Pesado"), w("Licht", "Light", "Leicht", "Léger", "Ligero", "Ușor", "Leggero", "Leve")],
      [w("Warm", "Warm", "Warm", "Chaud", "Caliente", "Cald", "Caldo", "Quente"), w("Koud", "Cold", "Kalt", "Froid", "Frío", "Rece", "Freddo", "Frio")],
      [w("Snel", "Fast", "Schnell", "Rapide", "Rápido", "Rapid", "Veloce", "Rápido"), w("Langzaam", "Slow", "Langsam", "Lent", "Lento", "Lent", "Lento", "Lento")],
      [w("Zoet", "Sweet", "Süß", "Sucré", "Dulce", "Dulce", "Dolce", "Doce"), w("Zuur", "Sour", "Sauer", "Acide", "Ácido", "Acru", "Aspro", "Azedo")],
    ],
  },
  {
    naam: "oorzaak-gevolg",
    hint: w("Het linker woord is de oorzaak, het rechter het gevolg.", "The left word is the cause, the right one the effect.",
            "Das linke Wort ist die Ursache, das rechte die Folge.", "Le mot de gauche est la cause, celui de droite l'effet.",
            "La palabra de la izquierda es la causa, la de la derecha el efecto.", "Cuvântul din stânga este cauza, cel din dreapta efectul.", "La parola a sinistra è la causa, quella a destra l'effetto.", "A palavra da esquerda é a causa, a da direita o efeito."),
    paren: [
      [w("Vuur", "Fire", "Feuer", "Feu", "Fuego", "Foc", "Fuoco", "Fogo"), w("Rook", "Smoke", "Rauch", "Fumée", "Humo", "Fum", "Fumo", "Fumo")],
      [w("Regen", "Rain", "Regen", "Pluie", "Lluvia", "Ploaie", "Pioggia", "Chuva"), w("Plas", "Puddle", "Pfütze", "Flaque", "Charco", "Baltă", "Pozzanghera", "Poça")],
      [w("Wond", "Wound", "Wunde", "Blessure", "Herida", "Rană", "Ferita", "Ferida"), w("Litteken", "Scar", "Narbe", "Cicatrice", "Cicatriz", "Cicatrice", "Cicatrice", "Cicatriz")],
      [w("Vorst", "Frost", "Frost", "Gel", "Helada", "Îngheț", "Gelo", "Geada"), w("IJs", "Ice", "Eis", "Glace", "Hielo", "Gheață", "Ghiaccio", "Gelo")],
      [w("Zon", "Sun", "Sonne", "Soleil", "Sol", "Soare", "Sole", "Sol"), w("Schaduw", "Shadow", "Schatten", "Ombre", "Sombra", "Umbră", "Ombra", "Sombra")],
      [w("Wind", "Wind", "Wind", "Vent", "Viento", "Vânt", "Vento", "Vento"), w("Golf", "Wave", "Welle", "Vague", "Ola", "Val", "Onda", "Onda")],
      [w("Hitte", "Heat", "Hitze", "Chaleur", "Calor", "Căldură", "Calore", "Calor"), w("Dorst", "Thirst", "Durst", "Soif", "Sed", "Sete", "Sete", "Sede")],
      [w("Botsing", "Collision", "Zusammenstoß", "Collision", "Choque", "Coliziune", "Collisione", "Colisão"), w("Schade", "Damage", "Schaden", "Dégâts", "Daño", "Pagubă", "Danno", "Dano")],
    ],
  },
  {
    naam: "beroep-gereedschap",
    hint: w("Het linker woord is het beroep, het rechter het gereedschap.", "The left word is the trade, the right one its tool.",
            "Das linke Wort ist der Beruf, das rechte das Werkzeug.", "Le mot de gauche est le métier, celui de droite l'outil.",
            "La palabra de la izquierda es el oficio, la de la derecha la herramienta.", "Cuvântul din stânga este meseria, cel din dreapta unealta.", "La parola a sinistra è il mestiere, quella a destra l'attrezzo.", "A palavra da esquerda é o ofício, a da direita a ferramenta."),
    paren: [
      [w("Timmerman", "Carpenter", "Zimmermann", "Charpentier", "Carpintero", "Tâmplar", "Falegname", "Carpinteiro"), w("Hamer", "Hammer", "Hammer", "Marteau", "Martillo", "Ciocan", "Martello", "Martelo")],
      [w("Kapper", "Hairdresser", "Friseur", "Coiffeur", "Peluquero", "Frizer", "Parrucchiere", "Cabeleireiro"), w("Schaar", "Scissors", "Schere", "Ciseaux", "Tijeras", "Foarfecă", "Forbici", "Tesoura")],
      [w("Schilder", "Painter", "Maler", "Peintre", "Pintor", "Pictor", "Pittore", "Pintor"), w("Penseel", "Brush", "Pinsel", "Pinceau", "Pincel", "Pensulă", "Pennello", "Pincel")],
      [w("Chirurg", "Surgeon", "Chirurg", "Chirurgien", "Cirujano", "Chirurg", "Chirurgo", "Cirurgião"), w("Scalpel", "Scalpel", "Skalpell", "Scalpel", "Bisturí", "Bisturiu", "Bisturi", "Bisturi")],
      [w("Tuinman", "Gardener", "Gärtner", "Jardinier", "Jardinero", "Grădinar", "Giardiniere", "Jardineiro"), w("Schep", "Spade", "Spaten", "Bêche", "Pala", "Cazma", "Vanga", "Pá")],
      [w("Boer", "Farmer", "Bauer", "Agriculteur", "Agricultor", "Fermier", "Contadino", "Agricultor"), w("Ploeg", "Plough", "Pflug", "Charrue", "Arado", "Plug", "Aratro", "Arado")],
      [w("Visser", "Fisherman", "Fischer", "Pêcheur", "Pescador", "Pescar", "Pescatore", "Pescador"), w("Net", "Net", "Netz", "Filet", "Red", "Plasă", "Rete", "Rede")],
      [w("Naaister", "Seamstress", "Näherin", "Couturière", "Costurera", "Croitoreasă", "Sarta", "Costureira"), w("Naald", "Needle", "Nadel", "Aiguille", "Aguja", "Ac", "Ago", "Agulha")],
    ],
  },
  {
    naam: "beroep-werkplek",
    hint: w("Het linker woord is het beroep, het rechter de werkplek.", "The left word is the profession, the right one the workplace.",
            "Das linke Wort ist der Beruf, das rechte der Arbeitsort.", "Le mot de gauche est la profession, celui de droite le lieu de travail.",
            "La palabra de la izquierda es la profesión, la de la derecha el lugar de trabajo.", "Cuvântul din stânga este profesia, cel din dreapta locul de muncă.", "La parola a sinistra è la professione, quella a destra il luogo di lavoro.", "A palavra da esquerda é a profissão, a da direita o local de trabalho."),
    paren: [
      [w("Kok", "Cook", "Koch", "Cuisinier", "Cocinero", "Bucătar", "Cuoco", "Cozinheiro"), w("Keuken", "Kitchen", "Küche", "Cuisine", "Cocina", "Bucătărie", "Cucina", "Cozinha")],
      [w("Leraar", "Teacher", "Lehrer", "Enseignant", "Maestro", "Învățător", "Insegnante", "Professor"), w("School", "School", "Schule", "École", "Escuela", "Școală", "Scuola", "Escola")],
      [w("Rechter", "Judge", "Richter", "Juge", "Juez", "Judecător", "Giudice", "Juiz"), w("Rechtbank", "Court", "Gericht", "Tribunal", "Tribunal", "Tribunal", "Tribunale", "Tribunal")],
      [w("Piloot", "Pilot", "Pilot", "Pilote", "Piloto", "Pilot", "Pilota", "Piloto"), w("Cockpit", "Cockpit", "Cockpit", "Cockpit", "Cabina", "Cabină", "Cabina di pilotaggio", "Cabine de pilotagem")],
      [w("Acteur", "Actor", "Schauspieler", "Acteur", "Actor", "Actor", "Attore", "Ator"), w("Theater", "Theatre", "Theater", "Théâtre", "Teatro", "Teatru", "Teatro", "Teatro")],
      [w("Bakker", "Baker", "Bäcker", "Boulanger", "Panadero", "Brutar", "Fornaio", "Padeiro"), w("Bakkerij", "Bakery", "Bäckerei", "Boulangerie", "Panadería", "Brutărie", "Panificio", "Padaria")],
      [w("Apotheker", "Pharmacist", "Apotheker", "Pharmacien", "Farmacéutico", "Farmacist", "Farmacista", "Farmacêutico"), w("Apotheek", "Pharmacy", "Apotheke", "Pharmacie", "Farmacia", "Farmacie", "Farmacia", "Farmácia")],
      [w("Monteur", "Mechanic", "Mechaniker", "Mécanicien", "Mecánico", "Mecanic", "Meccanico", "Mecânico"), w("Werkplaats", "Workshop", "Werkstatt", "Atelier", "Taller", "Atelier", "Officina", "Oficina")],
    ],
  },
  {
    naam: "geheel-deel",
    hint: w("Het linker woord is het geheel, het rechter een deel daarvan.", "The left word is the whole, the right one a part of it.",
            "Das linke Wort ist das Ganze, das rechte ein Teil davon.", "Le mot de gauche est le tout, celui de droite une partie.",
            "La palabra de la izquierda es el conjunto, la de la derecha una parte.", "Cuvântul din stânga este întregul, cel din dreapta o parte a lui.", "La parola a sinistra è l'intero, quella a destra una sua parte.", "A palavra da esquerda é o todo, a da direita uma parte dele."),
    paren: [
      [w("Boom", "Tree", "Baum", "Arbre", "Árbol", "Copac", "Albero", "Árvore"), w("Tak", "Branch", "Ast", "Branche", "Rama", "Ramură", "Ramo", "Ramo")],
      [w("Boek", "Book", "Buch", "Livre", "Libro", "Carte", "Libro", "Livro"), w("Hoofdstuk", "Chapter", "Kapitel", "Chapitre", "Capítulo", "Capitol", "Capitolo", "Capítulo")],
      [w("Huis", "House", "Haus", "Maison", "Casa", "Casă", "Casa", "Casa"), w("Kamer", "Room", "Zimmer", "Pièce", "Habitación", "Cameră", "Stanza", "Divisão")],
      [w("Fiets", "Bicycle", "Fahrrad", "Vélo", "Bicicleta", "Bicicletă", "Bicicletta", "Bicicleta"), w("Wiel", "Wheel", "Rad", "Roue", "Rueda", "Roată", "Ruota", "Roda")],
      [w("Hand", "Hand", "Hand", "Main", "Mano", "Mână", "Mano", "Mão"), w("Vinger", "Finger", "Finger", "Doigt", "Dedo", "Deget", "Dito", "Dedo")],
      [w("Schip", "Ship", "Schiff", "Navire", "Barco", "Navă", "Nave", "Navio"), w("Anker", "Anchor", "Anker", "Ancre", "Ancla", "Ancoră", "Ancora", "Âncora")],
      [w("Bloem", "Flower", "Blume", "Fleur", "Flor", "Floare", "Fiore", "Flor"), w("Bloemblad", "Petal", "Blütenblatt", "Pétale", "Pétalo", "Petală", "Petalo", "Pétala")],
      [w("Gebergte", "Mountain range", "Gebirge", "Massif", "Cordillera", "Lanț muntos", "Catena montuosa", "Cordilheira"), w("Top", "Summit", "Gipfel", "Sommet", "Cumbre", "Vârf", "Vetta", "Cume")],
    ],
  },
  {
    naam: "voorwerp-materiaal",
    hint: w("Het linker woord is het voorwerp, het rechter het materiaal.", "The left word is the object, the right one the material.",
            "Das linke Wort ist der Gegenstand, das rechte das Material.", "Le mot de gauche est l'objet, celui de droite la matière.",
            "La palabra de la izquierda es el objeto, la de la derecha el material.", "Cuvântul din stânga este obiectul, cel din dreapta materialul.", "La parola a sinistra è l'oggetto, quella a destra il materiale.", "A palavra da esquerda é o objeto, a da direita o material."),
    paren: [
      [w("Raam", "Window", "Fenster", "Fenêtre", "Ventana", "Fereastră", "Finestra", "Janela"), w("Glas", "Glass", "Glas", "Verre", "Vidrio", "Sticlă", "Vetro", "Vidro")],
      [w("Mes", "Knife", "Messer", "Couteau", "Cuchillo", "Cuțit", "Coltello", "Faca"), w("Staal", "Steel", "Stahl", "Acier", "Acero", "Oțel", "Acciaio", "Aço")],
      [w("Trui", "Sweater", "Pullover", "Pull", "Jersey", "Pulover", "Maglione", "Camisola"), w("Wol", "Wool", "Wolle", "Laine", "Lana", "Lână", "Lana", "Lã")],
      [w("Muur", "Wall", "Mauer", "Mur", "Muro", "Zid", "Muro", "Muro"), w("Steen", "Brick", "Stein", "Brique", "Ladrillo", "Cărămidă", "Mattone", "Tijolo")],
      [w("Band", "Tyre", "Reifen", "Pneu", "Neumático", "Anvelopă", "Pneumatico", "Pneu"), w("Rubber", "Rubber", "Gummi", "Caoutchouc", "Goma", "Cauciuc", "Gomma", "Borracha")],
      [w("Kaars", "Candle", "Kerze", "Bougie", "Vela", "Lumânare", "Candela", "Vela"), w("Was", "Wax", "Wachs", "Cire", "Cera", "Ceară", "Cera", "Cera")],
      [w("Ring", "Ring", "Ring", "Bague", "Anillo", "Inel", "Anello", "Anel"), w("Goud", "Gold", "Gold", "Or", "Oro", "Aur", "Oro", "Ouro")],
      [w("Krant", "Newspaper", "Zeitung", "Journal", "Periódico", "Ziar", "Giornale", "Jornal"), w("Papier", "Paper", "Papier", "Papier", "Papel", "Hârtie", "Carta", "Papel")],
    ],
  },
  {
    naam: "dier-jong",
    hint: w("Het linker woord is het dier, het rechter het jong.", "The left word is the animal, the right one its young.",
            "Das linke Wort ist das Tier, das rechte sein Junges.", "Le mot de gauche est l'animal, celui de droite son petit.",
            "La palabra de la izquierda es el animal, la de la derecha su cría.", "Cuvântul din stânga este animalul, cel din dreapta puiul lui.", "La parola a sinistra è l'animale, quella a destra il suo piccolo.", "A palavra da esquerda é o animal, a da direita a cria."),
    paren: [
      [w("Hond", "Dog", "Hund", "Chien", "Perro", "Câine", "Cane", "Cão"), w("Puppy", "Puppy", "Welpe", "Chiot", "Cachorro", "Cățeluș", "Cucciolo", "Cachorro")],
      [w("Kat", "Cat", "Katze", "Chat", "Gato", "Pisică", "Gatto", "Gato"), w("Kitten", "Kitten", "Kätzchen", "Chaton", "Gatito", "Pisoi", "Gattino", "Gatinho")],
      [w("Paard", "Horse", "Pferd", "Cheval", "Caballo", "Cal", "Cavallo", "Cavalo"), w("Veulen", "Foal", "Fohlen", "Poulain", "Potro", "Mânz", "Puledro", "Potro")],
      [w("Koe", "Cow", "Kuh", "Vache", "Vaca", "Vacă", "Mucca", "Vaca"), w("Kalf", "Calf", "Kalb", "Veau", "Ternero", "Vițel", "Vitello", "Vitelo")],
      [w("Schaap", "Sheep", "Schaf", "Mouton", "Oveja", "Oaie", "Pecora", "Ovelha"), w("Lam", "Lamb", "Lamm", "Agneau", "Cordero", "Miel", "Agnello", "Cordeiro")],
      [w("Kip", "Hen", "Henne", "Poule", "Gallina", "Găină", "Gallina", "Galinha"), w("Kuiken", "Chick", "Küken", "Poussin", "Pollito", "Pui", "Pulcino", "Pintainho")],
      [w("Varken", "Pig", "Schwein", "Cochon", "Cerdo", "Porc", "Maiale", "Porco"), w("Big", "Piglet", "Ferkel", "Porcelet", "Lechón", "Purcel", "Maialino", "Leitão")],
      [w("Kikker", "Frog", "Frosch", "Grenouille", "Rana", "Broască", "Rana", "Rã"), w("Kikkervisje", "Tadpole", "Kaulquappe", "Têtard", "Renacuajo", "Mormoloc", "Girino", "Girino")],
    ],
  },
  {
    naam: "plaats-handeling",
    hint: w("Het linker woord is de plaats, het rechter wat je er doet.", "The left word is the place, the right one what you do there.",
            "Das linke Wort ist der Ort, das rechte, was man dort tut.", "Le mot de gauche est le lieu, celui de droite ce qu'on y fait.",
            "La palabra de la izquierda es el lugar, la de la derecha lo que se hace allí.", "Cuvântul din stânga este locul, cel din dreapta ce se face acolo.", "La parola a sinistra è il luogo, quella a destra ciò che vi si fa.", "A palavra da esquerda é o lugar, a da direita o que se faz lá."),
    paren: [
      [w("Zwembad", "Swimming pool", "Schwimmbad", "Piscine", "Piscina", "Piscină", "Piscina", "Piscina"), w("Zwemmen", "Swimming", "Schwimmen", "Nager", "Nadar", "A înota", "Nuotare", "Nadar")],
      [w("Bibliotheek", "Library", "Bibliothek", "Bibliothèque", "Biblioteca", "Bibliotecă", "Biblioteca", "Biblioteca"), w("Lezen", "Reading", "Lesen", "Lire", "Leer", "A citi", "Leggere", "Ler")],
      [w("Restaurant", "Restaurant", "Restaurant", "Restaurant", "Restaurante", "Restaurant", "Ristorante", "Restaurante"), w("Eten", "Eating", "Essen", "Manger", "Comer", "A mânca", "Mangiare", "Comer")],
      [w("Klaslokaal", "Classroom", "Klassenzimmer", "Salle de classe", "Aula", "Sală de clasă", "Aula", "Sala de aula"), w("Leren", "Learning", "Lernen", "Apprendre", "Aprender", "A învăța", "Imparare", "Aprender")],
      [w("Ziekenhuis", "Hospital", "Krankenhaus", "Hôpital", "Hospital", "Spital", "Ospedale", "Hospital"), w("Genezen", "Healing", "Heilen", "Guérir", "Curar", "A vindeca", "Guarire", "Curar")],
      [w("Winkel", "Shop", "Laden", "Magasin", "Tienda", "Magazin", "Negozio", "Loja"), w("Kopen", "Buying", "Kaufen", "Acheter", "Comprar", "A cumpăra", "Comprare", "Comprar")],
      [w("Bos", "Forest", "Wald", "Forêt", "Bosque", "Pădure", "Bosco", "Floresta"), w("Wandelen", "Walking", "Wandern", "Marcher", "Caminar", "A merge pe jos", "Camminare", "Caminhar")],
      [w("Bed", "Bed", "Bett", "Lit", "Cama", "Pat", "Letto", "Cama"), w("Slapen", "Sleeping", "Schlafen", "Dormir", "Dormir", "A dormi", "Dormire", "Dormir")],
    ],
  },
  {
    naam: "instrument-bespeler",
    hint: w("Het linker woord is het instrument, het rechter wie het bespeelt.", "The left word is the instrument, the right one who plays it.",
            "Das linke Wort ist das Instrument, das rechte, wer es spielt.", "Le mot de gauche est l'instrument, celui de droite celui qui en joue.",
            "La palabra de la izquierda es el instrumento, la de la derecha quien lo toca.", "Cuvântul din stânga este instrumentul, cel din dreapta cine îl cântă.", "La parola a sinistra è lo strumento, quella a destra chi lo suona.", "A palavra da esquerda é o instrumento, a da direita quem o toca."),
    paren: [
      [w("Viool", "Violin", "Geige", "Violon", "Violín", "Vioară", "Violino", "Violino"), w("Violist", "Violinist", "Geiger", "Violoniste", "Violinista", "Violonist", "Violinista", "Violinista")],
      [w("Piano", "Piano", "Klavier", "Piano", "Piano", "Pian", "Pianoforte", "Piano"), w("Pianist", "Pianist", "Pianist", "Pianiste", "Pianista", "Pianist", "Pianista", "Pianista")],
      [w("Gitaar", "Guitar", "Gitarre", "Guitare", "Guitarra", "Chitară", "Chitarra", "Guitarra"), w("Gitarist", "Guitarist", "Gitarrist", "Guitariste", "Guitarrista", "Chitarist", "Chitarrista", "Guitarrista")],
      [w("Trompet", "Trumpet", "Trompete", "Trompette", "Trompeta", "Trompetă", "Tromba", "Trompete"), w("Trompettist", "Trumpeter", "Trompeter", "Trompettiste", "Trompetista", "Trompetist", "Trombettista", "Trompetista")],
      [w("Fluit", "Flute", "Flöte", "Flûte", "Flauta", "Flaut", "Flauto", "Flauta"), w("Fluitist", "Flautist", "Flötist", "Flûtiste", "Flautista", "Flautist", "Flautista", "Flautista")],
      [w("Drumstel", "Drums", "Schlagzeug", "Batterie", "Batería", "Tobe", "Batteria", "Bateria"), w("Drummer", "Drummer", "Schlagzeuger", "Batteur", "Baterista", "Toboșar", "Batterista", "Baterista")],
      [w("Cello", "Cello", "Cello", "Violoncelle", "Violonchelo", "Violoncel", "Violoncello", "Violoncelo"), w("Cellist", "Cellist", "Cellist", "Violoncelliste", "Violonchelista", "Violoncelist", "Violoncellista", "Violoncelista")],
      [w("Harp", "Harp", "Harfe", "Harpe", "Arpa", "Harpă", "Arpa", "Harpa"), w("Harpist", "Harpist", "Harfenist", "Harpiste", "Arpista", "Harpist", "Arpista", "Harpista")],
    ],
  },
  {
    naam: "meetinstrument-grootheid",
    hint: w("Het linker woord is het meetinstrument, het rechter wat het meet.", "The left word is the instrument, the right one what it measures.",
            "Das linke Wort ist das Messgerät, das rechte, was es misst.", "Le mot de gauche est l'instrument, celui de droite ce qu'il mesure.",
            "La palabra de la izquierda es el instrumento, la de la derecha lo que mide.", "Cuvântul din stânga este instrumentul, cel din dreapta ce măsoară.", "La parola a sinistra è lo strumento, quella a destra ciò che misura.", "A palavra da esquerda é o instrumento, a da direita o que mede."),
    paren: [
      [w("Klok", "Clock", "Uhr", "Horloge", "Reloj", "Ceas", "Orologio", "Relógio"), w("Tijd", "Time", "Zeit", "Temps", "Tiempo", "Timp", "Tempo", "Tempo")],
      [w("Thermometer", "Thermometer", "Thermometer", "Thermomètre", "Termómetro", "Termometru", "Termometro", "Termómetro"), w("Temperatuur", "Temperature", "Temperatur", "Température", "Temperatura", "Temperatură", "Temperatura", "Temperatura")],
      [w("Weegschaal", "Scales", "Waage", "Balance", "Balanza", "Cântar", "Bilancia", "Balança"), w("Gewicht", "Weight", "Gewicht", "Poids", "Peso", "Greutate", "Peso", "Peso")],
      [w("Liniaal", "Ruler", "Lineal", "Règle", "Regla", "Riglă", "Righello", "Régua"), w("Lengte", "Length", "Länge", "Longueur", "Longitud", "Lungime", "Lunghezza", "Comprimento")],
      [w("Kompas", "Compass", "Kompass", "Boussole", "Brújula", "Busolă", "Bussola", "Bússola"), w("Richting", "Direction", "Richtung", "Direction", "Dirección", "Direcție", "Direzione", "Direção")],
      [w("Barometer", "Barometer", "Barometer", "Baromètre", "Barómetro", "Barometru", "Barometro", "Barómetro"), w("Luchtdruk", "Air pressure", "Luftdruck", "Pression", "Presión", "Presiune", "Pressione atmosferica", "Pressão atmosférica")],
      [w("Snelheidsmeter", "Speedometer", "Tachometer", "Compteur de vitesse", "Velocímetro", "Vitezometru", "Tachimetro", "Velocímetro"), w("Snelheid", "Speed", "Geschwindigkeit", "Vitesse", "Velocidad", "Viteză", "Velocità", "Velocidade")],
      [w("Kalender", "Calendar", "Kalender", "Calendrier", "Calendario", "Calendar", "Calendario", "Calendário"), w("Datum", "Date", "Datum", "Date", "Fecha", "Dată", "Data", "Data")],
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
