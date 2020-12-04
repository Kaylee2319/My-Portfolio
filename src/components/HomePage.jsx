import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import '../css/HomePage.css';

const HomePage = () => {

  return (
    <body className="homePage">
    <NavBar />
      <div >
        <h1>Homepage!</h1>
      </div>
    </body>
  );
};

export default HomePage;
