var React = require('react');
var SessionActions = require('../../actions/sessionAction.js');


var AccountButtons = React.createClass({

  handleLogOut: function() {
    SessionActions.logOut();
  },

  render: function() {
    return (
      <ul className='nav navbar-nav navbar-right'>
        <li className='dropdown'>
          <a href='#'
             className='dropdown-toggle'
             data-toggle='dropdown'
             role='button'
             aria-haspopup='true'
             aria-expanded='false'
             >
            {this.props.currentUser.user_profile.fname}
            <span className='caret'></span>
          </a>
          <ul className='dropdown-menu'>
            <li><a href="#">Your Trips</a></li>
            <li><a href="#">Wish Lists</a></li>
            <li><a href="#">Edit Profile</a></li>
            <li role="separator" className="divider"></li>
            <li onClick={this.handleLogOut}><a href="#">
              <span className="glyphicon glyphicon-log-in" /> Log Out
            </a></li>
          </ul>
        </li>
      </ul>
    );
  }
});

module.exports = AccountButtons;
