import React from "react";
import ProjectCard from "./ProjectCard";
import "../style/projects.css";

const Projects = () => {

  const list = [{
    id: 1,
    name: 'Muvi WebApp',
    description: "This project is a web app about Movies, we fetched all data from TMBD API, Users can like movies and also give a comment. All data are recorded in the involvement API and also displayed on the screen.",
    tech: ["HTML", "Javascript", "CSS", "Webpack", "Jest", "NPM"],
    liveLink: "https://farida-hamid.github.io/Muvi-WebApp/",
    githubLink: "https://farida-hamid.github.io/Muvi-WebApp/",
    image: 'https://github.com/Farida-Hamid/Personal-Website/blob/dev/src/style/assets/project1.png?raw=true',
  },
  {
    id: 2,
    name: 'Math Magicians',
    description: "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations and read a random math-related quote. By building this application, you will learn how to use React.",
    tech: ["React", "Javascript", "CSS"],
    liveLink: "https://dev--adorable-churros-0bd093.netlify.app",
    githubLink: "https://github.com/Farida-Hamid/Maths",
    image: 'https://github.com/Farida-Hamid/Personal-Website/blob/dev/src/style/assets/project2.png?raw=true',
  }, 
  {
  id: 3,
  name: 'Money Monitor',
  description: "This is a Ruby on Rails Mobile Web Application that allows the user to register and log in, so that the data is private to them. introduce new transactions associated with a category. see the money spent on each category.",
  tech: ["Ruby", "Rails", "CSS", "RSPEC", "PostgreSQL"],
  liveLink: "https://budget-app-r0dc.onrender.com/users/user_id/groups",
  githubLink: "https://github.com/Farida-Hamid/BudgetApp-rails",
  image: 'https://github.com/Farida-Hamid/Personal-Website/blob/dev/src/style/assets/project3.png?raw=true',
  },
  {
    id: 4,
    name: 'Thearter Play',
    description: "This capstone project I based on an online website for a conference that provided some design guidelines to create the website, but I personalized the content. Built with JavaScript, HTML, CSS.",
    tech: ["HTML", "Javascript", "CSS"],
    liveLink: "https://farida-hamid.github.io/Capstone/",
    githubLink: "https://github.com/Farida-Hamid/Capstone",
    image: 'https://github.com/Farida-Hamid/Personal-Website/blob/dev/src/style/assets/project4.png?raw=true',
  }];

    return (
      <>
        <h2 className="title" id="projects">
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