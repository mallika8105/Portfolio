import React from 'react';
import Header from '../components/Header';
import { FaDownload } from 'react-icons/fa';

const AboutPage = () => {
  const handleDownloadResume = () => {
    // You can update this URL to your actual resume PDF hosted on cloud storage
    alert('Resume download feature - Please upload your resume PDF and update the URL in AboutPage.js');
  };

  return (
    <>
      <Header />
      <div className="page-container">
        <section id="about" className="page-section">
          <h2>About Me</h2>
          <p>
            I'm Mallika, passionate about creating meaningful digital experiences that empower users and drive business growth through clean, efficient code. My Electronics and Communication Engineering background fuels my dedication to crafting innovative software solutions through effective problem-solving.
          </p>
          
          <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <button 
              onClick={handleDownloadResume}
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                background: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <FaDownload /> Download Resume
            </button>
          </div>
          <div className="about-details">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Don Bosco Institute Of Technology, Bangalore</h4>
              <p><strong>Course:</strong> Bachelor of Engineering in Electronics and Communication Engineering (ECE)</p>
              <p><strong>CGPA:</strong> 8.73</p>
              <p><strong>Passing Year:</strong> June 2025</p>
            </div>
            
            <h3>Interests</h3>
            <p>Full Stack Development, UI/UX Design, Problem Solving, Learning New Technologies</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
