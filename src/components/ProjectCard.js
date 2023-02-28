import React from "react";

const ProjectCard = ({ id, name, description, tech, liveLink, githubLink }) => {

  return (
    <div style={{color: "var(--lightest-slate)"}}>
      <h2>{name} {id}</h2>
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

export default ProjectCard;