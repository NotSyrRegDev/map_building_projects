import React, { useEffect , useContext } from 'react';
import './SingleProduct.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


const SingleProduct = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const navigate = useNavigate();
  const {retrive} = useContext(AppContext);

  const [retreivealProduct  ] = retrive;

  
  const {carts} = useContext(AppContext);
  const {price} = useContext(AppContext);



  const [cartItems , setCartItems ] = carts;
  const [priceValue , setPriceValue ] = price;


  
  const addToCart = ( id) => {
    const existObject =  cartItems.find( cart => cart.id === id   );
    if (existObject) {
      let index = cartItems.map(object => object.id).indexOf(existObject.id);

      const myNewArray = Object.assign([...cartItems], {
        [index]: {
            ...cartItems[index],
            itemsNumber: cartItems[index].itemsNumber + 1,
        }
    });


    setPriceValue( parseInt(priceValue) + parseInt(cartItems[index].price ) );
 
    setCartItems(myNewArray);


    }
   
    if (!existObject) {

      setCartItems(prevState => [...prevState , { id: id , title: retreivealProduct.title ,  image: retreivealProduct.image , price: retreivealProduct.price ,  itemsNumber: 1  }]  );
      setPriceValue( parseInt(priceValue) + parseInt(retreivealProduct.price ) );

   
    }
 
  }


  return (
    <div>
    <div className="section section_single_product">
      
      <div className="single_flex_section">



      <div className="flex_one single_product_page">

      <img src="/images/icons/arrow-right.png" className='right_arrow_product' onClick={() => navigate(-1)} alt="" />

      
        <img src={retreivealProduct.image} alt="" className="product_img" />

        <h1 className="product_headline"> {retreivealProduct.title} </h1>
   
        <h6 className="product_price"> SAR {retreivealProduct.price} </h6>

        <button className="mylecafe_btn my-1" onClick={() => addToCart( retreivealProduct.id ) } >اضافة للسلة</button>

      

   

    </div>




      </div>
   

    </div>
  

    </div>
  )
}

export default SingleProduct