import React from "react";
import sample from "../assets/sample.jpg";
import { Link, useParams } from "react-router-dom";

function PageWork() {
  const { id } = useParams();

  return (
    <main className="main-work">
      <h1 className="title">Movie Database</h1>
      <img src={sample} />
      <div className="skill-box">
        <div className="skill">React</div>
        <div className="skill">REST API</div>
        <div className="skill">Javascript</div>
        <div className="skill">CSS/SASS</div>
        <div className="skill">Git/Github</div>
      </div>
      <h2>What I Learned</h2>
      <h3>Component Reuse, State Management, API Handling</h3>
      <p>
        I enhanced my coding skills by learning to manage global state with
        reducers and reusing components efficiently. I also worked on improving
        API calls and ensuring the site was responsive and accessible across
        different devices.
      </p>
      <h3>Teamwork, GitHub Collaboration, Readable Coding</h3>
      <p>
        During this project, I worked in a group of four using GitHub for
        version control. We coordinated through pull requests and code reviews,
        ensuring smooth collaboration. I focused on writing readable and
        maintainable code to help team members easily understand and contribute
        to the project.
      </p>
      <h3>UX, Accessibility</h3>
      <p>
        I learned to balance aesthetics with functionality, improving
        readability by layering text over dynamic backgrounds and using
        responsive layouts. I also focused on accessibility, ensuring that icons
        and text were clear and user-friendly.
      </p>
      <div className="external-link">
        <a href="">Live site</a>
        <a href="">code</a>
      </div>
      <div className="internal-link">
        <h3>See Other Works</h3>
        <div className="internal-link-list">
          <Link to="">
            <p>Movie DataBase</p>
            <p>Go to the page</p>
          </Link>
          <Link to="">
            <p>Capstone Project</p>
            <p>Go to the page</p>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default PageWork;
