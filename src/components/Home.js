import React from 'react';
import Header from './Header';
import profilePic from '../assets/profile.jpg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <Header />
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-text">
              <p className="greeting">Hi, I am</p>
              <h1 className="hero-name">Mallika M</h1>
              <p className="hero-title">Full Stack Developer</p>
              
              <div className="social-icons">
                <a href="mailto:mallika8105@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                  <FaEnvelope size={24} />
                </a>
                <a href="https://github.com/mallika8105" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/mallika-m-95538225b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="hero-right">
            <img src={profilePic} alt="Mallika M" className="hero-profile-pic" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
