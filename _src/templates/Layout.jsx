/**
 * User: daletan
 * Date: 5/12/15
 * Time: 10:24 AM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

'use strict';

var React = require('react');
var LayoutNav = require('./elements/LayoutNav');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
    getDefaultProps() {
        return {
            title: 'React Static Site'
        };
    },
    render() {
        var script = (process.env.NODE_ENV!=='production') ? <script src="http://localhost:3000/scripts/bundle.js"></script> : '';
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <div id="layout">
                        <LayoutNav />
                        <main role="main">
                            {this.props.children}
                            <RouteHandler />
                        </main>
                    </div>
                    {script}
                </body>
            </html>
        );
    }
});


