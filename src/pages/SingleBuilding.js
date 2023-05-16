import React from 'react';
import Navbar from '../components/Navbar';
import Heroarea from '../components/Heroarea';
import Footer from '../components/Footer';
import RoomsComponents from '../components/RoomsComponents';


const SingleBuilding = () => {

    let theHeadline = "المبنى واحد";

  return (
    <div className='main_home_container' >

    <div className="main_area_page">

   

      <Navbar /> 

      <Heroarea theHeadline={theHeadline} />

    </div>

    <div className="mt-5 mx-3 d-flex-c f-sp info_about">

<h1 className="section_headline mt-1">   القاعات المتوفرة </h1>


</div>

    <RoomsComponents />

<Footer />



    </div>
  )
}

export default SingleBuilding