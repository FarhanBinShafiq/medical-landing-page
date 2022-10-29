import React from 'react';
import cardiology from '../../../images/cardiology.jpg'
import './Cardiology.css'
import iconOne from '../../../images/icon-5.png'
import iconTwo from '../../../images/icon-6.png'
import iconThree from '../../../images/icon-7.png'
import iconFour from '../../../images/icon-8.png'

const Cardiology = () => {
    return (
        <div className='cardiology-contaniner'>
            <div className='cardiology-detail'>
                <h3>Cardiology Deparments</h3>
                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
                <div className='cardiology-options'>
                    <div className='cardiology-checkup'>

                        <div  className='icon'>
                            <img src={iconOne} alt="" />
                        </div>
                        <div>
                            <p>PRIMARY CARE</p>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>

                    <div className='cardiology-checkup'>

                        <div className='icon'>
                            <img src={iconTwo} alt="" />
                        </div>
                        <div>
                            <p>SYMPTOM CHECK</p>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                    <div className='cardiology-checkup'>

                        <div className='icon'>
                            <img src={iconThree} alt="" />
                        </div>
                        <div>
                            <p>LAB TEST</p>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>

                    <div className='cardiology-checkup'>

                        <div className='icon'>
                            <img src={iconFour} alt="" />
                        </div>
                        <div>
                            <p>HEART RATE</p>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>


                </div>
            </div>


            <div className='cardiology-img'>
                <img src={cardiology} alt="" />
            </div>

        </div>
    );
};

export default Cardiology;