import React from 'react';

const Skills = () => {
  const skillsList = [
    "HTML5", 
    "CSS3", 
    "JavaScript / React"
  ];

  return (
    <section id="habilidades" className="section">
      <h3 className="section-title">Habilidades Técnicas</h3>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;