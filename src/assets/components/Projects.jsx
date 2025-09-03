import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import CC from "../images/CC.png";
import webgames from "../images/webgames.png";
import studysync from "../images/studysync.png";
import leetcode from "../images/leetcode.png"
const projectsData = [
  // {
  //   title: "Attendance Tracker",
  //   description:
  //     "A full-stack web application that helps students manage and track their attendance seamlessly. It provides subject-wise logs, real-time percentage calculations, and alerts for low attendance. Features include secure authentication, analytics dashboards, and intuitive UI. Built using React for the frontend, Node.js and Express for backend APIs, and MongoDB for persistent storage.",
  //   img: "https://via.placeholder.com/400x250",
  //   github: "https://github.com/jagadeesh0004/attendance-tracker",
  //   demo: "https://attendance-tracker-demo.vercel.app/",
  // },
  {
  title: "Currency Converter",
  description:
    "A simple yet effective currency converter that provides real-time exchange rates using an open-source API. Users can quickly convert between multiple currencies with instant updates and accurate results. Designed with a clean and responsive UI for desktop and mobile devices. Built using HTML, CSS, JavaScript, and integrated with an external API for live rates.",
  img: CC,
  github: "https://github.com/jagadeesh0004/WEB-PROJECTS",
  demo: "https://jagadeesh0004.github.io/WEB-PROJECTS/Currency-Converter/",
},
  {
  title: "LeetCode Stats Fetcher",
  description:
    "A web app that fetches and displays real-time LeetCode user statistics, including solved problems by difficulty, acceptance rate, and ranking. Features interactive visualizations with charts, responsive design, and error handling for invalid usernames. Built using React, Tailwind CSS, and Recharts.",
  img: LeetCode,
  demo: "https://jagadeesh0004.github.io/leetcode/", 
  github: "https://github.com/jagadeesh0004/leetcode/",
},


  {
    title: "Web Games (2048 & Tic Tac Toe)",
    description:
      "A collection of classic web-based games including 2048 and Tic Tac Toe. Both games feature responsive layouts, interactive animations, and engaging gameplay logic. Players can enjoy them directly in the browser with smooth real-time interactions. Built entirely using HTML, CSS, and JavaScript for speed and compatibility.",
    img: webgames,
    github: "https://github.com/jagadeesh0004/WEBGAMES",
    demo: "https://jagadeesh0004.github.io/WEBGAMES/",
  },
  {
    title: "Study Sync Frontend Project",
    description:
      "A modern and responsive landing page for Study Sync, an educational platform. The site includes interactive sections, smooth transitions, and clear call-to-actions. Designed with a focus on clean UI/UX, mobile-first performance, and accessibility. Developed using HTML, CSS, and JavaScript to keep it lightweight and scalable.",
    img: studysync,
    demo: "https://jagadeesh0004.github.io/WEB-PROJECTS/StudySync/",
    github: "https://github.com/jagadeesh0004/WEB-PROJECTS",
  },

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-img" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn github"
                >
                  <FaGithub className="icon" /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn live"
                >
                  <FaExternalLinkAlt className="icon" /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
