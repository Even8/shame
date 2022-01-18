const rm = require('rimraf');
const path = require('path')
rm(path.join(__dirname,'./dist/index01.js'),function(err) {
    if (err) throw err;
})