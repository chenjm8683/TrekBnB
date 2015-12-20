var React = require('react');
var FilterStore = require('../../stores/filterStore.js');
var FilterActions = require('../../actions/filterAction.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var Reservation = React.createClass({
  componentDidMount: function() {

  },

  render: function() {
    return(
      <div className="col-md-4">
        <div className="row">
          <h3>Price Per Night</h3>
        </div>
        <div className="row">

        </div>
        <div className="row">
          Price Calc
        </div>

      </div>
    )
  }
});

module.exports = Reservation;
