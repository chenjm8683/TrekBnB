var React = require('react');

var SessionStore = require('../../stores/sessionStore.js');
var RsvpStore = require('../../stores/rsvpStore.js');


var ReservationButton = React.createClass({
  getInitialState: function() {
    return({
      loggedIn: SessionStore.hasCurrentUser(),
      verifiedDates: RsvpStore.isAvailable()
    });
  },

  updateAvail: function() {
    this.setState({
      verifiedDates: RsvpStore.isAvailable()
    });
  },
  updateLoginStatus: function() {
    this.setState({
      loggedIn: SessionStore.hasCurrentUser()
    });
  },

  openCalendar: function() {
    document.getElementById('room-index-daterange').focus();
  },
  openLogin: function() {
    document.getElementsByClassName('glyphicon-log-in')[0].click();
  },

  componentWillUnmount: function() {
    this.buttonSessionToken.remove();
    this.buttonRsvpToken.remove();
  },

  componentDidMount: function() {
    this.buttonSessionToken = SessionStore.addListener(this.updateLoginStatus);
    this.buttonRsvpToken = RsvpStore.addListener(this.updateAvail);
  },

  render: function() {
    debugger;
    var buttons = {
      login: (
        <button
          type="button"
          className="btn btn-lg btn-primary center-block"
          onClick={this.openLogin}>
          Login to book
        </button>
      ),
      selectDates: (
        <button
          type="button"
          className="btn btn-lg btn-info center-block"
          onClick={this.openCalendar}>
          Select Dates
        </button>
      ),
      request: (
        <button
          type="button"
          className="btn btn-lg btn-success center-block">
          Request to book
        </button>
      )
    };
    var selection;
    if(this.state.loggedIn && this.state.verifiedDates) {
      selection = buttons.request;
    } else if(!this.state.verifiedDates) {
      selection = buttons.selectDates;
    } else {
      selection = buttons.login;
    }


    return (
      <div className="col-md-12 text-center">
        <div className="row">
          {selection}
        </div>
      </div>
    );
  }
});

module.exports = ReservationButton;