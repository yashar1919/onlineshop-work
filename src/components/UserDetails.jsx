import React, { useContext } from 'react';
import { UserContext } from '../context/UserContextProvider';
import { Link } from "react-router-dom";
/* import styles from "../styles/UserDetails.module.css"; */

const UserDetails = () => {

    const user = useContext(UserContext);



    return (
        <>
            <div className='flex'>
                {/* {console.log(user)} */}
                <div className='text-emerald-600 mx-10 mt-40 flex w-full border-4 border-cyan-500 h-20 items-center font-bold px-2'>
                    <h3 className='flex-auto'>ID: {user.id}</h3>
                    <h3 className='flex-auto'>First Name: {user?.name?.firstname}</h3>
                    <h3 className='flex-auto'>Last Name: {user?.name?.lastname}</h3>
                    <h3 className='flex-auto'>Email: {user.email}</h3>
                    <h3 className='flex-auto'>City: {user?.address?.city}</h3>
                    <h3 className='flex-auto'>Number: {user?.address?.number}</h3>
                    <h3 className='flex-auto'>Phone: {user.phone}</h3>
                </div>
            </div>
            <div className='mt-20 flex justify-center bg-blue-700 text-white rounded-xl mx-auto py-1 w-32 hover:bg-blue-900'>
                <Link to="/products">Back to Store</Link>
            </div>
        </>
    );
};

export default UserDetails;