import React from 'react';
import Navbar from '../components/Navbar';
import Heroarea from '../components/Heroarea';
import Footer from '../components/Footer';
import AboutUsMessage from '../components/AboutUsMessage';
import ContactForm from '../components/ContactForm';


const AboutUs = () => {

  let theHeadline = "تواصل معنا";

  return (
    <div className='main_home_container' >

    <div className="main_contact_page">

   

      <Navbar /> 

      <Heroarea theHeadline={theHeadline} />

    </div>

    <ContactForm />

<Footer />



    </div>
  )
}

export default AboutUs