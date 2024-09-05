import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="mobile-nav">
        <Link to="/" className="nav-btn">
          Home
        </Link>
        <Link to="/" className="nav-btn">
          About
        </Link>
        <Link to="/" className="nav-btn">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Nav;
