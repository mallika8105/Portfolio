import React from 'react';
import Header from '../components/Header';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Nexbuy - Full-Stack E-commerce Platform',
      titleStyle: 'italic',
      description: 'A modern, full-featured e-commerce web application that provides a seamless shopping experience for customers and comprehensive management tools for administrators. Features include product browsing by categories, advanced search, shopping cart, wishlist, order tracking, user profiles, and an admin dashboard with analytics.',
      features: [
        'Browse products by categories and subcategories',
        'Shopping cart with real-time updates',
        'Wishlist functionality',
        'Order tracking and history',
        'Admin dashboard with product and order management',
        'Analytics and reporting with charts',
        'Fully responsive design'
      ],
      techStack: {
        frontend: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'React Router DOM', 'Zustand', 'Recharts'],
        backend: ['Supabase', 'PostgreSQL', 'Authentication', 'Row Level Security']
      },
      github: 'https://github.com/mallika8105/ECommerce.git',
      demo: null
    },
    {
      id: 2,
      title: 'Task Management System',
      titleStyle: 'italic',
      description: 'A comprehensive task management system with role-based access control featuring secure authentication, real-time updates, and automated notifications. Supports Admin and Employee roles with distinct permissions for task management and collaboration.',
      features: [
        'Role-based access control (Admin & Employee)',
        'Real-time task updates',
        'Automated email notifications',
        'Dashboard analytics with task statistics',
        'Profile avatar uploads',
        'Dark/light theme support',
        'Task comments and collaboration',
        'Fully responsive mobile-friendly design'
      ],
      techStack: {
        frontend: ['Next.js 14', 'React 19', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Radix UI', 'React Hook Form', 'Zod'],
        backend: ['Supabase', 'PostgreSQL', 'Supabase Auth', 'Supabase Storage', 'Next.js API Routes', 'Brevo API']
      },
      github: 'https://github.com/mallika8105/Task-Management.git',
      demo: null
    }
  ];

  return (
    <>
      <Header />
      <div className="page-container">
        <section id="projects" className="page-section">
          <h2>My Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <h3 style={{ fontStyle: project.titleStyle === 'italic' ? 'italic' : 'normal' }}>
                  {project.id === 1 ? (
                    <>
                      <span style={{ color: '#0066cc' }}>Nexbuy</span>
                      <span style={{ color: '#000000' }}> - Full-Stack E-commerce Platform</span>
                    </>
                  ) : (
                    <span style={{ color: '#0066cc' }}>{project.title}</span>
                  )}
                </h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.slice(0, 5).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="tech-stack-section">
                  <h4>Tech Stack:</h4>
                  <div className="tech-category">
                    <strong>Frontend:</strong>
                    <div className="tech-tags">
                      {project.techStack.frontend.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="tech-category">
                    <strong>Backend:</strong>
                    <div className="tech-tags">
                      {project.techStack.backend.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub size={20} />
                      <span>View Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectsPage;
