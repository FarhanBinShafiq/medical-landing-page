import React from 'react';
import './Home.css'
import img1 from '../../images/img-1.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Cards from '../Shared/Cards/Cards';
import Services from '../Shared/Services/Services';
import Clients from '../Clients/Clients';
import Departments from '../Departments/Departments';
import Package from '../Package/Package';


const Home = () => {
    return (

        <>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper home "
            >


                <SwiperSlide className='home-nav-slide-two'>
                    <p className='home-nav-slide-two-title'>TOTAL HEALTH CARE SOLUTION</p>
                    <div className='home-nav-slide-two-text'>

                        <h1>Your Most Trusted Health Partner</h1>
                        <p>A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.</p>
                        <button className='second-buton'>Make Appoinment</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='home-nav-slide-one'>

                    <div className='home-left-part'>

                        <div className='home-left-heading'>
                            <h1><span>Health</span> Care</h1>
                            <h4 >Explore the<span>MyHealth360</span> app</h4>
                            <p className='home-paragraph'>From pre-admission check-ups to post-hospitalisation charges, the app aims to assist you to make informed decisions at every step of your health journey.</p>

                        </div>


                        <div className='home-left-part-button'>
                            <button>Contact </button>
                            <button>Download the App</button>
                        </div>
                    </div>

                    <div className='home-right-image'>
                        <img src={img1} alt="" />
                    </div>


                </SwiperSlide>


            </Swiper>
            <Cards></Cards>
            <Package></Package>
            <Departments/>
            {/* 
                <Services></Services>
                
                <Clients></Clients> */}
        </>





    );
};

export default Home;