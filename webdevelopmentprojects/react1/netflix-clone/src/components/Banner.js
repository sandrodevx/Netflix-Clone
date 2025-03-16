import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      setMovie(response.data.results[0]); // Película más popular
    };
    fetchMovie();
  }, []);

  return (
    <div className="banner">
      {movie && (
        <>
          <img 
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
            alt={movie.title}
            className="banner-image"
          />
          <div className="banner-content">
            <h1 className="banner-title">{movie.title}</h1>
            <p className="banner-description">{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Banner;