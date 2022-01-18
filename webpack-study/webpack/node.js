const path = require('path')
const webpack = require('webpack')
webpack({
    mode: 'none',
    entry: {
        main: './src/a.js',
    },
    output: {
        filename: 'a.[chunkhash].js',
        path: path.join(__dirname, './dist'),
    }
},(err) => {
    console.log(err)
})