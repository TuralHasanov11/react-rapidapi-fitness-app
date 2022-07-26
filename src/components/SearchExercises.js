import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    async function fetchExercisesData() {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      document.querySelector('#exercises').scrollIntoView({
        behavior: 'smooth',
      });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <div id="fh5co-services" className="fh5co-bg-section">
      <div className="row animate-box">
        <div className="col-12 text-center fh5co-heading">
          <h2 className="text-center">Awesome Exercises you should know</h2>
          <p className="text-center">Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
        </div>
      </div>
      <div className="row animate-box justify-content-center mb-5" id="target">
        <form action="#" className="col-10 text-center" onSubmit={handleSearch}>
          <div className="row form-group">
            <div className="col-12">
              <input
                type="text"
                id="fname"
                className="form-control"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="Search Exercises"
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </form>
      </div>
      <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
    </div>
  );
};

export default SearchExercises;
