import React from 'react';
import neurology from '../../../images/neourology.jpg'
import './Neurology.css'

const Neorology = () => {
    return (
        <div className='neurology-contaniner'>
            <div className='neurology-detail'>
                <h3>Neurological Deparments</h3>
                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
                <div className='neurology-options'>
                    <div className='neurology-checkup'>

                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <p>PRIMARY CARE</p>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>

                    <div className='neurology-checkup'>

                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <p>HEART RATE</p>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>

                    <div className='neurology-checkup'>

                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <p>SYMPTOM CHECK</p>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                    <div className='neurology-checkup'>

                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <p>LAB TEST</p>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='neurology-img'>
                <img src={neurology} alt="" />
            </div>

        </div>
    );
};

export default Neorology;