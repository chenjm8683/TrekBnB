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
      <div className="jumbotron jumbotron-landing" id="landing-page">
        <div className="full-bg">
          <video loop muted autoPlay poster="/assets/background/94102_9.jpeg" className="full-bg-video">
              <source src="/assets/background/landing_bg_1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container container-custom text-center">
          <h1>WELCOME HOME</h1>
          <h4>Rent unique places to stay from local hosts in 190+ countries.</h4>
        </div>
        <LandingSearchBar history={this.props.history}/>
      </div>
    );
  }
});

module.exports = LandingPage;
