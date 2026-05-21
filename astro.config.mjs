import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://omicsdesk.com',
  redirects: {
    '/validation/cs1-mouse-heart': '/validation/cs1-scrnaseq-mouse-heart/',
    '/validation/cs4-proteomics': '/validation/cs4-proteomics-tumor-normal/',
    '/validation/cs5-phospho': '/validation/cs5-phospho-sleep/',
    '/validation/cs6-wgs': '/validation/cs6-wgs-giab/',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
