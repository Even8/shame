module.exports = {
  entry: './build/index.js',
  output: {
    // 虚拟打包路径，就是说文件夹不会真正生成，而是在8080端口虚拟生成
    publicPath: 'xuni',
    // 打包出来的文件名，不会真正的物理生成
    filename: 'bundle.js',
  },
  devServer: {
    port: 8099,
    contentBase: 'www'
  }
}