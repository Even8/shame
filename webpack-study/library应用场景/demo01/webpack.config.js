
let path = require('path')
module.exports = {
    entry:['./src/a.js'],
    output: {
        filename: 'bunldFun.js',
        path: path.join(__dirname,'dist'),
        library: 'bunldFun',
        libraryTarget: 'umd',
    },
    externals:['lodash']
}