import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home"><Content /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default App;
