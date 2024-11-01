/** @type {import('tailwindcss').Config} */
const primeui = require('tailwindcss-primeui');

export default {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  plugins: [primeui]
}

