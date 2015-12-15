var React = require('react');

var LandingSearchBar = React.createClass({
  render: function() {
    return (
      <div>
        <form className="form-horizontal" role="form">
          <input type="text" className="form-control"></input>
        </form>
      </div>
    );
  }
});

module.exports = LandingSearchBar;
