/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
      serif: ['"Cormorant Unicase"', ...defaultTheme.fontFamily.serif],
      work: ['"Work Sans"', ...defaultTheme.fontFamily.sans],
      fira: ['"Fira Code"', ...defaultTheme.fontFamily.sans],
      sixcaps: ['"Six Caps"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "#0F9FBFD",
        secondary: "#C0C0C",
        third: "#E02323",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
