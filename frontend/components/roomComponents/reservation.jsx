var React = require('react');
// var FilterStore = require('../../stores/filterStore.js');
// var FilterActions = require('../../actions/filterAction.js');

var ReservationDatesGuests = require('./reservationDatesGuests.jsx');
var Pricing = require('./pricing.jsx');
var ReservationButton = require('./reservationButton.jsx');

var RsvpStore = require('../../stores/rsvpStore.js');



var Reservation = React.createClass({
  getInitialState: function() {
    return ({
      room: this.props.room,
      showModal: false
    })
  },

  openModal: function() {
    this.setState({
      showModal: true
    });
  },



  componentWillReceiveProps: function(newProps) {
    // debugger;
    this.setState({
      room: newProps.room,
      showModal: false
    })
  },

  componentDidMount: function() {

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
          <Pricing room={this.state.room} />
        </div>
        <div className="row rsvp-button" style={{height: "300px"}}>
          <ReservationButton openModal={this.openModal}/>
        </div>

        <Modal
          className="customclass"
          ref="rsvpmodal"
          show={this.state.showModal}
          onHide={this.close}>
          <Modal.Header>
            <Modal.Title id="ModalHeader">Confirm Your Booking</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          </Modal.Body>
        </Modal>
      </div>
    );
  }
});

module.exports = Reservation;
