import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import '../css/HomePage.css';

const HomePage = () => {

  return (
    <body className="homePage">
    <NavBar />
    <div>
      <div className='welcome'>
        <h1>Welcome</h1>
      </div>
      
      <div className='HomeBody'>
        <div className='kayleeName'>
          <div className='kayleePic'>
          </div>
            <h1 className='kaylee'>Kaylee Harding</h1>
            <h2 className='kaylee'>Full-Stack Web-Developer</h2>
        </div>
      <div className='projectTitleBody'>
        <div className='projectTitle'><h1>My Projects</h1></div>
          <div className='myProjects'>
            <a href='https://outpost-gaming.herokuapp.com/'><button id="project1" className="project"></button></a> 
            <a href='https:/pokecardex.herokuapp.com/'><button id="project2" className="project"></button></a> 
            <a href='https://github.com/Kaylee2319/Avatar_game'><button id="project3" className="project"></button></a> 
            <a href='https://github.com/Kaylee2319'><button id="project4" className="project"></button></a> 
            <a href='https://outpost-gaming.herokuapp.com/'><button id="project5" className="project"></button></a> 
            <a href='https://outpost-gaming.herokuapp.com/'><button id="project6" className="project"></button></a> 
            <a href='https://outpost-gaming.herokuapp.com/'><button id="project7" className="project"></button></a> 
          </div>
        </div>
      </div>
      <div className='traits'></div>
      <div className='traits1'>
          <div className='trait'></div>
          <div className='trait1'></div>
          <div className='trait2'></div>
          <div className='trait3'></div>
          <div className='trait4'></div>
          <div className='trait5'></div>
          <div className='trait6'></div>
      </div>
      </div>
    </body>
  );
};

export default HomePage;
