import React from 'react';
import './Services.css'
import img1 from '../../../images/icon-2.png'
import img2 from '../../../images/icon-3.png'
import img3 from '../../../images/icon-4.png'
import img4 from '../../../images/icon-6.png'

const Services = () => {
    return (
        <nav>
            <div className='services-top'>
                <h1>Why choose 24hr home care</h1>
                <p>labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                <div className='services-top-boxs' >
                   
                <div className='services-top-box' id='box-1'>
                        <img src={img4} alt=""  />
                        <h4>Latest Labratory</h4>
                    </div>

                    <div className='services-top-box'>
                        <img src={img1} alt=""  />
                        <h4>Daily care experts</h4>
                    </div>
                    <div className='services-top-box'>
                        <img src={img2} alt='' />
                        <h4>Available</h4>
                        <h4> 24/7</h4>
                    </div>
                    <div className='services-top-box'>
                        <img src={img3} alt=""  />
                        <h4>Balanced care</h4>
                    </div>

                    
                </div>
            </div>

        </nav>
    );
};

export default Services;