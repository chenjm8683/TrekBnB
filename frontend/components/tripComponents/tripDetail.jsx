var React = require('react');
var TripStore = require('../../stores/tripStore.js');

var TripDetail = React.createClass({
  getInitialState: function() {
    return ({
      trip: TripStore.find_by_id(parseInt(this.props.params.tripId))
    });
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({
      trip: TripStore.find_by_id(parseInt(newProps.params.tripId))
    });
  },



  render: function() {
    var trip = this.state.trip
    if(typeof trip === 'undefined' || trip === null ) return null;
    var img_url = "https://res.cloudinary.com/chenjm8683/image/upload/c_scale,w_300"
     + trip.room_pic;
    return (
      <div>
        <div className="trip-item-image">
          <div className="image-container">
            <img
              src={img_url}
              className="img-responsive list-image">
            </img>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TripDetail;
