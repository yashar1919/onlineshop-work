import React, { createContext, useReducer } from 'react';


const initialState = {
    selectedItems: [],  // This Array contains the products that the user has selected
    itemsCounter: 0,    // The total number of products selected by the user
    totalPrice: 0,
    checkout: false
}



const cartReducer = (state, action) => {

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
                checkout: false
            }


        case "REMOVE_ITEM":
            const newSelectedItem = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItem],
            }

        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
            }

        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
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