const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./hugo_stats.json'],
  defaultExtractor: (content) => {
    let els = JSON.parse(content).htmlElements
    return els.tags.concat(els.classes, els.ids)
  },
})

const themeDir = `${__dirname}/assets/styles`

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-import')({ path: themeDir }),
    require('postcss-normalize'),
    require('postcss-nested'),
    require('postcss-extend')({ path: themeDir }),
    require('postcss-preset-env')({
      path: themeDir,
      features: {
        autoprefixer: {
          grid: true,
        },
      },
    }),
    ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : []),
  ],
}
