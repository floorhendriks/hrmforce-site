// Numeriek redeneren: cijfers uit een bedrijfscontext interpreteren.
// Acht sjablonen, elk met eigen parameters en met afleiders die veelgemaakte
// denkfouten weergeven. Draaien via npm run hsf:oefenbank.
import { rng, kies, tussen, getal, euro, procent, item, schud } from "./hsf-oefenbank-lib.mjs";

const T = {
  // 1. procentuele verandering
  groei: {
    tekst: {
      nl: (p) => `Een team verwerkte vorig kwartaal ${getal(p.a,"nl")} aanvragen en dit kwartaal ${getal(p.b,"nl")}. Met hoeveel procent is dat gestegen?`,
      en: (p) => `A team handled ${getal(p.a,"en")} requests last quarter and ${getal(p.b,"en")} this quarter. By what percentage did that rise?`,
      de: (p) => `Ein Team bearbeitete im letzten Quartal ${getal(p.a,"de")} Anfragen und in diesem Quartal ${getal(p.b,"de")}. Um wie viel Prozent ist das gestiegen?`,
      fr: (p) => `Une équipe a traité ${getal(p.a,"fr")} demandes le trimestre dernier et ${getal(p.b,"fr")} ce trimestre. De quel pourcentage cela a-t-il augmenté ?`,
      es: (p) => `Un equipo tramitó ${getal(p.a,"es")} solicitudes el trimestre pasado y ${getal(p.b,"es")} este trimestre. ¿En qué porcentaje ha aumentado?`,
      ro: (p) => `O echipă a procesat ${getal(p.a,"ro")} cereri trimestrul trecut și ${getal(p.b,"ro")} în acest trimestru. Cu ce procent a crescut?`,
      it: (p) => `Un team ha gestito ${getal(p.a,"it")} richieste lo scorso trimestre e ${getal(p.b,"it")} in questo trimestre. Di che percentuale sono aumentate?`,
      pt: (p) => `Uma equipa tratou ${getal(p.a,"pt")} pedidos no trimestre passado e ${getal(p.b,"pt")} neste trimestre. Em que percentagem aumentou?`,
      tr: (p) => `Bir ekip geçen çeyrekte ${getal(p.a,"tr")} talep, bu çeyrekte ${getal(p.b,"tr")} talep işledi. Artış yüzde kaç?`,
      fi: (p) => `Tiimi käsitteli viime neljänneksellä ${getal(p.a,"fi")} pyyntöä ja tällä neljänneksellä ${getal(p.b,"fi")}. Kuinka monta prosenttia määrä kasvoi?`,
      nb: (p) => `Et team behandlet ${getal(p.a,"nb")} henvendelser forrige kvartal og ${getal(p.b,"nb")} dette kvartalet. Med hvor mange prosent økte det?`,
      el: (p) => `Μια ομάδα χειρίστηκε ${getal(p.a,"el")} αιτήματα το προηγούμενο τρίμηνο και ${getal(p.b,"el")} το τρέχον τρίμηνο. Κατά τι ποσοστό αυξήθηκαν;`,
      cs: (p) => `Tým minulé čtvrtletí vyřídil ${getal(p.a,"cs")} požadavků a toto čtvrtletí ${getal(p.b,"cs")}. O kolik procent to vzrostlo?`,
      uk: (p) => `Команда опрацювала ${getal(p.a,"uk")} запитів минулого кварталу і ${getal(p.b,"uk")} цього кварталу. На скільки відсотків зросла кількість?`,
      hu: (p) => `Egy csapat az előző negyedévben ${getal(p.a,"hu")}, ebben a negyedévben ${getal(p.b,"hu")} kérést intézett. Hány százalékkal nőtt a szám?`,
      lt: (p) => `Komandos apdorotų užklausų skaičius: praėjusį ketvirtį ${getal(p.a,"lt")}, šį ketvirtį ${getal(p.b,"lt")}. Keliais procentais skaičius išaugo?`,
      bg: (p) => `Брой обработени от екип заявки: миналото тримесечие ${getal(p.a,"bg")}, това тримесечие ${getal(p.b,"bg")}. С колко процента е нараснал броят?`,
      sk: (p) => `Počet požiadaviek, ktoré tím vybavil: minulý štvrťrok ${getal(p.a,"sk")}, tento štvrťrok ${getal(p.b,"sk")}. O koľko percent počet vzrástol?`,
      sl: (p) => `Število zahtev, ki jih je obdelala ekipa: prejšnje četrtletje ${getal(p.a,"sl")}, to četrtletje ${getal(p.b,"sl")}. Za koliko odstotkov se je število povečalo?`,
      et: (p) => `Meeskond käsitles eelmises kvartalis ${getal(p.a,"et")} päringut ja selles kvartalis ${getal(p.b,"et")}. Mitu protsenti see kasvas?`,
      lv: (p) => `Komandas apstrādāto pieprasījumu skaits: iepriekšējā ceturksnī ${getal(p.a,"lv")}, šajā ceturksnī ${getal(p.b,"lv")}. Par cik procentiem skaits pieauga?`,
      hr: (p) => `Broj zahtjeva koje je tim obradio: prošlog tromjesečja ${getal(p.a,"hr")}, ovog tromjesečja ${getal(p.b,"hr")}. Za koliko je posto broj porastao?`,
      sr: (p) => `Broj zahteva koje je tim obradio: prošlog kvartala ${getal(p.a,"sr")}, ovog kvartala ${getal(p.b,"sr")}. Za koliko procenata je broj porastao?`,
      ru: (p) => `Число заявок, обработанных командой: в прошлом квартале ${getal(p.a,"ru")}, в этом квартале ${getal(p.b,"ru")}. На сколько процентов оно выросло?`,
    },
    uitleg: {
      nl: (p,j) => `Verschil is ${getal(p.b-p.a,"nl")}. Deel door het oude aantal: ${getal(p.b-p.a,"nl")} / ${getal(p.a,"nl")} = ${procent(j,"nl",1)}.`,
      en: (p,j) => `The difference is ${getal(p.b-p.a,"en")}. Divide by the old figure: ${getal(p.b-p.a,"en")} / ${getal(p.a,"en")} = ${procent(j,"en",1)}.`,
      de: (p,j) => `Die Differenz beträgt ${getal(p.b-p.a,"de")}. Geteilt durch den alten Wert: ${getal(p.b-p.a,"de")} / ${getal(p.a,"de")} = ${procent(j,"de",1)}.`,
      fr: (p,j) => `La différence est de ${getal(p.b-p.a,"fr")}. Divisez par l'ancien chiffre : ${getal(p.b-p.a,"fr")} / ${getal(p.a,"fr")} = ${procent(j,"fr",1)}.`,
      es: (p,j) => `La diferencia es ${getal(p.b-p.a,"es")}. Divide entre la cifra anterior: ${getal(p.b-p.a,"es")} / ${getal(p.a,"es")} = ${procent(j,"es",1)}.`,
      ro: (p,j) => `Diferența este ${getal(p.b-p.a,"ro")}. Împărțiți la valoarea veche: ${getal(p.b-p.a,"ro")} / ${getal(p.a,"ro")} = ${procent(j,"ro",1)}.`,
      it: (p,j) => `La differenza è ${getal(p.b-p.a,"it")}. Dividere per il valore precedente: ${getal(p.b-p.a,"it")} / ${getal(p.a,"it")} = ${procent(j,"it",1)}.`,
      pt: (p,j) => `A diferença é ${getal(p.b-p.a,"pt")}. Divida pelo valor anterior: ${getal(p.b-p.a,"pt")} / ${getal(p.a,"pt")} = ${procent(j,"pt",1)}.`,
      tr: (p,j) => `Fark ${getal(p.b-p.a,"tr")}. Önceki değere bölün: ${getal(p.b-p.a,"tr")} / ${getal(p.a,"tr")} = ${procent(j,"tr",1)}.`,
      fi: (p,j) => `Erotus on ${getal(p.b-p.a,"fi")}. Jaa aiemmalla arvolla: ${getal(p.b-p.a,"fi")} / ${getal(p.a,"fi")} = ${procent(j,"fi",1)}.`,
      nb: (p,j) => `Forskjellen er ${getal(p.b-p.a,"nb")}. Del på den forrige verdien: ${getal(p.b-p.a,"nb")} / ${getal(p.a,"nb")} = ${procent(j,"nb",1)}.`,
      el: (p,j) => `Η διαφορά είναι ${getal(p.b-p.a,"el")}. Διαιρέστε με την προηγούμενη τιμή: ${getal(p.b-p.a,"el")} / ${getal(p.a,"el")} = ${procent(j,"el",1)}.`,
      cs: (p,j) => `Rozdíl je ${getal(p.b-p.a,"cs")}. Vydělte předchozí hodnotou: ${getal(p.b-p.a,"cs")} / ${getal(p.a,"cs")} = ${procent(j,"cs",1)}.`,
      uk: (p,j) => `Різниця становить ${getal(p.b-p.a,"uk")}. Поділіть на попереднє значення: ${getal(p.b-p.a,"uk")} / ${getal(p.a,"uk")} = ${procent(j,"uk",1)}.`,
      hu: (p,j) => `A különbség ${getal(p.b-p.a,"hu")}. Osszuk el az előző értékkel: ${getal(p.b-p.a,"hu")} / ${getal(p.a,"hu")} = ${procent(j,"hu",1)}.`,
      lt: (p,j) => `Skirtumas yra ${getal(p.b-p.a,"lt")}. Padalykite iš ankstesnės reikšmės: ${getal(p.b-p.a,"lt")} / ${getal(p.a,"lt")} = ${procent(j,"lt",1)}.`,
      bg: (p,j) => `Разликата е ${getal(p.b-p.a,"bg")}. Разделете на предишната стойност: ${getal(p.b-p.a,"bg")} / ${getal(p.a,"bg")} = ${procent(j,"bg",1)}.`,
      sk: (p,j) => `Rozdiel je ${getal(p.b-p.a,"sk")}. Vydeľte predchádzajúcou hodnotou: ${getal(p.b-p.a,"sk")} / ${getal(p.a,"sk")} = ${procent(j,"sk",1)}.`,
      sl: (p,j) => `Razlika je ${getal(p.b-p.a,"sl")}. Delite s prejšnjo vrednostjo: ${getal(p.b-p.a,"sl")} / ${getal(p.a,"sl")} = ${procent(j,"sl",1)}.`,
      et: (p,j) => `Vahe on ${getal(p.b-p.a,"et")}. Jagage eelmise väärtusega: ${getal(p.b-p.a,"et")} / ${getal(p.a,"et")} = ${procent(j,"et",1)}.`,
      lv: (p,j) => `Starpība ir ${getal(p.b-p.a,"lv")}. Daliet ar iepriekšējo vērtību: ${getal(p.b-p.a,"lv")} / ${getal(p.a,"lv")} = ${procent(j,"lv",1)}.`,
      hr: (p,j) => `Razlika je ${getal(p.b-p.a,"hr")}. Podijelite s prethodnom vrijednošću: ${getal(p.b-p.a,"hr")} / ${getal(p.a,"hr")} = ${procent(j,"hr",1)}.`,
      sr: (p,j) => `Razlika je ${getal(p.b-p.a,"sr")}. Podelite prethodnom vrednošću: ${getal(p.b-p.a,"sr")} / ${getal(p.a,"sr")} = ${procent(j,"sr",1)}.`,
      ru: (p,j) => `Разница составляет ${getal(p.b-p.a,"ru")}. Разделите на прежнее значение: ${getal(p.b-p.a,"ru")} / ${getal(p.a,"ru")} = ${procent(j,"ru",1)}.`,
    },
    maak(r) {
      const a = tussen(r, 120, 900) * 2;
      const stijging = kies(r, [10, 12.5, 15, 20, 25, 30, 40, 50]);
      const b = Math.round(a * (1 + stijging / 100));
      const juist = Math.round(((b - a) / a) * 1000) / 10;
      const afl = [
        Math.round((((b - a) / b) * 100) * 10) / 10,   // deelt door het nieuwe getal
        Math.round(((b / a) * 100) * 10) / 10,          // geeft de index in plaats van de groei
        Math.round((b - a) / 10) / 1,                   // gebruikt het absolute verschil
      ];
      return { p: { a, b }, juist, afl, toon: (v, t) => procent(v, t, 1) };
    },
  },

  // 2. aandeel in het totaal
  aandeel: {
    tekst: {
      nl: (p) => `Van ${getal(p.tot,"nl")} sollicitanten kwamen er ${getal(p.deel,"nl")} door de eerste ronde. Welk deel is dat?`,
      en: (p) => `Of ${getal(p.tot,"en")} applicants, ${getal(p.deel,"en")} passed the first round. What share is that?`,
      de: (p) => `Von ${getal(p.tot,"de")} Bewerbern kamen ${getal(p.deel,"de")} durch die erste Runde. Welcher Anteil ist das?`,
      fr: (p) => `Sur ${getal(p.tot,"fr")} candidats, ${getal(p.deel,"fr")} ont passé le premier tour. Quelle part cela représente-t-il ?`,
      es: (p) => `De ${getal(p.tot,"es")} candidatos, ${getal(p.deel,"es")} pasaron la primera ronda. ¿Qué parte supone?`,
      ro: (p) => `Din ${getal(p.tot,"ro")} candidați, ${getal(p.deel,"ro")} au trecut de prima rundă. Ce parte reprezintă?`,
      it: (p) => `Su ${getal(p.tot,"it")} candidati, ${getal(p.deel,"it")} hanno superato il primo turno. Che quota rappresentano?`,
      pt: (p) => `De ${getal(p.tot,"pt")} candidatos, ${getal(p.deel,"pt")} passaram a primeira fase. Que parte representam?`,
      tr: (p) => `${getal(p.tot,"tr")} adaydan ${getal(p.deel,"tr")} kişi ilk turu geçti. Bu oran ne kadar?`,
      fi: (p) => `${getal(p.tot,"fi")} hakijasta ${getal(p.deel,"fi")} pääsi ensimmäiseltä kierrokselta eteenpäin. Kuinka suuri osuus se on?`,
      nb: (p) => `Av ${getal(p.tot,"nb")} kandidater gikk ${getal(p.deel,"nb")} videre fra første runde. Hvor stor andel er det?`,
      el: (p) => `Από ${getal(p.tot,"el")} υποψηφίους, ${getal(p.deel,"el")} πέρασαν τον πρώτο γύρο. Τι ποσοστό είναι αυτό;`,
      cs: (p) => `Z ${getal(p.tot,"cs")} kandidátů prošlo prvním kolem ${getal(p.deel,"cs")}. Jaký je to podíl?`,
      uk: (p) => `Із ${getal(p.tot,"uk")} кандидатів ${getal(p.deel,"uk")} пройшли перший етап. Яку частку це становить?`,
      hu: (p) => `${getal(p.tot,"hu")} jelöltből ${getal(p.deel,"hu")} jutott tovább az első fordulóból. Mekkora ez az arány?`,
      lt: (p) => `Kandidatų skaičius: ${getal(p.tot,"lt")}. Pirmąjį etapą iš jų įveikė: ${getal(p.deel,"lt")}. Kokią dalį tai sudaro?`,
      bg: (p) => `Брой кандидати: ${getal(p.tot,"bg")}. От тях ${getal(p.deel,"bg")} преминават първия кръг. Какъв дял е това?`,
      sk: (p) => `Počet uchádzačov: ${getal(p.tot,"sk")}. Prvým kolom z nich prešlo ${getal(p.deel,"sk")}. Aký je to podiel?`,
      sl: (p) => `Število kandidatov: ${getal(p.tot,"sl")}. Prvi krog je od njih opravilo ${getal(p.deel,"sl")}. Kolikšen delež je to?`,
      et: (p) => `${getal(p.tot,"et")} kandidaadist läbis esimese vooru ${getal(p.deel,"et")}. Kui suur osa see on?`,
      lv: (p) => `Kandidātu skaits: ${getal(p.tot,"lv")}. Pirmo kārtu no viņiem izturēja: ${getal(p.deel,"lv")}. Kāda daļa tā ir?`,
      hr: (p) => `Broj kandidata: ${getal(p.tot,"hr")}. Prvi krug prošlo je njih ${getal(p.deel,"hr")}. Koliki je to udio?`,
      sr: (p) => `Broj kandidata: ${getal(p.tot,"sr")}. Prvi krug je prošlo njih ${getal(p.deel,"sr")}. Koliki je to udeo?`,
      ru: (p) => `Число кандидатов: ${getal(p.tot,"ru")}. Первый этап прошли ${getal(p.deel,"ru")} из них. Какую долю это составляет?`,
    },
    uitleg: {
      nl: (p,j) => `${getal(p.deel,"nl")} / ${getal(p.tot,"nl")} = ${procent(j,"nl",1)}.`,
      en: (p,j) => `${getal(p.deel,"en")} / ${getal(p.tot,"en")} = ${procent(j,"en",1)}.`,
      de: (p,j) => `${getal(p.deel,"de")} / ${getal(p.tot,"de")} = ${procent(j,"de",1)}.`,
      fr: (p,j) => `${getal(p.deel,"fr")} / ${getal(p.tot,"fr")} = ${procent(j,"fr",1)}.`,
      es: (p,j) => `${getal(p.deel,"es")} / ${getal(p.tot,"es")} = ${procent(j,"es",1)}.`,
      ro: (p,j) => `${getal(p.deel,"ro")} / ${getal(p.tot,"ro")} = ${procent(j,"ro",1)}.`,
      it: (p,j) => `${getal(p.deel,"it")} / ${getal(p.tot,"it")} = ${procent(j,"it",1)}.`,
      pt: (p,j) => `${getal(p.deel,"pt")} / ${getal(p.tot,"pt")} = ${procent(j,"pt",1)}.`,
      tr: (p,j) => `${getal(p.deel,"tr")} / ${getal(p.tot,"tr")} = ${procent(j,"tr",1)}.`,
      fi: (p,j) => `${getal(p.deel,"fi")} / ${getal(p.tot,"fi")} = ${procent(j,"fi",1)}.`,
      nb: (p,j) => `${getal(p.deel,"nb")} / ${getal(p.tot,"nb")} = ${procent(j,"nb",1)}.`,
      el: (p,j) => `${getal(p.deel,"el")} / ${getal(p.tot,"el")} = ${procent(j,"el",1)}.`,
      cs: (p,j) => `${getal(p.deel,"cs")} / ${getal(p.tot,"cs")} = ${procent(j,"cs",1)}.`,
      uk: (p,j) => `${getal(p.deel,"uk")} / ${getal(p.tot,"uk")} = ${procent(j,"uk",1)}.`,
      hu: (p,j) => `${getal(p.deel,"hu")} / ${getal(p.tot,"hu")} = ${procent(j,"hu",1)}.`,
      lt: (p,j) => `${getal(p.deel,"lt")} / ${getal(p.tot,"lt")} = ${procent(j,"lt",1)}.`,
      bg: (p,j) => `${getal(p.deel,"bg")} / ${getal(p.tot,"bg")} = ${procent(j,"bg",1)}.`,
      sk: (p,j) => `${getal(p.deel,"sk")} / ${getal(p.tot,"sk")} = ${procent(j,"sk",1)}.`,
      sl: (p,j) => `${getal(p.deel,"sl")} / ${getal(p.tot,"sl")} = ${procent(j,"sl",1)}.`,
      et: (p,j) => `${getal(p.deel,"et")} / ${getal(p.tot,"et")} = ${procent(j,"et",1)}.`,
      lv: (p,j) => `${getal(p.deel,"lv")} / ${getal(p.tot,"lv")} = ${procent(j,"lv",1)}.`,
      hr: (p,j) => `${getal(p.deel,"hr")} / ${getal(p.tot,"hr")} = ${procent(j,"hr",1)}.`,
      sr: (p,j) => `${getal(p.deel,"sr")} / ${getal(p.tot,"sr")} = ${procent(j,"sr",1)}.`,
      ru: (p,j) => `${getal(p.deel,"ru")} / ${getal(p.tot,"ru")} = ${procent(j,"ru",1)}.`,
    },
    maak(r) {
      const tot = tussen(r, 15, 90) * 20;
      const pct = kies(r, [12.5, 15, 20, 25, 30, 35, 40]);
      const deel = Math.round(tot * pct / 100);
      const juist = Math.round((deel / tot) * 1000) / 10;
      const afl = [
        Math.round((tot / deel) * 10) / 10,                       // omgekeerde breuk
        Math.round(((tot - deel) / tot) * 1000) / 10,             // het deel dat afviel
        Math.round((deel / (tot - deel)) * 1000) / 10,            // deelt door de rest
      ];
      return { p: { tot, deel }, juist, afl, toon: (v, t) => procent(v, t, 1) };
    },
  },

  // 3. prijs per eenheid vergelijken
  stukprijs: {
    tekst: {
      nl: (p) => `Leverancier A vraagt ${euro(p.pa,"nl")} voor ${getal(p.qa,"nl")} licenties, leverancier B ${euro(p.pb,"nl")} voor ${getal(p.qb,"nl")}. Hoeveel scheelt de prijs per licentie?`,
      en: (p) => `Supplier A charges ${euro(p.pa,"en")} for ${getal(p.qa,"en")} licences, supplier B ${euro(p.pb,"en")} for ${getal(p.qb,"en")}. What is the difference per licence?`,
      de: (p) => `Anbieter A verlangt ${euro(p.pa,"de")} für ${getal(p.qa,"de")} Lizenzen, Anbieter B ${euro(p.pb,"de")} für ${getal(p.qb,"de")}. Wie groß ist der Unterschied je Lizenz?`,
      fr: (p) => `Le fournisseur A demande ${euro(p.pa,"fr")} pour ${getal(p.qa,"fr")} licences, le fournisseur B ${euro(p.pb,"fr")} pour ${getal(p.qb,"fr")}. Quel est l'écart par licence ?`,
      es: (p) => `El proveedor A cobra ${euro(p.pa,"es")} por ${getal(p.qa,"es")} licencias y el proveedor B ${euro(p.pb,"es")} por ${getal(p.qb,"es")}. ¿Cuál es la diferencia por licencia?`,
      ro: (p) => `Furnizorul A cere ${euro(p.pa,"ro")} pentru ${getal(p.qa,"ro")} licențe, furnizorul B ${euro(p.pb,"ro")} pentru ${getal(p.qb,"ro")}. Care este diferența per licență?`,
      it: (p) => `Il fornitore A chiede ${euro(p.pa,"it")} per ${getal(p.qa,"it")} licenze, il fornitore B ${euro(p.pb,"it")} per ${getal(p.qb,"it")}. Qual è la differenza per licenza?`,
      pt: (p) => `O fornecedor A pede ${euro(p.pa,"pt")} por ${getal(p.qa,"pt")} licenças, o fornecedor B ${euro(p.pb,"pt")} por ${getal(p.qb,"pt")}. Qual é a diferença por licença?`,
      tr: (p) => `A tedarikçisi ${getal(p.qa,"tr")} lisans için ${euro(p.pa,"tr")}, B tedarikçisi ${getal(p.qb,"tr")} lisans için ${euro(p.pb,"tr")} istiyor. Lisans başına fark ne kadar?`,
      fi: (p) => `Toimittaja A pyytää ${getal(p.qa,"fi")} lisenssistä ${euro(p.pa,"fi")}, toimittaja B ${getal(p.qb,"fi")} lisenssistä ${euro(p.pb,"fi")}. Mikä on ero lisenssiä kohden?`,
      nb: (p) => `Leverandør A tar ${euro(p.pa,"nb")} for ${getal(p.qa,"nb")} lisenser, leverandør B ${euro(p.pb,"nb")} for ${getal(p.qb,"nb")}. Hva er forskjellen per lisens?`,
      el: (p) => `Ο προμηθευτής Α ζητά ${euro(p.pa,"el")} για ${getal(p.qa,"el")} άδειες, ο προμηθευτής Β ${euro(p.pb,"el")} για ${getal(p.qb,"el")}. Ποια είναι η διαφορά ανά άδεια;`,
      cs: (p) => `Dodavatel A chce za ${getal(p.qa,"cs")} licencí ${euro(p.pa,"cs")}, dodavatel B za ${getal(p.qb,"cs")} licencí ${euro(p.pb,"cs")}. Jaký je rozdíl na jednu licenci?`,
      uk: (p) => `Постачальник А просить ${euro(p.pa,"uk")} за ${getal(p.qa,"uk")} ліцензій, постачальник Б ${euro(p.pb,"uk")} за ${getal(p.qb,"uk")}. Яка різниця за одну ліцензію?`,
      hu: (p) => `Az A szállító ${getal(p.qa,"hu")} licencért ${euro(p.pa,"hu")}, a B szállító ${getal(p.qb,"hu")} licencért ${euro(p.pb,"hu")} kér. Mekkora a különbség licencenként?`,
      lt: (p) => `Tiekėjas A už licencijas (${getal(p.qa,"lt")} vnt.) prašo ${euro(p.pa,"lt")}, tiekėjas B (${getal(p.qb,"lt")} vnt.) ${euro(p.pb,"lt")}. Koks skirtumas vienai licencijai?`,
      bg: (p) => `Доставчик А иска ${euro(p.pa,"bg")} за лицензи (${getal(p.qa,"bg")} бр.), доставчик Б ${euro(p.pb,"bg")} (${getal(p.qb,"bg")} бр.). Каква е разликата на един лиценз?`,
      sk: (p) => `Dodávateľ A chce za licencie (${getal(p.qa,"sk")} ks) ${euro(p.pa,"sk")}, dodávateľ B (${getal(p.qb,"sk")} ks) ${euro(p.pb,"sk")}. Aký je rozdiel na jednu licenciu?`,
      sl: (p) => `Dobavitelj A zahteva za licence (${getal(p.qa,"sl")} kos.) ${euro(p.pa,"sl")}, dobavitelj B (${getal(p.qb,"sl")} kos.) ${euro(p.pb,"sl")}. Kolikšna je razlika na licenco?`,
      et: (p) => `Tarnija A küsib ${getal(p.qa,"et")} litsentsi eest ${euro(p.pa,"et")}, tarnija B ${getal(p.qb,"et")} eest ${euro(p.pb,"et")}. Kui suur on vahe litsentsi kohta?`,
      lv: (p) => `Piegādātājs A par licencēm (${getal(p.qa,"lv")} gab.) prasa ${euro(p.pa,"lv")}, piegādātājs B (${getal(p.qb,"lv")} gab.) ${euro(p.pb,"lv")}. Kāda ir starpība par vienu licenci?`,
      hr: (p) => `Dobavljač A traži ${euro(p.pa,"hr")} za licence (${getal(p.qa,"hr")} kom.), dobavljač B ${euro(p.pb,"hr")} (${getal(p.qb,"hr")} kom.). Kolika je razlika po licenci?`,
      sr: (p) => `Dobavljač A traži ${euro(p.pa,"sr")} za licence (${getal(p.qa,"sr")} kom.), dobavljač B ${euro(p.pb,"sr")} (${getal(p.qb,"sr")} kom.). Kolika je razlika po licenci?`,
      ru: (p) => `Поставщик А берёт ${euro(p.pa,"ru")} за лицензии (${getal(p.qa,"ru")} шт.), поставщик Б ${euro(p.pb,"ru")} (${getal(p.qb,"ru")} шт.). Какова разница в цене одной лицензии?`,
    },
    uitleg: {
      nl: (p,j) => `A: ${euro(p.pa/p.qa,"nl",2)} per stuk. B: ${euro(p.pb/p.qb,"nl",2)}. Verschil ${euro(j,"nl",2)}.`,
      en: (p,j) => `A: ${euro(p.pa/p.qa,"en",2)} each. B: ${euro(p.pb/p.qb,"en",2)}. Difference ${euro(j,"en",2)}.`,
      de: (p,j) => `A: ${euro(p.pa/p.qa,"de",2)} je Stück. B: ${euro(p.pb/p.qb,"de",2)}. Differenz ${euro(j,"de",2)}.`,
      fr: (p,j) => `A : ${euro(p.pa/p.qa,"fr",2)} l'unité. B : ${euro(p.pb/p.qb,"fr",2)}. Écart ${euro(j,"fr",2)}.`,
      es: (p,j) => `A: ${euro(p.pa/p.qa,"es",2)} por unidad. B: ${euro(p.pb/p.qb,"es",2)}. Diferencia ${euro(j,"es",2)}.`,
      ro: (p,j) => `A: ${euro(p.pa/p.qa,"ro",2)} bucata. B: ${euro(p.pb/p.qb,"ro",2)}. Diferență ${euro(j,"ro",2)}.`,
      it: (p,j) => `A: ${euro(p.pa/p.qa,"it",2)} l'una. B: ${euro(p.pb/p.qb,"it",2)}. Differenza ${euro(j,"it",2)}.`,
      pt: (p,j) => `A: ${euro(p.pa/p.qa,"pt",2)} cada. B: ${euro(p.pb/p.qb,"pt",2)}. Diferença ${euro(j,"pt",2)}.`,
      tr: (p,j) => `A: tanesi ${euro(p.pa/p.qa,"tr",2)}. B: ${euro(p.pb/p.qb,"tr",2)}. Fark ${euro(j,"tr",2)}.`,
      fi: (p,j) => `A: ${euro(p.pa/p.qa,"fi",2)} kappaleelta. B: ${euro(p.pb/p.qb,"fi",2)}. Ero ${euro(j,"fi",2)}.`,
      nb: (p,j) => `A: ${euro(p.pa/p.qa,"nb",2)} per stk. B: ${euro(p.pb/p.qb,"nb",2)}. Forskjell ${euro(j,"nb",2)}.`,
      el: (p,j) => `Α: ${euro(p.pa/p.qa,"el",2)} η καθεμία. Β: ${euro(p.pb/p.qb,"el",2)}. Διαφορά ${euro(j,"el",2)}.`,
      cs: (p,j) => `A: ${euro(p.pa/p.qa,"cs",2)} za kus. B: ${euro(p.pb/p.qb,"cs",2)}. Rozdíl ${euro(j,"cs",2)}.`,
      uk: (p,j) => `А: ${euro(p.pa/p.qa,"uk",2)} за одиницю. Б: ${euro(p.pb/p.qb,"uk",2)}. Різниця ${euro(j,"uk",2)}.`,
      hu: (p,j) => `A: ${euro(p.pa/p.qa,"hu",2)} darabonként. B: ${euro(p.pb/p.qb,"hu",2)}. Különbség ${euro(j,"hu",2)}.`,
      lt: (p,j) => `A: ${euro(p.pa/p.qa,"lt",2)} už vienetą. B: ${euro(p.pb/p.qb,"lt",2)}. Skirtumas ${euro(j,"lt",2)}.`,
      bg: (p,j) => `А: ${euro(p.pa/p.qa,"bg",2)} на брой. Б: ${euro(p.pb/p.qb,"bg",2)}. Разлика ${euro(j,"bg",2)}.`,
      sk: (p,j) => `A: ${euro(p.pa/p.qa,"sk",2)} za kus. B: ${euro(p.pb/p.qb,"sk",2)}. Rozdiel ${euro(j,"sk",2)}.`,
      sl: (p,j) => `A: ${euro(p.pa/p.qa,"sl",2)} na kos. B: ${euro(p.pb/p.qb,"sl",2)}. Razlika ${euro(j,"sl",2)}.`,
      et: (p,j) => `A: ${euro(p.pa/p.qa,"et",2)} tükk. B: ${euro(p.pb/p.qb,"et",2)}. Vahe ${euro(j,"et",2)}.`,
      lv: (p,j) => `A: ${euro(p.pa/p.qa,"lv",2)} par gabalu. B: ${euro(p.pb/p.qb,"lv",2)}. Starpība ${euro(j,"lv",2)}.`,
      hr: (p,j) => `A: ${euro(p.pa/p.qa,"hr",2)} po komadu. B: ${euro(p.pb/p.qb,"hr",2)}. Razlika ${euro(j,"hr",2)}.`,
      sr: (p,j) => `A: ${euro(p.pa/p.qa,"sr",2)} po komadu. B: ${euro(p.pb/p.qb,"sr",2)}. Razlika ${euro(j,"sr",2)}.`,
      ru: (p,j) => `А: ${euro(p.pa/p.qa,"ru",2)} за штуку. Б: ${euro(p.pb/p.qb,"ru",2)}. Разница ${euro(j,"ru",2)}.`,
    },
    maak(r) {
      const qa = kies(r, [20, 25, 40, 50, 80, 100]);
      const qb = kies(r, [20, 25, 40, 50, 80, 100]);
      const ea = tussen(r, 12, 45), eb = ea + kies(r, [2, 3, 4, 5, 6, 8]);
      const pa = ea * qa, pb = eb * qb;
      const juist = Math.round(Math.abs(pb / qb - pa / qa) * 100) / 100;
      const afl = [
        Math.round(Math.abs(pb - pa) * 100) / 100,                       // totalen in plaats van stukprijs
        Math.round((pb / qb + pa / qa) * 100) / 100,                     // telt op in plaats van af
        Math.round(Math.abs(pb / qa - pa / qb) * 100) / 100,             // verwisselt de aantallen
      ];
      return { p: { pa, pb, qa, qb }, juist, afl, toon: (v, t) => euro(v, t, 2) };
    },
  },

  // 4. gemiddelde met een ontbrekende waarde
  gemiddelde: {
    tekst: {
      nl: (p) => `Vier vestigingen scoorden ${p.r.map(x=>getal(x,"nl")).join(", ")}. Het gemiddelde over alle vijf vestigingen is ${getal(p.gem,"nl")}. Wat scoorde de vijfde?`,
      en: (p) => `Four branches scored ${p.r.map(x=>getal(x,"en")).join(", ")}. The average across all five branches is ${getal(p.gem,"en")}. What did the fifth score?`,
      de: (p) => `Vier Standorte erzielten ${p.r.map(x=>getal(x,"de")).join(", ")}. Der Durchschnitt aller fünf Standorte liegt bei ${getal(p.gem,"de")}. Was erzielte der fünfte?`,
      fr: (p) => `Quatre sites ont obtenu ${p.r.map(x=>getal(x,"fr")).join(", ")}. La moyenne des cinq sites est de ${getal(p.gem,"fr")}. Quel est le score du cinquième ?`,
      es: (p) => `Cuatro sedes obtuvieron ${p.r.map(x=>getal(x,"es")).join(", ")}. La media de las cinco sedes es ${getal(p.gem,"es")}. ¿Cuánto obtuvo la quinta?`,
      ro: (p) => `Patru locații au obținut ${p.r.map(x=>getal(x,"ro")).join(", ")}. Media celor cinci locații este ${getal(p.gem,"ro")}. Cât a obținut a cincea?`,
      it: (p) => `Quattro sedi hanno ottenuto ${p.r.map(x=>getal(x,"it")).join(", ")}. La media delle cinque sedi è ${getal(p.gem,"it")}. Quanto ha ottenuto la quinta?`,
      pt: (p) => `Quatro filiais obtiveram ${p.r.map(x=>getal(x,"pt")).join(", ")}. A média das cinco filiais é ${getal(p.gem,"pt")}. Quanto obteve a quinta?`,
      tr: (p) => `Dört şube ${p.r.map(x=>getal(x,"tr")).join(", ")} sonuç aldı. Beş şubenin ortalaması ${getal(p.gem,"tr")}. Beşinci şube ne kadar aldı?`,
      fi: (p) => `Neljä toimipistettä sai tulokset ${p.r.map(x=>getal(x,"fi")).join(", ")}. Viiden toimipisteen keskiarvo on ${getal(p.gem,"fi")}. Minkä tuloksen viides sai?`,
      nb: (p) => `Fire avdelinger fikk ${p.r.map(x=>getal(x,"nb")).join(", ")}. Gjennomsnittet for de fem avdelingene er ${getal(p.gem,"nb")}. Hva fikk den femte?`,
      el: (p) => `Τέσσερα υποκαταστήματα πέτυχαν ${p.r.map(x=>getal(x,"el")).join(", ")}. Ο μέσος όρος των πέντε υποκαταστημάτων είναι ${getal(p.gem,"el")}. Πόσο πέτυχε το πέμπτο;`,
      cs: (p) => `Čtyři pobočky dosáhly ${p.r.map(x=>getal(x,"cs")).join(", ")}. Průměr pěti poboček je ${getal(p.gem,"cs")}. Kolik dosáhla pátá?`,
      uk: (p) => `Чотири філії отримали ${p.r.map(x=>getal(x,"uk")).join(", ")}. Середнє для п’яти філій становить ${getal(p.gem,"uk")}. Скільки отримала п’ята?`,
      hu: (p) => `Négy telephely eredménye ${p.r.map(x=>getal(x,"hu")).join(", ")}. Az öt telephely átlaga ${getal(p.gem,"hu")}. Mennyi volt az ötödiké?`,
      lt: (p) => `Keturių filialų rezultatai: ${p.r.map(x=>getal(x,"lt")).join("; ")}. Visų penkių filialų vidurkis yra ${getal(p.gem,"lt")}. Koks penktojo rezultatas?`,
      bg: (p) => `Резултатите на четири клона са ${p.r.map(x=>getal(x,"bg")).join(", ")}. Средното за всички пет клона е ${getal(p.gem,"bg")}. Какъв е резултатът на петия?`,
      sk: (p) => `Výsledky štyroch pobočiek sú ${p.r.map(x=>getal(x,"sk")).join(", ")}. Priemer všetkých piatich pobočiek je ${getal(p.gem,"sk")}. Aký je výsledok piatej?`,
      sl: (p) => `Rezultati štirih poslovalnic so ${p.r.map(x=>getal(x,"sl")).join(", ")}. Povprečje vseh petih poslovalnic je ${getal(p.gem,"sl")}. Kolikšen je rezultat pete?`,
      et: (p) => `Nelja filiaali tulemused on ${p.r.map(x=>getal(x,"et")).join("; ")}. Kõigi viie filiaali keskmine on ${getal(p.gem,"et")}. Milline on viienda tulemus?`,
      lv: (p) => `Četru filiāļu rezultāti: ${p.r.map(x=>getal(x,"lv")).join("; ")}. Visu piecu filiāļu vidējais ir ${getal(p.gem,"lv")}. Kāds ir piektās filiāles rezultāts?`,
      hr: (p) => `Rezultati četiriju poslovnica su ${p.r.map(x=>getal(x,"hr")).join(", ")}. Prosjek svih pet poslovnica je ${getal(p.gem,"hr")}. Koliki je rezultat pete?`,
      sr: (p) => `Rezultati četiri filijale su ${p.r.map(x=>getal(x,"sr")).join(", ")}. Prosek svih pet filijala je ${getal(p.gem,"sr")}. Koliki je rezultat pete?`,
      ru: (p) => `Результаты четырёх филиалов: ${p.r.map(x=>getal(x,"ru")).join(", ")}. Среднее по всем пяти филиалам равно ${getal(p.gem,"ru")}. Каков результат пятого?`,
    },
    uitleg: {
      nl: (p,j) => `Vijf keer ${getal(p.gem,"nl")} is ${getal(p.gem*5,"nl")}. Daar de vier bekende vanaf: ${getal(p.gem*5,"nl")} - ${getal(p.som,"nl")} = ${getal(j,"nl")}.`,
      en: (p,j) => `Five times ${getal(p.gem,"en")} is ${getal(p.gem*5,"en")}. Subtract the four known: ${getal(p.gem*5,"en")} - ${getal(p.som,"en")} = ${getal(j,"en")}.`,
      de: (p,j) => `Fünfmal ${getal(p.gem,"de")} ergibt ${getal(p.gem*5,"de")}. Die vier bekannten abziehen: ${getal(p.gem*5,"de")} - ${getal(p.som,"de")} = ${getal(j,"de")}.`,
      fr: (p,j) => `Cinq fois ${getal(p.gem,"fr")} font ${getal(p.gem*5,"fr")}. Retirez les quatre connus : ${getal(p.gem*5,"fr")} - ${getal(p.som,"fr")} = ${getal(j,"fr")}.`,
      es: (p,j) => `Cinco veces ${getal(p.gem,"es")} son ${getal(p.gem*5,"es")}. Resta las cuatro conocidas: ${getal(p.gem*5,"es")} - ${getal(p.som,"es")} = ${getal(j,"es")}.`,
      ro: (p,j) => `De cinci ori ${getal(p.gem,"ro")} înseamnă ${getal(p.gem*5,"ro")}. Scădeți cele patru cunoscute: ${getal(p.gem*5,"ro")} - ${getal(p.som,"ro")} = ${getal(j,"ro")}.`,
      it: (p,j) => `Cinque volte ${getal(p.gem,"it")} fa ${getal(p.gem*5,"it")}. Sottrarre i quattro valori noti: ${getal(p.gem*5,"it")} - ${getal(p.som,"it")} = ${getal(j,"it")}.`,
      pt: (p,j) => `Cinco vezes ${getal(p.gem,"pt")} dá ${getal(p.gem*5,"pt")}. Subtraia os quatro valores conhecidos: ${getal(p.gem*5,"pt")} - ${getal(p.som,"pt")} = ${getal(j,"pt")}.`,
      tr: (p,j) => `Beş kere ${getal(p.gem,"tr")}, ${getal(p.gem*5,"tr")} eder. Bilinen dört değeri çıkarın: ${getal(p.gem*5,"tr")} - ${getal(p.som,"tr")} = ${getal(j,"tr")}.`,
      fi: (p,j) => `Viisi kertaa ${getal(p.gem,"fi")} on ${getal(p.gem*5,"fi")}. Vähennä neljä tunnettua arvoa: ${getal(p.gem*5,"fi")} - ${getal(p.som,"fi")} = ${getal(j,"fi")}.`,
      nb: (p,j) => `Fem ganger ${getal(p.gem,"nb")} er ${getal(p.gem*5,"nb")}. Trekk fra de fire kjente verdiene: ${getal(p.gem*5,"nb")} - ${getal(p.som,"nb")} = ${getal(j,"nb")}.`,
      el: (p,j) => `Πέντε φορές το ${getal(p.gem,"el")} κάνει ${getal(p.gem*5,"el")}. Αφαιρέστε τις τέσσερις γνωστές τιμές: ${getal(p.gem*5,"el")} - ${getal(p.som,"el")} = ${getal(j,"el")}.`,
      cs: (p,j) => `Pětkrát ${getal(p.gem,"cs")} je ${getal(p.gem*5,"cs")}. Odečtěte čtyři známé hodnoty: ${getal(p.gem*5,"cs")} - ${getal(p.som,"cs")} = ${getal(j,"cs")}.`,
      uk: (p,j) => `П’ять разів по ${getal(p.gem,"uk")} дає ${getal(p.gem*5,"uk")}. Відніміть чотири відомі значення: ${getal(p.gem*5,"uk")} - ${getal(p.som,"uk")} = ${getal(j,"uk")}.`,
      hu: (p,j) => `Ötször ${getal(p.gem,"hu")} az ${getal(p.gem*5,"hu")}. Vonjuk le a négy ismert értéket: ${getal(p.gem*5,"hu")} - ${getal(p.som,"hu")} = ${getal(j,"hu")}.`,
      lt: (p,j) => `Penkis kartus ${getal(p.gem,"lt")} yra ${getal(p.gem*5,"lt")}. Atimkite keturias žinomas reikšmes: ${getal(p.gem*5,"lt")} - ${getal(p.som,"lt")} = ${getal(j,"lt")}.`,
      bg: (p,j) => `Пет пъти ${getal(p.gem,"bg")} прави ${getal(p.gem*5,"bg")}. Извадете четирите известни стойности: ${getal(p.gem*5,"bg")} - ${getal(p.som,"bg")} = ${getal(j,"bg")}.`,
      sk: (p,j) => `Päťkrát ${getal(p.gem,"sk")} je ${getal(p.gem*5,"sk")}. Odčítajte štyri známe hodnoty: ${getal(p.gem*5,"sk")} - ${getal(p.som,"sk")} = ${getal(j,"sk")}.`,
      sl: (p,j) => `Petkrat ${getal(p.gem,"sl")} je ${getal(p.gem*5,"sl")}. Odštejte štiri znane vrednosti: ${getal(p.gem*5,"sl")} - ${getal(p.som,"sl")} = ${getal(j,"sl")}.`,
      et: (p,j) => `Viis korda ${getal(p.gem,"et")} on ${getal(p.gem*5,"et")}. Lahutage neli teadaolevat väärtust: ${getal(p.gem*5,"et")} - ${getal(p.som,"et")} = ${getal(j,"et")}.`,
      lv: (p,j) => `Piecas reizes ${getal(p.gem,"lv")} ir ${getal(p.gem*5,"lv")}. Atņemiet četras zināmās vērtības: ${getal(p.gem*5,"lv")} - ${getal(p.som,"lv")} = ${getal(j,"lv")}.`,
      hr: (p,j) => `Pet puta ${getal(p.gem,"hr")} je ${getal(p.gem*5,"hr")}. Oduzmite četiri poznate vrijednosti: ${getal(p.gem*5,"hr")} - ${getal(p.som,"hr")} = ${getal(j,"hr")}.`,
      sr: (p,j) => `Pet puta ${getal(p.gem,"sr")} je ${getal(p.gem*5,"sr")}. Oduzmite četiri poznate vrednosti: ${getal(p.gem*5,"sr")} - ${getal(p.som,"sr")} = ${getal(j,"sr")}.`,
      ru: (p,j) => `Пять раз по ${getal(p.gem,"ru")} дают ${getal(p.gem*5,"ru")}. Вычтите четыре известных значения: ${getal(p.gem*5,"ru")} - ${getal(p.som,"ru")} = ${getal(j,"ru")}.`,
    },
    maak(r) {
      const r4 = Array.from({ length: 4 }, () => tussen(r, 55, 95));
      const som = r4.reduce((a, b) => a + b, 0);
      const juist = tussen(r, 50, 98);
      const gem = (som + juist) / 5;
      const gemR = Math.round(gem * 10) / 10;
      const exact = Math.round(gemR * 5 - som);
      const afl = [Math.round(gemR), som - Math.round(gemR), Math.round(som / 4)];
      return { p: { r: r4, som, gem: gemR }, juist: exact, afl, toon: (v, t) => getal(v, t) };
    },
  },

  // 5. omzet uit prijs en aantal, met korting
  korting: {
    tekst: {
      nl: (p) => `Een afnemer koopt ${getal(p.n,"nl")} assessments van ${euro(p.prijs,"nl")} en krijgt ${procent(p.k,"nl")} korting. Wat betaalt hij?`,
      en: (p) => `A client buys ${getal(p.n,"en")} assessments at ${euro(p.prijs,"en")} each with a ${procent(p.k,"en")} discount. What do they pay?`,
      de: (p) => `Ein Kunde kauft ${getal(p.n,"de")} Assessments zu je ${euro(p.prijs,"de")} mit ${procent(p.k,"de")} Rabatt. Was zahlt er?`,
      fr: (p) => `Un client achète ${getal(p.n,"fr")} évaluations à ${euro(p.prijs,"fr")} avec ${procent(p.k,"fr")} de remise. Combien paie-t-il ?`,
      es: (p) => `Un cliente compra ${getal(p.n,"es")} evaluaciones de ${euro(p.prijs,"es")} con un ${procent(p.k,"es")} de descuento. ¿Cuánto paga?`,
      ro: (p) => `Un client cumpără ${getal(p.n,"ro")} evaluări a ${euro(p.prijs,"ro")} cu ${procent(p.k,"ro")} reducere. Cât plătește?`,
      it: (p) => `Un cliente acquista ${getal(p.n,"it")} assessment a ${euro(p.prijs,"it")} con uno sconto del ${procent(p.k,"it")}. Quanto paga?`,
      pt: (p) => `Um cliente compra ${getal(p.n,"pt")} avaliações a ${euro(p.prijs,"pt")} com ${procent(p.k,"pt")} de desconto. Quanto paga?`,
      tr: (p) => `Bir müşteri ${euro(p.prijs,"tr")} fiyatlı ${getal(p.n,"tr")} değerlendirmeyi ${procent(p.k,"tr")} indirimle alıyor. Ne kadar öder?`,
      fi: (p) => `Asiakas ostaa ${getal(p.n,"fi")} arviointia hintaan ${euro(p.prijs,"fi")} kappale ${procent(p.k,"fi")} alennuksella. Paljonko hän maksaa?`,
      nb: (p) => `En kunde kjøper ${getal(p.n,"nb")} tester à ${euro(p.prijs,"nb")} med ${procent(p.k,"nb")} rabatt. Hva betaler kunden?`,
      el: (p) => `Ένας πελάτης αγοράζει ${getal(p.n,"el")} αξιολογήσεις των ${euro(p.prijs,"el")} με έκπτωση ${procent(p.k,"el")}. Πόσα πληρώνει;`,
      cs: (p) => `Zákazník kupuje ${getal(p.n,"cs")} testů po ${euro(p.prijs,"cs")} se slevou ${procent(p.k,"cs")}. Kolik zaplatí?`,
      uk: (p) => `Клієнт купує ${getal(p.n,"uk")} оцінювань по ${euro(p.prijs,"uk")} зі знижкою ${procent(p.k,"uk")}. Скільки він заплатить?`,
      hu: (p) => `Egy ügyfél ${getal(p.n,"hu")} tesztet vásárol darabonként ${euro(p.prijs,"hu")} áron, ${procent(p.k,"hu")} kedvezménnyel. Mennyit fizet?`,
      lt: (p) => `Klientas perka vertinimus (${getal(p.n,"lt")} vnt.) po ${euro(p.prijs,"lt")} su ${procent(p.k,"lt")} nuolaida. Kiek jis sumoka?`,
      bg: (p) => `Клиент купува оценки (${getal(p.n,"bg")} бр.) по ${euro(p.prijs,"bg")} всяка с отстъпка ${procent(p.k,"bg")}. Колко плаща?`,
      sk: (p) => `Zákazník kupuje hodnotenia (${getal(p.n,"sk")} ks) po ${euro(p.prijs,"sk")} so zľavou ${procent(p.k,"sk")}. Koľko zaplatí?`,
      sl: (p) => `Stranka kupi ocenjevanja (${getal(p.n,"sl")} kos.) po ${euro(p.prijs,"sl")} s popustom ${procent(p.k,"sl")}. Koliko plača?`,
      et: (p) => `Klient ostab ${getal(p.n,"et")} hindamist hinnaga ${euro(p.prijs,"et")} tükk ja saab ${procent(p.k,"et")} allahindlust. Kui palju ta maksab?`,
      lv: (p) => `Klients pērk novērtējumus (${getal(p.n,"lv")} gab.) par ${euro(p.prijs,"lv")} gabalā ar ${procent(p.k,"lv")} atlaidi. Cik viņš samaksā?`,
      hr: (p) => `Klijent kupuje procjene (${getal(p.n,"hr")} kom.) po ${euro(p.prijs,"hr")} uz popust od ${procent(p.k,"hr")}. Koliko plaća?`,
      sr: (p) => `Klijent kupuje procene (${getal(p.n,"sr")} kom.) po ${euro(p.prijs,"sr")} uz popust od ${procent(p.k,"sr")}. Koliko plaća?`,
      ru: (p) => `Клиент покупает оценки (${getal(p.n,"ru")} шт.) по ${euro(p.prijs,"ru")} за штуку со скидкой ${procent(p.k,"ru")}. Сколько он заплатит?`,
    },
    uitleg: {
      nl: (p,j) => `${getal(p.n,"nl")} x ${euro(p.prijs,"nl")} = ${euro(p.n*p.prijs,"nl")}. Daarvan ${procent(100-p.k,"nl")}: ${euro(j,"nl")}.`,
      en: (p,j) => `${getal(p.n,"en")} x ${euro(p.prijs,"en")} = ${euro(p.n*p.prijs,"en")}. Of that, ${procent(100-p.k,"en")}: ${euro(j,"en")}.`,
      de: (p,j) => `${getal(p.n,"de")} x ${euro(p.prijs,"de")} = ${euro(p.n*p.prijs,"de")}. Davon ${procent(100-p.k,"de")}: ${euro(j,"de")}.`,
      fr: (p,j) => `${getal(p.n,"fr")} x ${euro(p.prijs,"fr")} = ${euro(p.n*p.prijs,"fr")}. Soit ${procent(100-p.k,"fr")} : ${euro(j,"fr")}.`,
      es: (p,j) => `${getal(p.n,"es")} x ${euro(p.prijs,"es")} = ${euro(p.n*p.prijs,"es")}. De eso, ${procent(100-p.k,"es")}: ${euro(j,"es")}.`,
      ro: (p,j) => `${getal(p.n,"ro")} x ${euro(p.prijs,"ro")} = ${euro(p.n*p.prijs,"ro")}. Din care ${procent(100-p.k,"ro")}: ${euro(j,"ro")}.`,
      it: (p,j) => `${getal(p.n,"it")} x ${euro(p.prijs,"it")} = ${euro(p.n*p.prijs,"it")}. Il ${procent(100-p.k,"it")} di questo importo: ${euro(j,"it")}.`,
      pt: (p,j) => `${getal(p.n,"pt")} x ${euro(p.prijs,"pt")} = ${euro(p.n*p.prijs,"pt")}. ${procent(100-p.k,"pt")} desse valor: ${euro(j,"pt")}.`,
      tr: (p,j) => `${getal(p.n,"tr")} x ${euro(p.prijs,"tr")} = ${euro(p.n*p.prijs,"tr")}. Bunun ${procent(100-p.k,"tr")} kadarı: ${euro(j,"tr")}.`,
      fi: (p,j) => `${getal(p.n,"fi")} x ${euro(p.prijs,"fi")} = ${euro(p.n*p.prijs,"fi")}. Tästä ${procent(100-p.k,"fi")}: ${euro(j,"fi")}.`,
      nb: (p,j) => `${getal(p.n,"nb")} x ${euro(p.prijs,"nb")} = ${euro(p.n*p.prijs,"nb")}. ${procent(100-p.k,"nb")} av dette: ${euro(j,"nb")}.`,
      el: (p,j) => `${getal(p.n,"el")} x ${euro(p.prijs,"el")} = ${euro(p.n*p.prijs,"el")}. Το ${procent(100-p.k,"el")} αυτού του ποσού: ${euro(j,"el")}.`,
      cs: (p,j) => `${getal(p.n,"cs")} x ${euro(p.prijs,"cs")} = ${euro(p.n*p.prijs,"cs")}. ${procent(100-p.k,"cs")} z toho: ${euro(j,"cs")}.`,
      uk: (p,j) => `${getal(p.n,"uk")} x ${euro(p.prijs,"uk")} = ${euro(p.n*p.prijs,"uk")}. ${procent(100-p.k,"uk")} від цієї суми: ${euro(j,"uk")}.`,
      hu: (p,j) => `${getal(p.n,"hu")} x ${euro(p.prijs,"hu")} = ${euro(p.n*p.prijs,"hu")}. Ennek ${procent(100-p.k,"hu")}-a: ${euro(j,"hu")}.`,
      lt: (p,j) => `${getal(p.n,"lt")} x ${euro(p.prijs,"lt")} = ${euro(p.n*p.prijs,"lt")}. Iš to ${procent(100-p.k,"lt")}: ${euro(j,"lt")}.`,
      bg: (p,j) => `${getal(p.n,"bg")} x ${euro(p.prijs,"bg")} = ${euro(p.n*p.prijs,"bg")}. От тази сума ${procent(100-p.k,"bg")}: ${euro(j,"bg")}.`,
      sk: (p,j) => `${getal(p.n,"sk")} x ${euro(p.prijs,"sk")} = ${euro(p.n*p.prijs,"sk")}. Z toho ${procent(100-p.k,"sk")}: ${euro(j,"sk")}.`,
      sl: (p,j) => `${getal(p.n,"sl")} x ${euro(p.prijs,"sl")} = ${euro(p.n*p.prijs,"sl")}. Od tega ${procent(100-p.k,"sl")}: ${euro(j,"sl")}.`,
      et: (p,j) => `${getal(p.n,"et")} x ${euro(p.prijs,"et")} = ${euro(p.n*p.prijs,"et")}. Sellest ${procent(100-p.k,"et")}: ${euro(j,"et")}.`,
      lv: (p,j) => `${getal(p.n,"lv")} x ${euro(p.prijs,"lv")} = ${euro(p.n*p.prijs,"lv")}. No tā ${procent(100-p.k,"lv")}: ${euro(j,"lv")}.`,
      hr: (p,j) => `${getal(p.n,"hr")} x ${euro(p.prijs,"hr")} = ${euro(p.n*p.prijs,"hr")}. Od toga ${procent(100-p.k,"hr")}: ${euro(j,"hr")}.`,
      sr: (p,j) => `${getal(p.n,"sr")} x ${euro(p.prijs,"sr")} = ${euro(p.n*p.prijs,"sr")}. Od toga ${procent(100-p.k,"sr")}: ${euro(j,"sr")}.`,
      ru: (p,j) => `${getal(p.n,"ru")} x ${euro(p.prijs,"ru")} = ${euro(p.n*p.prijs,"ru")}. От этой суммы ${procent(100-p.k,"ru")}: ${euro(j,"ru")}.`,
    },
    maak(r) {
      const n = kies(r, [12, 15, 20, 24, 25, 30, 40, 50]);
      const prijs = kies(r, [74, 84, 94, 104, 120, 145]);
      const k = kies(r, [5, 10, 12.5, 15, 20, 25]);
      const bruto = n * prijs;
      const juist = Math.round(bruto * (100 - k) / 100 * 100) / 100;
      const afl = [bruto, Math.round(bruto * k / 100 * 100) / 100, Math.round(bruto * (100 + k) / 100 * 100) / 100];
      return { p: { n, prijs, k }, juist, afl, toon: (v, t) => euro(v, t, 2) };
    },
  },

  // 6. verhouding verdelen
  verhouding: {
    tekst: {
      nl: (p) => `Een budget van ${euro(p.tot,"nl")} wordt verdeeld in de verhouding ${p.a}:${p.b}:${p.c}. Hoeveel gaat naar het grootste deel?`,
      en: (p) => `A budget of ${euro(p.tot,"en")} is split in the ratio ${p.a}:${p.b}:${p.c}. How much goes to the largest share?`,
      de: (p) => `Ein Budget von ${euro(p.tot,"de")} wird im Verhältnis ${p.a}:${p.b}:${p.c} aufgeteilt. Wie viel entfällt auf den größten Anteil?`,
      fr: (p) => `Un budget de ${euro(p.tot,"fr")} est réparti selon le rapport ${p.a}:${p.b}:${p.c}. Combien revient à la plus grande part ?`,
      es: (p) => `Un presupuesto de ${euro(p.tot,"es")} se reparte en la proporción ${p.a}:${p.b}:${p.c}. ¿Cuánto corresponde a la parte mayor?`,
      ro: (p) => `Un buget de ${euro(p.tot,"ro")} se împarte în raportul ${p.a}:${p.b}:${p.c}. Cât revine celei mai mari părți?`,
      it: (p) => `Un budget di ${euro(p.tot,"it")} viene ripartito nel rapporto ${p.a}:${p.b}:${p.c}. Quanto spetta alla parte più grande?`,
      pt: (p) => `Um orçamento de ${euro(p.tot,"pt")} é repartido na proporção ${p.a}:${p.b}:${p.c}. Quanto cabe à parte maior?`,
      tr: (p) => `${euro(p.tot,"tr")} tutarındaki bir bütçe ${p.a}:${p.b}:${p.c} oranında paylaştırılıyor. En büyük pay ne kadar?`,
      fi: (p) => `${euro(p.tot,"fi")} budjetti jaetaan suhteessa ${p.a}:${p.b}:${p.c}. Paljonko suurin osa saa?`,
      nb: (p) => `Et budsjett på ${euro(p.tot,"nb")} fordeles i forholdet ${p.a}:${p.b}:${p.c}. Hvor mye får den største delen?`,
      el: (p) => `Ένας προϋπολογισμός ${euro(p.tot,"el")} μοιράζεται σε αναλογία ${p.a}:${p.b}:${p.c}. Πόσα παίρνει το μεγαλύτερο μέρος;`,
      cs: (p) => `Rozpočet ${euro(p.tot,"cs")} se rozdělí v poměru ${p.a}:${p.b}:${p.c}. Kolik připadne na největší část?`,
      uk: (p) => `Бюджет ${euro(p.tot,"uk")} розподіляють у пропорції ${p.a}:${p.b}:${p.c}. Скільки отримає найбільша частина?`,
      hu: (p) => `Egy ${euro(p.tot,"hu")} összegű költségvetést ${p.a}:${p.b}:${p.c} arányban osztanak fel. Mennyi jut a legnagyobb részre?`,
      lt: (p) => `${euro(p.tot,"lt")} biudžetas dalijamas santykiu ${p.a}:${p.b}:${p.c}. Kiek tenka didžiausiai daliai?`,
      bg: (p) => `Бюджет от ${euro(p.tot,"bg")} се разделя в съотношение ${p.a}:${p.b}:${p.c}. Колко получава най-голямата част?`,
      sk: (p) => `Rozpočet ${euro(p.tot,"sk")} sa rozdelí v pomere ${p.a}:${p.b}:${p.c}. Koľko pripadne na najväčšiu časť?`,
      sl: (p) => `Proračun v višini ${euro(p.tot,"sl")} se razdeli v razmerju ${p.a}:${p.b}:${p.c}. Koliko dobi največji del?`,
      et: (p) => `${euro(p.tot,"et")} suurune eelarve jagatakse suhtes ${p.a}:${p.b}:${p.c}. Kui palju saab suurim osa?`,
      lv: (p) => `Budžetu ${euro(p.tot,"lv")} apmērā sadala attiecībā ${p.a}:${p.b}:${p.c}. Cik saņem lielākā daļa?`,
      hr: (p) => `Proračun od ${euro(p.tot,"hr")} dijeli se u omjeru ${p.a}:${p.b}:${p.c}. Koliko dobiva najveći dio?`,
      sr: (p) => `Budžet od ${euro(p.tot,"sr")} deli se u odnosu ${p.a}:${p.b}:${p.c}. Koliko dobija najveći deo?`,
      ru: (p) => `Бюджет ${euro(p.tot,"ru")} делится в пропорции ${p.a}:${p.b}:${p.c}. Сколько приходится на самую большую часть?`,
    },
    uitleg: {
      nl: (p,j) => `Samen ${p.a+p.b+p.c} delen. Eén deel is ${euro(p.tot/(p.a+p.b+p.c),"nl")}, maal ${Math.max(p.a,p.b,p.c)} is ${euro(j,"nl")}.`,
      en: (p,j) => `${p.a+p.b+p.c} parts in total. One part is ${euro(p.tot/(p.a+p.b+p.c),"en")}, times ${Math.max(p.a,p.b,p.c)} is ${euro(j,"en")}.`,
      de: (p,j) => `Zusammen ${p.a+p.b+p.c} Teile. Ein Teil sind ${euro(p.tot/(p.a+p.b+p.c),"de")}, mal ${Math.max(p.a,p.b,p.c)} ergibt ${euro(j,"de")}.`,
      fr: (p,j) => `${p.a+p.b+p.c} parts au total. Une part vaut ${euro(p.tot/(p.a+p.b+p.c),"fr")}, fois ${Math.max(p.a,p.b,p.c)} donne ${euro(j,"fr")}.`,
      es: (p,j) => `${p.a+p.b+p.c} partes en total. Una parte es ${euro(p.tot/(p.a+p.b+p.c),"es")}, por ${Math.max(p.a,p.b,p.c)} da ${euro(j,"es")}.`,
      ro: (p,j) => `${p.a+p.b+p.c} părți în total. O parte este ${euro(p.tot/(p.a+p.b+p.c),"ro")}, ori ${Math.max(p.a,p.b,p.c)} dă ${euro(j,"ro")}.`,
      it: (p,j) => `${p.a+p.b+p.c} parti in totale. Una parte vale ${euro(p.tot/(p.a+p.b+p.c),"it")}, per ${Math.max(p.a,p.b,p.c)} fa ${euro(j,"it")}.`,
      pt: (p,j) => `${p.a+p.b+p.c} partes no total. Uma parte vale ${euro(p.tot/(p.a+p.b+p.c),"pt")}, vezes ${Math.max(p.a,p.b,p.c)} dá ${euro(j,"pt")}.`,
      tr: (p,j) => `Toplam ${p.a+p.b+p.c} pay. Bir pay ${euro(p.tot/(p.a+p.b+p.c),"tr")}, ${Math.max(p.a,p.b,p.c)} katı ${euro(j,"tr")} eder.`,
      fi: (p,j) => `Osia on yhteensä ${p.a+p.b+p.c}. Yksi osa on ${euro(p.tot/(p.a+p.b+p.c),"fi")}, kertaa ${Math.max(p.a,p.b,p.c)} on ${euro(j,"fi")}.`,
      nb: (p,j) => `${p.a+p.b+p.c} deler totalt. Én del er ${euro(p.tot/(p.a+p.b+p.c),"nb")}, ganger ${Math.max(p.a,p.b,p.c)} blir ${euro(j,"nb")}.`,
      el: (p,j) => `Συνολικά ${p.a+p.b+p.c} μέρη. Ένα μέρος αξίζει ${euro(p.tot/(p.a+p.b+p.c),"el")}, επί ${Math.max(p.a,p.b,p.c)} κάνει ${euro(j,"el")}.`,
      cs: (p,j) => `Celkem ${p.a+p.b+p.c} dílů. Jeden díl je ${euro(p.tot/(p.a+p.b+p.c),"cs")}, krát ${Math.max(p.a,p.b,p.c)} je ${euro(j,"cs")}.`,
      uk: (p,j) => `Разом ${p.a+p.b+p.c} частин. Одна частина становить ${euro(p.tot/(p.a+p.b+p.c),"uk")}, помножена на ${Math.max(p.a,p.b,p.c)} дає ${euro(j,"uk")}.`,
      hu: (p,j) => `Összesen ${p.a+p.b+p.c} rész. Egy rész ${euro(p.tot/(p.a+p.b+p.c),"hu")}, ennek ${Math.max(p.a,p.b,p.c)}-szorosa ${euro(j,"hu")}.`,
      lt: (p,j) => `Iš viso dalių: ${p.a+p.b+p.c}. Viena dalis yra ${euro(p.tot/(p.a+p.b+p.c),"lt")}, padauginus iš ${Math.max(p.a,p.b,p.c)} gaunama ${euro(j,"lt")}.`,
      bg: (p,j) => `Общо части: ${p.a+p.b+p.c}. Една част е ${euro(p.tot/(p.a+p.b+p.c),"bg")}, умножена по ${Math.max(p.a,p.b,p.c)} прави ${euro(j,"bg")}.`,
      sk: (p,j) => `Počet dielov spolu: ${p.a+p.b+p.c}. Jeden diel je ${euro(p.tot/(p.a+p.b+p.c),"sk")}, krát ${Math.max(p.a,p.b,p.c)} je ${euro(j,"sk")}.`,
      sl: (p,j) => `Število delov skupaj: ${p.a+p.b+p.c}. En del je ${euro(p.tot/(p.a+p.b+p.c),"sl")}, krat ${Math.max(p.a,p.b,p.c)} je ${euro(j,"sl")}.`,
      et: (p,j) => `Kokku ${p.a+p.b+p.c} osa. Üks osa on ${euro(p.tot/(p.a+p.b+p.c),"et")}, korda ${Math.max(p.a,p.b,p.c)} teeb ${euro(j,"et")}.`,
      lv: (p,j) => `Daļu kopskaits: ${p.a+p.b+p.c}. Viena daļa ir ${euro(p.tot/(p.a+p.b+p.c),"lv")}, reizinot ar ${Math.max(p.a,p.b,p.c)}, iegūst ${euro(j,"lv")}.`,
      hr: (p,j) => `Ukupno dijelova: ${p.a+p.b+p.c}. Jedan dio je ${euro(p.tot/(p.a+p.b+p.c),"hr")}, puta ${Math.max(p.a,p.b,p.c)} je ${euro(j,"hr")}.`,
      sr: (p,j) => `Ukupno delova: ${p.a+p.b+p.c}. Jedan deo je ${euro(p.tot/(p.a+p.b+p.c),"sr")}, puta ${Math.max(p.a,p.b,p.c)} je ${euro(j,"sr")}.`,
      ru: (p,j) => `Всего частей: ${p.a+p.b+p.c}. Одна часть равна ${euro(p.tot/(p.a+p.b+p.c),"ru")}, умноженная на ${Math.max(p.a,p.b,p.c)}, это ${euro(j,"ru")}.`,
    },
    maak(r) {
      const a = tussen(r, 1, 3), b = tussen(r, 2, 5), c = tussen(r, 3, 7);
      const delen = a + b + c;
      const tot = delen * kies(r, [250, 400, 500, 750, 1000, 1250]);
      const grootste = Math.max(a, b, c);
      const juist = (tot / delen) * grootste;
      const afl = [Math.round(tot / delen), Math.round(tot / 3), Math.round((tot / delen) * Math.min(a, b, c))];
      return { p: { tot, a, b, c }, juist, afl, toon: (v, t) => euro(v, t) };
    },
  },

  // 7. doorlooptijd en capaciteit
  capaciteit: {
    tekst: {
      nl: (p) => `${getal(p.m,"nl")} beoordelaars verwerken samen ${getal(p.n,"nl")} rapporten in ${getal(p.u,"nl")} uur. Hoeveel uur kosten ${getal(p.n2,"nl")} rapporten bij hetzelfde tempo?`,
      en: (p) => `${getal(p.m,"en")} reviewers process ${getal(p.n,"en")} reports in ${getal(p.u,"en")} hours. How many hours do ${getal(p.n2,"en")} reports take at the same pace?`,
      de: (p) => `${getal(p.m,"de")} Prüfer bearbeiten zusammen ${getal(p.n,"de")} Berichte in ${getal(p.u,"de")} Stunden. Wie viele Stunden dauern ${getal(p.n2,"de")} Berichte im gleichen Tempo?`,
      fr: (p) => `${getal(p.m,"fr")} évaluateurs traitent ${getal(p.n,"fr")} rapports en ${getal(p.u,"fr")} heures. Combien d'heures faut-il pour ${getal(p.n2,"fr")} rapports au même rythme ?`,
      es: (p) => `${getal(p.m,"es")} revisores procesan ${getal(p.n,"es")} informes en ${getal(p.u,"es")} horas. ¿Cuántas horas llevan ${getal(p.n2,"es")} informes al mismo ritmo?`,
      ro: (p) => `${getal(p.m,"ro")} evaluatori procesează ${getal(p.n,"ro")} rapoarte în ${getal(p.u,"ro")} ore. Câte ore durează ${getal(p.n2,"ro")} rapoarte în același ritm?`,
      it: (p) => `${getal(p.m,"it")} valutatori elaborano ${getal(p.n,"it")} report in ${getal(p.u,"it")} ore. Quante ore servono per ${getal(p.n2,"it")} report allo stesso ritmo?`,
      pt: (p) => `${getal(p.m,"pt")} avaliadores processam ${getal(p.n,"pt")} relatórios em ${getal(p.u,"pt")} horas. Quantas horas demoram ${getal(p.n2,"pt")} relatórios ao mesmo ritmo?`,
      tr: (p) => `${getal(p.m,"tr")} değerlendirici ${getal(p.u,"tr")} saatte ${getal(p.n,"tr")} rapor işliyor. Aynı hızla ${getal(p.n2,"tr")} rapor kaç saat sürer?`,
      fi: (p) => `${getal(p.m,"fi")} arvioijaa käsittelee ${getal(p.n,"fi")} raporttia ${getal(p.u,"fi")} tunnissa. Montako tuntia ${getal(p.n2,"fi")} raporttia vie samalla tahdilla?`,
      nb: (p) => `${getal(p.m,"nb")} vurderere behandler ${getal(p.n,"nb")} rapporter på ${getal(p.u,"nb")} timer. Hvor mange timer tar ${getal(p.n2,"nb")} rapporter i samme tempo?`,
      el: (p) => `${getal(p.m,"el")} αξιολογητές επεξεργάζονται ${getal(p.n,"el")} αναφορές σε ${getal(p.u,"el")} ώρες. Πόσες ώρες χρειάζονται για ${getal(p.n2,"el")} αναφορές με τον ίδιο ρυθμό;`,
      cs: (p) => `Tým o ${getal(p.m,"cs")} hodnotitelích zpracuje ${getal(p.n,"cs")} zpráv za ${getal(p.u,"cs")} hodin. Kolik hodin zabere ${getal(p.n2,"cs")} zpráv při stejném tempu?`,
      uk: (p) => `Команда з ${getal(p.m,"uk")} оцінювачів опрацьовує ${getal(p.n,"uk")} звітів за ${getal(p.u,"uk")} годин. Скільки годин займе ${getal(p.n2,"uk")} звітів у тому самому темпі?`,
      hu: (p) => `${getal(p.m,"hu")} értékelő ${getal(p.u,"hu")} óra alatt ${getal(p.n,"hu")} jelentést dolgoz fel. Hány óra kell ${getal(p.n2,"hu")} jelentéshez ugyanebben a tempóban?`,
      lt: (p) => `Vertintojai (${getal(p.m,"lt")} asm.) apdoroja ataskaitas (${getal(p.n,"lt")} vnt.) per ${getal(p.u,"lt")} val. Kiek valandų užtruks ${getal(p.n2,"lt")} vnt. tuo pačiu tempu?`,
      bg: (p) => `Оценители (${getal(p.m,"bg")} души) обработват доклади (${getal(p.n,"bg")} бр.) за ${getal(p.u,"bg")} ч. Колко часа отнемат ${getal(p.n2,"bg")} бр. при същото темпо?`,
      sk: (p) => `Hodnotitelia (${getal(p.m,"sk")} os.) spracujú správy (${getal(p.n,"sk")} ks) za ${getal(p.u,"sk")} h. Koľko hodín zaberie ${getal(p.n2,"sk")} ks rovnakým tempom?`,
      sl: (p) => `Ocenjevalci (${getal(p.m,"sl")} os.) obdelajo poročila (${getal(p.n,"sl")} kos.) v ${getal(p.u,"sl")} h. Koliko ur traja obdelava ${getal(p.n2,"sl")} kos. z enakim tempom?`,
      et: (p) => `${getal(p.m,"et")} hindajat töötleb ${getal(p.u,"et")} tunniga ${getal(p.n,"et")} aruannet. Mitu tundi kulub samas tempos ${getal(p.n2,"et")} aruande peale?`,
      lv: (p) => `Vērtētāji (${getal(p.m,"lv")} pers.) apstrādā ziņojumus (${getal(p.n,"lv")} gab.) ${getal(p.u,"lv")} st. laikā. Cik stundu aizņems ${getal(p.n2,"lv")} gab. tādā pašā tempā?`,
      hr: (p) => `Ocjenjivači (${getal(p.m,"hr")} osoba) obrađuju izvješća (${getal(p.n,"hr")} kom.) za ${getal(p.u,"hr")} h. Koliko sati traje obrada ${getal(p.n2,"hr")} kom. istim tempom?`,
      sr: (p) => `Ocenjivači (${getal(p.m,"sr")} osoba) obrađuju izveštaje (${getal(p.n,"sr")} kom.) za ${getal(p.u,"sr")} h. Koliko sati traje obrada ${getal(p.n2,"sr")} kom. istim tempom?`,
      ru: (p) => `Оценщики (${getal(p.m,"ru")} чел.) обрабатывают отчёты (${getal(p.n,"ru")} шт.) за ${getal(p.u,"ru")} ч. Сколько часов уйдёт на ${getal(p.n2,"ru")} шт. в том же темпе?`,
    },
    uitleg: {
      nl: (p,j) => `Per uur ${getal(p.n/p.u,"nl",1)} rapporten. ${getal(p.n2,"nl")} / ${getal(p.n/p.u,"nl",1)} = ${getal(j,"nl",1)} uur.`,
      en: (p,j) => `${getal(p.n/p.u,"en",1)} reports per hour. ${getal(p.n2,"en")} / ${getal(p.n/p.u,"en",1)} = ${getal(j,"en",1)} hours.`,
      de: (p,j) => `${getal(p.n/p.u,"de",1)} Berichte pro Stunde. ${getal(p.n2,"de")} / ${getal(p.n/p.u,"de",1)} = ${getal(j,"de",1)} Stunden.`,
      fr: (p,j) => `${getal(p.n/p.u,"fr",1)} rapports par heure. ${getal(p.n2,"fr")} / ${getal(p.n/p.u,"fr",1)} = ${getal(j,"fr",1)} heures.`,
      es: (p,j) => `${getal(p.n/p.u,"es",1)} informes por hora. ${getal(p.n2,"es")} / ${getal(p.n/p.u,"es",1)} = ${getal(j,"es",1)} horas.`,
      ro: (p,j) => `${getal(p.n/p.u,"ro",1)} rapoarte pe oră. ${getal(p.n2,"ro")} / ${getal(p.n/p.u,"ro",1)} = ${getal(j,"ro",1)} ore.`,
      it: (p,j) => `${getal(p.n/p.u,"it",1)} report all'ora. ${getal(p.n2,"it")} / ${getal(p.n/p.u,"it",1)} = ${getal(j,"it",1)} ore.`,
      pt: (p,j) => `${getal(p.n/p.u,"pt",1)} relatórios por hora. ${getal(p.n2,"pt")} / ${getal(p.n/p.u,"pt",1)} = ${getal(j,"pt",1)} horas.`,
      tr: (p,j) => `Saatte ${getal(p.n/p.u,"tr",1)} rapor. ${getal(p.n2,"tr")} / ${getal(p.n/p.u,"tr",1)} = ${getal(j,"tr",1)} saat.`,
      fi: (p,j) => `${getal(p.n/p.u,"fi",1)} raporttia tunnissa. ${getal(p.n2,"fi")} / ${getal(p.n/p.u,"fi",1)} = ${getal(j,"fi",1)} tuntia.`,
      nb: (p,j) => `${getal(p.n/p.u,"nb",1)} rapporter i timen. ${getal(p.n2,"nb")} / ${getal(p.n/p.u,"nb",1)} = ${getal(j,"nb",1)} timer.`,
      el: (p,j) => `${getal(p.n/p.u,"el",1)} αναφορές την ώρα. ${getal(p.n2,"el")} / ${getal(p.n/p.u,"el",1)} = ${getal(j,"el",1)} ώρες.`,
      cs: (p,j) => `${getal(p.n/p.u,"cs",1)} zpráv za hodinu. ${getal(p.n2,"cs")} / ${getal(p.n/p.u,"cs",1)} = ${getal(j,"cs",1)} hodin.`,
      uk: (p,j) => `${getal(p.n/p.u,"uk",1)} звітів за годину. ${getal(p.n2,"uk")} / ${getal(p.n/p.u,"uk",1)} = ${getal(j,"uk",1)} год.`,
      hu: (p,j) => `Óránként ${getal(p.n/p.u,"hu",1)} jelentés. ${getal(p.n2,"hu")} / ${getal(p.n/p.u,"hu",1)} = ${getal(j,"hu",1)} óra.`,
      lt: (p,j) => `Per valandą: ${getal(p.n/p.u,"lt",1)} vnt. ${getal(p.n2,"lt")} / ${getal(p.n/p.u,"lt",1)} = ${getal(j,"lt",1)} val.`,
      bg: (p,j) => `На час: ${getal(p.n/p.u,"bg",1)} бр. ${getal(p.n2,"bg")} / ${getal(p.n/p.u,"bg",1)} = ${getal(j,"bg",1)} ч.`,
      sk: (p,j) => `Za hodinu: ${getal(p.n/p.u,"sk",1)} ks. ${getal(p.n2,"sk")} / ${getal(p.n/p.u,"sk",1)} = ${getal(j,"sk",1)} h.`,
      sl: (p,j) => `Na uro: ${getal(p.n/p.u,"sl",1)} kos. ${getal(p.n2,"sl")} / ${getal(p.n/p.u,"sl",1)} = ${getal(j,"sl",1)} h.`,
      et: (p,j) => `Tunnis ${getal(p.n/p.u,"et",1)} aruannet. ${getal(p.n2,"et")} / ${getal(p.n/p.u,"et",1)} = ${getal(j,"et",1)} tundi.`,
      lv: (p,j) => `Stundā: ${getal(p.n/p.u,"lv",1)} gab. ${getal(p.n2,"lv")} / ${getal(p.n/p.u,"lv",1)} = ${getal(j,"lv",1)} st.`,
      hr: (p,j) => `Po satu: ${getal(p.n/p.u,"hr",1)} kom. ${getal(p.n2,"hr")} / ${getal(p.n/p.u,"hr",1)} = ${getal(j,"hr",1)} h.`,
      sr: (p,j) => `Po satu: ${getal(p.n/p.u,"sr",1)} kom. ${getal(p.n2,"sr")} / ${getal(p.n/p.u,"sr",1)} = ${getal(j,"sr",1)} h.`,
      ru: (p,j) => `В час: ${getal(p.n/p.u,"ru",1)} шт. ${getal(p.n2,"ru")} / ${getal(p.n/p.u,"ru",1)} = ${getal(j,"ru",1)} ч.`,
    },
    maak(r) {
      const m = tussen(r, 2, 6), u = kies(r, [4, 5, 6, 8]);
      const perUur = kies(r, [3, 4, 5, 6, 8]);
      const n = perUur * u;
      const factor = kies(r, [1.5, 2, 2.5, 3]);
      const n2 = Math.round(n * factor);
      const juist = Math.round((n2 / perUur) * 10) / 10;
      const afl = [Math.round(n2 / m * 10) / 10, Math.round(n2 / u * 10) / 10, Math.round(u * factor * 10) / 10 + 1];
      return { p: { m, n, u, n2 }, juist, afl, toon: (v, t) => getal(v, t, 1) };
    },
  },

  // 8. index terugrekenen
  index: {
    tekst: {
      nl: (p) => `Een tarief steeg met ${procent(p.k,"nl")} naar ${euro(p.na,"nl")}. Wat was het tarief daarvoor?`,
      en: (p) => `A rate rose by ${procent(p.k,"en")} to ${euro(p.na,"en")}. What was the rate before?`,
      de: (p) => `Ein Tarif stieg um ${procent(p.k,"de")} auf ${euro(p.na,"de")}. Wie hoch war er vorher?`,
      fr: (p) => `Un tarif a augmenté de ${procent(p.k,"fr")} pour atteindre ${euro(p.na,"fr")}. Quel était le tarif auparavant ?`,
      es: (p) => `Una tarifa subió un ${procent(p.k,"es")} hasta ${euro(p.na,"es")}. ¿Cuál era antes?`,
      ro: (p) => `Un tarif a crescut cu ${procent(p.k,"ro")} până la ${euro(p.na,"ro")}. Cât era înainte?`,
      it: (p) => `Una tariffa è aumentata del ${procent(p.k,"it")} fino a ${euro(p.na,"it")}. Quanto era prima?`,
      pt: (p) => `Uma tarifa aumentou ${procent(p.k,"pt")} para ${euro(p.na,"pt")}. Quanto era antes?`,
      tr: (p) => `Bir ücret ${procent(p.k,"tr")} artarak ${euro(p.na,"tr")} oldu. Önceden ne kadardı?`,
      fi: (p) => `Hinta nousi ${procent(p.k,"fi")} ja on nyt ${euro(p.na,"fi")}. Mikä se oli aiemmin?`,
      nb: (p) => `En pris økte med ${procent(p.k,"nb")} til ${euro(p.na,"nb")}. Hva var den før?`,
      el: (p) => `Μια τιμή αυξήθηκε κατά ${procent(p.k,"el")} στα ${euro(p.na,"el")}. Πόση ήταν πριν;`,
      cs: (p) => `Cena vzrostla o ${procent(p.k,"cs")} na ${euro(p.na,"cs")}. Kolik byla předtím?`,
      uk: (p) => `Ціна зросла на ${procent(p.k,"uk")} до ${euro(p.na,"uk")}. Якою вона була раніше?`,
      hu: (p) => `Egy díj ${procent(p.k,"hu")}-kal ${euro(p.na,"hu")}-ra emelkedett. Mennyi volt korábban?`,
      lt: (p) => `Tarifas padidėjo ${procent(p.k,"lt")} iki ${euro(p.na,"lt")}. Koks jis buvo anksčiau?`,
      bg: (p) => `Една тарифа се повишава с ${procent(p.k,"bg")} до ${euro(p.na,"bg")}. Колко е била преди?`,
      sk: (p) => `Sadzba sa zvýšila o ${procent(p.k,"sk")} na ${euro(p.na,"sk")}. Aká bola predtým?`,
      sl: (p) => `Tarifa se je zvišala za ${procent(p.k,"sl")} na ${euro(p.na,"sl")}. Kolikšna je bila prej?`,
      et: (p) => `Tasu tõusis ${procent(p.k,"et")} võrra ja on nüüd ${euro(p.na,"et")}. Kui suur see enne oli?`,
      lv: (p) => `Tarifs palielinājās par ${procent(p.k,"lv")} līdz ${euro(p.na,"lv")}. Cik tas bija iepriekš?`,
      hr: (p) => `Tarifa je porasla za ${procent(p.k,"hr")} na ${euro(p.na,"hr")}. Kolika je bila prije?`,
      sr: (p) => `Tarifa je porasla za ${procent(p.k,"sr")} na ${euro(p.na,"sr")}. Kolika je bila pre toga?`,
      ru: (p) => `Тариф вырос на ${procent(p.k,"ru")} до ${euro(p.na,"ru")}. Каким он был раньше?`,
    },
    uitleg: {
      nl: (p,j) => `Deel door ${getal(1+p.k/100,"nl",3)}, niet aftrekken: ${euro(p.na,"nl")} / ${getal(1+p.k/100,"nl",3)} = ${euro(j,"nl",2)}.`,
      en: (p,j) => `Divide by ${getal(1+p.k/100,"en",3)}, do not subtract: ${euro(p.na,"en")} / ${getal(1+p.k/100,"en",3)} = ${euro(j,"en",2)}.`,
      de: (p,j) => `Durch ${getal(1+p.k/100,"de",3)} teilen, nicht abziehen: ${euro(p.na,"de")} / ${getal(1+p.k/100,"de",3)} = ${euro(j,"de",2)}.`,
      fr: (p,j) => `Divisez par ${getal(1+p.k/100,"fr",3)}, ne soustrayez pas : ${euro(p.na,"fr")} / ${getal(1+p.k/100,"fr",3)} = ${euro(j,"fr",2)}.`,
      es: (p,j) => `Divide entre ${getal(1+p.k/100,"es",3)}, no restes: ${euro(p.na,"es")} / ${getal(1+p.k/100,"es",3)} = ${euro(j,"es",2)}.`,
      ro: (p,j) => `Împărțiți la ${getal(1+p.k/100,"ro",3)}, nu scădeți: ${euro(p.na,"ro")} / ${getal(1+p.k/100,"ro",3)} = ${euro(j,"ro",2)}.`,
      it: (p,j) => `Dividere per ${getal(1+p.k/100,"it",3)}, non sottrarre: ${euro(p.na,"it")} / ${getal(1+p.k/100,"it",3)} = ${euro(j,"it",2)}.`,
      pt: (p,j) => `Divida por ${getal(1+p.k/100,"pt",3)}, não subtraia: ${euro(p.na,"pt")} / ${getal(1+p.k/100,"pt",3)} = ${euro(j,"pt",2)}.`,
      tr: (p,j) => `Çıkarmayın, ${getal(1+p.k/100,"tr",3)} sayısına bölün: ${euro(p.na,"tr")} / ${getal(1+p.k/100,"tr",3)} = ${euro(j,"tr",2)}.`,
      fi: (p,j) => `Jaa luvulla ${getal(1+p.k/100,"fi",3)}, älä vähennä: ${euro(p.na,"fi")} / ${getal(1+p.k/100,"fi",3)} = ${euro(j,"fi",2)}.`,
      nb: (p,j) => `Del på ${getal(1+p.k/100,"nb",3)}, ikke trekk fra: ${euro(p.na,"nb")} / ${getal(1+p.k/100,"nb",3)} = ${euro(j,"nb",2)}.`,
      el: (p,j) => `Διαιρέστε με ${getal(1+p.k/100,"el",3)}, μην αφαιρέσετε: ${euro(p.na,"el")} / ${getal(1+p.k/100,"el",3)} = ${euro(j,"el",2)}.`,
      cs: (p,j) => `Vydělte ${getal(1+p.k/100,"cs",3)}, neodčítejte: ${euro(p.na,"cs")} / ${getal(1+p.k/100,"cs",3)} = ${euro(j,"cs",2)}.`,
      uk: (p,j) => `Поділіть на ${getal(1+p.k/100,"uk",3)}, а не віднімайте: ${euro(p.na,"uk")} / ${getal(1+p.k/100,"uk",3)} = ${euro(j,"uk",2)}.`,
      hu: (p,j) => `Osszuk el ${getal(1+p.k/100,"hu",3)}-mal, ne vonjunk ki: ${euro(p.na,"hu")} / ${getal(1+p.k/100,"hu",3)} = ${euro(j,"hu",2)}.`,
      lt: (p,j) => `Padalykite iš ${getal(1+p.k/100,"lt",3)}, o ne atimkite: ${euro(p.na,"lt")} / ${getal(1+p.k/100,"lt",3)} = ${euro(j,"lt",2)}.`,
      bg: (p,j) => `Разделете на ${getal(1+p.k/100,"bg",3)}, не изваждайте: ${euro(p.na,"bg")} / ${getal(1+p.k/100,"bg",3)} = ${euro(j,"bg",2)}.`,
      sk: (p,j) => `Vydeľte ${getal(1+p.k/100,"sk",3)}, neodčítajte: ${euro(p.na,"sk")} / ${getal(1+p.k/100,"sk",3)} = ${euro(j,"sk",2)}.`,
      sl: (p,j) => `Delite s ${getal(1+p.k/100,"sl",3)}, ne odštevajte: ${euro(p.na,"sl")} / ${getal(1+p.k/100,"sl",3)} = ${euro(j,"sl",2)}.`,
      et: (p,j) => `Jagage arvuga ${getal(1+p.k/100,"et",3)}, ärge lahutage: ${euro(p.na,"et")} / ${getal(1+p.k/100,"et",3)} = ${euro(j,"et",2)}.`,
      lv: (p,j) => `Daliet ar ${getal(1+p.k/100,"lv",3)}, nevis atņemiet: ${euro(p.na,"lv")} / ${getal(1+p.k/100,"lv",3)} = ${euro(j,"lv",2)}.`,
      hr: (p,j) => `Podijelite s ${getal(1+p.k/100,"hr",3)}, ne oduzimajte: ${euro(p.na,"hr")} / ${getal(1+p.k/100,"hr",3)} = ${euro(j,"hr",2)}.`,
      sr: (p,j) => `Podelite sa ${getal(1+p.k/100,"sr",3)}, ne oduzimajte: ${euro(p.na,"sr")} / ${getal(1+p.k/100,"sr",3)} = ${euro(j,"sr",2)}.`,
      ru: (p,j) => `Разделите на ${getal(1+p.k/100,"ru",3)}, а не вычитайте: ${euro(p.na,"ru")} / ${getal(1+p.k/100,"ru",3)} = ${euro(j,"ru",2)}.`,
    },
    maak(r) {
      const voor = kies(r, [80, 95, 120, 140, 160, 180, 220, 250]);
      const k = kies(r, [4, 5, 8, 10, 12.5, 15, 20, 25]);
      const na = Math.round(voor * (1 + k / 100) * 100) / 100;
      const juist = voor;
      const afl = [
        Math.round(na * (1 - k / 100) * 100) / 100,   // trekt het percentage er weer af
        Math.round((na - k) * 100) / 100,             // behandelt het percentage als bedrag
        Math.round(na / (1 - k / 100) * 100) / 100,   // deelt door de verkeerde factor
      ];
      return { p: { na, k }, juist, afl, toon: (v, t) => euro(v, t, 2) };
    },
  },
};

/** De echte afname geeft vijf antwoordmogelijkheden. Sjablonen die minder
 *  denkfouten opleveren worden aangevuld met getallen rond het juiste antwoord,
 *  gespiegeld door het juiste antwoord heen zodat de rij niet scheef wordt. */
function vulAanTotVier(juist, afl) {
  const decimalen = Math.min((String(juist).split(".")[1] || "").length, 4);
  const rond = (x) => Number(x.toFixed(decimalen));
  const uit = [];
  const bij = (x) => {
    if (!Number.isFinite(x) || x <= 0) return;
    if (Math.abs(x - juist) < 1e-9) return;
    if (uit.some((y) => Math.abs(y - x) < 1e-9) || afl.some((y) => Math.abs(y - x) < 1e-9)) return;
    uit.push(x);
  };
  for (const d of afl) bij(rond(2 * juist - d));
  for (const f of [1.1, 0.9, 1.25, 0.75, 1.5, 0.5]) bij(rond(juist * f));
  return uit;
}

export function bouwCalculation(aantal = 250, zaad = 20260925) {
  const r = rng(zaad);
  const namen = Object.keys(T);
  const items = [], gezien = new Set();
  let n = 0, pogingen = 0;
  while (items.length < aantal && pogingen < aantal * 60) {
    pogingen++;
    const naam = namen[n++ % namen.length];
    const sj = T[naam];
    const { p, juist, afl, toon } = sj.maak(r);
    const sleutel = naam + "|" + JSON.stringify(p);
    if (gezien.has(sleutel)) continue;
    gezien.add(sleutel);
    const schone = afl.filter((x) => Math.abs(x - juist) > 1e-9).filter((v, i, a) => a.indexOf(v) === i);
    const compleet = [...schone, ...vulAanTotVier(juist, schone)];
    if (compleet.length < 4) continue;
    const { waarden, juistIndex } = schud(r, juist, compleet.slice(0, 4));
    items.push(item(
      `num-${String(items.length + 1).padStart(3, "0")}`, naam,
      (t) => ({ vraag: sj.tekst[t](p), uitleg: sj.uitleg[t](p, juist) }),
      waarden, juistIndex, toon,
    ));
  }
  return items;
}
