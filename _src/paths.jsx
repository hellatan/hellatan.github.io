/**
 * User: daletan
 * Date: 5/15/15
 * Time: 11:58 AM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

'use strict';

var paths = {
    '/': {
        'title': 'React Static Site'
    },
    '/about': {
        'title': 'About - React Static Site'
    }
};

module.exports = {
    allPaths() {
        return paths
    },
    titleForPath(path) {
        var _path = paths[path]
        return _path ? _path.title : paths['/'];
    }
};
