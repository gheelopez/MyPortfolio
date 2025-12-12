import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Core',
      skills: [
        'React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind',
        'Responsive Design', 'UI/UX', 'Accessibility', 'Git', 'Figma',
        'Node.js', 'Express.js', 'MongoDB', 'MySQL'
      ]
    },
    {
      title: 'Professional',
      skills: [
        'Project Management', 'Leadership', 'Agile', 'Scrum', 'Collaboration',
        'Design Systems', 'Component Architecture', 'Critical Thinking',
        'Time Management', 'QA', 'Research', 'Communication'
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="section-header">
        <h2 className="section-title">Skills<span className="accent">.</span></h2>
      </div>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skills-category" key={index}>
            <h3>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <span className="skill-item" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
