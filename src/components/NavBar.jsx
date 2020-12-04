import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {
 

  return (
    <>
      <div className="navbar">
        <div className='links'>
          <Link to="/" className="Link">
          Home
          </Link>
          <Link to="/about" className="Link">
          About Me
          </Link>
          <Link to="/resume" className="Link">
          My Resume
          </Link>
          <Link to="/contact" className="Link">
          Contact Me
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
