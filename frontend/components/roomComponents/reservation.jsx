var React = require('react');
// var Modal = require('react-bootstrap').Modal;
// var FilterStore = require('../../stores/filterStore.js');
// var FilterActions = require('../../actions/filterAction.js');

var ReservationDatesGuests = require('./reservationDatesGuests.jsx');
var Pricing = require('./pricing.jsx');
var ReservationButton = require('./reservationButton.jsx');
var ReservationReviewModal = require('./reservationReviewModal.jsx');
var ReservationConfModal = require('./reservationConfModal.jsx');


var RsvpStore = require('../../stores/rsvpStore.js');



var Reservation = React.createClass({
  getInitialState: function() {
    return ({
      room: this.props.room,
      showReviewModal: false
    });
  },

  openReviewModal: function() {
    this.setState({
      showReviewModal: true
    });
  },

  close: function() {
    this.setState({
      showReviewModal: false,
      showConfModal: false
      // showReviewModal: false,
      // modalTitle: ""
    });
  },

  submitReservation: function(message) {
    RsvpStore.addListener
    RsvpActions.submitReservation(this.state.room.id, message);
  },


  componentWillReceiveProps: function(newProps) {
    // debugger;
    this.setState({
      room: newProps.room,
      showReviewModal: false
    })
  },

  componentDidMount: function() {
  },




  render: function() {
    // debugger;
    var pricePerNight = this.state.room.price;
    // console.log("reservation renders")
    return(
      <div className="col-md-4 rsvp-tab">
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
          <ReservationButton openModal={this.openReviewModal}/>
        </div>

        <ReservationReviewModal
          {...this.props}
          show={this.state.showReviewModal}
          submitReservation={this.submitReservation}
          onHide={this.close}>
        </ReservationReviewModal>

        <ReservationConfModal
          {...this.props}
          show={this.state.showConfModal}
          onHide={this.close}>
        </ReservationConfModal>
      </div>
    );
  }
});

module.exports = Reservation;
