import React from "react";
import { Link } from "react-router-dom";
import logo_white from "../../assets/main_logo_white.png";
import logo_black from "../../assets/main_logo_black.png";
import "./Header.css";

function Header({ dark }) {
  return (
    <div className="header">
      <Link to="/">
        <img src={dark ? logo_black : logo_white} alt="" />
      </Link>
    </div>
  );
}

export default Header;
