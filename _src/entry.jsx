/** @jsx React.DOM */
/**
 * User: daletan
 * Date: 5/12/15
 * Time: 10:27 AM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

'use strict';

var React = require('react');
var Layout = require('./templates/Layout');

// React.renderToStaticMarkup(<Hello />);
//React.renderToStaticMarkup(<Hello />);

React.render(<Layout title="React Static Site" >Hello World</Layout>, document);
