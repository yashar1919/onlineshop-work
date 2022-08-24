import React, { createContext, useEffect, useState } from 'react';
import { getProducts } from '../services/api';  //API


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


// ------------------------------------------ Comments ------------------------------------------


/*
const fetchAPI = async () => {
    setProducts(await getProducts());
}

chon functione getProducts() async has, bayad fetchAPI ham async taarif konim
k vaghti getProducts kamel ejra shod o array ro return kard, on moghe
setProducts ejra beshe o maghadir ro tooye state products gharar bede.
maamoolan in format kheili estefade mishe k yek function yeja taarif she (getProducts)
baad inja import she o ye functione dg sakhte beshe (fetchAPI) k azash estefade kone
o biad too useEffect estefade beshe bara gereftane API o gharar dadn too state.
alan fetchAPI kamel ettelaat ro az getProducts migire o tavasote setProducts dakhele
state products Save mikone. pas baad az in method, ettelalat dakhele state khahad bood.
*/

// -------------------------------------------------------------------------------------------------

/*
return (
    <productsContext.Provider value={products}>
        {props.children}
    </productsContext.Provider>
);

in Component <ProductContextProvider> dowre harchi wrapp beshe,
miad o on meghdare vasate khodesh ro mizare jaye props.children k neveshtim
va dar natije on componenti k tavasote <ProductContextProvider> wrapp shode,
b ettelaate in class dastresi dare k ettelaate in class mishe valueii k dadim,
k darvaghe hamoon state ma has k too state darim products ro negahDari mikonim.
pas ba context toonesim yekbar ettelaat ro begirim va harja lazem dashtim, wrappesh
konim dowre Componente morede nazar o estefade bokonim.
*/