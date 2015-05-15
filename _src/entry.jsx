/**
 * User: daletan
 * Date: 5/12/15
 * Time: 10:27 AM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

'use strict';

var React = require('react');
var Layout = require('./templates/Layout');
var Router = require('react-router');
var Routes = require('./Routes');

require('./css/style.scss');

Router.run(Routes, Router.HistoryLocation, Handler => {
    React.render(React.createElement(Handler, null), document);
});
