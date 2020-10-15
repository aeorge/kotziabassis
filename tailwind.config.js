module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
      },
      colors: {
        'dark-gray': '#0E0E10',
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  experimental: {
    darkModeVariant: true,
  },
  dark: 'class',
}
