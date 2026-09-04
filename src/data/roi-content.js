// ROI-rekentool-content per taal, gebruikt door src/components/RoiRekentool.astro.
// NL = leidend. EN/DE/FR/ES/RO zijn een eerste vertaalslag, laat nakijken door een native speaker.
// LET OP: de rekenlogica en de <option>-waarden (basis/compleet/premium) blijven ongewijzigd;
// alleen labels/teksten komen uit dit bestand.
export const roiContent = {
  nl: {
    meta: {
      title: "ROI-rekentool | Hrmforce",
      description: "Bereken het indicatieve rendement van professionele selectie-instrumenten met de ROI-rekentool van hrmforce, gebaseerd op Utility Analysis.",
    },
    crumb: "ROI-rekentool",
    hero: {
      eyebrow: "ROI-rekentool",
      title: "Bereken je wervingsrendement",
      intro: "Bereken indicatief wat investeren in professionele selectie-instrumenten oplevert. De berekening is gebaseerd op Utility Analysis (Cronbach & Gleser).",
    },
    form: {
      orgHeading: "Organisatie",
      wervingen: "Aantal wervingen per jaar",
      sollicitanten: "Gemiddeld aantal sollicitanten per vacature",
      salaris: "Gemiddeld bruto jaarsalaris (€)",
      pakketHeading: "Selectiepakket",
      pakketLabel: "Gewenst selectiepakket",
      pakketOptions: {
        basis: "Basis, 1 vragenlijst (Rv 0,30)",
        compleet: "Compleet, 3 vragenlijsten (Rv 0,50)",
        premium: "Premium, compleet + extra tools (Rv 0,65)",
      },
      advancedHeading: "Geavanceerde instellingen",
      zx: "Selectiescore (Zx)",
      sd: "Standaarddeviatie prestaties (% van salaris)",
      kosten: "Kosten per assessment (€)",
    },
    result: {
      eyebrow: "Berekend rendement (indicatief)",
      nettoLabel: "Netto jaarlijks rendement",
      bruto: "Bruto opbrengst",
      investering: "Totale investering",
      aantal: "Aantal assessments",
      roi: "Return on Investment",
      cta: "Vraag een offerte op maat aan",
      note: "<b>Let op:</b> alle bedragen zijn indicatief en bedoeld als richtlijn. Werkelijke resultaten zijn afhankelijk van je organisatie, functies en gebruik. Staffelkortingen vanaf 20 afnames; ook licenties voor onbeperkt gebruik zijn mogelijk. Neem contact op voor een berekening op maat.",
    },
    explain: {
      eyebrow: "Hoe werkt deze calculator?",
      title: "De formule achter het rendement",
      p1: "Deze ROI-calculator toont indicatief wat investeren in professionele selectie-instrumenten oplevert, op basis van Utility Analysis volgens Cronbach en Gleser.",
      formula: "<b>Netto rendement = (N × Rv × Zx × SD€) − totale kosten</b>",
      factors: [
        "N, aantal nieuwe medewerkers per jaar",
        "Rv, validiteit van het instrument (voorspelkracht)",
        "Zx, selectiescore (hoe selectief je bent)",
        "SD€, verschil tussen een goede en gemiddelde presteerder",
      ],
      offerHeading: "<b>Wat biedt hrmforce?</b>",
      offerList: [
        "Basis: 1 vragenlijst, validiteit 0,30",
        "Compleet: 3 vragenlijsten, validiteit 0,50",
        "Premium: compleet + matching, benchmarks en meer, validiteit 0,65",
      ],
      costsNote: "Kosten = aantal kandidaten × kosten per assessment. Bij 3 sollicitanten per vacature en 50 wervingen zijn dat 150 assessments.",
    },
  },
};

// en/de/fr/es/ro erven de NL-structuur en overschrijven de teksten.
const clone = (o) => JSON.parse(JSON.stringify(o));

// ---- EN ----
roiContent.en = clone(roiContent.nl);
Object.assign(roiContent.en.meta, {
  title: "ROI calculator | Hrmforce",
  description: "Calculate the indicative return of professional selection instruments with the hrmforce ROI calculator, based on Utility Analysis.",
});
roiContent.en.crumb = "ROI calculator";
Object.assign(roiContent.en.hero, {
  eyebrow: "ROI calculator",
  title: "Calculate your recruitment return",
  intro: "Get an indicative view of what investing in professional selection instruments delivers. The calculation is based on Utility Analysis (Cronbach & Gleser).",
});
Object.assign(roiContent.en.form, {
  orgHeading: "Organisation",
  wervingen: "Number of hires per year",
  sollicitanten: "Average number of applicants per vacancy",
  salaris: "Average gross annual salary (€)",
  pakketHeading: "Selection package",
  pakketLabel: "Preferred selection package",
  pakketOptions: {
    basis: "Basic, 1 questionnaire (Rv 0.30)",
    compleet: "Complete, 3 questionnaires (Rv 0.50)",
    premium: "Premium, complete + extra tools (Rv 0.65)",
  },
  advancedHeading: "Advanced settings",
  zx: "Selection score (Zx)",
  sd: "Performance standard deviation (% of salary)",
  kosten: "Cost per assessment (€)",
});
Object.assign(roiContent.en.result, {
  eyebrow: "Calculated return (indicative)",
  nettoLabel: "Net annual return",
  bruto: "Gross benefit",
  investering: "Total investment",
  aantal: "Number of assessments",
  roi: "Return on investment",
  cta: "Request a tailored quote",
  note: "<b>Please note:</b> all amounts are indicative and intended as a guideline. Actual results depend on your organisation, roles and usage. Volume discounts from 20 assessments; licences for unlimited use are also available. Contact us for a tailored calculation.",
});
Object.assign(roiContent.en.explain, {
  eyebrow: "How does this calculator work?",
  title: "The formula behind the return",
  p1: "This ROI calculator gives an indicative view of what investing in professional selection instruments delivers, based on Utility Analysis according to Cronbach and Gleser.",
  formula: "<b>Net return = (N × Rv × Zx × SD€) − total costs</b>",
  factors: [
    "N, number of new employees per year",
    "Rv, validity of the instrument (predictive power)",
    "Zx, selection score (how selective you are)",
    "SD€, difference between a strong and an average performer",
  ],
  offerHeading: "<b>What does hrmforce offer?</b>",
  offerList: [
    "Basic: 1 questionnaire, validity 0.30",
    "Complete: 3 questionnaires, validity 0.50",
    "Premium: complete + matching, benchmarks and more, validity 0.65",
  ],
  costsNote: "Costs = number of candidates × cost per assessment. With 3 applicants per vacancy and 50 hires, that is 150 assessments.",
});

// ---- DE ----
roiContent.de = clone(roiContent.nl);
Object.assign(roiContent.de.meta, {
  title: "ROI-Rechner | Hrmforce",
  description: "Berechnen Sie den indikativen Ertrag professioneller Auswahlinstrumente mit dem hrmforce ROI-Rechner, basierend auf Utility Analysis.",
});
roiContent.de.crumb = "ROI-Rechner";
Object.assign(roiContent.de.hero, {
  eyebrow: "ROI-Rechner",
  title: "Berechnen Sie Ihren Recruiting-Ertrag",
  intro: "Ermitteln Sie indikativ, was die Investition in professionelle Auswahlinstrumente bringt. Die Berechnung basiert auf Utility Analysis (Cronbach & Gleser).",
});
Object.assign(roiContent.de.form, {
  orgHeading: "Organisation",
  wervingen: "Anzahl Einstellungen pro Jahr",
  sollicitanten: "Durchschnittliche Anzahl Bewerber pro Stelle",
  salaris: "Durchschnittliches Bruttojahresgehalt (€)",
  pakketHeading: "Auswahlpaket",
  pakketLabel: "Gewünschtes Auswahlpaket",
  pakketOptions: {
    basis: "Basis, 1 Fragebogen (Rv 0,30)",
    compleet: "Komplett, 3 Fragebögen (Rv 0,50)",
    premium: "Premium, komplett + Zusatztools (Rv 0,65)",
  },
  advancedHeading: "Erweiterte Einstellungen",
  zx: "Auswahlscore (Zx)",
  sd: "Standardabweichung Leistung (% des Gehalts)",
  kosten: "Kosten pro Assessment (€)",
});
Object.assign(roiContent.de.result, {
  eyebrow: "Berechneter Ertrag (indikativ)",
  nettoLabel: "Jährlicher Nettoertrag",
  bruto: "Bruttoertrag",
  investering: "Gesamtinvestition",
  aantal: "Anzahl Assessments",
  roi: "Return on Investment",
  cta: "Individuelles Angebot anfordern",
  note: "<b>Hinweis:</b> Alle Beträge sind indikativ und als Richtwert gedacht. Die tatsächlichen Ergebnisse hängen von Ihrer Organisation, den Funktionen und der Nutzung ab. Mengenrabatte ab 20 Assessments; Lizenzen für unbegrenzte Nutzung sind ebenfalls möglich. Kontaktieren Sie uns für eine individuelle Berechnung.",
});
Object.assign(roiContent.de.explain, {
  eyebrow: "Wie funktioniert dieser Rechner?",
  title: "Die Formel hinter dem Ertrag",
  p1: "Dieser ROI-Rechner zeigt indikativ, was die Investition in professionelle Auswahlinstrumente bringt, auf Basis der Utility Analysis nach Cronbach und Gleser.",
  formula: "<b>Nettoertrag = (N × Rv × Zx × SD€) − Gesamtkosten</b>",
  factors: [
    "N, Anzahl neuer Mitarbeiter pro Jahr",
    "Rv, Validität des Instruments (Vorhersagekraft)",
    "Zx, Auswahlscore (wie selektiv Sie sind)",
    "SD€, Unterschied zwischen einem guten und einem durchschnittlichen Leistungsträger",
  ],
  offerHeading: "<b>Was bietet hrmforce?</b>",
  offerList: [
    "Basis: 1 Fragebogen, Validität 0,30",
    "Komplett: 3 Fragebögen, Validität 0,50",
    "Premium: komplett + Matching, Benchmarks und mehr, Validität 0,65",
  ],
  costsNote: "Kosten = Anzahl Kandidaten × Kosten pro Assessment. Bei 3 Bewerbern pro Stelle und 50 Einstellungen sind das 150 Assessments.",
});

// ---- FR ----
roiContent.fr = clone(roiContent.nl);
Object.assign(roiContent.fr.meta, {
  title: "Calculateur de ROI | Hrmforce",
  description: "Calculez le rendement indicatif des instruments de sélection professionnels avec le calculateur de ROI de hrmforce, basé sur l'Utility Analysis.",
});
roiContent.fr.crumb = "Calculateur de ROI";
Object.assign(roiContent.fr.hero, {
  eyebrow: "Calculateur de ROI",
  title: "Calculez le rendement de votre recrutement",
  intro: "Estimez de façon indicative ce que rapporte l'investissement dans des instruments de sélection professionnels. Le calcul repose sur l'Utility Analysis (Cronbach & Gleser).",
});
Object.assign(roiContent.fr.form, {
  orgHeading: "Organisation",
  wervingen: "Nombre de recrutements par an",
  sollicitanten: "Nombre moyen de candidats par poste",
  salaris: "Salaire annuel brut moyen (€)",
  pakketHeading: "Pack de sélection",
  pakketLabel: "Pack de sélection souhaité",
  pakketOptions: {
    basis: "Basique, 1 questionnaire (Rv 0,30)",
    compleet: "Complet, 3 questionnaires (Rv 0,50)",
    premium: "Premium, complet + outils supplémentaires (Rv 0,65)",
  },
  advancedHeading: "Paramètres avancés",
  zx: "Score de sélection (Zx)",
  sd: "Écart-type des performances (% du salaire)",
  kosten: "Coût par évaluation (€)",
});
Object.assign(roiContent.fr.result, {
  eyebrow: "Rendement calculé (indicatif)",
  nettoLabel: "Rendement net annuel",
  bruto: "Bénéfice brut",
  investering: "Investissement total",
  aantal: "Nombre d'évaluations",
  roi: "Retour sur investissement",
  cta: "Demander un devis sur mesure",
  note: "<b>Attention :</b> tous les montants sont indicatifs et donnés à titre de repère. Les résultats réels dépendent de votre organisation, des fonctions et de l'usage. Remises sur volume à partir de 20 évaluations ; des licences pour un usage illimité sont également possibles. Contactez-nous pour un calcul sur mesure.",
});
Object.assign(roiContent.fr.explain, {
  eyebrow: "Comment fonctionne ce calculateur ?",
  title: "La formule derrière le rendement",
  p1: "Ce calculateur de ROI estime de façon indicative ce que rapporte l'investissement dans des instruments de sélection professionnels, sur la base de l'Utility Analysis selon Cronbach et Gleser.",
  formula: "<b>Rendement net = (N × Rv × Zx × SD€) − coûts totaux</b>",
  factors: [
    "N, nombre de nouveaux collaborateurs par an",
    "Rv, validité de l'instrument (pouvoir prédictif)",
    "Zx, score de sélection (votre degré de sélectivité)",
    "SD€, écart entre un bon et un collaborateur moyen",
  ],
  offerHeading: "<b>Que propose hrmforce ?</b>",
  offerList: [
    "Basique : 1 questionnaire, validité 0,30",
    "Complet : 3 questionnaires, validité 0,50",
    "Premium : complet + matching, benchmarks et plus, validité 0,65",
  ],
  costsNote: "Coûts = nombre de candidats × coût par évaluation. Avec 3 candidats par poste et 50 recrutements, cela fait 150 évaluations.",
});

// ---- ES ----
roiContent.es = clone(roiContent.nl);
Object.assign(roiContent.es.meta, {
  title: "Calculadora de ROI | Hrmforce",
  description: "Calcule el rendimiento indicativo de los instrumentos de selección profesionales con la calculadora de ROI de hrmforce, basada en Utility Analysis.",
});
roiContent.es.crumb = "Calculadora de ROI";
Object.assign(roiContent.es.hero, {
  eyebrow: "Calculadora de ROI",
  title: "Calcule el rendimiento de su selección",
  intro: "Obtenga una estimación indicativa de lo que aporta invertir en instrumentos de selección profesionales. El cálculo se basa en el Utility Analysis (Cronbach & Gleser).",
});
Object.assign(roiContent.es.form, {
  orgHeading: "Organización",
  wervingen: "Número de contrataciones por año",
  sollicitanten: "Número medio de candidatos por vacante",
  salaris: "Salario bruto anual medio (€)",
  pakketHeading: "Paquete de selección",
  pakketLabel: "Paquete de selección deseado",
  pakketOptions: {
    basis: "Básico, 1 cuestionario (Rv 0,30)",
    compleet: "Completo, 3 cuestionarios (Rv 0,50)",
    premium: "Premium, completo + herramientas extra (Rv 0,65)",
  },
  advancedHeading: "Ajustes avanzados",
  zx: "Puntuación de selección (Zx)",
  sd: "Desviación estándar del rendimiento (% del salario)",
  kosten: "Coste por evaluación (€)",
});
Object.assign(roiContent.es.result, {
  eyebrow: "Rendimiento calculado (indicativo)",
  nettoLabel: "Rendimiento neto anual",
  bruto: "Beneficio bruto",
  investering: "Inversión total",
  aantal: "Número de evaluaciones",
  roi: "Retorno de la inversión",
  cta: "Solicitar un presupuesto a medida",
  note: "<b>Atención:</b> todos los importes son indicativos y sirven de orientación. Los resultados reales dependen de su organización, los puestos y el uso. Descuentos por volumen a partir de 20 evaluaciones; también hay licencias de uso ilimitado. Contáctenos para un cálculo a medida.",
});
Object.assign(roiContent.es.explain, {
  eyebrow: "¿Cómo funciona esta calculadora?",
  title: "La fórmula detrás del rendimiento",
  p1: "Esta calculadora de ROI ofrece una estimación indicativa de lo que aporta invertir en instrumentos de selección profesionales, basada en el Utility Analysis según Cronbach y Gleser.",
  formula: "<b>Rendimiento neto = (N × Rv × Zx × SD€) − costes totales</b>",
  factors: [
    "N, número de nuevos empleados por año",
    "Rv, validez del instrumento (capacidad predictiva)",
    "Zx, puntuación de selección (cuán selectivo es)",
    "SD€, diferencia entre un buen empleado y uno medio",
  ],
  offerHeading: "<b>¿Qué ofrece hrmforce?</b>",
  offerList: [
    "Básico: 1 cuestionario, validez 0,30",
    "Completo: 3 cuestionarios, validez 0,50",
    "Premium: completo + matching, benchmarks y más, validez 0,65",
  ],
  costsNote: "Costes = número de candidatos × coste por evaluación. Con 3 candidatos por vacante y 50 contrataciones, son 150 evaluaciones.",
});

// ---- RO ----
roiContent.ro = clone(roiContent.nl);
Object.assign(roiContent.ro.meta, {
  title: "Calculator ROI | Hrmforce",
  description: "Calculați randamentul indicativ al instrumentelor de selecție profesionale cu calculatorul ROI hrmforce, bazat pe Utility Analysis.",
});
roiContent.ro.crumb = "Calculator ROI";
Object.assign(roiContent.ro.hero, {
  eyebrow: "Calculator ROI",
  title: "Calculați randamentul recrutării",
  intro: "Aflați indicativ ce aduce investiția în instrumente de selecție profesionale. Calculul se bazează pe Utility Analysis (Cronbach & Gleser).",
});
Object.assign(roiContent.ro.form, {
  orgHeading: "Organizație",
  wervingen: "Număr de angajări pe an",
  sollicitanten: "Număr mediu de candidați per post",
  salaris: "Salariu brut anual mediu (€)",
  pakketHeading: "Pachet de selecție",
  pakketLabel: "Pachetul de selecție dorit",
  pakketOptions: {
    basis: "De bază, 1 chestionar (Rv 0,30)",
    compleet: "Complet, 3 chestionare (Rv 0,50)",
    premium: "Premium, complet + instrumente suplimentare (Rv 0,65)",
  },
  advancedHeading: "Setări avansate",
  zx: "Scor de selecție (Zx)",
  sd: "Abaterea standard a performanței (% din salariu)",
  kosten: "Cost per evaluare (€)",
});
Object.assign(roiContent.ro.result, {
  eyebrow: "Randament calculat (indicativ)",
  nettoLabel: "Randament net anual",
  bruto: "Beneficiu brut",
  investering: "Investiție totală",
  aantal: "Număr de evaluări",
  roi: "Return on Investment",
  cta: "Solicitați o ofertă personalizată",
  note: "<b>Atenție:</b> toate sumele sunt indicative și au rol orientativ. Rezultatele reale depind de organizația dvs., de funcții și de utilizare. Reduceri de volum de la 20 de evaluări; sunt posibile și licențe pentru utilizare nelimitată. Contactați-ne pentru un calcul personalizat.",
});
Object.assign(roiContent.ro.explain, {
  eyebrow: "Cum funcționează acest calculator?",
  title: "Formula din spatele randamentului",
  p1: "Acest calculator ROI arată indicativ ce aduce investiția în instrumente de selecție profesionale, pe baza Utility Analysis conform Cronbach și Gleser.",
  formula: "<b>Randament net = (N × Rv × Zx × SD€) − costuri totale</b>",
  factors: [
    "N, numărul de angajați noi pe an",
    "Rv, validitatea instrumentului (puterea de predicție)",
    "Zx, scorul de selecție (cât de selectiv sunteți)",
    "SD€, diferența dintre un angajat bun și unul mediu",
  ],
  offerHeading: "<b>Ce oferă hrmforce?</b>",
  offerList: [
    "De bază: 1 chestionar, validitate 0,30",
    "Complet: 3 chestionare, validitate 0,50",
    "Premium: complet + matching, benchmark-uri și altele, validitate 0,65",
  ],
  costsNote: "Costuri = numărul de candidați × costul per evaluare. Cu 3 candidați per post și 50 de angajări, rezultă 150 de evaluări.",
});
