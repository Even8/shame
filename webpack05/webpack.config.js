let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'js/[name]-[chunkhash].js',
    path: path.resolve('./dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: __dirname + 'node_modules', 
        include: __dirname + 'src',
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: __dirname + 'node_modules', 
        // css-loader 处理css文件
        // style-loader 创建style标签插入index.html
        // postcss-loader 给类似flex等样式加前缀；
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    })
  ]
}