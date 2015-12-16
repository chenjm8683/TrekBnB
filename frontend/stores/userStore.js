var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');



var UserStore = new Store(AppDispatcher);

var _currentUser = {};

UserStore.all = function () {
  return _currentUser;
};


UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.CREATENEWUSER:
      receiveUser(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.RECEIVEUSER:
      receiveUser(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.REMOVECURRENTUSER:
      removeUser();
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
