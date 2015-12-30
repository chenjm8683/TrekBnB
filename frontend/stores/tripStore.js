var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var TripConstants = require('../constants/tripConstants.js');
var TripStore = new Store(AppDispatcher);

// var _rsvpConfParams = {
//   roomId: null,
//   host_fname: null,
//   checkin: null,
//   checkout: null,
//   guests: null,
//   status: null
// };

var _trips = {};

var _newTripReservationId = null;

 // phase B datepicker
// var _unavailableDates = [];

var resetTripStore = function() {
  _trips = {};

  _newTripReservationId = null;
};



var receiveNewTrip = function(newTrip) {
  _trips[newTrip.id] = newTrip;
};

TripStore.all = function() {
  return Object.assign({}, _trips);
};

TripStore.newTrip = function(){
  return _trips[_newTripReservationId];
};



TripStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case TripConstants.DETAILS_RECEIVED:
      verified(payload.avail);
      TripStore.__emitChange();
      break;
    case TripConstants.TRIP_REQUEST_SUBMITTED:
      receiveNewTrip(payload.newTrip);
      TripStore.__emitChange();
      break;

      // phase B datepicker
    // case RsvpConstants.UNAVAILABILITY_RECEIVED:

  }
};


module.exports = TripStore;
