var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');

var UserActions = {
  createNewUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.CREATENEWUSER,
      user: user
    });
  },

  receiveCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVEUSER,
      user: user
    });
  },

  removeCurrentUser: function(){
    AppDispatcher.dispatch({
      actionType: UserConstants.REMOVECURRENTUSER,
      user: ""
    });
  }
}

module.exports = UserActions;
