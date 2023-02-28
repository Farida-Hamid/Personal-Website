import React from "react";
import ProjectCard from "./ProjectCard";
import "../style/projects.css";

const Projects = () => {

  const list = [{
    id: 1
  },
  {
    id: 2
  }, 
  {
    id: 3
  }];

    return (
      <>
        <h1 style={{color: "var(--lightest-slate)"}}>Projects</h1>
        {list.map((project) => (
          <ProjectCard key={project.id} />
        ))}
      </>
    );
};

export default Projects;