import React, { useContext, useState } from 'react';

import { ProductsContext } from '../context/ProductContextProvider';    //Context
import Loading from './Loading';  //Component  
import Product from "./Product"  //Component

const Store = () => {

    const products = useContext(ProductsContext);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");


    const searchHandler = (event) => {
        setSearch(event.target.value)
    }

    const dropdownHandler = (event) => {
        setCategory(event.target.value)
    }


    let results = search.trim()
        ?
        products.filter(item => item.title.toLowerCase().includes(search.trim().toLowerCase()))
        :
        products
    ;

    results = category
        ?
        results.filter(item => item.category.toLowerCase() === (category.toLowerCase()))
        :
        results
    ;


    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>

            <input type="text" placeholder='Search' value={search} onChange={searchHandler} />

            <div>
                <label>Category: </label>
                <select onChange={dropdownHandler} name="product-category">
                    <option value="">All</option>
                    <option value="men's clothing">Men Clothing</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                    <option value="women's clothing">Women Clothing</option>
                </select>
            </div>

            {
                products.length
                    ?
                    <div>{results.map(item => <Product key={item.id} productData={item} />)}</div>
                    :
                    <Loading />
            }
        </div>
    );
};

export default Store;