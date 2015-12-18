var AppDispatcher = require('../dispatcher/dispatcher.js');
var FilterConstants = require('../constants/filterConstants.js');

var FilterActions = {
  updateBounds: function(bounds) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.SEARCHMAPMOVED,
      bounds: bounds
    });
  }

};


module.exports = FilterActions;
