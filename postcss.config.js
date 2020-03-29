module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-normalize': {},
    'postcss-nested': {},
    'postcss-extend': {},
    'postcss-cssnext': {
      features: {
        autoprefixer: {
          grid: true,
        },
      },
    },
  },
}
