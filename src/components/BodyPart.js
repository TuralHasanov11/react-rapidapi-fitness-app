/* eslint-disable global-require */
import React from 'react';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <div
    className="services"
    style={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', cursor: 'pointer' } : { background: '#fff', cursor: 'pointer' }}
  >
    <span><img className="img-responsive" src={require('../assets/images/dumbbell.svg').default} alt="" /></span>
    <h3>{item}</h3>
    <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius</p>
    <p>
      <button
        type="button"
        onClick={() => {
          setBodyPart(item);
          document.querySelector('#exercises').scrollIntoView({
            behavior: 'smooth',
          });
        }}
        className="btn btn-primary btn-outline btn-sm"
      >More <i className="icon-arrow-right" />
      </button>
    </p>
  </div>
);

export default BodyPart;
