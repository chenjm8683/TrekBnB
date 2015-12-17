var AppDispatcher = require('../dispatcher/dispatcher.js');
var RoomConstants = require('../constants/roomConstants.js');
var ApiUtil = require('../util/apiUtil.js');

var RoomActions = {
  // for initial testing only
  fetchAllRooms: function() {
    ApiUtil.fetchAllRooms(this.receiveAll);
  },

  fetchRoomDetail: function(roomId) {
    ApiUtil.fetchRoomDetail(roomId, this.receiveRoomDetail);
  },

  receiveAll: function(rooms){
    AppDispatcher.dispatch({
      actionType: RoomConstants.ROOMS_RECEIVED,
      rooms: rooms
    });
  },

  receiveRoomDetail: function(room) {
    AppDispatcher.dispatch({
      actionType: RoomConstants.DETAIL_RECEIVED,
      room: room
    });
  }
}

module.exports = RoomActions;
