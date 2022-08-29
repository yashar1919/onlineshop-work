import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContextProvider"  //context
import Cart from './Cart';  //Component
import styles from "../styles/ShopCart.module.css"



const ShopCart = () => {

    const { state, dispatch } = useContext(CartContext)

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map((item, index) => <Cart key={item.id} data={item} index={index} />)}
            </div>

            {
                state.itemsCounter > 0 &&
                <div className={styles.payments}>
                    <p><span>Total Items:</span> {state.itemsCounter}</p>
                    <p><span>Total Payments:</span> {state.totalPrice} $</p>

                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
                        <button className={styles.checkout} onClick={() => dispatch({ type: "CHECKOUT" })}>CheckOut</button>
                    </div>
                </div>
            }

            {
                state.checkout &&
                <div className={styles.complete}>
                    <h3>Checked Out Successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 &&
                <div className={styles.complete}>
                    <h3>Want to shop more?</h3>
                    <Link to="/products">Back to Shop</Link>
                </div>
            }

        </div>
    );
};

export default ShopCart;