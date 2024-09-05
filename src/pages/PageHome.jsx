import React from "react";
import sample from "../assets/sample.jpg";

function PageHome() {
  return (
    <main className="main-home">
      <section className="profile">
        <h1>Dong-won Kang</h1>
        <h2>Front-end Web Developer</h2>
        <p>I build end user-focused web experiences with precision and care.</p>
      </section>
      <section className="works">
        <div className="works-inner-container">
          <h2>Works</h2>
          <ul className="work-list">
            <a href="/work/1">
              <section className="work-item">
                <img className="thumbnail" src={sample} alt="sample-bg" />
                <div className="overlay">
                  <h3 className="title">Project 1 Title</h3>
                  <p className="excerpt">
                    put an one line explanation here within 50 letters
                  </p>
                  <div className="skill-box">
                    <div className="skill">React</div>
                    <div className="skill">Sass</div>
                    <div className="skill">Javascript</div>
                  </div>
                </div>
              </section>
            </a>
            <a href="/work/2">
              <section className="work-item">
                <img className="thumbnail" src={sample} alt="sample-bg" />
                <div className="overlay">
                  <h3 className="title">Project 1 Title</h3>
                  <p className="overview">
                    put an one line explanation here within 50 letters
                  </p>
                  <div className="skill-box">
                    <div className="skill">React</div>
                    <div className="skill">Sass</div>
                    <div className="skill">Javascript</div>
                  </div>
                </div>
              </section>
            </a>
            <a href="/work/3">
              <section className="work-item">
                <img className="thumbnail" src={sample} alt="sample-bg" />
                <div className="overlay">
                  <h3 className="title">Project 1 Title</h3>
                  <p className="overview">
                    put an one line explanation here within 50 letters
                  </p>
                  <div className="skill-box">
                    <div className="skill">React</div>
                    <div className="skill">Sass</div>
                    <div className="skill">Javascript</div>
                  </div>
                </div>
              </section>
            </a>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default PageHome;

// About Page
// As a Front-end Web Developer, I am passionate about creating user-centric designs that blend aesthetics with pixel-perfect precision. My goal is to craft intuitive and visually appealing web experiences that resonate with users.
