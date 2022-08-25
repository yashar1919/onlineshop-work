import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';   //Context
import { shortTitle, isInCart, quantityCount } from '../helper/functions';   //Function
import { breakLine } from '../helper/functions';    //Function
import trash from "../icons/trash.svg"  //icon

// productData props, This props is inside the map() of the Store.js component
const Product = ({ productData }) => {

    // get state and dispatch object with destructuring
    const { state, dispatch } = useContext(CartContext);

    return (
        <div>
            <img src={productData.image} alt="product" style={{ width: "200px" }} />
            <h3>{shortTitle(productData.title)}</h3>

            <p>{productData.description}</p>
            {/* <p>{breakLine(productData.description).join('<br />')}</p> */}
            {/* {<p dangerouslySetInnerHTML={{__html: breakLine(productData.description).join('<br />')}} > </p>} */}

            <span>{productData.price}</span>
            <div>

                {
                    quantityCount(productData.id, state) > 1
                    &&
                    <button onClick={() => dispatch({ type: "DECREASE", payload: productData })}>-</button>
                }


                {
                    quantityCount(productData.id, state) === 1
                    &&
                    <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })}><img src={trash} style={{ width: "20px" }} /></button>
                }

                {
                    isInCart(productData.id, state)
                        ?
                        <button onClick={() => dispatch({ type: "INCREASE", payload: productData })} >+</button>
                        :
                        <button onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>Add to Cart</button>
                }

                {
                    quantityCount(productData.id, state) > 0
                    &&
                    <span>{quantityCount(productData.id, state)}</span>
                }


            </div>
        </div>
    );
};

export default Product;