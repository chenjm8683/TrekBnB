var React = require('react');
var ReactDOM = require('react-dom');

var DropDown = React.createClass({

  _fillInAddress: function() {
    this.props.handleLocChange();
    this.props.handleSearch();
  },

  componentDidMount: function() {

    // using Google Maps Places Autocomplete client version
    var lautofill = ReactDOM.findDOMNode(this.props.locinput);
    var autofillOptions = {
      types: ['geocode']
    };
    this.autofill = new google.maps.places.Autocomplete(lautofill, autofillOptions);
    this.autofill.addListener('place_changed', this._fillInAddress);
  },

  render: function() {
    return(
      <div></div>
    )
  }
});

module.exports = DropDown;
