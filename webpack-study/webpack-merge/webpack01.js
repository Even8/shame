
const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const base = require('./webpack-base.js')

let webpackConfig = merge(base,{
    output: {
        filename: 'a.[chunckhash].js',
        path: path.join(__dirname, './dist2')
    }
})

webpack(webpackConfig,(err) => {
    console.log(err);
})