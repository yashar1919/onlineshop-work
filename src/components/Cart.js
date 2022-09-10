import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';   //Context
import { shortTitle } from '../helper/functions';   //Function
import plus from "../icons/plus.png"  //icon
import minus from "../icons/minus.png"  //icon
import trash from "../icons/trash.svg"  //icon




const Cart = (props) => {

    const { index, data } = props;
    const { title, description, quantity, price } = data;
    const { dispatch } = useContext(CartContext);



    return (
        <div className='flex mx-2 items-center border-4 border-cyan-700 my-4 px-5'>
            <p className='mr-20 font-bold text-teal-700'>{index + 1}</p>

            <div className='mr-20 w-20'>
                <h3>{shortTitle(title)}</h3>
            </div>

            <div className='mr-20 w-[700px]'>
                <p>{description}</p>
            </div>


            {
                quantity > 1
                    ?
                    <img className='cursor-pointer w-[28px]' onClick={() => dispatch({ type: "DECREASE", payload: props.data })} src={minus} />
                    :
                    <img className='cursor-pointer w-[28px]' src={minus} />
            }

            <span className='mx-5 font-bold text-fuchsia-600 text-xl w-3'>{quantity}</span>
            
            <img className='cursor-pointer w-7' onClick={() => dispatch({ type: "INCREASE", payload: props.data })} src={plus} />

            <div className='mx-20 font-bold text-green-700 w-20'>
                <span>{price}$</span>
            </div>


            <div className='mr-5 cursor-pointer w-5'>
                <img className='w-10 max-w-none' onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })} src={trash} alt="trashIcon" />
            </div>
        </div>
    );
};

export default Cart;