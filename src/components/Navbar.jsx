import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';    //Context
import cart from "../icons/cart.png";   //Icon
import logo from "../icons/logo.png";   //Icon
import simple from "../icons/simple.png";   //Icon
import avatar from "../icons/avatar.jpg";   //Icon
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContextProvider';
/* import styles from "../styles/Navbar.module.css"; */


const Navbar = () => {

    const { state } = useContext(CartContext);
    const user = useContext(UserContext)


    return (
        <div className='bg-white fixed w-full shadow-xl'>
            <div className='flex py-1'>
                <img className='w-20 ml-2' src={avatar} alt='avatarIcon'/>
                <Link className='flex items-center ml-2 mr-32 font-bold' to="/userdetails">Hi, {user?.name?.firstname}</Link>

                <div className='flex-1 ml-96 '>
                    <Link to="/products">
                        <img className='w-36' src={simple} alt="logoIcon"/>
                    </Link>
                </div>

                <div className='flex-initial mr-10 items-center flex'>
                    <Link to="/cart">
                        <img className='w-14 relative' src={cart} alt="cartIcon" />
                    </Link>
                    <span className='absolute text-center ml-4 mb-10 bg-blue-800 rounded-full text-white font-bold px-1.5'>{state.itemsCounter}</span>
                </div>

            </div>
        </div>
    );
};

export default Navbar;