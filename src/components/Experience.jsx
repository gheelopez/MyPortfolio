import React from 'react';

const Experience = () => {
  const experiences = [
    {
      date: 'Oct 2024 - Dec 2024',
      title: 'Intern at HR Tools Department',
      company: 'Publicis Groupe - Leo Burnett',
      description: [
        'Automated HR offboarding processes using MS Power Automate and SharePoint to improve efficiency and workflow management'
      ]
    },
    {
      date: 'Aug 2025 - Sep 2025',
      title: 'Freelance Frontend Developer',
      company: 'Infomatik',
      link: 'https://infomatik.onrender.com',
      description: [
        'Developed and launched the Infomatik website, a responsive web platform that has gained 100+ active users',
        'Implemented modern frontend architecture using React and responsive design principles'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="section-header">
        <h2 className="section-title">Experience<span className="accent">.</span></h2>
      </div>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-date">{exp.date}</div>
            <div className="experience-details">
              <h3>{exp.title}</h3>
              <div className="experience-company">
                {exp.link ? (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer">
                    {exp.company} →
                  </a>
                ) : (
                  exp.company
                )}
              </div>
              <ul className="experience-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
