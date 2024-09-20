import React from "react";
import sample from "../assets/sample.jpg";
import { Link, useParams } from "react-router-dom";

function PageWork() {
  const { id } = useParams();

  return (
    <main className="main-work">
      <h1 className="title">Work {id}</h1>
      <p className="excerpt">test excerpt string here</p>
      <img src={sample} />
      <div className="skill-box">
        <div className="skill">React</div>
        <div className="skill">Sass</div>
        <div className="skill">Javascript</div>
      </div>
      <h2>What I Learned</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse
        debitis cupiditate, necessitatibus ex qui similique placeat a
        accusantium, minus aliquam laboriosam autem nostrum iste cum explicabo
        laborum perspiciatis dicta.
      </p>
      <div className="external-link">
        <a href="">Live site</a>
        <a href="">code</a>
      </div>
      <div className="internal-link">
        <h3>See Other Works</h3>
        <div className="internal-link-list">
          <Link to="">
            <p>Movie DataBase</p>
            <p>Go to the page</p>
          </Link>
          <Link to="">
            <p>Capstone Project</p>
            <p>Go to the page</p>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default PageWork;
