/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/webflow-embed.js'],
  theme: {
    extend: {
      colors: {
        'primary': '#0054da',
        'primary-dark': '#0049bb',
      },
      fontFamily: {
        'sans': ['Overpass', 'sans-serif'],
      },
    },
  },
  plugins: [],
};