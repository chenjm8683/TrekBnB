var React = require('react');
var Modal = require('react-bootstrap').Modal;

var SignUpLoginButtons = React.createClass({
  getInitialState: function() {
    return ({
      showModal: false
    })
  },

  open: function() {
    this.setState({
      showModal: true
    });
  },

  close: function() {
    this.setState({
      showModal: false
    });
  },

  render: function() {
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a onClick={this.open}>
              <span className="glyphicon glyphicon-user" />  Sign Up
            </a>
          </li>
          <li onClick={this.open}>
            <a>
              <span className="glyphicon glyphicon-log-in" />  Login
            </a>
          </li>
        </ul>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
        </Modal>
      </div>
    );
  }
});

module.exports = SignUpLoginButtons;
