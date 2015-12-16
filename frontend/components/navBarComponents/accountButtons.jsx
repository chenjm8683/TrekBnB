var React = require('react');
var ApiUtil = require('../../util/apiUtil.js');


var AccountButtons = React.createClass({

  handleLogOut: function() {
    ApiUtil.destroySession();
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
            {this.props.currentUser.username}
            <span className='caret'></span>
          </a>
          <ul className='dropdown-menu'>
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
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
