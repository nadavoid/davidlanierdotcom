// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // The `site` option is required by @astrojs/rss. Use the SITE env var in production.
  site: process.env.SITE ?? 'http://localhost:4321',
  integrations: [mdx()],
});
