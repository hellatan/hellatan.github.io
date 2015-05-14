/**
 * User: daletan
 * Date: 5/12/15
 * Time: 10:29 AM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

'use strict';

var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/dev-server',
        './_src/entry.jsx'
    ],
    //output: {
    //    filename: 'bundle.js',
    //    publicPath: 'http://localhost:8090/assets'
    //},
    output: {
        // Where to put build results when doing production builds:
        // (Server doesn't write to the disk, but this is required.)
        path: __dirname,

        // JS filename you're going to use in HTML
        filename: 'bundle.js',

        // Path you're going to use in HTML
        publicPath: 'http://localhost:3000/scripts/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    resolve: {
        // Allow to omit extensions when requiring these files
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            // Pass *.jsx files through jsx-loader transform
            { test: /\.jsx$/, loaders: ['react-hot', 'jsx'] },
        ]
    }

};
