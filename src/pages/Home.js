import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import Heroarea from '../components/Heroarea';
import HomeMessage from '../components/HomeMessage';
import Footer from '../components/Footer';
import BuildingsComponent from '../components/BuildingsComponent';



const Home = () => {

    let theHeadline = "خدماتنا تتحدث عننا";

  return (
    <div className='main_home_container' >

    <div className="main_area_page">

   

      <Navbar /> 

      <Heroarea theHeadline={theHeadline} />

    </div>

    <HomeMessage />

    <BuildingsComponent />

<Footer />



    </div>
  )
}

export default Home