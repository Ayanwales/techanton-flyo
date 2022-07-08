import React from "react";
import logo from '../images/logo.svg'
const Navbar = () => {
  return (
    <>
      <nav className="nav-class">
        <div className="nav-header">
          <img src={logo} className="nav-image" alt="nav-image" />
        </div>
        <ul className="links">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
