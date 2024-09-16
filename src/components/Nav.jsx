import React from "react";
import { Link } from "react-router-dom";
import iconHome from "../assets/icons/house-solid.svg";
import iconWork from "../assets/icons/briefcase-solid.svg";
import iconAbout from "../assets/icons/user-solid.svg";

function Nav() {
  return (
    <nav>
      <div className="mobile-nav">
        <Link to="/" className="nav-btn">
          <img src={iconHome} alt="home icon" />
          <p className="icon-label">Home</p>
        </Link>
        <Link to="/" className="nav-btn">
          <img src={iconWork} alt="work icon" />
          <p className="icon-label">Work</p>
        </Link>
        <Link to="/" className="nav-btn">
          <img src={iconAbout} alt="about icon" />
          <p className="icon-label">About</p>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
