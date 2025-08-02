import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '🛒',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      image: '📋',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'web',
      image: '🌤️',
      description: 'A beautiful weather dashboard that displays current weather conditions, forecasts, and interactive maps using weather APIs.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'web',
      image: '🎨',
      description: 'A modern, responsive portfolio website showcasing creative work and professional experience with smooth animations.',
      technologies: ['React', 'CSS3', 'JavaScript', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Recipe Finder App',
      category: 'mobile',
      image: '🍳',
      description: 'A mobile-first recipe discovery app that helps users find recipes based on available ingredients and dietary preferences.',
      technologies: ['React Native', 'Redux', 'Spoonacular API', 'AsyncStorage'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      category: 'web',
      image: '📊',
      description: 'A comprehensive social media analytics dashboard with data visualization, reporting tools, and social media integration.',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="section-line"></div>
        </div>

        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <div className="image-placeholder">
                  <span>{project.image}</span>
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    <span>⭐ Featured</span>
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>🌐</span> Live Demo
                    </a>
                    <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>📁</span> Code
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <div className="cta-content">
            <h3>Interested in working together?</h3>
            <p>Let's discuss your project and bring your ideas to life!</p>
            <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 