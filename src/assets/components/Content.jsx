import React from "react";
import "./Content.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Typewriter from "typewriter-effect";

const Content = () => {
  return (
    <div className="content">
      <h1>Jagadeeswar</h1>

      <div className="role">
        <h3>
          <Typewriter
            options={{
              strings: [
                "Web Developer | Junior Backend Dev",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </h3>
      </div>

      <hr className="line" />

      <p>"Passionate about building seamless web applications from front to back."</p>
      <p>I enjoy crafting intuitive UIs and powerful, efficient backends.</p>

      <span className="social">
        <a
          href="https://www.linkedin.com/in/jagadeeswar-ganisetti-000173375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="socialimg" size={30} />
        </a>

        <a
          href="https://github.com/jagadeesh0004"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="socialimg" size={30} />
        </a>

        <a href="mailto:ganisettijagadeeswar@gmail.com" aria-label="Email">
          <MdEmail className="socialimg" size={30} />
        </a>

        <a
          href="https://x.com/Jagadeeswarga?t=dDNY24EYCDSn9PH9lqBs_w&s=09"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter className="socialimg" size={30} />
        </a>
      </span>
    </div>
  );
};

export default Content;
