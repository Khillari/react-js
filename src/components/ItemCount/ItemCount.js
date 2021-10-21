import React, { useState } from 'react';
import './ItemCount.css';

export const Counter = (props) => {
    const [count, setCount] = useState(parseInt(props.initial));

    function onAdd () {
        if (count < props.stock){
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
        <div>
            <h1>Contador: {count} </h1>
            <button className="btnMenos" onClick={onDecrease}>-</button>
            <button className="btnMas" onClick={onAdd}>+</button>
        </div>
    )
}

