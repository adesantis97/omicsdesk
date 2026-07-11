import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// ⚠️ PERSONALIZZA: metti qui il dominio definitivo di tuo fratello (senza slash finale).
// Serve per URL canonici, Open Graph, sitemap e robots.txt.
const SITE_URL = 'https://www.esempio-osteopata.it';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
