import { Counter } from '../ItemCount/ItemCount';
import './ItemDetail.css';


export const ItemDetail = ({id, img, name, description, price}) => {
    return (
        <>
            <div className="card" key={id}>
                <img className="img-alimento" src={img}/>
                <h3 className="name">Alimento: {name}</h3>
                <h4 className="description">{description}</h4>
                <h4 className="price">Precio: ${price}</h4>
                <Counter stock="20" initial="1"/>
            </div> 
        </>
    );
};

export default ItemDetail;
