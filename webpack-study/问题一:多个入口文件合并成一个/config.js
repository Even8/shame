let path = require('path')
module.exports = {
    entry: {
        main: ['./src/a.js', './src/b.js']
    },
    output: {
        filename: 'bunld.js',
        path: path.join(__dirname,'./dist'),
        library: 'even',
        libraryTarget: 'umd'
    }
}
