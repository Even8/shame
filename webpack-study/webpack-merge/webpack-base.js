
const path = require('path')
module.exports = {
    entry: {
        main: './src/a.js'
    },
    output: {
        filename: 'a.[chunckhash].js',
        path: path.join(__dirname, './dist')
    }
}