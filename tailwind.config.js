/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './mainJs/*.js', './components/*/*.js'],
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
