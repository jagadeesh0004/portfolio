import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Particles from "./Particles";

const App = () => {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#000",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          height: "100%",
        }}
      >
        <Navbar />

        <div id="home"><Content /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </div >

      <Particles
  particleColors={["#ffffff", "#9BE5FF"]}
  particleCount={300}
  particleSpread={10}
  speed={0.08}
  particleBaseSize={50}
  alphaParticles={true}
  disableRotation={true}
/>

    </div>
  );
};

export default App;
