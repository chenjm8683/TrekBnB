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

// trip is the same as reservation but from guest perspective


var _trips = {};

var _newTripReservationId = null;

 // phase B datepicker
// var _unavailableDates = [];

var resetTripStore = function() {
  _trips = {};

  _newTripReservationId = null;
};

var tripDetailConversion = function(trip) {
  return ({
    id: trip.id,
    roomId: trip.room_id,
    checkin: moment(trip.start_date, "YYYY-MM-DD").format("MM/DD/YYYY"),
    checkout: moment(trip.end_date, "YYYY-MM-DD").format("MM/DD/YYYY"),
    guests: trip.guest_num,
    message: trip.message
  });
};


var receiveNewTrip = function(newTrip) {
  _newTripReservationId = newTrip.id;
  _trips[_newTripReservationId] = tripDetailConversion(newTrip);
  // debugger;
};

TripStore.all = function() {
  return Object.assign({}, _trips);
};

TripStore.newTrip = function(){
  return _trips[_newTripReservationId] || {};
};

TripStore.nights = function(tripId) {
  var mCheckin = moment(_trips[tripId].checkin, 'MM-DD-YYYY');
  var mCheckout = moment(_trips[tripId].checkout, 'MM-DD-YYYY');
  return mCheckout.diff(mCheckin, 'days');
};



TripStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    // case TripConstants.DETAILS_RECEIVED:
    //   verified(payload.avail);
    //   TripStore.__emitChange();
    //   break;
    case TripConstants.TRIP_REQUEST_SUBMITTED:
      receiveNewTrip(payload.newTrip);
      TripStore.__emitChange();
      break;

      // phase B datepicker
    // case RsvpConstants.UNAVAILABILITY_RECEIVED:

  }
};


module.exports = TripStore;
