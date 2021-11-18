import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import ProductosApi from '../API/productos.json';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { getFirestore } from "../../Firebase/Index";
import { doc, getDoc, collection, query, where, getDocs} from "firebase/firestore";

    export const ItemListContainer = (props) => {

        const [products, setProductos] = useState([]);
        
        const {categoryId} = useParams ();

        useEffect(()=> {
            const db = getFirestore();
            const q = query(collection(db, "items"));
            
            if (!categoryId) {
                getDocs(q).then((snapshot) => {
                    setProductos(snapshot.docs.map((doc) => doc.data()));
                });
            }else {
                const q = query (
                    collection(db, "items"),
                    where("category", "==", categoryId)
                );
                getDocs(q).then((snapshot) => {
                    setProductos(snapshot.docs.map((doc) => doc.data()));
                  });
                }
            }, [categoryId]);
                   

    return (<div>
                <h1>{props.texto}</h1>

                <div>
                    <div className="container">
                        {products && products.map((product) =>         
                            <ItemList product={product} key={product.id}/>)}       
                    </div>
                </div>

            </div> 
        )   
}