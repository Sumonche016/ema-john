import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [cart, setCart] = useState([])

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }
        , [])

    // button handler 
    const handleAddTocart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    product.map(product => <Product addTocart={handleAddTocart} product={product} key={product.id}></Product>)
                }
            </div>
            <div className='summary-container'>
                <Cart></Cart>
                <h1>cart:{cart.length}</h1>
            </div>
        </div>
    );
};

export default Shop;