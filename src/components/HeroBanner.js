import React from 'react';
import HeroBannerImage from '../assets/images/img_bg.jpg';

const HeroBanner = () => (
  <header id="fh5co-header" className="fh5co-cover" role="banner" style={{ backgroundImage: `url(${HeroBannerImage})` }} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="display-t">
            <div className="display-tc animate-box" data-animate-effect="fadeIn">
              <h1>Make it a lifestyle, not a duty</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default HeroBanner;
