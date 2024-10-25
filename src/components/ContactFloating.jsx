import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactFloating() {
  return (
    <section className="contact-floating" id="contact-highlight">
      <div className="contact-box">
        <a href="mailto:dongwon.dwk@gmail.com" title="Send an Email">
          <p className="popup-letters">Email</p>
          <FontAwesomeIcon icon={faSquareEnvelope} />
        </a>
        <a href="https://github.com/Dongwon38" title="View Github Repo">
          <p className="popup-letters">GitHub</p>
          <FontAwesomeIcon icon={faSquareGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/dong-won-kang/"
          title="View Linkedin Profile"
        >
          <p className="popup-letters">LinkedIn</p>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </section>
  );
}

export default ContactFloating;
