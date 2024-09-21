import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import AboutContent from "./AboutContent";

function AboutDesktop() {
  // Overlay state
  const [isActiveOverlay, setIsActiveOverlay] = useState(false);

  function handleOverlayToggle() {
    setIsActiveOverlay(!isActiveOverlay);
  }

  return (
    <section className="about-section desktop" id="about-section-desktop">
      <button className="about-toggle-button" onClick={handleOverlayToggle}>
        More about me
      </button>

      <div
        className={
          isActiveOverlay ? "about-overlay activated" : "about-overlay"
        }
      >
        <button className="close-btn" onClick={handleOverlayToggle}>
          <FontAwesomeIcon icon={faCircleChevronDown} />
        </button>
        <AboutContent />
      </div>
    </section>
  );
}

export default AboutDesktop;
