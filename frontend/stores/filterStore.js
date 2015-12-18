var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var FilterConstants = require('../constants/filterConstants.js');

var FilterStore = new Store(AppDispatcher);

var _currentParams = {};

var _updateBounds = function(bounds) {
  _currentParams.bounds = bounds;
};


FilterStore.params = function() {
  // for initial testing only
  if (typeof _currentParams.bounds === 'undefined') {
    _currentParams.bounds = {
      northEast: {
        lat: 37.818731361235045,
        lng: -122.39405876159668
      },
      southWest: {
        lat: 37.71437771589192,
        lng: -122.46838813781739
      }
    }
  }
  // for initial testing only

  return Object.assign({}, _currentParams);
};



FilterStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case FilterConstants.SEARCHMAPMOVED:
      _updateBounds(payload.bounds);
      FilterStore.__emitChange();
      break;
  }
};



module.exports = FilterStore;
