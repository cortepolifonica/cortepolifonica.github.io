const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['layouts/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cpblue: "#78ddff",
        cpred: "#d43131",
        cpgreen: "#4ac251",
        cpyellow: "#ffb417",
        teal: colors.teal,
        orange: colors.orange
      },
    },
    fontFamily: {
      'serif': ['Alegreya', 'ui-serif', 'Georgia'],
      'sans': ['Lato', 'ui-sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
