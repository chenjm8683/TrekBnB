var React = require('react');

var RoomImage = React.createClass({
  getInitialState: function() {
    return({
      photoIdx: 1,
      showLoading: true
    });
  },

  forwardPic: function() {
    this.setState({
      photoIdx: this.state.photoIdx + 1,
      showLoading: true
    });
  },

  backwardPic: function() {
    this.setState({
      photoIdx: this.state.photoIdx - 1,
      showLoading: true
    });
  },

  imageLoaded: function() {
    this.setState({
      showLoading: false
    });
  },


  render: function() {
    // var img_url = "https://res.cloudinary.com/chenjm8683/image/upload"
    //  + this.props.room.primary_pic_url;
    // return (
    //   <div className="room-img-container">
    //     <img
    //       src="/assets/rooms/51557_1.jpg"
    //       className="img-responsive room-img" />
    //   </div>
    // );
    var photos = this.props.room.room_pics;
    var photoId = ((this.state.photoIdx % photos.length) + photos.length) % photos.length;
    console.log(photoId);
    // var img_url = "https://res.cloudinary.com/chenjm8683/image/upload/c_scale,w_600"
    var img_url = "https://res.cloudinary.com/chenjm8683/image/upload"
     + photos[photoId].pic_url;
    return (
      <div className="room-img-container">
        <img
          src={img_url}
          className="img-responsive room-img" />
        <div className="control-container">
          <div className="control-left-container" onClick={this.backwardPic}>
            <i className="fa fa-chevron-left fa-5x"></i>
          </div>
          <div className="control-right-container" onClick={this.forwardPic}>
            <i className="fa fa-chevron-right fa-5x"></i>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = RoomImage;
