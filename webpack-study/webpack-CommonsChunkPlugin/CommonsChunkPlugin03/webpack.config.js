
const path = require('path');
const webpack = require('webpack');
const config = {
    entry: {
        first: './src/first.js',
        second: './src/second.js',
        //vendor: Object.keys(packagejson.dependencies)//获取生产环境依赖的库
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].js'
    },
     plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].js',
            minChunks: function (module,count) {
                console.log(module.resource,`引用次数${count}`);
                //"有正在处理文件" + "这个文件是 .js 后缀" + "这个文件是在 node_modules 中"
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(path.join(__dirname, './node_modules')) === 0
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: '[name].js',
            // chunks: ['first','second'],
            minChunks: 2,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime',
            filename: '[name].js',
            chunks: ['vendor']
        }),
    ]
}
module.exports = config;