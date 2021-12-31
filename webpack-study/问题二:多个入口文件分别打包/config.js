let path = require('path')
module.exports = {
    entry: {
        a: './src/a.js',
        b: './src/b.js',
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.join(__dirname,'./dist')
    }
}