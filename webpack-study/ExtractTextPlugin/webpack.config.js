const path = require('path');
module.exports = {
    entry: ['./src/index.html'],
    output: {
        filename: '[name].html',
        path: path.join(__dirname,'./dist')
    }
}