import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row 
        title="Tendencias" 
        fetchUrl={`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`}
      />
      <Row 
        title="Originales de Netflix" 
        fetchUrl={`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_networks=213`}
      />
    </div>
  );
}

export default App;