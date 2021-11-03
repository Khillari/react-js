import './Item.css';
import { Counter } from '../ItemCount/ItemCount';
import ProductosApi from '../API/productos.json';

export const Item = ({id, name, price, img, description}) => {
    return (
        <>      
                <div className="card">
                    <img className="img-alimento" src={img}/>
                    <h3 className="name">Alimento: {name}</h3>
                    <h4 className="description">{description}</h4>
                    <h4 className="price">Precio: ${price}</h4>
                    <Counter stock="20" initial="1"/>
                </div> 
        </>
    );
};

export default Item;