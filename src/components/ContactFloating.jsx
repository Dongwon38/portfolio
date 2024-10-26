import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactFloating() {
  // copy email
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
    <section className="contact-floating" id="contact-highlight">
      <div className="contact-box">
        <a
          href="https://www.linkedin.com/in/dong-won-kang/"
          title="View Linkedin Profile"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/Dongwon38" title="View Github Repo">
          <FontAwesomeIcon icon={faSquareGithub} />
        </a>
        <a
          href="mailto:dongwon.dwk@gmail.com"
          title="Email to dongwon.dwk@gmail.com"
        >
          <FontAwesomeIcon icon={faSquareEnvelope} />
        </a>
      </div>
      <div className="email-btn-container desktop">
        {showAlert && <span className="alert-box desktop">Copied!</span>}
        <button onClick={copyEmail} title="dongwon.dwk@gmail.com">
          Copy
          <br /> Email
        </button>
      </div>
    </section>
  );
}

export default ContactFloating;
