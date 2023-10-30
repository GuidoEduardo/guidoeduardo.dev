/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ['Jost', ...defaultTheme.fontFamily.sans],
      serif: ['"Marcellus SC"', ...defaultTheme.fontFamily.serif],
      handle: ['"Handle Change"', ...defaultTheme.fontFamily.sans],
      mono: ['"Major Mono Display"', ...defaultTheme.fontFamily.sans],
      syncopate: ['Syncopate', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        black: "#030303",
        white: "#DFE7EE",
        grey: "#212325"
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
