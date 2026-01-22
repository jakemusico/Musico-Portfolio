import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <div className="nav-logo">JAKE MUSICO</div>
          </div>
          <div className="nav-right">
            <ul className="nav-menu">
              <li><a href="#services">Services</a></li>
              <li><a href="#works">Works</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
            <div className="nav-toggle">
              <button 
                className="toggle-btn" 
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="header">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Jake Musico</h1>
            <p className="hero-subtitle">Product Designer and Developer based in Philippines.</p>
            <p className="hero-description">
              I design and develop beautiful digital experiences that make a difference in the world.
            </p>
            
            {/* Social Media Links */}
            <div className="social-links">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>

            <button className="cta-button">My story →</button>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              <img src="/jakemusico.jpg" alt="Jake Musico" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-container">
            <div className="stat-card">
              <h3 className="stat-number">14</h3>
              <p className="stat-label">Years of Experience</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">187</h3>
              <p className="stat-label">Completed Projects</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-label-full">Any Type Of Query & Discussion.</h3>
            </div>
          </div>
        </div>


      </header>

      {/* Main Content */}
      <main className="main-content">
        
        {/* Services Section */}
        <section className="section services-section" id="services">
          <div className="section-container">
            <h2>Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🎨</div>
                <h3>UI/UX Design</h3>
                <p>Creating intuitive and beautiful user interfaces that enhance user experience and drive engagement.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">💻</div>
                <h3>Web Development</h3>
                <p>Building responsive, fast, and scalable web applications using modern technologies and best practices.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📱</div>
                <h3>Mobile Design</h3>
                <p>Designing beautiful mobile experiences that work seamlessly across all devices and screen sizes.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">⚡</div>
                <h3>Performance Optimization</h3>
                <p>Optimizing websites and applications for speed, reliability, and excellent performance metrics.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🛠️</div>
                <h3>Technical Consultation</h3>
                <p>Providing expert guidance on technology stack selection and architectural decisions.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🎯</div>
                <h3>Brand Strategy</h3>
                <p>Developing comprehensive digital strategies that align with your business goals and values.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Works Section */}
        <section className="section works-section" id="works">
          <div className="section-container">
            <h2>Works</h2>
            <div className="works-grid">
              <div className="work-card">
                <div className="work-content">
                  <h3>E-Commerce Platform</h3>
                  <p>A full-stack e-commerce application built with React and Node.js. Features include product listings, shopping cart, and secure checkout process.</p>
                  <div className="work-tech">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                  </div>
                  <a href="#" className="work-link">View Project →</a>
                </div>
              </div>
              <div className="work-card">
                <div className="work-content">
                  <h3>Task Management App</h3>
                  <p>A responsive task management application with features like task creation, editing, deletion, and filtering. Built with React and local storage.</p>
                  <div className="work-tech">
                    <span>React</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                  </div>
                  <a href="#" className="work-link">View Project →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="section blog-section" id="blog">
          <div className="section-container">
            <h2>Blog</h2>
            <div className="blog-grid">
              <article className="blog-card">
                <div className="blog-date">Jan 20, 2026</div>
                <h3>10 Tips for Modern Web Design</h3>
                <p>Discover the latest trends and best practices in modern web design that will help you create stunning digital experiences.</p>
                <div className="blog-tags">
                  <span className="blog-tag">Design</span>
                  <span className="blog-tag">Web</span>
                </div>
                <a href="#" className="blog-read-more">Read More →</a>
              </article>
              <article className="blog-card">
                <div className="blog-date">Jan 18, 2026</div>
                <h3>React Hooks Deep Dive</h3>
                <p>A comprehensive guide to understanding and mastering React Hooks to write cleaner and more efficient code.</p>
                <div className="blog-tags">
                  <span className="blog-tag">React</span>
                  <span className="blog-tag">JavaScript</span>
                </div>
                <a href="#" className="blog-read-more">Read More →</a>
              </article>
              <article className="blog-card">
                <div className="blog-date">Jan 15, 2026</div>
                <h3>The Art of UX Writing</h3>
                <p>Learn how strategic writing can significantly improve user experience and create meaningful interactions with your audience.</p>
                <div className="blog-tags">
                  <span className="blog-tag">UX</span>
                  <span className="blog-tag">Writing</span>
                </div>
                <a href="#" className="blog-read-more">Read More →</a>
              </article>
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
                <a href="mailto:jake.musico@urios.edu.ph" className="contact-email">
                  jake.musico@urios.edu.ph
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
