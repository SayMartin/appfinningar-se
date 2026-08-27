import type { Lang } from '../i18n/ui';

export interface Project {
  id: string;
  name: string;
  /** Short label next to the name, e.g. Beta or Demo. Omitted once a project is in real use. */
  tag?: Record<Lang, string>;
  url: string;
  /** Host name shown on the card — no protocol, so it reads as an address rather than a link. */
  host: string;
  /** Public repo. Omitted when the code is not open — the card then shows no source link. */
  repo?: string;
  description: Record<Lang, string>;
}

export const projects: Project[] = [
  {
    id: 'cv-forge',
    name: 'CV Forge',
    tag: { sv: 'Beta', en: 'Beta' },
    url: 'https://cv-forge.appfinningar.se/',
    host: 'cv-forge.appfinningar.se',
    // repo: 'https://github.com/SayMartin/cv-forge',
    description: {
      sv: 'Ett verktyg för att skapa, hantera och exportera CV:n. Du lägger in dina erfarenheter, utbildningar och färdigheter en gång, och sätter sedan ihop olika CV:n av samma innehåll — med egna färger, valfri layout och utskriftsfärdig PDF. Har du redan ett CV som PDF kan det importeras och läsas in automatiskt.',
      en: 'A tool for creating, managing and exporting CVs. You enter your experience, education and skills once, then assemble different CVs from the same content — with your own colours, a layout of your choosing and a print-ready PDF. Already have a CV as a PDF? It can be imported and parsed automatically.',
    },
  },

  // TODO Martin: rewrite the description below to say what Wordlune actually
  // is. I only know the name, so the text is deliberately vague — and a vague
  // description is exactly what makes a search hit worthless. Both languages.
  {
    id: 'wordlune',
    name: 'Wordlune',
    tag: { sv: 'Beta', en: 'Beta' },
    url: 'https://wordlune.appfinningar.se/',
    host: 'wordlune.appfinningar.se',
    // repo: 'https://github.com/SayMartin/Wordlune',
    description: {
      sv: 'Ett ordspel för webben och mobilen, just nu i en tidig testversion för en mindre krets. Släpps på Google Play när det är färdigt.',
      en: 'A word game for web and mobile, currently in an early test release for a small group. Coming to Google Play once it is finished.',
    },
  },

  // TODO Martin: add the repo URL here if the code is public. Without `repo`
  // the card simply renders without a source link, which is the right
  // behaviour when the repo is private.
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
