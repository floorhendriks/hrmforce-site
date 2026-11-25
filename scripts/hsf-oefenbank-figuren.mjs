// Figuurvragen. Twee onderdelen:
//   abstract  = figuren draaien: welke figuur is dezelfde, alleen gedraaid
//   ruimtelijk = figuren vouwen: welke kubus komt uit deze uitslag
// Beide worden als SVG gegenereerd, dus taalonafhankelijk op één instructie na.
import { rng, tussen, schud } from "./hsf-oefenbank-lib.mjs";


const TALEN = ["nl", "en", "de", "fr", "es", "ro", "it", "pt", "tr", "fi", "nb", "el", "cs", "uk", "hu", "lt", "bg", "sk", "sl", "et", "lv", "hr", "sr", "ru"];
const NAVY = "#0E468C";
const GOUD = "#fcc11b";
const LIJN = "#c9d4e4";

/* ---------------------------------------------------------------- draaien */

const VRAAG_A = {
  nl: "Welke figuur is dezelfde als de figuur hierboven, alleen gedraaid?",
  en: "Which figure is the same as the one above, only rotated?",
  de: "Welche Figur ist dieselbe wie oben, nur gedreht?",
  fr: "Quelle figure est identique à celle du haut, mais tournée ?",
  es: "¿Qué figura es la misma que la de arriba, solo que girada?",
  ro: "Care figură este aceeași cu cea de sus, doar rotită?",
  it: "Quale figura è uguale a quella in alto, solo ruotata?",
  pt: "Que figura é igual à de cima, apenas rodada?",
  tr: "Hangi şekil üstteki şekille aynı, yalnızca döndürülmüş?",
  fi: "Mikä kuvio on sama kuin ylempi, vain käännettynä?",
  nb: "Hvilken figur er den samme som den øverste, bare rotert?",
  el: "Ποιο σχήμα είναι ίδιο με το επάνω, απλώς περιστραμμένο;",
  cs: "Který obrazec je stejný jako ten nahoře, jen otočený?",
  uk: "Яка фігура така сама, як верхня, лише повернута?",
  hu: "Melyik alakzat ugyanaz, mint a felső, csak elforgatva?",
  lt: "Kuri figūra yra tokia pati kaip viršutinė, tik pasukta?",
  bg: "Коя фигура е същата като горната, само завъртяна?",
  sk: "Ktorý útvar je rovnaký ako ten hore, len otočený?",
  sl: "Kateri lik je enak zgornjemu, le zasukan?",
  et: "Milline kujund on sama mis ülemine, ainult pööratud?",
  lv: "Kura figūra ir tāda pati kā augšējā, tikai pagriezta?",
  hr: "Koji je lik isti kao gornji, samo zakrenut?",
  sr: "Koja figura je ista kao gornja, samo zarotirana?",
  ru: "Какая фигура такая же, как верхняя, только повёрнутая?",
};

const UITLEG_A = {
  nl: (g) => `Alleen deze figuur is de oorspronkelijke figuur, ${g} graden gedraaid. De andere vier zijn spiegelbeelden of hebben een blokje op een andere plaats.`,
  en: (g) => `Only this figure is the original rotated by ${g} degrees. The other four are mirror images or have a block in a different place.`,
  de: (g) => `Nur diese Figur ist das Original, um ${g} Grad gedreht. Die anderen vier sind Spiegelbilder oder haben einen Block an anderer Stelle.`,
  fr: (g) => `Seule cette figure est l'originale tournée de ${g} degrés. Les quatre autres sont des images miroir ou ont un bloc déplacé.`,
  es: (g) => `Solo esta figura es la original girada ${g} grados. Las otras cuatro son imágenes reflejadas o tienen un bloque en otro sitio.`,
  ro: (g) => `Doar această figură este cea originală, rotită cu ${g} grade. Celelalte patru sunt imagini în oglindă sau au un bloc mutat.`,
  it: (g) => `Solo questa figura è l'originale ruotata di ${g} gradi. Le altre quattro sono immagini speculari o hanno un blocco in un'altra posizione.`,
  pt: (g) => `Só esta figura é a original rodada ${g} graus. As outras quatro são imagens espelhadas ou têm um bloco noutra posição.`,
  tr: (g) => `Yalnızca bu şekil, ${g} derece döndürülmüş orijinal şekildir. Diğer dördü ayna görüntüsüdür ya da bir bloğu başka yerdedir.`,
  fi: (g) => `Vain tämä kuvio on alkuperäinen ${g} astetta käännettynä. Muut neljä ovat peilikuvia tai niissä yksi palikka on eri paikassa.`,
  nb: (g) => `Bare denne figuren er originalen rotert ${g} grader. De fire andre er speilbilder eller har en blokk et annet sted.`,
  el: (g) => `Μόνο αυτό το σχήμα είναι το αρχικό περιστραμμένο κατά ${g} μοίρες. Τα άλλα τέσσερα είναι κατοπτρικά ή έχουν ένα κομμάτι σε άλλη θέση.`,
  cs: (g) => `Jen tento obrazec je původní, otočený o ${g} stupňů. Ostatní čtyři jsou zrcadlové nebo mají jeden blok jinde.`,
  uk: (g) => `Лише ця фігура є оригіналом, повернутим на ${g} градусів. Інші чотири дзеркальні або мають блок в іншому місці.`,
  hu: (g) => `Csak ez az alakzat az eredeti, ${g} fokkal elforgatva. A másik négy tükörkép, vagy egy blokkja máshol van.`,
  lt: (g) => `Tik ši figūra yra originalas, pasuktas ${g}°. Kitos keturios yra veidrodinės arba vienas jų blokas yra kitoje vietoje.`,
  bg: (g) => `Само тази фигура е оригиналът, завъртян на ${g}°. Останалите четири са огледални или имат блок на друго място.`,
  sk: (g) => `Iba tento útvar je pôvodný, otočený o ${g}°. Ostatné štyri sú zrkadlové alebo majú jeden blok inde.`,
  sl: (g) => `Samo ta lik je izvirnik, zasukan za ${g}°. Ostali štirje so zrcalni ali imajo en blok drugje.`,
  et: (g) => `Ainult see kujund on originaal, mida on pööratud ${g}°. Ülejäänud neli on peegelpildid või on neil üks klots teises kohas.`,
  lv: (g) => `Tikai šī figūra ir oriģināls, pagriezts par ${g}°. Pārējās četras ir spoguļattēli vai tām viens bloks ir citā vietā.`,
  hr: (g) => `Samo je ovaj lik izvornik zakrenut za ${g}°. Ostala četiri su zrcalna ili imaju jedan blok na drugom mjestu.`,
  sr: (g) => `Samo je ova figura original zarotiran za ${g}°. Ostale četiri su preslikane ili imaju jedan blok na drugom mestu.`,
  ru: (g) => `Только эта фигура является оригиналом, повёрнутым на ${g}°. Остальные четыре зеркальные или в них один блок стоит в другом месте.`,
};

const N = 4;
const spec = (f) => `${[...f.blokken].sort().join(";")}|${f.stip}`;
const sleutelVan = spec;
const cel = (x, y) => `${x},${y}`;
const ontleed = (s) => s.split(",").map(Number);

function draai(f) {
  const d = ([x, y]) => cel(N - 1 - y, x);
  return { blokken: f.blokken.map((c) => d(ontleed(c))), stip: d(ontleed(f.stip)) };
}
function spiegel(f) {
  const s = ([x, y]) => cel(N - 1 - x, y);
  return { blokken: f.blokken.map((c) => s(ontleed(c))), stip: s(ontleed(f.stip)) };
}
function draaiN(f, n) { let g = f; for (let i = 0; i < n; i++) g = draai(g); return g; }

function maakFiguur(r) {
  const cellen = [];
  for (let x = 0; x < N; x++) for (let y = 0; y < N; y++) cellen.push(cel(x, y));
  const aantal = tussen(r, 4, 6);
  const gekozen = [];
  while (gekozen.length < aantal + 1) {
    const c = cellen[Math.floor(r() * cellen.length)];
    if (!gekozen.includes(c)) gekozen.push(c);
  }
  const f = { blokken: gekozen.slice(0, aantal), stip: gekozen[aantal] };
  // chiraal: het spiegelbeeld mag in geen enkele draaiing gelijk zijn aan het origineel
  const eigen = sleutelVan(f);
  for (let i = 0; i < 4; i++) if (sleutelVan(draaiN(spiegel(f), i)) === eigen) return null;
  // en de figuur zelf mag geen draaisymmetrie hebben, anders zijn twee opties gelijk
  for (let i = 1; i < 4; i++) if (sleutelVan(draaiN(f, i)) === eigen) return null;
  return f;
}

function verplaats(r, f) {
  const bezet = new Set([...f.blokken, f.stip]);
  const vrij = [];
  for (let x = 0; x < N; x++) for (let y = 0; y < N; y++) if (!bezet.has(cel(x, y))) vrij.push(cel(x, y));
  if (!vrij.length) return null;
  const uit = Math.floor(r() * f.blokken.length);
  const naar = vrij[Math.floor(r() * vrij.length)];
  const blokken = f.blokken.slice();
  blokken[uit] = naar;
  return { blokken, stip: f.stip };
}

export function bouwAbstract(aantal = 250, zaad = 20260518) {
  const r = rng(zaad);
  const items = [];
  const gezien = new Set();
  let poging = 0;
  while (items.length < aantal && poging < aantal * 500) {
    poging++;
    const f = maakFiguur(r);
    if (!f) continue;
    const s = sleutelVan(f);
    if (gezien.has(s)) continue;

    const hoek = [90, 180, 270][tussen(r, 0, 2)];
    const juist = draaiN(f, hoek / 90);
    const sp = spiegel(f);
    const kandidaten = [
      draaiN(sp, tussen(r, 0, 3)),
      draaiN(sp, tussen(r, 0, 3)),
      verplaats(r, f),
      verplaats(r, f),
      draaiN(sp, tussen(r, 0, 3)),
    ].filter(Boolean).map((g) => draaiN(g, tussen(r, 0, 3)));

    // geen afleider mag toevallig samenvallen met een draaiing van het origineel
    const eigenDraaiingen = new Set([0, 1, 2, 3].map((i) => sleutelVan(draaiN(f, i))));
    const uniek = [];
    const sleutels = new Set([sleutelVan(juist)]);
    for (const k of kandidaten) {
      const ks = sleutelVan(k);
      if (sleutels.has(ks) || eigenDraaiingen.has(ks)) continue;
      sleutels.add(ks); uniek.push(k);
      if (uniek.length === 4) break;
    }
    if (uniek.length < 4) continue;
    gezien.add(s);

    const { waarden, juistIndex } = schud(r, juist, uniek);
    const id = `abs-${String(items.length + 1).padStart(3, "0")}`;
    items.push({
      id, soort: "draaien", html: true,
      q: Object.fromEntries(TALEN.map((t) => [t, VRAAG_A[t]])),
      beeld: spec(f),
      opties: Object.fromEntries(TALEN.map((t) => [t, waarden.map((g) => spec(g))])),
      juist: juistIndex,
      uitleg: Object.fromEntries(TALEN.map((t) => [t, UITLEG_A[t](hoek)])),
    });
  }
  return items;
}

/* ---------------------------------------------------------------- vouwen */

const VRAAG_R = {
  nl: "Welke kubus kun je vouwen uit deze uitslag?",
  en: "Which cube can be folded from this net?",
  de: "Welcher Würfel lässt sich aus diesem Netz falten?",
  fr: "Quel cube peut-on plier à partir de ce patron ?",
  es: "¿Qué cubo se puede plegar con este desarrollo?",
  ro: "Ce cub se poate plia din această desfășurare?",
  it: "Quale cubo si può piegare da questo sviluppo?",
  pt: "Que cubo se pode dobrar a partir desta planificação?",
  tr: "Bu açınımdan hangi küp katlanabilir?",
  fi: "Minkä kuution voi taittaa tästä levityksestä?",
  nb: "Hvilken kube kan brettes av denne utbrettingen?",
  el: "Ποιος κύβος μπορεί να διπλωθεί από αυτό το ανάπτυγμα;",
  cs: "Kterou krychli lze složit z této sítě?",
  uk: "Який куб можна скласти з цієї розгортки?",
  hu: "Melyik kocka hajtható össze ebből a kiterített hálóból?",
  lt: "Kurį kubą galima sulankstyti iš šios išklotinės?",
  bg: "Кой куб може да се сгъне от тази развивка?",
  sk: "Ktorú kocku možno zložiť z tejto siete?",
  sl: "Katero kocko je mogoče zložiti iz te mreže?",
  et: "Millise kuubi saab sellest laotusest kokku voltida?",
  lv: "Kuru kubu var salocīt no šī izklājuma?",
  hr: "Koja se kocka može složiti od ove mreže?",
  sr: "Koja kocka može da se složi od ove mreže?",
  ru: "Какой куб можно сложить из этой развёртки?",
};

const TEKENS = {
  nl: ["cirkel", "driehoek", "vierkant", "kruis", "ster", "balk"],
  en: ["circle", "triangle", "square", "cross", "star", "bar"],
  de: ["Kreis", "Dreieck", "Quadrat", "Kreuz", "Stern", "Balken"],
  fr: ["cercle", "triangle", "carré", "croix", "étoile", "barre"],
  es: ["círculo", "triángulo", "cuadrado", "cruz", "estrella", "barra"],
  ro: ["cerc", "triunghi", "pătrat", "cruce", "stea", "bară"],
  it: ["cerchio", "triangolo", "quadrato", "croce", "stella", "barra"],
  pt: ["círculo", "triângulo", "quadrado", "cruz", "estrela", "barra"],
  tr: ["daire", "üçgen", "kare", "artı", "yıldız", "çubuk"],
  fi: ["ympyrä", "kolmio", "neliö", "risti", "tähti", "palkki"],
  nb: ["sirkel", "trekant", "firkant", "kryss", "stjerne", "strek"],
  el: ["κύκλος", "τρίγωνο", "τετράγωνο", "σταυρός", "αστέρι", "μπάρα"],
  cs: ["kruh", "trojúhelník", "čtverec", "kříž", "hvězda", "pruh"],
  uk: ["коло", "трикутник", "квадрат", "хрест", "зірка", "смуга"],
  hu: ["kör", "háromszög", "négyzet", "kereszt", "csillag", "csík"],
  lt: ["apskritimas", "trikampis", "kvadratas", "kryžius", "žvaigždė", "juosta"],
  bg: ["кръг", "триъгълник", "квадрат", "кръст", "звезда", "лента"],
  sk: ["kruh", "trojuholník", "štvorec", "kríž", "hviezda", "pruh"],
  sl: ["krog", "trikotnik", "kvadrat", "križ", "zvezda", "črta"],
  et: ["ring", "kolmnurk", "ruut", "rist", "täht", "triip"],
  lv: ["aplis", "trijstūris", "kvadrāts", "krusts", "zvaigzne", "josla"],
  hr: ["krug", "trokut", "kvadrat", "križ", "zvijezda", "traka"],
  sr: ["krug", "trougao", "kvadrat", "krst", "zvezda", "traka"],
  ru: ["круг", "треугольник", "квадрат", "крест", "звезда", "полоса"],
};

const UITLEG_R = {
  nl: (f, r2, u) => `Vouw je de uitslag dicht, dan komen ${f}, ${r2} en ${u} om één hoek bij elkaar te liggen, in deze volgorde. Bij de andere vier kubussen staan vlakken naast elkaar die op de kubus juist tegenover elkaar liggen, of staan ze in de verkeerde draairichting.`,
  en: (f, r2, u) => `Fold the net and ${f}, ${r2} and ${u} meet at one corner, in this order. On the other four cubes, faces sit next to each other that are opposite on the cube, or they appear in the wrong rotational order.`,
  de: (f, r2, u) => `Faltet man das Netz, treffen ${f}, ${r2} und ${u} in dieser Reihenfolge an einer Ecke zusammen. Bei den anderen vier Würfeln liegen Flächen nebeneinander, die sich am Würfel gegenüberliegen, oder sie stehen in der falschen Drehrichtung.`,
  fr: (f, r2, u) => `En pliant le patron, ${f}, ${r2} et ${u} se rejoignent à un même coin, dans cet ordre. Sur les quatre autres cubes, des faces opposées se retrouvent côte à côte, ou l'ordre de rotation est inversé.`,
  es: (f, r2, u) => `Al plegar el desarrollo, ${f}, ${r2} y ${u} coinciden en una misma esquina, en este orden. En los otros cuatro cubos hay caras contiguas que en realidad son opuestas, o el orden de giro es el contrario.`,
  ro: (f, r2, u) => `Dacă plieți desfășurarea, ${f}, ${r2} și ${u} se întâlnesc într-un colț, în această ordine. La ceilalți patru cubi apar alăturate fețe care pe cub sunt opuse, sau ordinea de rotație este greșită.`,
  it: (f, r2, u) => `Piegando lo sviluppo, ${f}, ${r2} e ${u} si incontrano in uno stesso angolo, in quest'ordine. Negli altri quattro cubi compaiono affiancate facce che sul cubo sono opposte, oppure l'ordine di rotazione è invertito.`,
  pt: (f, r2, u) => `Ao dobrar a planificação, ${f}, ${r2} e ${u} encontram-se no mesmo vértice, por esta ordem. Nos outros quatro cubos aparecem lado a lado faces que no cubo são opostas, ou a ordem de rotação está invertida.`,
  tr: (f, r2, u) => `Açınım katlandığında ${f}, ${r2} ve ${u} bu sırayla aynı köşede birleşir. Diğer dört küpte, küpte karşılıklı olan yüzler yan yana görünür ya da dönüş sırası terstir.`,
  fi: (f, r2, u) => `Kun levitys taitetaan, ${f}, ${r2} ja ${u} kohtaavat samassa kulmassa tässä järjestyksessä. Muissa neljässä kuutiossa vierekkäin on tahkoja, jotka kuutiossa ovat vastakkain, tai kiertojärjestys on väärä.`,
  nb: (f, r2, u) => `Når utbrettingen brettes, møtes ${f}, ${r2} og ${u} i samme hjørne, i denne rekkefølgen. På de fire andre kubene står sider ved siden av hverandre som er motsatte på kuben, eller rotasjonsrekkefølgen er feil.`,
  el: (f, r2, u) => `Όταν διπλωθεί το ανάπτυγμα, τα ${f}, ${r2} και ${u} συναντώνται στην ίδια γωνία με αυτή τη σειρά. Στους άλλους τέσσερις κύβους εμφανίζονται δίπλα δίπλα έδρες που στον κύβο είναι απέναντι, ή η σειρά περιστροφής είναι λάθος.`,
  cs: (f, r2, u) => `Po složení sítě se ${f}, ${r2} a ${u} setkají v jednom rohu v tomto pořadí. U ostatních čtyř krychlí jsou vedle sebe stěny, které jsou na krychli protilehlé, nebo je pořadí otáčení obrácené.`,
  uk: (f, r2, u) => `Якщо скласти розгортку, ${f}, ${r2} і ${u} сходяться в одному куті саме в такому порядку. На інших чотирьох кубах поруч стоять грані, які на кубі протилежні, або порядок обертання неправильний.`,
  hu: (f, r2, u) => `A háló összehajtásakor a(z) ${f}, ${r2} és ${u} ebben a sorrendben egy csúcsban találkozik. A másik négy kockán olyan lapok kerülnek egymás mellé, amelyek a kockán szemben vannak, vagy fordított a forgási sorrend.`,
  lt: (f, r2, u) => `Sulanksčius išklotinę, ${f}, ${r2} ir ${u} susitinka viename kampe būtent tokia tvarka. Kituose keturiuose kubuose greta yra sienos, kurios kube yra priešingos, arba neteisinga sukimosi tvarka.`,
  bg: (f, r2, u) => `Когато развивката се сгъне, ${f}, ${r2} и ${u} се срещат в един ъгъл точно в този ред. При другите четири куба един до друг стоят стени, които на куба са срещуположни, или редът на въртене е грешен.`,
  sk: (f, r2, u) => `Po zložení siete sa ${f}, ${r2} a ${u} stretnú v jednom rohu v tomto poradí. Pri ostatných štyroch kockách sú vedľa seba steny, ktoré sú na kocke protiľahlé, alebo je poradie otáčania nesprávne.`,
  sl: (f, r2, u) => `Ko mrežo zložimo, se ${f}, ${r2} in ${u} srečajo v istem oglišču v tem vrstnem redu. Na ostalih štirih kockah so druga ob drugi ploskve, ki so na kocki nasprotne, ali pa je vrstni red vrtenja napačen.`,
  et: (f, r2, u) => `Kui laotus kokku voltida, kohtuvad ${f}, ${r2} ja ${u} ühes nurgas just selles järjekorras. Ülejäänud neljal kuubil on kõrvuti tahud, mis kuubil on vastastikku, või on pöörlemise järjekord vale.`,
  lv: (f, r2, u) => `Salokot izklājumu, ${f}, ${r2} un ${u} satiekas vienā stūrī tieši šādā secībā. Pārējos četros kubos blakus atrodas skaldnes, kas kubā ir pretējas, vai griešanās secība ir nepareiza.`,
  hr: (f, r2, u) => `Kada se mreža složi, ${f}, ${r2} i ${u} susreću se u istom kutu upravo ovim redoslijedom. Na ostalim četirima kockama jedna do druge stoje strane koje su na kocki nasuprotne, ili je redoslijed okretanja pogrešan.`,
  sr: (f, r2, u) => `Kada se mreža složi, ${f}, ${r2} i ${u} sastaju se u istom uglu baš ovim redosledom. Na ostale četiri kocke jedna do druge stoje strane koje su na kocki naspramne, ili je redosled okretanja pogrešan.`,
  ru: (f, r2, u) => `Если сложить развёртку, ${f}, ${r2} и ${u} сходятся в одном углу именно в таком порядке. На остальных четырёх кубах рядом стоят грани, которые на кубе противоположны, или порядок вращения неверный.`,
};

// De 24 standen van een kubus, opgebouwd uit drie basisdraaiingen.
function standen() {
  const start = { U: "U", D: "D", F: "F", B: "B", L: "L", R: "R" };
  const rx = (o) => ({ U: o.F, F: o.D, D: o.B, B: o.U, L: o.L, R: o.R });
  const ry = (o) => ({ F: o.R, R: o.B, B: o.L, L: o.F, U: o.U, D: o.D });
  const rz = (o) => ({ U: o.L, L: o.D, D: o.R, R: o.U, F: o.F, B: o.B });
  const sleutel = (o) => ["U", "D", "F", "B", "L", "R"].map((k) => o[k]).join("");
  const zien = new Map([[sleutel(start), start]]);
  let rand = [start];
  while (rand.length) {
    const volgend = [];
    for (const o of rand) for (const fn of [rx, ry, rz]) {
      const n = fn(o), k = sleutel(n);
      if (!zien.has(k)) { zien.set(k, n); volgend.push(n); }
    }
    rand = volgend;
  }
  return [...zien.values()];
}
const STANDEN = standen();

export function bouwRuimtelijk(aantal = 250, zaad = 20260619) {
  const r = rng(zaad);
  const items = [];
  const gezien = new Set();
  const RICHTINGEN = ["U", "D", "F", "B", "L", "R"];
  let poging = 0;
  while (items.length < aantal && poging < aantal * 500) {
    poging++;
    // zes verschillende tekens over de zes vlakken van de uitslag
    const tekens = [0, 1, 2, 3, 4, 5];
    for (let i = tekens.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [tekens[i], tekens[j]] = [tekens[j], tekens[i]]; }
    const vlak = Object.fromEntries(RICHTINGEN.map((k, i) => [k, tekens[i]]));
    const sleutel = RICHTINGEN.map((k) => vlak[k]).join("");
    if (gezien.has(sleutel)) continue;

    // alle zichtbare drietallen (voor, rechts, boven) die echt kunnen
    const kan = new Set(STANDEN.map((o) => `${vlak[o.F]},${vlak[o.R]},${vlak[o.U]}`));
    const goed = [...kan][tussen(r, 0, kan.size - 1)].split(",").map(Number);
    // afleiders: drietallen die er plausibel uitzien maar niet kunnen
    const fout = [];
    const probeer = [];
    for (const k of kan) {
      const [a, b, c] = k.split(",").map(Number);
      probeer.push([b, a, c], [a, c, b], [c, b, a]);
    }
    for (let i = probeer.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [probeer[i], probeer[j]] = [probeer[j], probeer[i]]; }
    for (const p of probeer) {
      const k = p.join(",");
      if (kan.has(k)) continue;
      if (fout.some((q) => q.join(",") === k)) continue;
      fout.push(p);
      if (fout.length === 4) break;
    }
    if (fout.length < 4) continue;
    gezien.add(sleutel);

    const { waarden, juistIndex } = schud(r, goed, fout);
    const id = `rui-${String(items.length + 1).padStart(3, "0")}`;
    items.push({
      id, soort: "vouwen", html: true,
      q: Object.fromEntries(TALEN.map((t) => [t, VRAAG_R[t]])),
      beeld: RICHTINGEN.map((k) => vlak[k]).join(""),
      opties: Object.fromEntries(TALEN.map((t) => [t, waarden.map((v) => v.join(""))])),
      juist: juistIndex,
      uitleg: Object.fromEntries(TALEN.map((t) => [t, UITLEG_R[t](TEKENS[t][goed[0]], TEKENS[t][goed[1]], TEKENS[t][goed[2]])])),
    });
  }
  return items;
}
