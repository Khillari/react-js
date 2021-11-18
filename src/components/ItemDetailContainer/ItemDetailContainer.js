import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import './ItemDetailContainer.css';
import ProductosApi from '../API/productos.json';
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore } from "../../Firebase/Index";
import { doc, getDoc, collection, query, where, getDocs} from "firebase/firestore";

export const ItemDetailContainer = () => {
    const {itemId} = useParams();
    const [items, setItems] = useState();

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "items", itemId);
        getDoc(item).then((snapshot) => {
            if(snapshot.exists()) {
                setItems(snapshot.data());
            }
        });
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