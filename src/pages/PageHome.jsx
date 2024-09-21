import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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

  // test
  const [gauge, setGauge] = useState(0);
  const [disablehandleGauge, setDisablehandleGauge] = useState(false);
  function handleGauge() {
    if (!disablehandleGauge && gauge < 100) {
      setGauge((prev) => prev + 10);
    }
    if (gauge == 100) {
      setDisablehandleGauge(true);
      activeFullGauge();

      const interval = setInterval(() => {
        setDisablehandleGauge(false);
        document.body.style.backgroundColor = `rgb(0, 0, 0)`;
      }, 10000);
      return () => clearInterval(interval);
    }
  }
  useEffect(() => {
    let red = (gauge / 100) * 40;
    let green = (gauge / 100) * 100;
    let blue = (gauge / 100) * 255;
    console.log(gauge);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    if (gauge > 0) {
      const interval = setInterval(() => {
        setGauge((prev) => Math.max(prev - 20, 0));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [gauge]);

  function activeFullGauge() {
    console.log("yes");
  }

  return (
    <main
      className="main-home"
      id="main-home"
      onClick={handleGauge}
      onTouchStart={handleGauge}
    >
      <div className="left-screen" onWheel={handleWheel}>
        {/* hero-section */}
        <section className="hero-section" id="hero-section">
          <div>
            <h1>Dong-won Kang</h1>
            <h2>Front-end Web Developer</h2>
            <p>
              I build end user-focused web experiences with precision and care.
            </p>
            <RotatingText />
          </div>
          <Link to="/#works-section" className="nav-btn">
            <p className="btn-scroll-to-works">See Works</p>
          </Link>
        </section>
        {/* about-section for desktop */}
        <AboutDesktop />
        {/* contact-section for desktop */}
        <ContactDesktop />
      </div>
      <div className="right-screen" ref={rightScrollRef}>
        <Worklist />
      </div>
      {/* about-section for mobile */}
      <AboutMobile />
      {/* contact-section for mobile */}
      <ContactMobile />
    </main>
  );
}

export default PageHome;

// About Page
// As a Front-end Web Developer, I am passionate about creating user-centric designs that blend aesthetics with pixel-perfect precision. My goal is to craft intuitive and visually appealing web experiences that resonate with users.
