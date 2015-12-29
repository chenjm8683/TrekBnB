var AppDispatcher = require('../dispatcher/dispatcher.js');
var RsvpConstants = require('../constants/rsvpConstants.js');
var ApiUtil = require('../util/apiUtil.js');

var RsvpActions = {
  checkAvailability: function(roomId) {
    ApiUtil.queryAvailability(roomId, this.updateAvailability);
  },

  submitReservation: function(roomId, message) {
    ApiUtil.createReservation(roomId, message, this.receiveRsvpConf);
  },

  resetRsvp: function(rsvpParams) {
    AppDispatcher.dispatch({
      actionType: RsvpConstants.RESET_RSVPSTORE
    });
  },


  updateAvailability: function(avail) {
    AppDispatcher.dispatch({
      actionType: RsvpConstants.DETAILS_RECEIVED,
      avail: avail
    });
  },

  receiveRsvpConf: function(reservation) {
    AppDispatcher.dispatch({
      actionType: RsvpConstants.RSVP_CONFIRMED,
      reservation: reservation
    });
  }
};

module.exports = RsvpActions;
