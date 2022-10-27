import React from 'react';
import "./DoctorsDetail.css"
 

const DoctorsDetail = (props) => {
    const {name,designation,department,img}=props.doctor;
    return (
        <div className='doctor-detail'>    
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h5>{designation}</h5>
                <p>{department}</p>       
        </div>
    );
};

export default DoctorsDetail;