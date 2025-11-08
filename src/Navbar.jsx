import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-box">
      <h1 className="logo">Infinimod</h1>
      <ul className="nav-links">
        <li><Link to="/" className="nav-links">Home</Link></li>
        <li><Link to="/features" className="nav-links">Features</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;