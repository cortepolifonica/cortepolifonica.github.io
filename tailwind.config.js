const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['layouts/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cpblue: "#7DD3FC",
        cpred: "#EF4444",
        cporange: "#F97316",
        cpgreen: "#10B981",
        cpyellow: "#FACC15",
        cpamber: "#F59E0B",
        cppurple: "#C084FC",
        teal: colors.teal,
        orange: colors.orange,
        cyan: colors.cyan
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
