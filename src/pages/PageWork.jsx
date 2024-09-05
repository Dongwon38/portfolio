import React from "react";
import sample from "../assets/sample.jpg";
import { useParams } from "react-router-dom";

function PageWork() {
  const { id } = useParams();
  return (
    <main className="main-work">
      <h1 className="title">Work {id}</h1>
      <p className="excerpt">test excerpt string here</p>
      <img src={sample} />
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse
        debitis cupiditate, necessitatibus ex qui similique placeat a
        accusantium, minus aliquam laboriosam autem nostrum iste cum explicabo
        laborum perspiciatis dicta.
      </p>
      <h2>Skills</h2>
      <div className="skill-box">
        <div className="skill">React</div>
        <div className="skill">Sass</div>
        <div className="skill">Javascript</div>
      </div>
      <div className="link-box">
        <a href="">Live site</a>
        <a href="">code</a>
      </div>
    </main>
  );
}

export default PageWork;
