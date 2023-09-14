import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoOpen from "../../assets/menuopen_logo.png";
import logoClosed from "../../assets/menuclose_logo.png";

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const navbarClass = isNavbarVisible ? "navbar fade-in" : "navbar fade-out";

  return (
    <div className="navbar-container">
      <nav className={navbarClass}>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" onClick={toggleNavbar}>
              HOME
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" onClick={toggleNavbar}>
              ABOUT
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/projects" onClick={toggleNavbar}>
              PROJECTS
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/careers" onClick={toggleNavbar}>
              CAREERS
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" onClick={toggleNavbar}>
              CONTACT
            </Link>
          </li>
          <br />
        </ul>
      </nav>
      <button className="toggle-button" onClick={toggleNavbar}>
        <img
          className="logo"
          src={isNavbarVisible ? logoClosed : logoOpen}
          alt="Logo"
        />
      </button>
    </div>
  );
}

export default Navbar;