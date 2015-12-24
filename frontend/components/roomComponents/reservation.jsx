var React = require('react');
// var FilterStore = require('../../stores/filterStore.js');
// var FilterActions = require('../../actions/filterAction.js');

var ReservationDatesGuests = require('./ReservationDatesGuests');


var Reservation = React.createClass({
  getInitialState: function() {
    return ({
      room: this.props.room
    })
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({
      room: newProps.room
    })
  },


  render: function() {
    // debugger;
    var pricePerNight = this.state.room.price;
    console.log("reservation renders")
    return(
      <div className="col-md-3 rsvp-tab">
        <div className="row rsvp-ppn">
          <h3>{"$" + pricePerNight + " Per Night"}</h3>
        </div>
        <div className="row rsvp-params">
          <ReservationDatesGuests room={this.state.room}/>
        </div>
        <div className="row rsvp-calc">
          Price Calc
        </div>
        <div className="row rsvp-button" style={{height: "300px"}}>
          blank box
        </div>
      </div>
    )
  }
});

module.exports = Reservation;
