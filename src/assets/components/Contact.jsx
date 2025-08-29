import React from "react";
import "./Contact.css";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d2f90a06-4b73-4fe2-a23d-ebe359d6d2bf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully! ✅");
      event.target.reset();
    } else {
      alert("Oops! Something went wrong. ❌");
    }
  };
  return (
    <div className="contact">
      <div className="left">
        <span className="text">
          <p className="heading">Get in Touch</p>
          <p className="subheading">I'd like to hear from you!</p>
          <p className="description">
            If you have any inquiries or just want to say hi, feel free to reach
            out!
          </p>

          <span className="social-links">
            <a
              href="https://www.linkedin.com/in/jagadeeswar-ganisetti-000173375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="socialimage" src={linkedin} alt="LinkedIn" />
            </a>

            <a
              href="https://github.com/jagadeesh0004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="socialimage" src={github} alt="GitHub" />
            </a>

            <a href="mailto:ganisettijagadeeswar@gmail.com">
              <img className="socialimage" src={email} alt="Email" />
            </a>

            <a
              href="https://x.com/Jagadeeswarga?t=dDNY24EYCDSn9PH9lqBs_w&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="socialimage" src={twitter} alt="Twitter" />
            </a>

            <a
              href="https://www.instagram.com/jagadeesh_0_4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="socialimage" src={instagram} alt="Instagram" />
            </a>
          </span>
        </span>
      </div>

      <div className="right">
        <form onSubmit={onSubmit}>
          <div className="form-group name-fields">
            <div>
              <label>First Name</label>
              <input type="text" name="firstName" required />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" name="lastName" />
            </div>
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
