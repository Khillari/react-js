import React, { useState } from 'react';
import './ItemCount.css';

export const Counter = ({stock, desmontar, onAdd}) => {

    const [count, setCount] = useState(1);

    function add () {
        if (count < stock){
            setCount (count + 1)
            
        }else{
            alert(`Lo sentimos, no queda más stock del producto que deseas comprar.`)
        }
    };

    function decrease () {
        if (count > 1){
            setCount(count - 1)
        }
    };


    return (
        <div className="contenedor">
            <h1 className="contador">Cantidad: {count} </h1>
            <button className="btnMenos" onClick={decrease}>-</button>
            <button className="btnMas" onClick={add}>+</button>
            <button className="btn btn-dark btn-add" onClick={desmontar}>Agregar al carrito</button>
        </div>
    )
}

