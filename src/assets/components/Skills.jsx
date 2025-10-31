import React from "react";
import "./Skills.css";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaPython,
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiExpress, SiC, SiCplusplus, SiPostman, SiTailwindcss, SiIntellijidea,
} from "react-icons/si";
import { VscNoNewline, VscVscode } from "react-icons/vsc";
const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills-heading">My Skills</h1>
      <div className="skills-grid">
        {/* Frontend */}
        <div className="skill-box">
          <h2>Frontend</h2>
          <div className="icons-grid">
            <div className="icon-container"><FaHtml5 className="icon" size={30} color="#E34F26" /><p>HTML</p></div>
            <div className="icon-container"><FaCss3Alt className="icon" size={30} color="#1572B6" /><p>CSS</p></div>
            <div className="icon-container"><FaJs className="icon" size={30} color="#F7DF1E" /><p>JavaScript</p></div>
            <div className="icon-container"><FaReact className="icon" size={30} color="#61DAFB" /><p>React</p></div>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-box">
          <h2>Backend</h2>
          <div className="icons-grid">
            <div className="icon-container"><FaNodeJs className="icon" size={30} color="#339933" /><p>Node.js</p></div>
            <div className="icon-container"><SiExpress className="icon" size={30} color="#ffffffff" /><p>Express</p></div>
          </div>
        </div>

        {/* Databases */}
        <div className="skill-box">
          <h2>Databases</h2>
          <div className="icons-grid">
            <div className="icon-container"><SiMongodb className="icon" size={30} color="#47A248" /><p>MongoDB</p></div>
            <div className="icon-container"><SiMysql className="icon" size={30} color="#4479A1" /><p>MySQL</p></div>
          </div>
        </div>

        {/* Frameworks */}
        <div className="skill-box">
          <h2>Frameworks</h2>
          <div className="icons-grid">
            <div className="icon-container"><SiTailwindcss className="icon" size={30} color="#38B2AC" /><p>Tailwind</p></div>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-box">
          <h2>Tools</h2>
          <div className="icons-grid">
            <div className="icon-container"><FaGitAlt className="icon" size={30} color="#F05032" /><p>Git</p></div>
            <div className="icon-container"><FaGithub className="icon" size={30} color="#ffffffff" /><p>GitHub</p></div>
            <div className="icon-container"><SiPostman className="icon" size={30} color="#FF6C37" /><p>Postman</p></div>
            <div className="icon-container"><VscVscode className="icon" size={30} color="#0078d7" /><p>VS Code</p></div>
          </div>
        </div>

        {/* Languages */}
        <div className="skill-box">
          <h2>Languages</h2>
          <div className="icons-grid">
            <div className="icon-container"><SiC className="icon" size={30} color="#A8B9CC" /><p>C</p></div>
            <div className="icon-container"><SiCplusplus className="icon" size={30} color="#00599C" /><p>C++</p></div>
            <div className="icon-container"><FaJava className="icon" size={30} color="#007396" /><p>Java</p></div>
            <div className="icon-container"><FaPython className="icon" size={30} color="#3776AB" /><p>Python</p></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
