/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { githubAddress, linkedinAddress, phone, portfolioAddress, youtubeAddress } from '../constants';

const Navbar = () => (
  <nav className="fh5co-nav" role="navigation">
    <div className="top">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 text-right">
            <p className="num">Call: {phone}</p>
            <ul className="fh5co-social">
              <li><a target="_blank" href={linkedinAddress} rel="noreferrer"><i className="icon-linkedin" /></a></li>
              <li><a target="_blank" href={youtubeAddress} rel="noreferrer"><i className="icon-youtube" /></a></li>
              <li><a target="_blank" href={githubAddress} rel="noreferrer"><i className="icon-github" /></a></li>
              <li><a target="_blank" href={portfolioAddress} rel="noreferrer"><i className="icon-file" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="top-menu">
      <div className="container">
        <div className="row">
          <div className="col-xs-2">
            <div id="fh5co-logo"><NavLink to="/">Fitness</NavLink></div>
          </div>
          <div className="col-xs-10 text-right menu-1">
            <ul>
              <li><a href="#exercises">Exercises</a></li>
              <li><a href="#target">Target Muscles</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
