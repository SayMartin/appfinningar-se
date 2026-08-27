// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://appfinningar.se',

  // Swedish lives at the root, English under /en/. prefixDefaultLocale: false
  // keeps appfinningar.se/ as the Swedish home page — no redirects, and no
  // /sv/ URLs competing with it in search results.
  i18n: {
    defaultLocale: 'sv',
    locales: ['sv', 'en'],
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    sitemap({
      i18n: { defaultLocale: 'sv', locales: { sv: 'sv-SE', en: 'en' } },

      // The photo pages still build, but nothing links to them any more, so
      // they stay out of the sitemap. Put the photo section back on the home
      // page and this filter goes with it.
      filter: (page) => !/\/(foto|en\/photos)\/$/.test(page),
    }),
  ],
});
