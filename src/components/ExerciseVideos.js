import React from 'react';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div id="fh5co-gallery">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
            <h2>Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos</h2>
            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row row-bottom-padded-md">
          <div className="col-md-12">
            <ul id="fh5co-portfolio-list">
              {exerciseVideos?.slice(0, 3)?.map((item, index) => (
                <li key={index} className="one-third animate-box" data-animate-effect="fadeIn" style={{ backgroundImage: `url(${item.video.thumbnails[0].url})`, backgroundPosition: 'cover' }}>
                  <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer" className="exercise-video">
                    <div className="case-studies-summary">
                      <span>{item.video.channelName}</span>
                      <h4>{item.video.title}</h4>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseVideos;
