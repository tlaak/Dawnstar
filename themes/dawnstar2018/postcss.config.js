const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./hugo_stats.json'],
  defaultExtractor: (content) => {
    let els = JSON.parse(content).htmlElements
    return els.tags.concat(els.classes, els.ids)
  },
})

const fs = require('fs')
const path = require('path')

const themeDir = `${__dirname}/assets/styles`
const projectRoot = `${__dirname}/../..`

// Resolve @import ids explicitly: Hugo runs PostCSS with a base directory that
// isn't the theme's styles dir, so postcss-import's default relative resolution
// (against the importing file's dir) can't find the `_*.css` partials. Resolve
// local partials against themeDir, and fall back to Node resolution for npm
// packages (e.g. @csstools/normalize.css).
function resolveImport(id) {
  const local = path.join(themeDir, id)
  if (fs.existsSync(local)) return local
  return require.resolve(id, { paths: [projectRoot] })
}

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-import')({ path: [themeDir, projectRoot], resolve: resolveImport }),
    require('postcss-normalize'),
    require('postcss-nested'),
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
