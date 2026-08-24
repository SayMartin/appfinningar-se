# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Regler som går före allt annat

**Kör aldrig `git commit`, `git push` eller `git add`.** Martin gör alla commits
och pushar själv. Gör ändringarna, lämna dem i arbetsträdet, och berätta vilka
filer du rört. Föreslå gärna en commit-text i löpande text — men kör den inte.
Läsande git-kommandon (`status`, `log`, `diff`) är fine.

Skälet är inte formellt: en push till `main` deployar direkt till appfinningar.se.
Att committa åt honom tar både historiken och en publik driftsättning ur hans händer.

**Hitta aldrig på uppgifter om Martin.** Sajten används för att söka jobb.
Bakgrund, utbildning, tidigare arbeten, tekniker han behärskar — sådant fylls i
av honom. Saknas ett faktum, lämna en `<p class="todo">`-ruta som syns i
webbläsaren i stället för att gissa. Detsamma gäller projektbeskrivningar: en
vag text är sämre än en synlig lucka, eftersom den ser färdig ut.

## Kommandon

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # skriver till dist/
npm run preview  # visar dist/ som den kommer se ut i drift
npm run check    # astro check — typkontroll av .astro och .ts
```

Kräver Node 22.12+. Det finns inga tester; `npm run check` är närmaste
motsvarighet och ska gå rent innan något lämnas ifrån sig.

## Arkitektur

Statisk Astro-sajt, tvåspråkig, **noll JavaScript i utdatan**. Det sista är ett
medvetet val — kontrollera att det håller (`grep -r '<script' dist`) om du lägger
till något som kan dra in klientkod.

**Språkuppdelningen är den enda strukturen som inte är uppenbar av filträdet.**
Svenska ligger i roten, engelska under `/en/` (`prefixDefaultLocale: false`).
Tre saker hänger ihop och måste hållas i synk:

1. `src/pages/` och `src/pages/en/` — en tunn fil per sida och språk, som bara
   väljer `lang` och skickar vidare.
2. `src/components/bodies/` — själva sidinnehållet, **en komponent per sida, inte
   per språk**. Den tar `lang` som prop. Duplicera aldrig en body per språk.
3. `routes` i `src/i18n/ui.ts` — sidkartan. Språkväxlaren slår upp *samma sida* på
   andra språket här. Glömmer du lägga in en ny sida i `routes` går växlaren
   sönder tyst: den skickar besökaren till förstasidan i stället för till
   översättningen, utan att något fel visas.

`Base.astro` bygger `canonical` och `hreflang` ur `routes`, så en sida som saknas
där blir också felmärkt för sökmotorer.

**Var texter bor:** korta etiketter i `src/i18n/ui.ts` (båda språken i samma
objekt). Längre prosa i respektive `bodies/`-komponent, i ett lokalt `copy`-objekt.
Blanda inte — `ui.ts` ska gå att överblicka.

**Innehåll som data:** `src/data/projects.ts` (projektkort — utelämna `repo` om
koden inte är publik, `tag` om projektet är i skarp drift) och `src/data/photos.ts`
(alt-texter per filnamn).

**Bilder:** `src/assets/photos/` läses med `import.meta.glob` i `PhotoGrid.astro` —
lägg till en fil och den finns på sajten nästa bygge, ingen lista att uppdatera.
Originalen ska ligga i full upplösning; Astro genererar 400/800/1200 px webp vid
bygget. Bygget varnar för bilder utan alt-text. Bilder i `public/` optimeras
**inte** — lägg foton i `src/assets/`, inte där.

## Deploy

Push till `main` → GitHub Actions → `npm ci && npm run build` → `wrangler pages
deploy dist`. Kräver secrets `CLOUDFLARE_API_TOKEN` och `CLOUDFLARE_ACCOUNT_ID`.

Två fällor som redan kostat tid:

**Production kontra Preview.** Uppladdningen sker med `--branch=main`. Stämmer
det inte med Pages-projektets produktionsgren blir det en preview-deployment:
Actions lyser grönt, wrangler säger "Deployment complete", och appfinningar.se
serverar fortfarande den gamla versionen. Deploy-loggen kan alltså inte användas
som bevis. Verifiera mot den riktiga domänen:

```bash
curl -sS https://appfinningar.se/ | grep -o '<title>[^<]*</title>'
```

**API Token, inte Global API Key.** De ligger på samma sida i Cloudflare och bara
den ena fungerar med wrangler. En Global API Key ger `Authentication error [code:
10000]`, vilket ser ut som ett behörighetsfel men betyder att värdet är fel sorts
hemlighet. Token behöver `Account · Cloudflare Pages · Edit` **och** kontot valt
under Account Resources — tom Account Resources ger samma felkod.

Felkod 10000 används för allt autentiseringsrelaterat och säger inget om orsaken.
Testa token mot `/user/tokens/verify` innan den läggs i en secret, i stället för
att pusha och vänta.
