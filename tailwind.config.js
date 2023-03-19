/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './mainJs/*.js'],
  theme: {
    extend: {
      colors: {
        mainOrange: '#fab912',
      }
    },

    fontFamily: {
      iranyekan: ["iranyekan"]
    }
  },
  plugins: [],
}
