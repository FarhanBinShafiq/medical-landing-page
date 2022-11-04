import React from 'react';
import './Cards.css'
import { AiOutlineMail} from "react-icons/ai";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import {FaMapMarker} from "react-icons/fa";

const Cards = () => {
    return (
        <nav>
            <div className='cards-container'>
                 <div className='card'>  
                       
                       <p><BsFillTelephoneForwardFill className='card-icon'/> </p>
                       <h4>Call Us</h4>
                       <p>+22-10896310256</p>                  
                 </div>

                 <div className='card'>  
                       <p> <AiOutlineMail className='card-icon'/> </p>
                       <h4>Email Us</h4>
                       <p>Contact@gmail.com</p>
                                 
                 </div>

                 <div className='card' id='card-third'>  
                      <p> <FaMapMarker className='card-icon'/> </p>
                       <h4>Location</h4>
                       <p>Dhaka ,Bangladesh</p>                  
                 </div>

            </div>
        </nav>
    );
};

export default Cards;