import React from "react";
import ProjectCard from "./ProjectCard";
import "../style/projects.css";

const Projects = () => {

  const list = [{
    id: 1,
    name: 'Muvi-WebApp',
    description: "This project is a web app about Movies, we fetched all data from TMBD API, Users can like movies and also give a comment. All data are recorded in the involvement API and also displayed on the screen.",
    tech: ["HTML", "Javascript", "CSS", "Webpack", "Jest", "NPM"],
    liveLink: "https://farida-hamid.github.io/Muvi-WebApp/",
    githubLink: "https://farida-hamid.github.io/Muvi-WebApp/",
  },
  {
    id: 2,
    name: 'Muvi-WebApp2',
    description: "This project is a web app about Movies, we fetched all data from TMBD API, Users can like movies and also give a comment. All data are recorded in the involvement API and also displayed on the screen.",
    tech: ["HTML", "Javascript", "CSS", "Webpack", "Jest", "NPM"],
    liveLink: "https://farida-hamid.github.io/Muvi-WebApp/",
    githubLink: "https://farida-hamid.github.io/Muvi-WebApp/",
  }, 
  {
    id: 3,
    name: 'Muvi-WebApp3',
    description: "This project is a web app about Movies, we fetched all data from TMBD API, Users can like movies and also give a comment. All data are recorded in the involvement API and also displayed on the screen.",
    tech: ["HTML", "Javascript", "CSS", "Webpack", "Jest", "NPM"],
    liveLink: "https://farida-hamid.github.io/Muvi-WebApp/",
    githubLink: "https://farida-hamid.github.io/Muvi-WebApp/",
  }];

    return (
      <>
        <h1 style={{color: "var(--lightest-slate)"}}>Projects</h1>
        {list.map((project) => (
          <ProjectCard 
            key={project.id}
            name={project.name}
            description={project.description}
            tech={project.tech}
            liveLink={project.liveLink}
            githubLink={project.githubLink}            
          />
        ))}
      </>
    );
};

export default Projects;