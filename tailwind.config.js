/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      "theme-orange": "#fbad83",
      "theme-orange2": "#d97e4a",
      "theme-gray": "#f2f2f2",
      "theme-gray2": "#ffffff80",
    },
    fontFamily: {
      manrope: "Manrope"
    },
    extend: {},
  },
  plugins: [],
};
