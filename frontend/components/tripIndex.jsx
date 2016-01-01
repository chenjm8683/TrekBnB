var React = require('react');
var SessionStore = require('../stores/sessionStore.js');
var TripStore = require('../stores/tripStore.js');
var TripAction = require('../actions/tripAction.js');

var TripList = require('./tripComponents/tripList.jsx');

var TripIndex = React.createClass({
  getInitialState: function() {
    this.tabs = [
      "All Trips",
      "Current",
      "Upcoming",
      "Past"
    ];
    return({
      activeTab: 0,
      trips: TripStore.all()
    });
  },

  receiveTrips: function() {
    // debugger;
    this.setState({
      trips: TripStore.all()
    });
  },

  toggleTab: function(e) {
    e.preventDefault();
    clickedTab = this.tabs.indexOf(e.target.innerHTML);
    if (clickedTab !== this.state.activeTab) {
      this.setState({
        activeTab: clickedTab
      });
    }
  },

  // logoutRedirect: function() {
  //   debugger;
  //   this.props.history.pushState(null, '/');
  // },

  componentWillUnmount: function() {
  //   this.sessionToken.remove();
    this.tripToken.remove();
  },

  // componentWillMount: function() {
  //   // check login status; if not logged in, redirect to homepage
  //   // may change to a login page with redirection back to tripIndex upon successful login
  //   if(!SessionStore.hasCurrentUser()) {
  //     debugger;
  //     this.props.history.pushState(null, '/');
  //   }
  // },

  componentDidMount: function() {
  //   this.sessionToken = SessionStore.addListener(this.logoutRedirect);
  //   debugger;
    this.tripToken = TripStore.addListener(this.receiveTrips);
    TripAction.fetchUserTrips();
  },


  render: function() {
    var activeTab = this.state.activeTab;
    return (
      <div className="container-fluid below-nav fixed-full-screen" id="tidx">
        <div className="col-xs-1">
          <ul
            className="nav nav-tabs tabs-left sideways"
            onClick={this.toggleTab}>
            <li
              className={activeTab === 0 ? "active" : ""}>
              <a>{this.tabs[0]}</a>
            </li>
            <li className={activeTab === 1 ? "active" : ""}>
              <a>{this.tabs[1]}</a>
            </li>
            <li className={activeTab === 2 ? "active" : ""}>
              <a>{this.tabs[2]}</a>
            </li>
            <li className={activeTab === 3 ? "active" : ""}>
              <a>{this.tabs[3]}</a>
            </li>
          </ul>
        </div>
        <div className="col-xs-4 trip-list-panel">
          <div>
            <div>
              <TripList trips={this.state.trips}></TripList>
            </div>
          </div>
        </div>
        <div className="col-xs-7">
          tripDetailPlaceholder
        </div>
      </div>
    );
  }
});

module.exports = TripIndex;
