var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
// var History = require('react-router').History;

var LandingSearchBar = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      loc: ""
    });
  },


  handleSearch: function(e) {
    e.preventDefault();
    // may use History mixins;
    this.props.history.pushState(null, 'search/' + this.state.loc)

  },

  render: function() {
    return (
      <div>
        <form className="form-horizontal" role="form" onSubmit={this.handleSearch}>
        	<div className="input-group input-group-lg">
            <input
               type="text"
               className="form-control"
               valueLink={this.linkState("loc")}
               placeholder="Where do you want to go?" />
            <span className="input-group-addon">@</span>
          </div>
          <button>Search</button>
        </form>
      </div>
    );
  }
});

module.exports = LandingSearchBar;
