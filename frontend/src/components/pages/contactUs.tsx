import React, { Component } from 'react'
import ContactDescription from '../pagesdirectory/contact-us/contactDescription';
import ContactForm from '../pagesdirectory/contact-us/contactForm';


const ContactPage: React.FC = () => {
    return (
      <div className='min-h-screen py-4'>
       <ContactDescription/>
       <ContactForm/>
       
      </div>
    );
  };
  
  export default ContactPage;
