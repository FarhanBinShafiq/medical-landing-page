import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cardiology from '../Department/Cardiology/Cardiology';
import Dental from '../Department/Dental/Dental';
 
import Neorology from '../Department/Neurology/Neorology';
import Surgical from '../Department/Surgical/Surgical';

import './Departments.css'

const Departments = () => {

    const [active, setActive] = useState('FirstCard');

 

    return (
        <div id='department'>
            <div className='department-top'>
                <h5>DEPARTMENTS</h5>
       
                <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            </div>

            <div className='department-menu'>
                <ul>
                    <li><Link onClick={()=>setActive('FirstCard')} to="#neurology"> Neurology</Link></li>
                    <li><Link  onClick={()=>setActive('SecondCard')}  to="#"> Surgical</Link></li>
                     <li><Link  onClick={()=>setActive('ThirdCard')}  to="#"> Dental</Link></li>
                    <li><Link  onClick={()=>setActive('FourthCard')}  to="#"> Cardiology</Link></li> 
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