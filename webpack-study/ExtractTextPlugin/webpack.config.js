const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: ['./src/index.html'],
    output: {
        filename: '[name].html',
        path: path.join(__dirname,'./dist')
    }
}