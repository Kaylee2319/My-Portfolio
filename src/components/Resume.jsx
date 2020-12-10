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
      <div className="Skill">
        <p className="mySkills">
        HTML | CSS | JavaScript | React | Express | MongoDB | Node.js | Git | GitHub | Data Modeling | VSCode | NoSQL | Agile Methodology | SQL | Microsoft Office | MacOS/Windows | Pair Programing | Google Drive | Trello + Project Planning Tools | RESTful API | Axios | Terminal | Creative | Problem-Solving | Attention to Detail | Punctual | Remote Work Proficiency | Socket.io | Product Pitching
        </p> 
      </div>
      <div className='myResume'>
        <a href= 'https://docs.google.com/document/d/e/2PACX-1vRAdzzWEPZrtHrVKxXQqb_FTwmd1OTVllCyaXmXAdIC43Ual0wdpMl7Cx-pi_OnJQVWldPlFFSK35_n/pub'><ImProfile size={100} style={{ color: 'honeydew', backgroundColor: 'rgba(133, 19, 114, 0.5)', borderRadius:'12px'}} /></a>
        <h4 className='res'>RESUME</h4>
      </div>
    </body>
  );
};

export default Resume;