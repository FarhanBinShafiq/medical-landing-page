import React from 'react';
import Neorology from '../Department/Neurology/Neorology';
import './Departments.css'

const Departments = () => {
    
    return (
        <div>
            <div className='department-top'>
                <h5>DEPARTMENTS</h5>
                <h2>Clinic Departments</h2>
                <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            </div>

            <div className='department-menu'>
                <ul>
                     <li><a href="#"> Neurology</a></li>
                     <li><a href="#"> Surgical</a></li>
                     <li><a href="#"> Dental</a></li>
                     <li><a href="#"> Cardiology</a></li>
                    

                      
                </ul>
            </div>
        </div>
    );
};

export default Departments;