import React from "react";

const ProjectCard = ({ name, description, tech, liveLink, githubLink, image }) => {

  return (
    <div className="project-card" >
      <img className="screenshot" src={image} alt="screenshot" />
      
      <div>
        <h2 style={{color: "var(--lightest-slate)"}}>{name}</h2>
        <p>{description}</p>

        <ul className="tech">
          {tech.map ((item, index) => (
            <li className="robotic" key={index}>{item}</li>
          ))}
        </ul>

        <div className="links">
          <a className="action" href={liveLink} target="_blank" >Live</a><br/>
          <a className="action" href={githubLink} target="_blank" >Github</a>
        </div>
      </div>
    </div>
  )
};

export default ProjectCard;