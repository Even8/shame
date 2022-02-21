
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const actCodeUUIDSit = '7ba408f51c5c42b98133eeec145e70ca';
const actCodeUUIDUat = 'ba408f51c5c42b98133eeec145e70ca';
let actCodeUUID = process.env.NODE_ENV == 'sit'?actCodeUUIDSit:actCodeUUIDUat;
let dirpath ='dist/' + process.env.NODE_ENV + '/'+ actCodeUUID;
module.exports = {
  mode: 'none',
  entry: {
    ...entryPath(__dirname+'/src/js')
  },
  output: {
    path: path.resolve(__dirname, dirpath+'/js'),
    publicPath: 'js',
    filename: '[name].js',
  },
  devServer: {
    port: 9999,
    contentBase: 'src',
    proxy: {
      '/pfhd-external-gateway': {
       target: 'http://172.29.24.150',
       changeOrigin: true,
       pathRewrite: {
         '^/pfhd-external-gateway': '/pfhd-external-gateway'
       }
     }
   },
  },
  resolve:{
    alias: {
      // jquery:path.resolve(__dirname, './src/js/jquery.js')
    },
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   $:'jquery',
    // }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.actCodeUUID': JSON.stringify(actCodeUUID),
    }),
    new CopyPlugin({
      patterns:[
        ...copyPath(__dirname+'/src')
      ]
    })
  ]
}

// 读取入口文件
function entryPath(currentDirPath) {
  let entryObj = {};
  let arrPath = fs.readdirSync(currentDirPath)
  arrPath.forEach((item) => {
    entryObj[item.split('.')[0]] = path.resolve(__dirname, './src/js/'+item)
  })
  return entryObj;
}
// 读取需要copy的文件
function copyPath(currentDirPath) {
  let copyPathArr = [];
  let arrPath = fs.readdirSync(currentDirPath)
  arrPath.forEach((item) => {
    if (item.indexOf('js') == -1 && item.indexOf('ts') == -1) {
      let obj = {from:__dirname+'/src/'+item,to:__dirname+'/'+dirpath+'/'+item}
      copyPathArr.push(obj);
    }
  })
  return copyPathArr;
}