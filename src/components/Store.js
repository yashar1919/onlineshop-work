import React, { useContext, useState } from 'react';

import { ProductsContext } from '../context/ProductContextProvider';    //Context
import Loading from './Loading';  //Component  
import Product from "./Product"  //Component
/* import styles from "../styles/Store.module.css"; */


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
        <div>

            <div className='flex justify-around'>
                <input className='h-8 p-2 rounded-full border-2 w-80' type="text" placeholder="Search..." value={search} onChange={searchHandler} />

                <div>
                    <label className='mx-3 font-bold'>Category: </label>
                    <select className='w-96 px-1 border-b-2 border-gray-600' onChange={dropdownHandler} name="product-category">
                        <option value="">All</option>
                        <option value="men's clothing">Men Clothing</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="electronics">Electronics</option>
                        <option value="women's clothing">Women Clothing</option>
                    </select>
                </div>
            </div>

            <div className="p-3 m-3 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {
                    products.length
                        ?
                        results.map(item => <Product key={item.id} productData={item} />)
                        :
                        <Loading />
                }
            </div>
        </div>
    );
};

export default Store;