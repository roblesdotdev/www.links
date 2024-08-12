import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  output: 'static',
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
  ],
})
