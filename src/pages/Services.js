import React from 'react';
import Navbar from '../components/Navbar';
import Heroarea from '../components/Heroarea';
import Footer from '../components/Footer';
import ServicesCategories from '../components/ServicesCategories';


const Services = () => {

  let theHeadline = "أبرز الخدمات";

  return (
    <div className='main_home_container' >

    <div className="main_services_page">

   

      <Navbar /> 

      <Heroarea theHeadline={theHeadline} />

    </div>

    <ServicesCategories />

<Footer />



    </div>
  )
}

export default Services