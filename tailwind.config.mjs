/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    colors: {
      dark: {
        DEFAULT: "var(--dark)",
      },
      darkgray: {
        DEFAULT: "var(--darkgray)",
      },
      gray: {
        DEFAULT: "var(--gray)",
      },
      lightgray: {
        DEFAULT: "var(--lightgray)",
      },
      light: {
        DEFAULT: "var(--light)",
      },
    },
    extend: {},
  },
  plugins: [],
};
