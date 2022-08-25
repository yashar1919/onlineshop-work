import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';    //Context
import cart from "../icons/cart.png";   //Icon
import logo from "../icons/logo.png";   //Icon

import { Link } from 'react-router-dom';

const Navbar = () => {

    const { state } = useContext(CartContext);

    return (
        <div>
            <div>
                {/* <img /> */}
                <p>{`Hi, username`}</p>

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