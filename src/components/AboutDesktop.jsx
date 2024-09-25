import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import AboutContent from "./AboutContent";

function AboutDesktop() {
  // Overlay state
  const [isActiveOverlay, setIsActiveOverlay] = useState(false);

  function handleOverlayToggle() {
    setIsActiveOverlay(!isActiveOverlay);
  }

  return (
    <section className="about-section desktop">
      <button
        className="about-toggle-button"
        onClick={handleOverlayToggle}
        id="about-highlight"
      >
        More about me
      </button>

      <div
        className={
          isActiveOverlay ? "about-overlay activated" : "about-overlay"
        }
      >
        <button className="close-btn" onClick={handleOverlayToggle}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <AboutContent isActiveOverlay={isActiveOverlay} />
      </div>
    </section>
  );
}

export default AboutDesktop;
