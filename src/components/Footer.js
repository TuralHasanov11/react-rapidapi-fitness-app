/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="fh5co-footer" className="fh5co-bg" style={{ backgroundImage: `url(${'img_bg_1.jpg'})` }} role="contentinfo">
      <div className="overlay" />
      <div className="container">
        <div className="row copyright">
          <div className="col-md-12 text-center">
            <p>
              <small className="block">&copy; {year} Free HTML5. All Rights Reserved.</small>
              <small className="block">Designed by <a href="http://freehtml5.co/" target="_blank" rel="noreferrer">FreeHTML5.co</a> Demo Images: <a href="http://unsplash.co/" target="_blank" rel="noreferrer">Unsplash</a></small>
            </p>
            <ul className="fh5co-social-icons">
              <li><a href="#"><i className="icon-twitter" /></a></li>
              <li><a href="#"><i className="icon-facebook" /></a></li>
              <li><a href="#"><i className="icon-linkedin" /></a></li>
              <li><a href="#"><i className="icon-dribbble" /></a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
