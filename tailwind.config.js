module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blackish': "#1d1e20",
        'readme': "#1d1e22"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: ['./templates/*.html'],
}
