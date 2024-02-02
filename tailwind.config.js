/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "g1a": "#7755FF",
        "g1b": "#2F2CE9",
        "g2a": "#4D21C9", 
        "g2b": "hsl(241, 72%, 46%, 0%)", 
        "yellow": "#FFB21E", 
        "blue": "#1125D6", 
        "green": "#00BB8F", 
        "red": "#FF5555", 
        "dark-navy": "#303B59", 
        "light-blue": "#CAC9FF", 
        "very-light-blue": "#ECF2FF",
        "white": "#FFFFFF",
      },
      fontFamily:{
        "sans": ["Hanken Grotesk"]
      }
    },
  },
  plugins: [],
}