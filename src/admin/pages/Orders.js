import React, {useState, useEffect} from 'react';
import { getDocs , collection , db , setDoc , doc , deleteDoc } from '../../firebase';
import SideBar from '../components/Sidebar';
import sidebar_menu from '../components/sidebar-menu';


function Orders (  ) {
  
    const [ ordersArray , setOrdersArray ] = useState([]);

    const [customerName , setCustomerName] = useState('');
    const [customerPhone , setCustomerPhone] = useState('');
    const [customerTotalPrice , setCustomerTotalPrice] = useState('');
    const [customerOrder , setCustomerOrder] = useState('');
    const [customerMapRating , setCustomerMapRating] = useState('');
    const [customerServiceRating , setCustomerServiceRating] = useState('');

    const showOrderMethod = ( name , phone , price , order , mapRating , serviceRating ) => {
        setCustomerName(name);
        setCustomerPhone(phone);
        setCustomerTotalPrice(price);
        setCustomerOrder(order);
        setCustomerMapRating(mapRating);
        setCustomerServiceRating(serviceRating);
        
        determineShow('show_order')
    }

    const [showTable , setTableShow] = useState(true);

    const [showOrder , setShowOrder] = useState(false);
    const [ deleteShow , setDeleteShow] = useState(false);

    const [success , setSuccess ] = useState(false);

    const [error , setError ] = useState('');


    const [ orderId , setOrderId ] = useState('');


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

    const getNotificationsData = async () => { 
      const querySnapshot = await getDocs(collection(db, "orders"));
      const ordersDataArray = querySnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }));
        
      setOrdersArray(ordersDataArray);
     
    }
    getNotificationsData();
  } , []);




  

   

    const determineShow = ( param ) => {

        switch(param) {
            
            case 'show_order':
                setShowOrder(true);
                setTableShow(false);
                setDeleteShow(false);
                break;
            
            case 'show':
                setShowOrder(false);
                setTableShow(true);
                setDeleteShow(false);
                break;

            case 'delete':
                setShowOrder(false);
                setTableShow(false);
                setDeleteShow(true);
                break;


        }
    }

 

    const deleteShowMethod = (id) => {

        setOrderId(id);
        determineShow('delete');
    }

  

      const deleteRecord = async (e ) => {
        e.preventDefault();
      
        await deleteDoc(doc(db, "orders", orderId));
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

           
            
        {showOrder && (
            <>
    <div className='dashboard-content-header'>

    <h2 className='admin_headline' >رؤية الطلب  </h2>
    <div className='dashboard-content-search'>

<button className="dashbord-header-btn_2" onClick={() => determineShow('show') } >رؤية جميع الطلبات</button>
    </div> 

    </div>


            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   اسم مقدم الطلب </label>
               
                <input readonly value={customerName} type="text" id='name' className="input_form"  />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   رقم مقدم الطلب </label>
               
                <input readonly value={customerPhone} type="text" id='name' className="input_form"  />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">  اجمالي السعر </label>
               
                <input readonly value={customerTotalPrice} type="text" id='name' className="input_form"  />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   تقييم المستخدم للخريطة </label>
               
                <input readonly value={customerMapRating} type="text" id='name' className="input_form"  />
            </div>

            <div className="action_form_div">
            <label htmlFor="name" className="label_form mx-1 mb-1">   تقييم المستخدم للخدمة </label>
               
                <input readonly value={customerServiceRating} type="text" id='name' className="input_form"  />
            </div>

 

 

    <div className="action_form_div">

    <label htmlFor="name" className="label_form mx-1 mb-1">   الطلب </label>
   
   {customerOrder && customerOrder.map(( {name , price ,  image , service_provider , service_desc } ) => (
    <div className="single_shopping_product">

<img src={image} alt="" />

  <div className="info_product">
    <h1 className="admin_info_headline">  اسم الخدمة: <span className="span_bold">{name}</span> </h1>
    <h1 className="admin_info_headline"> السعر : <span className="span_bold">{price} ريال</span> </h1>
    <h1 className="admin_info_headline">مقدم الخدمة : <span className="span_bold">{service_provider}</span> </h1>
    <h1 className="admin_info_headline"> وصف الخدمة : <span className="span_bold">{service_desc}</span> </h1>
  </div>
  


</div>
   )) }
</div>






    </>
        )}
            
            {deleteShow && (
                <>
                <div className='dashboard-content-header'>

                <h2 className='admin_headline' > حذف الطلب </h2>
                <div className='dashboard-content-search'>

                <button className="dashbord-header-btn_2" onClick={() => determineShow('show') } >رؤية جميع الطلبات</button>
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

              
          

            <button className="dashbord-header-btn_2 w-80 bg_red" type='submit'  >حذف الاشعار</button>


            </form>
                </>

            )}

            {showTable && (
                <>
                <div className='dashboard-content-header'>
                    <h2 className='admin_headline' >قائمة الطلبات </h2>
                    
                   
                </div>

                {ordersArray && (
                    <table className='admin_table_dashboard' >
                    <thead>
                        
                        <th className='table_item' >اسم مقدم الطلب</th>
                        <th className='table_item'>  رقم هاتف المقدم </th>
                        <th className='table_item'>  اجمالي الطلب </th>
              
                        <th className='table_item'>  عرض / حذف</th>

                    </thead>

                    <tbody>

                        {ordersArray.map((item , i) => (
                            <tr key={i} >

                         
                            <td className='table_item_sm' > {item.name} </td>
                        

                             <td className='table_item_sm' > {item.phone_number} </td>
                             <td className='table_item_sm' > {item.totalPrice} </td>
                            <td className='d-flex-c' >
                            
                            <button className="edit_btn_admin" onClick={() => showOrderMethod(  item.name , item.phone_number , item.totalPrice , item.orders , item.map_rating , item.service_rating ) } > عرض الطلب </button>
                            
                            <button className="delete_btn_admin" onClick={() => deleteShowMethod(  item.id ) } >حذف</button>
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

export default Orders;