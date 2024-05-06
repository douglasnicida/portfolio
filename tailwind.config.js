/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      dropShadow: {
        logo: "3px 3px 0px #FE3140"
      }
    },
    colors: {
      backgroundDark: "#131313",
      containerDark: "151515",
      backgroundLight: "#F3F3F3",
      myRed: "#FE3140",
      secondaryTextDark: "#A7A7A7",
      headerItems: "#D9D9D9",

      transparent: "transparent",
      black: "black",
      white: "white"
    },

    fontFamily: {
      'oxanium': ['Oxanium', 'sans-serif'],
      'passionOne': ['Passion One', 'sans-serif']
    }
  },
  plugins: [],
}
