/* eslint-disable global-require */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-blue-HypeX': '#16162B',
        'hypex-purple': '#FF01FF',
      },
      fontFamily: {
        aldo: ['AldoApache'],
        alata: ['Alata'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};
