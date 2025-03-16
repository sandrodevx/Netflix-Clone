import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Row.css';

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className="row-poster"
          />
        ))}
      </div>
    </div>
  );
};

export default Row;