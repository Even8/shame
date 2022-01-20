let path = require('path')
module.exports = {
    mode: 'none',
    entry: {
        a: './src/a.js',
    },
    output: {
        filename: 'common.js',
        path: path.join(__dirname,'./dist'),
        library: 'even',
        libraryTarget: 'commonjs',
    }
}