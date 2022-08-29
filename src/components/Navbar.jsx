import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';    //Context
import cart from "../icons/cart.png";   //Icon
import logo from "../icons/logo.png";   //Icon
import simple from "../icons/simple.png";   //Icon
import avatar from "../icons/avatar.jpg";   //Icon
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContextProvider';
import styles from "../styles/Navbar.module.css";


const Navbar = () => {

    const { state } = useContext(CartContext);
    const user = useContext(UserContext)


    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <img className={styles.avatar} src={avatar} alt='avatarIcon'/>
                <Link className={styles.userDetails} to="/userdetails">Hi, {user?.name?.firstname}</Link>

                <div>
                    <Link to="/products">
                        <img className={styles.logoIcon} src={simple} alt="logoIcon"/>
                    </Link>
                </div>

                <div className={styles.iconContainer}>
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