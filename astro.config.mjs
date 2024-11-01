// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), alpinejs(), db()],
  vite: {
    ssr: {
      noExternal: ['three'],
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ge"],
    routing: {
      prefixDefaultLocale: false
    }
  },
});
