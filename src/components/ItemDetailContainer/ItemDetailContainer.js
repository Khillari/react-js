import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import './ItemDetailContainer.css';
import ProductosApi from '../API/productos.json';
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const {itemId} = useParams();
    const [items, setItems] = useState();

    const getItem = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
            if (data) {
                resolve(data);
            }else {
                reject("Ha ocurrido un error");
            }
        }, 2000);
    });

        useEffect(() => {
            getItem(ProductosApi)
            .then((result) => {setItems(result.find((detail) => detail.id === Number(itemId)));})
            .catch((err) => console.log(err));
        }, [itemId]);

    return(
        <>
        <div className="contenedorCard">
            {items &&
                        <ItemDetail id={items.id} 
                        img={items.img} 
                        name={items.name} 
                        price={items.price} 
                        description={items.description} />}
        </div>
        </>
    )
}

export default ItemDetailContainer;