var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Router = ReactRouter.Router;

var LandingPage = require('./components/landingPage.jsx');
var NavBar = require('./components/navBar.jsx');
var SearchIndex = require('./components/searchIndex.jsx');
var RoomIndex = require('./components/roomIndex.jsx')


var JSLoaderAction = require('./actions/jsLoaderAction.js');


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
    <Route path="rooms/:roomId" component={RoomIndex}></Route>
  </Route>
);

var checkLibStatus = function() {
  if (window.gMapsStatus) {
    JSLoaderAction.gMapsReady();
  } else {
    document.getElementById('gmapslib').addEventListener('load', JSLoaderAction.gMapsReady);
  }
}



document.addEventListener("DOMContentLoaded", function() {

  // Need to refactor [map loader]
  // window.googleMapsCallback = function() {
  //
  //   JSLoaderAction.gMapsReady();
  // };
  // JSLoaderAction.gMapsReady();
  checkLibStatus();

  // quick fix for turbolinks backnav problem with React http://bit.ly/1OyK9Pc
  // Turbolinks.pagesCached(0);

  var root = document.getElementById('root');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
