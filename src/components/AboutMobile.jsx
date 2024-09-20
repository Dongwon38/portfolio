import React from "react";
import { Link } from "react-router-dom";
import AboutContent from "./AboutContent";

function AboutMobile() {
  return (
    <section className="about-section mobile" id="about-section-mobile">
      <AboutContent />
      <Link to="/#works-section" className="nav-btn">
        <p className="btn-scroll-to-works">See Works</p>
      </Link>
    </section>
  );
}

export default AboutMobile;
