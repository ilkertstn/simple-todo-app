/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
   colors:{
    todoColor:"#3C424A",
    inputColor:"#343A40",
    bottomBorderColor:"#343940",
    lightPink:"#F06292",
    white:"#EEEEEE",
    borderColor:"#2E3238",
    memoColor:"#A9B1BA",
    popupColor:"#484f59",
    black:"rgb(0 0 0)"
   }
  },
  plugins: [],
}