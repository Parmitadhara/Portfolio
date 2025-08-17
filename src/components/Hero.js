import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Frontend Developer',
    'UI/UX Designer',
    'React Developer',
    'Creative Coder'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 150;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const typeText = () => {
      const currentTextToType = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(currentTextToType.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentTextToType.substring(0, currentText.length + 1));
      }

      let timeoutId;
      if (!isDeleting && currentText === currentTextToType) {
        timeoutId = setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      } else {
        timeoutId = setTimeout(typeText, isDeleting ? deleteSpeed : typeSpeed);
      }

      return () => clearTimeout(timeoutId);
    };

    const timeoutId = setTimeout(typeText, typeSpeed);
    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, currentIndex, texts]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Parmita</span>
            </h1>
            <h2 className="hero-subtitle">
              I'm a <span className="typing-text">{currentText}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              Passionate about creating beautiful, functional, and user-friendly web experiences. 
              I love turning ideas into reality through code and design.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-image">
                <div className="image-placeholder">
                  <span>👩‍💻</span>
                </div>
              </div>
              <div className="floating-elements">
                <div className="floating-element element-1">⚛️</div>
                <div className="floating-element element-2">🎨</div>
                <div className="floating-element element-3">💻</div>
                <div className="floating-element element-4">🚀</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll Down</span>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero; 