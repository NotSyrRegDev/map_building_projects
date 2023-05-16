import React from 'react';
import Navbar from '../components/Navbar';
import Heroarea from '../components/Heroarea';
import Footer from '../components/Footer';
import AboutUsMessage from '../components/AboutUsMessage';


const AboutUs = () => {

  let theHeadline = "معلومات عننا";

  return (
    <div className='main_home_container' >

    <div className="main_about_page">

   

      <Navbar /> 

      <Heroarea theHeadline={theHeadline} />

    </div>

    <AboutUsMessage />

<Footer />



    </div>
  )
}

export default AboutUs