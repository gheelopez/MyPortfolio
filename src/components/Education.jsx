import React from 'react';

const Education = () => {
  const education = [
    {
      icon: '🎓',
      title: 'Bachelor of Science in Computer Science',
      school: 'De La Salle University',
      platform: 'Manila, Philippines',
      year: '2026'
    },
    {
      icon: '📚',
      title: 'STEM - High School Diploma',
      school: 'San Miguel National High School',
      platform: 'San Miguel, Bulacan',
      year: '2022'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="section-header">
        <h2 className="section-title">Education.</h2>
      </div>
      <div className="education-list">
        {education.map((edu, index) => (
          <div className="education-item" key={index}>
            <div className="education-icon">{edu.icon}</div>
            <div className="education-content">
              <h3>{edu.title}</h3>
              <div className="education-school">{edu.school}</div>
            </div>
            <div className="education-meta">
              <div className="education-platform">{edu.platform}</div>
              <div className="education-year">{edu.year}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
