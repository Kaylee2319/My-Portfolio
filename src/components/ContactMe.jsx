import React from 'react';
import NavBar from './NavBar';
import '../css/ContactMe.css';
import { AiFillLinkedin } from "react-icons/ai";
const Contact = () => {

  return (
    <body className="contactPage">
    <NavBar />
      <div className="contactInfo">
        <h1>Kaylee Harding</h1>
        <h3>Email: Kayleeharding23@gmail.com</h3>
        <h3>Phone: (409)433-4439</h3>
      </div>
      <div className="contactLink">
      <a href='https://www.linkedin.com/in/kayleeharding/'><AiFillLinkedin size={100} style={{ color: 'honeydew', backgroundColor: 'rgba(133, 19, 114, 0.5)', borderRadius:'12px'}}/></a>
      </div>
    </body>
  );
};

export default Contact;