import React , {useState} from 'react';
import {Link  } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {


 

  return (

    <div className="building_navbar">

 

    <div className="list_div">

      <ul className="ul_flex">

      <li>
        
       
        <Link to="/"> الرئيسية </Link>
       
      </li>

      <li>
       
        <Link to="/services"> الخدمات </Link>
       
      </li>

      <li>
      <Link to="/about"> عننا </Link>
      </li>

      <li>
      <Link to="/contact">  
          <button className="btn main_btn "> تواصل معنا </button>
          </Link>
      </li>

      </ul>

    </div>

    <div className="logo_div">
      <img src="/images/icons/logo.png" className='icon_small' alt="" />
    </div>

    </div>
  
  )
}

export default Navbar