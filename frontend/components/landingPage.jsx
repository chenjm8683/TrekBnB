var React = require('react');
var LandingSearchBar = require('./landingPageComponents/landingSearchBar.jsx');

var LandingPage = React.createClass({
  render: function() {
    // var headerStyle={
    //   margin: '0 auto',
    //   width: '100%',
    //   backgroundImage: "url(https://a2.muscache.com/airbnb/static/landing_pages/pretzel/stills/croatia-887a17b9994536f0d95bfd3f43ed664c.jpg)"
    // };


    return (
      <div className="container">
        <div className="header-full">
          <LandingSearchBar />
        </div>
      </div>
    );
  }
});

module.exports = LandingPage;
