import React from "react";
import personalPic from "../style/assets/personal-photo.jpg"
import "../style/about.css"

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <h2 className="title" id="about">
          <div className="robotic">01.</div>
          <div style={{width: "200px"}} >About me</div>
          <hr></hr>
        </h2>
        <p>Hi, I’m Farida, a Software Engineer who graduated from 
        <a style={{color: "var(--green)"}} href="https://www.microverse.org"> Microverse</a>. In this
         remote software development program, we learn by collaborating with developers
         from around the globe. Also, I’m a Mentor at Udacity, helping Artificial
         Intelligence students by reviewing projects and answering questions.<br/><br/>
         During my BSc in Electrical Communications and Electronics Engineering, making a
         ‘Hello, world!’ program was the first clue I love software. Having covered the
         basics, I spent the following years self-learning, and it’s been quite a journey.
         <br/><br/>On a personal level, growing up around four different cultures 
         established my global-mindedness, which I believe is crucial for a developer as 
         the tech industry is so diverse.<br/><br/>Here are a few technologies I’ve been 
         working with recently:</p>

        <ul>
          <li> <div className="robotic">▷</div> JavaScript (ES6+)</li>
          <li> <div className="robotic">▷</div> Ruby</li>
          <li> <div className="robotic">▷</div> Ruby on Rails</li>
          <li> <div className="robotic">▷</div> Python</li>
          <li> <div className="robotic">▷</div> HTML5</li>
          <li> <div className="robotic">▷</div> CSS3</li>
          <li> <div className="robotic">▷</div> React</li>
          <li> <div className="robotic">▷</div> PostgreSQL</li>
        </ul>
      </div>
      <div className="right">
        <img className="photo" src={personalPic} alt="Headshot" />
      </div>
    </div>
  )
}

export default About;