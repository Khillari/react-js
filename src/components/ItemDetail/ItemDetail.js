import { Counter } from '../ItemCount/ItemCount';
import './ItemDetail.css';


export const ItemDetail = ({item}) => {

    return (
        <>
            <div className="card">
                <img className="img-alimento" src={item.img}/>
                <h3 className="name">Alimento: {item.name}</h3>
                <h4 className="description">{item.description}</h4>
                <h4 className="price">Precio: ${item.price}</h4>
                <Counter stock="20" initial="1"/>
            </div> 
        </>
    );
};

export default ItemDetail;
