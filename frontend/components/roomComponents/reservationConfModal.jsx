var React = require('react');
var Modal = require('react-bootstrap').Modal;
var TripStore = require('../../stores/tripStore.js');

var ReservationConfModal = React.createClass({
  getInitialState: function() {
    return ({
      reservation: TripStore.newRsvp()
    });
  },

  closeModal: function() {
    this.props.onHide();
  },


  render: function() {
    var room = this.props.room;
    var rsvp = this.state.reservation;
    return (
      <Modal
        {...this.props}
        ref="rsvpmodal"
        className="customclass"
        bsSize="large"
        backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title id="RsvpModalHeader">Request Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="col-xs-12 col-md-8">
              <form
                 className="input-group col-xs-12"
                 onSubmit={this.handleSubmit}>
                <div className="row">
                  <h3>Your request has been sent to your host {room.host_fname}.</h3>
                  <p>You can expect a response from {room.host_fname} within the next 12 hours.</p>
                </div>

                <div className="row">
                  <h3>Summary of Your Request</h3>
                  <ul>
                    <li>Checkin  : </li>
                    <li>Checkout : </li>
                    <li>Nights   : </li>
                  </ul>
                </div>

                <div className="row">
                  <h3>Introduce Yourself to {room.host_fname}</h3>
                  <p>Giving your host more information will make them more likely to confirm your booking request:</p>
                  <ul>
                    <li>Tell John a little about yourself</li>
                    <li>What brings you to {room.city}? Who’s joining you?</li>
                    <li>What do you love about this listing? Mention it!</li>
                  </ul>
                  <div className="input-group col-xs-offset-1 col-xs-8">
                    <div className="row">
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Message your host..."
                        valueLink={this.linkState("message")}
                        disabled={isDisabled}>
                      </textarea>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12">
                    <div className="row">
                      <div className="checkbox">
                        <label>
                          <input
                            type="checkbox"
                            value="agreement"
                            required
                            title="Before booking agree to the House Rules and Terms."
                            disabled={isDisabled}>
                          </input>
                          I agree to the House Rules, Cancellation Policy, and to the Guest Refund Policy. I also agree to pay the total amount shown, which includes Occupancy Taxes and Service Fees.
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isDisabled}>
                        {isDisabled ? "Processing..." : "Confirm Booking"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-xs-12 col-md-4">

            </div>



          </div>
        </Modal.Body>
      </Modal>
    )
  }

});

module.exports = ReservationConfModal;
