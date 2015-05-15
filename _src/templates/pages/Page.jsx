/**
 * User: daletan
 * Date: 5/15/15
 * Time: 12:49 PM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

'use strict';

var React = require('react');
var Router = require('react-router');
var paths = require('../../paths');

var Page = React.createClass({
    mixins: [Router.State],
    render() {
        var pathname = this.getPathname();
        var content = paths.pageForPath(pathname);
        var title = paths.titleForPath(pathname);
        return (
            <div>
                <h1>{title}</h1>
                <span dangerouslySetInnerHTML={{__html: content }} />
            </div>
        );
    }
});

module.exports = Page;
