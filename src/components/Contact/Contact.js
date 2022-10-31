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
             

            <div className='form-nav'>
                <div>
                    <h3>Contact With Us</h3>

                    <p>For Appoinment call us or email.</p>

                </div>

                <div className='conatct-form'>
                    <form action="">
                        <div className='form-first'>
                            <input type="text" placeholder='Your First Name' />  <br/>
                            <input type="text" placeholder='Your Last Name' />    <br/>
                           < input type="text" placeholder=' Your Phone Number' />   <br/>
                          
                        </div>

                        <div className='form-second'>
                            <input type="text" placeholder='Your Query Topic' /><br/>
                            <input type="text" placeholder='Your Email Address' /> <br/>
                            <textarea name="comments" placeholder='Write your message here'></textarea>
                                                           
                        </div>



                   
                        <button>Send Your message</button>
                    </form>
                </div>
            </div> 

        </div>
    );
};

export default Contact;