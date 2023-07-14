import React from "react";

const ProjectCard = ({ name, description, tech, liveLink, githubLink, image }) => {

  return (
    <div className="project-card" >
      {/* <div className="wrapper"> */}
        <img className="screenshot" src={image} alt="screenshot" />
        {/* <div className="overlay"></div>
      </div> */}

      <div>
        <h2 style={{color: "var(--lightest-slate)"}}>{name}</h2>
        <p>{description}</p>

        <ul className="tech">
          {tech.map ((item, index) => (
            <li className="robotic" key={index}>{item}</li>
          ))}
        </ul>

        <div className="links">
          <a className="action" href={liveLink} target="_blank" rel="noreferrer">Live</a><br/>
          <a className="action" href={githubLink} target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </div>
  )
};

export default ProjectCard;