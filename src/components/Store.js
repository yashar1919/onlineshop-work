import React, { useContext, useState } from 'react';

import { ProductsContext } from '../context/ProductContextProvider';    //Context
import Product from "./Product"  //Component

const Store = () => {

    const products = useContext(ProductsContext);

    const [search, setSearch] = useState("");

    const searchHandler = (event) => {
        setSearch(event.target.value)
    }

    const searchProduct = products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))



    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            <input type="text" placeholder='Search' value={search} onChange={searchHandler} />
            {
                products.length
                    ?
                    <div>{searchProduct.map(item => <Product key={item.id} productData={item} />)}</div>
                    :
                    <h1>Loading...</h1>
            }
        </div>
    );
};

export default Store;