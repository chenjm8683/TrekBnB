var React = require('react');
// var Modal = require('react-bootstrap').Modal;
// var FilterStore = require('../../stores/filterStore.js');
// var FilterActions = require('../../actions/filterAction.js');

var ReservationDatesGuests = require('./reservationDatesGuests.jsx');
var Pricing = require('./pricing.jsx');
var ReservationButton = require('./reservationButton.jsx');
var ReservationReviewModal = require('./reservationReviewModal.jsx');
var ReservationConfModal = require('./reservationConfModal.jsx');


var TripStore = require('../../stores/tripStore.js');
var TripActions = require('../../actions/tripAction.js');



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

  openConfModal: function() {
    this.setState({
      showConfModal: true
    });
  },

  closeModal: function() {
    this.setState({
      showReviewModal: false,
      showConfModal: false
      // showReviewModal: false,
      // modalTitle: ""
    });
  },

  submitReservation: function(message) {
    TripActions.submitReservation(message);
  },

  showConfirmation: function() {
    // debugger;
    window.openConfModal = this.openConfModal;
    setTimeout(this.openConfModal, 1000);
    this.closeModal();
  },


  componentWillReceiveProps: function(newProps) {
    // debugger;
    this.setState({
      room: newProps.room,
      showReviewModal: false,
      showConfModal: false
    });
  },

  componentDidMount: function() {
    this.tripToken = TripStore.addListener(this.showConfirmation);
  },

  componentWillUnmount: function() {
    this.tripToken.remove();
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
          submitReservation={this.submitReservation}
          show={this.state.showReviewModal}
          onHide={this.closeModal}>
        </ReservationReviewModal>

        <ReservationConfModal
          {...this.props}
          room={this.state.room}
          trip={TripStore.newTrip()}
          show={this.state.showConfModal}
          onHide={this.closeModal}>
        </ReservationConfModal>
      </div>
    );
  }
});

module.exports = Reservation;
