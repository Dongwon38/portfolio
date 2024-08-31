import React from "react";

function PageHome() {
  return (
    <main>
      <nav class="navbar">
        <div class="logo">Logo</div>
        <ul class="nav-list">
          <li>
            <a href="#" class="nav-item">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-item">
              About
            </a>
          </li>
          <li>
            <a href="#" class="nav-item">
              Projects
            </a>
          </li>
          <li>
            <a href="#" class="nav-item">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <section class="hero">
        <h1 class="hero-title">Welcome to My Portfolio</h1>
        <p class="hero-description">Showcasing my best work and skills.</p>
        <button class="hero-button">See My Work</button>
      </section>

      <section class="typography-section">
        <h2>Typography Section</h2>
        <p class="heading-primary">This is a primary heading</p>
        <p class="heading-secondary">This is a secondary heading</p>
        <p class="body-text">
          This is some body text that shows the standard font styling.
        </p>
      </section>

      <footer class="footer">
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </main>
  );
}

export default PageHome;
