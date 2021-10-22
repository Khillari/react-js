import './Item.css';
import { Counter } from '../ItemCount/ItemCount';

export const Item = ({id, name, price, img}) => {
    return (
        <>
            <div className="container">
                <div className="card">
                    <img src={img}/>
                    <h3 className="name">Alimento: {name}</h3>
                    <h4 className="price">Precio: ${price}</h4>
                    <Counter stock="20" initial="1"/>
                </div>
            </div>

        </>
    );
};

export default Item;