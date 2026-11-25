// Cijferreeksen. Elke reeks volgt één principe; de kandidaat zet de reeks voort
// met één getal. Vijf antwoordopties, oplopend gesorteerd zoals in de echte
// afname. De afleiders zijn denkfouten: het vorige verschil doortrekken, de
// stap één te ver of te kort nemen, de bewerkingen omdraaien.
import { rng, tussen, kies } from "./hsf-oefenbank-lib.mjs";

const TALEN = ["nl", "en", "de", "fr", "es", "ro", "it", "pt", "tr", "fi", "nb", "el", "cs", "uk", "hu", "lt", "bg", "sk", "sl", "et", "lv", "hr", "sr", "ru"];

const VRAAG = {
  nl: "Selecteer het getal dat logischerwijs volgt op de reeks.",
  en: "Select the number that logically continues the series.",
  de: "Wählen Sie die Zahl, die die Reihe logisch fortsetzt.",
  fr: "Sélectionnez le nombre qui poursuit logiquement la série.",
  es: "Selecciona el número que continúa lógicamente la serie.",
  ro: "Selectează numărul care continuă logic șirul.",
  it: "Selezionare il numero che continua logicamente la serie.",
  pt: "Selecione o número que continua logicamente a série.",
  tr: "Diziyi mantıklı biçimde sürdüren sayıyı seçin.",
  fi: "Valitse luku, joka jatkaa sarjaa loogisesti.",
  nb: "Velg tallet som fortsetter rekken logisk.",
  el: "Επιλέξτε τον αριθμό που συνεχίζει λογικά τη σειρά.",
  cs: "Vyberte číslo, které logicky pokračuje v řadě.",
  uk: "Виберіть число, яке логічно продовжує ряд.",
  hu: "Válassza ki azt a számot, amely logikusan folytatja a sort.",
  lt: "Pasirinkite skaičių, kuris logiškai tęsia seką.",
  bg: "Изберете числото, което логично продължава редицата.",
  sk: "Vyberte číslo, ktoré logicky pokračuje v rade.",
  sl: "Izberite število, ki logično nadaljuje zaporedje.",
  et: "Valige arv, mis jätkab rida loogiliselt.",
  lv: "Izvēlieties skaitli, kas loģiski turpina virkni.",
  hr: "Odaberite broj koji logično nastavlja niz.",
  sr: "Izaberite broj koji logično nastavlja niz.",
  ru: "Выберите число, которое логично продолжает ряд.",
};

// Bouwstenen voor de toelichting, per taal. De cijfers komen uit het item.
const T = {
  nl: {
    verschilToe: (d, r, u) => `Het verschil tussen twee opeenvolgende getallen neemt steeds met ${d} toe: ${r}. Na het laatste getal volgt ${u}.`,
    verschilAf: (d, r, u) => `Het verschil tussen twee opeenvolgende getallen neemt steeds met ${d} af: ${r}. Na het laatste getal volgt ${u}.`,
    verschilMaal: (k, r, u) => `Het verschil wordt telkens met ${k} vermenigvuldigd: ${r}. De volgende stap is ${u}.`,
    maal: (k, u) => `Elk getal is het vorige maal ${k}. Daarom volgt ${u}.`,
    plus: (k, u) => `Bij elk getal komt er ${k} bij. Daarom volgt ${u}.`,
    som: (a, b, u) => `Elk getal is de som van de twee getallen ervoor: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Elk getal is het vorige maal ${k}, en daar komt ${b} bij. Daarom volgt ${u}.`,
    twee: (a, b, u) => `Er lopen twee reeksen door elkaar. De reeks op de oneven plaatsen gaat met ${a}, die op de even plaatsen met ${b}. Het gevraagde getal hoort bij de reeks met ${u}.`,
    afwisselend: (a, b, u) => `De bewerkingen wisselen elkaar af: ${a} en ${b}. Nu is ${a} aan de beurt, dus volgt ${u}.`,
    kwadraat: (u) => `De reeks bestaat uit kwadraten. Het volgende kwadraat is ${u}.`,
    deelMaal: (a, b, u) => `Er wordt om en om ${a} en ${b} toegepast. Nu volgt ${b}, dus ${u}.`,
  },
  en: {
    verschilToe: (d, r, u) => `The gap between consecutive numbers grows by ${d} each time: ${r}. After the last number comes ${u}.`,
    verschilAf: (d, r, u) => `The gap between consecutive numbers shrinks by ${d} each time: ${r}. After the last number comes ${u}.`,
    verschilMaal: (k, r, u) => `The gap is multiplied by ${k} each time: ${r}. The next step is ${u}.`,
    maal: (k, u) => `Each number is the previous one times ${k}, so ${u} follows.`,
    plus: (k, u) => `Each number is ${k} more than the one before, so ${u} follows.`,
    som: (a, b, u) => `Each number is the sum of the two before it: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Each number is the previous one times ${k} plus ${b}, so ${u} follows.`,
    twee: (a, b, u) => `Two series run through each other. The odd positions move by ${a}, the even positions by ${b}. The number asked for belongs to the series moving by ${u}.`,
    afwisselend: (a, b, u) => `The operations alternate: ${a} and ${b}. It is now the turn of ${a}, so ${u} follows.`,
    kwadraat: (u) => `The series consists of squares. The next square is ${u}.`,
    deelMaal: (a, b, u) => `${a} and ${b} are applied in turn. Now ${b} follows, giving ${u}.`,
  },
  de: {
    verschilToe: (d, r, u) => `Der Abstand zwischen zwei Zahlen wächst jedes Mal um ${d}: ${r}. Nach der letzten Zahl folgt ${u}.`,
    verschilAf: (d, r, u) => `Der Abstand zwischen zwei Zahlen nimmt jedes Mal um ${d} ab: ${r}. Nach der letzten Zahl folgt ${u}.`,
    verschilMaal: (k, r, u) => `Der Abstand wird jedes Mal mit ${k} multipliziert: ${r}. Der nächste Schritt ist ${u}.`,
    maal: (k, u) => `Jede Zahl ist die vorige mal ${k}, deshalb folgt ${u}.`,
    plus: (k, u) => `Zu jeder Zahl kommt ${k} hinzu, deshalb folgt ${u}.`,
    som: (a, b, u) => `Jede Zahl ist die Summe der beiden davor: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Jede Zahl ist die vorige mal ${k} plus ${b}, deshalb folgt ${u}.`,
    twee: (a, b, u) => `Zwei Reihen laufen ineinander. Die ungeraden Stellen bewegen sich mit ${a}, die geraden mit ${b}. Die gesuchte Zahl gehört zur Reihe mit ${u}.`,
    afwisselend: (a, b, u) => `Die Rechenschritte wechseln sich ab: ${a} und ${b}. Jetzt ist ${a} an der Reihe, also folgt ${u}.`,
    kwadraat: (u) => `Die Reihe besteht aus Quadratzahlen. Die nächste Quadratzahl ist ${u}.`,
    deelMaal: (a, b, u) => `${a} und ${b} werden abwechselnd angewendet. Jetzt folgt ${b}, also ${u}.`,
  },
  fr: {
    verschilToe: (d, r, u) => `L'écart entre deux nombres augmente de ${d} à chaque fois : ${r}. Après le dernier nombre vient ${u}.`,
    verschilAf: (d, r, u) => `L'écart entre deux nombres diminue de ${d} à chaque fois : ${r}. Après le dernier nombre vient ${u}.`,
    verschilMaal: (k, r, u) => `L'écart est multiplié par ${k} à chaque fois : ${r}. L'étape suivante est ${u}.`,
    maal: (k, u) => `Chaque nombre est le précédent multiplié par ${k}, donc ${u} suit.`,
    plus: (k, u) => `Chaque nombre vaut ${k} de plus que le précédent, donc ${u} suit.`,
    som: (a, b, u) => `Chaque nombre est la somme des deux précédents : ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Chaque nombre est le précédent multiplié par ${k} puis augmenté de ${b}, donc ${u} suit.`,
    twee: (a, b, u) => `Deux séries s'entrecroisent. Les positions impaires avancent de ${a}, les paires de ${b}. Le nombre demandé appartient à la série qui avance de ${u}.`,
    afwisselend: (a, b, u) => `Les opérations alternent : ${a} et ${b}. C'est au tour de ${a}, donc ${u} suit.`,
    kwadraat: (u) => `La série est composée de carrés. Le carré suivant est ${u}.`,
    deelMaal: (a, b, u) => `${a} et ${b} s'appliquent à tour de rôle. C'est ${b} qui suit, soit ${u}.`,
  },
  es: {
    verschilToe: (d, r, u) => `La diferencia entre dos números aumenta ${d} cada vez: ${r}. Después del último número viene ${u}.`,
    verschilAf: (d, r, u) => `La diferencia entre dos números disminuye ${d} cada vez: ${r}. Después del último número viene ${u}.`,
    verschilMaal: (k, r, u) => `La diferencia se multiplica por ${k} cada vez: ${r}. El paso siguiente es ${u}.`,
    maal: (k, u) => `Cada número es el anterior por ${k}, así que sigue ${u}.`,
    plus: (k, u) => `Cada número es ${k} más que el anterior, así que sigue ${u}.`,
    som: (a, b, u) => `Cada número es la suma de los dos anteriores: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Cada número es el anterior por ${k} más ${b}, así que sigue ${u}.`,
    twee: (a, b, u) => `Hay dos series entrelazadas. Las posiciones impares avanzan ${a} y las pares ${b}. El número pedido pertenece a la serie que avanza ${u}.`,
    afwisselend: (a, b, u) => `Las operaciones se alternan: ${a} y ${b}. Ahora toca ${a}, así que sigue ${u}.`,
    kwadraat: (u) => `La serie está formada por cuadrados. El cuadrado siguiente es ${u}.`,
    deelMaal: (a, b, u) => `${a} y ${b} se aplican por turnos. Ahora sigue ${b}, es decir ${u}.`,
  },
  ro: {
    verschilToe: (d, r, u) => `Diferența dintre două numere crește cu ${d} de fiecare dată: ${r}. După ultimul număr urmează ${u}.`,
    verschilAf: (d, r, u) => `Diferența dintre două numere scade cu ${d} de fiecare dată: ${r}. După ultimul număr urmează ${u}.`,
    verschilMaal: (k, r, u) => `Diferența se înmulțește cu ${k} de fiecare dată: ${r}. Pasul următor este ${u}.`,
    maal: (k, u) => `Fiecare număr este precedentul înmulțit cu ${k}, deci urmează ${u}.`,
    plus: (k, u) => `Fiecare număr este cu ${k} mai mare decât precedentul, deci urmează ${u}.`,
    som: (a, b, u) => `Fiecare număr este suma celor două dinainte: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Fiecare număr este precedentul înmulțit cu ${k} plus ${b}, deci urmează ${u}.`,
    twee: (a, b, u) => `Două șiruri se întrepătrund. Pozițiile impare avansează cu ${a}, cele pare cu ${b}. Numărul cerut aparține șirului care avansează cu ${u}.`,
    afwisselend: (a, b, u) => `Operațiile alternează: ${a} și ${b}. Acum este rândul lui ${a}, deci urmează ${u}.`,
    kwadraat: (u) => `Șirul este format din pătrate perfecte. Următorul pătrat este ${u}.`,
    deelMaal: (a, b, u) => `${a} și ${b} se aplică pe rând. Acum urmează ${b}, adică ${u}.`,
  },
  it: {
    verschilToe: (d, r, u) => `La differenza tra due numeri consecutivi aumenta ogni volta di ${d}: ${r}. Dopo l'ultimo numero viene ${u}.`,
    verschilAf: (d, r, u) => `La differenza tra due numeri consecutivi diminuisce ogni volta di ${d}: ${r}. Dopo l'ultimo numero viene ${u}.`,
    verschilMaal: (k, r, u) => `La differenza viene moltiplicata ogni volta per ${k}: ${r}. Il passo successivo è ${u}.`,
    maal: (k, u) => `Ogni numero è il precedente moltiplicato per ${k}, quindi segue ${u}.`,
    plus: (k, u) => `Ogni numero supera il precedente di ${k}, quindi segue ${u}.`,
    som: (a, b, u) => `Ogni numero è la somma dei due precedenti: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Ogni numero è il precedente moltiplicato per ${k} più ${b}, quindi segue ${u}.`,
    twee: (a, b, u) => `Due serie si alternano. Le posizioni dispari avanzano di ${a}, quelle pari di ${b}. Il numero richiesto appartiene alla serie che avanza di ${u}.`,
    afwisselend: (a, b, u) => `Le operazioni si alternano: ${a} e ${b}. Ora tocca a ${a}, quindi segue ${u}.`,
    kwadraat: (u) => `La serie è formata da quadrati. Il quadrato successivo è ${u}.`,
    deelMaal: (a, b, u) => `${a} e ${b} si applicano a turno. Ora tocca a ${b}, quindi ${u}.`,
  },
  pt: {
    verschilToe: (d, r, u) => `A diferença entre dois números consecutivos aumenta ${d} de cada vez: ${r}. Depois do último número vem ${u}.`,
    verschilAf: (d, r, u) => `A diferença entre dois números consecutivos diminui ${d} de cada vez: ${r}. Depois do último número vem ${u}.`,
    verschilMaal: (k, r, u) => `A diferença é multiplicada por ${k} de cada vez: ${r}. O passo seguinte é ${u}.`,
    maal: (k, u) => `Cada número é o anterior multiplicado por ${k}, por isso segue-se ${u}.`,
    plus: (k, u) => `Cada número é mais ${k} do que o anterior, por isso segue-se ${u}.`,
    som: (a, b, u) => `Cada número é a soma dos dois anteriores: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Cada número é o anterior multiplicado por ${k} mais ${b}, por isso segue-se ${u}.`,
    twee: (a, b, u) => `Há duas séries intercaladas. As posições ímpares avançam ${a}, as pares ${b}. O número pedido pertence à série que avança ${u}.`,
    afwisselend: (a, b, u) => `As operações alternam: ${a} e ${b}. Agora é a vez de ${a}, por isso segue-se ${u}.`,
    kwadraat: (u) => `A série é formada por quadrados. O quadrado seguinte é ${u}.`,
    deelMaal: (a, b, u) => `${a} e ${b} aplicam-se à vez. Agora segue-se ${b}, ou seja ${u}.`,
  },
  tr: {
    verschilToe: (d, r, u) => `Ardışık iki sayı arasındaki fark her seferinde ${d} artıyor: ${r}. Son sayıdan sonra ${u} gelir.`,
    verschilAf: (d, r, u) => `Ardışık iki sayı arasındaki fark her seferinde ${d} azalıyor: ${r}. Son sayıdan sonra ${u} gelir.`,
    verschilMaal: (k, r, u) => `Fark her seferinde ${k} ile çarpılıyor: ${r}. Bir sonraki adım ${u}.`,
    maal: (k, u) => `Her sayı bir öncekinin ${k} katı, bu yüzden ${u} gelir.`,
    plus: (k, u) => `Her sayı bir öncekinden ${k} fazla, bu yüzden ${u} gelir.`,
    som: (a, b, u) => `Her sayı önceki iki sayının toplamı: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Her sayı, bir öncekinin ${k} katı artı ${b}, bu yüzden ${u} gelir.`,
    twee: (a, b, u) => `İki dizi iç içe ilerliyor. Tek sıradakiler ${a}, çift sıradakiler ${b} artıyor. İstenen sayı ${u} artan diziye ait.`,
    afwisselend: (a, b, u) => `İşlemler sırayla değişiyor: ${a} ve ${b}. Şimdi sıra ${a} işleminde, bu yüzden ${u} gelir.`,
    kwadraat: (u) => `Dizi kare sayılardan oluşuyor. Bir sonraki kare ${u}.`,
    deelMaal: (a, b, u) => `${a} ve ${b} sırayla uygulanıyor. Şimdi sıra ${b} işleminde, yani ${u}.`,
  },
  fi: {
    verschilToe: (d, r, u) => `Peräkkäisten lukujen erotus kasvaa joka kerta ${d}: ${r}. Viimeisen luvun jälkeen tulee ${u}.`,
    verschilAf: (d, r, u) => `Peräkkäisten lukujen erotus pienenee joka kerta ${d}: ${r}. Viimeisen luvun jälkeen tulee ${u}.`,
    verschilMaal: (k, r, u) => `Erotus kerrotaan joka kerta luvulla ${k}: ${r}. Seuraava askel on ${u}.`,
    maal: (k, u) => `Jokainen luku on edellinen kerrottuna luvulla ${k}, joten seuraavaksi tulee ${u}.`,
    plus: (k, u) => `Jokainen luku on ${k} suurempi kuin edellinen, joten seuraavaksi tulee ${u}.`,
    som: (a, b, u) => `Jokainen luku on kahden edellisen summa: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Jokainen luku on edellinen kerrottuna luvulla ${k} plus ${b}, joten seuraavaksi tulee ${u}.`,
    twee: (a, b, u) => `Kaksi sarjaa vuorottelee. Parittomat paikat kasvavat ${a}, parilliset ${b}. Kysytty luku kuuluu sarjaan, joka kasvaa ${u}.`,
    afwisselend: (a, b, u) => `Laskutoimitukset vuorottelevat: ${a} ja ${b}. Nyt on vuorossa ${a}, joten seuraavaksi tulee ${u}.`,
    kwadraat: (u) => `Sarja koostuu neliöluvuista. Seuraava neliö on ${u}.`,
    deelMaal: (a, b, u) => `${a} ja ${b} vuorottelevat. Nyt on vuorossa ${b}, eli ${u}.`,
  },
  nb: {
    verschilToe: (d, r, u) => `Forskjellen mellom to tall på rad øker med ${d} hver gang: ${r}. Etter det siste tallet kommer ${u}.`,
    verschilAf: (d, r, u) => `Forskjellen mellom to tall på rad minker med ${d} hver gang: ${r}. Etter det siste tallet kommer ${u}.`,
    verschilMaal: (k, r, u) => `Forskjellen ganges med ${k} hver gang: ${r}. Neste steg er ${u}.`,
    maal: (k, u) => `Hvert tall er det forrige ganget med ${k}, så neste er ${u}.`,
    plus: (k, u) => `Hvert tall er ${k} mer enn det forrige, så neste er ${u}.`,
    som: (a, b, u) => `Hvert tall er summen av de to forrige: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Hvert tall er det forrige ganget med ${k} pluss ${b}, så neste er ${u}.`,
    twee: (a, b, u) => `To rekker går om hverandre. Oddetallsplassene øker med ${a}, partallsplassene med ${b}. Tallet du leter etter hører til rekken som øker med ${u}.`,
    afwisselend: (a, b, u) => `Regneoperasjonene veksler: ${a} og ${b}. Nå er det ${a} sin tur, så neste er ${u}.`,
    kwadraat: (u) => `Rekken består av kvadrattall. Neste kvadrat er ${u}.`,
    deelMaal: (a, b, u) => `${a} og ${b} brukes annenhver gang. Nå er det ${b} sin tur, altså ${u}.`,
  },
  el: {
    verschilToe: (d, r, u) => `Η διαφορά μεταξύ δύο διαδοχικών αριθμών αυξάνεται κάθε φορά κατά ${d}: ${r}. Μετά τον τελευταίο αριθμό ακολουθεί το ${u}.`,
    verschilAf: (d, r, u) => `Η διαφορά μεταξύ δύο διαδοχικών αριθμών μειώνεται κάθε φορά κατά ${d}: ${r}. Μετά τον τελευταίο αριθμό ακολουθεί το ${u}.`,
    verschilMaal: (k, r, u) => `Η διαφορά πολλαπλασιάζεται κάθε φορά επί ${k}: ${r}. Το επόμενο βήμα είναι ${u}.`,
    maal: (k, u) => `Κάθε αριθμός είναι ο προηγούμενος επί ${k}, άρα ακολουθεί το ${u}.`,
    plus: (k, u) => `Κάθε αριθμός είναι κατά ${k} μεγαλύτερος από τον προηγούμενο, άρα ακολουθεί το ${u}.`,
    som: (a, b, u) => `Κάθε αριθμός είναι το άθροισμα των δύο προηγούμενων: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Κάθε αριθμός είναι ο προηγούμενος επί ${k} συν ${b}, άρα ακολουθεί το ${u}.`,
    twee: (a, b, u) => `Δύο σειρές εναλλάσσονται. Οι μονές θέσεις αυξάνονται κατά ${a}, οι ζυγές κατά ${b}. Ο ζητούμενος αριθμός ανήκει στη σειρά που αυξάνεται κατά ${u}.`,
    afwisselend: (a, b, u) => `Οι πράξεις εναλλάσσονται: ${a} και ${b}. Τώρα είναι η σειρά της ${a}, άρα ακολουθεί το ${u}.`,
    kwadraat: (u) => `Η σειρά αποτελείται από τετράγωνα. Το επόμενο τετράγωνο είναι ${u}.`,
    deelMaal: (a, b, u) => `Οι πράξεις ${a} και ${b} εφαρμόζονται εναλλάξ. Τώρα ακολουθεί η ${b}, δηλαδή ${u}.`,
  },
  cs: {
    verschilToe: (d, r, u) => `Rozdíl mezi dvěma po sobě jdoucími čísly se pokaždé zvětší o ${d}: ${r}. Po posledním čísle následuje ${u}.`,
    verschilAf: (d, r, u) => `Rozdíl mezi dvěma po sobě jdoucími čísly se pokaždé zmenší o ${d}: ${r}. Po posledním čísle následuje ${u}.`,
    verschilMaal: (k, r, u) => `Rozdíl se pokaždé násobí ${k}: ${r}. Další krok je ${u}.`,
    maal: (k, u) => `Každé číslo je předchozí vynásobené ${k}, takže následuje ${u}.`,
    plus: (k, u) => `Každé číslo je o ${k} větší než předchozí, takže následuje ${u}.`,
    som: (a, b, u) => `Každé číslo je součtem dvou předchozích: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Každé číslo je předchozí vynásobené ${k} plus ${b}, takže následuje ${u}.`,
    twee: (a, b, u) => `Střídají se dvě řady. Lichá místa rostou o ${a}, sudá o ${b}. Hledané číslo patří do řady, která roste o ${u}.`,
    afwisselend: (a, b, u) => `Operace se střídají: ${a} a ${b}. Teď je na řadě ${a}, takže následuje ${u}.`,
    kwadraat: (u) => `Řada se skládá z druhých mocnin. Další mocnina je ${u}.`,
    deelMaal: (a, b, u) => `${a} a ${b} se uplatňují střídavě. Teď je na řadě ${b}, tedy ${u}.`,
  },
  uk: {
    verschilToe: (d, r, u) => `Різниця між двома сусідніми числами щоразу збільшується на ${d}: ${r}. Після останнього числа йде ${u}.`,
    verschilAf: (d, r, u) => `Різниця між двома сусідніми числами щоразу зменшується на ${d}: ${r}. Після останнього числа йде ${u}.`,
    verschilMaal: (k, r, u) => `Різниця щоразу множиться на ${k}: ${r}. Наступний крок ${u}.`,
    maal: (k, u) => `Кожне число дорівнює попередньому, помноженому на ${k}, тож далі йде ${u}.`,
    plus: (k, u) => `Кожне число на ${k} більше за попереднє, тож далі йде ${u}.`,
    som: (a, b, u) => `Кожне число є сумою двох попередніх: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Кожне число дорівнює попередньому, помноженому на ${k}, плюс ${b}, тож далі йде ${u}.`,
    twee: (a, b, u) => `Чергуються два ряди. Непарні позиції зростають на ${a}, парні на ${b}. Шукане число належить до ряду, що зростає на ${u}.`,
    afwisselend: (a, b, u) => `Дії чергуються: ${a} і ${b}. Зараз черга ${a}, тож далі йде ${u}.`,
    kwadraat: (u) => `Ряд складається з квадратів чисел. Наступний квадрат ${u}.`,
    deelMaal: (a, b, u) => `${a} і ${b} застосовуються по черзі. Зараз черга ${b}, тобто ${u}.`,
  },
  hu: {
    verschilToe: (d, r, u) => `Két egymást követő szám különbsége minden lépésben ${d}-val nő: ${r}. Az utolsó szám után ${u} következik.`,
    verschilAf: (d, r, u) => `Két egymást követő szám különbsége minden lépésben ${d}-val csökken: ${r}. Az utolsó szám után ${u} következik.`,
    verschilMaal: (k, r, u) => `A különbséget minden lépésben ${k}-val szorozzuk: ${r}. A következő lépés ${u}.`,
    maal: (k, u) => `Minden szám az előző ${k}-szorosa, így ${u} következik.`,
    plus: (k, u) => `Minden szám ${k}-val nagyobb az előzőnél, így ${u} következik.`,
    som: (a, b, u) => `Minden szám az előző kettő összege: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Minden szám az előző ${k}-szorosa plusz ${b}, így ${u} következik.`,
    twee: (a, b, u) => `Két sor váltakozik. A páratlan helyek ${a}-val, a párosak ${b}-val nőnek. A keresett szám abba a sorba tartozik, amely ${u}-val nő.`,
    afwisselend: (a, b, u) => `A műveletek váltakoznak: ${a} és ${b}. Most a(z) ${a} jön, így ${u} következik.`,
    kwadraat: (u) => `A sor négyzetszámokból áll. A következő négyzet ${u}.`,
    deelMaal: (a, b, u) => `A(z) ${a} és a(z) ${b} felváltva következik. Most a(z) ${b} jön, vagyis ${u}.`,
  },
  lt: {
    verschilToe: (d, r, u) => `Skirtumas tarp dviejų gretimų skaičių kaskart padidėja ${d}: ${r}. Po paskutinio skaičiaus eina ${u}.`,
    verschilAf: (d, r, u) => `Skirtumas tarp dviejų gretimų skaičių kaskart sumažėja ${d}: ${r}. Po paskutinio skaičiaus eina ${u}.`,
    verschilMaal: (k, r, u) => `Skirtumas kaskart padauginamas iš ${k}: ${r}. Kitas žingsnis yra ${u}.`,
    maal: (k, u) => `Kiekvienas skaičius yra ankstesnis, padaugintas iš ${k}, todėl toliau eina ${u}.`,
    plus: (k, u) => `Kiekvienas skaičius ${k} didesnis už ankstesnį, todėl toliau eina ${u}.`,
    som: (a, b, u) => `Kiekvienas skaičius yra dviejų ankstesnių suma: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Kiekvienas skaičius yra ankstesnis, padaugintas iš ${k}, plius ${b}, todėl toliau eina ${u}.`,
    twee: (a, b, u) => `Kaitaliojasi dvi sekos. Nelyginės vietos didėja ${a}, lyginės ${b}. Ieškomas skaičius priklauso sekai, kuri didėja ${u}.`,
    afwisselend: (a, b, u) => `Veiksmai kaitaliojasi: ${a} ir ${b}. Dabar eilė ${a}, todėl toliau eina ${u}.`,
    kwadraat: (u) => `Seką sudaro skaičių kvadratai. Kitas kvadratas yra ${u}.`,
    deelMaal: (a, b, u) => `${a} ir ${b} taikomi pakaitomis. Dabar eilė ${b}, taigi ${u}.`,
  },
  bg: {
    verschilToe: (d, r, u) => `Разликата между две съседни числа всеки път нараства с ${d}: ${r}. След последното число следва ${u}.`,
    verschilAf: (d, r, u) => `Разликата между две съседни числа всеки път намалява с ${d}: ${r}. След последното число следва ${u}.`,
    verschilMaal: (k, r, u) => `Разликата всеки път се умножава по ${k}: ${r}. Следващата стъпка е ${u}.`,
    maal: (k, u) => `Всяко число е предишното, умножено по ${k}, затова следва ${u}.`,
    plus: (k, u) => `Всяко число е с ${k} по-голямо от предишното, затова следва ${u}.`,
    som: (a, b, u) => `Всяко число е сборът на двете предишни: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Всяко число е предишното, умножено по ${k}, плюс ${b}, затова следва ${u}.`,
    twee: (a, b, u) => `Редуват се две редици. Нечетните позиции нарастват с ${a}, четните с ${b}. Търсеното число е от редицата, която нараства с ${u}.`,
    afwisselend: (a, b, u) => `Действията се редуват: ${a} и ${b}. Сега е ред на ${a}, затова следва ${u}.`,
    kwadraat: (u) => `Редицата се състои от квадрати на числа. Следващият квадрат е ${u}.`,
    deelMaal: (a, b, u) => `${a} и ${b} се прилагат последователно. Сега е ред на ${b}, тоест ${u}.`,
  },
  sk: {
    verschilToe: (d, r, u) => `Rozdiel medzi dvoma po sebe idúcimi číslami sa zakaždým zväčší o ${d}: ${r}. Po poslednom čísle nasleduje ${u}.`,
    verschilAf: (d, r, u) => `Rozdiel medzi dvoma po sebe idúcimi číslami sa zakaždým zmenší o ${d}: ${r}. Po poslednom čísle nasleduje ${u}.`,
    verschilMaal: (k, r, u) => `Rozdiel sa zakaždým násobí ${k}: ${r}. Ďalší krok je ${u}.`,
    maal: (k, u) => `Každé číslo je predchádzajúce vynásobené ${k}, takže nasleduje ${u}.`,
    plus: (k, u) => `Každé číslo je o ${k} väčšie ako predchádzajúce, takže nasleduje ${u}.`,
    som: (a, b, u) => `Každé číslo je súčtom dvoch predchádzajúcich: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Každé číslo je predchádzajúce vynásobené ${k} plus ${b}, takže nasleduje ${u}.`,
    twee: (a, b, u) => `Striedajú sa dva rady. Nepárne miesta rastú o ${a}, párne o ${b}. Hľadané číslo patrí do radu, ktorý rastie o ${u}.`,
    afwisselend: (a, b, u) => `Operácie sa striedajú: ${a} a ${b}. Teraz je na rade ${a}, takže nasleduje ${u}.`,
    kwadraat: (u) => `Rad tvoria druhé mocniny. Ďalšia mocnina je ${u}.`,
    deelMaal: (a, b, u) => `${a} a ${b} sa uplatňujú striedavo. Teraz je na rade ${b}, teda ${u}.`,
  },
  sl: {
    verschilToe: (d, r, u) => `Razlika med dvema zaporednima številoma se vsakič poveča za ${d}: ${r}. Za zadnjim številom sledi ${u}.`,
    verschilAf: (d, r, u) => `Razlika med dvema zaporednima številoma se vsakič zmanjša za ${d}: ${r}. Za zadnjim številom sledi ${u}.`,
    verschilMaal: (k, r, u) => `Razlika se vsakič pomnoži s ${k}: ${r}. Naslednji korak je ${u}.`,
    maal: (k, u) => `Vsako število je prejšnje, pomnoženo s ${k}, zato sledi ${u}.`,
    plus: (k, u) => `Vsako število je za ${k} večje od prejšnjega, zato sledi ${u}.`,
    som: (a, b, u) => `Vsako število je vsota prejšnjih dveh: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Vsako število je prejšnje, pomnoženo s ${k}, plus ${b}, zato sledi ${u}.`,
    twee: (a, b, u) => `Izmenjujeta se dve zaporedji. Liha mesta naraščajo za ${a}, soda za ${b}. Iskano število spada v zaporedje, ki narašča za ${u}.`,
    afwisselend: (a, b, u) => `Računske operacije se izmenjujejo: ${a} in ${b}. Zdaj je na vrsti ${a}, zato sledi ${u}.`,
    kwadraat: (u) => `Zaporedje sestavljajo kvadrati števil. Naslednji kvadrat je ${u}.`,
    deelMaal: (a, b, u) => `${a} in ${b} se uporabljata izmenično. Zdaj je na vrsti ${b}, torej ${u}.`,
  },
  et: {
    verschilToe: (d, r, u) => `Kahe järjestikuse arvu vahe suureneb iga kord ${d} võrra: ${r}. Pärast viimast arvu tuleb ${u}.`,
    verschilAf: (d, r, u) => `Kahe järjestikuse arvu vahe väheneb iga kord ${d} võrra: ${r}. Pärast viimast arvu tuleb ${u}.`,
    verschilMaal: (k, r, u) => `Vahe korrutatakse iga kord arvuga ${k}: ${r}. Järgmine samm on ${u}.`,
    maal: (k, u) => `Iga arv on eelmine korrutatuna arvuga ${k}, seega tuleb ${u}.`,
    plus: (k, u) => `Iga arv on eelmisest ${k} võrra suurem, seega tuleb ${u}.`,
    som: (a, b, u) => `Iga arv on kahe eelmise summa: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Iga arv on eelmine korrutatuna arvuga ${k} pluss ${b}, seega tuleb ${u}.`,
    twee: (a, b, u) => `Kaks rida vahelduvad. Paaritud kohad kasvavad ${a} võrra, paariskohad ${b} võrra. Otsitav arv kuulub ritta, mis kasvab ${u} võrra.`,
    afwisselend: (a, b, u) => `Tehted vahelduvad: ${a} ja ${b}. Nüüd on kord tehtel ${a}, seega tuleb ${u}.`,
    kwadraat: (u) => `Rida koosneb arvude ruutudest. Järgmine ruut on ${u}.`,
    deelMaal: (a, b, u) => `${a} ja ${b} rakenduvad vaheldumisi. Nüüd on kord tehtel ${b}, ehk ${u}.`,
  },
  lv: {
    verschilToe: (d, r, u) => `Starpība starp diviem blakus esošiem skaitļiem katru reizi palielinās par ${d}: ${r}. Pēc pēdējā skaitļa seko ${u}.`,
    verschilAf: (d, r, u) => `Starpība starp diviem blakus esošiem skaitļiem katru reizi samazinās par ${d}: ${r}. Pēc pēdējā skaitļa seko ${u}.`,
    verschilMaal: (k, r, u) => `Starpību katru reizi reizina ar ${k}: ${r}. Nākamais solis ir ${u}.`,
    maal: (k, u) => `Katrs skaitlis ir iepriekšējais, reizināts ar ${k}, tāpēc seko ${u}.`,
    plus: (k, u) => `Katrs skaitlis ir par ${k} lielāks nekā iepriekšējais, tāpēc seko ${u}.`,
    som: (a, b, u) => `Katrs skaitlis ir divu iepriekšējo summa: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Katrs skaitlis ir iepriekšējais, reizināts ar ${k}, plus ${b}, tāpēc seko ${u}.`,
    twee: (a, b, u) => `Mijas divas virknes. Nepāra vietas pieaug par ${a}, pāra vietas par ${b}. Meklētais skaitlis pieder virknei, kas pieaug par ${u}.`,
    afwisselend: (a, b, u) => `Darbības mijas: ${a} un ${b}. Tagad kārta ir ${a}, tāpēc seko ${u}.`,
    kwadraat: (u) => `Virkni veido skaitļu kvadrāti. Nākamais kvadrāts ir ${u}.`,
    deelMaal: (a, b, u) => `${a} un ${b} tiek lietoti pamīšus. Tagad kārta ir ${b}, tātad ${u}.`,
  },
  hr: {
    verschilToe: (d, r, u) => `Razlika između dvaju susjednih brojeva svaki put raste za ${d}: ${r}. Nakon posljednjeg broja slijedi ${u}.`,
    verschilAf: (d, r, u) => `Razlika između dvaju susjednih brojeva svaki put pada za ${d}: ${r}. Nakon posljednjeg broja slijedi ${u}.`,
    verschilMaal: (k, r, u) => `Razlika se svaki put množi s ${k}: ${r}. Sljedeći korak je ${u}.`,
    maal: (k, u) => `Svaki broj je prethodni pomnožen s ${k}, pa slijedi ${u}.`,
    plus: (k, u) => `Svaki broj je za ${k} veći od prethodnog, pa slijedi ${u}.`,
    som: (a, b, u) => `Svaki broj je zbroj dvaju prethodnih: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Svaki broj je prethodni pomnožen s ${k} plus ${b}, pa slijedi ${u}.`,
    twee: (a, b, u) => `Izmjenjuju se dva niza. Neparna mjesta rastu za ${a}, parna za ${b}. Traženi broj pripada nizu koji raste za ${u}.`,
    afwisselend: (a, b, u) => `Operacije se izmjenjuju: ${a} i ${b}. Sada je na redu ${a}, pa slijedi ${u}.`,
    kwadraat: (u) => `Niz se sastoji od kvadrata brojeva. Sljedeći kvadrat je ${u}.`,
    deelMaal: (a, b, u) => `${a} i ${b} primjenjuju se naizmjence. Sada je na redu ${b}, dakle ${u}.`,
  },
  sr: {
    verschilToe: (d, r, u) => `Razlika između dva susedna broja svaki put raste za ${d}: ${r}. Posle poslednjeg broja sledi ${u}.`,
    verschilAf: (d, r, u) => `Razlika između dva susedna broja svaki put opada za ${d}: ${r}. Posle poslednjeg broja sledi ${u}.`,
    verschilMaal: (k, r, u) => `Razlika se svaki put množi sa ${k}: ${r}. Sledeći korak je ${u}.`,
    maal: (k, u) => `Svaki broj je prethodni pomnožen sa ${k}, pa sledi ${u}.`,
    plus: (k, u) => `Svaki broj je za ${k} veći od prethodnog, pa sledi ${u}.`,
    som: (a, b, u) => `Svaki broj je zbir dva prethodna: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Svaki broj je prethodni pomnožen sa ${k} plus ${b}, pa sledi ${u}.`,
    twee: (a, b, u) => `Smenjuju se dva niza. Neparna mesta rastu za ${a}, parna za ${b}. Traženi broj pripada nizu koji raste za ${u}.`,
    afwisselend: (a, b, u) => `Operacije se smenjuju: ${a} i ${b}. Sada je na redu ${a}, pa sledi ${u}.`,
    kwadraat: (u) => `Niz se sastoji od kvadrata brojeva. Sledeći kvadrat je ${u}.`,
    deelMaal: (a, b, u) => `${a} i ${b} primenjuju se naizmenično. Sada je na redu ${b}, dakle ${u}.`,
  },
  ru: {
    verschilToe: (d, r, u) => `Разница между двумя соседними числами каждый раз увеличивается на ${d}: ${r}. После последнего числа идёт ${u}.`,
    verschilAf: (d, r, u) => `Разница между двумя соседними числами каждый раз уменьшается на ${d}: ${r}. После последнего числа идёт ${u}.`,
    verschilMaal: (k, r, u) => `Разница каждый раз умножается на ${k}: ${r}. Следующий шаг ${u}.`,
    maal: (k, u) => `Каждое число равно предыдущему, умноженному на ${k}, поэтому дальше идёт ${u}.`,
    plus: (k, u) => `Каждое число на ${k} больше предыдущего, поэтому дальше идёт ${u}.`,
    som: (a, b, u) => `Каждое число равно сумме двух предыдущих: ${a} + ${b} = ${u}.`,
    maalPlus: (k, b, u) => `Каждое число равно предыдущему, умноженному на ${k}, плюс ${b}, поэтому дальше идёт ${u}.`,
    twee: (a, b, u) => `Чередуются два ряда. Нечётные позиции растут на ${a}, чётные на ${b}. Искомое число относится к ряду, который растёт на ${u}.`,
    afwisselend: (a, b, u) => `Действия чередуются: ${a} и ${b}. Сейчас очередь ${a}, поэтому дальше идёт ${u}.`,
    kwadraat: (u) => `Ряд состоит из квадратов чисел. Следующий квадрат ${u}.`,
    deelMaal: (a, b, u) => `${a} и ${b} применяются по очереди. Сейчас очередь ${b}, то есть ${u}.`,
  },
};

const teken = (n) => (n < 0 ? `${n}` : `+${n}`);

/** Kiest vier afleiders rond het juiste antwoord. De kandidaten zijn denkfouten;
 *  wat overblijft wordt aangevuld met plausibele buurgetallen. Het aantal opties
 *  onder en boven het juiste antwoord wisselt, zodat het juiste antwoord niet
 *  steeds op dezelfde plek in de oplopende rij staat. */
function afleiders(r, juist, kandidaten, reeks = []) {
  const inReeks = new Set(reeks);
  const ok = (x) => Number.isInteger(x) && x > 0 && x !== juist && !inReeks.has(x);
  const uniek = [...new Set(kandidaten.filter(ok))];
  const onder = uniek.filter((x) => x < juist).sort((a, b) => b - a);
  const boven = uniek.filter((x) => x > juist).sort((a, b) => a - b);
  const stap = Math.max(1, Math.round(Math.abs(juist) * 0.04));
  for (let i = 1; i <= 8; i++) {
    const lo = juist - i * stap, hi = juist + i * stap;
    if (ok(lo) && !onder.includes(lo)) onder.push(lo);
    if (ok(hi) && !boven.includes(hi)) boven.push(hi);
  }
  const wilOnder = Math.min(Math.floor(r() * 5), onder.length);
  let nOnder = Math.min(wilOnder, 4);
  let nBoven = 4 - nOnder;
  if (nBoven > boven.length) { nBoven = boven.length; nOnder = 4 - nBoven; }
  if (nOnder > onder.length) return null;
  const gekozen = [...onder.slice(0, nOnder), ...boven.slice(0, nBoven)];
  if (gekozen.length < 4) return null;
  return gekozen;
}

const SJABLONEN = [
  {
    naam: "verschil-toe",
    maak(r) {
      const start = tussen(r, 1, 9), stap = tussen(r, 2, 6), toe = tussen(r, 1, 4);
      const v = [start], d = [];
      for (let i = 0; i < 6; i++) { const x = stap + i * toe; d.push(x); v.push(v[v.length - 1] + x); }
      const zichtbaar = v.slice(0, 6), juist = v[6];
      const rij = d.slice(0, 5).map(teken).join(", ");
      return {
        zichtbaar, juist,
        kand: [zichtbaar[5] + d[4], zichtbaar[5] + d[5] + toe, zichtbaar[5] + d[5] + d[4], zichtbaar[5] * 2 - zichtbaar[4], juist - stap],
        uit: (t) => T[t].verschilToe(toe, rij, teken(d[5])),
      };
    },
  },
  {
    naam: "verschil-af",
    maak(r) {
      const af = tussen(r, 1, 3), stap = tussen(r, 13, 20), start = tussen(r, 2, 9);
      const v = [start], d = [];
      for (let i = 0; i < 6; i++) { const x = stap - i * af; d.push(x); v.push(v[v.length - 1] + x); }
      if (d[5] < 2) return null;
      const zichtbaar = v.slice(0, 6), juist = v[6];
      const rij = d.slice(0, 5).map(teken).join(", ");
      return {
        zichtbaar, juist,
        kand: [zichtbaar[5] + d[4], zichtbaar[5] + d[5] - af, juist + d[5], juist - d[5], zichtbaar[5] + stap],
        uit: (t) => T[t].verschilAf(af, rij, teken(d[5])),
      };
    },
  },
  {
    naam: "verschil-maal",
    maak(r) {
      const start = tussen(r, 2, 9), d0 = tussen(r, 2, 5), k = tussen(r, 2, 3);
      const v = [start], d = [];
      for (let i = 0; i < 5; i++) { const x = d0 * Math.pow(k, i); d.push(x); v.push(v[v.length - 1] + x); }
      const zichtbaar = v.slice(0, 5), juist = v[5];
      const rij = d.slice(0, 4).map(teken).join(", ");
      return {
        zichtbaar, juist,
        kand: [zichtbaar[4] + d[3], zichtbaar[4] * k, juist + d[4], juist - d[3], zichtbaar[4] + d[4] * k],
        uit: (t) => T[t].verschilMaal(k, rij, teken(d[4])),
      };
    },
  },
  {
    naam: "maal",
    maak(r) {
      const start = tussen(r, 2, 8), k = tussen(r, 2, 4);
      const v = [start];
      for (let i = 0; i < 5; i++) v.push(v[v.length - 1] * k);
      const zichtbaar = v.slice(0, 5), juist = v[5];
      return {
        zichtbaar, juist,
        kand: [zichtbaar[4] + zichtbaar[3], zichtbaar[4] * (k + 1), zichtbaar[4] * (k - 1), juist + zichtbaar[3], juist - zichtbaar[3]],
        uit: (t) => T[t].maal(k, juist),
      };
    },
  },
  {
    naam: "plus",
    maak(r) {
      const start = tussen(r, 3, 40), k = tussen(r, 4, 17);
      const v = [start];
      for (let i = 0; i < 6; i++) v.push(v[v.length - 1] + k);
      const zichtbaar = v.slice(0, 6), juist = v[6];
      return {
        zichtbaar, juist,
        kand: [juist + k, juist - k, juist + 1, juist - 1, zichtbaar[5] + k + 2],
        uit: (t) => T[t].plus(k, juist),
      };
    },
  },
  {
    naam: "som-vorige",
    maak(r) {
      const a = tussen(r, 1, 6), b = tussen(r, 2, 9);
      const v = [a, b];
      for (let i = 0; i < 5; i++) v.push(v[v.length - 1] + v[v.length - 2]);
      const zichtbaar = v.slice(0, 6), juist = v[6];
      return {
        zichtbaar, juist,
        kand: [zichtbaar[5] + zichtbaar[3], zichtbaar[5] * 2, juist + zichtbaar[3], juist - zichtbaar[3], zichtbaar[5] + zichtbaar[4] + zichtbaar[3]],
        uit: (t) => T[t].som(zichtbaar[4], zichtbaar[5], juist),
      };
    },
  },
  {
    naam: "maal-plus",
    maak(r) {
      const start = tussen(r, 1, 6), k = tussen(r, 2, 3), b = tussen(r, 1, 7);
      const v = [start];
      for (let i = 0; i < 5; i++) v.push(v[v.length - 1] * k + b);
      const zichtbaar = v.slice(0, 5), juist = v[5];
      return {
        zichtbaar, juist,
        kand: [zichtbaar[4] * k, (zichtbaar[4] + b) * k, zichtbaar[4] + b, juist + b, juist + k * b],
        uit: (t) => T[t].maalPlus(k, b, juist),
      };
    },
  },
  {
    naam: "twee-reeksen",
    maak(r) {
      const a0 = tussen(r, 2, 15), b0 = tussen(r, 30, 70);
      const da = tussen(r, 2, 9), db = -tussen(r, 2, 8);
      const zichtbaar = [];
      for (let i = 0; i < 3; i++) { zichtbaar.push(a0 + i * da); zichtbaar.push(b0 + i * db); }
      const juist = a0 + 3 * da;
      if (juist >= b0 + 2 * db) return null;
      return {
        zichtbaar, juist,
        kand: [b0 + 3 * db, zichtbaar[5] + da, zichtbaar[5] + db, juist + da, juist - da],
        uit: (t) => T[t].twee(teken(da), teken(db), teken(da)),
      };
    },
  },
  {
    naam: "afwisselend-plus-maal",
    maak(r) {
      const start = tussen(r, 2, 9), b = tussen(r, 2, 9), k = tussen(r, 2, 3);
      const v = [start];
      for (let i = 0; i < 5; i++) v.push(i % 2 === 0 ? v[v.length - 1] + b : v[v.length - 1] * k);
      const zichtbaar = v.slice(0, 5), juist = v[5];
      return {
        zichtbaar, juist,
        kand: [zichtbaar[4] * k, zichtbaar[4] + b * k, juist + b, juist - b, juist * k],
        uit: (t) => T[t].afwisselend(`+${b}`, `\u00d7${k}`, juist),
      };
    },
  },
  {
    naam: "kwadraten",
    maak(r) {
      const start = tussen(r, 2, 8), c = tussen(r, 0, 4) - 2;
      const zichtbaar = [];
      for (let i = 0; i < 5; i++) { const n = start + i; zichtbaar.push(n * n + c); }
      const n = start + 5, juist = n * n + c;
      if (zichtbaar.some((x) => x <= 0)) return null;
      const merk = c === 0 ? `${n}\u00b2 = ${juist}` : c > 0 ? `${n}\u00b2 + ${c} = ${juist}` : `${n}\u00b2 - ${Math.abs(c)} = ${juist}`;
      return {
        zichtbaar, juist,
        kand: [zichtbaar[4] + (zichtbaar[4] - zichtbaar[3]), juist + n, juist - n, juist + 2, juist - 2],
        uit: (t) => T[t].kwadraat(merk),
      };
    },
  },
  {
    naam: "deel-plus",
    maak(r) {
      const k = tussen(r, 2, 4), b = k * tussen(r, 1, 4);
      const start = tussen(r, 4, 9) * Math.pow(k, 3);
      const v = [start];
      for (let i = 0; i < 5; i++) v.push(i % 2 === 0 ? v[v.length - 1] / k : v[v.length - 1] + b);
      if (!v.every((x) => Number.isInteger(x) && x > 0)) return null;
      const zichtbaar = v.slice(0, 5), juist = v[5];
      return {
        zichtbaar, juist,
        kand: [zichtbaar[4] - b, zichtbaar[4] / k, juist + b, juist * k, juist - 1],
        uit: (t) => T[t].deelMaal(`\u00f7${k}`, `+${b}`, juist),
      };
    },
  },
];

// De twee reeksen uit de instructie van de echte afname blijven hier weg.
const VOORBEELDEN = new Set(["1,3,6,10,15,21", "3,6,12,24,48"]);

export function bouwNumeriek(aantal = 250, zaad = 20260311) {
  const r = rng(zaad);
  const items = [];
  const gezien = new Set();
  let poging = 0;
  while (items.length < aantal && poging < aantal * 400) {
    const s = SJABLONEN[poging % SJABLONEN.length];
    poging++;
    const p = s.maak(r);
    if (!p) continue;
    if (p.juist > 60000) continue;
    const sleutel = p.zichtbaar.join(",");
    if (VOORBEELDEN.has(sleutel)) continue;
    if (gezien.has(sleutel)) continue;
    const afl = afleiders(r, p.juist, p.kand, p.zichtbaar);
    if (!afl) continue;
    const waarden = [p.juist, ...afl].sort((a, b) => a - b);
    if (new Set(waarden).size !== 5) continue;
    gezien.add(sleutel);
    const id = `num-${String(items.length + 1).padStart(3, "0")}`;
    items.push({
      id, soort: s.naam,
      q: Object.fromEntries(TALEN.map((t) => [t, VRAAG[t]])),
      reeks: [...p.zichtbaar.map(String), "?"],
      opties: Object.fromEntries(TALEN.map((t) => [t, waarden.map(String)])),
      juist: waarden.indexOf(p.juist),
      uitleg: Object.fromEntries(TALEN.map((t) => [t, p.uit(t)])),
    });
  }
  return items;
}
