/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary, #0054da)',
        'primary-dark': 'var(--primary-dark, #0049bb)',
      },
    },
  },
  plugins: [],
} 