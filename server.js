'use strict';

require('node-jsx').install();

var fs = require('fs');
var React = require('react');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var Layout = require('./_src/templates/Layout.jsx');

// create the index.html to be used by webpack
fs.writeFileSync('index.html', React.renderToString(React.createElement(Layout, {
    title: 'React Static Site',
    children: 'Hello World'
})));

var server = new WebpackDevServer(webpack(config), {
    contentBase: './',
    publicPath: config.output.publicPath,
    hot: true
});

server.listen(3000, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:3000');
});
