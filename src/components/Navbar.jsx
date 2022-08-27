import React, { useContext, useState,useEffect } from 'react';
import { CartContext } from '../context/CartContextProvider';    //Context
import cart from "../icons/cart.png";   //Icon
import logo from "../icons/logo.png";   //Icon
import { Link } from 'react-router-dom';
import { getUser } from '../services/api';


const Navbar = () => {

    const { state } = useContext(CartContext);
    const [user, setUser] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            setUser(await getUser());
        }

        fetchAPI();

    }, []);



    return (
        <div>
            <div>
                {/* <img /> */}
                <p>{`Hi, ${user.username}`}</p>

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