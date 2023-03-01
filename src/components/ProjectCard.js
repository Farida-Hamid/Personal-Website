import React from "react";

const ProjectCard = ({ id, name, description, tech, liveLink, githubLink, image }) => {

  return (
    <div className="project-card" style={{color: "var(--slate)"}}>
      <img className="screenshot" src={image} alt="screenshot" />
      <h2 style={{color: "var(--lightest-slate)"}}>{name}</h2>
      <p>{description}</p>

      <ul className="robotic">
        {tech.map ((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <a href={liveLink} >Live</a><br/>
      <a href={githubLink} >Github</a>
    </div>
  )
};

export default ProjectCard;