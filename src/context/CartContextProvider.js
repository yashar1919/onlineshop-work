import React, { createContext, useReducer } from 'react';


const initialState = {
    selectedItems: [],  // This Array contains the products that the user has selected
    itemsCounter: 0,    // The total number of products selected by the user
    totalPrice: 0,
    checkout: false
}

// selectedItems array, is the input of sumItems function
// It checks each of the selectedItems and adds their quantity together = itemsCounter
// Each quantity is multiplied by the price of each product and added to the others = totalPrice
const sumItems = (items) => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
    let totalPrice = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return {
        itemsCounter: itemsCounter,
        totalPrice: totalPrice
    }
}


const cartReducer = (state, action) => {

    // console.log(state)

    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                });
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkout: false
            }


        case "REMOVE_ITEM":
            const newSelectedItem = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItem],
                ...sumItems(newSelectedItem),
            }

        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.selectedItems),
            }

        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...sumItems(state.selectedItems),
            }

        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                totalPrice: 0,
                checkout: true
            }

        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                totalPrice: 0,
                checkout: false
            }

        default:
            return {
                state
            }
    }
}


export const CartContext = createContext();


const CartContextProvider = (props) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;