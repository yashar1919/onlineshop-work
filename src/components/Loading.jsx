import React from 'react';
import loader from "../icons/loader.gif";

const Loading = () => {
    return (
        <div>
            <img src={loader} alt='Loading' />
            <h1>L O A D I N G...</h1>
        </div>
    );
};

export default Loading;