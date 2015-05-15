/**
 * User: daletan
 * Date: 5/12/15
 * Time: 10:29 AM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

'use strict';

var path = require('path');
var webpack = require('webpack');

var babelConfig = {
    whitelist: [
        'es6.arrowFunctions',
        'es6.properties.shorthand',
        'es6.properties.computed',
        'es6.destructuring',
        'es6.parameters.default',
        'es6.parameters.rest',
        'es6.templateLiterals',
        'es6.blockScoping',
        'runtime',
        'react'
    ]
};

var outputPath = __dirname;
var outputPublicPath = 'http://localhost:3000/scripts/';

var resolveCommon = {
    // Allow to omit extensions when requiring these files
    extensions: ['', '.js', '.jsx']
};

var moduleCommon = {
    loaders: [
        // Pass *.jsx files through jsx-loader transform
        { test: /\.jsx?$/, loaders: ['react-hot', 'babel'] }
        //,
        //{ test: /\.scss$/, loaders: 'style!css!sass?outputStyle=expanded&includePaths[]=' + (path.resolve(__dirname, "./node_modules")) }
    ]
};

module.exports = [
    {
        name: 'browser',
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
            path: outputPath,

            // JS filename you're going to use in HTML
            filename: 'bundle.js',

            // Path you're going to use in HTML
            publicPath: outputPublicPath
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],

        resolve: resolveCommon,
        module: moduleCommon

    },
    {
        name: 'server',
        target: 'node',
        entry: [
            './_src/page.jsx'
        ],
        output: {
            path: outputPath,
            filename: 'bundlePage.js',
            publicPath: outputPublicPath,
            libraryTarget: 'commonjs2'
        },
        resolve: resolveCommon,
        module: moduleCommon
    }
];
