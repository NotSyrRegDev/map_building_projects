import React , {useState} from 'react';
import SideBar from './components/Sidebar';
import sidebar_menu from './components/sidebar-menu';
import './Admin.css';
import LoginComponent from './components/Logincomponent';


const Admin = () => {

 

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  const allowedAdmin = localStorage.getItem('allowed_sahla_admin');

  


  return (
    <>

      <div className='main_admin' >

<div className="sidebar_admin">
<SideBar menu={sidebar_menu} />
</div>

<div className="content_admin">
<div className="dashboard-content">

{allowedAdmin ? (
<div className="dashboard-content-container ">

<h1 className="admin_headline"> Project Details  </h1>

<div className="d-grid g-col-2 grid_admin_items mt-1">


<br /><br />

<h1 className="admin_info_headline"> Project Name </h1>
<h1 className="admin_info_headline span_bold"> Marshadie </h1>


<br /><br />

<h1 className="admin_info_headline"> Project Description </h1>
<h1 className="admin_info_headline span_bold"> 
An application specialized in tourism in Jizan, and its main function is to connect the tourist with a guide

 </h1>

<br /><br />

<h1 className="admin_info_headline">  Website Url </h1>
<h1 className="admin_info_headline span_bold"> 

https://sahla-application.web.app/

</h1>



</div>

</div>
) : (
    <LoginComponent />
)}

</div>
</div>
   

   
</div>
    ) 



          

    </>
 
  )
}

export default Admin