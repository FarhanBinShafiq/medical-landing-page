import React, { useState } from 'react';
import Cardiology from '../Department/Cardiology/Cardiology';
import Dental from '../Department/Dental/Dental';
 
import Neorology from '../Department/Neurology/Neorology';
import Surgical from '../Department/Surgical/Surgical';

import './Departments.css'

const Departments = () => {

    const [active, setActive] = useState('FirstCard');

//     const handleFirst=(e)=>{
//            e.preventDefault();
//            setActive('FirstCard')
//     }

//     const handlesecond=(e)=>{
//         e.preventDefault();
//         setActive('SecondCard')
//  }


//  const handleThird=(e)=>{
//     e.preventDefault();
//     setActive('ThirdCard')
// }


// const handleFour=(e)=>{
//     e.preventDefault();
//     setActive('FourCard')
// }


    return (
        <div>
            <div className='department-top'>
                <h5>DEPARTMENTS</h5>
                <h2>Clinic Departments</h2>
                <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            </div>

            <div className='department-menu'>
                <ul>
                    <li><a onClick={()=>setActive('FirstCard')} a="#neurology"> Neurology</a></li>
                    <li><a  onClick={()=>setActive('SecondCard')}  href="#"> Surgical</a></li>
                     <li><a  onClick={()=>setActive('ThirdCard')}  href="#"> Dental</a></li>
                    <li><a  onClick={()=>setActive('FourthCard')}  href="#"> Cardiology</a></li> 
                </ul>
            </div>

            <div>
                {active==='FirstCard' && <Neorology></Neorology>  }
                {active==='SecondCard' && <Surgical></Surgical>  }
                {active==='ThirdCard' && <Dental></Dental>  }
                {active==='FourthCard' && <Cardiology></Cardiology>  }
                
            </div>
        </div>
    );
};

export default Departments;