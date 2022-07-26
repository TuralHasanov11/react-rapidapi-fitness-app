import React from 'react';
import Loader from './Loader';
import ExerciseCard from './ExerciseCard';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <>
    <div id="fh5co-services" className="fh5co-bg-section">
      <div className="row animate-box">
        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
          <h2>Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises</h2>
        </div>
      </div>
      <div className="row animate-box">
        <ul id="fh5co-portfolio-list">
          {targetMuscleExercises.length !== 0 ? targetMuscleExercises.map((exercise, idx) => (
            <ExerciseCard key={idx} exercise={exercise} />
          )) : <Loader />}
        </ul>
      </div>
    </div>

    <div id="fh5co-services" className="fh5co-bg-section">
      <div className="row animate-box">
        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
          <h2>Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises</h2>
        </div>
      </div>
      <div className="row animate-box">
        <ul id="fh5co-portfolio-list">
          {equipmentExercises.length !== 0 ? equipmentExercises.map((exercise, idx) => (
            <ExerciseCard key={idx} exercise={exercise} />
          )) : <Loader />}
        </ul>
      </div>
    </div>
  </>
);

export default SimilarExercises;
