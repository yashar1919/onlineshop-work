import React from 'react';
import loader from "../icons/loader.gif";
/* import styles from "../styles/Loading.module.css"; */

const Loading = () => {
    return (
        <div className=''>
            <img className='max-w-none' src={loader} alt='Loading' />
            <h1 className='text-center font-bold '>L O A D I N G...</h1>
        </div>
    );
};

export default Loading;