var React = require('react');
var Modal = require('react-bootstrap').Modal;
var LoginModalForm = require('./loginForm.jsx');
var SignUpModalForm = require('./signUpForm.jsx');

var SignUpLoginButtons = React.createClass({
  getInitialState: function() {
    return ({
      showModal: false,
      modalTitle: "",
      userForm: ""
    })
  },

  openSignUp: function() {
    this.setState({
      showModal: true,
      modalTitle: "Sign Up",
      userForm: LoginModalForm
    });
  },

  openLogin: function() {
    this.setState({
      showModal: true,
      modalTitle: "Login",
      userForm: SignUpModalForm
    });
  },

  close: function() {
    this.setState({
      showModal: false,
      modalTitle: "",
      userForm: ""
    });
  },

  render: function() {
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

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {isLoginForm ? (<LoginModalForm />) : (<SignUpModalForm />)}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
});

module.exports = SignUpLoginButtons;
