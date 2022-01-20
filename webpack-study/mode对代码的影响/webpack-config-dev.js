let path = require('path')
module.exports = {
    mode: 'development',
    entry: {
        a: './src/a.js',
    },
    output: {
        filename: 'mode-development.js',
        path: path.join(__dirname,'./dist'),
        library: 'even',
        libraryTarget: 'window',
    }
}