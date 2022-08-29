import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';   //Context
import { shortTitle, isInCart, quantityCount } from '../helper/functions';   //Function
//import { breakLine } from '../helper/functions';    //Function
import trash from "../icons/trash.svg"  //icon
import styles from "../styles/Product.module.css";




// productData props, This props is inside the map() of the Store.js component
const Product = ({ productData }) => {

    // get state and dispatch object with destructuring
    const { state, dispatch } = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt="product" />
            <h3>{shortTitle(productData.title)}</h3>

            <p>{productData.description}</p>


            <div className={styles.downContainer}>
                <span className={styles.price}>{`${productData.price} $`}</span>
                <div className={styles.buttonContainer}>

                    {
                        quantityCount(productData.id, state) > 1
                        &&
                        <button className={styles.smallButton} onClick={() => dispatch({ type: "DECREASE", payload: productData })}>-</button>
                    }


                    {
                        quantityCount(productData.id, state) === 1
                        &&
                        <button className={styles.smallButton} onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })}><img src={trash} alt="trashIcon" /></button>
                    }


                    {
                        quantityCount(productData.id, state) > 0
                        &&
                        <span className={styles.counter}>{quantityCount(productData.id, state)}</span>
                    }



                    {
                        isInCart(productData.id, state)
                            ?
                            <button className={styles.smallButton} onClick={() => dispatch({ type: "INCREASE", payload: productData })} >+</button>
                            :
                            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>Add to Cart</button>
                    }




                </div>
            </div>



        </div>
    );
};

export default Product;