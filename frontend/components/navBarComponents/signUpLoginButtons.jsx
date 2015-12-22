var React = require('react');
var Modal = require('react-bootstrap').Modal;
var LoginModalForm = require('./loginForm.jsx');
var SignUpModalForm = require('./signUpForm.jsx');

var SignUpLoginButtons = React.createClass({
  getInitialState: function() {
    return ({
      showModal: false,
      modalTitle: ""
    })
  },

  openSignUp: function() {
    this.setState({
      showModal: true,
      modalTitle: "Sign Up"
    });
  },

  openLogin: function() {
    this.setState({
      showModal: true,
      modalTitle: "Login"
    });
  },

  close: function() {
    this.setState({
      showModal: false,
      modalTitle: ""
    });
  },

  componentWillUnmount: function() {
    // quick fix for "'scrollHeight'" issues after Modal is unmounted
    this.refs.navmodal._onHide();
    // debugger;
  },

  render: function() {
    var ModalForm = this.state.modalTitle === "Login" ? LoginModalForm : SignUpModalForm;
    var isLoginForm = (this.state.modalTitle === "Login");
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li onClick={this.openSignUp}>
            <a>
              <span className="glyphicon glyphicon-user" />  Sign Up
            </a>
          </li>
          <li onClick={this.openLogin}>
            <a>
              <span className="glyphicon glyphicon-log-in" />  Login
            </a>
          </li>
        </ul>


        <Modal className="customclass" ref='navmodal' show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title id='ModalHeader'>{this.state.modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ModalForm />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
});

module.exports = SignUpLoginButtons;
