var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Router = ReactRouter.Router;

var LandingPage = require('./components/landingPage.jsx');
var NavBar = require('./components/navBar.jsx');
var SearchIndex = require('./components/searchIndex.jsx');


var App = React.createClass({

  render: function() {
    // var defaultApp = (
      // <div>
      //     <header><h1>TrekBnB</h1></header>
      //     {this.props.children}
      // </div>
    // );
    return (
      <div id="app">
        <NavBar />
        {this.props.children}

      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="search/:loc" component={SearchIndex}></Route>
  </Route>
);



document.addEventListener("DOMContentLoaded", function() {

  // Need to refactor [map loader]
  window.googleMapsCallback = function() {
    console.log("map is loaded!");
  };

  var root = document.getElementById('root');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
