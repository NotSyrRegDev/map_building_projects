import React, {useState, useEffect} from 'react';
import { getDocs , collection , db , setDoc , doc , deleteDoc } from '../../firebase';
import SideBar from '../components/Sidebar';
import sidebar_menu from '../components/sidebar-menu';


function Services (  ) {
  

    const [ servicesArray , setServicesArray ] = useState([]);

    const [ placesArray , setPlacesArray ] = useState([]);

    const [addShow , setAddShow] = useState(false);
    const [showTable , setTableShow] = useState(true);

    const [updateShow , setUpdateShow] = useState(false);
    const [ deleteShow , setDeleteShow] = useState(false);

    const [success , setSuccess ] = useState(false);

    const [error , setError ] = useState('');

    const [ serviceName , setServiceName ] = useState('');
    const [ servicePrice , setServicePrice ] = useState('');
    const [ servicePlace , setServicePlace ] = useState('');
    const [ guiderImage , setGuiderImage ] = useState('');

    const [catId , setCatId ] = useState('');


    const makeid = (length) =>  {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

    
  useEffect(  () => {

    const getServicesData = async () => { 
      const querySnapshot = await getDocs(collection(db, "services"));
      const usersDataArray = querySnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }));
        
      setServicesArray(usersDataArray);
     
    }
    getServicesData();
  } , []);

  useEffect(  () => {

    const getCategoriesData = async () => { 
      const querySnapshot = await getDocs(collection(db, "places"));
      const usersDataArray = querySnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }));
        
      setPlacesArray(usersDataArray);
     
    }
    getCategoriesData();
  } , []);


    const addNewService =  async (e) => {

        e.preventDefault();
     

        if (serviceName === ''  ) {
                    setError('يرجى ادخال اسم الخدمة')
            }

        if (servicePrice === ''  ) {
                        setError('يرجى ادخال سعر الخدمة')
        }

        if (servicePlace === ''  ) {
                        setError('يرجى ادخال مكان الخدمة')
        }

        if (guiderImage === ''  ) {
                        setError('يرجى ادخال صورة مقدم الخدمة')
        }

            
        if (serviceName !== '' && servicePrice !== '' && servicePlace !== '' && guiderImage !== ''  ) {

            const services = await setDoc(doc(db, "services", makeid(20)), {
                service_name: serviceName,
                service_price: servicePrice,
                service_place: servicePlace,
                guider_image: guiderImage,
             
              });

            
                setSuccess(true);
                setError('');

                setTimeout(() => {
                    setSuccess('');
                    window.location.reload();
                } , 1350);

             

        }
    }

    const updateShownMethod = ( service_name ,  service_price , guider_image , service_place , id  ) => {

        setServiceName(service_name);
        setServicePrice(service_price);
        setServicePlace(service_place);
        setGuiderImage(guider_image);
     
        setCatId(id);
    
    
    
        determineShow('update');
      }

      const deleteShowMethod = (name , icon  , id) => {

     
        setCatId(id);
            
        determineShow('delete');
      }

    const determineShow = ( param ) => {

        switch(param) {
            
            case 'show':
                setServiceName('');
                setServicePlace('');
                setServicePrice('');
                setGuiderImage('');
                setTableShow(true);
                setAddShow(false);
                setUpdateShow(false);
                setDeleteShow(false);
                break;

            case 'update':
                setTableShow(false);
                setAddShow(false);
                setUpdateShow(true);
                setDeleteShow(false);
                break;

            case 'delete':
                setTableShow(false);
                setAddShow(false);
                setUpdateShow(false);
                setDeleteShow(true);
                break;

            case 'add':
                setTableShow(false);
                setAddShow(true);
                setUpdateShow(false);
                setDeleteShow(false);
                break;
        }
    }

    const updateRecord = async (e) => {
        e.preventDefault();
        const docRef = doc(db, "services", catId);
    
    const data = {
        service_name: serviceName,
        service_price: servicePrice,
        service_place: servicePlace,
        guider_image: guiderImage,
    };
    
    setDoc(docRef, data)
    
    setSuccess(true);
    setTimeout(() => {
        setSuccess('');
        determineShow('show');
    } , 1350);
    
    
      }

      const deleteRecord = async (e) => {
        e.preventDefault();
      
        await deleteDoc(doc(db, "services", catId));
        setSuccess(true);
        setTimeout(() => {
            setSuccess('');
            determineShow('show');
        } , 1350);
      }
  
      


    return(
        <div className="main_admin">

        <div className="sidebar_admin">
        <SideBar menu={sidebar_menu} />
        </div>
    
        <div className="content_admin">

        <div className='dashboard-content'>
            

            <div className='dashboard-content-container'>

            {addShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline' > Add New Service </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') }  > See All Services </button>
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
                          
                <form onSubmit={addNewService} >

            <div className="action_form_div">
            <div className="d-flex-c">
            <label htmlFor="name" className="label_form mx-1 mb-1">  Service Name </label>
                <img src="/images/icons/lightbulb.png" alt="" className="icon_small" />
                </div>
               
                <input value={serviceName} onChange={ (e) => setServiceName(e.target.value)  } type="text" id='name' className="input_form" />
            </div>

            <div className="action_form_div">
            <div className="d-flex-c">
            <label htmlFor="name" className="label_form mx-1 mb-1">  Service Price </label>
                <img src="/images/icons/lightbulb.png" alt="" className="icon_small" />
                </div>
               
                <input value={servicePrice} onChange={ (e) => setServicePrice(e.target.value)  } type="text" id='name' className="input_form" />
            </div>

            <div className="action_form_div">
            <div className="d-flex-c">
            <label htmlFor="name" className="label_form mx-1 mb-1">  Guider Image </label>
                <img src="/images/icons/lightbulb.png" alt="" className="icon_small" />
                </div>
               
                <input value={guiderImage} onChange={ (e) => setGuiderImage(e.target.value)  } type="text" id='name' className="input_form" />
            </div>

            <div className="action_form_div">
            <div className="d-flex-c">
            <label htmlFor="name" className="label_form mx-1 mb-1">  Place  </label>
                <img src="/images/icons/lightbulb.png" alt="" className="icon_small" />
                </div>

                <select required name="category" id="category" value={servicePlace} className="input_form" onChange={(e) => {
                const selectedPlace = e.target.value;
                setServicePlace(selectedPlace);
            }} >
            <option value=""   hidden>Choose Categroy </option>
            {placesArray && (
                placesArray.map(( {place_name } ) => (
                
                    <option value={place_name}> {place_name} </option>

                ))
            )}
            </select>
               
             
            </div>

     

            <button  type='submit' className="dashbord-header-btn_2 w-80"> Add New Service </button>


            </form>
                </>

            )}
            
            {updateShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline' > Add New Service </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } > See All Services</button>
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
                          
                <form onSubmit={updateRecord} >

                <div className="action_form_div">
            <div className="d-flex-c">
            <label htmlFor="name" className="label_form mx-1 mb-1">  Service Name </label>
                <img src="/images/icons/lightbulb.png" alt="" className="icon_small" />
                </div>
               
                <input value={serviceName} onChange={ (e) => setServiceName(e.target.value)  } type="text" id='name' className="input_form" />
            </div>

            <div className="action_form_div">
            <div className="d-flex-c">
            <label htmlFor="name" className="label_form mx-1 mb-1">  Service Price </label>
                <img src="/images/icons/lightbulb.png" alt="" className="icon_small" />
                </div>
               
                <input value={servicePrice} onChange={ (e) => setServicePrice(e.target.value)  } type="text" id='name' className="input_form" />
            </div>

            <div className="action_form_div">
            <div className="d-flex-c">
            <label htmlFor="name" className="label_form mx-1 mb-1">  Guider Image </label>
                <img src="/images/icons/lightbulb.png" alt="" className="icon_small" />
                </div>
               
                <input value={guiderImage} onChange={ (e) => setGuiderImage(e.target.value)  } type="text" id='name' className="input_form" />
            </div>

            <div className="action_form_div">
            <div className="d-flex-c">
            <label htmlFor="name" className="label_form mx-1 mb-1">  Place  </label>
                <img src="/images/icons/lightbulb.png" alt="" className="icon_small" />
                </div>

                <select required name="category" id="category" value={servicePlace} className="input_form" onChange={(e) => {
                const selectedPlace = e.target.value;
                setServicePlace(selectedPlace);
            }} >
            <option value=""   hidden>Choose Categroy </option>
            {placesArray && (
                placesArray.map(( {place_name } ) => (
                
                    <option value={place_name}> {place_name} </option>

                ))
            )}
            </select>
               
              
            </div>

            <button className="dashbord-header-btn_2 w-80" type='submit' >  Edit Service </button>


            </form>
                </>

            )}
            
            {deleteShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline' > Add New Service </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } > See All Services</button>
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

         

        

            <button className="dashbord-header-btn_2 w-80 bg_red" type='submit'  > Delete Service </button>


            </form>
                </>

            )}

            {showTable && (
                <>
                <div className='dashboard-content-header'>
                    <h2 className='admin_headline' >  Services List </h2>
                    <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('add') } > Add New Service </button>
                    </div>   
                   
                </div>

                {servicesArray && (
                    <table className='admin_table_dashboard' >
                    <thead>
                        <th className='table_item'>#</th>
                        <th className='table_item' > Service Name </th>
                        <th className='table_item'> Service Price </th>
                        <th className='table_item'> Guider Image </th>
                        <th className='table_item'> Edit \ Delete </th>

                    </thead>

                    <tbody>

                        {servicesArray.map((item , i) => (
                            <tr key={i} >

                            <td className='table_item_sm' > {i + 1} </td>
                            <td className='table_item_sm' > {item.service_name} </td>
                            <td className='table_item_sm' > {item.service_price} </td>
                            <td    > 
                                <img src={item.guider_image} alt="" className="icon_big" />
                             </td>
                           
                            <td className='d-flex-c' >
                            <button className="edit_btn_admin" onClick={() => updateShownMethod(item.service_name ,  item.service_price , item.guider_image , item.service_place , item.id )  }  > Edit </button>
                            <button className="delete_btn_admin" onClick={() => deleteShowMethod( item.id ) } > Delete </button>
                            </td>

                        </tr>
                        ))}


                    </tbody>

               
                </table>
                )}

                </>
            )}
                
             

               
            </div>
        </div>

        </div>

        </div>
    )
}

export default Services;