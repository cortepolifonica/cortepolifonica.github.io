const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['layouts/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // https://digitalsynopsis.com/design/beautiful-color-gradient-palettes/ la numero 11
      colors: {
        c1: "#048ba8",
        c2: "#0db39e",
        c3: "#83e377",
        c4: "#efea5a",
        c5: "#f1c453",
        c6: "#f29e4c",
        // cpred: "#f94144",
        // cporange: "#f3722c",
        // cplightorange: "#f8961e",
        // cpyellow: "#f8bf3a",
        // cpgreen: "#90be6d",
        // cpblue: "#43aa8b",
        // tborange: "#f28e2b",
        // tbred: "#e15759",
        // tbblue: "#76b7b2",
        // tbyellow: "#edc948",
        // tbgreen: "#adb828",
        // cpblue1: "#35bbca",
        // cpblue2: "#0191b4",
        // cpyellow: "#f8d90f",
        // cpgreen: "#d3dd18",
        // cpred: "#fe7a15",
        // cpblue: "#7DD3FC",
        // cpred: "#EF4444",
        // cporange: "#F97316",
        // cpgreen: "#22C55E",
        // cplime: "#A3E635",
        // cpyellow: "#FACC15",
        // cpamber: "#F59E0B",
        // cpteal: "#2DD4BF",
        // cppurple: "#C084FC",
        backblack: "#1C1917",
        teal: colors.teal,
        orange: colors.orange,
        cyan: colors.cyan
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards"
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
