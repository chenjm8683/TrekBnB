var React = require('react');

var RoomImage = React.createClass({
  render: function() {
    return (
      <div className="room-img-container">
        <img src="/assets/rooms/51557_1.jpg" className="img-responsive" />
      </div>
    );
  }
});

module.exports = RoomImage;
