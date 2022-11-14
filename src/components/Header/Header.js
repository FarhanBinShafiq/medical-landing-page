
import React, { useState } from "react";
import "./Header.css";
import { HashLink } from 'react-router-hash-link';
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
        <Link as to="home">Home</Link>
        <HashLink smooth to="/home#about">About</HashLink>
        <HashLink smooth to="/home#department">Departments</HashLink>
        <HashLink smooth to="/home#package">Packages</HashLink>
        <HashLink smooth to="/home#client">Clients</HashLink>
        <Link to="doctor">Doctors</Link>
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
