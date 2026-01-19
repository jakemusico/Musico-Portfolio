import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="title">Welcome to My Portfolio</h1>
          <div className="dark-mode-toggle">
            <button 
              className="toggle-btn" 
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </div>
        </div>
        <p className="intro">Hi, I'm Jake Musico. I'm a passionate web developer.</p>
        
        {/* Social Media Links */}
        <div className="social-links">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub size={32} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        
        {/* Skills Section */}
        <section className="section skills-section">
          <div className="section-container">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <h3>React.js</h3>
                <p>Building interactive user interfaces with modern React patterns</p>
              </div>
              <div className="skill-card">
                <h3>JavaScript</h3>
                <p>Strong proficiency in ES6+ and async programming</p>
              </div>
              <div className="skill-card">
                <h3>HTML</h3>
                <p>Semantic HTML5 markup and accessibility best practices</p>
              </div>
              <div className="skill-card">
                <h3>CSS</h3>
                <p>Responsive design with modern CSS and animations</p>
              </div>
              <div className="skill-card">
                <h3>Node.js</h3>
                <p>Backend development with Express and RESTful APIs</p>
              </div>
              <div className="skill-card">
                <h3>Web Design</h3>
                <p>User-centered design and UI/UX principles</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section projects-section">
          <div className="section-container">
            <h2>Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-header">
                  <h3>Project 1: E-Commerce Platform</h3>
                </div>
                <p className="project-description">
                  A full-stack e-commerce application built with React and Node.js. Features include product listings, shopping cart, and secure checkout process.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
                <a href="#" className="project-link">View Project →</a>
              </div>
              <div className="project-card">
                <div className="project-header">
                  <h3>Project 2: Task Management App</h3>
                </div>
                <p className="project-description">
                  A responsive task management application with features like task creation, editing, deletion, and filtering. Built with React and local storage.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                </div>
                <a href="#" className="project-link">View Project →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section contact-section">
          <div className="section-container">
            <h2>Get In Touch</h2>
            <div className="contact-content">
              <p>I'd love to hear from you! Feel free to reach out for collaboration or just a friendly chat.</p>
              <div className="contact-box">
                <p className="contact-label">Email:</p>
                <a href="mailto:john.doe@example.com" className="contact-email">
                  john.doe@example.com
                </a>
              </div>
              <div className="contact-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
