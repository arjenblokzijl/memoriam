/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    fontFamily: {
      domine: "Domine,serif",
      montserrat: "Montserrat,sans-serif",
    },
    extend: {
      colors: {
        brown: {
          80: "#F5F5F5",
          90: "#8F8780",
          100: "#DFD8CF",
          200: "#624A24",
        },
        yellow: "#DB6F0C",
      },
    },
  },
  plugins: [],
};
