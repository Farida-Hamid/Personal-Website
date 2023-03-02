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
    image: 'https://github.com/Farida-Hamid/Personal-Website/blob/dev/src/style/assets/project1.png?raw=true',
  },
  {
    id: 2,
    name: 'Muvi-WebApp2',
    description: "This project is a web app about Movies, we fetched all data from TMBD API, Users can like movies and also give a comment. All data are recorded in the involvement API and also displayed on the screen.",
    tech: ["HTML", "Javascript", "CSS", "Webpack", "Jest", "NPM"],
    liveLink: "https://farida-hamid.github.io/Muvi-WebApp/",
    githubLink: "https://farida-hamid.github.io/Muvi-WebApp/",
    image: 'https://github.com/Farida-Hamid/Personal-Website/blob/dev/src/style/assets/project1.png?raw=true',
  }, 
  {
    id: 3,
    name: 'Muvi-WebApp3',
    description: "This project is a web app about Movies, we fetched all data from TMBD API, Users can like movies and also give a comment. All data are recorded in the involvement API and also displayed on the screen.",
    tech: ["HTML", "Javascript", "CSS", "Webpack", "Jest", "NPM"],
    liveLink: "https://farida-hamid.github.io/Muvi-WebApp/",
    githubLink: "https://farida-hamid.github.io/Muvi-WebApp/",
    image: 'https://github.com/Farida-Hamid/Personal-Website/blob/dev/src/style/assets/project1.png?raw=true',
  }];

    return (
      <div id="projects">
        <h2 className="title">
          <div className="robotic">02.</div>
          Projects
          <hr></hr>
        </h2>

        {list.map((project) => (
          <ProjectCard
            key={project.id}
            props={project}
            id={project.id}
            name={project.name}
            description={project.description}
            tech={project.tech}
            liveLink={project.liveLink}
            githubLink={project.githubLink}          
            image={project.image}         
          />
        ))}
      </div>
    );
};

export default Projects;