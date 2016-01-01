var React = require('react');
var TripStore = require('../../stores/tripStore.js');


var TripList = React.createClass({
  getInitialState: function() {
    return({
      trips: this.props.trips,
      activeTripId: null
    });
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({
      trips: newProps.trips
    });
  },




  render: function() {
    var trips = this.state.trips;
    var trip;
    var className = "list-group-item";
    var classNameActive = "list-group-item active"
    var listItems = Object.keys(trips).map(function(tripId) {
      trip = trips[tripId];
      return(
        <a
          href="#"
          className={this.state.activeTripId === tripId ? classNameActive : className}
          key={tripId}>
          <h4 className="list-group-item-heading">{trip.room_city + ": " + trip.room_title}</h4>
          <p className="list-group-item-text">{trip.checkin + " - " + trip.checkout}</p>
          <p className="list-group-item-text">{trip.status}</p>
        </a>
      )
    }.bind(this));
    // debugger;

    return (
      <div>
        <div className="list-group">
          <a href="#" className="list-group-item active">
            <h4 className="list-group-item-heading">List group item heading</h4>
            <p className="list-group-item-text">...</p>
          </a>
          {listItems}
        </div>
      </div>
    );
  }

});

module.exports = TripList;
