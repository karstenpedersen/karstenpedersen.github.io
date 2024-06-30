import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import qwikdev from "@qwikdev/astro";
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://karstenpedersen.github.io',
  integrations: [tailwind(), qwikdev(), expressiveCode({
    styleOverrides: {
      shadowColor: '#000000'
    },
    plugins: [pluginLineNumbers()],
    defaultProps: {
      showLineNumbers: false
    },
    useDarkModeMediaQuery: true
  }), icon()]
});
