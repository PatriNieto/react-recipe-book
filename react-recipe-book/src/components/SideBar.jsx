import React from "react";
import imgLogo from "../assets/logo-react-Recipe.png";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar">
      <Link to="/">
        <img src={imgLogo} alt="Logo" className="imgLogo" />
      </Link>

      <Link to="/about">
        <p>About</p>
      </Link>
    </div>
  );
};

export default SideBar;
