import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';
import { shortTitle } from '../helper/functions';   //Function
import plus from "../icons/plus.png"
import minus from "../icons/minus.png"
import trash from "../icons/trash.svg"  //icon
/* import styles from "../styles/Cart.module.css" */




const Cart = (props) => {

    const { index, data } = props;
    const { title, description, quantity, price } = data;
    const { dispatch } = useContext(CartContext);



    return (
        <div>
            <p>{index + 1}</p>

            <div>
                <h3>{shortTitle(title)}</h3>
            </div>

            <div>
                <p>{description}</p>
            </div>


            {
                quantity > 1
                    ?
                    <img onClick={() => dispatch({ type: "DECREASE", payload: props.data })} src={minus} />
                    :
                    <img src={minus} />
            }

            <span>{quantity}</span>
            {/* <button onClick={() => dispatch({ type: "INCREASE", payload: props.data })}><img src={plus}/></button> */}
            <img onClick={() => dispatch({ type: "INCREASE", payload: props.data })} src={plus} />

            <div>
                <span>{price}$</span>
            </div>


            <div>
                <img onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })} src={trash} alt="trashIcon" />
            </div>
        </div>
    );
};

export default Cart;