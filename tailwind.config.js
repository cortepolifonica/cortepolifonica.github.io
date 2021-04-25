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
        backblack: "#1C1917",
        teal: colors.teal,
        orange: colors.orange,
        cyan: colors.cyan
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      variants: {
        animation: ["motion-safe"]
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
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
