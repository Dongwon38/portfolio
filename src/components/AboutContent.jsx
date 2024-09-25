import React, { useState } from "react";

function AboutContent() {
  // Accordion state
  const [activeIndex, setActiveIndex] = useState(0);

  function handleAccordionToggle(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }

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
            <div>Education & Skills</div>
            <div>{activeIndex === 0 ? "-" : "+"}</div>
          </div>
          {activeIndex !== 0 ? (
            <div className="accordion-content"></div>
          ) : (
            <div className="accordion-content open">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              voluptatum recusandae itaque similique labore molestias
              consequuntur asperiores accusamus eum atque beatae, vitae at?
              Minima, fugiat doloremque. Accusantium provident veniam quasi!
            </div>
          )}
        </div>

        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => handleAccordionToggle(1)}
          >
            <div>Title 2</div>
            <div>{activeIndex === 1 ? "-" : "+"}</div>
          </div>
          {activeIndex !== 1 ? (
            <div className="accordion-content"></div>
          ) : (
            <div className="accordion-content open">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              voluptatum recusandae itaque similique labore molestias
              consequuntur asperiores accusamus eum atque beatae, vitae at?
              Minima, fugiat doloremque. Accusantium provident veniam quasi!
            </div>
          )}
        </div>

        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => handleAccordionToggle(2)}
          >
            <div>Title 3</div>
            <div>{activeIndex === 2 ? "-" : "+"}</div>
          </div>

          {activeIndex !== 2 ? (
            <div className="accordion-content"></div>
          ) : (
            <div className="accordion-content open">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              voluptatum recusandae itaque similique labore molestias
              consequuntur asperiores accusamus eum atque beatae, vitae at?
              Minima, fugiat doloremque. Accusantium provident veniam quasi!
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => handleAccordionToggle(3)}
          >
            <div>Softball & Vedio supporting</div>
            <div>{activeIndex === 2 ? "-" : "+"}</div>
          </div>

          {activeIndex !== 3 ? (
            <div className="accordion-content"></div>
          ) : (
            <div className="accordion-content open">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              voluptatum recusandae itaque similique labore molestias
              consequuntur asperiores accusamus eum atque beatae, vitae at?
              Minima, fugiat doloremque. Accusantium provident veniam quasi!
            </div>
          )}
        </div>
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => handleAccordionToggle(4)}
          >
            <div>More about Police</div>
            <div>{activeIndex === 2 ? "-" : "+"}</div>
          </div>

          {activeIndex !== 4 ? (
            <div className="accordion-content"></div>
          ) : (
            <div className="accordion-content open">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              voluptatum recusandae itaque similique labore molestias
              consequuntur asperiores accusamus eum atque beatae, vitae at?
              Minima, fugiat doloremque. Accusantium provident veniam quasi!
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AboutContent;
