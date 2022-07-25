import React from 'react';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <div className="container">
    <div className="row">
      {data.map((item) => (
        <div
          className="col-md-4 text-center animate-box mb-2"
          key={item.id || item}
        >
          {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
        </div>
      ))}
    </div>
  </div>
);

export default HorizontalScrollbar;
