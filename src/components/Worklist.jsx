import React, { useEffect, useState } from "react";
import sample from "../assets/sample.jpg";
import { restBase } from "../utilities/Utilities";
import { Link } from "react-router-dom";

function Worklist() {
  // get Data from WordPress
  const restPath = restBase + "";
  const [restData, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      }
    };
    fetchData();
  }, [restPath]);

  return (
    <section className="works-section" id="works-section">
      <div className="works-inner-container">
        <div className="heading-wrapper">
          <h2 id="works-highlight">Works</h2>
          <span className="center-line"></span>
        </div>
        <ul className="work-list">
          <section className="work-item">
            <img className="thumbnail" src={sample} alt="sample-bg" />
            <Link to="/work/1">
              <div className="overlay">
                <h3 className="title">Movie-Pin</h3>
                <p className="excerpt">
                  Movie search website created using React and REST API
                </p>
                <div className="skill-box">
                  <div className="skill">React</div>
                  <div className="skill">Sass</div>
                  <div className="skill">Javascript</div>
                </div>
                <span className="link-text">Read more</span>
              </div>
            </Link>
          </section>
          <section className="work-item">
            <img className="thumbnail" src={sample} alt="sample-bg" />
            <Link to="/work/1">
              <div className="overlay">
                <h3 className="title">Movie-Pin</h3>
                <p className="excerpt">
                  Movie search website created using React and REST API
                </p>
                <div className="skill-box">
                  <div className="skill">React</div>
                  <div className="skill">Sass</div>
                  <div className="skill">Javascript</div>
                </div>
                <span className="link-text">Read more</span>
              </div>
            </Link>
          </section>
          <section className="work-item">
            <img className="thumbnail" src={sample} alt="sample-bg" />
            <Link to="/work/1">
              <div className="overlay">
                <h3 className="title">Movie-Pin</h3>
                <p className="excerpt">
                  Movie search website created using React and REST API
                </p>
                <div className="skill-box">
                  <div className="skill">React</div>
                  <div className="skill">Sass</div>
                  <div className="skill">Javascript</div>
                </div>
                <span className="link-text">Read more</span>
              </div>
            </Link>
          </section>
          <section className="work-item">
            <img className="thumbnail" src={sample} alt="sample-bg" />
            <Link to="/work/1">
              <div className="overlay">
                <h3 className="title">Movie-Pin</h3>
                <p className="excerpt">
                  Movie search website created using React and REST API
                </p>
                <div className="skill-box">
                  <div className="skill">React</div>
                  <div className="skill">Sass</div>
                  <div className="skill">Javascript</div>
                </div>
                <span className="link-text">Read more</span>
              </div>
            </Link>
          </section>
        </ul>
      </div>
    </section>
  );
}

export default Worklist;
