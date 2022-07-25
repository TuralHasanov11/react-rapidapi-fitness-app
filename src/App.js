/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './assets/css/animate.css';
import './assets/css/icomoon.css';
import './assets/css/bootstrap.css';
import './assets/css/magnific-popup.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/style.css';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <HelmetProvider>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,700,800" rel="stylesheet" />
      <link rel="stylesheet" href="/assets/css/animate.css" />
      <link rel="stylesheet" href="/assets/css/icomoon.css" />
      <link rel="stylesheet" href="/assets/css/bootstrap.css" />
      <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
      <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
      <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </Helmet>
    <div id="page">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </div>
    <div className="gototop js-top">
      <a href="#" className="js-gotop"><i className="icon-arrow-up" /></a>
    </div>
    <Helmet>
      <script src="/assets/js/jquery.js" type="text/jsx" />
      <script src="/assets/js/jquery.easing.1.3.js" type="text/jsx" />
      <script src="/assets/js/bootstrap.min.js" type="text/jsx" />
      <script src="/assets/js/jquery.waypoints.min.js" type="text/jsx" />
      <script src="/assets/js/jquery.stellar.min.js" type="text/jsx" />
      <script src="/assets/js/jquery.stellar.min.js" type="text/jsx" />
      <script src="/assets/js/owl.carousel.min.js" type="text/jsx" />
      <script src="/assets/js/jquery.countTo.js" type="text/jsx" />
      <script src="/assets/js/jquery.magnific-popup.min.js" type="text/jsx" />
      <script src="/assets/js/magnific-popup-options.js" type="text/jsx" />
      <script src="/assets/js/main.js" type="text/jsx" />
      <script src="/assets/js/demoscript.js" type="text/jsx" />
    </Helmet>
  </HelmetProvider>
);

export default App;
