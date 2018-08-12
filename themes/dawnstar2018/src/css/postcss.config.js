module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-extend': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
  },
}
