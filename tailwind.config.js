const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['Charter', 'Garamond', 'serif']
    },
    extend: {
      colors: {
        gray: colors.trueGray
      },
      typography: theme => ({
        dark: {
          css: {
            color: theme('colors.gray.300'),
            '[class~="lead"]': {
              color: theme('colors.gray.400')
            },
            a: {
              color: theme('colors.gray.100')
            },
            strong: {
              color: theme('colors.gray.100')
            },
            h1: {
              color: theme('colors.gray.100')
            },
            h2: {
              color: theme('colors.gray.100')
            },
            h3: {
              color: theme('colors.gray.100')
            },
            h4: {
              color: theme('colors.gray.100')
            },
            hr: {
              color: theme('colors.gray.800')
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.700')
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  variants: {
    typography: ['dark']
  }
}
