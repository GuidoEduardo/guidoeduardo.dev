/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      sixcaps: ['"Six Caps"', ...defaultTheme.fontFamily.sans],
      pontano: ['"Pontano Sans"', ...defaultTheme.fontFamily.sans],
      spartan: ['"League Spartan"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "#F9FBFD",
        secondary: "#0C0C0C",
        third: "#E02323",
      },
      backgroundImage: {
        'post-texture': "url('/hover.webp')",
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
