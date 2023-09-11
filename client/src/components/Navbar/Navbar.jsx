import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className="navbar-container">
      {isNavbarVisible && (
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <button className="toggle-button" onClick={toggleNavbar}>
                Toggle Navbar
              </button>
            </li>
            <li className="navbar-item">
              <Link to="/">HOME</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="navbar-item">
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li className="navbar-item">
              <Link to="/careers">CAREERS</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      )}
      {!isNavbarVisible && (
        <button className="toggle-button" onClick={toggleNavbar}>
          Toggle Navbar
        </button>
      )}
    </div>
  );
}

export default Navbar;