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

  const pointerEvents = isNavbarVisible ? "" : "none";
  const navbarClass = isNavbarVisible ? "navbar fade-in" : "navbar fade-out";

  return (
    <div className="navbar-container">
      <nav className={navbarClass}>
        <div className="navbar-content">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link style={{ pointerEvents }} to="/" onClick={toggleNavbar}>
                HOME
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                style={{ pointerEvents }}
                to="/about"
                onClick={toggleNavbar}
              >
                ABOUT
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                style={{ pointerEvents }}
                to="/projects"
                onClick={toggleNavbar}
              >
                PROJECTS
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                style={{ pointerEvents }}
                to="/careers"
                onClick={toggleNavbar}
              >
                CAREERS
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                style={{ pointerEvents }}
                to="/contact"
                onClick={toggleNavbar}
              >
                CONTACT
              </Link>
            </li>
            <br />
          </ul>
        </div>
        <button className="toggle-button" onClick={toggleNavbar}>
          <img
            className="logo"
            src={isNavbarVisible ? logoClosed : logoOpen}
            alt="Logo"
          />
        </button>
      </nav>
      {!isNavbarVisible && (
        <button className="toggle-button" onClick={toggleNavbar}>
          <img
            className="logo"
            src={isNavbarVisible ? logoClosed : logoOpen}
            alt="Logo"
          />
        </button>
      )}
    </div>
  );
}

export default Navbar;