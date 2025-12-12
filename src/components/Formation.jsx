import React from 'react';

const Formation = () => {
  const formations = [
    {
      title: 'BS in Computer Science major in Software Technology',
      platform: 'De La Salle University - Manila',
      hours: 'Expected 2026'
    },
    {
      title: 'Science, Technology, Engineering, and Mathematics (STEM)',
      platform: 'San Miguel National High School - Bulacan',
      hours: 'Graduated 2022'
    }
  ];

  return (
    <section id="formation" className="section">
      <div className="section-header">
        <h2 className="section-title">Education<span className="accent">.</span></h2>
      </div>
      <div className="formation-list">
        {formations.map((formation, index) => (
          <div className="formation-card" key={index}>
            <div className="formation-content">
              <h3>{formation.title}</h3>
            </div>
            <div className="formation-meta">
              <div className="formation-platform">{formation.platform}</div>
              <div className="formation-hours">{formation.hours}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formation;
