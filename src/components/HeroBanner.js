import React from 'react';
import HeroBannerImage from '../assets/images/img_bg_2.jpg';

const HeroBanner = () => (
  <header id="fh5co-header" className="fh5co-cover" role="banner" style={{ backgroundImage: `url(${HeroBannerImage})` }} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center">
          <div className="display-t">
            <div className="display-tc animate-box" data-animate-effect="fadeIn">
              <h1>Make it a lifestyle, not a duty</h1>
              <h2>Free html5 templates Made by <a href="http://freehtml5.co/" target="_blank" rel="noreferrer">freehtml5.co</a></h2>
              <p><a href="https://vimeo.com/channels/staffpicks/93951774" className="btn btn-primary popup-vimeo">Watch Our Video</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default HeroBanner;
