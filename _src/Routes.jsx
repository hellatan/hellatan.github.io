/**
 * User: daletan
 * Date: 5/14/15
 * Time: 2:12 PM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Layout = require('./templates/Layout');
var Home = require('./templates/pages/Home');
var About = require('./templates/pages/About');

var Routes = (
   <Route name="home" path="/" handler={Layout}>
       <Route name="about" handler={About} />
       <DefaultRoute handler={Home} />
   </Route>
);

module.exports = Routes;
