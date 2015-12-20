var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var RsvpConstants = require('../constants/rsvpConstants.js');
var RsvpStore = new Store(AppDispatcher);

var _rsvpParams = {};

var receiveDetails = function(details) {
  _rsvpParams = details;
}

RsvpStore.all = function() {
  return Object.assign({}, _currentRooms);
};

RoomStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case RsvpConstants.DETAILS_RECEIVED:
      receiveDetails(payload.details);
      RsvpStore.__emitChange();
      break;
  }
};


module.exports = RsvpStore;
