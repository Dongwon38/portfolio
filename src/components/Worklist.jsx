import React, { useEffect, useState } from "react";
import sample from "../assets/sample.jpg";
import { restBase } from "../utilities/Utilities";
import { Link } from "react-router-dom";

function Worklist() {
  // get Data from WordPress
  const restPath = restBase + "fwd-work";
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
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
          {isLoaded &&
            restData.map((item, index) => (
              <section className="work-item" key={index}>
                <img className="thumbnail" src={sample} alt="sample-bg" />
                <Link to={`/work/${index + 1}`}>
                  <div className="overlay">
                    <h3 className="title">{item.acf.title}</h3>
                    <p className="excerpt">{item.acf.excerpt}</p>
                    <div className="skill-box">
                      {item.acf.main_skill &&
                        item.acf.main_skill.map((element, skillIndex) => (
                          <div className="skill" key={skillIndex}>
                            {element}
                          </div>
                        ))}
                    </div>
                    <span className="link-text">Read more</span>
                  </div>
                </Link>
              </section>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Worklist;
