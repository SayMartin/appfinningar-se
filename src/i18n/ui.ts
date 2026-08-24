export const languages = { sv: 'Svenska', en: 'English' } as const;
export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'sv';

/**
 * Sidkarta per språk. Nyckeln är sidans identitet, värdet är dess URL i det
 * språket — så språkväxlaren kan skicka besökaren till *samma* sida på andra
 * språket i stället för att alltid kasta tillbaka till förstasidan.
 */
export const routes = {
  home: { sv: '/', en: '/en/' },
  about: { sv: '/om/', en: '/en/about/' },
  photos: { sv: '/foto/', en: '/en/photos/' },
} as const;

export type RouteKey = keyof typeof routes;

export const ui = {
  sv: {
    'site.name': 'Appfinningar',
    'site.tagline': 'Appar och webbtjänster av Martin',

    'nav.home': 'Projekt',
    'nav.about': 'Om mig',
    // 'nav.photos': 'Foto',
    'nav.skipToContent': 'Hoppa till innehållet',
    'nav.language': 'Byt språk',

    'home.title': 'Appfinningar — appar och webbtjänster av Martin',
    'home.description':
      'Portfolio för Martin: CV Forge för att skapa och exportera CV:n, ordspelet Wordlune, och ett publiceringssystem för folkhögskolor.',
    'home.h1': 'Små appar, byggda för att faktiskt användas.',
    'home.lede':
      'Jag heter Martin och bygger webbtjänster och mobilappar som börjar i ett konkret behov och blir färdiga i stället för att stanna som idé. Här är det som är igång just nu.',

    'projects.heading': 'Projekt',
    'projects.visit': 'Besök sajten',

    'photos.heading': 'Foto',
    'photos.lede': 'Bilder jag tagit.',
    'photos.seeAll': 'Se alla bilder',
    'photos.title': 'Foto — Appfinningar',
    'photos.description': 'Ett urval bilder tagna av Martin.',
    'photos.empty':
      'Inga bilder inlagda ännu. Lägg dina foton i src/assets/photos/ så dyker de upp här nästa gång sajten byggs.',

    'about.heading': 'Om mig',
    'about.title': 'Om mig — Martin, Appfinningar',
    'about.description':
      'Om Martin: bakgrund, vad jag arbetar med och hur du får tag på mig.',
    'about.readMore': 'Läs mer om mig',

    'contact.heading': 'Kontakt',
    'contact.available': 'Öppen för uppdrag och anställning',
    'contact.email': 'Mejla mig',
    'contact.lede':
      'Letar du efter någon som bygger färdigt? Hör av dig — jag svarar på allt.',

    'footer.holder': 'Martin Persson · appfinningar.se'
  },

  en: {
    'site.name': 'Appfinningar',
    'site.tagline': 'Apps and web services by Martin',

    'nav.home': 'Projects',
    'nav.about': 'About',
    // 'nav.photos': 'Photos',
    'nav.skipToContent': 'Skip to content',
    'nav.language': 'Change language',

    'home.title': 'Appfinningar — apps and web services by Martin',
    'home.description':
      "Martin's portfolio: CV Forge for building and exporting CVs, the word game Wordlune, and a publishing system for folk high schools. Plus photography.",
    'home.h1': 'Small apps, built to actually be used.',
    'home.lede':
      "I'm Martin. I build web services and mobile apps that start from a concrete need and get finished rather than staying an idea. Here's what's running right now.",

    'projects.heading': 'Projects',
    'projects.visit': 'Visit site',

    'photos.heading': 'Photography',
    'photos.lede': 'Pictures I have taken.',
    'photos.seeAll': 'See all photos',
    'photos.title': 'Photography — Appfinningar',
    'photos.description': 'A selection of photographs taken by Martin.',
    'photos.empty':
      'No photos added yet. Drop your images into src/assets/photos/ and they will appear here the next time the site builds.',

    'about.heading': 'About me',
    'about.title': 'About — Martin, Appfinningar',
    'about.description':
      'About Martin: background, what I work with, and how to reach me.',
    'about.readMore': 'More about me',

    'contact.heading': 'Contact',
    'contact.available': 'Open to freelance work and employment',
    'contact.email': 'Email me',
    'contact.lede':
      "Looking for someone who finishes what they start? Get in touch — I answer everything.",

    'footer.holder': 'Martin Persson · '  },
} as const;

export function t(lang: Lang) {
  return function translate(key: keyof (typeof ui)['sv']): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
