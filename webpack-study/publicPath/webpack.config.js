const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'none',
    entry:['./src/a.js'],
    output: {
        filename: 'a.js',
        publicPath: '/subVue/',
        path: path.join(__dirname, './dist')
    },
    devServer: {
        port: 9999,
        // static:'dist',
        // publicPath: '/subVue/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            // Load a custom template (lodash by default)
            template: 'index.html',
            // publicPath: '/subVue/',
        })
    ]
}