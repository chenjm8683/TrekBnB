var React = require('react');

var ListItemImage = React.createClass({

  render: function() {
    return (
      <div className="list-item-image">
        <img
          src="https://a1.muscache.com/im/pictures/59264604/e48531fe_original.jpg?aki_policy=x_medium"
          className="img-responsive">
        </img>
      </div>
    )
  }
});

module.exports = ListItemImage;
