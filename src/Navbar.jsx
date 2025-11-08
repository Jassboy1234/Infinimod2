import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-box">
      <h1 className="logo">Infinimod</h1>
      <ul className="nav-links">
        <button href="/">Home</button>
        <button href="/features">Features</button>
      </ul>
    </nav>
  );
};

export default Navbar;
