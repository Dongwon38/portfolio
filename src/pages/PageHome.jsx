import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Worklist from "../components/Worklist";
import AboutDesktop from "../components/AboutDesktop";
import AboutMobile from "../components/AboutMobile";
import ContactDesktop from "../components/ContactDesktop";
import ContactMobile from "../components/ContactMobile";
import RotatingText from "../components/RotatingText";

function PageHome() {
  // Scroll Effect
  const rightScrollRef = useRef(null);

  const handleWheel = (e) => {
    if (rightScrollRef.current) {
      rightScrollRef.current.scrollTop += e.deltaY;
    }
  };

  //  Navigation Effect
  const location = useLocation();

  // Detect if 'Contact' section should be highlighted
  useEffect(() => {
    if (location.state) {
      const target = location.state.highlight;
      const contactSection = document.querySelector(`#${target}-highlight`);
      if (contactSection) {
        contactSection.classList.add("highlighted");
        setTimeout(() => {
          contactSection.classList.remove("highlighted");
        }, 600);
      }
    }
  }, [location.state]);

  return (
    <main className="main-home" id="main-home">
      <div className="left-screen" onWheel={handleWheel}>
        {/* hero-section */}
        <section className="hero-section" id="hero-section">
          <div className="hero-content">
            <h1>Dong-won Kang</h1>
            <h2>Front-end Web Developer</h2>
            <p>Creating intuitive, engaging user experiences</p>

            <RotatingText />
          </div>
          <Link to="/#works-section" className="nav-btn">
            <button className="btn-pushable">
              <span className="btn-shadow"></span>
              <span className="btn-edge"></span>
              <span className="btn-front text">See Works</span>
            </button>
          </Link>
        </section>
      </div>
      <div className="right-screen" ref={rightScrollRef}>
        <Worklist />
      </div>
      {/* about-section for desktop */}
      <AboutDesktop />
      {/* about-section for mobile */}
      <AboutMobile />
      {/* contact-section for mobile */}
      <ContactMobile />
    </main>
  );
}

export default PageHome;
