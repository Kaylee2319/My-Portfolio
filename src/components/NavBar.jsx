import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {
 

  return (
    <>
      <div className="navbar">
      <Link to="/" className="name">
          Kaylee Harding
        </Link>
        <Link to="/about" className="menu">
          About Me
        </Link>
        <Link to="/resume" className="menu">
          My Resume
        </Link>
        <Link to="/contact" className="profile">
          Contact Me
        </Link>
          
      </div>
    </>
  );
};

export default NavBar;
