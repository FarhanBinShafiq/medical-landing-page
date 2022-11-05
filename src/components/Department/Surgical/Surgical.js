import React from 'react';
import './Surgical.css'
import surgical from '../../../images/surgical.jpg'
import iconOne from '../../../images/icon-5.png'
import iconTwo from '../../../images/icon-6.png'
import iconThree from '../../../images/icon-7.png'
import iconFour from '../../../images/icon-8.png'


const Surgical = () => {
    return (
        <div className='surgical-contaniner'>
            <div className='neurology-detail'>
                <h3>Surgical Deparments</h3>
                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
                <div className='surgical-options'>
                    <div className='surgical-checkup'>

                        <div className='icon'>
                            <img src={iconOne} alt="" />
                        </div>
                        <div>
                            <h6>PRIMARY CARE</h6>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>

                    <div className='surgical-checkup'>

                        <div className='icon'>
                            <img src={iconTwo} alt="" />
                        </div>
                        <div>
                            <h6>Lab Test</h6>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>

                    <div className='surgical-checkup'>

                        <div className='icon'>
                            <img src={iconThree} alt="" />
                        </div>
                        <div>
                            <h6>SYMPTOM CHECK</h6>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                    <div className='surgical-checkup'>

                        <div className='icon'>
                            <img src={iconFour} alt="" />
                        </div>
                        <div>
                            <h6>Heart Rate</h6>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                </div>
            </div>


             <div className='surgical-img'>
                <img src={surgical} alt="" />
            </div> 

        </div>
    );
};

export default Surgical;