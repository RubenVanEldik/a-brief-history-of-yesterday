const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Charter', 'Garamond', 'serif']
    },
    extend: {
      colors: {
        gray: colors.trueGray
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
