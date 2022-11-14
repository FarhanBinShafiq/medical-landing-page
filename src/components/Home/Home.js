import React from 'react';
import './Home.css'
import img1 from '../../images/img-1.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate} from 'react-router-dom';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Cards from '../Shared/Cards/Cards';
import Services from '../Shared/Services/Services';
import Clients from '../Clients/Clients';
import Departments from '../Departments/Departments';
import Package from '../Package/Package';
import AboutUs from '../About-Us/AboutUs';


const Home = () => {
    const navigate = useNavigate();
    const navigateToContacts = () => {
        // 👇️ navigate to /contacts
        navigate('/contact');
      };
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
                        <button className='second-buton'onClick={navigateToContacts }>Make Appoinment</button>
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
                            <button onClick={navigateToContacts }>Contact </button>
                            <button>Download the App</button>
                        </div>
                    </div>

                    <div className='home-right-image'>
                        <img src={img1} alt="" />
                    </div>


                </SwiperSlide>


            </Swiper>
            <Cards></Cards>
            <AboutUs></AboutUs> 
            <Services/>
            <Departments />
         
            <Package></Package>
            <Clients></Clients>  

        </>





    );
};

export default Home;