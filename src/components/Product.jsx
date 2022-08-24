import React from 'react';
import { shortTitle } from '../helper/functions';   //Function
import { breakLine } from '../helper/functions';    //Function

// productData props, This props is inside the map() of the Store.js component
const Product = ({ productData }) => {
    return (
        <div>
            <img src={productData.image} alt="product" style={{ width: "200px" }} />
            <h3>{shortTitle(productData.title)}</h3>
            <p>{productData.description}</p>
            <span>{productData.price}</span>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;