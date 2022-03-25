import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name, img, price} = props.product
    return (
        <div className='product' >
           <img src={img} alt=""></img>
      <h2>Name & others:
      </h2>
      <h5>{name}</h5>
      <h2>Price: {price}</h2> 
      
        </div>
    );
};

export default Product;