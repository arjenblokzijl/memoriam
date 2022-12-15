/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    fontFamily: {
      domine: 'Domine,serif',
      montserrat500: 'Montserrat,sans-serif'
    },
    extend: {
      colors: {
        'brown': {
          100: '#DFD8CF',
          200: '#624A24'
        }
      }
    },
  },
  plugins: [],
};
