/** @jsx React.DOM */
/**
 * User: daletan
 * Date: 5/12/15
 * Time: 10:24 AM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

'use strict';

var React = require('react');

module.exports = React.createClass({
    render() {
        var script = (process.env.NODE_ENV!=='production') ? <script src="http://localhost:3000/scripts/bundle.js"></script> : '';
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    {this.props.children}
                    {script}
                </body>
            </html>
        );
    }
});


