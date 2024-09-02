import React from "react";

function PageHome() {
  return (
    <div>
      <header class="header">
        <div class="logo">MySiteLogo</div>
      </header>

      <main class="main-content">
        <section class="profile">
          <h1>My Profile</h1>
          <p>Welcome to my portfolio. Here is some information about me.</p>
        </section>
        <section class="works">
          <h2>My Works</h2>
          <ul class="work-list">
            <li class="work-item">Project 1</li>
            <li class="work-item">Project 2</li>
            <li class="work-item">Project 3</li>
          </ul>
        </section>
      </main>

      <footer class="footer">
        <p>© 2024 My Portfolio</p>
      </footer>

      <div class="mobile-nav">
        <button class="nav-btn">Home</button>
        <button class="nav-btn">About</button>
        <button class="nav-btn">Contact</button>
      </div>
    </div>
  );
}

export default PageHome;
