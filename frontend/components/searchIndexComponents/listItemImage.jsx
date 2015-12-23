var React = require('react');

var ListItemImage = React.createClass({

  render: function() {
    var img_url = "https://res.cloudinary.com/chenjm8683/image/upload/c_scale,w_600"
     + this.props.room.primary_pic_url;
    return (
      <div className="list-item-image">
        <div className="image-container">
          <img
            src={img_url}
            alt="/assets/rooms/51557_0.jpg"
            className="img-responsive">
          </img>
        </div>
      </div>
    )
  }
});

module.exports = ListItemImage;
