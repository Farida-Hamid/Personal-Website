import React from "react";
import "../style/intro.css"

const Intro = () => {
  return (
    <div className="basic-font">
      <p className="robotic">Hi, my name is</p>
      <h1 style={{color: "var(--lightest-slate)"}}>Farida Hamid</h1>
      <h1 style={{color: "var(--light-slate)"}}>A Full Stack Developer</h1>
      <p className="introduction">I'm a software engineer with an AI background. 
      After learning so much last year, I'm longing to put it to practice and learn some more.
      I enjoy connecting with people and build cool products.</p>
    </div>
  )
}

export default Intro;