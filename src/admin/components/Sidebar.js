import React, {useEffect, useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SideBarItem from './SidebarItem';
import './Sidebar.css';
import LogoutIcon from '../assets/icons/logout.svg';
import {auth , signOut} from '../../firebase';



function SideBar ({ menu }) {

    let navigate = useNavigate();
    const location = useLocation();

    const [active, setActive] = useState(1);

    useEffect(() => {
        menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [location.pathname])

    const __navigate = (id) => {
        setActive(id);
    }

   



    const logoutUser = () => {

        localStorage.removeItem("allowed_sahla_admin");
    
        signOut(auth).then(() => {
    
          navigate('/dashboard');
          
          }).catch((error) => {
           
          });
    
          window.location.reload();
    }


    return(
        <nav className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-logo-container'>

              
                 <Link to="/">
                 <img
                        src={'/images/icons/logo-white.jpg'}
                        alt="logo" />
                 </Link>
                   
             
                   
                </div>

                <div className='sidebar-container'>
                    <div className='sidebar-items'>
                        {menu.map((item, index) => (
                            <div key={index} onClick={() => __navigate(item.id)}>
                                <SideBarItem
                                    active={item.id === active}
                                    item={item} />
                            </div>
                        ))}
                    </div>

                    <div className='sidebar-footer' onClick={() => logoutUser() } >
                    
                        <img 
                            src={LogoutIcon}
                            alt='icon-logout'
                            className='sidebar-item-icon' />
                                <span className='sidebar-item-label'>تسجيل خروج</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;