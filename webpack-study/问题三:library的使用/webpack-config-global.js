let path = require('path')
module.exports = {
    mode: 'none',
    target: 'node',
    entry: {
        a: './src/a.js',
    },
    output: {
        filename: 'global.js',
        path: path.join(__dirname,'./dist'),
        library: 'even',
        libraryTarget: 'global',
    }
}