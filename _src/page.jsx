/**
 * User: daletan
 * Date: 5/15/15
 * Time: 12:10 PM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

'use strict';

var React = require('react');
var Router = require('react-router');
var Routes = require('./Routes');

module.exports = function (req) {
    var html;
    Router.run(Routes, req.url, Handler => {
        html = React.renderToString(React.createElement(Handler, null));
    });
    return html;
};
