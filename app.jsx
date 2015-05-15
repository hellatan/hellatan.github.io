/**
 * User: daletan
 * Date: 5/14/15
 * Time: 7:02 PM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

'use strict';

var fs = require('fs');
var React = require('react');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var Router = require('react-router');
var Routes = require('./_src/Routes');
var Layout = require('./_src/templates/Layout.jsx');


Router.run(Routes, '/', Handler => {
    // create the index.html to be used by webpack
    fs.writeFileSync('index.html', React.renderToString(React.createElement(Handler, null)));
});


var server = new WebpackDevServer(webpack(config), {
    contentBase: './',
    publicPath: config.output.publicPath,
    hot: true
});

server.use('/', (req, res) => {
    Router.run(Routes, req.path, Handler => {
        res.send(React.renderToString(React.createElement(Handler, null)));
    });
});

server.listen(3000, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:3000');
});
