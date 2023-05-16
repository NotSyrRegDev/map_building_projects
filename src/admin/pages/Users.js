import React, {useState, useEffect} from 'react';
import { getDocs , collection , db , deleteDoc , doc  } from '../../firebase';
import SideBar from '../components/Sidebar';
import sidebar_menu from '../components/sidebar-menu';
import LoginComponent from '../components/Logincomponent';


function Users (  ) {
  
    const allowedAdmin = localStorage.getItem('allowed_sahla_admin');

    const [ usersArray , setUsersArray ] = useState([]);

    const [userId , setUserId ] = useState('');

    const [success , setSuccess ] = useState(false);

    const [error , setError ] = useState('');


 
    const [showTable , setTableShow] = useState(true);
    const [deleteShow , setDeleteShow] = useState(false);
    const [viewShow , setViewShow] = useState(false);


    const [ infoArray , setInfoArray ] = useState([]);

  
    
  useEffect(  () => {

    const getReportsData = async () => { 
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersDataArray = querySnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }));
            
      setUsersArray(usersDataArray);
     
    }
    getReportsData();
  } , []);


  const determineShow = ( param ) => {

    switch(param) {
        
        case 'show':

            setViewShow(false);
            setTableShow(true);
            setDeleteShow(false);
            break;



        case 'delete':
            setViewShow(false);
            setTableShow(false);
            setDeleteShow(true);
            break;

        case 'view':
            setViewShow(true);
            setTableShow(false);
            setDeleteShow(false);
            break;


    }
}

const deleteRecord = async (e) => {
    e.preventDefault();
  
    await deleteDoc(doc(db, "users", userId));
    setSuccess(true);
    setTimeout(() => {
        setSuccess('');
        determineShow('show');
    } , 1350);
  }


  const deleteShowMethod = ( id ) => {

  


    setUserId(id); 
    determineShow('delete');
  }

  const viewShowMethod = ( firstName , lastName , gender  , birthDate , phone , email , cateogry , country   ) => {

    setInfoArray([ firstName , lastName , gender , birthDate , phone , email , cateogry , country , birthDate ])

    determineShow('view');
  }


   

    return(
        <div className="main_admin">

    <div className="sidebar_admin">
    <SideBar menu={sidebar_menu} />
    </div>

    <div className="content_admin">
    <div className='dashboard-content'>
            
            {allowedAdmin ? (
                <div className='dashboard-content-container'>

  
          

{showTable && (
    <>
    <div className='dashboard-content-header'>
        <h2 className='admin_headline' > Users  </h2>
          
       
    </div>

    {usersArray && (
        <table className='admin_table_dashboard' >
        <thead>
            
            <th className='table_item' >    Full Name </th>
            <th className='table_item' >    Gender </th>
            <th className='table_item' >    Age </th>
            <th className='table_item' >    Email </th>
            <th className='table_item' >    Role </th>
            <th className='table_item' >    Details </th>
         
  
          

        </thead>

        <tbody>

            {usersArray.map((item , i) => (
                <tr key={i} >

             
                <td className='table_item_sm' > {item.name}   </td>
               
                <td className='table_item_sm' > {item.gender } </td>
                <td className='table_item_sm' > {item.age} </td>
                <td className='table_item_sm' > {item.email} </td>

                <td className='table_item_sm' > {item.signAs } </td>

                <td className='table_item' >    

                        
            <button className="delete_btn_admin" onClick={() => deleteShowMethod(item.id) }  >  Delete </button>
             </td>
            

              
               

            </tr>
            ))}


        </tbody>

   
    </table>
    )}

  
    </>
)}
    

{deleteShow && (
    <>
    <div className='dashboard-content-header'>

    <h2 className='admin_headline' >  Delete User </h2>
    <div className='dashboard-content-search'>

    <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } >All  Users </button>
        </div>           

    </div>

    {error && (
                <>
                <h1 className="my-1 error_headline"> {error} </h1>
                </>
            )}

    {success && (
        <>
            <div className="popup_success">
                <img src="/images/icons/check.png" alt="" />
            </div>
        </>
    )}
              
    <form onSubmit={deleteRecord} >




<button className="dashbord-header-btn_2 w-80 bg_red" type='submit'  > Delete User </button>


</form>
    </>

)}
 


 

   
</div>
            ) : (
                <LoginComponent />
            )}

    
        </div>
    </div>

        </div>
    
    )
}

export default Users;