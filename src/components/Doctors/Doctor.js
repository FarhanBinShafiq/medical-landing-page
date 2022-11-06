import React, { useEffect, useState } from 'react';
import DoctorsDetail from '../DoctorsDetail/DoctorsDetail';
import './Doctor.css'

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <>

            <div className='doctor-top-part'>
               
                <h1>Specalized Doctors</h1>
            </div>

             <div className='doctor-container'>


                <h2> We have best Doctors in country</h2>
                 
                <div className='doctors-list'>
                    {
                        doctors.map(doctor =>

                            <DoctorsDetail key={doctor.id} doctor={doctor}></DoctorsDetail>

                        )
                    }
                </div>

            </div> 
        </>
    );
};

export default Doctor;