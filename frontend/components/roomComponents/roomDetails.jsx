var React = require('react');

var RoomDetails = React.createClass({
  render: function() {
    var room = this.props.room;
    // debugger;
    return (
      <div
        className="col-md-6 col-md-offset-1 room-body">
        <h3>About this listing</h3>
        <div className="row">
          <div className="col-xs-12">
            <br />
            <p>
              {room.description}
            </p>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 text-muted">
            <p>The Space</p>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-xs-6">
                <p>{"Accommodates: "}
                  <strong>{room.max_guest_num}</strong>
                </p>
              </div>
              <div className="col-xs-6">
                <p>{"Beds: "}
                  <strong>{room.bed_num}</strong>
                </p>
              </div>
              <div className="col-xs-6">
                <p>{"Bathrooms: "}
                  <strong>{"1"}</strong>
                </p>
              </div>
              <div className="col-xs-6">
                <p>{"Bed type: "}
                  <strong>{"Real Bed"}</strong>
                </p>
              </div>
              <div className="col-xs-6">
                <p>{"Property type: "}
                  <strong>{"House"}</strong>
                </p>
              </div>
              <div className="col-xs-6">
                <p>{"Room type: "}
                  <strong>{room.type_string}</strong>
                </p>
              </div>
              <div className="col-xs-6">
                <p>{"Bedroom: "}
                  <strong>{"1"}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 text-muted">
            <p>Amenities</p>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-xs-6">
                <p>
                  <img
                    className="room-amenity-icon"
                    src="/assets/icons/amenities/kitchen" />
                  <strong>{" Kitchen"}</strong>
                </p>
              </div>
              <div className="col-xs-6">
                <p>
                  <img
                    className="room-amenity-icon"
                    src="/assets/icons/amenities/tv" />
                  <strong>{" TV"}</strong>
                </p>
              </div>
              <div className="col-xs-6">
                <p>
                  <img
                    className="room-amenity-icon"
                    src="/assets/icons/amenities/internet" />
                  <strong>{" Internet"}</strong>
                </p>
              </div>
              <div className="col-xs-6">
                <p>
                  <img
                    className="room-amenity-icon"
                    src="/assets/icons/amenities/essentials" />
                  <strong>{" Essentials"}</strong>
                </p>
              </div>
              <div className="col-xs-6">
                <p>
                  <img
                    className="room-amenity-icon"
                    src="/assets/icons/amenities/breakfast" />
                  <strong>{" Breakfast"}</strong>
                </p>
              </div>
              <div className="col-xs-6">
                <p>
                  <img
                    className="room-amenity-icon"
                    src="/assets/icons/amenities/washer" />
                  <strong>{" Washer"}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 text-muted">
            <p>Prices</p>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-xs-6">
                <p>{"Cleaning fee: "}
                  <strong>{"$30"}</strong>
                </p>
              </div>
              <div className="col-xs-6">
                <p>{"Weekly discount: "}
                  <strong>{"0%"}</strong>
                </p>
              </div>
              <div className="col-xs-6">
                <p>{"Monthly discount: "}
                  <strong>{"0%"}</strong>
                </p>
              </div>
              <div className="col-xs-6">
                <p>{"Cancellation: "}
                  <strong>{"Flexible"}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 text-muted">
            <p>House Rules</p>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-xs-12">
                <p>General courtesy</p>
                <p>No extra overnight guests</p>
                <p>No smoking inside the building</p>
                <p>Please clean up after yourself</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 text-muted">
            <p>Safety Features</p>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-xs-6">
                <p>Smoke Detector</p>
              </div>
              <div className="col-xs-6">
                <p>Safety Card</p>
              </div>
              <div className="col-xs-6">
                <p>Carbon Monoxide Detector</p>
              </div>
              <div className="col-xs-6">
                <p>First Aid Kit</p>
              </div>
              <div className="col-xs-6">
                <p>Fire Extinguisher</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 text-muted">
            <p>Availability</p>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-xs-6">
                <p><strong>3</strong> nights minimum stay</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = RoomDetails;
