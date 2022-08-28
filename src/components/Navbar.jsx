import React, { useContext, useState,useEffect } from 'react';
import { CartContext } from '../context/CartContextProvider';    //Context
import cart from "../icons/cart.png";   //Icon
import logo from "../icons/logo.png";   //Icon
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContextProvider';


const Navbar = () => {

    const { state } = useContext(CartContext);
    const user = useContext(UserContext)
    

    return (
        <div>
            <div>
                {/* <img /> */}
                <Link to="/userdetails">Hi, {user?.name?.firstname}</Link>

                <div>
                    <Link to="/cart">
                        <img src={cart} alt="cartIcon" />
                    </Link>
                    <span>{state.itemsCounter}</span>
                </div>

                <div>
                    <Link to="/products">
                        <img src={logo} alt="logoIcon" style={{ width: "100px" }} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;