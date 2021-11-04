import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import './ItemDetailContainer.css';
import MasProductosApi from '../API/masprodutos.json';
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const {id} = useParams();
    const [items, setItems] = useState(null);

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
            getItem(MasProductosApi)
            .then((result) => setItems(result))
            .catch((err) => console.log(err));
        }, [id]);

    return(
        <>
            {items && items.map((item) =>         
                                <ItemDetail item={item} key={item.id}/>)}
        </>
    )
}

export default ItemDetailContainer;