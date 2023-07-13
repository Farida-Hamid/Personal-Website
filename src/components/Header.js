/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import "../style/header.css";

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  const scroll = (element) => {
    const section = document.querySelector( element );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  return (
    <header>
      <a href="/"><div className="logo">&#68316;</div></a>

      <button className="nav-btn" onClick={showNavbar}>&#12692;</button>

      <nav ref={navRef}>
        <button className="nav-btn nav-close-button" onClick={showNavbar}>&#10005;</button>
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
      </nav>
    </header>
  )
}

export default Header;