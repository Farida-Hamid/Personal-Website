import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Social from "./icons/Social";

import '../style/contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wnl636b', 'template_dsv3dyq', form.current, 'TLsq3yXqPwD3sRmYG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    clear();
  };

  const clear = () => {
    for(let i =0; i<3;i++){
      form.current[i].value = "";
    }
  };

  return (
    <>
      <div className="call">
        <p className="robotic">03. What’s Next?</p>
        <h1 className="contact-title">Get In Touch</h1>
        <p>I’m currently looking for new opportunities; my inbox is always open. Whether 
        you have a question or just want to say hi, I would love to have a conversation!</p>
        
        <div className="social-container"><Social /></div>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="name" 
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          type="text"
          name="message" 
          placeholder="Write me a message"
        />
        <button className="action" type="submit" >Send</button>
      </form>
    </>
  )
}

export default Contact;