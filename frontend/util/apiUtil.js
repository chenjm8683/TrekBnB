var UserAction = require('../actions/userAction.js');
var FilterStore = require('../stores/filterStore.js');
var RsvpStore = require('../stores/rsvpStore.js');

var ApiUtil = {
  createUserAccount: function(credentials) {
    $.ajax({
      url: 'api/users',
      method: "post",
      data: {user: credentials},
      success: function(success){
                UserAction.createNewUser(user);
              },
      error: function(error, status){
                debugger;
                // console.log(status)
              }
    });
  },

  createSession: function(credentials) {
    $.ajax({
      url: 'api/session',
      method: "post",
      data: {user: credentials},
      success: function(user) {
                UserAction.receiveCurrentUser(user);
              },
      error: function(error, status) {
                debugger;
                // console.log(status);
              }
    });
  },

  fetchSession: function() {
    $.ajax({
      url: 'api/session',
      method: "get",
      success: function(user){
                  UserAction.receiveCurrentUser(user);
                },
      error: function(error, status){
                  // debugger;
                  // console.log("not logged in");
                }
    });
  },

  destroySession: function() {
    $.ajax({
      url: 'api/session',
      method: "delete",
      success: function(){
                  UserAction.removeCurrentUser();
                },
      error: function(error, status){
                  debugger;
                  // console.log(status)
                }
    });
  },

  // for initial testing only
  fetchAllRooms: function(receiveAllCB) {
    $.ajax({
      url: 'api/rooms',
      method: "get",
      success: function(rooms){
                  receiveAllCB(rooms);
                },
      error: function(error, status){
                  debugger;
                  // console.log(status)
                }
    });
  },

  fetchFilteredRooms: function(receiveAllCB) {
    // debugger;
    $.ajax({
      url: 'api/rooms',
      method: "get",
      data: {filter: FilterStore.params()},
      success: function(rooms){
                  receiveAllCB(rooms);
                },
      error: function(error, status){
                  debugger;
                  // console.log(status)
                }
    });
  },

  fetchRoomDetail: function(roomId, receiveDetailCB) {
    $.ajax({
      url: 'api/rooms/'+ roomId,
      method: "get",
      success: function(room){
                  receiveDetailCB(room);
                },
      error: function(error, status){
                  debugger;
                  // console.log(status)
                }
    });
  },

  queryAvailability: function(roomId, queryCB) {
    // debugger;
    var queryData = FilterStore.currentDates();
    $.ajax({
      url: 'api/reservations/query/',
      method: "get",
      data: {rquery: {
        room_id: roomId,
        start_date: new Date(queryData.checkin),
        end_date: new Date(queryData.checkout)
      }},
      success: function(avail){
                  queryCB(avail);
                },
      error: function(error, status){
                  debugger;
                  // console.log(status)
                }
    });
  }

};

module.exports = ApiUtil;
