import React from 'react';
import GitHubIcon from './GitHub';
import LinkedinIcon from './LinkedIn';
import TwitterIcon from './Twitter';

const Social = () => {
  
  return (
    <>
      <a href='https://github.com/Farida-Hamid' target="_blank" rel="noreferrer" >
        <GitHubIcon />
      </a>
      <a href='http://linkedin.com/in/farida-hamid' target="_blank" rel="noreferrer" >
        <LinkedinIcon />
      </a>
      <a href='https://twitter.com/FaridaHOHA' target="_blank" rel="noreferrer" >
        <TwitterIcon />
      </a>

    </>
)};

export default Social;