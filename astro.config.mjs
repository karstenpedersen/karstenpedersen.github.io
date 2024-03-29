import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import qwikdev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://karstenpedersen.github.io',
  integrations: [tailwind(), qwikdev()]
});