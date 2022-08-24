const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/common/components/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'light-1': '#FFFFFF',
        'light-2': '#FAFAFA',
        'dark-1': '#2A3743',
        'dark-2': '#1F2C37',
        fLight: '#111517',
        fDark: '#FFFFFF',
        'subtitle-light': '#DFE0E2',
        'subtitle-dark': '#35393A'
      },
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
