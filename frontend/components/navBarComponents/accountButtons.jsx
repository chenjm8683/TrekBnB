var React = require('react');

var AccountButtons = React.createClass({
  render: function() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a>
            {this.props.currentUser.username}
          </a>
        </li>
      </ul>
    );
  }
});

module.exports = AccountButtons;
