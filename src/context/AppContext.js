import React , {  useState, createContext , useEffect } from 'react';
import { getDocs , collection , db  } from '../firebase';


export const AppContext = createContext();

export const AppProvider = (props) => {

    const [retreivealProduct , setRetreivalProduct] = useState({
       "title": "ايس تي",
        "price": "19",
        "image": "https://i.ibb.co/hM2dLr6/19.jpg",
    });

    const [cartItems , setCartItems] = useState([]);
    const [priceItems , setPriceItems] = useState(0);
    const [ categoriesArray , setCategoriesArray ] = useState([]);

    useEffect(  () => {

        const getCategoriesData = async () => { 
          const querySnapshot = await getDocs(collection(db, "categories"));
          const usersDataArray = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));

          
          setCategoriesArray(usersDataArray);
         
        }
        getCategoriesData();
      } , []);

   
   


    return (
            <AppContext.Provider value={ { retrive: [retreivealProduct , setRetreivalProduct]  , carts: [cartItems , setCartItems] , price: [priceItems , setPriceItems] , categories: [categoriesArray , setCategoriesArray] }} >
                {props.children}
            </AppContext.Provider>
    )
}