var UserAction = require('../actions/userAction.js');

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
                console.log(status)
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
                console.log(status);
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
                  console.log(status)
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
                  console.log(status)
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
                  console.log(status)
                }
    });
  }

};

module.exports = ApiUtil;
