/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/pattern-hills.svg')",
        'stars': "url('/bg-stars.svg')"
      },
      objectPosition: {
        'my-position': '82% bottom',
      },
      colors: {
        'darkblue': '#343650',
        'verydarkblue' : '#1E1F29',
        'almostblack': '#191A24',
        'blue' : '#8486A9',
        'pink' : "#FB6087"
      },
      boxShadow: {
        'myShadow': '0 6px 2px -2px rgb(27, 21, 34)',
      }
    },
  },
  plugins: [],
}