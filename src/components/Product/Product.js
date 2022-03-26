
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name, img, price,others} = props.product
    return (
        <div className='product' >
           <img src={img} alt=""></img>
      <div className="product-info">
      <h2>Name & others
      </h2>
      <h2>Name:</h2>
      <h3>{name}</h3>
      <p><h2>Others:</h2> {others}</p>
      <h2>Price:$ {price}</h2>  
      </div>
      <button className='buton-cart'>
          <p className='buton-text'>Add To Cart </p>
          <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
      </button>
        </div>
    );
};

export default Product;