import type { Lang } from '../i18n/ui';

export interface Project {
  id: string;
  name: string;
  /** Kort etikett bredvid namnet, t.ex. Beta eller Demo. Utelämnas om projektet är i skarp drift. */
  tag?: Record<Lang, string>;
  url: string;
  /** Värdnamnet som visas i kortet — utan protokoll, så det läses som en adress och inte som en länk. */
  host: string;
  /** Publikt repo. Utelämnas om koden inte är öppen — då visas ingen källkodslänk. */
  repo?: string;
  description: Record<Lang, string>;
}

export const projects: Project[] = [
  {
    id: 'cv-forge',
    name: 'CV Forge',
    url: 'https://cv-forge.appfinningar.se/',
    host: 'cv-forge.appfinningar.se',
    repo: 'https://github.com/SayMartin/cv-forge',
    description: {
      sv: 'Ett verktyg för att skapa, hantera och exportera CV:n. Du lägger in dina erfarenheter, utbildningar och färdigheter en gång, och sätter sedan ihop olika CV:n av samma innehåll — med egna färger, valfri layout och utskriftsfärdig PDF. Har du redan ett CV som PDF kan det importeras och läsas in automatiskt.',
      en: 'A tool for creating, managing and exporting CVs. You enter your experience, education and skills once, then assemble different CVs from the same content — with your own colours, a layout of your choosing and a print-ready PDF. Already have a CV as a PDF? It can be imported and parsed automatically.',
    },
  },

  // TODO Martin: skriv om beskrivningen nedan till vad Wordlune faktiskt är.
  // Jag vet bara namnet, så texten är medvetet vag — och en vag beskrivning är
  // precis det som gör en sökträff värdelös. Gäller båda språken.
  {
    id: 'wordlune',
    name: 'Wordlune',
    tag: { sv: 'Beta', en: 'Beta' },
    url: 'https://wordlune.appfinningar.se/',
    host: 'wordlune.appfinningar.se',
    repo: 'https://github.com/SayMartin/Wordlune',
    description: {
      sv: 'Ett ordspel för webben och mobilen, just nu i en tidig testversion för en mindre krets. Släpps på Google Play när det är färdigt.',
      en: 'A word game for web and mobile, currently in an early test release for a small group. Coming to Google Play once it is finished.',
    },
  },

  // TODO Martin: lägg till repo-URL här om koden ligger publikt. Utan `repo`
  // visas kortet helt enkelt utan källkodslänk, vilket är rätt beteende om
  // repot är privat.
  {
    id: 'school-cms',
    name: 'School CMS',
    tag: { sv: 'Demo', en: 'Demo' },
    url: 'https://school-cms-demo.appfinningar.se/',
    host: 'school-cms-demo.appfinningar.se',
    description: {
      sv: 'Ett publiceringssystem för folkhögskolor och mindre utbildningsanordnare: kurser, personal och nyheter som redigeras direkt i webbläsaren, utan att någon behöver röra kod. Sajten bakom länken är en fungerande demo med påhittat innehåll — "Demo Folk High School" är ingen riktig skola, utan finns till för att visa hur systemet ser ut i drift.',
      en: 'A publishing system for folk high schools and smaller education providers: courses, staff and news edited straight in the browser, with nobody having to touch code. The site behind the link is a working demo with invented content — "Demo Folk High School" is not a real school; it exists to show what the system looks like in use.',
    },
  },
];
