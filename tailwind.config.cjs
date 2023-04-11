/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
      serif: ['"Cormorant Unicase"', ...defaultTheme.fontFamily.serif],
      work: ['"Work Sans"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "#0C0C0C",
        secondary: "#F9FBFD",
        third: "#F3C98A",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
