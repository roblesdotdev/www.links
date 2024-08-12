import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  prefetch: true,
  server: {
    port: 5173,
  },
});
