import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const { name, img: image, price, seller, ratings } = props.product
    const { addTocart } = props
    return (
        <div className='single-product-container'>
            <img src={image} alt="" />
            <h6 className='name'>{name.slice(0, 25)}</h6>
            <p className='price'>Price: {price + '$'}</p>
            <p className='seller'>Manufacturer: {seller}</p>
            <p className='ratings'>Ratings:{ratings}</p>
            <button className='btn' onClick={() => addTocart(props.product)}><p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>
        </div>
    );
};

export default Product;