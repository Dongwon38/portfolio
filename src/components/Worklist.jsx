import React, { useEffect, useState } from "react";
import sample from "../assets/sample.jpg";
import { restBase } from "../utilities/Utilities";
import { Link } from "react-router-dom";

function Worklist() {
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

  console.log(restData);

  return (
    <section className="works-section" id="works-section">
      <div className="works-inner-container">
        <h2>Works</h2>
        <ul className="work-list">
          <section className="work-item">
            <img className="thumbnail" src={sample} alt="sample-bg" />
            <div className="overlay">
              <Link to="/work/1">
                <h3 className="title">Project 1 Title</h3>
                <p className="excerpt">
                  put an one line explanation here within 50 letters
                </p>
                <div className="skill-box">
                  <div className="skill">React</div>
                  <div className="skill">Sass</div>
                  <div className="skill">Javascript</div>
                </div>
              </Link>
              <Link to="/work/1">
                <p>Read more</p>
              </Link>
            </div>
          </section>
          <section className="work-item">
            <img className="thumbnail" src={sample} alt="sample-bg" />
            <div className="overlay">
              <Link to="/work/1">
                <h3 className="title">Project 1 Title</h3>
                <p className="excerpt">
                  put an one line explanation here within 50 letters
                </p>
                <div className="skill-box">
                  <div className="skill">React</div>
                  <div className="skill">Sass</div>
                  <div className="skill">Javascript</div>
                </div>
              </Link>
              <Link to="/work/1">
                <p>Read more</p>
              </Link>
            </div>
          </section>
          <section className="work-item">
            <img className="thumbnail" src={sample} alt="sample-bg" />
            <div className="overlay">
              <Link to="/work/1">
                <h3 className="title">Project 1 Title</h3>
                <p className="excerpt">
                  put an one line explanation here within 50 letters
                </p>
                <div className="skill-box">
                  <div className="skill">React</div>
                  <div className="skill">Sass</div>
                  <div className="skill">Javascript</div>
                </div>
              </Link>
              <Link to="/work/1">
                <p>Read more</p>
              </Link>
            </div>
          </section>
          <section className="work-item">
            <img className="thumbnail" src={sample} alt="sample-bg" />
            <div className="overlay">
              <Link to="/work/1">
                <h3 className="title">Project 1 Title</h3>
                <p className="excerpt">
                  put an one line explanation here within 50 letters
                </p>
                <div className="skill-box">
                  <div className="skill">React</div>
                  <div className="skill">Sass</div>
                  <div className="skill">Javascript</div>
                </div>
              </Link>
              <Link to="/work/1">
                <p>Read more</p>
              </Link>
            </div>
          </section>
          <section className="work-item">
            <img className="thumbnail" src={sample} alt="sample-bg" />
            <div className="overlay">
              <Link to="/work/1">
                <h3 className="title">Project 1 Title</h3>
                <p className="excerpt">
                  put an one line explanation here within 50 letters
                </p>
                <div className="skill-box">
                  <div className="skill">React</div>
                  <div className="skill">Sass</div>
                  <div className="skill">Javascript</div>
                </div>
              </Link>
              <Link to="/work/1">
                <p>Read more</p>
              </Link>
            </div>
          </section>
        </ul>
      </div>
    </section>
  );
}

export default Worklist;
