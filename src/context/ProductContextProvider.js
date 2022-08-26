import React, { createContext, useEffect, useState } from 'react';
import { getProducts } from '../services/api';  //API

// import in store component
export const ProductsContext = createContext();

const ProductContextProvider = (props) => {

    // data that comes from the API is the form of Array-Of-Objects, for this reason, put the input of the state type as an array
    const [products, setProducts] = useState([]);


    // get data from API in mounting time
    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts());
        }

        fetchAPI();

    }, []);


    return (
        // create context
        <ProductsContext.Provider value={products}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;
