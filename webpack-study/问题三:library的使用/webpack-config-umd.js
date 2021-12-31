let path = require('path')
module.exports = {
    mode: 'none',
    entry: {
        a: './src/a.js',
    },
    output: {
        filename: 'umd.js',
        path: path.join(__dirname,'./dist'),
        library: 'even',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'this'
    }
}