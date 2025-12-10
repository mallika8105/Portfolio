import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaGithub, FaReact, FaNodeJs, FaRobot } from 'react-icons/fa';
import { DiMysql } from 'react-icons/di';
import { SiGooglegemini, SiNextdotjs, SiPostgresql, SiTypescript } from 'react-icons/si';
import { VscCode, VscTerminal } from 'react-icons/vsc';
import { CgBot } from 'react-icons/cg';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <FaHtml5 size={50} />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <FaCss3Alt size={50} />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <FaJsSquare size={50} />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <SiTypescript size={50} />
          <p>TypeScript</p>
        </div>
        <div className="skill">
          <FaReact size={50} />
          <p>React 19</p>
        </div>
        <div className="skill">
          <SiNextdotjs size={50} />
          <p>Next.js</p>
        </div>
        <div className="skill">
          <FaNodeJs size={50} />
          <p>Node.js</p>
        </div>
        <div className="skill">
          <DiMysql size={50} />
          <p>MySQL</p>
        </div>
        <div className="skill">
          <SiPostgresql size={50} />
          <p>PostgreSQL</p>
        </div>
        <div className="skill">
          <FaJava size={50} />
          <p>Java</p>
        </div>
      </div>
      <h2>Tools</h2>
      <div className="skills-container">
        <div className="skill">
          <VscCode size={50} />
          <p>VS Code</p>
        </div>
        <div className="skill">
          <FaGithub size={50} />
          <p>Github</p>
        </div>
        <div className="skill">
          <CgBot size={50} />
          <p>ChatGPT</p>
        </div>
        <div className="skill">
          <FaRobot size={50} />
          <p>Claude AI</p>
        </div>
        <div className="skill">
          <SiGooglegemini size={50} />
          <p>Gemini AI</p>
        </div>
        <div className="skill">
          <VscTerminal size={50} />
          <p>Cline</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
