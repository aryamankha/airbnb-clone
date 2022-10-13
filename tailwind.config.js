/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'Rausch':'#FF5A5F',
      'Babu':'#00A699',
      'Arches':'#FC642D',
      'Hof':'#484848',
      'Foggy':'#767676'
    },
    extend: {
      fontFamily:{
        montserrat: ['Montserrat'],
      },
    },
  },
  plugins: [],
};
