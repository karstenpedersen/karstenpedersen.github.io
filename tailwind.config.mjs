/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "var(--primary)",
        alt: "var(--primary-alt)",
        fg: "var(--dark)",
      },
      dark: {
        DEFAULT: "var(--dark)",
        fg: "var(--light)"
      },
      light: {
        DEFAULT: "var(--light)",
        fg: "var(--dark)"
      },
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
