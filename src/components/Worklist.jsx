import React, { useEffect, useState } from "react";
import sample from "../assets/sample.jpg";
import moviePin1 from "../assets/img/movie-pin-1.png";
import portfolio1 from "../assets/img/portfolio1.png";
import matchingGame1 from "../assets/img/matching-game1.png";
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
          <section className="work-item">
            <img className="thumbnail" src={moviePin1} alt="sample-bg" />
            <Link to={`/work/1`}>
              <div className="overlay">
                <h3 className="title">Movie-Pin</h3>
                <p className="excerpt">
                  Movie search website using TMDB API offering text searching,
                  saving a list
                </p>
                <div className="skill-box">
                  <div className="skill">React</div>
                  <div className="skill">CSS/Sass</div>
                  <div className="skill">APIs</div>
                </div>
                <span className="link-text">Read more</span>
              </div>
            </Link>
          </section>
          <section className="work-item">
            <img className="thumbnail" src={portfolio1} alt="sample-bg" />
            <Link to={`/work/2`}>
              <div className="overlay">
                <h3 className="title">Portfolio</h3>
                <p className="excerpt">
                  Portfolio website to showcase projects and provide a way to
                  connect
                </p>
                <div className="skill-box">
                  <div className="skill">WordPress</div>
                  <div className="skill">React</div>
                  <div className="skill">CSS/Sass</div>
                  <div className="skill">APIs</div>
                </div>
                <span className="link-text">Read more</span>
              </div>
            </Link>
          </section>
          <section className="work-item">
            <img className="thumbnail" src={matchingGame1} alt="sample-bg" />
            <Link to={`/work/3`}>
              <div className="overlay">
                <h3 className="title">Matching Game</h3>
                <p className="excerpt">
                  Turn-based card matching game play against the computer
                </p>
                <div className="skill-box">
                  <div className="skill">JavaScript</div>
                  <div className="skill">HTML</div>
                  <div className="skill">CSS</div>
                </div>
                <span className="link-text">Read more</span>
              </div>
            </Link>
          </section>
        </ul>
      </div>
    </section>
  );
}

export default Worklist;

// {isLoaded &&
//   restData.map((item, index) => (
//     <section className="work-item" key={index}>
//       <img className="thumbnail" src={sample} alt="sample-bg" />
//       <Link to={`/work/${index + 1}`}>
//         <div className="overlay">
//           <h3 className="title">{item.acf.title}</h3>
//           <p className="excerpt">{item.acf.excerpt}</p>
//           <div className="skill-box">
//             {item.acf.main_skill &&
//               item.acf.main_skill.map((element, skillIndex) => (
//                 <div className="skill" key={skillIndex}>
//                   {element}
//                 </div>
//               ))}
//           </div>
//           <span className="link-text">Read more</span>
//         </div>
//       </Link>
//     </section>
//   ))}
