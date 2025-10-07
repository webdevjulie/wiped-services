import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://webdevjulie.github.io/wiped-services',
  integrations: [mdx(), sitemap()],
  outDir: './dist', // just to be explicit
});
