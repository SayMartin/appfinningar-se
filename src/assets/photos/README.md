# Foton

Lägg bildfilerna här (`.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`). De plockas upp
automatiskt vid nästa bygge — ingen lista att uppdatera någon annanstans.

**Lägg in originalen i full upplösning.** Astro skalar ner dem till 400, 800 och
1200 px breda webp-varianter vid bygget och låter webbläsaren välja rätt storlek.
Krymper du dem i förväg får du bara sämre bilder på stora skärmar.

Filnamnet styr ordningen (sorteras alfabetiskt) och blir nödlösning för alt-text
om ingen är angiven. `2026-06-vattern-gryning.jpg` är alltså bättre än `IMG_4821.jpg`.

Skriv alt-text för varje bild i `src/data/photos.ts`. Bygget varnar för de som
saknas — utan alt-text är bilden osynlig för skärmläsare och för Google.
