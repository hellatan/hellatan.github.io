/**
 * User: daletan
 * Date: 5/15/15
 * Time: 11:58 AM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

'use strict';
var path = require('path');
var fs = require('fs');

var paths = {
    '/': {
        title: 'Home',
        page: './home.html'
    },
    '/about': {
        title: 'About',
        page: './about.html'
    }
};
var pageReq;
var vm;

if (require.context) {
    pageReq = require.context('./templates/pages', false, /^\.\/.*\.html$/);
} else {
    vm = require('vm');
    pageReq = (function (filePath, regExp, mocks) {
        return function (file) {

            var _file = filePath + file;

            console.log('__dirname: ', __dirname);

            mocks = mocks || {};

            // this is necessary to allow relative path modules within loaded file
            // i.e. requiring ./some inside file /a/b.js needs to be resolved to /a/some
            var resolveModule = function(module) {
                if (module.charAt(0) !== '.') {
                    return module;
                }
                return path.resolve(path.dirname(_file), module);
            };

            var exports = {};
            var context = {
                require: function(name) {
                    return mocks[name] || require(resolveModule(name));
                },
                console: console,
                exports: exports,
                module: {
                    exports: exports
                }
            };

            vm.runInNewContext(fs.readFileSync(_file), context);
            return context;

        }
    })('./templates/pages/', /^\.\/.*\.html$/);
}


function validPath(path) {
    return paths[path] || paths['/'];
}

module.exports = {
    allPaths() {
        return paths
    },
    pageForPath(path) {
        return pageReq(validPath(path).page);
    },
    titleForPath(path) {
        return validPath(path).title;
    }
};
