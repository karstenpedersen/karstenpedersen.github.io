/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      link: {
        DEFAULT: "var(--link)",
        visited: "var(--link-visited)",
        active: "var(--link-active)",
      },
    },
    extend: {},
  },
  plugins: [],
};
