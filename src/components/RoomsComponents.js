import React from 'react'
import { Link } from 'react-router-dom'

const RoomsComponents = () => {
  return (
    <div className='mt-5' >

<div className="grid_rooms">

<Link to="/buildings/1/1" >

<div className="single_room">

  <img src="/images/icons/teaching.png" className='room_img' alt="" />
  <h1> القاعة الاول </h1>

  <div className="d-flex-c f-sp room_div">

    <div className='d-flex-c' >
    <img src="/images/icons/frequency.png" className='icon_icon' alt="" /> 
    <p className='main_para' >✅</p>
    </div>

    <div className='d-flex-c' >
    <img src="/images/icons/graduated.png" className='icon_icon' alt="" /> 
    <p className='main_para' > 24 </p>
    </div>
 

  

  </div>

  <p className="number_building"> F121 </p>

  </div>

 </Link>


  <Link to="/buildings/2/2" >
  
  <div className="single_room">

<img src="/images/icons/teaching.png" className='room_img' alt="" />
<h1> القاعة الاول </h1>

<div className="d-flex-c f-sp room_div">

  <div className='d-flex-c' >
  <img src="/images/icons/frequency.png" className='icon_icon' alt="" /> 
  <p className='main_para' >✅</p>
  </div>

  <div className='d-flex-c' >
  <img src="/images/icons/graduated.png" className='icon_icon' alt="" /> 
  <p className='main_para' > 24 </p>
  </div>




</div>

<p className="number_building"> F121 </p>

</div>

      </Link>

      <Link to="/buildings/3/3" >

      <div className="single_room">

<img src="/images/icons/teaching.png" className='room_img' alt="" />
<h1> القاعة الاول </h1>

<div className="d-flex-c f-sp room_div">

  <div className='d-flex-c' >
  <img src="/images/icons/frequency.png" className='icon_icon' alt="" /> 
  <p className='main_para' >✅</p>
  </div>

  <div className='d-flex-c' >
  <img src="/images/icons/graduated.png" className='icon_icon' alt="" /> 
  <p className='main_para' > 24 </p>
  </div>




</div>

<p className="number_building"> F121 </p>

</div>

      </Link>

      <Link to="/buildings/4/4" >

      <div className="single_room">

<img src="/images/icons/teaching.png" className='room_img' alt="" />
<h1> القاعة الاول </h1>

<div className="d-flex-c f-sp room_div">

  <div className='d-flex-c' >
  <img src="/images/icons/frequency.png" className='icon_icon' alt="" /> 
  <p className='main_para' >✅</p>
  </div>

  <div className='d-flex-c' >
  <img src="/images/icons/graduated.png" className='icon_icon' alt="" /> 
  <p className='main_para' > 24 </p>
  </div>




</div>

<p className="number_building"> F121 </p>

</div>

      </Link>

  </div>

    </div>
  )
}

export default RoomsComponents