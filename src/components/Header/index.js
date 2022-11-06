import React from "react";
import { Link } from "react-router-dom";
import { BiGlobe } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import "./index.css";

const Header = () => {
  return (
    <div className="header-outer">
      <div className="header">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dwp6uyiir/image/upload/v1667665597/Airbnb_Logo_dpe07y.png"
            alt="airbnb logo"
            className="header-logo"
          />
        </Link>
        <div className="header-profile">
          <p className="header-become">Become a host</p>
          <BiGlobe size={20} className="header-become" />
          <div className="header-pro">
            <GiHamburgerMenu
              size={20}
              style={{ color: "grey", margin: "8px" }}
            />
            <FaUserCircle size={32} style={{ color: "grey" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
