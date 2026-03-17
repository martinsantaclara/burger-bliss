/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hamburger': {
          'bun': '#D4A574',
          'meat': '#8B4513',
          'lettuce': '#228B22',
          'tomato': '#FF6347',
          'cheese': '#FFD700',
          'onion': '#9370DB',
        }
      }
    },
  },
  plugins: [],
}