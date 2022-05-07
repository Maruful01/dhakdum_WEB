import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import SelectedProduct from './selectedProduct';
import { Spin, Empty} from 'antd';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NavBar from '../HomePage/Header/NavBar'
import { UserContext } from '../GlobalProvider';

const ShoppingCart = () => {

  const {cartItems} = useSelector(state => state.cart);

  const [loggedInUser] = useContext(UserContext);

  let price= 0;
  let qty =0;
  let products;
  let selectedProducts;

  if (typeof window !== 'undefined') {
    products = cartItems;
    selectedProducts = cartItems.filter ((x) =>  x.product.qty.selected === true);
   }  

  const router = useRouter();

  useEffect(() => {

    if ( cartItems && cartItems.length <= 0) {
        router.push ('/')
    }

    else {
      ""
    }

  }, [])

  // Selected products price counter____________________________________________________________________________________________

    if (selectedProducts) {
        qty = selectedProducts.length;

              if (selectedProducts.length >= 0) {
                         price = selectedProducts.reduce ((previousValue, currentValue, array) => previousValue + currentValue.product.qty.qty * currentValue.product.qty.price, 0);
                }
    }
 // Selected products price counter____________________________________________________________________________________________

 const confirmOrder = () => {

      // fetch('https://stormy-fjord-61489.herokuapp.com/orders', {
      //     method: 'POST',
      //     body: JSON.stringify({selected: selectedProducts, phone: "01799827366", address: "Dhaka Bangladesh", authentication: loggedInUser}),
      //     headers: {
      //         "Content-type": "application/json; charset=UTF-8"
      //     }
      // })
      // .then(res => res.json())
      // .then (data => console.log("Order Confirmed", data))

      // router.push ('/oudersuccess');

      router.push ('/confirm');



  }

return (
            <section>
              <div>
                   <NavBar/>
                   {
                cartItems && cartItems.length >= 0 ?   
                
                <div   className="shopping-cart-component">
                               <div style={{marginBottom: "70px"}}>

               
                                {
                                products.map (pd =>
               
                                <SelectedProduct products={products} key={pd.product._key} pd={pd}> </SelectedProduct>
                                
                                  )
                                 }
                           
                             </div> 

                               <div  className="order-summary">

                                      <div>
                                      <h2>Order Summary</h2>
                                      <p className="subtotal bold-text">Subtotal <span>৳ {price}</span></p>
                                      <p className="border-bottom bold-text">Shipping <span>৳ {qty * 60}</span></p>
                                      </div>
                                      <div className="cart-button">
                                      <button onClick={() => confirmOrder()} className="buy-now-btn w-100 bold-text buy-btn">Buy ({qty})</button>
                                     </div>                
                             </div> 

                   </div> : 
               ""
                      }
                      {/* <HomePage products={cartItems}/> */}
                  </div>

             {/* <ProductDetailsHeader isCartValid="none"/> */}
              
            </section>
  );
};

export default ShoppingCart;