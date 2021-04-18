module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blackish': "#1d1e20",
        'readme': "#1d1e22",
        'bluish': "#0366D6",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: ['./templates/*.html'],
}
