import React from 'react';
import './Content.css';

import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import email from '../images/email.png';
import twitter from '../images/twitter.png';



const Content = () => {
  return (
    <div className="content">
      <h1>Jagadeeswar</h1>
      <div className="role">
        <h3>Web Developer</h3>
        <h3 className='divider'>&emsp;|&emsp;</h3>
        <h3>Junior Backend Dev</h3>
      </div>
      

      <hr className="line" />

      <p>"Passionate about building seamless web applications from front to back."</p>
      <p>I enjoy crafting intuitive UIs and powerful, efficient backends.</p>

      <span className="social">
        <a
          href="https://www.linkedin.com/in/jagadeeswar-ganisetti-000173375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="socialimg" src={linkedin} alt="LinkedIn" />
        </a>

        <a href="https://github.com/jagadeesh0004" target="_blank" rel="noopener noreferrer">
          <img className="socialimg" src={github} alt="GitHub" />
        </a>

        <a href="mailto:ganisettijagadeeswar@gmail.com">
          <img className="socialimg" src={email} alt="Email" />
        </a>

        <a
          href="https://x.com/Jagadeeswarga?t=dDNY24EYCDSn9PH9lqBs_w&s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="socialimg" src={twitter} alt="Twitter" />
        </a>
      </span>
    </div>
  );
};

export default Content;
