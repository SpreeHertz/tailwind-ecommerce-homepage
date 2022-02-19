module.exports = {
  content: ["./dist/**/*.{html,js}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', serif",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
