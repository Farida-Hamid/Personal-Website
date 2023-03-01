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
    image: 'https://i0.wp.com/www.tipsnepal.com/wp-content/uploads/2020/09/German_maple_Violin-scaled.jpeg?fit=703%2C768&quality=100&strip=all&ssl=1',
  },
  {
    id: 2,
    name: 'Muvi-WebApp2',
    description: "This project is a web app about Movies, we fetched all data from TMBD API, Users can like movies and also give a comment. All data are recorded in the involvement API and also displayed on the screen.",
    tech: ["HTML", "Javascript", "CSS", "Webpack", "Jest", "NPM"],
    liveLink: "https://farida-hamid.github.io/Muvi-WebApp/",
    githubLink: "https://farida-hamid.github.io/Muvi-WebApp/",
    image: 'https://i0.wp.com/www.tipsnepal.com/wp-content/uploads/2020/09/German_maple_Violin-scaled.jpeg?fit=703%2C768&quality=100&strip=all&ssl=1',
  }, 
  {
    id: 3,
    name: 'Muvi-WebApp3',
    description: "This project is a web app about Movies, we fetched all data from TMBD API, Users can like movies and also give a comment. All data are recorded in the involvement API and also displayed on the screen.",
    tech: ["HTML", "Javascript", "CSS", "Webpack", "Jest", "NPM"],
    liveLink: "https://farida-hamid.github.io/Muvi-WebApp/",
    githubLink: "https://farida-hamid.github.io/Muvi-WebApp/",
    image: 'https://i0.wp.com/www.tipsnepal.com/wp-content/uploads/2020/09/German_maple_Violin-scaled.jpeg?fit=703%2C768&quality=100&strip=all&ssl=1',
  }];

    return (
      <>
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
      </>
    );
};

export default Projects;