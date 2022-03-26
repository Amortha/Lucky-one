import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
   useEffect(() =>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data =>setProducts(data))
   },[]);
 
    return (
        <div className='shop-container'>
           <div className="products-container">
             {
               products.map(product => <Product key={product.id}
               product= {product}
               
               >

               </Product>)  
             }
           </div>
           <div className="cart-details">
            <div className="selected-cart">
               <h2>Selected Items</h2>
          
            <div>
              <button className='btn-one'>CHOOSE 1 FOR ME </button> 

              <br /><br />
              <button className= 'btn-two'>CHOOSE AGAIN </button>
            </div>
            </div>
           </div>
        </div>
    );
};

export default Shop;