import React, {useState, useEffect} from 'react';
import { getDocs , collection , db , setDoc , doc , deleteDoc } from '../../firebase';
import SideBar from '../components/Sidebar';
import sidebar_menu from '../components/sidebar-menu';


function Places (  ) {
  
    const [ supportedPlacesArray , setSupportedPlacesArray ] = useState([]);
    const [ categoriesArray , setCategoriesArray ] = useState([]);

    const [addShow , setAddShow] = useState(false);
    const [showTable , setTableShow] = useState(true);

    const [updateShow , setUpdateShow] = useState(false);
    const [ deleteShow , setDeleteShow] = useState(false);

    const [success , setSuccess ] = useState(false);

    const [error , setError ] = useState('');

    const [ placeName , setPlaceName ] = useState('');
    const [placeDesc , setPlaceDesc ] = useState('');
    const [placeStatus , setPlaceStatus ] = useState('');
    const [placePhoto , setPlacePhoto ] = useState('');
    const [ placeMap , setPlaceMap ] = useState('');
    const [ productCategory, setProductCategory ] = useState('');
   
    // photo url
    const [placePhotos , setPlacePhotos ] = useState([]);
    const [photoUrl , setPhotoUrl] = useState('');


    const [ placeId , setPlaceId ] = useState('');


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

    const pushIntoPhotos = ( param ) => {

      setPlacePhotos(oldArray => [...oldArray, param]);
      setPhotoUrl('');
     
    }


    
  useEffect(  () => {

    const getPlacesData = async () => { 
      const querySnapshot = await getDocs(collection(db, "places"));
      const placesdataarray = querySnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }));
        
      setSupportedPlacesArray(placesdataarray);
     
    }
    getPlacesData();
  } , []);

  useEffect(  () => {

    const getCategoriesData = async () => { 
      const querySnapshot = await getDocs(collection(db, "categories"));
      const usersDataArray = querySnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }));
        
      setCategoriesArray(usersDataArray);
     
    }
    getCategoriesData();
  } , []);


    const addNewPlace =  async (e) => {

        e.preventDefault();



        if (placeName === ''  ) {
          setError(' يرجى ادخال اسم المكان ');
    }
    

        if (productCategory === ''  ) {
          setError(' يرجى ادخال فئة المكان ');
    }
    
    if (placeDesc === ''  ) {
    setError('  يرجى ادخال وصف المكان  ');
    }
    
    if (placePhoto === ''  ) {
    setError('  يرجى ادخال صورة المكان  ');
    }
    
    if (placeMap === ''  ) {
    setError('  يرجى ادخال ماب المكان  ');
    }
    
    if (placeStatus === ''  ) {
    setError('  يرجى ادخال حالة المكان  ');
    }
    

    
        if (placeName !== '' && placeDesc !== '' && placePhoto !== '' && productCategory !== '' && placeStatus !== '' && placeMap !== '' ) {

            const places = await setDoc(doc(db, "places", makeid(20)), {

              place_name: placeName,
              place_desc: placeDesc,
              place_photo: placePhoto,
              place_category: productCategory,
              place_photos: placePhotos,
              place_map : placeMap,
              place_status: placeStatus,

             
              });

            
                setSuccess(true);
                setError('');

                setTimeout(() => {
                    setSuccess('');
                    window.location.reload();
                } , 1350);

             

        }
    }

    const updateShownMethod = ( name , desc , category , map   , image ,  status , id ) => {

        setPlaceName(name);
        setPlaceDesc(desc);
        setProductCategory(category);
        setPlaceMap(map);
        setPlacePhoto(image);
        setPlaceStatus(status);
        setPlaceId(id);
    
    
    
        determineShow('update');
      }

      const deleteShowMethod = ( id ) => {

        setPlaceId(id);

        determineShow('delete');
      }

    const determineShow = ( param ) => {

        switch(param) {
            
            case 'show':
                setPlaceName('');
                setPlaceDesc('');
                setPlaceMap('');
                setProductCategory('');
                setPlacePhoto('');
                setPlaceStatus('');
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
        const docRef = doc(db, "places", placeId);
    
    const data = {


        place_name: placeName,
        place_desc: placeDesc,
        place_photo: placePhoto,
        place_category: productCategory,
        place_status: placeStatus,
        // place_photos: placePhotos,
        place_map : placeMap,
    };
    
    if (placeName === ''  ) {
        setError(' يرجى ادخال اسم المكان ');
  }
  

      if (productCategory === ''  ) {
        setError(' يرجى ادخال فئة المكان ');
  }
  
  if (placeDesc === ''  ) {
  setError('  يرجى ادخال وصف المكان  ');
  }
  
  if (placePhoto === ''  ) {
  setError('  يرجى ادخال صورة المكان  ');
  }
  
  if (placeMap === ''  ) {
  setError('  يرجى ادخال ماب المكان  ');
  }
  
  if (placeStatus === ''  ) {
  setError('  يرجى ادخال حالة المكان  ');
  }


    if (error === '') {
        setDoc(docRef, data)
    
        setSuccess(true);
        setTimeout(() => {
            setSuccess('');
            determineShow('show');
        } , 1350);
    }

  
    
    
      }

      const deleteRecord = async (e) => {
        e.preventDefault();
      
        await deleteDoc(doc(db, "places", placeId));
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

                <h2 className='admin_headline' > Add New Place </h2>
                <div className='dashboard-content-search'>
                    
                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } > See All Places </button>
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
                          
                <form onSubmit={addNewPlace} >

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> Place Name</label>
               
                <input value={placeName} onChange={ (e) => setPlaceName(e.target.value)  } type="text" id='name' className="input_form" placeholder='Place name ..' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> Place Description </label>
               
                <input value={placeDesc} onChange={ (e) => setPlaceDesc(e.target.value)  } type="text" id='name' className="input_form" placeholder='Place desc..' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> Place Category </label>
               
            <select required name="category" id="category" value={productCategory} className="input_form" onChange={(e) => {
        const selectedCateogry = e.target.value;
        setProductCategory(selectedCateogry);
      }} >
      <option value=""   hidden>Choose Categroy </option>
      {categoriesArray && (
        categoriesArray.map(( {name } ) => (
         
            <option value={name}> {name} </option>

        ))
      )}
      </select>

            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> Place Status </label>
               
            <select required name="category" id="category" value={placeStatus} className="input_form" onChange={(e) => {
        const selectedStatus = e.target.value;
        setPlaceStatus(selectedStatus);
      }} >

      <option value=""   hidden>Choose Status </option>

      <option value="most_popular">  Most Popular </option>
      <option value="star"> Star  </option>
      <option value="new">  New  </option>

     
      </select>

            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> Place Image </label>
               
                <input value={placePhoto} onChange={ (e) => setPlacePhoto(e.target.value)  } type="text" id='name' className="input_form" placeholder='Place Image ...' />
            </div>

     


            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   Photos List </label>
               
                <input value={photoUrl} onChange={ (e) => setPhotoUrl(e.target.value)  } type="text" id='name' className="input_form" placeholder=' Add photos...' />

                <div className="dashbord-header-btn_2 w-80 mt-1" onClick={() => pushIntoPhotos(photoUrl) } > Add Photo </div>

            </div>

           


            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">    Location On Map </label>
               
                <input required value={placeMap} onChange={ (e) => setPlaceMap(e.target.value)  } type="text" id='name' className="input_form" placeholder=' Location On Map...' />
            </div>



     

            <button  type='submit' className="dashbord-header-btn_2 w-80">Add Place </button>


            </form>
                </>

            )}
            
            {updateShow && (
              <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline'  > Edit  Place </h2>
                <div className='dashboard-content-search'>
                    
                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } > See All Places </button>
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
            <label htmlFor="name" className="label_form mx-1 mb-1"> Place Name</label>
               
                <input value={placeName} onChange={ (e) => setPlaceName(e.target.value)  } type="text" id='name' className="input_form" placeholder='Place name ..' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> Place Description </label>
               
                <input value={placeDesc} onChange={ (e) => setPlaceDesc(e.target.value)  } type="text" id='name' className="input_form" placeholder='Place desc..' />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> Place Category </label>
               
            <select required name="category" id="category" value={productCategory} className="input_form" onChange={(e) => {
        const selectedCateogry = e.target.value;
        setProductCategory(selectedCateogry);
      }} >
      <option value=""   hidden > Choose Categroy </option>
      {categoriesArray && (
        categoriesArray.map(( {name } ) => (
         
            <option value={name}> {name} </option>

        ))
      )}
      </select>

            </div>


            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1"> Place Image </label>
               
                <input value={placePhoto} onChange={ (e) => setPlacePhoto(e.target.value)  } type="text" id='name' className="input_form" placeholder='Place Image ...' />
            </div>



            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">  Photos List </label>
               
                <input value={photoUrl} onChange={ (e) => setPhotoUrl(e.target.value)  } type="text" id='name' className="input_form" placeholder=' Add Photo  ...' />

                <div className="dashbord-header-btn_2 w-80 mt-1" onClick={() => pushIntoPhotos(photoUrl) } > Add Photo </div>

            </div>

      


            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   Location on map </label>
               
                <input value={placeMap} onChange={ (e) => setPlaceMap(e.target.value)  } type="text" id='name' className="input_form" placeholder='Location on map...' />
            </div>



     

            <button  type='submit' className="dashbord-header-btn_2 w-80"> Edit Place </button>


            </form>
                </>

            )}
            
            {deleteShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline' > Delete Place </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } > See All Places </button>
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

              
          

            <button className="dashbord-header-btn_2 w-80 bg_red" type='submit'  > Delete Place </button>


            </form>
                </>

            )}

            {showTable && (
                <>
                <div className='dashboard-content-header'>
                    <h2 className='admin_headline' >  Lists  </h2>
                    <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('add') } >  Add New Place  </button>
                    </div>   
                   
                </div>

                {supportedPlacesArray && (
                    <table className='admin_table_dashboard' >
                    <thead>
                        
                        <th className='table_item' >  Place name </th>
                        <th className='table_item' >  Place category </th>
                        <th className='table_item'> Place image  </th>

                        <th className='table_item'> Edit \ Delete </th>

                    </thead>

                    <tbody>

                        {supportedPlacesArray.map((item , i) => (
                            <tr key={i} >

                         
                            <td className='table_item_sm' > {item.place_name} </td>
                            <td className='table_item_sm' > {item.place_category} </td>
                            <td    > 
                                <img src={item.place_photo} alt="" className="icon_big" />
                             </td>

                          
                            <td className='d-flex-c' >

                            <button className="edit_btn_admin" onClick={() => updateShownMethod(  item.place_name , item.place_desc , item.place_category  , item.place_map , item.place_photo ,  item.id   )  }  > Edit </button>

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

export default Places;