import { Counter } from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const ItemDetail = ({id, img, name, description, price}) => {
    const [flag, setFlag] = useState(true);
    const desmontar = () => {
        setFlag(false);
    };
 
    return (
        <>
        <div className="container-fluid" key={id}>
            <div className="row">
                <div className="col-lg-4 alimento">
                    <img className="img-alimento-detail" src={img}/>
                </div>
                <div className="col-lg-8 texto">
                    <h3 className="name">Alimento: {name}</h3>
                    <h4 className="description">{description}</h4>
                    <h4 className="price">Precio: ${price}</h4>
                    {flag ? (<Counter stock="20" initial="1" desmontar={desmontar} />) : (<Link to="/cart">
                                                                    <button className="btn btn-dark">Ir al carrito</button>
                                                                    </Link>) }
                </div>
            </div>
        </div>


        </>
    );
};

export default ItemDetail;
