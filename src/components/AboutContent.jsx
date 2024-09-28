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
              {/* {isLoaded &&
                restData.acf.background_and_skills[0].background_content} */}
              <p>
                I am self-taught in design and video production, and studied
                front-end web development at BCIT.
              </p>
              <p>
                I used to be a police officer for 10 years, and I discovered my
                brand new passion in web development while working on the police
                intranet UX/UI improvement project, which led me to be a
                front-end developer.
              </p>
              <h4>Dev Skill</h4>
              <p>
                React, WordPress, WooCommerce, Shopify, REST API, PHP, HTML,
                CSS/Sass, JavaScript, GitHub
              </p>
              <h4>Design Skill</h4>
              <p>Adobe Illustrator, Adobe Photoshop, Adobe XD, Figma</p>
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => handleAccordionToggle(1)}
          >
            <div>Softball, Running, Hiking</div>
            <div>{activeIndex === 1 ? "-" : "+"}</div>
          </div>
          {activeIndex !== 1 ? (
            <div className="accordion-content"></div>
          ) : (
            <div className="accordion-content open">
              <p>
                I spend physical activity and new experiences. Walking and
                hiking keep me more productive and active. This year I ran a 10k
                for the first time and joined a recreational softball league.
              </p>
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => handleAccordionToggle(2)}
          >
            <div>More about Police Officer</div>
            <div>{activeIndex === 2 ? "-" : "+"}</div>
          </div>
          {activeIndex !== 2 ? (
            <div className="accordion-content"></div>
          ) : (
            <div className="accordion-content open">
              <p>
                What would you imagine a police officer to be like? Actually, I
                am not bulky or wild, and I have worked mostly in the head
                office (but I liked and enjoyed the frontline as well!).
              </p>
              <p>
                I have worked in project management, internal communications,
                and victim services for of sexual and domestic violence,
                experiences that have helped me develop my project planning and
                implementation skills, as well as my interpersonal communication
                skills.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AboutContent;

// {isLoaded &&
//   restData.acf.single_about.map((item, index) => (
//     <div className="accordion-item">
//       <div
//         className="accordion-title"
//         onClick={() => handleAccordionToggle(index + 1)}
//       >
//         <div>{item.single_title}</div>
//         <div>{activeIndex === index + 1 ? "-" : "+"}</div>
//       </div>
//       {activeIndex !== index + 1 ? (
//         <div className="accordion-content"></div>
//       ) : (
//         <div className="accordion-content open">
//           {item.single_content}
//         </div>
//       )}
//     </div>
//   ))}
