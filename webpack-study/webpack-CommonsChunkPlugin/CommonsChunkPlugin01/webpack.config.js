const path = require("path");
const webpack = require("webpack");
const packagejson = require("./package.json");

// 分离出第三方库、自定义公共模块、webpack运行文件 统一放到vendor.js文件中；
const config = {
    entry: {
        first: './src/first.js',
        second: './src/second.js',
        vendor: Object.keys(packagejson.dependencies)//获取生产环境依赖的库
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].js'
        }),
    ]
}

module.exports = config;