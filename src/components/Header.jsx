import React from "react";
import logo from "../assets/logo-v1.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="site-logo" />
      </div>
    </header>
  );
}

export default Header;
