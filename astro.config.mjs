import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://www-links.pages.dev',
  compressHTML: true,
  prefetch: true,
  server: {
    port: 5173,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    sitemap(),
  ],
})
