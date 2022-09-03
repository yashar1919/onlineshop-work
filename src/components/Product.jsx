import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';   //Context
import { shortTitle, isInCart, quantityCount } from '../helper/functions';   //Function
//import { breakLine } from '../helper/functions';    //Function
import trash from "../icons/trash.svg"  //icon
/* import styles from "../styles/Product.module.css"; */




// productData props, This props is inside the map() of the Store.js component
const Product = ({ productData }) => {

    // get state and dispatch object with destructuring
    const { state, dispatch } = useContext(CartContext);

    return (
        <div className='w-80 p-2 bg-white rounded-lg hover:shadow-xl'>
            <img className='w-56 h-60' src={productData.image} alt="product" />
            <h3 className='text-center text-xl font-bold'>{shortTitle(productData.title)}</h3>

            <p className='text-sm'>{productData.description}</p>


            <div className='flex justify-around'>
                <span className='text-green-600 font-bold'>{`${productData.price} $`}</span>
                <div className='flex items-center'>
                
                    {
                        quantityCount(productData.id, state) > 1
                        &&
                        <button className='text-xl text-white bg-blue-700 px-3 rounded font-bold mx-2 hover:bg-blue-900' onClick={() => dispatch({ type: "DECREASE", payload: productData })}>-</button>
                    }


                    {
                        quantityCount(productData.id, state) === 1
                        &&
                        <button className='px-1 mx-2 bg-blue-700 rounded' onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })}><img className='w-7' src={trash} alt="trashIcon" /></button>
                    }


                    {
                        quantityCount(productData.id, state) > 0
                        &&
                        <span className='text-blue-700 text-lg font-bold'>{quantityCount(productData.id, state)}</span>
                    }



                    {
                        isInCart(productData.id, state)
                            ?
                            <button className='text-xl text-white bg-blue-700 px-3 rounded font-bold mx-2 hover:bg-blue-900' onClick={() => dispatch({ type: "INCREASE", payload: productData })} >+</button>
                            :
                            <button className='bg-blue-700 shadow-lg shadow-blue-500/50 px-3 py-1 rounded-md text-white hover:bg-blue-900' onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>Add to Cart</button>
                    }




                </div>
            </div>



        </div>
    );
};

export default Product;