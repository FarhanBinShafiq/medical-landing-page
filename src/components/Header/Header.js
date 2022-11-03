
import React, { useState } from "react";
import "./Header.css";
import logo from '../../images/logo.png'
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">
       <Link to='home'> <img src={logo} alt="" /></Link>
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="home">Home</Link>
        <Link to="department">Departments</Link>
        <Link to="doctor">Doctors</Link>
        <Link to="about">About Us</Link>
        <Link to="clients">Clients</Link>
        <Link to="blogs">Blogs</Link>
        <Link to="contact">Contact Us</Link>
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
