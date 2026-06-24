// Sanity-client voor de site. Vult zich met de waarden uit je .env-bestand:
//   SANITY_PROJECT_ID=...
//   SANITY_DATASET=production
import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true, // sneller; zet op false als je altijd de nieuwste content wilt
});

// Kies de juiste taal uit een meertalig veld, met terugval op Nederlands.
export function pick(field, lang) {
  if (!field) return "";
  return field[lang] ?? field.nl ?? "";
}
