//  "express": "^4.17.1",

if (typeof window === 'undefined') {
    global.window = {};
}

const fs = require('fs');
const path = require('path');
const express = require('express');
// 把结构转成json
const { renderToString } = require('react-dom/server');
// 打包出来的js文件
const SSR = require('../dist/js/index-server');
// 获取当前页面
// const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8');
const data = require('./data.json');

const server = (port) => {
    const app = express();

    app.use(express.static('dist'));
    app.get('/search', (req, res) => {
        const html = renderMarkup(renderToString(SSR));
        // const html = renderMarkup(111);
        res.status(200).send(html);
    });

    app.listen(port, () => {
        console.log('Server is running on port:' + port);
    });
};

server(process.env.PORT || 3000);

const renderMarkup = (str) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>11</title>
    </head>
    <body>
        <div id="root">${str}</div>
    </body>
    </html>`
}