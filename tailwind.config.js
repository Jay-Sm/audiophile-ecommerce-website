/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      "theme-black": "#0f0f0f",
      "theme-orange": "#fbad83",
      "theme-orange2": "#d97e4a",
      "theme-gray": "#f2f2f2",
      "theme-gray2": "#ffffff80",
    },
    fontFamily: {
      manrope: "Manrope",
    },
    screens: {
      mobile: "640px",
      tablet: "960px",
      laptop: "1460px",
      "laptop-lg": "1920px",
      "laptop-xl": "2560px",
      "tv-screen": "3840px",
    },
    extend: {},
  },
  plugins: [],
};
