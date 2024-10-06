import React, { useEffect, useState } from "react";
import sample from "../assets/sample.jpg";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faGlobe,
  faGreaterThan,
  faLessThan,
} from "@fortawesome/free-solid-svg-icons";
import { restBase } from "../utilities/Utilities";

function PageWork() {
  const { id } = useParams();
  // get Data from WordPress
  const order = "?order=asc";
  const restPath = restBase + "fwd-work" + order;
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data[id - 1]);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [restPath]);

  return (
    <>
      {isLoaded && (
        <main className="main-work">
          <div className="left-section">
            <h1 className="title">{restData && restData.acf.title}</h1>

            <div className="img-container">
              <img src={sample} />
            </div>
            <div className="skill-container">
              <h3 className="skill-box-title">Main Skill</h3>
              <div className="skill-box main">
                {restData &&
                  restData.acf.main_skill.map((skill, index) => (
                    <div className="skill" key={index}>
                      {skill}
                    </div>
                  ))}
              </div>
              <h3 className="skill-box-title">Others</h3>
              <div className="skill-box others">
                {restData &&
                  restData.acf.other_skill.map((skill, index) => (
                    <div className="skill" key={index}>
                      {skill}
                    </div>
                  ))}
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
                I enhanced my coding skills by learning to manage global state
                with reducers and reusing components efficiently. I also worked
                on improving API calls and ensuring the site was responsive and
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
                During this project, I worked in a group of four using GitHub
                for version control. We coordinated through pull requests and
                code reviews, ensuring smooth collaboration. I focused on
                writing code easy to read and maintain to help team members
                easily understand and contribute to the project.
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
                responsive layouts. I also focused on accessibility, ensuring
                that icons and text were clear and user-friendly.
              </p>
            </div>
            <h3>Resources</h3>
            <div className="external-link">
              <a
                href={restData && restData.acf.live_site_url}
                title="View Live Site"
                className="external-link-box"
              >
                <FontAwesomeIcon icon={faGlobe} />
                <p className="label">Live site</p>
              </a>
              <a
                href={restData && restData.acf.code_url}
                title="View Github Repo"
                className="external-link-box"
              >
                <FontAwesomeIcon icon={faCode} />
                <p className="label">Code</p>
              </a>
            </div>
          </div>
          <div className="bottom-section">
            {/* <div className="internal-link">
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
                    <FontAwesomeIcon
                      icon={faGreaterThan}
                      className="font right"
                    />
                  </p>
                  <Link to="">
                    <p className="work-title">Capstone Project</p>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </main>
      )}
    </>
  );
}

export default PageWork;
