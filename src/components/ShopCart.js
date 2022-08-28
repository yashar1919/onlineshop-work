import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContextProvider"  //context
import Cart from './Cart';  //Component



const ShopCart = () => {

    const { state, dispatch } = useContext(CartContext)

    return (
        <div>
            <div>
                {state.selectedItems.map((item, index) => <Cart key={item.id} data={item} index={index} />)}
            </div>

            {
                state.itemsCounter > 0 &&
                <div>
                    <p><span>Total Items:</span> {state.itemsCounter}</p>
                    <p><span>Total Payments:</span> {state.totalPrice}</p>

                    <div>
                        <button onClick={() => dispatch({ type: "CHECKOUT" })}>CheckOut</button>
                        <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
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