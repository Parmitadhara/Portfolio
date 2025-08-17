import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '15+', label: 'Happy Clients' },
    { number: '5+', label: 'Technologies' }
  ];

  const interests = [
    'Web Development',
    'UI/UX Design',
    'Mobile Apps',
    'Creative Coding',
    'Problem Solving',
    'Learning New Tech'
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Hello! I'm Parmita</h3>
              <p>
                I'm a passionate and creative frontend developer with a strong foundation in modern web technologies. 
                I love creating beautiful, functional, and user-friendly web experiences that make a difference.
              </p>
              <p>
                With a background in computer science and a keen eye for design, I specialize in building responsive 
                web applications using React.js and other cutting-edge technologies. I believe in writing clean, 
                maintainable code and creating intuitive user interfaces.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, 
                or sharing my knowledge with the developer community. I'm always eager to learn new technologies 
                and take on challenging projects.
              </p>
            </div>

            <div className="about-stats">
              <h4>My Journey in Numbers</h4>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-interests">
              <h4>Areas of Interest</h4>
              <div className="interests-grid">
                {interests.map((interest, index) => (
                  <div key={index} className="interest-item">
                    <span className="interest-icon">✨</span>
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <div className="main-image">
                <div className="image-placeholder">
                  <span>👩‍💻</span>
                </div>
              </div>
              <div className="image-decoration">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
                <div className="decoration-circle circle-3"></div>
              </div>
            </div>
            
            <div className="experience-card">
              <div className="experience-icon">🎯</div>
              <div className="experience-content">
                <h5>Always Learning</h5>
                <p>Constantly exploring new technologies and best practices</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-quote">
          <blockquote>
            "The best code is not just functional, but also beautiful and maintainable. 
            I strive to create solutions that are both elegant and efficient."
          </blockquote>
          <cite>- Parmita</cite>
        </div>
      </div>
    </section>
  );
};

export default About; 