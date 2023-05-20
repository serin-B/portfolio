/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "Arial", "sans-serif"],
      },
      colors: {
        "l-lemon": "#FFEEB8",
        "l-yellow": "#FECF63",
        "l-green": "#A8C989",
        "l-pink": "#FCB9B0",
        "l-red": "#F8674C",
        "l-brown": "#967C64",
      },
    },
  },
  plugins: [],
};
