module.exports = {
  purge: ['./pages/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
