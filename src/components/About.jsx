import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import '../css/About.css';
const About = () => {

  return (
    <body className="aboutPage">
    <NavBar />
      <div className="me">
        <h1>ABOUT ME!</h1>
        </div>
        <div className='aboutBackground'>
        <p className='about'>I served 5 years active duty in the United States Coast Guard, as a Mechanic. I saved countless lives and worked more hours than anyone could count. I repaired and maintained several engines on many different platforms, I have stopped drug runner, I have pulled people from burning boats, and I spent several days looking for a person at sea knowing it was too late but never gave up hope. I know you may think none of that has to do with the jobs I’m applying for but it does, It shows that in less than one year I was able to become proficient at my job and advance 4 times, it shows I am a quick learner, dedicated, detail orientated, with a great sense of pride in all that I do. I will spend countless hours to ensure my tasks are done correctly the first time, I know the meaning of time and how important it is to get things before the deadline. I understand patience, perseverance, and team work. These skills are what helped me complete the coding bootcamp at Wyncode Academy.</p>
        <p></p>
        <p className='about'> There I pitched an idea, and with an amazing team we created and presented an application that is focused around suicidal awareness, it allows vets to connect and play their favorite games. It can be used as a platform for veterans to break the ice between other veterans who have been through similar situations. This project was built using the MERN (MongoDB, Express, React, Node.js) Stack. Other technologies used to improve user experience were Sweet Alert, to notify them when an update is submitted or they are logged out. Send Grid was used to send welcome/goodbye emails when users sign up or close the account. JSON Web Tokens were used to create tokens that validated users throughout the website. Socket.io to allow for communication between users in the chat. Lastly, we used Postman to test the creation of users, and other HTTP requests in the backend. Heroku was used to deploy the app to the web.</p>
      </div>
      
    </body>
  );
};

export default About;