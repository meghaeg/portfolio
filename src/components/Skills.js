import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skills = [
    { name: "Programming (C, Java, Python)", image: process.env.PUBLIC_URL + "/C.png" },
    { name: "Web Development", image: process.env.PUBLIC_URL + "/web.png" },
    { name: "Data Analytics (Power BI)", image: process.env.PUBLIC_URL + "/powerbi.jpg" }
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.image} alt={skill.name} className="skill-img" />
            <h4>{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
