/**
 * User: daletan
 * Date: 5/14/15
 * Time: 7:02 PM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

'use strict';

var fs = require('fs');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var page = require('./_src/page');
fs.writeFileSync('index.html', page('/'));

var server = new WebpackDevServer(webpack(config), {
    contentBase: './',
    publicPath: config[0].output.publicPath,
    hot: true
});

server.use('/', (req, res) => {
    res.send(page(req));
});

server.listen(3000, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:3000');
});
