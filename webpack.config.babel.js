import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import { WebpackManifestPlugin } from 'webpack-manifest-plugin'
import WebpackShellPluginNext from 'webpack-shell-plugin-next'
import path from 'path'
import postcssImport from 'postcss-import'
import postcssPresetEnv from 'postcss-preset-env'
import postcssNormalize from 'postcss-normalize'
import postcssNested from 'postcss-nested'
import postcssExtend from 'postcss-extend'

const SITE_ROOT = path.resolve(__dirname)
const HUGO_THEME_PATH = path.resolve(SITE_ROOT, 'themes', 'dawnstar2018')
const SOURCE_PATH = path.resolve(HUGO_THEME_PATH, 'src')
const THEME_DIST_PATH = path.resolve(HUGO_THEME_PATH, 'static', 'dist')
const HUGO_DIST_PATH = path.resolve(SITE_ROOT, 'public')

export default (env) => {
  const isDev = env === 'dev'

  return {
    devtool: isDev ? 'inline-source-map' : false,
    // Serve from dist and watch for changes
    devServer: {
      host: '0.0.0.0',
      contentBase: [HUGO_DIST_PATH],
      watchContentBase: true,
    },
    entry: [`${SOURCE_PATH}/js/main.js`],
    output: {
      filename: '[name].[chunkhash].js',
      publicPath: '',
      path: THEME_DIST_PATH,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [['@babel/preset-env']],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
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
                },
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
    // Plugin section
    plugins: [
      // Clean dist
      new CleanWebpackPlugin(),
      // Write CSS
      new MiniCssExtractPlugin({
        filename: isDev ? '[name].css' : '[name].[chunkhash].css',
        chunkFilename: isDev ? '[id].css' : '[id].[chunkhash].css',
      }),
      // Write the manifest file
      new WebpackManifestPlugin({
        fileName: `${HUGO_THEME_PATH}/data/manifest.json`,
        writeToFileEmit: true,
        map: (file) => {
          // Modify the filename in manifest to use only the suffix
          // Remove if you can figure out how to read keys like "file.js"
          // in Hugo templates
          const newName = file.name.split('.').pop()
          return { ...file, name: newName }
        },
      }),
      // Hugo build process
      // -s sets the site source directory
      // -d sets the destination
      // -D builds also drafts
      // -w starts a watch
      // -v sets verbose output
      // context property is broken (needs a path)
      new WebpackShellPluginNext({
        onBuildEnd: {
          scripts: isDev
            ? [
                `hugo --config ${SITE_ROOT}/config.toml -D -w -v -d ${HUGO_DIST_PATH}`,
              ]
            : [`hugo --config ${SITE_ROOT}/config.toml -d ${HUGO_DIST_PATH}`],
        },
      }),
    ].filter(Boolean),
  }
}
