
import React, { useState } from "react";
import "./Header.css";
import logo from '../../images/logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">
        <img src={logo} alt="" />
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">Doctors</a>
        <a href="/about">Medicine</a>
        <a href="/about">Clients</a>
        <a href="/service">Blogs</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
