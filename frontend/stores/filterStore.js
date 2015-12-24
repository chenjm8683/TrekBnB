var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var FilterConstants = require('../constants/filterConstants.js');

var FilterStore = new Store(AppDispatcher);

var _currentParams = {};

var _updateBounds = function(bounds) {
  _currentParams.bounds = bounds;
};

var _updateCheckin = function(date) {
  _currentParams.dates.checkin = date;
};

var _updateCheckout = function(date) {
  _currentParams.dates.checkout = date;
};

var _updateDates = function(dates) {
  _currentParams.dates = dates;
}

var _updateGuests = function(guests) {
  _currentParams.guests = guests;
};




FilterStore.params = function() {
  // // for initial testing only
  // if (typeof _currentParams.bounds === 'undefined') {
  //   _currentParams.bounds = {
  //     northEast: {
  //       lat: 37.818731361235045,
  //       lng: -122.39405876159668
  //     },
  //     southWest: {
  //       lat: 37.71437771589192,
  //       lng: -122.46838813781739
  //     }
  //   }
  // }
  // // for initial testing only

  return Object.assign({}, _currentParams);
};

FilterStore.currentDates = function() {
  // if (typeof _currentParams.dates === 'undefined') {
  //   return {checkin: "", checkout: ""};
  // } else {
  //   return _currentParams.dates;
  // }
  return _currentParams.dates || {checkin: null, checkout: null};
};

FilterStore.hasDates = function() {
  return _currentParams.dates && _currentParams.dates.checkin && _currentParams.dates.checkout;
};

FilterStore.nights = function() {
  if (FilterStore.hasDates()) {
    var mCheckin = moment(_currentParams.dates.checkin, 'MM-DD-YYYY');
    var mCheckout = moment(_currentParams.dates.checkout, 'MM-DD-YYYY');
    return mCheckout.diff(mCheckin, 'days');
  } else {
    return null;
  }
};

FilterStore.currentGuests = function() {
  return _currentParams.guests || "1";
};



FilterStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case FilterConstants.SEARCHMAPMOVED:
      _updateBounds(payload.bounds);
      FilterStore.__emitChange();
      break;
    case FilterConstants.UPDATECHECKIN:
      _updateCheckin(payload.date);
      FilterStore.__emitChange();
      break;
    case FilterConstants.UPDATECHECKOUT:
      _updateCheckout(payload.date);
      FilterStore.__emitChange();
      break;
    case FilterConstants.UPDATEDATES:
      _updateDates(payload.dates);
      FilterStore.__emitChange();
    case FilterConstants.UPDATEGUESTS:
      _updateGuests(payload.guests);
      FilterStore.__emitChange();
      break;
  }
};



module.exports = FilterStore;
