import React from "react";
import sample from "../assets/sample.jpg";
import Worklist from "../components/Worklist";
import About from "../components/About";
import Contact from "../components/Contact";

function PageHome() {
  return (
    <main className="main-home" id="main-home">
      <section className="hero-section" id="hero-section">
        <h1>Dong-won Kang</h1>
        <h2>Front-end Web Developer</h2>
        <p>I build end user-focused web experiences with precision and care.</p>
        <button>See Works</button>
      </section>
      <Worklist />
      <About />
      <Contact />
    </main>
  );
}

export default PageHome;

// About Page
// As a Front-end Web Developer, I am passionate about creating user-centric designs that blend aesthetics with pixel-perfect precision. My goal is to craft intuitive and visually appealing web experiences that resonate with users.
