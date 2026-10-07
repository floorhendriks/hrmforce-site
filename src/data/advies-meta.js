// Titel en omschrijving van de twee adviespagina's. De pagina's zelf tonen in
// elke taal dezelfde componenten, alleen de meta verschilt, dus die staat hier
// in plaats van in zes losse paginabestanden.

import { vulAan } from "./vertaal-inhoud.js";

export const ADVIES_ASSESSMENTS = {
  nl: {
    title: "Live Assessments | Door assessoren begeleid | hrmforce",
    description: "Onze assessoren begeleiden live assessments: selectie, ontwikkeling, loopbaan, executive en teamanalyse. Bekijk alle opties.",
  },
  en: {
    title: "Live Assessments | Assessor-led | hrmforce",
    description: "Our assessors guide live assessments: selection, development, career, executive and team analysis. Explore all options.",
  },
  de: {
    title: "Live Assessments | Von Assessoren begleitet | hrmforce",
    description: "Unsere Assessoren begleiten Live-Assessments: Auswahl, Entwicklung, Laufbahn, Executive und Teamanalyse. Alle Optionen entdecken.",
  },
  fr: {
    title: "Live Assessments | Accompagné par des assesseurs | hrmforce",
    description: "Nos assesseurs accompagnent des évaluations en direct : sélection, développement, carrière, executive et analyse d'équipe. Découvrez toutes les options.",
  },
  es: {
    title: "Live Assessments | Guiado por asesores | hrmforce",
    description: "Nuestros asesores guían evaluaciones en directo: selección, desarrollo, carrera, executive y análisis de equipo. Explora todas las opciones.",
  },
  ro: {
    title: "Live Assessments | Ghidat de asesori | hrmforce",
    description: "Asesorii noștri ghidează evaluări live: selecție, dezvoltare, carieră, executive și analiză de echipă. Descoperă toate opțiunile.",
  },
};

export const ADVIES_TRAININGEN = {
  nl: {
    title: "Trainingen & certificatietraining | hrmforce",
    description: "Word met de certificatietraining van hrmforce een gecertificeerd gebruiker. Bekijk de trainingskalender en schrijf je direct in.",
  },
  en: {
    title: "Training & certification | hrmforce",
    description: "Become a certified hrmforce user with our certification training. Check the calendar and register directly.",
  },
  de: {
    title: "Schulungen & Zertifizierung | hrmforce",
    description: "Werden Sie mit der Zertifizierungsschulung von hrmforce zertifizierter Nutzer. Kalender ansehen und direkt anmelden.",
  },
  fr: {
    title: "Formations & certification | hrmforce",
    description: "Devenez utilisateur certifie hrmforce avec notre formation de certification. Consultez le calendrier et inscrivez-vous.",
  },
  es: {
    title: "Formacion y certificacion | hrmforce",
    description: "Conviertete en usuario certificado de hrmforce con nuestra formacion de certificacion. Consulta el calendario e inscribete.",
  },
  ro: {
    title: "Training & certificare | hrmforce",
    description: "Devino utilizator certificat hrmforce cu cursul nostru de certificare. Vezi calendarul si inscrie-te direct.",
  },
};

// Talen zonder eigen tekst in dit bestand worden aangevuld uit
// src/data/translations-content/<taal>.json. Zie vertaal-inhoud.js.
Object.assign(ADVIES_ASSESSMENTS, vulAan(ADVIES_ASSESSMENTS));
Object.assign(ADVIES_TRAININGEN, vulAan(ADVIES_TRAININGEN));
