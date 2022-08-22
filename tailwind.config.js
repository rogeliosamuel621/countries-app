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
        'dark-2': '#1F2C37'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
