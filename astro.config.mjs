import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './src/consts/constants';

// https://astro.build/config
export default defineConfig({
  site: 'https://gomen.dev', // Update this to your actual domain when deployed
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport"
  },
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: DEFAULT_LANGUAGE,
    locales: [...SUPPORTED_LANGUAGES],
    routing: {
      prefixDefaultLocale: true,
    },
    fallback: {
      en: "es",
    },
  },
});
