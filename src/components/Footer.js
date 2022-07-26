/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { githubAddress, linkedinAddress, portfolioAddress, youtubeAddress } from '../constants';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="fh5co-footer" className="fh5co-bg" style={{ backgroundImage: `url(${'img_bg_1.jpg'})` }} role="contentinfo">
      <div className="overlay" />
      <div className="container">
        <div className="row copyright">
          <div className="col-md-12 text-center">
            <p>
              <small className="block">&copy; {year} All Rights Reserved.</small>
            </p>
            <ul className="fh5co-social-icons">
              <li><a target="_blank" href={linkedinAddress} rel="noreferrer"><i className="icon-linkedin" /></a></li>
              <li><a target="_blank" href={youtubeAddress} rel="noreferrer"><i className="icon-youtube" /></a></li>
              <li><a target="_blank" href={githubAddress} rel="noreferrer"><i className="icon-github" /></a></li>
              <li><a target="_blank" href={portfolioAddress} rel="noreferrer"><i className="icon-file" /></a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
