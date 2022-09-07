import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContextProvider"  //context
import Cart from './Cart';  //Component
/* import styles from "../styles/ShopCart.module.css" */



const ShopCart = () => {

    const { state, dispatch } = useContext(CartContext)

    return (
        <div>
            <div>
                {state.selectedItems.map((item, index) => <Cart key={item.id} data={item} index={index} />)}
            </div>

            {
                state.itemsCounter > 0 &&
                <div className='flex py-2 mx-2 pl-24 border-4 border-orange-500 font-bold text-blue-800'>
                    <p className='flex-1'><span>Total Items:</span> {state.itemsCounter}</p>
                    <p className='flex-1'><span>Total Payments:</span> {state.totalPrice} $</p>

                    <div className='flex-1'>
                        <button className='mx-20 text-green-600 font-bold hover:text-green-800' onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
                        <button className='mx-20 border-2 px-2 bg-green-600 rounded-lg text-white font-bold hover:bg-green-800' onClick={() => dispatch({ type: "CHECKOUT" })}>CheckOut</button>
                    </div>
                </div>
            }

            {
                state.checkout &&
                <div>
                    <h3>Checked Out Successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 &&
                <div>
                    <h3>Want to shop more?</h3>
                    <Link to="/products">Back to Shop</Link>
                </div>
            }

        </div>
    );
};

export default ShopCart;