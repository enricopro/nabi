/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#151516", //gray, box background
        secondary: "#a1a1a6" //text
      }
    },
    fontFamily: {
      sans: ['"Work Sans"'],
    },
  },
  plugins: [],
}
