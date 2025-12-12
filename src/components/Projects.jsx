import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (hoveredProject !== null) {
      const project = projects[hoveredProject];
      if (project.images && project.images.length > 1) {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % project.images.length
          );
        }, 1500); // Change image every 1.5 seconds

        return () => clearInterval(interval);
      }
    } else {
      setCurrentImageIndex(0);
    }
  }, [hoveredProject]);

  const projects = [
    {
      status: 'ONGOING • THESIS',
      title: 'O-VR Hear: Hearsona',
      role: 'Researcher • Frontend Developer',
      description: 'Co-designed and developed the frontend interface for Hearsona, an AI-powered audio personalization system. Built an interactive web application that enables users to generate and customize personalized spatial audio cues through prompt engineering for AR localization tasks.',
      tags: ['React', 'Tailwind', 'Generative AI', 'AR/VR', 'UI/UX'],
      link: 'https://github.com/RamBrodett/OVRHR-Hearsona-GUI.git',
      linkType: 'github',
      image: '/images/hearsona.png',
      images: ['/images/hearsona.png', '/images/hearsona.png', '/images/hearsona.png']
    },
    {
      title: 'Infomatik',
      role: 'Frontend Developer • Project Manager',
      description: 'Developed and optimized the responsive React frontend for a City Councilor\'s web platform in Tabaco City, delivering accessible, mobile-first interfaces and supporting 100+ active users through a scalable component architecture.',
      tags: ['React', 'JavaScript', 'Responsive Design', 'UI/UX'],
      link: 'https://infomatik.onrender.com',
      linkType: 'external',
      image: '/images/infomatik-home.png',
      images: ['/images/infomatik-home.png', '/images/infomatik-accomplishments.png', '/images/infomatik-konsi.png']
    },
    {
      title: 'Distributed Database Transactions Manager',
      role: 'Frontend Developer • Systems Designer',
      description: 'Engineered the frontend interface for a distributed database system featuring multi-node transaction management, concurrency control, and automated failure recovery. Implemented real-time visualization of node states, replication logs, and isolation-level behavior across a three-node architecture.',
      tags: ['React', 'Node.js', 'Express', 'Distributed Systems'],
      link: 'https://github.com/XENNNOOOO/STADVDB-MC02.git',
      linkType: 'github',
      image: '/images/sales-orders.png',
      images: ['/images/sales-orders.png', '/images/sales-recovery.png']
    },
    {
      title: 'LexSon Inventory System',
      role: 'UI/UX Designer • Scrum Master • QA',
      description: 'Led UI/UX design and prototyping for an inventory management system serving a plasticware distribution business. Created high-fidelity wireframes and interactive prototypes for data tables, forms, and dashboard interfaces, ensuring usability through comprehensive testing and user feedback sessions.',
      tags: ['Figma', 'UI/UX Design', 'Prototyping', 'User Testing', 'Agile'],
      link: 'https://github.com/LexsonAdmin/LIBSP.git',
      linkType: 'github',
      image: '/images/lexson-dashboard.png',
      images: ['/images/lexson-dashboard.png', '/images/lexson-orders.png', '/images/lexson-inventory.png']
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2 className="section-title">Projects<span className="accent">.</span></h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const isHovered = hoveredProject === index;
          const hasMultipleImages = project.images && project.images.length > 1;

          return (
            <div
              className="project-card-wrapper"
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                <div className="project-card">
                  <div className="project-image">
                    {hasMultipleImages && isHovered ? (
                      project.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${project.title} - ${imgIndex + 1}`}
                          className={`project-image-slide ${imgIndex === currentImageIndex ? 'active' : ''}`}
                        />
                      ))
                    ) : project.image ? (
                      <img src={project.image} alt={project.title} />
                    ) : (
                      '[Project Image]'
                    )}
                <div className="project-image-overlay">
                  {project.linkType === 'github' ? (
                    <svg className="project-overlay-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
                    </svg>
                  ) : (
                    <svg className="project-overlay-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  )}
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.status && <span className="project-status">{project.status}</span>}
                  <div className="project-role">{project.role}</div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
