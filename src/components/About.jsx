import React, { useState } from 'react';
import Footer from './Footer'
import NavBar from './NavBar';
import '../css/About.css';
 

const About = () => {
  
  const [aboutMe, setAboutMe] = useState(`Hello, I'm Kaylee Harding. I am prior military and a web developer with a love of problem solving and a dedication to my job. CLICK around to find out a little more ABOUT ME.`);
  const [aboutMeTitle, setAboutMeTitle] = useState('About Me!');

  const message = () =>{
    setAboutMe(`Hello, I'm Kaylee Harding. I am prior military and a web developer with a love of problem solving and a dedication to my job. CLICK around to find out a little more ABOUT ME.`)
    setAboutMeTitle('About Me!')
  }
  const message2 = () =>{
    setAboutMe('Here I learned the MERN stack (MongoDB, Express, React, and Node.js) along with JavaScript, HTML, and CSS. I used the skill and traits I learned in my life before to be able to pitch an idea, and with an amazing team we created and presented an application that is focused around suicidal awareness, it allows vets to connect and play their favorite games. It can be used as a platform for veterans to break the ice between other veterans who have been through similar situations. This project was built using the MERN (MongoDB, Express, React, Node.js) Stack. Other technologies used to improve user experience were Sweet Alert, to notify them when an update is submitted or they are logged out. Send Grid was used to send welcome/goodbye emails when users sign up or close the account. JSON Web Tokens were used to create tokens that validated users throughout the website. Socket.io to allow for communication between users in the chat. Lastly, we used Postman to test the creation of users, and other HTTP requests in the backend. Heroku was used to deploy the app to the web.')
    setAboutMeTitle('Wyncode Academy')
  }
  const message3 = () =>{
    setAboutMe('I served 5 years active duty in the United States Coast Guard, as a Machinery Technician. I had many duties including Search and Rescue, Engineer of the Watch, Law Enforcement Officer and Communication Watch Standard. I saved countless lives and worked more hours than anyone could count. I repaired and maintained several engines on many different platforms, I have stopped drug runners, I have pulled people from burning boats, and I spent several days looking for a person at sea knowing it was too late but never gave up hope. This time played a huge role in my life strengthening my traits Responsibility, dedication, loyalty, leadership, Communication and perseverance.')
    setAboutMeTitle('Coast Guard')
  }
  const message4 = () =>{
    setAboutMe('To be better today than I was yesterday.To keep a hunger for knowledge. To learn at least one new thing everyday. To maintain the core values ingrained in me while serving... HONOR, RESPECT, DEVOTION TO DUTY')
    setAboutMeTitle('My Drive')
  }
  const message5 = () =>{
    setAboutMe('I was born and raised in Texas. I went to a small High School, graduating with 40 people. I was In the FFA (Future Farmers of America) I raised and showed many animals and built multiple projects for show including utility trailers, picnic tables, and green houses. I was also one of many teams including Softball, track and field, cross country, and also land judging. This was the start of my wonderful life teaching me important traits like Responsibility, dedication, loyalty, leadership, Communication and perseverance. Guiding me into My next stage of life.')
    setAboutMeTitle('Early Life')
  }
   return(
    <body className="aboutPage">
    <NavBar />
    <div className='aboutPage_quote'>From Oceans To Notions</div>
    <div className='aboutPage_Image'></div>
    <div className='aboutPage_aboutBackground'>
        <div className='aboutPage_Textbox'>
         <h1 className='aboutPage_Title'> {aboutMeTitle} </h1>
         <p className='aboutPage_Description'> {aboutMe} </p>
        </div>
    </div>
    <div className='aboutPage_buttons'>
      <button onClick={message} className='aboutPage_button1'>1</button>
      <button onClick={message2} className='aboutPage_button2'>2</button>
      <button onClick={message3} className='aboutPage_button3'>3</button>
      <button onClick={message4} className='aboutPage_button4'>4</button>
      <button onClick={message5} className='aboutPage_button5'>5</button>
    </div>
    <Footer />
    </body>
  );
};

export default About;