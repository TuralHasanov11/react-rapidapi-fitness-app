import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => (
  <li className="one-fourth animate-box" data-animate-effect="fadeIn" style={{ backgroundImage: `url(${exercise.gifUrl})` }}>
    <Link to={`/exercise/${exercise.id}`}>
      <div className="case-studies-summary text-capitalize">
        <span>{exercise.target}</span><br />
        <span>{exercise.bodyPart}</span>
        <h4>{exercise.name}</h4>
      </div>
    </Link>
  </li>
);

export default ExerciseCard;
