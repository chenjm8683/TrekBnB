var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var QueryConstants = require('../constants/queryConstants.js');
var QueryStore = new Store(AppDispatcher);

var _rsvpConfParams = {
  roomId: "",
  checkin: "",
  checkout: "",
  guests: "",
  status: ""
};

var _rsvpStatus = {
  verified: false,
  avail: false,
  booked: false
};

 // phase B datepicker
// var _unavailableDates = [];

var resetRsvpStore = function() {
  _rsvpConfParams = {
    roomId: "",
    checkin: "",
    checkout: "",
    guests: "",
    status: ""
  };

  _rsvpStatus = {
    verified: false,
    avail: false,
    booked: false
  }
};

var verified = function(avail) {
  _rsvpStatus = {
    verified: true,
    avail: avail
  };
}

QueryStore.all = function() {
  return Object.assign({}, _rsvpParams);
};

QueryStore.isVerified = function(){
  return _rsvpStatus.verified;
};

QueryStore.isAvailable = function(){
  return _rsvpStatus.avail;
};

QueryStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case RsvpConstants.DETAILS_RECEIVED:
      verified(payload.avail);
      QueryStore.__emitChange();
      break;
    case RsvpConstants.RESET_RSVPSTORE:
      resetQueryStore();
      QueryStore.__emitChange();
      break;

      // phase B datepicker
    // case RsvpConstants.UNAVAILABILITY_RECEIVED:

  }
};


module.exports = QueryStore;
