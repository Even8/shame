const { Agent } = require('http');
let path = require('path');
const webpack = require('webpack');
module.exports = {
    mode: 'none',
    entry: './src/a.js',
    output: {
        filename: 'a.[chunkhash].js',
        path: path.join(__dirname,'./dist'),
    },
    plugins: [
        new webpack.DefinePlugin({
            'a.name': "'Even'",
        }),
    ]
}

