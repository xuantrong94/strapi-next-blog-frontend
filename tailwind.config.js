/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      primary: {
        500: '#53bd95',
        700: '#2c785c',
      },
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        fira: [
          'FiraCode-Bold',
          'FiraCode-Light',
          'FiraCode-Medium',
          'FiraCode-Regular',
          'FiraCode-SemiBold',
        ],
      },
      colors: colors,
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
