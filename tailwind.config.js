/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      dropShadow: {
        logo: "3px 3px 0px #FE3140",
        white: "0px 0px 3px #FFFFFF",
        gray: "0px 0px 2px #131313",
        subtitle: "0px 3px 8px rgb(0 0 0 / 0.24)",
        image: "0px 0px 6px rgb(0 0 0 / 0.54)"
      },

      backgroundImage: {
        me: "url('/src/assets/me.png')",
        meAI: "url('/src/assets/meAI.png')",
      },
    },
    colors: {
      backgroundDark: "#131313",
      containerDark: "#151515",
      containerLight: "white",
      backgroundLight: "#F3F3F3",
      myRed: "#FE3140",
      myRedHover: '#A11F28',
      secondaryTextDark: "#A7A7A7",
      headerItems: "#D9D9D9",
      introDetails: "#868686",

      transparent: "transparent",
      black: "black",
      white: "white",
      neutral: "neutral",
      sky: "#4361EE",
      github: "#66108F",
      githubHover: "#4c1068",
      whatsapp: "rgba(37, 211, 102)",
      whatsappHover: "rgba(18, 140, 126)"
    },

    fontFamily: {
      'oxanium': ['Oxanium', 'sans-serif'],
      'passionOne': ['Passion One', 'sans-serif']
    },

    padding: {
      layout: "0 100px",
      responsiveLayout: "0 40px",
    }
  },
  plugins: [],
}
