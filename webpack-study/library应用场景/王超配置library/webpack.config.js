// it's been depended on by pack.js
const webpack = require( 'webpack' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const theme = require( '../src/config/theme/theme.js' );
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const resolve = ( ...p ) => require( 'path' ).resolve( __dirname, ...p )
const packageInfo = require( resolve( '../package.json' ) )

module.exports = {
  mode: 'none',
  entry: resolve( '../src/pages/Report/index.tsx' ),
  output: {
    path: resolve( '../package/bizseer-x-ai-lab-algorithm/src/pages/Report/' ),
    filename: 'index.js',
    library: 'bizseer-x-ai-lab-algorithm',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: resolve( './tsconfig.json' ),
          onlyCompileBundledFiles: false
        }
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 这里可以指定一个 publicPath
              // 默认使用 webpackOptions.output中的publicPath
              // outputPath: '../../../styles'
            },
          },
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: theme,
              },
              // limit: 10000,
              // name: 'css/[name].[hash:7].[ext]',
            }
          }
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        include: [ resolve( '../src/assets' ) ],
        use: [
          {
            loader: 'url-loader',
          },
        ]
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      '@': resolve( '../src' )
    }
  },
  externals: new RegExp(
    `^(${ Object.keys( packageInfo.dependencies ).join( '|' ) })`,
    'i'
  ),
  plugins: [
    new MiniCssExtractPlugin( {
      filename: '../../../ai-lab-algorithm.css',
      chunkFilename: '[id].css',
    } ),
    new webpack.IgnorePlugin( /^\.\/locale$/, /moment$/ ),
    // new BundleAnalyzerPlugin()
  ],

}