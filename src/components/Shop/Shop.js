import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [detail, setDetails]= useState([]);
    const [random, setRandom] = useState([]);
   useEffect(() =>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data =>setProducts(data))
   },[]);
   const showDetails = (product) => {
    const newCart = [...detail, product];
    if(newCart.length > 4){
     alert('You cannot add more than 4 items')
     return;
    }
    setDetails(newCart)
}
const removeDetails = ()=>{
    setDetails([]);
}
const randomItem = (product)=>{
    const randomCart = [...detail, product];
    setRandom(randomCart[Math.round(Math.random() * 3)].name)
}
    return (
        <div className='shop-container'>
           <div className="products-container">
             {
               products.map(product => <Product key={product.id}
               product= {product}showDetails={showDetails}
               >
               </Product>)  
             }
           </div>
           <div className="cart-details">
            <div className="selected-cart">
               <h2>Selected Items</h2>
          {
            detail.map(data =><h4>{data.name}</h4>)
          }
            <div>
              <button onClick={() => randomItem(products)} className='btn-one'>CHOOSE 1 FOR ME </button> 
              <br /><br />
              <button onClick={removeDetails} className= 'btn-two'>CHOOSE AGAIN </button>
            </div>
            <h4 className='random'>Random:{random}</h4>
            </div>
           </div>
        </div>
    );
};

export default Shop;