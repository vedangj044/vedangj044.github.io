module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blackish': "#1d1e20",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: ['./templates/*.html'],
}
