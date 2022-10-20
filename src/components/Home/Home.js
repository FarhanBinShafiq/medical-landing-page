import React from 'react';
import './Home.css'
import img1 from '../../images/img-1.png'

const Home = () => {
    return (
        <div className='home-nav'>
            <div className='home-left-part'>

                <div className='home-left-heading'>
                    <h1><span>Health</span> Care</h1>
                    <h4>Explore the <span>MyHealth360 </span> app</h4>
                    <p className='home-paragraph'>From pre-admission check-ups to post-hospitalisation charges, the app aims to assist you to make informed decisions at every step of your health journey.</p>
 
                </div>

                
                <div className='home-left-part-button'>
                    <button>Conatct now</button>
                    <button>Download the apps</button>
                </div>
            </div>

            <div>
                <img src={img1} alt="" />
            </div>
        </div>
    );
};

export default Home;