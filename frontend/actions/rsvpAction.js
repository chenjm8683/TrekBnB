var AppDispatcher = require('../dispatcher/dispatcher.js');
var RsvpConstants = require('../constants/rsvpConstants.js');
var ApiUtil = require('../util/apiUtil.js');

var RsvpActions = {
  checkAvailability: function(roomId) {
    ApiUtil.queryAvailability(roomId, this.updateAvailability);
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

  receiveRsvpConf: function() {

  }
};

module.exports = RsvpActions;
