import React, { useContext, useState } from 'react';
import './ItemCount.css';
import { CartContext } from '../../contexts/CartContext';

export const Counter = ({stock, desmontar}) => {
    const cart = useContext(CartContext);

    const [count, setCount] = useState(1);

    function onAdd () {
        if (count < stock){
            setCount (count + 1)
            
        }else{
            alert(`Lo sentimos, no queda más stock del producto que deseas comprar.`)
        }
    };

    function onDecrease () {
        if (count > 1){
            setCount(count - 1)
        }
    };



    return (
        <div className="contenedor">
            <h1 className="contador">Cantidad: {count} </h1>
            <button className="btnMenos" onClick={onDecrease}>-</button>
            <button className="btnMas" onClick={onAdd}>+</button>
            <button className="btn btn-dark btn-add" onClick={desmontar} >Agregar al carrito</button>
        </div>
    )
}

