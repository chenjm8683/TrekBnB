var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../../util/apiUtil.js');

var SignUpForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      username: "",
      password: ""
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    ApiUtil.createUserAccount({
      username: this.state.username,
      password: this.state.password
    });
  },


  render: function() {
    return(
      <form className='modal-signup-form' onSubmit={this.handleSubmit}>
        <input
            type='text'
            id='username'
            valueLink={this.linkState("username")}
            placeholder='Username'
        />
        <input
            type='password'
            id='password'
            valueLink={this.linkState("password")}
            placeholder='Password'
        />

        <button>Sign Up</button>
      </form>
    );
  }
});

module.exports = SignUpForm;
