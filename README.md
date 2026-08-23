# appfinningar.se

Portfolio och projektsajt för Martin. Statisk sajt byggd med [Astro](https://astro.build),
driftad på Cloudflare Pages, på svenska och engelska.

## Kom igång

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # skriver till dist/
npm run preview  # visar dist/ som den kommer se ut i drift
```

Kräver Node 22.12 eller senare.

## Struktur

| Sökväg | Innehåll |
|---|---|
| `src/pages/` | En fil per sida. Svenska i roten, engelska under `en/`. |
| `src/components/bodies/` | Sidinnehållet, delat mellan språken — en komponent per sida, inte per språk. |
| `src/i18n/ui.ts` | Alla korta texter och etiketter, båda språken. Även sidkartan `routes`. |
| `src/data/projects.ts` | Projektkorten. Lägg till ett projekt här och det dyker upp på båda språken. |
| `src/data/photos.ts` | Alt-texter till bilderna. |
| `src/assets/photos/` | Bildfilerna. Se README:n i mappen. |
| `public/` | Filer som kopieras rakt igenom orörda: favicon, robots.txt, ett eventuellt CV. |

## Vanliga ändringar

**Lägg till ett projekt** — ett objekt i `src/data/projects.ts`. Utelämna `repo`
om koden inte är publik, så visas ingen källkodslänk. Utelämna `tag` om projektet
är i skarp drift.

**Lägg till bilder** — släpp filerna i `src/assets/photos/` i full upplösning och
skriv alt-text i `src/data/photos.ts`. Bygget varnar för bilder som saknar alt-text.

**Lägg till en sida** — skapa filen i både `src/pages/` och `src/pages/en/`, och
lägg till den i `routes` i `src/i18n/ui.ts`. Då hittar språkväxlaren rätt
motsvarighet i stället för att kasta besökaren till förstasidan.

**Ändra en text** — nästan allt kort ligger i `src/i18n/ui.ts`. Längre prosa ligger
i respektive `bodies/`-komponent.

## Språk

Svenska ligger i roten (`/`, `/om/`, `/foto/`), engelska under `/en/`. Sidorna
länkar till varandra med `hreflang`, så Google förstår att de är översättningar
och inte dubblettinnehåll. `x-default` pekar på svenska.

## Deploy

Push till `main` bygger och laddar upp automatiskt via GitHub Actions.

Två secrets måste finnas i repot (Settings → Secrets and variables → Actions):

| Namn | Värde |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare-token med behörigheten Account · Cloudflare Pages · Edit |
| `CLOUDFLARE_ACCOUNT_ID` | `CLOUDFLARE_ACCOUNT_ID` |

Saknas de misslyckas jobbet med `it's necessary to set a CLOUDFLARE_API_TOKEN
environment variable`. Loggens `with:`-block visar då bara `command:` — det är
sättet att se att en secret saknas snarare än är felaktig.

### Det som är värt att kontrollera efter första deployen

Uppladdningen sker med `--branch=main`. Heter Pages-projektets produktionsgren
något annat blir resultatet en **preview-deployment**: Actions lyser grönt,
wrangler rapporterar lyckat, och appfinningar.se fortsätter servera den gamla
versionen. Det är det mest förvirrande sättet det här kan misslyckas på.

Kontrollera i Cloudflare → Pages → appfinningar → Deployments att den nya raden
är märkt **Production**, inte Preview.
