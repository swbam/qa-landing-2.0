/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Overpass', 'sans-serif'],
      },
      colors: {
        'primary': '#0054da',
        'primary-dark': '#0049bb',
      },
    },
  },
  plugins: [],
};