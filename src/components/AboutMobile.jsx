import React from "react";
import { Link } from "react-router-dom";
import AboutContent from "./AboutContent";

function AboutMobile() {
  return (
    <section className="about-section mobile" id="about-section-mobile">
      <AboutContent />
      <Link to="/#works-section" className="nav-btn about">
        <button className="btn-pushable">
          <span className="btn-shadow"></span>
          <span className="btn-edge"></span>
          <span className="btn-front text">See Works</span>
        </button>
      </Link>
    </section>
  );
}

export default AboutMobile;
