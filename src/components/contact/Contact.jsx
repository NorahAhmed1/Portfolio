import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiTwitterLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2b7ua6g', 'template_r5czi0m', form.current, 'MKfclIm1t2YaDGO1K');
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <artile className="contact__option">
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>norahahmed1990@gmail.com</h5>
            <a href="mailto:norahahmed1990@gmail.com" target='_blank'>Send a message</a>
          </artile>
          <artile className="contact__option">
            <RiTwitterLine className='contact__option-icon' />
            <h4>Twitter</h4>
            <h5>@norahahmedS</h5>
            <a href="https://twitter.com/messages/compose?recipient_id=1527075312886071296" target='_blank'>Send a message</a>
          </artile>
          <artile className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+966-555-111-559</h5>
            <a href="https://api.whatsapp.com/send?phone=966555111559" target='_blank'>Send a message</a>
          </artile>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Massage' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Massage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact


