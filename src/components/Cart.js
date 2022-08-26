import React, { useContext, useEffect,useState } from 'react';
import { CartContext } from '../context/CartContextProvider';

const Cart = (props) => {

    const { title, description, quantity, price } = props.data;
    const { dispatch } = useContext(CartContext);

    /* const [counter, setCounter] = useState(0); */

/*     const count = () => {
        setCounter(prevCounter => prevCounter + 1)
    } */

/*     useEffect(() => {
        setCounter(prevCounter => prevCounter + 1)
    },[]); */



    return (
        <div>
            <p>number of product</p>

            <div>
                <h2>{title}</h2>
            </div>

            <div>
                <p>{description}</p>
            </div>

            <div>
                <span>{quantity}</span>

                {
                    quantity > 1
                        ?
                        <button onClick={() => dispatch({ type: "DECREASE", payload: props.data })}>-</button>
                        :
                        <button>-</button>
                }
                <button onClick={() => dispatch({ type: "INCREASE", payload: props.data })}>+</button>
            </div>

            <div>
                <span>{price}</span>
            </div>


            <div>
                <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}>Remove</button>
            </div>
        </div>
    );
};

export default Cart;