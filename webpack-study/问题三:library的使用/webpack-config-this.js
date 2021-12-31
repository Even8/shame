let path = require('path')
module.exports = {
    mode: 'none',
    entry: {
        a: './src/a.js',
    },
    output: {
        filename: 'this.js',
        path: path.join(__dirname,'./dist'),
        library: 'even',
        libraryTarget: 'this',
    }
}