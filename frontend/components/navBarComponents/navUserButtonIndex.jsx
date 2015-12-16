var React = require('react');
var UserStore = require('../../stores/userStore.js');
var Modal = require('react-bootstrap').Modal;
var ApiUtil = require('../../util/apiUtil.js');
var AccountButtons = require('./accountButtons.jsx');
var SignUpLoginButtons = require('./signUpLoginButtons.jsx');

var NavUserButtonIndex = React.createClass({
  getInitialState: function() {
    return ({
      currentUser: UserStore.all()
    });
  },

  _updateCurrentUser: function() {
    this.setState({
      currentUser: UserStore.all()
    });
  },

  componentWillUnmount: function() {
    debugger;
    this.nubiToken.remove();
  },

  componentDidMount: function() {
    this.nubiToken = UserStore.addListener(this._updateCurrentUser);
    ApiUtil.fetchSession();
  },

  render: function() {
    var ul;
    if (Object.keys(this.state.currentUser).length > 0) {
      ul = (<AccountButtons currentUser={this.state.currentUser}/>);
    } else {
      ul = (<SignUpLoginButtons />);
    }


    return (
      <div>
        {ul}
      </div>
    )
  }
});

module.exports = NavUserButtonIndex;
