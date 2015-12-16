var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Router = ReactRouter.Router;

var LandingPage = require('./components/landingPage.jsx');
var NavBar = require('./components/navBar.jsx');


var App = React.createClass({
  render: function() {
    // var defaultApp = (
      // <div>
      //     <header><h1>TrekBnB</h1></header>
      //     {this.props.children}
      // </div>
    // );
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById('root');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
