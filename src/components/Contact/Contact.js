import React from 'react';
import Cards from '../Shared/Cards/Cards';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className='contact-top'>
                <p>Contact Us</p>
                <h6>Get in Touch</h6>
            </div>

            <Cards></Cards>
             

            <div className='form-navbar'>
                <div>
                    <h3>Contact With Us</h3>

                    <p>For Appoinment call us or email.</p>

                </div>

                <div className='conatct-form'>
                    <form action="">
                        <div className='form-first'>
                            <input className='conatct-input' type="text" placeholder='Your First Name' />  <br/>
                            <input className='conatct-input'  type="text" placeholder='Your Last Name' />    <br/>
                           < input className='conatct-input'  type="text" placeholder=' Your Phone Number' />   <br/>
                          
                        </div>

                        <div className='form-second'>
                            <input className='conatct-input'  type="text" placeholder='Your Query Topic' /><br/>
                            <input className='conatct-input'  type="text" placeholder='Your Email Address' /> <br/>
                            <textarea name="comments" className='contact-text-area' placeholder='Write your message here'></textarea>
                                                           
                        </div>



                   
                        <button className='contact-submit-btn'>Send Your message</button>
                    </form>
                </div>
            </div> 

        </div>
    );
};

export default Contact;