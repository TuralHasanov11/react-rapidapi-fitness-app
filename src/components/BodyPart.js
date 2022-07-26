/* eslint-disable global-require */
import React from 'react';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <div
    className="services text-center"
    style={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
  >
    <span><img className="img-responsive" src={require('../assets/images/dumbbell.svg').default} alt="" /></span>
    <h3>{item}</h3>
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
      >View Exercises <i className="icon-arrow-right" />
      </button>
    </p>
  </div>
);

export default BodyPart;
