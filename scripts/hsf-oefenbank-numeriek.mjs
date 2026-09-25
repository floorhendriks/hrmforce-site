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
    },
    uitleg: {
      nl: (p,j) => `Verschil is ${getal(p.b-p.a,"nl")}. Deel door het oude aantal: ${getal(p.b-p.a,"nl")} / ${getal(p.a,"nl")} = ${procent(j,"nl",1)}.`,
      en: (p,j) => `The difference is ${getal(p.b-p.a,"en")}. Divide by the old figure: ${getal(p.b-p.a,"en")} / ${getal(p.a,"en")} = ${procent(j,"en",1)}.`,
      de: (p,j) => `Die Differenz beträgt ${getal(p.b-p.a,"de")}. Geteilt durch den alten Wert: ${getal(p.b-p.a,"de")} / ${getal(p.a,"de")} = ${procent(j,"de",1)}.`,
      fr: (p,j) => `La différence est de ${getal(p.b-p.a,"fr")}. Divisez par l'ancien chiffre : ${getal(p.b-p.a,"fr")} / ${getal(p.a,"fr")} = ${procent(j,"fr",1)}.`,
      es: (p,j) => `La diferencia es ${getal(p.b-p.a,"es")}. Divide entre la cifra anterior: ${getal(p.b-p.a,"es")} / ${getal(p.a,"es")} = ${procent(j,"es",1)}.`,
      ro: (p,j) => `Diferența este ${getal(p.b-p.a,"ro")}. Împărțiți la valoarea veche: ${getal(p.b-p.a,"ro")} / ${getal(p.a,"ro")} = ${procent(j,"ro",1)}.`,
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
    },
    uitleg: {
      nl: (p,j) => `${getal(p.deel,"nl")} / ${getal(p.tot,"nl")} = ${procent(j,"nl",1)}.`,
      en: (p,j) => `${getal(p.deel,"en")} / ${getal(p.tot,"en")} = ${procent(j,"en",1)}.`,
      de: (p,j) => `${getal(p.deel,"de")} / ${getal(p.tot,"de")} = ${procent(j,"de",1)}.`,
      fr: (p,j) => `${getal(p.deel,"fr")} / ${getal(p.tot,"fr")} = ${procent(j,"fr",1)}.`,
      es: (p,j) => `${getal(p.deel,"es")} / ${getal(p.tot,"es")} = ${procent(j,"es",1)}.`,
      ro: (p,j) => `${getal(p.deel,"ro")} / ${getal(p.tot,"ro")} = ${procent(j,"ro",1)}.`,
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
    },
    uitleg: {
      nl: (p,j) => `A: ${euro(p.pa/p.qa,"nl",2)} per stuk. B: ${euro(p.pb/p.qb,"nl",2)}. Verschil ${euro(j,"nl",2)}.`,
      en: (p,j) => `A: ${euro(p.pa/p.qa,"en",2)} each. B: ${euro(p.pb/p.qb,"en",2)}. Difference ${euro(j,"en",2)}.`,
      de: (p,j) => `A: ${euro(p.pa/p.qa,"de",2)} je Stück. B: ${euro(p.pb/p.qb,"de",2)}. Differenz ${euro(j,"de",2)}.`,
      fr: (p,j) => `A : ${euro(p.pa/p.qa,"fr",2)} l'unité. B : ${euro(p.pb/p.qb,"fr",2)}. Écart ${euro(j,"fr",2)}.`,
      es: (p,j) => `A: ${euro(p.pa/p.qa,"es",2)} por unidad. B: ${euro(p.pb/p.qb,"es",2)}. Diferencia ${euro(j,"es",2)}.`,
      ro: (p,j) => `A: ${euro(p.pa/p.qa,"ro",2)} bucata. B: ${euro(p.pb/p.qb,"ro",2)}. Diferență ${euro(j,"ro",2)}.`,
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
    },
    uitleg: {
      nl: (p,j) => `Vijf keer ${getal(p.gem,"nl")} is ${getal(p.gem*5,"nl")}. Daar de vier bekende vanaf: ${getal(p.gem*5,"nl")} - ${getal(p.som,"nl")} = ${getal(j,"nl")}.`,
      en: (p,j) => `Five times ${getal(p.gem,"en")} is ${getal(p.gem*5,"en")}. Subtract the four known: ${getal(p.gem*5,"en")} - ${getal(p.som,"en")} = ${getal(j,"en")}.`,
      de: (p,j) => `Fünfmal ${getal(p.gem,"de")} ergibt ${getal(p.gem*5,"de")}. Die vier bekannten abziehen: ${getal(p.gem*5,"de")} - ${getal(p.som,"de")} = ${getal(j,"de")}.`,
      fr: (p,j) => `Cinq fois ${getal(p.gem,"fr")} font ${getal(p.gem*5,"fr")}. Retirez les quatre connus : ${getal(p.gem*5,"fr")} - ${getal(p.som,"fr")} = ${getal(j,"fr")}.`,
      es: (p,j) => `Cinco veces ${getal(p.gem,"es")} son ${getal(p.gem*5,"es")}. Resta las cuatro conocidas: ${getal(p.gem*5,"es")} - ${getal(p.som,"es")} = ${getal(j,"es")}.`,
      ro: (p,j) => `De cinci ori ${getal(p.gem,"ro")} înseamnă ${getal(p.gem*5,"ro")}. Scădeți cele patru cunoscute: ${getal(p.gem*5,"ro")} - ${getal(p.som,"ro")} = ${getal(j,"ro")}.`,
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
    },
    uitleg: {
      nl: (p,j) => `${getal(p.n,"nl")} x ${euro(p.prijs,"nl")} = ${euro(p.n*p.prijs,"nl")}. Daarvan ${procent(100-p.k,"nl")}: ${euro(j,"nl")}.`,
      en: (p,j) => `${getal(p.n,"en")} x ${euro(p.prijs,"en")} = ${euro(p.n*p.prijs,"en")}. Of that, ${procent(100-p.k,"en")}: ${euro(j,"en")}.`,
      de: (p,j) => `${getal(p.n,"de")} x ${euro(p.prijs,"de")} = ${euro(p.n*p.prijs,"de")}. Davon ${procent(100-p.k,"de")}: ${euro(j,"de")}.`,
      fr: (p,j) => `${getal(p.n,"fr")} x ${euro(p.prijs,"fr")} = ${euro(p.n*p.prijs,"fr")}. Soit ${procent(100-p.k,"fr")} : ${euro(j,"fr")}.`,
      es: (p,j) => `${getal(p.n,"es")} x ${euro(p.prijs,"es")} = ${euro(p.n*p.prijs,"es")}. De eso, ${procent(100-p.k,"es")}: ${euro(j,"es")}.`,
      ro: (p,j) => `${getal(p.n,"ro")} x ${euro(p.prijs,"ro")} = ${euro(p.n*p.prijs,"ro")}. Din care ${procent(100-p.k,"ro")}: ${euro(j,"ro")}.`,
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
    },
    uitleg: {
      nl: (p,j) => `Samen ${p.a+p.b+p.c} delen. Eén deel is ${euro(p.tot/(p.a+p.b+p.c),"nl")}, maal ${Math.max(p.a,p.b,p.c)} is ${euro(j,"nl")}.`,
      en: (p,j) => `${p.a+p.b+p.c} parts in total. One part is ${euro(p.tot/(p.a+p.b+p.c),"en")}, times ${Math.max(p.a,p.b,p.c)} is ${euro(j,"en")}.`,
      de: (p,j) => `Zusammen ${p.a+p.b+p.c} Teile. Ein Teil sind ${euro(p.tot/(p.a+p.b+p.c),"de")}, mal ${Math.max(p.a,p.b,p.c)} ergibt ${euro(j,"de")}.`,
      fr: (p,j) => `${p.a+p.b+p.c} parts au total. Une part vaut ${euro(p.tot/(p.a+p.b+p.c),"fr")}, fois ${Math.max(p.a,p.b,p.c)} donne ${euro(j,"fr")}.`,
      es: (p,j) => `${p.a+p.b+p.c} partes en total. Una parte es ${euro(p.tot/(p.a+p.b+p.c),"es")}, por ${Math.max(p.a,p.b,p.c)} da ${euro(j,"es")}.`,
      ro: (p,j) => `${p.a+p.b+p.c} părți în total. O parte este ${euro(p.tot/(p.a+p.b+p.c),"ro")}, ori ${Math.max(p.a,p.b,p.c)} dă ${euro(j,"ro")}.`,
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
    },
    uitleg: {
      nl: (p,j) => `Per uur ${getal(p.n/p.u,"nl",1)} rapporten. ${getal(p.n2,"nl")} / ${getal(p.n/p.u,"nl",1)} = ${getal(j,"nl",1)} uur.`,
      en: (p,j) => `${getal(p.n/p.u,"en",1)} reports per hour. ${getal(p.n2,"en")} / ${getal(p.n/p.u,"en",1)} = ${getal(j,"en",1)} hours.`,
      de: (p,j) => `${getal(p.n/p.u,"de",1)} Berichte pro Stunde. ${getal(p.n2,"de")} / ${getal(p.n/p.u,"de",1)} = ${getal(j,"de",1)} Stunden.`,
      fr: (p,j) => `${getal(p.n/p.u,"fr",1)} rapports par heure. ${getal(p.n2,"fr")} / ${getal(p.n/p.u,"fr",1)} = ${getal(j,"fr",1)} heures.`,
      es: (p,j) => `${getal(p.n/p.u,"es",1)} informes por hora. ${getal(p.n2,"es")} / ${getal(p.n/p.u,"es",1)} = ${getal(j,"es",1)} horas.`,
      ro: (p,j) => `${getal(p.n/p.u,"ro",1)} rapoarte pe oră. ${getal(p.n2,"ro")} / ${getal(p.n/p.u,"ro",1)} = ${getal(j,"ro",1)} ore.`,
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
    },
    uitleg: {
      nl: (p,j) => `Deel door ${getal(1+p.k/100,"nl",3)}, niet aftrekken: ${euro(p.na,"nl")} / ${getal(1+p.k/100,"nl",3)} = ${euro(j,"nl",2)}.`,
      en: (p,j) => `Divide by ${getal(1+p.k/100,"en",3)}, do not subtract: ${euro(p.na,"en")} / ${getal(1+p.k/100,"en",3)} = ${euro(j,"en",2)}.`,
      de: (p,j) => `Durch ${getal(1+p.k/100,"de",3)} teilen, nicht abziehen: ${euro(p.na,"de")} / ${getal(1+p.k/100,"de",3)} = ${euro(j,"de",2)}.`,
      fr: (p,j) => `Divisez par ${getal(1+p.k/100,"fr",3)}, ne soustrayez pas : ${euro(p.na,"fr")} / ${getal(1+p.k/100,"fr",3)} = ${euro(j,"fr",2)}.`,
      es: (p,j) => `Divide entre ${getal(1+p.k/100,"es",3)}, no restes: ${euro(p.na,"es")} / ${getal(1+p.k/100,"es",3)} = ${euro(j,"es",2)}.`,
      ro: (p,j) => `Împărțiți la ${getal(1+p.k/100,"ro",3)}, nu scădeți: ${euro(p.na,"ro")} / ${getal(1+p.k/100,"ro",3)} = ${euro(j,"ro",2)}.`,
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

export function bouwNumeriek(aantal = 250, zaad = 20260925) {
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
    if (schone.length < 3) continue;
    const { waarden, juistIndex } = schud(r, juist, schone.slice(0, 3));
    items.push(item(
      `num-${String(items.length + 1).padStart(3, "0")}`, naam,
      (t) => ({ vraag: sj.tekst[t](p), uitleg: sj.uitleg[t](p, juist) }),
      waarden, juistIndex, toon,
    ));
  }
  return items;
}
