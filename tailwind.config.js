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
        'bg-light-1': '#FFFFFF',
        'bg-light-2': '#FAFAFA',
        'bg-dark-1': '#2A3743',
        'bg-dark-2': '#1F2C37'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
