import React from "react";
import "./Navbar.css";
import { useScrollPercentage } from "./Scrollpercentage";
const Navbar = () => {
  const scrollPercent = useScrollPercentage();
  return (
    <nav className="navbar">
      <ul>
        <li
          className={scrollPercent >= 0 && scrollPercent < 20 ? "active" : ""}
        >
          <a href="#home">Home</a>
        </li>
        <li
          className={scrollPercent >= 20 && scrollPercent < 40 ? "active" : ""}
        >
          <a href="#about">About</a>
        </li>
        <li
          className={scrollPercent >= 40 && scrollPercent < 60 ? "active" : ""}
        >
          <a href="#skills">Skills</a>
        </li>
        <li
          className={scrollPercent >= 60 && scrollPercent < 80 ? "active" : ""}
        >
          <a href="#projects">Projects</a>
        </li>
        <li
          className={
            scrollPercent >= 80 && scrollPercent <= 100 ? "active" : ""
          }
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div
        className="scroll-indicator"
        style={{ width: `${scrollPercent}%` }}
      ></div>
    </nav>
  );
};

export default Navbar;
