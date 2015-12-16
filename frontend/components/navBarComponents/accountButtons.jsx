var React = require('react');

var AccountButtons = React.createClass({
  render: function() {
    return (
      <ul>
        <li>
          {this.props.currentUser.username}
        </li>
      </ul>
    );
  }
});

module.exports = AccountButtons;
