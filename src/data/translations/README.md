# Vertaalbestanden van het Skills Framework

Per taal een bestand `<taalcode>.json`: een platte map van de **Engelse** string naar de
vertaling in die taal.

```json
{ "Managing Director": "Geschaftsfuhrer", "Branch Director": "Niederlassungsleiter" }
```

- Gemaakt door `node scripts/hsf-translate-data.mjs` (DeepL, zie de kop van dat script).
- `src/lib/hsf-i18n.ts` leest deze bestanden op buildtijd in en vult de datavelden aan,
  zodat de views gewoon `veld[taal]` kunnen gebruiken.
- Een string die hier niet in staat valt terug op Engels. Een taal zonder bestand valt
  volledig terug op Engels, precies zoals voor de vertaling.
- Slugs staan hier NIET in: url's van de andere talen blijven de Engelse slug gebruiken.
- Handmatig bijschaven mag: pas de waarde aan en bouw opnieuw. De DeepL-cache in
  `scripts/.deepl-cache.json` overschrijft deze bestanden alleen als het script opnieuw loopt.

Na het vertalen ook de zoekindex opnieuw bouwen:

```
node scripts/hsf-build-search.mjs
```
