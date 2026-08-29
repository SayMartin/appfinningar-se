import type { Lang } from '../i18n/ui';

export interface Project {
  id: string;
  name: string;
  /** Short state label next to the name — Demo, Live, and so on. Omitted when there is nothing worth saying. */
  tag?: Record<Lang, string>;
  url: string;
  /** Host name shown on the card — no protocol, so it reads as an address rather than a link. */
  host: string;
  /** Public repo. Omitted when the code is not open — the card then shows no source link. */
  repo?: string;
  /** What the project does. */
  description: Record<Lang, string>;
  /** How it is built. Prose, not a list — the point is why a choice matters, not the tally. */
  stack: Record<Lang, string>;
}

export const projects: Project[] = [
  // Munka first, and School CMS straight after it: the demo is the generalised
  // form of the Munka build, and the two cards only tell that story if they are
  // read together.
  {
    id: 'munka',
    name: 'Munka Folkhögskola',
    tag: { sv: 'I drift', en: 'Live' },
    url: 'https://www.munkafolkhogskola.se/',
    host: 'munkafolkhogskola.se',
    description: {
      sv: 'Folkhögskolans nya webbplats, byggd under min praktik och i drift sedan 1 juli 2026. Den ersatte en äldre WordPress-sajt med ett eget system, och tyngdpunkten ligger i redigeringsdelen: lärarna ändrar innehållet på samtliga sidor själva, direkt i webbläsaren, utan att någon behöver gå in i koden. Hela kodbasen är skriven av mig, och jag är stolt över en insats som används i skarpt läge. Jag är inte längre delaktig — drift och uppdateringar är skolans ansvar.',
      en: "The folk high school's new website, built during my placement and live since 1 July 2026. It replaced an older WordPress site with a system of its own, and the weight of it sits in the editing side: the teachers change the content on every page themselves, straight in the browser, with nobody having to go into the code. The entire codebase is mine, and I am proud of work that is in real use. I am no longer involved — running and updating it is the school's own responsibility.",
    },
    stack: {
      sv: 'Next.js, React och TypeScript, med Prisma mot databasen och drift hos Cloudflare. Det är det här bygget School CMS växte ur.',
      en: 'Next.js, React and TypeScript, with Prisma against the database and hosting on Cloudflare. This is the build School CMS grew out of.',
    },
  },

  {
    id: 'school-cms',
    name: 'School CMS',
    tag: { sv: 'Demo', en: 'Demo' },
    url: 'https://school-cms-demo.appfinningar.se/',
    host: 'school-cms-demo.appfinningar.se',
    description: {
      sv: 'Munka-bygget generaliserat: ett publiceringssystem för folkhögskolor och mindre utbildningsanordnare, inte bundet till en enda skola. Kurser, personal, nyheter och matsedlar redigeras direkt i webbläsaren, varje roll i sin egen portal — redaktion, kök, vaktmästeri, administration. Sajten bakom länken är en fungerande demo med påhittat innehåll och öppna testinloggningar för varje roll. "Demo Folk High School" är ingen riktig skola.',
      en: 'The Munka build generalised: a publishing system for folk high schools and smaller education providers, tied to no single school. Courses, staff, news and lunch menus are edited straight in the browser, each role in its own portal — editorial, kitchen, facilities, administration. The site behind the link is a working demo with invented content and open test logins for every role. "Demo Folk High School" is not a real school.',
    },
    stack: {
      sv: 'Next.js på Cloudflares edge via OpenNext: Workers kör koden, D1 är databas genom Drizzle, R2 håller filerna och Better Auth sköter inloggningarna. Ingen egen server inblandad — det är samma sajt i alla regioner.',
      en: "Next.js on Cloudflare's edge through OpenNext: Workers run the code, D1 is the database by way of Drizzle, R2 holds the files and Better Auth handles the logins. No server of my own involved — it is the same site in every region.",
    },
  },

  {
    id: 'cv-forge',
    name: 'CV Forge',
    url: 'https://cv-forge.appfinningar.se/',
    host: 'cv-forge.appfinningar.se',
    description: {
      sv: 'Ett verktyg för att skapa, hantera och exportera CV:n. Du lägger in erfarenheter, utbildningar och färdigheter en gång i ett innehållsbibliotek, och sätter sedan ihop flera olika CV:n av samma material — egen layout, egna färger, egen ordning på avsnitten, utskriftsfärdig A4-PDF. Har du redan ett CV som PDF läses det in automatiskt och fyller biblioteket åt dig.',
      en: 'A tool for creating, managing and exporting CVs. You enter your experience, education and skills once into a content library, then assemble several different CVs from the same material — its own layout, its own colours, its own section order, a print-ready A4 PDF. Already have a CV as a PDF? It is parsed automatically and fills the library for you.',
    },
    stack: {
      sv: 'Next.js och TypeScript mot en självdriftad Postgres via Prisma, med Better Auth för inloggning och Cloudflare R2 för filerna. PDF-importen går genom Google Gemini. Allt kör i Docker på egen hårdvara, byggt av GitHub Actions och utlagt bakom en Cloudflare Tunnel.',
      en: 'Next.js and TypeScript over a self-hosted Postgres through Prisma, with Better Auth for sign-in and Cloudflare R2 for the files. The PDF import runs through Google Gemini. All of it in Docker on my own hardware, built by GitHub Actions and exposed behind a Cloudflare Tunnel.',
    },
  },

  {
    id: 'wordlune',
    name: 'Wordlune',
    url: 'https://wordlune.appfinningar.se/',
    host: 'wordlune.appfinningar.se',
    description: {
      sv: 'Ett ordspel där ledtråden är vad du vet, inte hur många ord du kan. Varje hemligt ord hör till en kategori — afrikanska huvudstäder, matvaror, bilmärken — och kategorin visas. Bokstäverna smalnar av fältet, allmänbildningen stänger det. Tre spellägen: träning mot valda ämnen, en veckotävling, och dueller i realtid där två spelare jagar samma ord. Finns på svenska, engelska och franska.',
      en: 'A word game where the clue is what you know, not how many words you know. Every hidden word belongs to a category — African capitals, groceries, car brands — and the category is shown. The letters narrow the field; general knowledge closes it. Three modes: practice against the subjects you pick, a weekly competition, and real-time duels where two players chase the same word. In Swedish, English and French.',
    },
    stack: {
      sv: 'En Expo/React Native-kodbas som blir iOS, Android och webb samtidigt. Under ligger Supabase med Postgres, realtid och radnivåsäkerhet på varje tabell — vem som får se vad avgörs i databasen, inte i klienten. Byggs i Docker och driftsätts via GitHub Actions till min egen server bakom en Cloudflare Tunnel.',
      en: 'One Expo/React Native codebase that becomes iOS, Android and web at the same time. Underneath sits Supabase with Postgres, realtime and row-level security on every table — who may see what is settled in the database, not in the client. Built in Docker and deployed by GitHub Actions to my own server behind a Cloudflare Tunnel.',
    },
  },

  {
    id: 'appfinningar-se',
    name: 'appfinningar.se',
    tag: { sv: 'Du är här', en: 'You are here' },
    url: 'https://appfinningar.se/',
    host: 'appfinningar.se',
    repo: 'https://github.com/SayMartin/appfinningar-se',
    description: {
      sv: 'Sajten du läser just nu. Portfolio och projektsida på två språk, byggd som en övning i att skicka så lite som möjligt: ingen JavaScript når besökaren, texterna finns i båda språken i samma källa, och språkväxlaren tar dig till samma sida i stället för att kasta tillbaka dig till förstasidan.',
      en: 'The site you are reading right now. A portfolio and project page in two languages, built as an exercise in shipping as little as possible: no JavaScript reaches the visitor, the copy for both languages lives in one source, and the language switcher takes you to the same page rather than throwing you back to the front.',
    },
    stack: {
      sv: 'Astro och TypeScript, statiskt byggd till ren HTML. Bilderna blir webp i tre storlekar vid bygget, och hreflang-taggarna genereras ur samma sidkarta som språkväxlaren läser — de kan inte glida isär. Driftsätts på Cloudflare Pages av GitHub Actions vid varje push till main.',
      en: 'Astro and TypeScript, built statically to plain HTML. Images become webp in three sizes at build time, and the hreflang tags are generated from the same site map the language switcher reads — they cannot drift apart. Deployed to Cloudflare Pages by GitHub Actions on every push to main.',
    },
  },
];
