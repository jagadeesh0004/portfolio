import React from "react";
import "./Skills.css";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaPython,
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiExpress, SiC, SiCplusplus, SiPostman, SiTailwindcss, SiIntellijidea,
} from "react-icons/si";
import { VscNoNewline, VscVscode } from "react-icons/vsc";
import intellij from "../images/intellij.png";
const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills-heading">My Skills</h1>
      <div className="skills-grid">
        {/* Frontend */}
        <div className="skill-box">
          <h2>Frontend</h2>
          <div className="icons-grid">
            <div className="icon-container"><FaHtml5 className="icon" color="#E34F26" /><p>HTML</p></div>
            <div className="icon-container"><FaCss3Alt className="icon" color="#1572B6" /><p>CSS</p></div>
            <div className="icon-container"><FaJs className="icon" color="#F7DF1E" /><p>JavaScript</p></div>
            <div className="icon-container"><FaReact className="icon" color="#61DAFB" /><p>React</p></div>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-box">
          <h2>Backend</h2>
          <div className="icons-grid">
            <div className="icon-container"><FaNodeJs className="icon" color="#339933" /><p>Node.js</p></div>
            <div className="icon-container"><SiExpress className="icon" color="#000000" /><p>Express</p></div>
          </div>
        </div>

        {/* Databases */}
        <div className="skill-box">
          <h2>Databases</h2>
          <div className="icons-grid">
            <div className="icon-container"><SiMongodb className="icon" color="#47A248" /><p>MongoDB</p></div>
            <div className="icon-container"><SiMysql className="icon" color="#4479A1" /><p>MySQL</p></div>
          </div>
        </div>

        {/* Frameworks */}
        <div className="skill-box">
          <h2>Frameworks</h2>
          <div className="icons-grid">
            <div className="icon-container"><SiTailwindcss className="icon" color="#38B2AC" /><p>Tailwind</p></div>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-box">
          <h2>Tools</h2>
          <div className="icons-grid">
            <div className="icon-container"><FaGitAlt className="icon" color="#F05032" /><p>Git</p></div>
            <div className="icon-container"><FaGithub className="icon" color="#ffffffff" /><p>GitHub</p></div>
            <div className="icon-container"><SiPostman className="icon" color="#FF6C37" /><p>Postman</p></div>
            <div className="icon-container"><VscVscode className="icon" color="#0078d7" /><p>VS Code</p></div>
            <div style={{ display: "none" }} className="icon-container"><img src={intellij} alt="IntelliJ" height="55" className="icon"  /><p>IntelliJ</p></div>
          </div>
        </div>

        {/* Languages */}
        <div className="skill-box">
          <h2>Languages</h2>
          <div className="icons-grid">
            <div className="icon-container"><SiC className="icon" color="#A8B9CC" /><p>C</p></div>
            <div className="icon-container"><SiCplusplus className="icon" color="#00599C" /><p>C++</p></div>
            <div className="icon-container"><FaJava className="icon" color="#007396" /><p>Java</p></div>
            <div className="icon-container"><FaPython className="icon" color="#3776AB" /><p>Python</p></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
