import React, { useContext, useEffect, useState } from "react";
import { restBase } from "../utilities/Utilities";
import logoReact from "../assets/skill-logo/logo-react.png";
import logoWordpress from "../assets/skill-logo/logo-wp.png";
import logoWoo from "../assets/skill-logo/logo-woo.png";
import logoShopi from "../assets/skill-logo/logo-shopify.png";
import logoPhp from "../assets/skill-logo/logo-php.png";
import logoHtml from "../assets/skill-logo/logo-html.png";
import logoCss from "../assets/skill-logo/logo-css.png";
import logoSass from "../assets/skill-logo/logo-sass.png";
import logoJs from "../assets/skill-logo/logo-js.png";
import logoGithub from "../assets/skill-logo/logo-github.png";
import logoAi from "../assets/skill-logo/logo-ai.png";
import logoPs from "../assets/skill-logo/logo-ps.png";
import logoXd from "../assets/skill-logo/logo-xd.png";
import logoFigma from "../assets/skill-logo/logo-figma.png";
import { GlobalContext } from "../context/GlobalState";

function AboutContent({ isActiveOverlay }) {
  const { aboutToggled, toggleAbout } = useContext(GlobalContext);

  // Accordion state
  const [activeIndex, setActiveIndex] = useState(0);

  function handleAccordionToggle(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  // Reset Accordion state to 0 when it open
  useEffect(() => {
    {
      aboutToggled && setActiveIndex(0);
    }
  }, [aboutToggled]);

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
            <div className="btn-tab">
              {activeIndex === 0 ? "close tab -" : "open tab +"}
            </div>
          </div>
          {activeIndex !== 0 ? (
            <div className="accordion-content"></div>
          ) : (
            <div className="accordion-content open">
              {/* {isLoaded &&
                restData.acf.background_and_skills[0].background_content} */}

              <p>
                I am a <b>💻front-end developer</b> based in Vancouver, and a
                graduate of BCIT. My 🔥passion is creating websites that provide
                a great user experience through 💡simple structure and
                ✨attractive design.
              </p>
              <p>
                My goal is to strengthen connections between people and expand
                clients' expressive capabilities through web development. I
                believe that by enhancing the web, we can foster meaningful
                interactions and create engaging online experiences that
                resonate with users.
              </p>

              <h4>Dev Skill</h4>
              <div className="dev-skill-box">
                <div className="skill">
                  <img src={logoReact} />
                  React
                </div>
                <div className="skill">
                  <img src={logoWordpress} />
                  WordPress
                </div>
                <div className="skill">
                  <img src={logoWoo} />
                  WooCommerce
                </div>
                <div className="skill">
                  <img src={logoPhp} />
                  PHP
                </div>
                <div className="skill">
                  <img src={logoShopi} />
                  Shopify
                </div>
                <div className="skill">
                  <img src={logoHtml} />
                  HTML
                </div>
                <div className="skill">
                  <img src={logoCss} />
                  CSS
                </div>
                <div className="skill">
                  <img src={logoSass} />
                  Sass
                </div>
                <div className="skill">
                  <img src={logoJs} />
                  JavaScript
                </div>
                <div className="skill">
                  <img src={logoGithub} />
                  GitHub
                </div>
              </div>
              <h4>Design Skill</h4>
              <div className="design-skill-box">
                <div className="skill">
                  <img src={logoAi} />
                  Adobe Illustrator
                </div>
                <div className="skill">
                  <img src={logoPs} />
                  Adobe Photoshop
                </div>
                <div className="skill">
                  <img src={logoXd} />
                  Adobe XD
                </div>
                <div className="skill">
                  <img src={logoFigma} />
                  Figma
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => handleAccordionToggle(1)}
          >
            <div>Hobby</div>
            <div className="btn-tab">
              {activeIndex === 1 ? "close tab -" : "open tab +"}
            </div>
          </div>
          {activeIndex !== 1 ? (
            <div className="accordion-content"></div>
          ) : (
            <div className="accordion-content open">
              <p>
                ⚾Sports: I recently picked up softball and joined a
                recreational league! My teammates were so supportive, making the
                whole season a blast.
              </p>
              <p>
                🚀Browsing: I love exploring websites and shops. It's like a
                treasure hunt for inspiration that keeps me energized!
              </p>
              <p>
                🎮Video Games: They're my gateway to endless imaginative worlds,
                letting me dive into new adventures and experiences.
              </p>
              <h4>Skill</h4>
              <div className="design-skill-box">
                <div className="skill">👀 Good eye</div>
                <div className="skill">🏃 Fast runner</div>
                <div className="skill">💡 Fast learner</div>
              </div>
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => handleAccordionToggle(2)}
          >
            <div>Other expreience</div>
            <div className="btn-tab">
              {activeIndex === 2 ? "close tab -" : "open tab +"}
            </div>
          </div>
          {activeIndex !== 2 ? (
            <div className="accordion-content"></div>
          ) : (
            <div className="accordion-content open">
              <p>
                I used to be a 👮police officer for 10 years, and I discovered
                my brand new passion in web development while working on the
                police intranet UX/UI improvement project, which led me to be a
                front-end developer.
              </p>
              <p>
                I have worked in project management, internal communications,
                and victim services for of sexual and domestic violence,
                experiences that have helped me develop my project planning and
                implementation skills, as well as my interpersonal communication
                skills.
              </p>
              <h4>Skill</h4>
              <div className="design-skill-box">
                <div className="skill">✒️ Planning & Managing</div>
                <div className="skill">🤝 Communication</div>
                <div className="skill">🎯 Shooting (Useless)</div>
              </div>
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
