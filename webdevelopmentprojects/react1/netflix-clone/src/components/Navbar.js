import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
        alt="Netflix Logo" 
        className="logo"
      />
      <div className="search-container">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Buscar..." className="search-input" />
      </div>
    </nav>
  );
};

export default Navbar;