import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { BsSearch,BsList } from "react-icons/bs";

const Header = () => {
    return (
        <div>
        <label className='menu-nav' ><BsList className='nav-menu'/></label>
            
            <div className='header'>
                <div className='header-logo'>
                    <img src={logo} alt="" srcset="" />
                </div>
                <div className='header-menu'>

                    <ul>
                        <li>Home</li>
                        <li>Health</li>
                        <li>Medicine</li>
                        <li>Doctors</li>
                        <li>Clients</li>
                        <li>Blogs</li>
                        <li>Contact Us</li>
                        <li><BsSearch  values='search'/></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;