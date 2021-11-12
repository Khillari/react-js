import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

const [cart, setCart] = useState([]);

const addItem = (item, quantity) => {
    if(isInCart(item.id)) {
        const itemList = [...cart, {...item, counter: quantity}];
        setCart(itemList);    
    };

};

const isInCart = (id) => cart.find((item) => item.id === id);
   

    return (
        <CartContext.Provider value={cart, addItem} > {children} </CartContext.Provider>
    );
};

