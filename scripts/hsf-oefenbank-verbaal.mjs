// Analogieën. Formaat uit de Ability Analysis: "… staat tot X als Y staat tot …"
// met vijf woordparen als antwoord. De items komen uit een begrippenlexicon met
// tien relaties; elk paar staat in zes talen, zodat de analogie in elke taal
// klopt en niet als vertaling scheef gaat.
import { rng, tussen, schud } from "./hsf-oefenbank-lib.mjs";

const TALEN = ["nl", "en", "de", "fr", "es", "ro", "it", "pt", "tr", "fi", "nb", "el", "cs", "uk", "hu"];
const w = (nl, en, de, fr, es, ro, it, pt, tr, fi, nb, el, cs, uk, hu) => ({ nl, en, de, fr, es, ro, it, pt, tr, fi, nb, el, cs, uk, hu });

const VRAAG = {
  nl: "Kies de woorden die passen op de lege plekken.",
  en: "Choose the words that fit in the blanks.",
  de: "Wählen Sie die Wörter, die in die Lücken passen.",
  fr: "Choisissez les mots qui complètent les espaces vides.",
  es: "Elige las palabras que encajan en los espacios.",
  ro: "Alege cuvintele care se potrivesc în spațiile libere.",
  it: "Scegliere le parole che completano gli spazi vuoti.",
  pt: "Escolha as palavras que preenchem os espaços em branco.",
  tr: "Boşlukları tamamlayan kelimeleri seçin.",
  fi: "Valitse sanat, jotka täydentävät aukot.",
  nb: "Velg ordene som fyller ut de tomme feltene.",
  el: "Επιλέξτε τις λέξεις που συμπληρώνουν τα κενά.",
  cs: "Vyberte slova, která doplní prázdná místa.",
  uk: "Виберіть слова, які заповнюють пропуски.",
  hu: "Válassza ki a hiányzó helyekre illő szavakat.",
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
  // Turks en Fins verbuigen het woord; de dubbele punt houdt de analogie leesbaar.
  tr: (b, c) => `… : ${b} = ${c} : …`,
  fi: (b, c) => `… : ${b} = ${c} : …`,
  nb: (b, c) => `… : ${b} = ${c} : …`,
  el: (b, c) => `… : ${b} = ${c} : …`,
  cs: (b, c) => `… : ${b} = ${c} : …`,
  uk: (b, c) => `… : ${b} = ${c} : …`,
  hu: (b, c) => `… : ${b} = ${c} : …`,
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
  tr: (a, b, c, d, h) => `${a} : ${b} = ${c} : ${d}. ${h}`,
  fi: (a, b, c, d, h) => `${a} : ${b} = ${c} : ${d}. ${h}`,
  nb: (a, b, c, d, h) => `${a} : ${b} = ${c} : ${d}. ${h}`,
  el: (a, b, c, d, h) => `${a} : ${b} = ${c} : ${d}. ${h}`,
  cs: (a, b, c, d, h) => `${a} : ${b} = ${c} : ${d}. ${h}`,
  uk: (a, b, c, d, h) => `${a} : ${b} = ${c} : ${d}. ${h}`,
  hu: (a, b, c, d, h) => `${a} : ${b} = ${c} : ${d}. ${h}`,
};

const RELATIES = [
  {
    naam: "tegenstelling",
    hint: w("Het gaat om tegenstellingen.", "The relation is opposites.", "Es geht um Gegensätze.",
            "La relation est celle des contraires.", "La relación es de opuestos.", "Relația este una de opoziție.", "Si tratta di contrari.", "A relação é de opostos.", "Bunlar zıt anlamlı kelimeler.", "Kyse on vastakohdista.", "Det handler om motsetninger.", "Πρόκειται για αντίθετα.", "Jde o protiklady.", "Ідеться про протилежності.", "Ellentétekről van szó."),
    paren: [
      [w("Mooi", "Beautiful", "Schön", "Beau", "Bonito", "Frumos", "Bello", "Bonito", "Güzel", "Kaunis", "Pen", "Όμορφο", "Krásný", "Гарний", "Szép"), w("Lelijk", "Ugly", "Hässlich", "Laid", "Feo", "Urât", "Brutto", "Feio", "Çirkin", "Ruma", "Stygg", "Άσχημο", "Ošklivý", "Негарний", "Csúnya")],
      [w("Schoon", "Clean", "Sauber", "Propre", "Limpio", "Curat", "Pulito", "Limpo", "Temiz", "Puhdas", "Ren", "Καθαρό", "Čistý", "Чистий", "Tiszta"), w("Vies", "Dirty", "Schmutzig", "Sale", "Sucio", "Murdar", "Sporco", "Sujo", "Kirli", "Likainen", "Skitten", "Βρώμικο", "Špinavý", "Брудний", "Piszkos")],
      [w("Groot", "Large", "Groß", "Grand", "Grande", "Mare", "Grande", "Grande", "Büyük", "Suuri", "Stor", "Μεγάλο", "Velký", "Великий", "Nagy"), w("Klein", "Small", "Klein", "Petit", "Pequeño", "Mic", "Piccolo", "Pequeno", "Küçük", "Pieni", "Liten", "Μικρό", "Malý", "Малий", "Kicsi")],
      [w("Vroeg", "Early", "Früh", "Tôt", "Temprano", "Devreme", "Presto", "Cedo", "Erken", "Aikaisin", "Tidlig", "Νωρίς", "Brzy", "Рано", "Korán"), w("Laat", "Late", "Spät", "Tard", "Tarde", "Târziu", "Tardi", "Tarde", "Geç", "Myöhään", "Sent", "Αργά", "Pozdě", "Пізно", "Későn")],
      [w("Zwaar", "Heavy", "Schwer", "Lourd", "Pesado", "Greu", "Pesante", "Pesado", "Ağır", "Raskas", "Tung", "Βαρύ", "Těžký", "Важкий", "Nehéz"), w("Licht", "Light", "Leicht", "Léger", "Ligero", "Ușor", "Leggero", "Leve", "Hafif", "Kevyt", "Lett", "Ελαφρύ", "Lehký", "Легкий", "Könnyű")],
      [w("Warm", "Warm", "Warm", "Chaud", "Caliente", "Cald", "Caldo", "Quente", "Sıcak", "Lämmin", "Varm", "Ζεστό", "Teplý", "Теплий", "Meleg"), w("Koud", "Cold", "Kalt", "Froid", "Frío", "Rece", "Freddo", "Frio", "Soğuk", "Kylmä", "Kald", "Κρύο", "Studený", "Холодний", "Hideg")],
      [w("Snel", "Fast", "Schnell", "Rapide", "Rápido", "Rapid", "Veloce", "Rápido", "Hızlı", "Nopea", "Rask", "Γρήγορο", "Rychlý", "Швидкий", "Gyors"), w("Langzaam", "Slow", "Langsam", "Lent", "Lento", "Lent", "Lento", "Lento", "Yavaş", "Hidas", "Langsom", "Αργό", "Pomalý", "Повільний", "Lassú")],
      [w("Zoet", "Sweet", "Süß", "Sucré", "Dulce", "Dulce", "Dolce", "Doce", "Tatlı", "Makea", "Søt", "Γλυκό", "Sladký", "Солодкий", "Édes"), w("Zuur", "Sour", "Sauer", "Acide", "Ácido", "Acru", "Aspro", "Azedo", "Ekşi", "Hapan", "Sur", "Ξινό", "Kyselý", "Кислий", "Savanyú")],
    ],
  },
  {
    naam: "oorzaak-gevolg",
    hint: w("Het linker woord is de oorzaak, het rechter het gevolg.", "The left word is the cause, the right one the effect.",
            "Das linke Wort ist die Ursache, das rechte die Folge.", "Le mot de gauche est la cause, celui de droite l'effet.",
            "La palabra de la izquierda es la causa, la de la derecha el efecto.", "Cuvântul din stânga este cauza, cel din dreapta efectul.", "La parola a sinistra è la causa, quella a destra l'effetto.", "A palavra da esquerda é a causa, a da direita o efeito.", "Soldaki kelime neden, sağdaki sonuçtur.", "Vasen sana on syy, oikea seuraus.", "Ordet til venstre er årsaken, ordet til høyre følgen.", "Η λέξη αριστερά είναι η αιτία, η λέξη δεξιά το αποτέλεσμα.", "Slovo vlevo je příčina, slovo vpravo následek.", "Слово ліворуч є причиною, слово праворуч наслідком.", "A bal oldali szó az ok, a jobb oldali a következmény."),
    paren: [
      [w("Vuur", "Fire", "Feuer", "Feu", "Fuego", "Foc", "Fuoco", "Fogo", "Ateş", "Tuli", "Ild", "Φωτιά", "Oheň", "Вогонь", "Tűz"), w("Rook", "Smoke", "Rauch", "Fumée", "Humo", "Fum", "Fumo", "Fumo", "Duman", "Savu", "Røyk", "Καπνός", "Kouř", "Дим", "Füst")],
      [w("Regen", "Rain", "Regen", "Pluie", "Lluvia", "Ploaie", "Pioggia", "Chuva", "Yağmur", "Sade", "Regn", "Βροχή", "Déšť", "Дощ", "Eső"), w("Plas", "Puddle", "Pfütze", "Flaque", "Charco", "Baltă", "Pozzanghera", "Poça", "Su birikintisi", "Lätäkkö", "Sølepytt", "Λακκούβα", "Kaluž", "Калюжа", "Pocsolya")],
      [w("Wond", "Wound", "Wunde", "Blessure", "Herida", "Rană", "Ferita", "Ferida", "Yara", "Haava", "Sår", "Πληγή", "Rána", "Рана", "Seb"), w("Litteken", "Scar", "Narbe", "Cicatrice", "Cicatriz", "Cicatrice", "Cicatrice", "Cicatriz", "Yara izi", "Arpi", "Arr", "Ουλή", "Jizva", "Шрам", "Heg")],
      [w("Vorst", "Frost", "Frost", "Gel", "Helada", "Îngheț", "Gelo", "Geada", "Don", "Pakkanen", "Frost", "Παγετός", "Mráz", "Мороз", "Fagy"), w("IJs", "Ice", "Eis", "Glace", "Hielo", "Gheață", "Ghiaccio", "Gelo", "Buz", "Jää", "Is", "Πάγος", "Led", "Лід", "Jég")],
      [w("Zon", "Sun", "Sonne", "Soleil", "Sol", "Soare", "Sole", "Sol", "Güneş", "Aurinko", "Sol", "Ήλιος", "Slunce", "Сонце", "Nap"), w("Schaduw", "Shadow", "Schatten", "Ombre", "Sombra", "Umbră", "Ombra", "Sombra", "Gölge", "Varjo", "Skygge", "Σκιά", "Stín", "Тінь", "Árnyék")],
      [w("Wind", "Wind", "Wind", "Vent", "Viento", "Vânt", "Vento", "Vento", "Rüzgâr", "Tuuli", "Vind", "Άνεμος", "Vítr", "Вітер", "Szél"), w("Golf", "Wave", "Welle", "Vague", "Ola", "Val", "Onda", "Onda", "Dalga", "Aalto", "Bølge", "Κύμα", "Vlna", "Хвиля", "Hullám")],
      [w("Hitte", "Heat", "Hitze", "Chaleur", "Calor", "Căldură", "Calore", "Calor", "Sıcak hava", "Kuumuus", "Hete", "Καύσωνας", "Vedro", "Спека", "Hőség"), w("Dorst", "Thirst", "Durst", "Soif", "Sed", "Sete", "Sete", "Sede", "Susuzluk", "Jano", "Tørst", "Δίψα", "Žízeň", "Спрага", "Szomjúság")],
      [w("Botsing", "Collision", "Zusammenstoß", "Collision", "Choque", "Coliziune", "Collisione", "Colisão", "Çarpışma", "Törmäys", "Kollisjon", "Σύγκρουση", "Srážka", "Зіткнення", "Ütközés"), w("Schade", "Damage", "Schaden", "Dégâts", "Daño", "Pagubă", "Danno", "Dano", "Hasar", "Vahinko", "Skade", "Ζημιά", "Škoda", "Пошкодження", "Kár")],
    ],
  },
  {
    naam: "beroep-gereedschap",
    hint: w("Het linker woord is het beroep, het rechter het gereedschap.", "The left word is the trade, the right one its tool.",
            "Das linke Wort ist der Beruf, das rechte das Werkzeug.", "Le mot de gauche est le métier, celui de droite l'outil.",
            "La palabra de la izquierda es el oficio, la de la derecha la herramienta.", "Cuvântul din stânga este meseria, cel din dreapta unealta.", "La parola a sinistra è il mestiere, quella a destra l'attrezzo.", "A palavra da esquerda é o ofício, a da direita a ferramenta.", "Soldaki kelime meslek, sağdaki alettir.", "Vasen sana on ammatti, oikea työkalu.", "Ordet til venstre er yrket, ordet til høyre verktøyet.", "Η λέξη αριστερά είναι το επάγγελμα, η λέξη δεξιά το εργαλείο.", "Slovo vlevo je povolání, slovo vpravo nástroj.", "Слово ліворуч є професією, слово праворуч інструментом.", "A bal oldali szó a foglalkozás, a jobb oldali a szerszám."),
    paren: [
      [w("Timmerman", "Carpenter", "Zimmermann", "Charpentier", "Carpintero", "Tâmplar", "Falegname", "Carpinteiro", "Marangoz", "Puuseppä", "Snekker", "Ξυλουργός", "Truhlář", "Тесля", "Ács"), w("Hamer", "Hammer", "Hammer", "Marteau", "Martillo", "Ciocan", "Martello", "Martelo", "Çekiç", "Vasara", "Hammer", "Σφυρί", "Kladivo", "Молоток", "Kalapács")],
      [w("Kapper", "Hairdresser", "Friseur", "Coiffeur", "Peluquero", "Frizer", "Parrucchiere", "Cabeleireiro", "Kuaför", "Kampaaja", "Frisør", "Κομμωτής", "Kadeřník", "Перукар", "Fodrász"), w("Schaar", "Scissors", "Schere", "Ciseaux", "Tijeras", "Foarfecă", "Forbici", "Tesoura", "Makas", "Sakset", "Saks", "Ψαλίδι", "Nůžky", "Ножиці", "Olló")],
      [w("Schilder", "Painter", "Maler", "Peintre", "Pintor", "Pictor", "Pittore", "Pintor", "Ressam", "Maalari", "Maler", "Ζωγράφος", "Malíř", "Художник", "Festő"), w("Penseel", "Brush", "Pinsel", "Pinceau", "Pincel", "Pensulă", "Pennello", "Pincel", "Fırça", "Sivellin", "Pensel", "Πινέλο", "Štětec", "Пензель", "Ecset")],
      [w("Chirurg", "Surgeon", "Chirurg", "Chirurgien", "Cirujano", "Chirurg", "Chirurgo", "Cirurgião", "Cerrah", "Kirurgi", "Kirurg", "Χειρουργός", "Chirurg", "Хірург", "Sebész"), w("Scalpel", "Scalpel", "Skalpell", "Scalpel", "Bisturí", "Bisturiu", "Bisturi", "Bisturi", "Neşter", "Leikkausveitsi", "Skalpell", "Νυστέρι", "Skalpel", "Скальпель", "Szike")],
      [w("Tuinman", "Gardener", "Gärtner", "Jardinier", "Jardinero", "Grădinar", "Giardiniere", "Jardineiro", "Bahçıvan", "Puutarhuri", "Gartner", "Κηπουρός", "Zahradník", "Садівник", "Kertész"), w("Schep", "Spade", "Spaten", "Bêche", "Pala", "Cazma", "Vanga", "Pá", "Kürek", "Lapio", "Spade", "Φτυάρι", "Rýč", "Лопата", "Ásó")],
      [w("Boer", "Farmer", "Bauer", "Agriculteur", "Agricultor", "Fermier", "Contadino", "Agricultor", "Çiftçi", "Maanviljelijä", "Bonde", "Αγρότης", "Zemědělec", "Фермер", "Gazda"), w("Ploeg", "Plough", "Pflug", "Charrue", "Arado", "Plug", "Aratro", "Arado", "Saban", "Aura", "Plog", "Άροτρο", "Pluh", "Плуг", "Eke")],
      [w("Visser", "Fisherman", "Fischer", "Pêcheur", "Pescador", "Pescar", "Pescatore", "Pescador", "Balıkçı", "Kalastaja", "Fisker", "Ψαράς", "Rybář", "Рибалка", "Halász"), w("Net", "Net", "Netz", "Filet", "Red", "Plasă", "Rete", "Rede", "Ağ", "Verkko", "Garn", "Δίχτυ", "Síť", "Сіть", "Háló")],
      [w("Naaister", "Seamstress", "Näherin", "Couturière", "Costurera", "Croitoreasă", "Sarta", "Costureira", "Terzi", "Ompelija", "Syerske", "Μοδίστρα", "Švadlena", "Швачка", "Varrónő"), w("Naald", "Needle", "Nadel", "Aiguille", "Aguja", "Ac", "Ago", "Agulha", "İğne", "Neula", "Nål", "Βελόνα", "Jehla", "Голка", "Tű")],
    ],
  },
  {
    naam: "beroep-werkplek",
    hint: w("Het linker woord is het beroep, het rechter de werkplek.", "The left word is the profession, the right one the workplace.",
            "Das linke Wort ist der Beruf, das rechte der Arbeitsort.", "Le mot de gauche est la profession, celui de droite le lieu de travail.",
            "La palabra de la izquierda es la profesión, la de la derecha el lugar de trabajo.", "Cuvântul din stânga este profesia, cel din dreapta locul de muncă.", "La parola a sinistra è la professione, quella a destra il luogo di lavoro.", "A palavra da esquerda é a profissão, a da direita o local de trabalho.", "Soldaki kelime meslek, sağdaki çalışma yeridir.", "Vasen sana on ammatti, oikea työpaikka.", "Ordet til venstre er yrket, ordet til høyre arbeidsplassen.", "Η λέξη αριστερά είναι το επάγγελμα, η λέξη δεξιά ο χώρος εργασίας.", "Slovo vlevo je povolání, slovo vpravo pracoviště.", "Слово ліворуч є професією, слово праворуч місцем роботи.", "A bal oldali szó a foglalkozás, a jobb oldali a munkahely."),
    paren: [
      [w("Kok", "Cook", "Koch", "Cuisinier", "Cocinero", "Bucătar", "Cuoco", "Cozinheiro", "Aşçı", "Kokki", "Kokk", "Μάγειρας", "Kuchař", "Кухар", "Szakács"), w("Keuken", "Kitchen", "Küche", "Cuisine", "Cocina", "Bucătărie", "Cucina", "Cozinha", "Mutfak", "Keittiö", "Kjøkken", "Κουζίνα", "Kuchyně", "Кухня", "Konyha")],
      [w("Leraar", "Teacher", "Lehrer", "Enseignant", "Maestro", "Învățător", "Insegnante", "Professor", "Öğretmen", "Opettaja", "Lærer", "Δάσκαλος", "Učitel", "Учитель", "Tanár"), w("School", "School", "Schule", "École", "Escuela", "Școală", "Scuola", "Escola", "Okul", "Koulu", "Skole", "Σχολείο", "Škola", "Школа", "Iskola")],
      [w("Rechter", "Judge", "Richter", "Juge", "Juez", "Judecător", "Giudice", "Juiz", "Hâkim", "Tuomari", "Dommer", "Δικαστής", "Soudce", "Суддя", "Bíró"), w("Rechtbank", "Court", "Gericht", "Tribunal", "Tribunal", "Tribunal", "Tribunale", "Tribunal", "Mahkeme", "Tuomioistuin", "Domstol", "Δικαστήριο", "Soud", "Суд", "Bíróság")],
      [w("Piloot", "Pilot", "Pilot", "Pilote", "Piloto", "Pilot", "Pilota", "Piloto", "Pilot", "Lentäjä", "Pilot", "Πιλότος", "Pilot", "Пілот", "Pilóta"), w("Cockpit", "Cockpit", "Cockpit", "Cockpit", "Cabina", "Cabină", "Cabina di pilotaggio", "Cabine de pilotagem", "Kokpit", "Ohjaamo", "Cockpit", "Πιλοτήριο", "Kokpit", "Кабіна пілота", "Pilótafülke")],
      [w("Acteur", "Actor", "Schauspieler", "Acteur", "Actor", "Actor", "Attore", "Ator", "Oyuncu", "Näyttelijä", "Skuespiller", "Ηθοποιός", "Herec", "Актор", "Színész"), w("Theater", "Theatre", "Theater", "Théâtre", "Teatro", "Teatru", "Teatro", "Teatro", "Tiyatro", "Teatteri", "Teater", "Θέατρο", "Divadlo", "Театр", "Színház")],
      [w("Bakker", "Baker", "Bäcker", "Boulanger", "Panadero", "Brutar", "Fornaio", "Padeiro", "Fırıncı", "Leipuri", "Baker", "Φούρναρης", "Pekař", "Пекар", "Pék"), w("Bakkerij", "Bakery", "Bäckerei", "Boulangerie", "Panadería", "Brutărie", "Panificio", "Padaria", "Fırın", "Leipomo", "Bakeri", "Φούρνος", "Pekárna", "Пекарня", "Pékség")],
      [w("Apotheker", "Pharmacist", "Apotheker", "Pharmacien", "Farmacéutico", "Farmacist", "Farmacista", "Farmacêutico", "Eczacı", "Farmaseutti", "Farmasøyt", "Φαρμακοποιός", "Lékárník", "Фармацевт", "Gyógyszerész"), w("Apotheek", "Pharmacy", "Apotheke", "Pharmacie", "Farmacia", "Farmacie", "Farmacia", "Farmácia", "Eczane", "Apteekki", "Apotek", "Φαρμακείο", "Lékárna", "Аптека", "Gyógyszertár")],
      [w("Monteur", "Mechanic", "Mechaniker", "Mécanicien", "Mecánico", "Mecanic", "Meccanico", "Mecânico", "Tamirci", "Mekaanikko", "Mekaniker", "Μηχανικός", "Mechanik", "Механік", "Szerelő"), w("Werkplaats", "Workshop", "Werkstatt", "Atelier", "Taller", "Atelier", "Officina", "Oficina", "Atölye", "Korjaamo", "Verksted", "Συνεργείο", "Dílna", "Майстерня", "Műhely")],
    ],
  },
  {
    naam: "geheel-deel",
    hint: w("Het linker woord is het geheel, het rechter een deel daarvan.", "The left word is the whole, the right one a part of it.",
            "Das linke Wort ist das Ganze, das rechte ein Teil davon.", "Le mot de gauche est le tout, celui de droite une partie.",
            "La palabra de la izquierda es el conjunto, la de la derecha una parte.", "Cuvântul din stânga este întregul, cel din dreapta o parte a lui.", "La parola a sinistra è l'intero, quella a destra una sua parte.", "A palavra da esquerda é o todo, a da direita uma parte dele.", "Soldaki kelime bütün, sağdaki onun bir parçasıdır.", "Vasen sana on kokonaisuus, oikea sen osa.", "Ordet til venstre er helheten, ordet til høyre en del av den.", "Η λέξη αριστερά είναι το όλον, η λέξη δεξιά ένα μέρος του.", "Slovo vlevo je celek, slovo vpravo jeho část.", "Слово ліворуч є цілим, слово праворуч його частиною.", "A bal oldali szó az egész, a jobb oldali annak egy része."),
    paren: [
      [w("Boom", "Tree", "Baum", "Arbre", "Árbol", "Copac", "Albero", "Árvore", "Ağaç", "Puu", "Tre", "Δέντρο", "Strom", "Дерево", "Fa"), w("Tak", "Branch", "Ast", "Branche", "Rama", "Ramură", "Ramo", "Ramo", "Dal", "Oksa", "Gren", "Κλαδί", "Větev", "Гілка", "Ág")],
      [w("Boek", "Book", "Buch", "Livre", "Libro", "Carte", "Libro", "Livro", "Kitap", "Kirja", "Bok", "Βιβλίο", "Kniha", "Книга", "Könyv"), w("Hoofdstuk", "Chapter", "Kapitel", "Chapitre", "Capítulo", "Capitol", "Capitolo", "Capítulo", "Bölüm", "Luku", "Kapittel", "Κεφάλαιο", "Kapitola", "Розділ", "Fejezet")],
      [w("Huis", "House", "Haus", "Maison", "Casa", "Casă", "Casa", "Casa", "Ev", "Talo", "Hus", "Σπίτι", "Dům", "Будинок", "Ház"), w("Kamer", "Room", "Zimmer", "Pièce", "Habitación", "Cameră", "Stanza", "Divisão", "Oda", "Huone", "Rom", "Δωμάτιο", "Pokoj", "Кімната", "Szoba")],
      [w("Fiets", "Bicycle", "Fahrrad", "Vélo", "Bicicleta", "Bicicletă", "Bicicletta", "Bicicleta", "Bisiklet", "Polkupyörä", "Sykkel", "Ποδήλατο", "Jízdní kolo", "Велосипед", "Kerékpár"), w("Wiel", "Wheel", "Rad", "Roue", "Rueda", "Roată", "Ruota", "Roda", "Tekerlek", "Pyörä", "Hjul", "Ρόδα", "Kolo", "Колесо", "Kerék")],
      [w("Hand", "Hand", "Hand", "Main", "Mano", "Mână", "Mano", "Mão", "El", "Käsi", "Hånd", "Χέρι", "Ruka", "Рука", "Kéz"), w("Vinger", "Finger", "Finger", "Doigt", "Dedo", "Deget", "Dito", "Dedo", "Parmak", "Sormi", "Finger", "Δάχτυλο", "Prst", "Палець", "Ujj")],
      [w("Schip", "Ship", "Schiff", "Navire", "Barco", "Navă", "Nave", "Navio", "Gemi", "Laiva", "Skip", "Πλοίο", "Loď", "Корабель", "Hajó"), w("Anker", "Anchor", "Anker", "Ancre", "Ancla", "Ancoră", "Ancora", "Âncora", "Çapa", "Ankkuri", "Anker", "Άγκυρα", "Kotva", "Якір", "Horgony")],
      [w("Bloem", "Flower", "Blume", "Fleur", "Flor", "Floare", "Fiore", "Flor", "Çiçek", "Kukka", "Blomst", "Λουλούδι", "Květina", "Квітка", "Virág"), w("Bloemblad", "Petal", "Blütenblatt", "Pétale", "Pétalo", "Petală", "Petalo", "Pétala", "Taç yaprağı", "Terälehti", "Kronblad", "Πέταλο", "Okvětní lístek", "Пелюстка", "Szirom")],
      [w("Gebergte", "Mountain range", "Gebirge", "Massif", "Cordillera", "Lanț muntos", "Catena montuosa", "Cordilheira", "Sıradağ", "Vuoristo", "Fjellkjede", "Οροσειρά", "Pohoří", "Гірський хребет", "Hegység"), w("Top", "Summit", "Gipfel", "Sommet", "Cumbre", "Vârf", "Vetta", "Cume", "Zirve", "Huippu", "Topp", "Κορυφή", "Vrchol", "Вершина", "Csúcs")],
    ],
  },
  {
    naam: "voorwerp-materiaal",
    hint: w("Het linker woord is het voorwerp, het rechter het materiaal.", "The left word is the object, the right one the material.",
            "Das linke Wort ist der Gegenstand, das rechte das Material.", "Le mot de gauche est l'objet, celui de droite la matière.",
            "La palabra de la izquierda es el objeto, la de la derecha el material.", "Cuvântul din stânga este obiectul, cel din dreapta materialul.", "La parola a sinistra è l'oggetto, quella a destra il materiale.", "A palavra da esquerda é o objeto, a da direita o material.", "Soldaki kelime nesne, sağdaki malzemedir.", "Vasen sana on esine, oikea materiaali.", "Ordet til venstre er gjenstanden, ordet til høyre materialet.", "Η λέξη αριστερά είναι το αντικείμενο, η λέξη δεξιά το υλικό.", "Slovo vlevo je předmět, slovo vpravo materiál.", "Слово ліворуч є предметом, слово праворуч матеріалом.", "A bal oldali szó a tárgy, a jobb oldali az anyag."),
    paren: [
      [w("Raam", "Window", "Fenster", "Fenêtre", "Ventana", "Fereastră", "Finestra", "Janela", "Pencere", "Ikkuna", "Vindu", "Παράθυρο", "Okno", "Вікно", "Ablak"), w("Glas", "Glass", "Glas", "Verre", "Vidrio", "Sticlă", "Vetro", "Vidro", "Cam", "Lasi", "Glass", "Γυαλί", "Sklo", "Скло", "Üveg")],
      [w("Mes", "Knife", "Messer", "Couteau", "Cuchillo", "Cuțit", "Coltello", "Faca", "Bıçak", "Veitsi", "Kniv", "Μαχαίρι", "Nůž", "Ніж", "Kés"), w("Staal", "Steel", "Stahl", "Acier", "Acero", "Oțel", "Acciaio", "Aço", "Çelik", "Teräs", "Stål", "Ατσάλι", "Ocel", "Сталь", "Acél")],
      [w("Trui", "Sweater", "Pullover", "Pull", "Jersey", "Pulover", "Maglione", "Camisola", "Kazak", "Villapaita", "Genser", "Πουλόβερ", "Svetr", "Светр", "Pulóver"), w("Wol", "Wool", "Wolle", "Laine", "Lana", "Lână", "Lana", "Lã", "Yün", "Villa", "Ull", "Μαλλί", "Vlna", "Вовна", "Gyapjú")],
      [w("Muur", "Wall", "Mauer", "Mur", "Muro", "Zid", "Muro", "Muro", "Duvar", "Muuri", "Mur", "Τοίχος", "Zeď", "Стіна", "Fal"), w("Steen", "Brick", "Stein", "Brique", "Ladrillo", "Cărămidă", "Mattone", "Tijolo", "Tuğla", "Tiili", "Murstein", "Τούβλο", "Cihla", "Цегла", "Tégla")],
      [w("Band", "Tyre", "Reifen", "Pneu", "Neumático", "Anvelopă", "Pneumatico", "Pneu", "Lastik", "Rengas", "Dekk", "Λάστιχο", "Pneumatika", "Шина", "Gumiabroncs"), w("Rubber", "Rubber", "Gummi", "Caoutchouc", "Goma", "Cauciuc", "Gomma", "Borracha", "Kauçuk", "Kumi", "Gummi", "Καουτσούκ", "Guma", "Гума", "Gumi")],
      [w("Kaars", "Candle", "Kerze", "Bougie", "Vela", "Lumânare", "Candela", "Vela", "Mum", "Kynttilä", "Lys", "Λαμπάδα", "Svíčka", "Свічка", "Gyertya"), w("Was", "Wax", "Wachs", "Cire", "Cera", "Ceară", "Cera", "Cera", "Balmumu", "Vaha", "Voks", "Κερί", "Vosk", "Віск", "Viasz")],
      [w("Ring", "Ring", "Ring", "Bague", "Anillo", "Inel", "Anello", "Anel", "Yüzük", "Sormus", "Ring", "Δαχτυλίδι", "Prsten", "Каблучка", "Gyűrű"), w("Goud", "Gold", "Gold", "Or", "Oro", "Aur", "Oro", "Ouro", "Altın", "Kulta", "Gull", "Χρυσός", "Zlato", "Золото", "Arany")],
      [w("Krant", "Newspaper", "Zeitung", "Journal", "Periódico", "Ziar", "Giornale", "Jornal", "Gazete", "Sanomalehti", "Avis", "Εφημερίδα", "Noviny", "Газета", "Újság"), w("Papier", "Paper", "Papier", "Papier", "Papel", "Hârtie", "Carta", "Papel", "Kâğıt", "Paperi", "Papir", "Χαρτί", "Papír", "Папір", "Papír")],
    ],
  },
  {
    naam: "dier-jong",
    hint: w("Het linker woord is het dier, het rechter het jong.", "The left word is the animal, the right one its young.",
            "Das linke Wort ist das Tier, das rechte sein Junges.", "Le mot de gauche est l'animal, celui de droite son petit.",
            "La palabra de la izquierda es el animal, la de la derecha su cría.", "Cuvântul din stânga este animalul, cel din dreapta puiul lui.", "La parola a sinistra è l'animale, quella a destra il suo piccolo.", "A palavra da esquerda é o animal, a da direita a cria.", "Soldaki kelime hayvan, sağdaki onun yavrusudur.", "Vasen sana on eläin, oikea sen poikanen.", "Ordet til venstre er dyret, ordet til høyre ungen.", "Η λέξη αριστερά είναι το ζώο, η λέξη δεξιά το μικρό του.", "Slovo vlevo je zvíře, slovo vpravo jeho mládě.", "Слово ліворуч є твариною, слово праворуч її дитинчам.", "A bal oldali szó az állat, a jobb oldali a kicsinye."),
    paren: [
      [w("Hond", "Dog", "Hund", "Chien", "Perro", "Câine", "Cane", "Cão", "Köpek", "Koira", "Hund", "Σκύλος", "Pes", "Собака", "Kutya"), w("Puppy", "Puppy", "Welpe", "Chiot", "Cachorro", "Cățeluș", "Cucciolo", "Cachorro", "Yavru köpek", "Koiranpentu", "Valp", "Κουτάβι", "Štěně", "Цуценя", "Kölyökkutya")],
      [w("Kat", "Cat", "Katze", "Chat", "Gato", "Pisică", "Gatto", "Gato", "Kedi", "Kissa", "Katt", "Γάτα", "Kočka", "Кішка", "Macska"), w("Kitten", "Kitten", "Kätzchen", "Chaton", "Gatito", "Pisoi", "Gattino", "Gatinho", "Yavru kedi", "Kissanpentu", "Kattunge", "Γατάκι", "Kotě", "Кошеня", "Kiscica")],
      [w("Paard", "Horse", "Pferd", "Cheval", "Caballo", "Cal", "Cavallo", "Cavalo", "At", "Hevonen", "Hest", "Άλογο", "Kůň", "Кінь", "Ló"), w("Veulen", "Foal", "Fohlen", "Poulain", "Potro", "Mânz", "Puledro", "Potro", "Tay", "Varsa", "Føll", "Πουλάρι", "Hříbě", "Лоша", "Csikó")],
      [w("Koe", "Cow", "Kuh", "Vache", "Vaca", "Vacă", "Mucca", "Vaca", "İnek", "Lehmä", "Ku", "Αγελάδα", "Kráva", "Корова", "Tehén"), w("Kalf", "Calf", "Kalb", "Veau", "Ternero", "Vițel", "Vitello", "Vitelo", "Buzağı", "Vasikka", "Kalv", "Μοσχάρι", "Tele", "Теля", "Borjú")],
      [w("Schaap", "Sheep", "Schaf", "Mouton", "Oveja", "Oaie", "Pecora", "Ovelha", "Koyun", "Lammas", "Sau", "Πρόβατο", "Ovce", "Вівця", "Juh"), w("Lam", "Lamb", "Lamm", "Agneau", "Cordero", "Miel", "Agnello", "Cordeiro", "Kuzu", "Karitsa", "Lam", "Αρνί", "Jehně", "Ягня", "Bárány")],
      [w("Kip", "Hen", "Henne", "Poule", "Gallina", "Găină", "Gallina", "Galinha", "Tavuk", "Kana", "Høne", "Κότα", "Slepice", "Курка", "Tyúk"), w("Kuiken", "Chick", "Küken", "Poussin", "Pollito", "Pui", "Pulcino", "Pintainho", "Civciv", "Tipu", "Kylling", "Κοτοπουλάκι", "Kuře", "Курча", "Csibe")],
      [w("Varken", "Pig", "Schwein", "Cochon", "Cerdo", "Porc", "Maiale", "Porco", "Domuz", "Sika", "Gris", "Γουρούνι", "Prase", "Свиня", "Disznó"), w("Big", "Piglet", "Ferkel", "Porcelet", "Lechón", "Purcel", "Maialino", "Leitão", "Domuz yavrusu", "Porsas", "Smågris", "Γουρουνάκι", "Sele", "Порося", "Malac")],
      [w("Kikker", "Frog", "Frosch", "Grenouille", "Rana", "Broască", "Rana", "Rã", "Kurbağa", "Sammakko", "Frosk", "Βάτραχος", "Žába", "Жаба", "Béka"), w("Kikkervisje", "Tadpole", "Kaulquappe", "Têtard", "Renacuajo", "Mormoloc", "Girino", "Girino", "İribaş", "Nuijapää", "Rumpetroll", "Γυρίνος", "Pulec", "Пуголовок", "Ebihal")],
    ],
  },
  {
    naam: "plaats-handeling",
    hint: w("Het linker woord is de plaats, het rechter wat je er doet.", "The left word is the place, the right one what you do there.",
            "Das linke Wort ist der Ort, das rechte, was man dort tut.", "Le mot de gauche est le lieu, celui de droite ce qu'on y fait.",
            "La palabra de la izquierda es el lugar, la de la derecha lo que se hace allí.", "Cuvântul din stânga este locul, cel din dreapta ce se face acolo.", "La parola a sinistra è il luogo, quella a destra ciò che vi si fa.", "A palavra da esquerda é o lugar, a da direita o que se faz lá.", "Soldaki kelime yer, sağdaki orada yapılan şeydir.", "Vasen sana on paikka, oikea se, mitä siellä tehdään.", "Ordet til venstre er stedet, ordet til høyre det man gjør der.", "Η λέξη αριστερά είναι ο τόπος, η λέξη δεξιά αυτό που κάνεις εκεί.", "Slovo vlevo je místo, slovo vpravo to, co se tam dělá.", "Слово ліворуч є місцем, слово праворуч тим, що там роблять.", "A bal oldali szó a hely, a jobb oldali az, amit ott csinálunk."),
    paren: [
      [w("Zwembad", "Swimming pool", "Schwimmbad", "Piscine", "Piscina", "Piscină", "Piscina", "Piscina", "Yüzme havuzu", "Uimahalli", "Svømmehall", "Πισίνα", "Bazén", "Басейн", "Uszoda"), w("Zwemmen", "Swimming", "Schwimmen", "Nager", "Nadar", "A înota", "Nuotare", "Nadar", "Yüzmek", "Uida", "Svømme", "Κολυμπώ", "Plavat", "Плавати", "Úszni")],
      [w("Bibliotheek", "Library", "Bibliothek", "Bibliothèque", "Biblioteca", "Bibliotecă", "Biblioteca", "Biblioteca", "Kütüphane", "Kirjasto", "Bibliotek", "Βιβλιοθήκη", "Knihovna", "Бібліотека", "Könyvtár"), w("Lezen", "Reading", "Lesen", "Lire", "Leer", "A citi", "Leggere", "Ler", "Okumak", "Lukea", "Lese", "Διαβάζω", "Číst", "Читати", "Olvasni")],
      [w("Restaurant", "Restaurant", "Restaurant", "Restaurant", "Restaurante", "Restaurant", "Ristorante", "Restaurante", "Restoran", "Ravintola", "Restaurant", "Εστιατόριο", "Restaurace", "Ресторан", "Étterem"), w("Eten", "Eating", "Essen", "Manger", "Comer", "A mânca", "Mangiare", "Comer", "Yemek yemek", "Syödä", "Spise", "Τρώω", "Jíst", "Їсти", "Enni")],
      [w("Klaslokaal", "Classroom", "Klassenzimmer", "Salle de classe", "Aula", "Sală de clasă", "Aula", "Sala de aula", "Sınıf", "Luokkahuone", "Klasserom", "Τάξη", "Třída", "Клас", "Tanterem"), w("Leren", "Learning", "Lernen", "Apprendre", "Aprender", "A învăța", "Imparare", "Aprender", "Öğrenmek", "Oppia", "Lære", "Μαθαίνω", "Učit se", "Вчитися", "Tanulni")],
      [w("Ziekenhuis", "Hospital", "Krankenhaus", "Hôpital", "Hospital", "Spital", "Ospedale", "Hospital", "Hastane", "Sairaala", "Sykehus", "Νοσοκομείο", "Nemocnice", "Лікарня", "Kórház"), w("Genezen", "Healing", "Heilen", "Guérir", "Curar", "A vindeca", "Guarire", "Curar", "İyileştirmek", "Parantaa", "Helbrede", "Θεραπεύω", "Léčit", "Лікувати", "Gyógyítani")],
      [w("Winkel", "Shop", "Laden", "Magasin", "Tienda", "Magazin", "Negozio", "Loja", "Mağaza", "Kauppa", "Butikk", "Κατάστημα", "Obchod", "Магазин", "Bolt"), w("Kopen", "Buying", "Kaufen", "Acheter", "Comprar", "A cumpăra", "Comprare", "Comprar", "Satın almak", "Ostaa", "Kjøpe", "Αγοράζω", "Kupovat", "Купувати", "Vásárolni")],
      [w("Bos", "Forest", "Wald", "Forêt", "Bosque", "Pădure", "Bosco", "Floresta", "Orman", "Metsä", "Skog", "Δάσος", "Les", "Ліс", "Erdő"), w("Wandelen", "Walking", "Wandern", "Marcher", "Caminar", "A merge pe jos", "Camminare", "Caminhar", "Yürüyüş yapmak", "Kävellä", "Gå tur", "Περπατώ", "Chodit na procházky", "Гуляти", "Sétálni")],
      [w("Bed", "Bed", "Bett", "Lit", "Cama", "Pat", "Letto", "Cama", "Yatak", "Sänky", "Seng", "Κρεβάτι", "Postel", "Ліжко", "Ágy"), w("Slapen", "Sleeping", "Schlafen", "Dormir", "Dormir", "A dormi", "Dormire", "Dormir", "Uyumak", "Nukkua", "Sove", "Κοιμάμαι", "Spát", "Спати", "Aludni")],
    ],
  },
  {
    naam: "instrument-bespeler",
    hint: w("Het linker woord is het instrument, het rechter wie het bespeelt.", "The left word is the instrument, the right one who plays it.",
            "Das linke Wort ist das Instrument, das rechte, wer es spielt.", "Le mot de gauche est l'instrument, celui de droite celui qui en joue.",
            "La palabra de la izquierda es el instrumento, la de la derecha quien lo toca.", "Cuvântul din stânga este instrumentul, cel din dreapta cine îl cântă.", "La parola a sinistra è lo strumento, quella a destra chi lo suona.", "A palavra da esquerda é o instrumento, a da direita quem o toca.", "Soldaki kelime çalgı, sağdaki onu çalan kişidir.", "Vasen sana on soitin, oikea sen soittaja.", "Ordet til venstre er instrumentet, ordet til høyre den som spiller det.", "Η λέξη αριστερά είναι το όργανο, η λέξη δεξιά αυτός που το παίζει.", "Slovo vlevo je nástroj, slovo vpravo ten, kdo na něj hraje.", "Слово ліворуч є інструментом, слово праворуч тим, хто на ньому грає.", "A bal oldali szó a hangszer, a jobb oldali az, aki játszik rajta."),
    paren: [
      [w("Viool", "Violin", "Geige", "Violon", "Violín", "Vioară", "Violino", "Violino", "Keman", "Viulu", "Fiolin", "Βιολί", "Housle", "Скрипка", "Hegedű"), w("Violist", "Violinist", "Geiger", "Violoniste", "Violinista", "Violonist", "Violinista", "Violinista", "Kemancı", "Viulisti", "Fiolinist", "Βιολιστής", "Houslista", "Скрипаль", "Hegedűs")],
      [w("Piano", "Piano", "Klavier", "Piano", "Piano", "Pian", "Pianoforte", "Piano", "Piyano", "Piano", "Piano", "Πιάνο", "Klavír", "Фортепіано", "Zongora"), w("Pianist", "Pianist", "Pianist", "Pianiste", "Pianista", "Pianist", "Pianista", "Pianista", "Piyanist", "Pianisti", "Pianist", "Πιανίστας", "Klavírista", "Піаніст", "Zongorista")],
      [w("Gitaar", "Guitar", "Gitarre", "Guitare", "Guitarra", "Chitară", "Chitarra", "Guitarra", "Gitar", "Kitara", "Gitar", "Κιθάρα", "Kytara", "Гітара", "Gitár"), w("Gitarist", "Guitarist", "Gitarrist", "Guitariste", "Guitarrista", "Chitarist", "Chitarrista", "Guitarrista", "Gitarist", "Kitaristi", "Gitarist", "Κιθαρίστας", "Kytarista", "Гітарист", "Gitáros")],
      [w("Trompet", "Trumpet", "Trompete", "Trompette", "Trompeta", "Trompetă", "Tromba", "Trompete", "Trompet", "Trumpetti", "Trompet", "Τρομπέτα", "Trubka", "Труба", "Trombita"), w("Trompettist", "Trumpeter", "Trompeter", "Trompettiste", "Trompetista", "Trompetist", "Trombettista", "Trompetista", "Trompetçi", "Trumpetisti", "Trompetist", "Τρομπετίστας", "Trumpetista", "Трубач", "Trombitás")],
      [w("Fluit", "Flute", "Flöte", "Flûte", "Flauta", "Flaut", "Flauto", "Flauta", "Flüt", "Huilu", "Fløyte", "Φλάουτο", "Flétna", "Флейта", "Fuvola"), w("Fluitist", "Flautist", "Flötist", "Flûtiste", "Flautista", "Flautist", "Flautista", "Flautista", "Flütçü", "Huilisti", "Fløytist", "Φλαουτίστας", "Flétnista", "Флейтист", "Fuvolás")],
      [w("Drumstel", "Drums", "Schlagzeug", "Batterie", "Batería", "Tobe", "Batteria", "Bateria", "Davul seti", "Rummut", "Trommesett", "Ντραμς", "Bicí souprava", "Ударна установка", "Dobfelszerelés"), w("Drummer", "Drummer", "Schlagzeuger", "Batteur", "Baterista", "Toboșar", "Batterista", "Baterista", "Davulcu", "Rumpali", "Trommeslager", "Ντράμερ", "Bubeník", "Барабанщик", "Dobos")],
      [w("Cello", "Cello", "Cello", "Violoncelle", "Violonchelo", "Violoncel", "Violoncello", "Violoncelo", "Çello", "Sello", "Cello", "Τσέλο", "Violoncello", "Віолончель", "Cselló"), w("Cellist", "Cellist", "Cellist", "Violoncelliste", "Violonchelista", "Violoncelist", "Violoncellista", "Violoncelista", "Çellist", "Sellisti", "Cellist", "Τσελίστας", "Violoncellista", "Віолончеліст", "Csellista")],
      [w("Harp", "Harp", "Harfe", "Harpe", "Arpa", "Harpă", "Arpa", "Harpa", "Arp", "Harppu", "Harpe", "Άρπα", "Harfa", "Арфа", "Hárfa"), w("Harpist", "Harpist", "Harfenist", "Harpiste", "Arpista", "Harpist", "Arpista", "Harpista", "Arpist", "Harpisti", "Harpist", "Αρπίστας", "Harfenista", "Арфіст", "Hárfás")],
    ],
  },
  {
    naam: "meetinstrument-grootheid",
    hint: w("Het linker woord is het meetinstrument, het rechter wat het meet.", "The left word is the instrument, the right one what it measures.",
            "Das linke Wort ist das Messgerät, das rechte, was es misst.", "Le mot de gauche est l'instrument, celui de droite ce qu'il mesure.",
            "La palabra de la izquierda es el instrumento, la de la derecha lo que mide.", "Cuvântul din stânga este instrumentul, cel din dreapta ce măsoară.", "La parola a sinistra è lo strumento, quella a destra ciò che misura.", "A palavra da esquerda é o instrumento, a da direita o que mede.", "Soldaki kelime ölçü aleti, sağdaki onun ölçtüğü şeydir.", "Vasen sana on mittari, oikea se, mitä se mittaa.", "Ordet til venstre er måleinstrumentet, ordet til høyre det det måler.", "Η λέξη αριστερά είναι το όργανο μέτρησης, η λέξη δεξιά αυτό που μετρά.", "Slovo vlevo je měřidlo, slovo vpravo to, co měří.", "Слово ліворуч є вимірювальним приладом, слово праворуч тим, що він вимірює.", "A bal oldali szó a mérőeszköz, a jobb oldali az, amit mér."),
    paren: [
      [w("Klok", "Clock", "Uhr", "Horloge", "Reloj", "Ceas", "Orologio", "Relógio", "Saat", "Kello", "Klokke", "Ρολόι", "Hodiny", "Годинник", "Óra"), w("Tijd", "Time", "Zeit", "Temps", "Tiempo", "Timp", "Tempo", "Tempo", "Zaman", "Aika", "Tid", "Χρόνος", "Čas", "Час", "Idő")],
      [w("Thermometer", "Thermometer", "Thermometer", "Thermomètre", "Termómetro", "Termometru", "Termometro", "Termómetro", "Termometre", "Lämpömittari", "Termometer", "Θερμόμετρο", "Teploměr", "Термометр", "Hőmérő"), w("Temperatuur", "Temperature", "Temperatur", "Température", "Temperatura", "Temperatură", "Temperatura", "Temperatura", "Sıcaklık", "Lämpötila", "Temperatur", "Θερμοκρασία", "Teplota", "Температура", "Hőmérséklet")],
      [w("Weegschaal", "Scales", "Waage", "Balance", "Balanza", "Cântar", "Bilancia", "Balança", "Terazi", "Vaaka", "Vekt", "Ζυγαριά", "Váha", "Ваги", "Mérleg"), w("Gewicht", "Weight", "Gewicht", "Poids", "Peso", "Greutate", "Peso", "Peso", "Ağırlık", "Paino", "Tyngde", "Βάρος", "Hmotnost", "Вага", "Súly")],
      [w("Liniaal", "Ruler", "Lineal", "Règle", "Regla", "Riglă", "Righello", "Régua", "Cetvel", "Viivain", "Linjal", "Χάρακας", "Pravítko", "Лінійка", "Vonalzó"), w("Lengte", "Length", "Länge", "Longueur", "Longitud", "Lungime", "Lunghezza", "Comprimento", "Uzunluk", "Pituus", "Lengde", "Μήκος", "Délka", "Довжина", "Hossz")],
      [w("Kompas", "Compass", "Kompass", "Boussole", "Brújula", "Busolă", "Bussola", "Bússola", "Pusula", "Kompassi", "Kompass", "Πυξίδα", "Kompas", "Компас", "Iránytű"), w("Richting", "Direction", "Richtung", "Direction", "Dirección", "Direcție", "Direzione", "Direção", "Yön", "Suunta", "Retning", "Κατεύθυνση", "Směr", "Напрямок", "Irány")],
      [w("Barometer", "Barometer", "Barometer", "Baromètre", "Barómetro", "Barometru", "Barometro", "Barómetro", "Barometre", "Ilmapuntari", "Barometer", "Βαρόμετρο", "Barometr", "Барометр", "Barométer"), w("Luchtdruk", "Air pressure", "Luftdruck", "Pression", "Presión", "Presiune", "Pressione atmosferica", "Pressão atmosférica", "Hava basıncı", "Ilmanpaine", "Lufttrykk", "Ατμοσφαιρική πίεση", "Tlak vzduchu", "Атмосферний тиск", "Légnyomás")],
      [w("Snelheidsmeter", "Speedometer", "Tachometer", "Compteur de vitesse", "Velocímetro", "Vitezometru", "Tachimetro", "Velocímetro", "Hız göstergesi", "Nopeusmittari", "Speedometer", "Ταχύμετρο", "Tachometr", "Спідометр", "Sebességmérő"), w("Snelheid", "Speed", "Geschwindigkeit", "Vitesse", "Velocidad", "Viteză", "Velocità", "Velocidade", "Hız", "Nopeus", "Fart", "Ταχύτητα", "Rychlost", "Швидкість", "Sebesség")],
      [w("Kalender", "Calendar", "Kalender", "Calendrier", "Calendario", "Calendar", "Calendario", "Calendário", "Takvim", "Kalenteri", "Kalender", "Ημερολόγιο", "Kalendář", "Календар", "Naptár"), w("Datum", "Date", "Datum", "Date", "Fecha", "Dată", "Data", "Data", "Tarih", "Päivämäärä", "Dato", "Ημερομηνία", "Datum", "Дата", "Dátum")],
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
