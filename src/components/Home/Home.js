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
                <SwiperSlide className='home-nav'>

                    <div className='home-left-part'>

                        <div className='home-left-heading'>
                            <h1><span>Health</span> Care</h1>
                            <h4>Explore the <span>MyHealth360 </span> app</h4>
                            <p className='home-paragraph'>From pre-admission check-ups to post-hospitalisation charges, the app aims to assist you to make informed decisions at every step of your health journey.</p>

                        </div>


                        <div className='home-left-part-button'>
                            <button>Conatct now</button>
                            <button>Download the App</button>
                        </div>
                    </div>

                    <div className='home-right-image'>
                        <img src={img1} alt="" />
                    </div>


                </SwiperSlide>

                <SwiperSlide className='home-nav'>

                    <div className='home-right-image'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='home-left-part'>

                        <div className='home-left-heading'>
                            <h1><span>Health</span> Care</h1>
                            <h4>Explore the <span>MyHealth360 </span> app</h4>
                            <p className='home-paragraph'>From pre-admission check-ups to post-hospitalisation charges, the app aims to assist you to make informed decisions at every step of your health journey.</p>

                        </div>


                        <div className='home-left-part-button'>
                            <button>Conatct now</button>
                            <button>Download the App</button>
                        </div>
                    </div>
                    <Clients></Clients>
                </SwiperSlide>
                <Cards></Cards>
                <Services></Services>
                <Package></Package>


            </Swiper>
        </>





    );
};

export default Home;