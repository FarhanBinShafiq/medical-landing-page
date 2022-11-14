import React from 'react';
import "./AboutUs.css"
import about from '../../images/about.jpg'
import iconone from '../../images/about_icon1.svg'
import icontwo from '../../images/abouticon2.svg'

const AboutUs = () => {
    return (
        <div className='aboutus-container' id="about">
            <div className='about-image'>
                <img src={about} alt="" />
            </div>
            <div className='about-text'>
                <h6>About Us</h6>
                <h2>Why choose us?</h2>
                <p>Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna vestibulum in. Nulla facilisi. Nulla egestas vel lacus sed interdum. Sed mollis, orci elementum eleifend tempor, nunc libero porttitor tellus, vel pharetra metus dolor.</p>
                <div className='about-footer'>
                    <div className='about-footer-img'>
                        <img src={iconone} alt="" />
                    </div>
                    <div className='about-footer-text'>
                        <h6>Great Treatment</h6>
                        <p>Ac erat ut enim maximus accumsan vel ac</p>
                    </div>
                </div>

                <div className='about-footer'>
                    <div className='about-footer-img'>
                        <img src={icontwo} alt="" />
                    </div>
                    <div className='about-footer-text'>
                        <h6>The best Doctors</h6>
                        <p>Ac erat ut enim maximus accumsan vel ac</p>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default AboutUs;