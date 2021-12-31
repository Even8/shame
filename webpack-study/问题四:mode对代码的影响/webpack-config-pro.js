let path = require('path')
module.exports = {
    mode: 'production',
    entry: {
        a: './src/a.js',
    },
    output: {
        filename: 'mode-production.js',
        path: path.join(__dirname,'./dist'),
        library: 'even',
        libraryTarget: 'window',
    }
}