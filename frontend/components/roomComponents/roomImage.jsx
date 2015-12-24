var React = require('react');

var RoomImage = React.createClass({
  render: function() {
    var img_url = "https://res.cloudinary.com/chenjm8683/image/upload"
     + this.props.room.primary_pic_url;
    // return (
    //   <div className="room-img-container">
    //     <img
    //       src="/assets/rooms/51557_1.jpg"
    //       className="img-responsive room-img" />
    //   </div>
    // );
    return (
      <div className="room-img-container">
        <img
          src={img_url}
          className="img-responsive room-img" />
      </div>
    );
  }
});

module.exports = RoomImage;
