import React, { useEffect } from 'react';
import {   Navigate } from 'react-router-dom';
import './Admin.css';



function Admin ( {setAdminActive} ) {

    useEffect(( ) => {
        setAdminActive(true)
    } , []);

    const openInNewTab = url => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };

    const user = JSON.parse(localStorage.getItem("user"));

  return(
   
     <div className='dashboard-content' >

     {user ? (
      <div className="dashboard-content-container ">

<div className="d-flex-c f-sp">

<h1 className="admin_headline">تفاصيل المتجر</h1>
<button className="dashbord-header-btn_2"> التعديل</button>
</div>

<div className="d-grid g-col-2 grid_admin_items mt-1">

<h1 className="admin_info_headline">اسم الكوفيه</h1>
<h1 className="admin_info_headline span_bold">ميل</h1>

<h1 className="admin_info_headline">وصف الكوفيه</h1>
<h1 className="admin_info_headline span_bold">قهوة مختصة</h1>

<h1 className="admin_info_headline">لوجو المتجر</h1>
<h1 className="admin_info_headline span_bold">ميل</h1>

<h1 className="admin_info_headline"> مواعيد العمل</h1>
<h1 className="admin_info_headline span_bold">من 7 ص حتى 12 م</h1>

<h1 className="admin_info_headline">  العنوان</h1>
<h1 className="admin_info_headline span_bold"> 
  <img src="/images/social_icons/location-pin.png" onClick={() => openInNewTab('https://goo.gl/maps/NSqDEKhggJC7GVxC9')} alt="" className="icon_mid cu_pointer" /> 
  </h1>

<h1 className="admin_info_headline">  انستقرام</h1>
<h1 className="admin_info_headline span_bold">  
<img src="/images/social_icons/instagram.png" onClick={() => openInNewTab('https://instagram.com/fayruza.ksa?igshid=YmMyMTA2M2Y=')} className="icon_mid cu_pointer" alt="" />
</h1>

<h1 className="admin_info_headline">  سناب</h1>
<h1 className="admin_info_headline span_bold"> 
<img src="/images/social_icons/snapchat.png" onClick={() => openInNewTab('https://instagram.com/fayruza.ksa?igshid=YmMyMTA2M2Y=')} className="icon_mid cu_pointer" alt="" />
 </h1>

</div>

</div>
      ) : (
        <Navigate to="/admin/login" replace /> 
      )}

    
     
     </div>
   
  )
}

export default Admin;