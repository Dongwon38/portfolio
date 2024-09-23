import React, { useEffect, useState } from "react";
import logo from "../assets/logo-v2.3.png";
import { Link } from "react-router-dom";

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

  return (
    <header className="header" id="header">
      <div
        className={isScrolled ? "logo-box scrolled" : "logo-box"}
        onClick={scrollToTop}
      >
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
