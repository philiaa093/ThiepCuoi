/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          red: '#771E2A',
          dark: '#54151D',
        },
        ivory: '#F8F4EC',
        wedding: {
          white: '#FFFDF9',
          text: '#312A29',
          gold: '#B59762'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        sans: ['"Be Vietnam Pro"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'], 
      }
    },
  },
  plugins: [],
}
