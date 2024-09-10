import React from 'react';
import '../contact.css'; 

const Contact = () => {
  return (
    <section id="contact">
      <p className="section-container-p1">Get in Touch</p>
      <h1 className="Name">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
          {/* <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
        Go to Gmail
      </a> */}
            {/* <a href="mailto:vsanjaykumar30@gmail.com">
        Send Email to vsanjaykumar30@gmail.com
      </a> */}
       <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=vsanjaykumar30@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Send Email
      </a>

          </p>
        </div>
        <div className="contact-info-container">
          <img
            src="/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/sanjay-kumar-v-64896a220?original_referer=">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
