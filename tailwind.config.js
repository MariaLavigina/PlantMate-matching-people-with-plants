/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'], // for body text
        heading: ['Quicksand', 'sans-serif'], // for headings/buttons
      },
    },
  },
  plugins: [],
}