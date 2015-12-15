var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');



var UserStore = new Store(AppDispatcher);
