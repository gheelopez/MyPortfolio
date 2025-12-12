import React from 'react';

const SkillsBand = () => {
  const skills = [
    'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'UI/UX DESIGN',
    'RESPONSIVE DESIGN', 'ACCESSIBILITY', 'COMPONENT ARCHITECTURE', 'DESIGN SYSTEMS'
  ];

  return (
    <section className="skills-band">
      <div className="skills-track">
        <div className="skills-scroll">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
          {skills.map((skill, index) => (
            <span key={`duplicate-${index}`}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsBand;
