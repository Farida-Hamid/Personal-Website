import React from "react";
import "../style/intro.css"

const Intro = () => {
  return (
    <>
      <p className="robotic" style={{ padding: "10% 0 0"}}>Hi, my name is</p>
      <h1 style={{color: "var(--lightest-slate)"}}>Farida Hamid</h1>
      <h1 style={{color: "var(--light-slate)"}}>A Full Stack Developer</h1>
      <p className="introduction">I'm a software engineer with an AI background. After
       learning so much last year, I'm longing to put it into practice and learn some more.
       I enjoy connecting with people and building cool products.</p>
    </>
  )
}

export default Intro;