import React from 'react';
import loader from "../icons/loader.gif";   //icon


const Loading = () => {
    return (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-20'>
            <img className='max-w-none' src={loader} alt='Loading' />
        </div>
    );
};

export default Loading;