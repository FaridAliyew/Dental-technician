import React from "react";
import "../style/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="/" className="navbar-logo">
          <span className="logo-letter">A</span>
          <span className="logo-text">Aurelia Dental Lab</span>
        </a>

        <div className="nav-items">
          <a href="#labo-servi">Services</a>
          <a href="#craft">Craft</a>
          <a href="#works">Process</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#request" className="request-button">
          Request a case
        </a>

      </div>
    </header>
  );
}

export default Navbar;