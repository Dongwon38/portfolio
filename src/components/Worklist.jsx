import React from "react";
import WorkItem from "./WorkItem";

function Worklist() {
  return (
    <section className="works-section" id="works-section">
      <div className="works-inner-container">
        <h2>Works</h2>
        <ul className="work-list">
          <WorkItem />
          <WorkItem />
          <WorkItem />
        </ul>
      </div>
    </section>
  );
}

export default Worklist;
