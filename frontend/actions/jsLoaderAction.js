var AppDispatcher = require('../dispatcher/dispatcher.js');
var JSLoaderConstants = require('../constants/jsLoaderConstants.js');

var JSLoaderAction = {
  gMapsReady: function() {
    AppDispatcher.dispatch({
      actionType: JSLoaderConstants.GMAPS_READY
    });
  }
}

module.exports = JSLoaderAction;
