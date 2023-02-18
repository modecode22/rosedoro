/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
        c1:"rgb(0, 0,0)",
        c2:"rgb(22, 29, 111)",
        c3:"rgb(152, 222, 217)",
        c4:"rgb(199, 255, 216)",
      }
    },
  },
  plugins: [],
}
