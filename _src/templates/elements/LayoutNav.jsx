/**
 * User: daletan
 * Date: 5/14/15
 * Time: 1:43 PM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var LayoutNav = React.createClass({
    render() {
        return(
            <nav id="layoutNav">
                <div className="pure-menu pure-menu-open">
                    <a className="pure-menu-heading">Site Nav</a>
                    <ul>
                        <li><Link to="home">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = LayoutNav;
