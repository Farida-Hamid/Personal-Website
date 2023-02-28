import React from "react";
// import PropTypes from 'prop-types';

const ProjectCard = ({ name, description, tech, liveLink, githubLink }) => {
  
  return (
    <div style={{color: "var(--lightest-slate)"}}>
      <h2>{name}</h2>
      <p>{description}</p>
      <ul>
        {tech.map ((item, index) => (
          <li key={index}> <div className="robotic">▷</div> {item}</li>
        ))}
      </ul>

      <a href={liveLink} >Live</a><br/>
      <a href={githubLink} >Github</a>
    </div>
  )
};

// ProjectCard.propTypes = {
//   key: PropTypes.number.isRequired
// }

export default ProjectCard;