var React = require('react');
var LandingSearchBar = require('./landingPageComponents/landingSearchBar.jsx');


var LandingPage = React.createClass({

  render: function() {
    // var headerStyle={
    //   margin: '0 auto',
    //   width: '100%',
    //   backgroundImage: "url(https://a2.muscache.com/airbnb/static/landing_pages/pretzel/stills/croatia-887a17b9994536f0d95bfd3f43ed664c.jpg)"
    // };

    var bgVideoUrl = {
      local: "/assets/background/landing_bg_1.mp4",
      cloudinarySD: "https://res.cloudinary.com/doe7t7cnl/video/upload/v1451672616/landing_bg_1_lbfxb4.mp4",
      cloudinarySD2: "http://res.cloudinary.com/dqpgibnp9/video/upload/v1451930036/landing_bg_1_md5hbv.mp4",
      cloudinaryHD: "https://res.cloudinary.com/doe7t7cnl/video/upload/v1451672475/landing_bg_1_hd_vvfltv.mp4"
    };

    var backgroundVideoDiv = (
      <div className="full-bg animated animated-alternate animated-infinite fadeIn">
        <video loop muted autoPlay poster="/assets/background/94102_9.jpeg" className="full-bg-video">
            <source src={bgVideoUrl.cloudinarySD2} type="video/mp4" async/>
        </video>
      </div>
    );


    // debugger;
    return (
      <div className="jumbotron jumbotron-landing" id="landing-page">
        {/iPad|iPhone|iPod/.test(navigator.platform) ? "" : backgroundVideoDiv }
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
