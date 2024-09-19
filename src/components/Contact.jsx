import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  function copyEmail() {
    const myEmail = "dongwon.dwk@gmail.com";

    navigator.clipboard.writeText(myEmail);

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  }

  return (
    <section className="contact-section" id="contact-section">
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        possimus sint id unde illo. Laudantium repudiandae, necessitatibus a
        maiores ad eaque expedita dicta aliquid dolores assumenda in possimus
        numquam similique!
      </p>
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
      <div className="email-btn-container">
        <button onClick={copyEmail}>Copy my Email!</button>
        {showAlert && <span className="alert-box">Email Copied!</span>}
      </div>
    </section>
  );
}

export default Contact;
