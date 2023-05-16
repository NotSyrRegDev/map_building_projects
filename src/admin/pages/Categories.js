import React, {useState, useEffect} from 'react';
import { getDocs , collection , db , setDoc , doc , deleteDoc } from '../../firebase';
import SideBar from '../components/Sidebar';
import sidebar_menu from '../components/sidebar-menu';


function Categories (  ) {
  
    const [ categoriesArray , setCategoriesArray ] = useState([]);
 

    const [addShow , setAddShow] = useState(false);
    const [showTable , setTableShow] = useState(true);

    const [updateShow , setUpdateShow] = useState(false);
    const [ deleteShow , setDeleteShow] = useState(false);

    const [success , setSuccess ] = useState(false);

    const [error , setError ] = useState('');

    const [ catName , setCatName ] = useState('');
    const [sectionId , setSectionId ] = useState('');

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

    const getCategoriesData = async () => { 
      const querySnapshot = await getDocs(collection(db, "categories"));
      const usersDataArray = querySnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }));
        
      setCategoriesArray(usersDataArray);
     
    }
    getCategoriesData();
  } , []);


    const addNewCateogry =  async (e) => {

        e.preventDefault();
     

        if (catName === ''  ) {
                    setError('يرجى ادخال اسم المصنف')
            }

            if (sectionId === ''  ) {
                    setError('يرجى ادخال ايقونة المصنف')
            }

            
        if (catName !== '' && sectionId !== ''  ) {

            const categories = await setDoc(doc(db, "categories", makeid(20)), {
                name: catName,
                section_id: sectionId,
             
              });

            
                setSuccess(true);
                setError('');

                setTimeout(() => {
                    setSuccess('');
                    window.location.reload();
                } , 1350);

             

        }
    }

    const updateShownMethod = ( name , icon  , id ) => {

        setCatName(name);
        setSectionId(icon);
     
        setCatId(id);
    
    
    
        determineShow('update');
      }

      const deleteShowMethod = (name , icon  , id) => {
        setCatName(name);
        setSectionId(icon);
     
        setCatId(id);
            
        determineShow('delete');
      }

    const determineShow = ( param ) => {

        switch(param) {
            
            case 'show':
                setCatName('');
                setSectionId('');
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
        const docRef = doc(db, "categories", catId);
    
    const data = {
      name: catName,
      icon: sectionId,
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
      
        await deleteDoc(doc(db, "categories", catId));
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

                <h2 className='admin_headline' > Add New Category </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') }  > See All Categories </button>
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
                          
                <form onSubmit={addNewCateogry} >

            <div className="action_form_div">
            <div className="d-flex-c">
            <label htmlFor="name" className="label_form mx-1 mb-1">  Category Name </label>
                <img src="/images/icons/lightbulb.png" alt="" className="icon_small" />
                </div>
               
                <input value={catName} onChange={ (e) => setCatName(e.target.value)  } type="text" id='name' className="input_form" />
            </div>

            <div className="action_form_div">
                <div className="d-flex-c">
                <label htmlFor="name" className="label_form mx-1 mb-1">  Section Id  </label>
                <img src="/images/icons/tag.png" alt="" className="icon_small" />
                </div>
              
                <input value={sectionId} onChange={ (e) => setSectionId(e.target.value)  } type="text" id='name' className="input_form" />

            </div>

            <button  type='submit' className="dashbord-header-btn_2 w-80"> Add New Category </button>


            </form>
                </>

            )}
            
            {updateShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline' > Add New Cateogry </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } > See All Categories</button>
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
            <label htmlFor="name" className="label_form mx-1 mb-1"> Categoy Name </label>
                <img src="/images/icons/lightbulb.png" alt="" className="icon_small" />
                </div>
               
                <input value={catName} onChange={ (e) => setCatName(e.target.value)  } type="text" id='name' className="input_form" />
            </div>

            <div className="action_form_div">
                <div className="d-flex-c">
                <label htmlFor="name" className="label_form mx-1 mb-1">   Section Id </label>
                <img src="/images/icons/tag.png" alt="" className="icon_small" />
                </div>
              
                <input value={sectionId} onChange={ (e) => setSectionId(e.target.value)  } type="text" id='name' className="input_form" />
            </div>

            <button className="dashbord-header-btn_2 w-80" type='submit' >  Edit Category </button>


            </form>
                </>

            )}
            
            {deleteShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline' > Add New Category </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } > See All Categories</button>
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

         

        

            <button className="dashbord-header-btn_2 w-80 bg_red" type='submit'  > Delete Cateogry </button>


            </form>
                </>

            )}

            {showTable && (
                <>
                <div className='dashboard-content-header'>
                    <h2 className='admin_headline' >  Categories List </h2>
                    <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('add') } > Add New Cateogry </button>
                    </div>   
                   
                </div>

                {categoriesArray && (
                    <table className='admin_table_dashboard' >
                    <thead>
                        <th className='table_item'>#</th>
                        <th className='table_item' > Category Name </th>
                        <th className='table_item'> Section ID </th>
                        <th className='table_item'> Edit \ Delete </th>

                    </thead>

                    <tbody>

                        {categoriesArray.map((item , i) => (
                            <tr key={i} >

                            <td className='table_item_sm' > {i + 1} </td>
                            <td className='table_item_sm' > {item.name} </td>
                            <td className='table_item_sm' > {item.section_id} </td>
                           
                            <td className='d-flex-c' >
                            <button className="edit_btn_admin" onClick={() => updateShownMethod(item.name ,  item.section_id , item.id )  }  > Edit </button>
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

export default Categories;