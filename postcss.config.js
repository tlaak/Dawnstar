module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-normalize': {},
    'postcss-nested': {},
    'postcss-extend': {},
    'postcss-preset-env': {
      features: {
        autoprefixer: {
          grid: true,
        },
      },
    },
  },
}
