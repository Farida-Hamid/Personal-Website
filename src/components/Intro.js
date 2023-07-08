import React from "react";
import "../style/intro.css"

const Intro = () => {
  return (
    <>
      <p className="robotic" style={{ padding: "10% 0 0"}}>Hi, my name is</p>
      <h1 style={{color: "var(--lightest-slate)"}}>Farida Hamid</h1>
      <h1 style={{color: "var(--light-slate)"}}>A Software Engineer</h1>
      <p className="introduction">I'm a software engineer with an AI background, eager to 
      put what I've learned over the past few years into practice and gain even more 
      knowledge. Making valuable products and communicating with individuals from all 
      backgrounds are two things I treasure. </p>
    </>
  )
}

export default Intro;