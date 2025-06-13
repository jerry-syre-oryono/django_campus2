const colors = require('tailwindcss/colors')

module.exports = {
    content: [
    '../../templates/**/*.html',
    '../../main/templates/**/*.html',
    '../../students/templates/**/*.html',
    '../../courses/templates/**/*.html',
    '../../departments/templates/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',  // Rose-500
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        secondary: {
          500: '#000000',  // Black
        },
        accent: {
          500: '#ffffff',  // White
        }
      },
    },
  },
  
  plugins: {
    "@tailwindcss/postcss": {},
    "postcss-simple-vars": {},
    "postcss-nested": {}
  },
}
