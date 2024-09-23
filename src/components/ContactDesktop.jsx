import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactDesktop() {
  const [showAlert, setShowAlert] = useState(false);
  function copyEmail() {
    const myEmail = "dongwon.dwk@gmail.com";
    navigator.clipboard.writeText(myEmail);
    if (showAlert != true) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1500);
    }
  }

  return (
    <section className="contact-section desktop" id="contact-section-desktop">
      <h2>
        Contact<span className="center-line"></span>
      </h2>
      <p>
        I always excited to hear people's stories - anything related to coding,
        design, business, or new opportunities!
      </p>
      <div className="email-btn-container">
        {showAlert && <span className="alert-box">Copied!</span>}
        <button onClick={copyEmail}>Copy Email</button>
      </div>

      <div className="contact-box">
        <a href="mailto:dongwon.dwk@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://github.com/Dongwon38">
          <FontAwesomeIcon icon={faSquareGithub} />
        </a>
        <a href="https://www.linkedin.com/in/dong-won-kang/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </section>
  );
}

export default ContactDesktop;
