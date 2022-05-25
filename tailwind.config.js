const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}"
  ],
  theme: {
    fontFamily: {
      'sans': ['Josefin Sans', 'sans-serif'],
      'serif': ['Libre Baskerville', 'serif'],
      'mono': ['Inconsolata', 'monospace']
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

module.exports = config