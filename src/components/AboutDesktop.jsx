import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import AboutContent from "./AboutContent";
import { GlobalContext } from "../context/GlobalState";

function AboutDesktop() {
  const { aboutToggled, toggleAbout } = useContext(GlobalContext);

  function handleOverlayToggle() {
    toggleAbout();
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
        className={aboutToggled ? "about-overlay activated" : "about-overlay"}
      >
        <button className="close-btn" onClick={handleOverlayToggle}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <AboutContent />
      </div>
    </section>
  );
}

export default AboutDesktop;
