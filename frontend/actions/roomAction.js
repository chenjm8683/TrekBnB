var AppDispatcher = require('../dispatcher/dispatcher.js');
var RoomConstants = require('../constants/roomConstants.js');
var ApiUtil = require('../util/apiUtil.js');

var RoomActions = {
  // for initial testing only
  fetchAllRooms: function() {
    ApiUtil.fetchAllRooms(this.receiveAll);
  },

  receiveAll: function(rooms){
    AppDispatcher.dispatch({
      actionType: RoomConstants.ROOMS_RECEIVED,
      rooms: rooms
    });
  }
}

module.exports = RoomActions;
