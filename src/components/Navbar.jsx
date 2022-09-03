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
        <div className='bg-gray-200 fixed w-full'>
            <div className='flex flex-row py-1'>
                <img className='w-20' src={avatar} alt='avatarIcon'/>
                <Link className='flex-1' to="/userdetails">Hi, {user?.name?.firstname}</Link>

                <div className='flex-1'>
                    <Link to="/products">
                        <img className='w-20' src={simple} alt="logoIcon"/>
                    </Link>
                </div>

                <div className='flex-1'>
                    <Link to="/cart">
                        <img className='w-10' src={cart} alt="cartIcon" />
                    </Link>
                    <span>{state.itemsCounter}</span>
                </div>

            </div>
        </div>
    );
};

export default Navbar;