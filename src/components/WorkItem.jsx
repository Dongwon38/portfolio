import React, { useEffect, useState } from "react";
import sample from "../assets/sample.jpg";
import { restBase } from "../utilities/Utilities";

function WorkItem() {
  const restPath = restBase + "";
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

  console.log(restData);

  return (
    <section className="work-item">
      <a href="./work/1">
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
      </a>
    </section>
  );
}

export default WorkItem;
