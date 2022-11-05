import React from 'react';
import './Package.css'
import img1 from '../../images/img-2.png'
import img2 from '../../images/img-3.png'
import { FaArrowRight } from "react-icons/fa";

const Package = () => {
    return (
        <div className='package-container'>
            <div className='package'>
                <h1>Best Of Health care for you</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                </p>
            </div>

            <div className='package-home-card'>

                <div className='package-card'>
                    <img src={img2} alt="" />
                    <h6>Child Care</h6>
                    <p>Saepe nulla praesentium eaque omnis perferendis a doloremque </p>
                    <button>Read More</button>
                </div>

                <div className='package-card'>
                    <img src={img2} alt="" />
                    <h6>Personal Care</h6>
                    <p>Saepe nulla praesentium eaque omnis perferendis a doloremque.    </p>
                    <button>Read More</button>
                </div>

                <div className='package-card'>
                    <img src={img2} alt="" />
                    <h6>Examination & Test</h6>
                    <p>Saepe nulla praesentium eaque omnis perferendis a doloremque. </p>
                    <button>Read More</button>
                </div>

            </div>

        </div>
    );
};

export default Package;