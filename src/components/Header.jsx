import React, { useEffect, useState } from "react";
import logo from "../assets/logo-v2.2.png";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // To Top
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
        <img src={logo} alt="" />
      </div>
    </header>
  );
}

export default Header;
