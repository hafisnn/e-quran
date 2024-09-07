/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      'colors': {
        'primary': '#fcfffd',
        'secondary': '#22A5AD'
      },
      'fontFamily': {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'lateef': ['Lateef', 'sans-serif'],
        'amiri': ['Amiri Quran', 'sans-serif']
      }
    },
  },
  plugins: [],
}

