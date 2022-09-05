/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#151516", //gray, box background
        secondary: "#b4b4b8", //text
        bg_blue: "#385263"
      }
    },
    fontFamily: {
      sans: ['Futura', 'sans-serif'],
    },
    screens: {
      'md': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
    },

  },
  plugins: [],
}
