import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';
import { shortTitle } from '../helper/functions';   //Function
import styles from "../styles/Cart.module.css"
import plus from "../icons/plus.png"
import minus from "../icons/minus.png"
import trash from "../icons/trash.svg"  //icon




const Cart = (props) => {

    const { index, data } = props;
    const { title, description, quantity, price } = data;
    const { dispatch } = useContext(CartContext);



    return (
        <div className={styles.container}>
            <p className={styles.number}>{index + 1}</p>

            <div className={styles.data}>
                <h3>{shortTitle(title)}</h3>
            </div>

            <div className={styles.desc}>
                <p>{description}</p>
            </div>


            {
                quantity > 1
                    ?
                    <img className={styles.minus} onClick={() => dispatch({ type: "DECREASE", payload: props.data })} src={minus} />
                    :
                    <img className={styles.minus} src={minus} />
            }

            <span className={styles.quantity}>{quantity}</span>
            {/* <button onClick={() => dispatch({ type: "INCREASE", payload: props.data })}><img src={plus}/></button> */}
            <img className={styles.plus} onClick={() => dispatch({ type: "INCREASE", payload: props.data })} src={plus} />

            {/*            <div>

                {                 <div className={styles.buttonContainer}>
                    {
                        quantity > 1
                            ?
                            <button onClick={() => dispatch({ type: "DECREASE", payload: props.data })}>-</button>
                            :
                            <button>-</button>
                    }
                    <button onClick={() => dispatch({ type: "INCREASE", payload: props.data })}>+</button>
                </div> 
            </div> */}

            <div>
                <span className={styles.price}>{price}$</span>
            </div>


            <div>
                <img onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })} src={trash} alt="trashIcon" />
            </div>
        </div>
    );
};

export default Cart;