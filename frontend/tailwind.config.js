/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor:"#0067FF",
        yellowColor: "FEB60D",
        lightYellowColor: "#FFFAB7",
        purpleColor: "#9771FF",
        darkBlueColor: "#074173",
        lightBlueColor: "#1679AB",
        skyBlueColor: "#5DEBD7",
        headingColor: "#074173",
        textColor: "#4E545F",
        neonColor: "#C5FF95",
      },
      boxShadow:{
        panelShadow: "rgba(17, 12, 46, 015) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
}

