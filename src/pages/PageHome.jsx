import React from "react";
import sample from "../assets/sample.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import WorkItem from "../components/WorkItem";

function PageHome() {
  return (
    <main className="main-home">
      <section className="profile">
        <h1>Dong-won Kang</h1>
        <h2>Front-end Web Developer</h2>
        <p>I build end user-focused web experiences with precision and care.</p>
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
      </section>
      <section className="works">
        <div className="works-inner-container">
          <h2>Works</h2>
          <ul className="work-list">
            <WorkItem />
            <WorkItem />
            <WorkItem />
          </ul>
        </div>
      </section>
    </main>
  );
}

export default PageHome;

// About Page
// As a Front-end Web Developer, I am passionate about creating user-centric designs that blend aesthetics with pixel-perfect precision. My goal is to craft intuitive and visually appealing web experiences that resonate with users.
