import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <div className="nav-logo">
            The New Talent Group
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">EMPLOYERS</li>
            <li className="nav-item">ABOUT US</li>
            <li className="button1" style={{fontSize: '10px', marginTop:'3px'}}>CONTACT US</li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? <FaTimes /> : <FaBars />}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
