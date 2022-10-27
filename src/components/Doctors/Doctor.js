import React, { useEffect, useState } from 'react';
import DoctorsDetail from '../DoctorsDetail/DoctorsDetail';
import './Doctor.css'

const Doctor = () => {
    const [doctors,setDoctors]=useState([]);

    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div className='doctor-container'>
            <h2> We have best Doctors in country</h2>
            <h6>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</h6>
           
           <div className='doctors-list'> 
             {
                doctors.map(doctor=>
                      
                        <DoctorsDetail  key={doctor.id} doctor={doctor}></DoctorsDetail>
                      
                    )
             } 
             </div>   
      
        </div>
    );
};

export default Doctor;