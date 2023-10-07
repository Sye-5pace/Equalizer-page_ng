/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily:{
      plex:['IBM Plex Sans', 'sans-serif']
    },
    colors:{
      'springwood':'#FCFAF9'
    },
    extend: {},
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant('children','&>*')
    })
  ],
}

