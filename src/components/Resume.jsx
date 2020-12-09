import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import '../css/Resume.css';
import { ImProfile } from "react-icons/im";
const Resume = () => {

  return (
    <body className="resumePage">
    <NavBar />
      <div className='theSkills'>
        <h4>My Skills</h4>
      </div> 
      <div className="mySkills">
        <p className="mySkills">
          HTML | CSS | JavaScript | React.JS | Node.JS | Express.JS | MongoDB | Socket.io
        </p> 
      </div>
      <div className='myResume'>
        <a href= 'https://docs.google.com/document/d/e/2PACX-1vRAdzzWEPZrtHrVKxXQqb_FTwmd1OTVllCyaXmXAdIC43Ual0wdpMl7Cx-pi_OnJQVWldPlFFSK35_n/pub'><ImProfile size={100} style={{ color: 'honeydew' }} /></a>
        <h4 className='res'>RESUME</h4>
      </div>
    </body>
  );
};

export default Resume;