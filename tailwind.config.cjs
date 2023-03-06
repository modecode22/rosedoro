/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
        foreground: "#000000",
        neutral: {
          50: "#fafafa",
          100: "#f4f4f4",
          200: "#e6e6e6",
          300: "#d4d4d4",
          400: "#a2a2a2",
          500: "#727272",
          600: "#535353",
          700: "#404040",
          800: "#272727",
          900: "#181818",
        },
        rose: {
          DEFAULT: "#fdc9e0",
          50: "#fef2f7",
          100: "#fce4ef",
          200: "#fdc9e0",
          300: "#fea1c9",
          400: "#fc68a6",
          500: "#f43b87",
          600: "#e11464",
          700: "#c2094c",
          800: "#a01340",
          900: "#851739",
        },
        gold: {
          DEFAULT: "#f8d496",
          50: "#fdf8ed",
          100: "#faeccf",
          200: "#f8d496",
          300: "#f8b953",
          400: "#f39400",
          500: "#e97e00",
          600: "#d96800",
          700: "#b45000",
          800: "#923e00",
          900: "#783300",
        },
        teal: {
          DEFAULT: "#5dc5e5",
          50: "#f0fdff",
          100: "#cff6ff",
          200: "#aaecfb",
          300: "#7dddf5",
          400: "#5dc5e5",
          500: "#48abce",
          600: "#388aaf",
          700: "#2a6f90",
          800: "#235b77",
          900: "#1e4c66",
        },
      },
    },
  },
  plugins: [],
}



