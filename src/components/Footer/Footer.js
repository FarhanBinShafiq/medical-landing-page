import React from 'react';
import logo from '../../images/logo.png'
import './Footer.css'
import { BsFacebook, BsInstagram, BsGoogle, BsTwitter } from "react-icons/bs";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div>
                <div className='footer-logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='footer-contactUs'>
                    <h6>Contact with us</h6>
                    <ul className='footer-contact-class'>
                        <li><BsFillTelephonePlusFill /> <span>+758 665656600</span></li>
                        <li> <FaMapMarkerAlt /><span>Dhaka ,Bangladesh </span></li>
                        <li><AiOutlineMail /><span> Farhan@gmail.com </span></li>
                    </ul>
                </div>
            </div>



            <div>
                <h6>Useful links</h6>
                <ul className='footer-links'>
                    <li><Link as to="home">Home</Link></li>
                    <li><HashLink smooth to="/home#about">About</HashLink></li>
                    <li>  <HashLink smooth to="/home#department">Departments</HashLink></li>
                    <li> <Link to="doctor">Doctors</Link></li>
                    <li><Link to="blogs">Blogs</Link></li>
                   
                </ul>
            </div>


            <div className='footer-doctor-details'>
                <h6>Doctors</h6>
                <p>There are many variations of passages of  Lorem Ipsum available, but the majority  available, but the majority have suffered alteration in some form, by injected humour</p>
            </div>

            <div className='footer-socialMedia'>
                <h6>News Letter</h6>
                <div>
                    <input type="text" className='footer-input' placeholder='Enter your email' /><br /> <br />
                    <button className='footer-submit-btn'>Submit</button>
                    <ul className='footer-social-media'>

                        <li><a href="http://www.facebook.com"><BsFacebook /></a></li>
                        <li><a href="http://www.instagram.com"><BsInstagram /></a></li>
                        <li><a href="http://www.google.com"><BsGoogle /></a></li>
                        <li><a href="http://www.twitter.com"><BsTwitter /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;