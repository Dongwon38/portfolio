import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faGlobe,
  faGreaterThan,
  faLessThan,
} from "@fortawesome/free-solid-svg-icons";
import { restBase } from "../utilities/Utilities";

function PageWork() {
  const { id } = useParams();
  const restPath = restBase + "fwd-work";
  const [restData, setData] = useState({});
  const [isLoaded, setLoadStatus] = useState(false);
  const [images, setImages] = useState({});

  // pagnation
  const [worksData, setWorksData] = useState([]);
  // Calculate previous and next indices
  const totalPage = worksData.length;
  const currentIndex = Number(id) - 1;
  const previousIndex = (currentIndex - 1 + totalPage) % totalPage;
  const nextIndex = (currentIndex + 1) % totalPage;

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data[id - 1]);
        setWorksData(data);

        // Add Img
        const imageRequests = data[id - 1].acf.images.map(async (imageItem) => {
          const imageId = imageItem.image ? imageItem.image : imageItem.video;
          const mediaResponse = await fetch(`${restBase}media/${imageId}`);
          if (mediaResponse.ok) {
            const mediaData = await mediaResponse.json();
            return { id: imageId, url: mediaData.source_url };
          }
          return null;
        });
        const imageResults = await Promise.all(imageRequests);
        const imageMap = imageResults.reduce((acc, img) => {
          if (img) {
            acc[img.id] = img.url;
          }
          return acc;
        }, {});

        setImages(imageMap);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [restPath, id, currentIndex]);

  return (
    <>
      {isLoaded && (
        <main className="main-work">
          <section className="left-section">
            <h1 className="title">{restData && restData.acf.title}</h1>

            <div className="image-container">
              {restData &&
                restData.acf.images.map((imageItem, index) => (
                  <div key={index} className="img-container">
                    <img
                      src={
                        images[imageItem.image]
                          ? images[imageItem.image]
                          : images[imageItem.video]
                      }
                      alt={`Work Image ${index + 1}`}
                    />
                  </div>
                ))}
            </div>

            <div className="skill-container">
              <h3 className="skill-box-title">Main Skill</h3>
              <div className="skill-box main">
                {restData &&
                  restData.acf.main_skill &&
                  restData.acf.main_skill.map((skill, index) => (
                    <div className="skill" key={index}>
                      {skill}
                    </div>
                  ))}
              </div>

              <h3 className="skill-box-title">Others</h3>
              <div className="skill-box others">
                {restData &&
                  restData.acf.other_skill.map((skill, index) => (
                    <div className="skill" key={index}>
                      {skill}
                    </div>
                  ))}
              </div>
            </div>
          </section>

          <section className="right-section">
            <div className="heading-wrapper">
              <h2>What I Learned</h2>
              <span className="center-line"></span>
            </div>
            {restData &&
              restData.acf.learned.map((content, index) => (
                <div className="single-takeaway" key={index}>
                  <div className="skill-box">
                    {content.subheadings &&
                      content.subheadings.map((heading, subIndex) => (
                        <div className="skill" key={subIndex}>
                          {heading.subheading}
                        </div>
                      ))}
                  </div>
                  <p>{content.paragraph}</p>
                </div>
              ))}

            <h3>Resources</h3>
            <div className="external-link">
              <a
                href={restData && restData.acf.live_site_url}
                title="View Live Site"
                className="external-link-box"
              >
                <FontAwesomeIcon icon={faGlobe} />
                <p className="label">Live site</p>
              </a>
              <a
                href={restData && restData.acf.code_url}
                title="View Github Repo"
                className="external-link-box"
              >
                <FontAwesomeIcon icon={faCode} />
                <p className="label">Code</p>
              </a>
            </div>
          </section>
          <section className="bottom-section">
            <div className="internal-link">
              <h3>See Other Works</h3>
              <div className="internal-link-list">
                <div>
                  <p className="label left">
                    <FontAwesomeIcon icon={faLessThan} className="font left" />
                    Go to the page
                  </p>
                  <Link to={`/work/${previousIndex + 1}`}>
                    <p className="work-title">
                      {worksData[previousIndex].acf.title}
                    </p>
                  </Link>
                </div>
                <div>
                  <p className="label right">
                    Go to the page
                    <FontAwesomeIcon
                      icon={faGreaterThan}
                      className="font right"
                    />
                  </p>
                  <Link to={`/work/${nextIndex + 1}`}>
                    <p className="work-title">
                      {worksData[nextIndex].acf.title}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default PageWork;
