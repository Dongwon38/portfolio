import React, { useEffect, useState } from "react";
import { restBase } from "../utilities/Utilities";
import { h3 } from "framer-motion/client";

function AboutContent({ isActiveOverlay }) {
  // Accordion state
  const [activeIndex, setActiveIndex] = useState(0);

  function handleAccordionToggle(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  // Reset Accordion state to 0 when it open
  useEffect(() => {
    {
      isActiveOverlay && setActiveIndex(0);
    }
  }, [isActiveOverlay]);

  // get Data from WordPress
  const restPath = restBase + "fwd-about";
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data[0]);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [restPath]);

  return (
    <>
      <div className="heading-wrapper">
        <h2>About</h2>
        <span className="center-line"></span>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => handleAccordionToggle(0)}
          >
            <div>Background & Skills</div>
            <div>{activeIndex === 0 ? "-" : "+"}</div>
          </div>
          {activeIndex !== 0 ? (
            <div className="accordion-content"></div>
          ) : (
            <div className="accordion-content open">
              {isLoaded &&
                restData.acf.background_and_skills[0].background_content}
            </div>
          )}
        </div>
        {isLoaded &&
          restData.acf.single_about.map((item, index) => (
            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => handleAccordionToggle(index + 1)}
              >
                <div>{item.single_title}</div>
                <div>{activeIndex === index + 1 ? "-" : "+"}</div>
              </div>
              {activeIndex !== index + 1 ? (
                <div className="accordion-content"></div>
              ) : (
                <div className="accordion-content open">
                  {item.single_content}
                </div>
              )}
            </div>
          ))}
      </div>
    </>
  );
}

export default AboutContent;
