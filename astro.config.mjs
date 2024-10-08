import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://4321-idx-astro-avanzado-1720108738756.cluster-m7tpz3bmgjgoqrktlvd4ykrc2m.cloudworkstations.dev/",
  integrations: [tailwind(), icon({
    include: {
      lucide: ['*']
    }
  }), sitemap()]
});