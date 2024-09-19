import React, { useState } from "react";

function About() {
  const [activeIndex, setActiveIndex] = useState(false);

  function toggleAccordion(index) {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }
  return (
    <section className="about-section" id="about-section">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quaerat
        expedita voluptatum eligendi asperiores totam explicabo culpa ipsam
        maiores veritatis nam non, alias excepturi repellendus, placeat autem
        voluptates, facere illum.
      </p>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(0)}>
            <div>Title 1</div>
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
          <div className="accordion-title" onClick={() => toggleAccordion(1)}>
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
          <div className="accordion-title" onClick={() => toggleAccordion(2)}>
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
      </div>
    </section>
  );
}

export default About;
