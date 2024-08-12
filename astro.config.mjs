import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  prefetch: true,
  server: {
    port: 5173,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
