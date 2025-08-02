import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React.js', level: 90, color: '#61dafb' },
        { name: 'JavaScript', level: 85, color: '#f7df1e' },
        { name: 'HTML5', level: 95, color: '#e34f26' },
        { name: 'CSS3', level: 88, color: '#1572b6' },
        { name: 'TypeScript', level: 75, color: '#3178c6' },
        { name: 'Next.js', level: 70, color: '#000000' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 75, color: '#339933' },
        { name: 'Express.js', level: 70, color: '#000000' },
        { name: 'MongoDB', level: 65, color: '#47a248' },
        { name: 'PostgreSQL', level: 60, color: '#336791' },
        { name: 'Firebase', level: 70, color: '#ffca28' },
        { name: 'REST APIs', level: 80, color: '#ff6b6b' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 85, color: '#f05032' },
        { name: 'VS Code', level: 90, color: '#007acc' },
        { name: 'Figma', level: 75, color: '#f24e1e' },
        { name: 'Webpack', level: 65, color: '#8dd6f9' },
        { name: 'Docker', level: 60, color: '#2496ed' },
        { name: 'AWS', level: 55, color: '#ff9900' }
      ]
    }
  };

  const softSkills = [
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'Team Collaboration', icon: '🤝' },
    { name: 'Communication', icon: '💬' },
    { name: 'Time Management', icon: '⏰' },
    { name: 'Creativity', icon: '🎭' },
    { name: 'Adaptability', icon: '🔄' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-content">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            
            <div className="skill-categories">
              {Object.keys(skillCategories).map((category) => (
                <button
                  key={category}
                  className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  <span className="category-icon">{skillCategories[category].icon}</span>
                  <span>{skillCategories[category].title}</span>
                </button>
              ))}
            </div>

            <div className="skills-list">
              <h4>{skillCategories[activeCategory].title}</h4>
              <div className="skill-items">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="soft-skills">
            <h3>Soft Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-item">
                  <div className="soft-skill-icon">{skill.icon}</div>
                  <span className="soft-skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <div className="summary-icon">🚀</div>
            <h4>Always Learning</h4>
            <p>Continuously expanding my skill set with the latest technologies and best practices</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🎯</div>
            <h4>Problem Solver</h4>
            <p>Approaching challenges with analytical thinking and creative solutions</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">💡</div>
            <h4>Innovation Driven</h4>
            <p>Passionate about creating innovative solutions that make a difference</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 