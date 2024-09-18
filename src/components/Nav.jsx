import React from "react";
import { Link } from "react-router-dom";
import iconHome from "../assets/icons/house-solid.svg";
import iconWork from "../assets/icons/briefcase-solid.svg";
import iconAbout from "../assets/icons/user-solid.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faFolder,
  faUser,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav>
      <div className="mobile-nav">
        <Link to="/#main-home" className="nav-btn">
          <FontAwesomeIcon icon={faHouse} />
          <p className="icon-label">Home</p>
        </Link>
        <Link to="/#works-section" className="nav-btn">
          <FontAwesomeIcon icon={faFolder} />
          <p className="icon-label">Works</p>
        </Link>
        <Link to="/#about-section" className="nav-btn">
          <FontAwesomeIcon icon={faUser} />
          <p className="icon-label">About</p>
        </Link>
        <Link to="/#contact-section" className="nav-btn">
          <FontAwesomeIcon icon={faComment} />
          <p className="icon-label">Contact</p>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
