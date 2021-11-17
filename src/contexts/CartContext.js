import { createContext, useState, useContext } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);


export const CartProvider = ({ children }) => {

const [cart, setCart] = useState([]);

const addItem = (item) => {
    if(isInCart(item.id)) {
        return setCart ([...cart, item])
    }else{
        alert ('El articulo ya está en el carrito.')
    };
};

const isInCart = (id) => {
    const filterCart = cart.filter(item => item.id === id)
    const isIn = filterCart.length === 0 ? false : true;
    return isIn;
}

const removeItem = (id) => {
    const remove = cart.filter (i => i.id !== id)
    setCart(remove)
}
   
const clear = () => {
    setCart([])
}

    return (
        <CartContext.Provider value={ {cart, addItem, isInCart, removeItem, clear} } > {children} </CartContext.Provider>
    );
};

