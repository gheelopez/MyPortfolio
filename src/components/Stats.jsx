import React from 'react';

const Stats = () => {
  const stats = [
    { number: '4+', label: 'Years of Leadership' },
    { number: '15+', label: 'Projects Completed' },
    { number: '80+', label: 'Event Participants Led' }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-box" key={index}>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
