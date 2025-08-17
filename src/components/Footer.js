import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/parmita' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/parmita' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/parmita' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/parmita' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Parmita</h3>
            <p>
              A passionate frontend developer creating beautiful and functional web experiences. 
              Let's build something amazing together!
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
              <li><button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</button></li>
              <li><button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Skills</button></li>
              <li><button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</button></li>
              <li><button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.name}
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <p>&copy; {currentYear} Parmita. All rights reserved.</p>
            <p>Made with ❤️ using React</p>
          </div>
          
          <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 