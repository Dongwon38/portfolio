import React from "react";
import sample from "../assets/sample.jpg";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faGlobe,
  faGreaterThan,
  faLessThan,
} from "@fortawesome/free-solid-svg-icons";

function PageWork() {
  const { id } = useParams();

  return (
    <main className="main-work">
      <div className="left-section">
        <h1 className="title">Movie-Pin</h1>
        {/* <div className="overview">
          <h3>Overview</h3>
          <p>
            A movie search site created using the TMDB API. The main focus was
            on creating a clean design that makes the search experience easy and
            straightforward. The site features a "like" button that allows users
            to save their favorite movies to local storage, enabling them to
            revisit their selections at any time.
          </p>
        </div> */}
        <div className="img-container">
          <img src={sample} />
        </div>
        <div className="skill-container">
          <h3 className="skill-box-title">Main Skill</h3>
          <div className="skill-box main">
            <div className="skill">React</div>
            <div className="skill">REST API</div>
            <div className="skill">CSS/SASS</div>
          </div>
          <h3 className="skill-box-title">Others</h3>
          <div className="skill-box others">
            <div className="skill">Javascript</div>
            <div className="skill">Git/Github</div>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="heading-wrapper">
          <h2>What I Learned</h2>
          <span className="center-line"></span>
        </div>
        <div className="single-takeaway">
          <div className="skill-box">
            <div className="skill">Component Reuse</div>
            <div className="skill">State Management</div>
            <div className="skill">API Handling</div>
          </div>
          <p>
            I enhanced my coding skills by learning to manage global state with
            reducers and reusing components efficiently. I also worked on
            improving API calls and ensuring the site was responsive and
            accessible across different devices.
          </p>
        </div>
        <div className="single-takeaway">
          <div className="skill-box">
            <div className="skill">Teamwork</div>
            <div className="skill">GitHub Collaboration</div>
            <div className="skill">Readable Coding</div>
          </div>
          <p>
            During this project, I worked in a group of four using GitHub for
            version control. We coordinated through pull requests and code
            reviews, ensuring smooth collaboration. I focused on writing code
            easy to read and maintain to help team members easily understand and
            contribute to the project.
          </p>
        </div>
        <div className="single-takeaway">
          <div className="skill-box">
            <div className="skill">UX</div>
            <div className="skill">Accessibility</div>
          </div>
          <p>
            I learned to balance aesthetics with functionality, improving
            readability by layering text over dynamic backgrounds and using
            responsive layouts. I also focused on accessibility, ensuring that
            icons and text were clear and user-friendly.
          </p>
        </div>
        {/*  */}
        <h3>Resources</h3>
        <div className="external-link">
          <a href="" title="View Live Site" className="external-link-box">
            <FontAwesomeIcon icon={faGlobe} />
            <p className="label">Live site</p>
          </a>
          <a href="" title="View Github Repo" className="external-link-box">
            <FontAwesomeIcon icon={faCode} />
            <p className="label">Code</p>
          </a>
        </div>
      </div>
      <div className="bottom-section">
        <div className="internal-link">
          <h3>See Other Works</h3>
          <div className="internal-link-list">
            <div>
              <p className="label left">
                <FontAwesomeIcon icon={faLessThan} className="font left" />
                Go to the page
              </p>
              <Link to="">
                <p className="work-title">Movie DataBase</p>
              </Link>
            </div>
            <div>
              <p className="label right">
                Go to the page
                <FontAwesomeIcon icon={faGreaterThan} className="font right" />
              </p>
              <Link to="">
                <p className="work-title">Capstone Project</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PageWork;
