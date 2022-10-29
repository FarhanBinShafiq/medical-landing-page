import React from 'react';
//import logo from '../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div>
                <div>
                    <img src='' alt="" />
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <div>
                        <p> +7586656566</p>
                        <p> Dhaka ,Bangladesh</p>
                        <p>Farhan@gmail.com</p>
                    </div>
                </div>
            </div>

            <div>
                <h2>Doctors</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
            </div>
            <div>
                <h2>Useful links</h2>
                <div>
                    <p>All department Links</p>
                </div>
            </div>
            <div>
                <h2>News Letter</h2>
                <div>
                    <input type="text" placeholder='Enter your email' />
                    <button>Submit</button>
                    <div>
                        <p>Social media link</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;