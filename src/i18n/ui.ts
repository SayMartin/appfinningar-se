export const languages = { sv: "Svenska", en: "English" } as const;
export type Lang = keyof typeof languages;

export const defaultLang: Lang = "sv";

/**
 * Site map per language. The key is the page's identity, the value is its URL
 * in that language — so the language switcher can send a visitor to the *same*
 * page in the other language instead of always throwing them back to the home
 * page.
 */
export const routes = {
  home: { sv: "/", en: "/en/" },
  about: { sv: "/om/", en: "/en/about/" },
  photos: { sv: "/foto/", en: "/en/photos/" },
} as const;

export type RouteKey = keyof typeof routes;

export const ui = {
  sv: {
    "site.name": "Appfinningar",
    "site.tagline": "Appar och webbtjänster av Martin",
    "site.stage": "Under uppbyggnad",

    "nav.home": "Projekt",
    "nav.about": "Om mig",
    // 'nav.photos': 'Foto',
    "nav.skipToContent": "Hoppa till innehållet",
    "nav.language": "Byt språk",
    "nav.menu": "Meny",

    "home.title": "Appfinningar — appar och webbtjänster av Martin",
    "home.description":
      "Portfolio för Martin: CV Forge för att skapa och exportera CV:n, ordspelet Wordlune, och ett publiceringssystem för folkhögskolor.",
    "home.h1": "Idéer som blir av.",
    "home.h1.line2": "Kod som blir klar.",
    "home.lede":
      "Jag heter Martin och tycker om att koda. Webbtjänster och mobilappar blir hobbyprojekt som jag bygger färdigt i stället för att lämna som idé, och gärna i en ny techstack varje gång — det är så jag lär mig mest. Här är det som är igång just nu.",

    "projects.heading": "Projekt",
    "projects.visit": "Besök sajten",

    "photos.heading": "Foto",
    "photos.lede": "Bilder jag tagit.",
    "photos.seeAll": "Se alla bilder",
    "photos.title": "Foto — Appfinningar",
    "photos.description": "Ett urval bilder tagna av Martin.",
    "photos.empty":
      "Inga bilder inlagda ännu. Lägg dina foton i src/assets/photos/ så dyker de upp här nästa gång sajten byggs.",

    "about.heading": "Om mig",
    "about.title": "Om mig — Martin, Appfinningar",
    "about.description":
      "Om Martin: bakgrund, vad jag arbetar med och hur du får tag på mig.",
    "about.readMore": "Läs mer om mig",

    "contact.heading": "Kontakt",
    "contact.available": "Öppen för uppdrag och anställning",
    "contact.email": "Mejla mig",
    "contact.lede":
      "Har du en idé som borde finnas på riktigt? Hör av dig — jag svarar.",

    "footer.holder": "Martin Persson  ·  "
  },

  en: {
    "site.name": "Appfinningar",
    "site.tagline": "Apps and web services by Martin",
    "site.stage": "Work in progress",

    "nav.home": "Projects",
    "nav.about": "About",
    // 'nav.photos': 'Photos',
    "nav.skipToContent": "Skip to content",
    "nav.language": "Change language",
    "nav.menu": "Menu",

    "home.title": "Appfinningar — apps and web services by Martin",
    "home.description":
      "Martin's portfolio: CV Forge for building and exporting CVs, the word game Wordlune, and a publishing system for folk high schools.",
    "home.h1": "Ideas that happen.",
    "home.h1.line2": "Code that gets finished.",
    "home.lede":
      "I'm Martin, and I like to code. Web services and mobile apps turn into hobby projects that I finish rather than leave as ideas — preferably in a new tech stack each time, since that is how I learn the most. Here's what's running right now.",

    "projects.heading": "Projects",
    "projects.visit": "Visit site",

    "photos.heading": "Photography",
    "photos.lede": "Pictures I have taken.",
    "photos.seeAll": "See all photos",
    "photos.title": "Photography — Appfinningar",
    "photos.description": "A selection of photographs taken by Martin.",
    "photos.empty":
      "No photos added yet. Drop your images into src/assets/photos/ and they will appear here the next time the site builds.",

    "about.heading": "About me",
    "about.title": "About — Martin, Appfinningar",
    "about.description":
      "About Martin: background, what I work with, and how to reach me.",
    "about.readMore": "More about me",

    "contact.heading": "Contact",
    "contact.available": "Open to freelance work and employment",
    "contact.email": "Email me",
    "contact.lede":
      "Got an idea that ought to exist for real? Get in touch — I answer.",

    "footer.holder": "Martin Persson · ",
  },
} as const;

export function t(lang: Lang) {
  return function translate(key: keyof (typeof ui)["sv"]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
