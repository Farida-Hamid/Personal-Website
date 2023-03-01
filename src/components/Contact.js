import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

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
  };

  return (
    <>
      {/* <h2 className="title">
        <div className="robotic"></div>
        Contact
        <hr></hr>
      </h2> */}

      <div className="call">
        <p className="robotic">03. What’s Next?</p>
        <h1 className="contact-title">Get In Touch</h1>
        <p>I’m not currently looking for any new opportunities, my inbox is
          always open.
          Whether you have a question or just want to say hi, I would love to have a 
          conversation!</p>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
        <input type="submit" value="Send" />
    </form>
    </>
  )
}

export default Contact;