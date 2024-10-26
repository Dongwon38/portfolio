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
      <div
        className={aboutToggled ? "about-overlay activated" : "about-overlay"}
      >
        <div
          className={
            aboutToggled ? "about-overlay-box activated" : "about-overlay-box"
          }
        >
          <button className="close-btn" onClick={handleOverlayToggle}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <AboutContent />
        </div>
      </div>
    </section>
  );
}

export default AboutDesktop;
