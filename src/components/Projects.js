import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projectList = [
    {
      title: "Calorie Estimation from Food Images",
      desc: "Deep learning app to identify food items and estimate calories.",
      image: "/calorie.png" // Replace with actual image
    },
    {
      title: "Bookstore Management System",
      desc: "Web app for managing books with seller and buyer login.",
      image: "/book.png"
    },
    {
      title: "Landslide Detection - IoT System",
      desc: "Sensor-based IoT project to detect landslides in hilly regions.",
      image: "/landslide.jpg"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <img src={project.image} alt={project.title} className="project-image" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
