const path = require('path')
module.exports = {
    mode: 'none',
    entry: {
        main: path.join(__dirname, './src/a.js')
    },
    output: {
        filename: 'a.[chunkhash].js',
        path: path.join(__dirname, './dist'),
    }
}