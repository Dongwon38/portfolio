import React from "react";

function PageHome() {
  return (
    <div className="site-wrapper">
      <header className="header">
        <div className="logo">MySiteLogo</div>
      </header>

      <main className="main-content">
        <section className="profile">
          <h1>Dong-won Kang</h1>
          <h2>Front-end Web Developer</h2>
          <p>
            Crafting end user-focused web experiences with precision and care.
          </p>
        </section>
        <section className="works">
          <h2>Works</h2>
          <ul className="work-list">
            <li className="work-item">Project 1</li>
            <li className="work-item">Project 2</li>
            <li className="work-item">Project 3</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 My Portfolio</p>
      </footer>

      <div className="mobile-nav">
        <button className="nav-btn">Home</button>
        <button className="nav-btn">About</button>
        <button className="nav-btn">Contact</button>
      </div>
    </div>
  );
}

export default PageHome;

// About Page
// As a Front-end Web Developer, I am passionate about creating user-centric designs that blend aesthetics with pixel-perfect precision. My goal is to craft intuitive and visually appealing web experiences that resonate with users.
