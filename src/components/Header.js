/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../style/header.css";

const Header = () => {
  const scroll = (element) => {
    const section = document.querySelector( element );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  return (
    <nav className="header">
      <a href="/"><div className="logo">&#68316;</div></a>
      
      <div className="nav">
        <a
         onClick={() => scroll('.about')}
         className="header-list"
         >
         <div className="robotic">1.0</div>
         About Me</a>
        <a
         onClick={() => scroll('#projects')}
         className="header-list"
         >
         <div className="robotic">2.0</div>
         Projects
         </a>
        <a
         onClick={() => scroll('.call')}
         className="header-list"
         >
         <div className="robotic">3.0</div>
         Contacts</a>
      </div>
    </nav>
  )
}

export default Header;