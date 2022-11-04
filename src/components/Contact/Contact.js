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
                <div className='form-nav-top'>
                    <h3>Contact</h3>

                    <p>For Appoinment call or email us.</p>

                </div>

                <div className='conatct-form'>
                    <form action="">
                        <input className='conatct-input' type="text" placeholder='Your Full Name' />
                        < input className='conatct-input' type="text" placeholder=' Your Phone Number' />
                        <input className='conatct-input' type="text" placeholder='Your Query Topic' />
                        <input className='conatct-input' type="text" placeholder='Your Email Address' />
                        <textarea name="comments" className='contact-text-area' placeholder='Write your message here'></textarea><br />
                        <button className='contact-submit-btn'>Send Your Message</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;