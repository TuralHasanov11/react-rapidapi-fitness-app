import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(24);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    document.querySelector('#exercises').scrollIntoView({
      behavior: 'smooth',
    });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <div id="fh5co-gallery">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
            <h2>Exercises</h2>
            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
          </div>
        </div>
      </div>
      <div id="exercises" className="container-fluid">
        <div className="row row-bottom-padded-md">
          <div className="col-md-12">
            <ul id="fh5co-portfolio-list">
              {currentExercises.map((exercise, idx) => (
                <ExerciseCard key={idx} exercise={exercise} />
              ))}
            </ul>
          </div>
        </div>
        <Stack sx={{ my: { lg: '114px', xs: '70px' } }} alignItems="center">
          {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
          )}
        </Stack>
      </div>
    </div>
  );
};

export default Exercises;

