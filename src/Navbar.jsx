import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-box">
      <h1 className="logo">Infinimod</h1>
      <ul className="nav-links">
        <li href="/">Home</li>
        <li href="/features">Features</li>
      </ul>
    </nav>
  );
};

export default Navbar;
