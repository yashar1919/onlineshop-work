import React, { useContext } from 'react';
import { UserContext } from '../context/UserContextProvider';
import { Link } from "react-router-dom";
/* import styles from "../styles/UserDetails.module.css"; */

const UserDetails = () => {

    const user = useContext(UserContext);



    return (
        <>
            <div>
                {/* {console.log(user)} */}

                <h3>ID: {user.id}</h3>
                <h3>First Name: {user?.name?.firstname}</h3>
                <h3>Last Name: {user?.name?.lastname}</h3>
                <h3>Email: {user.email}</h3>
                <h3>City: {user?.address?.city}</h3>
                <h3>Number: {user?.address?.number}</h3>
                <h3>Phone: {user.phone}</h3>

            </div>
            <div>
                <Link to="/products">Back to Store</Link>
            </div>
        </>
    );
};

export default UserDetails;