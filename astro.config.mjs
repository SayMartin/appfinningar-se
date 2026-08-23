// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://appfinningar.se',

  // Svenska ligger i roten, engelska under /en/. prefixDefaultLocale: false
  // gör att appfinningar.se/ förblir den svenska förstasidan — inga redirects,
  // inga /sv/-URL:er som konkurrerar med den i sökresultaten.
  i18n: {
    defaultLocale: 'sv',
    locales: ['sv', 'en'],
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    sitemap({
      i18n: { defaultLocale: 'sv', locales: { sv: 'sv-SE', en: 'en' } },
    }),
  ],
});
