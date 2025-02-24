import React, { Component } from 'react'
import ContactDescription from '../contact-us/contactDescription';
import ContactForm from '../contact-us/contactForm';


const ContactPage: React.FC = () => {
    return (
      <div className='min-h-screen py-4'>
       <ContactDescription/>
       <ContactForm/>
       
      </div>
    );
  };
  
  export default ContactPage;
