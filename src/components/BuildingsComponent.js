import React from 'react';
import './BuildingsComponent.css';
import { Link } from 'react-router-dom';


const BuildingsComponent = () => {
  return (
    <div className='mt-5' >

        <div className="grid_building">

      <Link to="/buildings/1" >

      <div className="single_building">

        <img src="/images/icons/buildings.png" alt="" />
        <h1> المبنى الاول </h1>

        <p className="number_building"> 1 </p>

        </div>

       </Link>


        <Link to="/buildings/2" >
            <div className="single_building">

            <img src="/images/icons/house.png" alt="" />
            <h1> المبنى الثاني </h1>

            <p className="number_building"> 2 </p>

            </div>

            </Link>

            <Link to="/buildings/3" >

            <div className="single_building">

            <img src="/images/icons/apartment.png" alt="" />
            <h1> المبنى الثالث </h1>

            <p className="number_building"> 3 </p>

            </div>

            </Link>

            <Link to="/buildings/4" >

            <div className="single_building">

            <img src="/images/icons/office-building.png" alt="" />
            <h1> المبنى الرابع </h1>

            <p className="number_building"> 4 </p>

            </div>

            </Link>

        </div>

    </div>
  )
}

export default BuildingsComponent