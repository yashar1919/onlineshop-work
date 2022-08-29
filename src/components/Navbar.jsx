import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';    //Context
import cart from "../icons/cart.png";   //Icon
import simple from "../icons/simple.png";   //Icon
import avatar from "../icons/avatar.jpg";   //Icon
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContextProvider';



const Navbar = () => {

    const { state } = useContext(CartContext);
    const user = useContext(UserContext)


    return (
        <div>
            <div>
                <img src={avatar} alt='avatarIcon'/>
                <Link to="/userdetails">Hi, {user?.name?.firstname}</Link>

                <div>
                    <Link to="/products">
                        <img src={simple} alt="logoIcon"/>
                    </Link>
                </div>

                <div>
                    <Link to="/cart">
                        <img src={cart} alt="cartIcon" />
                    </Link>
                    <span>{state.itemsCounter}</span>
                </div>

            </div>
        </div>
    );
};

export default Navbar;