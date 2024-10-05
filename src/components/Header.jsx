import React, { useEffect, useState } from "react";
import logo from "../assets/logo-v2.3.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFolder,
  faUser,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  // animation on logo when scroll down
  const [isScrolled, setIsScrolled] = useState(false);

  // if scroll down from the top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // event listener on window
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll To Top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // TEst here
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    const location = e.target.textContent;

    switch (location) {
      case "Home":
        navigate("/");
        break;
      case "Works":
        navigate("/", { state: { highlight: "works" } });
        break;
      case "About":
        navigate("/", { state: { highlight: "about" } });
        break;
      case "Contact":
        navigate("/", { state: { highlight: "contact" } });
        break;
    }
    //
  };

  return (
    <header className="header-wrapper" id="header">
      <div className="header">
        <div
          className={isScrolled ? "logo-box scrolled" : "logo-box"}
          onClick={scrollToTop}
        >
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="desktop-nav">
          <li className="nav-btn">
            <p className="icon-label" onClick={(e) => handleContactClick(e)}>
              Home
            </p>
          </li>
          <li className="nav-btn">
            <p className="icon-label" onClick={(e) => handleContactClick(e)}>
              Works
            </p>
          </li>
          <Link to="/#works-section" className="nav-btn">
            <p className="icon-label">Works</p>
          </Link>
          <li className="nav-btn">
            <p className="icon-label" onClick={(e) => handleContactClick(e)}>
              About
            </p>
          </li>
          <li className="nav-btn">
            <p className="icon-label" onClick={(e) => handleContactClick(e)}>
              Contact
            </p>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
