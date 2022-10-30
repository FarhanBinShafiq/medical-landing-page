import React from 'react';
import './Clients.css';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import testOne from '../../images/test-thumb1.jpg'
import testTwo from '../../images/test-thumb2.jpg'
import testThree from '../../images/test-thumb3.jpg'
import testFour from '../../images/test-thumb4.jpg'

import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

const Clients = () => {
    return (
        <div>
            <h2>We served over 5000+ Patients</h2>
            <p></p>


            
                <Swiper
                    slidesPerView={1}
                    centeredSlides={false}
                    slidesPerGroupSkip={1}
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    breakpoints={{
                        769: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                    }}
                    
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Keyboard, Navigation, Pagination]}
                    className="mySwiper"
                >
                
              <div className='clients-nav'>
              <SwiperSlide >
                        <div  className='clients-container'>
                            <div className='clients'>
                                <div className='clients-img'>
                                    <img src={testOne} alt="" />
                                </div>
                                <div>
                                    <h6>Amazing service</h6>
                                    <p>Kolis Sarth</p>

                                </div>
                                
                            </div>
                           
                            <p> <span><FaQuoteLeft/></span> Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. <span><FaQuoteRight/></span></p>
                        </div>
                </SwiperSlide>


                <SwiperSlide >
                        <div  className='clients-container'>
                            <div className='clients'>
                                <div className='clients-img'>
                                    <img src={testTwo} alt="" />
                                </div>
                                <div>
                                    <h6>Amazing service</h6>
                                    <p>Kolis Sarth</p>

                                </div>
                                
                            </div>
                            <p> <span><FaQuoteLeft/></span> Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. <span><FaQuoteRight/></span></p>

                        </div>
                </SwiperSlide>



                <SwiperSlide >
                        <div  className='clients-container'>
                            <div className='clients'>
                                <div className='clients-img'>
                                    <img src={testThree} alt="" />
                                </div>
                                <div>
                                    <h6>Amazing service</h6>
                                    <p>Kolis Sarth</p>

                                </div>
                                
                            </div>
                            <p> <span><FaQuoteLeft/></span> Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. <span><FaQuoteRight/></span></p>

                        </div>
                </SwiperSlide>



                <SwiperSlide >
                        <div  className='clients-container'>
                            <div className='clients'>
                                <div className='clients-img'>
                                    <img src={testFour} alt="" />
                                </div>
                                <div>
                                    <h6>Amazing service</h6>
                                    <p>Kolis Sarth</p>

                                </div>
                                
                            </div>
                            <p> <span><FaQuoteLeft/></span> Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. <span><FaQuoteRight/></span></p>

                        </div>
                </SwiperSlide>            
                     
              </div>


                </Swiper>


            </div>
       
    );
};

export default Clients;